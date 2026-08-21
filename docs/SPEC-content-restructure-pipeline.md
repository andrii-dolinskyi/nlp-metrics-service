# SPEC — Site Restructure & Topical Architecture Pipeline (n8n v1)

> **Status:** approved for implementation. n8n workflow construction proceeds
> stage by stage against this spec — first end-to-end test: **snoika.com**
> (test input in §12).

---

## 1. Scope, goals, non-negotiable rules

**Goal:** fully automated research pipeline: ingest a client website → produce
a restructured site architecture spec (Excel): pillars, clusters, every page
(existing + new) with action, page type, search intent, slug, core + secondary
keywords, meta title/description, H1/H2/H3, and a per-page internal-linking
plan. Test phase: few websites, up to 500–1,000 pages, in n8n. **No external
storage/DB accounts — n8n Data Tables only; the Excel file is the deliverable.**

Rules enforced at every stage:
- R1 **No generative LLM in decisions.** Pillars, clusters, page lists,
  actions: deterministic algorithms. LLM appears only in: extraction-only
  passes validated verbatim against source text (§5.2), the Stage-7
  consolidation pass under no-invention rules, and an annotating QA reviewer.
- R2 **No human gates.** Fully self-sufficient; humans only read the output.
- R3 **Relevance-first.** Every NEW page traces to a client offer entity
  (Tavily-researched offer + client-site entities + ICPs). Volume prioritizes,
  never gates offer-core topics.
- R4 **Evidence ledger.** Every output cell resolves to ledger rows (source,
  URL, text, date). Validator blocks unreferenced cells.
- R5 **Emergent counts.** Pillar/cluster counts are outputs of the algorithms,
  never inputs. Only `target_new_pages` is user-set, as a final priority
  cutoff ± tolerance.

## 2. Runtime: n8n, Data-Tables-only storage

Mandatory patterns that make 500–1,000 pages work in n8n:
- **All state in n8n Data Tables** (native, no external account needed). Nodes
  pass only IDs/counters between each other — never page content arrays.
- **Compact-storage rules** (Data Tables have project size limits): never
  persist raw HTML (parse in the same batch, keep only extracted fields);
  `main_text` truncated to first ~15k chars; SERP rows keep top-10 URLs +
  domains + PAA text only; embeddings stored as rounded 256-dim vectors
  (or skipped in TF-IDF mode). For the 150-page Snoika test this is far below
  any limit; at 1,000 pages it stays comfortably within bounds.
- Every fetch/API loop inside **SplitInBatches** (10–25) with workflow setting
  *Save execution data: errors only*.
- Analysis math in **Code nodes, vanilla JS only** (no npm imports — works on
  n8n Cloud and self-hosted alike): label-propagation communities on ≤1,000
  nodes and SERP overlap on ~3–8k keywords (after pre-grouping) are trivial
  at this scale.
- Each stage = its own sub-workflow chained via Execute Workflow; idempotent
  per `run_id + stage` (stage checks Data Table for existing rows, skips done
  work) — any stage re-runnable alone.
- Scale-up path (documented only): same logical tables in Postgres + Python
  service for 5,000-page sites.

## 3. Intake contract (Webhook trigger; later called by Snoika app)

```json
{
  "client_domain": "example.com",
  "target_new_pages": 150,          // 50–5000; soft: ±20 (<500) / ±100 (>=500)
  "competitor_domains": [],         // 0–5, merged with auto-derived
  "icps": ["CRM Manager in Fintech", "Head of Growth in B2B SaaS"],
  "gsc": {"available": true},
  "market": "US", "language": "en",
  "languages": [],                  // extra target languages (ISO 639-1)
  "brand_name": "Acme"
}
```
- `icps`: free-text strings, "role in industry" style. Parsed internally into
  role + industry by pattern split (" in ", "/", ",") — both halves used in
  relevance scoring and Reddit query building.
- **`products_services` is NOT an input** — researched automatically in
  Stage 0 via the **Tavily node** (below), so it is precise, not user-typed.
- **No `protected_url_patterns` input.** Protection is automatic in analysis:
  pages classified (URL pattern + schema type) as Legal/Privacy/Terms,
  Contact, About/Team, Careers, Checkout/Cart/Account, Login are never
  DELETE-candidates (KEEP/UPDATE only).
- `brand_name` replaces brand_suffix; title suffix is built as
  `" | {brand_name}"` only where mined SERP title patterns include a brand slot.
Validation on receipt: domain resolves, target in range, ≤5 competitors,
languages ISO-valid → `runs` Data Table row (config JSON, stage=INTAKE_OK) →
Stage 0 fires. Invalid → webhook 422 + reason.

## 4. Data Tables (n8n native — logical schema)

`runs` (run_id, client_domain, config, stage, timestamps) ·
`pages` (run_id, url, status, fetch_method, canonical, title, meta_desc, h1,
headings, main_text≤15k, word_count, schema_types, breadcrumbs, lang) ·
`link_edges` (run_id, from_url, to_url, anchor_text) ·
`fetch_ledger` (run_id, url, attempt, method, status, error) ·
`evidence` (run_id, evidence_id, source_type ∈ {tavily_offer, gsc,
dataforseo_kw, serp, paa, related_search, reddit, competitor_heading,
competitor_kw, sitemap, kg_entity}, source_url, raw_text, query, volume,
difficulty, cpc, serp_top10, lang, collected_at) ·
`entities` (run_id, entity_id, name, kg_id, salience, is_offer_core, sources) ·
`entity_attributes` (run_id, entity_id, attribute, evidence_count, sources) ·
`page_intents` (run_id, intent_id, keywords, total_volume, paa_ids,
intent_type, page_type, cluster_id, serp_domains) ·
`clusters` / `pillars` (with qualification audit JSON) ·
`page_map` (run_id, page_id, pillar_id, cluster_id, action, existing_url,
new_slug, page_type, intent_type, core_kw, secondary_kws, meta_title,
meta_desc, h1, h2s, h3s, links_add, links_remove, gap_notes, evidence_refs,
priority, review, hreflang_group, lang) ·
`serp_patterns` (run_id, intent_id, title_templates, meta_templates,
heading_style)

## 5. Stage specs

### STAGE 0 — Offer research (Tavily node)
Purpose: establish precisely what the client does and sells — the R3
relevance anchor — without asking the user.
1. Tavily search node, queries: `"{brand_name}" what does it do`,
   `site:{client_domain} services OR products OR pricing`,
   `"{brand_name}" reviews`, plus one query per ICP industry
   (`"{brand_name}" {industry}`).
2. Extraction-only LLM pass (§5.2 verbatim-validation rules) over Tavily
   results + the client's homepage/service/pricing pages (fetched in Stage 1,
   backfilled): output = `products_services[]`, each item with source URL +
   verbatim source sentence → `evidence` rows (`source_type=tavily_offer`).
3. Items not literally supported by a source sentence are dropped by the
   validator. Result feeds `is_offer_core` flagging in Stage 2.

### STAGE 1 — Total site capture + anti-blocking ladder
1. `robots.txt` → sitemaps (recurse indexes) ∪ BFS crawl from homepage
   (depth ≤5) ∪ GSC page list ∪ DataForSEO known URLs. Dedupe canonically.
2. **Fetch ladder** per URL, escalate on block signals (403/429/503, CAPTCHA
   markers, empty/JS-shell HTML), attempts logged to `fetch_ledger`:
   a. HTTP Request node, realistic Chrome headers, 1–2 req/s
   b. Rendered fetch (Browserless/Playwright container via HTTP, if available)
   c. **Crawlbase Crawling API** (account exists) — residential rotation,
      CAPTCHA clearing, JS rendering
   d. Google cache / Wayback (flag stale)
   Ladder exhausted ×2 → `unreadable` + reason.
3. **Coverage gate:** Stage 2 blocked until fetched ≥ floor (default 100%,
   min 98%).
4. Parse in-batch (Code node, vanilla JS regex/DOM string parsing): title,
   meta description, canonical, H1, ordered H2/H3, main text (boilerplate
   stripped), internal links + anchors, breadcrumbs (JSON-LD), schema.org
   types, redirect chains, page language. Persist parsed fields only (no HTML).
5. Optional embeddings via OpenAI embedding API (HTTP node — deterministic
   vector math, not generative); TF-IDF-only mode as fallback (pure Code node).

### STAGE 2 — Entity & topic extraction (BEFORE keywords) — n8n-runnable
Two-layer design, no npm dependencies:
1. **Layer 1 (pure Code node):** candidate terms via vanilla-JS heuristics —
   n-gram extraction (1–4 grams) over `main_text` with stopword filtering,
   capitalization/title-case detection, TF-IDF vs an embedded stopword+
   frequency list; weights H1×3, H2×2, body×1 → salience-ranked candidates.
2. **Layer 2 (extraction-only LLM, verbatim-validated):** LLM lists entities
   present in the text, returning each with its exact source substring; a
   Code-node validator drops any item whose substring does not literally occur
   in the source. This is extraction, not generation — provenance intact (R1/
   R4 safe). Layer 2 refines Layer 1; disagreements resolve toward Layer 1.
3. Canonicalization: Wikidata search API + Google Knowledge Graph API via
   HTTP nodes → `kg_id` (evidence `kg_entity`).
4. **Central entity & offer-core flags:** from Stage-0 `products_services` +
   ICP industries + homepage/service-page entities → `is_offer_core`.
5. **Attribute expansion** per core entity from competitor H2/H3s (Stage 3),
   PAA phrasings (Stage 4 backfill), Wikidata properties, Reddit language
   (Stage 5) → `entity_attributes` matrix. Topic candidates = entity ×
   attribute (× ICP industry where it splits intent).

### STAGE 3 — Competitor capture
Intake (≤5) ∪ auto-derived (DataForSEO `competitors_domain` + domains in ≥10%
of client keyword top-10s), cap ~8. Per competitor: sitemap → Stage-1 ladder
crawl → URL grammar + full H1/H2/H3 inventory (`competitor_heading` evidence)
+ Stage-2 entity extraction → coverage matrix; `ranked_keywords` →
`competitor_kw`. Gap = what they cover, client doesn't.

### STAGE 4 — Demand attachment: keywords, SERP waves, PAA recursion
1. Seeds = topic universe + client `ranked_keywords` + GSC queries →
   DataForSEO Labs `keyword_ideas`/`related_keywords`, volumes/difficulty/CPC.
   Deterministic junk filter (other brands' navigational, off-language),
   all drops logged.
2. **Wave 1:** top-10 SERP per topic head term (DataForSEO SERP Advanced or
   Serper): URLs+domains, PAA verbatim, related searches, SERP features,
   ranking page types.
3. **Wave 2 (breadth):** PAA recursion (re-query each PAA, harvest its PAAs)
   + related searches per topic until new-unique yield <10%/iteration or
   budget cap — this exhausts what users ask around each topic (thousands of
   PAA/SERP rows).
4. **Wave 3:** validation SERPs only where Stage-6 signals conflict.
Per-run SERP budget from config, spent ∝ topic volume; skips logged.

### STAGE 5 — Social research (Crawlbase)
**Reddit:** Crawlbase structured scrapers `reddit-serp` (entity/attribute term
× ICP-industry qualifier), `reddit-subreddit` (subreddits per ICP industry),
`reddit-post` (thread+comments JSON). Keep question-form/pain-point phrasings
appearing ≥2× independently → `reddit` evidence (real ICP language; zero-
volume-but-real demand). **LinkedIn: dormant module** (auth-walled, ToS-risky,
duplicates Reddit+PAA signal; activate only for B2B clients with thin Reddit
coverage).

### STAGE 6 — Formation & decisions (deterministic core)
**6.1 Page intents:** embedding/TF-IDF pre-group → SERP overlap (|shared
top-10 URLs|/10 ≥ 0.45) → same page intent (keywords, summed volume, dominant
page type, owned PAAs). **PAA anti-cannibalization:** PAA groups (answer-URL
overlap + text similarity) bind to exactly ONE owning page; other PAAs of the
group → that page's H2/H3 evidence, never separate pages.
**6.2 Pillars = qualified core entities:** (a) `is_offer_core` mandatory;
(b) ≥8 page intents (near-misses merge into nearest entity by attribute
overlap); (c) demand ≥ market-scaled floor OR offer-centrality override.
Audit trail → methodology sheet. **Count is discovered.**
**6.3 Clusters** = attribute families within a pillar (lemma-matched grouping
+ intra-pillar SERP-domain similarity); ≥3 intents or fold into general
cluster. **Counts discovered.**
**6.4 Intent typing & coverage — two separate constraints:**
- Uniqueness at page-intent level: each SERP-defined group → exactly one page.
- Coverage at intent-type level: each intent type with evidenced demand in a
  cluster has ≥1 page. **A cluster may hold many same-type pages (7+
  informational pages answering different question groups) — the count comes
  from how many distinct page intents the data produced, never a quota.**
Pillar rollup: clusters together span the funnel where demand is evidenced;
holes → NEW. Matrix ships as an output sheet.
**6.5 Existing-site map:** link-graph communities (weighted highest — clusters
live anywhere, not one nav folder) + content clustering + URL/breadcrumb
(weak vote); disagreements → `misplaced` (linking-only UPDATE). Low modularity
→ demand map authoritative. **Existing-pillar detection:** word_count ≥~1,800
AND out-links to ≥K cluster-topic pages AND H2s span ≥Y% of the entity's
attributes.
**6.6 Pillar hub pages are first-class rows:** detected existing (KEEP/UPDATE)
or best-candidate promotion or **NEW pillar page**: `page_type=Pillar`,
**2,500–4,000 words target**, H2 section per cluster linking into it, slug
`/{pillar-slug}/`, linking per 6.8.
**6.7 Reconciliation table:** match existing pages to intents (ranking kw ∩
intent kw + similarity to centroid + slug terms):

| Condition | Action |
|---|---|
| 1:1 match, gap < T | KEEP |
| 1:1 match, gap ≥ T | UPDATE (gap_notes list exact fixes) |
| ≥2 pages → same intent | MERGE (canonical = GSC clicks + in-degree; rest redirect) |
| 1 page → ≥2 intents | SPLIT |
| No intent, ~0 impressions 16mo, ≤1 in-link, no rankings | DELETE-candidate (+redirect target) |
| Auto-protected type (Legal/Contact/About/Careers/Checkout/Account/Login) | never DELETE |
| Intent with no page | NEW |

Gap score: missing evidence-backed H2 coverage % · position deficit ·
internal-linking correctness · meta checks. NEW list ranked (relevance ×
demand × feasibility), cut at target ± tolerance; shortfall reported.
**6.8 Internal-linking plan — every page incl. existing:** pillar hub ↔ all
cluster pages (bidirectional), each cluster page → 1–3 lateral siblings
(attribute distance), anchors = destination's entity/attribute phrase from
ledger; pillar links down from matching H2 sections. Existing links diffed →
`links_add` / `links_remove` (URL + anchor).

### STAGE 7 — Assembly & bounded-LLM consolidation
**7.1 SERP pattern mining (primary generator):** per intent, tokenize top-10
ranking titles into skeletons ({kw},{modifier},{year},{brand},{number},
separators) → frequency-ranked templates; same for meta descriptions and
heading style (question vs noun-phrase ratio, H2 counts). **Our titles/metas/
headings must instantiate mined templates — written the way ranking pages
demonstrably write theirs.**
**7.2 Deterministic assembly:** slug from site URL grammar; core kw = intent
top-volume; H1 = top evidence variant in dominant skeleton; H2s = owned PAAs
verbatim + competitor heading concepts on ≥2 top-10 pages + Reddit ≥2×,
ordered by ranking-page prominence then volume; H3s = PAA follow-ups +
co-occurring sub-headings; title ≤60 chars, description 150–160.
**7.3 LLM consolidation (single permitted generative pass):** input = page's
ledger rows + mined templates ONLY; may reorder/merge/normalize for
readability; MUST NOT introduce numbers/claims/entities/terms absent from
input; must stay in a mined template. Code-node validator diffs output tokens
vs input set → violations get deterministic fallback. QA reviewer annotates
`review` (never blocks).

### STAGE 8 — Languages / i18n (when `languages[]` non-empty)
Translated pages = **new indexable pages** at `/de/{localized-slug}` etc.,
**self-referencing canonicals** (never canonical → original), tied by
**hreflang** incl. x-default. Slugs/titles/metas localized, core kw validated
per language via DataForSEO volume lookup; pillar head terms SERP-checked per
market (budget-capped) → `localize_review` flags. GEO note in methodology:
AI engines cite language-local content; pages specced "localize, don't
machine-translate". Output rows carry `lang` + `hreflang_group`.

### STAGE 9 — Output (Excel built in n8n)
Excel generation: n8n Spreadsheet/Convert-to-File node produces the data;
row highlighting via a final Code node emitting xlsx XML with fill styles
(or the community xlsx node if installed): UPDATE yellow · NEW green ·
DELETE-candidate red · KEEP none. Workbook sheets:
1. `site_structure` — row per page (all languages): pillar | cluster | action
   | existing_url | new_full_slug | page_type | search_intent | lang |
   hreflang_group | core_kw | secondary_kws | volume | meta_title |
   meta_description | H1 | H2s | H3s | word_count_target | gap_notes |
   evidence_refs | priority | review
2. `internal_linking` — page | add/remove | target_url | anchor_text | reason
3. `intent_coverage_matrix` — clusters × intent types (counts + demand)
4. `evidence` — referenced ledger rows
5. `languages` — hreflang groups (when applicable)
6. `methodology` — pillar audit, thresholds, modularity, budget spend, drops,
   shortfalls
Delivery: file returned via webhook response / emailed / saved to the
configured n8n binary output — no external storage account required.

## 6. Page-type taxonomy (assigned from SERP evidence + schema markup)
Homepage · Service · Product · Product Category/Collection · Pricing ·
Comparison (X vs Y) · Alternatives · Listicle/Best-of · How-to Guide ·
Tutorial · **Pillar/Hub** · Glossary/Definition · FAQ · Case Study ·
Portfolio/Work · Reviews/Testimonials · Tool/Calculator · Template/Checklist ·
Statistics/Research · News/Update · Location/Local landing · Industry landing
· Integration page · Documentation/Help · Video/Webinar · Ebook/Whitepaper ·
Landing page (campaign) · About/Team · Contact · Legal · Careers · Blog
article. Rule: majority type among the intent's top-10 ranking URLs (URL
pattern + schema.org + title skeleton), constrained client-side (transactional
intents on offer-core entities → Service/Product family, never Blog).

## 7. Config defaults
SERP overlap same-page ≥0.45 · MIN_INTENTS/pillar 8 · min cluster 3 · fetch
floor 100% (min 98%) · PAA recursion stop <10% new yield · competitor cap 8 ·
gap threshold T=25 · heading floors (competitor ≥2/top-10, Reddit ≥2×) ·
tolerance ±20/±100 · SERP budget per tier.

## 8. Cost & runtime
150-page Snoika test: crawl ≈10–20 min · ~1–3k keyword lookups + 400–1,200
SERPs + PAA recursion ≈ **$5–15** · Crawlbase within free tier · LLM passes
≈ $1–3 · wall-clock ≈ 1–2 h unattended. 1,000-page site: $15–50, 2–5 h.

## 9. n8n build map
WF-A Intake (Webhook→validate→runs row) · WF-B Stage 0+1 (Tavily + crawl +
gate) · WF-C Stage 2+3 (entities, competitors) · WF-D Stage 4 ∥ WF-E Stage 5
· WF-F Stage 6 (Code nodes + Data Tables) · WF-G Stage 7+8+9 (assembly, i18n,
Excel, delivery webhook). Build per n8n MCP sequence (SDK reference → best
practices → search_nodes → get_node_types → code). Credentials: DataForSEO,
Serper (optional), Crawlbase, Tavily, Google (GSC OAuth), LLM/embedding
provider.

## 10. Test plan
1. Stage 1 vs snoika.com incl. any bot-protected page → 100% coverage, ladder
   methods logged.
2. Stage 0+2: Tavily offer list matches reality (services above); central
   entity + offer-core flags correct; extraction validator drops nothing
   legitimate / passes nothing non-verbatim.
3. Stage 6: pillar audit trail readable; 5 clusters hand-verified on SERP
   overlap; coverage matrix shows multiple same-type pages where data
   supports them; each PAA group owns exactly one page; auto-protection
   catches Legal/Contact/About.
4. Pillar pages: existing hubs detected; NEW pillar rows carry 2,500–4,000
   word target + section-link plan.
5. Title/meta conformance: 100% instantiate mined templates; LLM diff shows
   zero invented tokens (R1/R4 validators green).
6. Full unattended Snoika run (§12) → Excel with highlighting, link lists on
   every page, counts within tolerance.

## 11. Dormant modules
LinkedIn research · GEO/AI-prompt citation testing · content briefs ·
publishing integrations · recurring re-runs · Python/Postgres scale-up.

## 12. Test input — Snoika (first E2E run)
```json
{
  "client_domain": "snoika.com",
  "target_new_pages": 150,
  "competitor_domains": [],
  "icps": [
    "Founder in B2B SaaS",
    "Head of Growth in Fintech",
    "Marketing Director in E-commerce"
  ],
  "gsc": {"available": true},
  "market": "US",
  "language": "en",
  "languages": [],
  "brand_name": "Snoika"
}
```
Expected Stage-0 offer entities (sanity reference, from Snoika positioning):
AI visibility / GEO-LLM discoverability, SEO content publishing, programmatic
SEO, Reddit/community strategy, backlinks, inbound lead generation. Tolerance
±20 applies (130–170 new pages); competitor set auto-derived from co-ranking
domains.
