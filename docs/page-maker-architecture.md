# Page Maker 2.0 — architecture for map-driven page generation

Status: proposal for review before the n8n workflow `MZUUvWCdCXlHKllN` ("Page Maker") is changed.
Inputs reviewed: the TruAlign Partners content map (269 pages, 13 pillars, 13 page types, 2,480 planned internal links), the content-map-builder method, and the current Page Maker workflow (57 nodes, last edited 2026-09-08).

## 1. Where we are

**The content map already carries almost everything a page needs.** Per page: pillar, cluster, wave, pod, priority, page type, URL slug, core keyword with measured volume and intent, cleaned secondaries, words, H1, meta title, schema, a researched H2 outline, 3–4 target AI prompts, the primary CTA, and an explicit `Internal links OUT` list. Per site: URL convention, existing-page dispositions (enhance / rewrite / merge / unchanged), excluded link targets, cadence, and the nine linking rules.

**Page Maker today is a single-page function with no memory of the plan.** It takes one flat webhook payload (`pageType`, `clientName`, `callback_url` required; `coreKeyword` for most types; type-specific facts such as `deliverables`, `metrics`, `featureFacts`, `competitors`), writes in English, runs five AI-pattern detectors and a repair pass, validates, optionally translates with DeepL, generates FAQ, metadata and JSON-LD, POSTs the result to `{callback_url}/page`, and marks a row `written` in a Google Sheet.

The gaps that matter for a content map:

| Gap | Effect today |
|---|---|
| No notion of pillar / cluster / wave / pod / page_id | Hub and sibling links are guessed from a sheet's `hub` and `topics` columns; if the page has no sheet row, it gets no hub or sibling links at all |
| `links_out` from the map cannot be passed as mandatory | `linkTargets` are appended after heuristic picks, truncated at `linkMax`, anchored with the last URL segment, and not required to appear |
| No planned-vs-published distinction | Registry filter is only `status != retired`; a planned page is linked as if live, producing dead links on publish day |
| Section blueprint is hardcoded per type | The map's researched H2 outline and AI prompts cannot override it |
| 18 Page Maker types vs 13 map types | No `cluster hub`, `supporting article` or `author` type; `Solution page` and `Comparison page` have no clean match |
| Brand context is one free-text string | ICP, the audience test, CTA, authors, glossary and proof are not structured inputs |
| Quality gates run on the English draft only | Translated pages are never style-checked; FAQ and meta are generated from the translation |
| Registry is a Google Sheet read with a broken range | A failed read is swallowed and the page passes validation with zero links |
| `Revalidate` does not revalidate | A repaired page is never re-checked |

## 2. Target architecture

Five stores and six workflows. The stores are n8n Data Tables (the `cp_*` tables from the content-plan pipeline set the precedent); a Google Sheet can remain as a human view exported from them.

### Stores

| Store | Scope | Holds |
|---|---|---|
| `pm_sites` (Site Profile) | one row per client site | identity, offer, ICP + audience test, industry pack id, offer model, URL convention, languages/markets, authors, CTA map by page type, writing preferences, domain white/black lists, link exclusions, facts library (services→deliverables/timeline/price band, proof, certifications, metrics, features), CMS/callback target |
| `pm_industry_packs` | one row per category, reusable across clients | vocabulary (preferred / avoid), compliance rules and disclaimers, default source lists, per-type blueprint overrides, research query templates, reader archetypes |
| `pm_pages` (Page Registry) | one row per planned URL per language, imported from the content map | page_id, site_id, lang, hreflang_group, pillar_id, cluster_id, page_type, slug_path, published_url, h1, core_kw, secondaries, outline, ai_prompts, cta, words, schema, wave, pod, priority, links_out (page ids), status, replaced_by, redirect_to, cms_id, existing_url |
| `pm_page_versions` | one row per generation | page_id, version, master markdown (with link tokens), rendered markdown, faq, meta, json-ld, quality report, models/cost, approved flag |
| `pm_link_ledger` | derived, one row per link instance | source_page_id, target_page_id, anchor, section, state (resolved / pending / dropped / redirected), resolved_url, last_rendered_at |

### Workflows

| Workflow | Trigger | Job |
|---|---|---|
| **Map Importer** | manual / webhook with the workbook or run.json | Creates or diffs `pm_pages` from the content map: new rows → `planned`; removed rows → `cancelled`; changed `links_out` → ledger diff; existing-site pages from the audit → `published` with `existing_url` |
| **Pod Runner** | schedule (Monday) or manual with `pod` | Pulls the pod's rows in order (hubs first), calls Page Maker per page with concurrency 2–3, records failures, never skips a blocked page silently |
| **Page Maker** (refactor of `MZUUvWCdCXlHKllN`) | webhook, `mode: map` with `{site_id, page_id}` or `mode: adhoc` with today's flat payload | Resolves every input through the stack (request → registry row → site profile → industry pack → type default), builds the link plan from `links_out` as `page:` tokens, writes, detects, repairs, validates (and revalidates), stores a version |
| **Publisher / Link Resolver** | called by Page Maker after approval, and by the Link Pass | Renders tokens against the registry, writes the ledger, upserts the page in the CMS by slug, marks the row `published` when the CMS confirms |
| **Reconciler + Link Pass** | CMS publish event when available, plus a scheduled check that fetches `published_url` | On every new `published` row: find ledger rows `pending` on that target, re-render each source, re-upsert. Replaces the manual Friday link pass |
| **Graph Audit** | weekly | Orphans, pages below their link minimum, anchor over-repetition, links to cancelled targets, hub inbound counts, three-click depth; emits a fix list for link injection |

### Flow

```
content map (xlsx / run.json)
        │ Map Importer
        ▼
   pm_pages  ◄──────────────────────────────┐
        │ Pod Runner (weekly pod)            │ status updates
        ▼                                    │
   Page Maker ──► pm_page_versions           │
        │ (master markdown with page: tokens)│
        ▼                                    │
   Publisher / Link Resolver ──► CMS ────────┤ publish event / URL check
        │                                    │
        ▼                                    │
   pm_link_ledger ◄── Reconciler + Link Pass ┘
        │
        ▼
   Graph Audit ──► link injection fixes
```

## 3. Page types across industries

Keep "page type" purely structural and put everything industry-specific into a separate layer. A page type defines budgets, section blueprint, schema and validation; it never knows the industry. Three layers refine it:

1. **Type default** — the registry that exists today in `Page Contract` (`S` and `BP`).
2. **Industry pack** — overrides section briefs where the vertical changes what a buyer expects (an industry page for a recruiter is "the roles hired in this segment"; for a SaaS vendor it is "the workflows this vertical runs"), adds vocabulary, compliance rules and default sources. Selected by `pm_sites.industry_pack`; falls back to `generic`.
3. **Offer model** on the site profile (`service_firm`, `saas`, `marketplace`, `ecommerce`, `consultancy`) — selects the blueprint variant for the conversion types (service, solution, industry, case study), because what the client sells changes those pages more than the vertical does.
4. **The page row** — the map's researched `H2 outline` overrides the blueprint outright when present; `ai_prompts` seed the FAQ writer; `words`, `schema`, `h1`, `meta_title`, `slug_path`, `cta` are authoritative and the Metadata Generator only fills gaps.

Resolution order for every field: request → page row → site profile → industry pack → type default.

### Type mapping (content map → Page Maker)

| Map type (words, schema) | Page Maker type | Change needed |
|---|---|---|
| PILLAR HUB (2500, Article+FAQPage+Breadcrumb+Organization) | `category_pillar` | words override; hub index block (see §5) |
| Cluster hub (1800, Article+FAQPage+Breadcrumb) | **new `cluster_hub`** | clone of `category_pillar` with 1500–2000 words, 6–8 H2, index block for its cluster |
| Deep-dive article (2000, +HowTo) | `guide` | words override; add HowTo JSON-LD when the outline is procedural |
| Supporting article (1400) | **new `article`** | 1200–1600 words, 5–7 H2; `answer_engine` is too narrow to reuse |
| Comparison page (1800, ItemList) | `head_to_head` (2 options) / `listicle` (3+) | raise `head_to_head` budget by override |
| Alternatives page (1600) | `alternatives` | none |
| Linkable asset (2200, Dataset) | `research_report` | none |
| Service page (1200, Service+Organization) | `service` | `deliverables` come from the site facts library |
| Solution page (1100, Service) | `use_case` with schema override `Service` | none beyond override |
| Industry page (1300) | `industry` (therapy area, technology) / `company_type` (stage, ownership) | map should say which |
| Case study (900, +CaseStudy) | `case_study` | `metrics` from facts library; approval gate before publish |
| Author page (1400, Person+ProfilePage) | **new `author`** | built from `pm_sites.authors`; no keyword requirement |
| Glossary term (450, DefinedTerm+Set) | `glossary_term` | `inDefinedTermSet` from the site's glossary path, not hardcoded |

Types with no map equivalent (`role`, `platform_feature`, `answer_engine`, `market`, `integration`, `tool_explainer`) stay for SaaS and own-site work. Recommendation: the content-map builder emits the Page Maker type id in a `pm_type` column from now on, so no mapping table lives in n8n.

## 4. Minimum information on input

### Once per site (Site Profile)

| Field | Required | Fallback if missing |
|---|---|---|
| client name, site root URL, primary language, markets | yes | none |
| what the client sells (1–3 sentences) | yes | none |
| ICP and the one-sentence audience test | yes | none — it is what stops generic pages |
| URL convention (trailing slash, directories) | yes | inferred from `slug_path` rows, flagged |
| at least one author (name, role, bio, URL) | yes | Article schema and rule 7 cannot be met; pages of type article/guide are blocked |
| CTA per page type (label + URL) | yes | from the map's `Primary CTA` column if present |
| CMS / callback target | yes | none |
| industry pack id | no | `generic` |
| offer model | no | `service_firm` |
| writing preferences, white/black lists, competitors, link exclusions | no | empty; the writer uses the industry pack defaults |
| facts library (services→deliverables/timeline/price band, proof, certifications, metrics, features) | per type | see hard gate below |
| existing pages (from CM Site Audit) | no | none; pages with `enhance`/`rewrite` cannot run without body text |

### Per page (from the map, one row in `pm_pages`)

Required: `page_id`, `page_type`, `slug_path`, `h1`, `core_kw`, `lang`, `pillar_id`, `cluster_id`, `links_out` (page ids), `wave`, `pod`.
Already in the map and strongly recommended: `meta_title`, cleaned `secondaries` (annotations such as "(70/mo, difficulty 31)" stripped, "vocabulary only" terms dropped), `outline`, `ai_prompts`, `cta`, `words`, `schema`, intent.
Optional: notes, `answer_block`, localisation columns.

### Per run

`site_id`, `page_id` or `pod`, `mode` (`write` | `rewrite` | `link_pass`), `callback_url` (or taken from the site profile), `dry_run`.

### Hard gate: type-specific facts

`service` needs deliverables, `case_study` needs metrics, `platform_feature` needs feature facts, `author` needs an author record, `listicle`/`alternatives` need competitors. When missing, the row goes to `blocked:missing_facts` and no model is called. Today the workflow throws; tomorrow it should record and move on so a pod does not stall.

## 5. Internal linking

### The mechanism: link by page id, resolve at publish

The writer never sees a real URL. The link plan is built from the page row's `links_out` and handed to the writer as pseudo-URLs with an anchor hint and a role:

```
- page:p042 (anchor: sales leadership recruiters, role: commercial, required)
- page:p017 (anchor: when to hire a VP of Sales, role: sibling)
- page:p003 (anchor: hiring a VP of Sales, role: pillar_up, required)
```

The writer emits ordinary markdown links, `[when to hire a VP of Sales](page:p017)`. Validation accepts only `page:` URLs that are in the plan, requires every `required` one, and rejects any other internal-looking URL. The master markdown stored in `pm_page_versions` keeps the tokens permanently.

The Publisher renders tokens against the registry at send time and again on every link pass:

| Target status at render time | Rendered as | Ledger state |
|---|---|---|
| `published` (new or existing page) | absolute URL from `published_url` | resolved |
| `planned`, `queued`, `written`, `in_review`, `approved` | plain text, anchor kept | pending |
| `deferred` (moved to a later wave) | plain text | pending |
| `cancelled`, no replacement | plain text | dropped — Graph Audit checks the source still meets its minimum |
| `cancelled` with `replaced_by` | link to the replacement if published, else pending on it | redirected |
| `merged_into` | as `replaced_by` | redirected |
| `redirected` (URL changed after publish) | new URL | resolved |
| excluded target (jobs, login, candidate profiles) | never enters a plan; validator rejects | — |

### The scenarios

- **Target planned, not written yet.** Token renders as plain text. The page reads naturally because the anchor is a real phrase. When the target publishes, the Link Pass re-renders every source with a pending link to it and re-upserts. No page ever links to a URL that does not exist, and the Friday link pass becomes automatic.
- **Target written but in client review.** Same as planned. Only `published` resolves.
- **Plan changes and the target will never be published.** Set `cancelled`. Tokens render as plain text forever; ledger rows become `dropped`. If a replacement exists, set `replaced_by` and the link follows it. If the source falls below its link minimum, Graph Audit proposes a substitute from the same cluster under the nine rules, and link injection applies it (below).
- **Slug changes before publish.** Nothing to do; tokens reference ids, not slugs.
- **URL changes after publish.** Registry gets `redirect_to`, CMS gets the 301, next link pass re-renders sources. Until then the 301 covers it.
- **Two pages merged.** The loser gets `merged_into`; its inbound tokens follow the winner.
- **Page re-targeted to a new core keyword.** The anchor hint in the registry changes; existing tokens keep their written anchor, and the audit flags anchors that no longer match the target's H1 for a link injection rewrite.
- **Existing pages (enhance / rewrite / merge).** Imported as `published` with `existing_url` so they are valid targets from day one. `mode: rewrite` passes the audit's body text as input and keeps the URL. Links into the old URL from live pages outside the map are left to the 301.
- **Hub pages published in week 1 with 60–90 planned outbound links.** Rules 1 and 2 (hub links to every page in its pillar or cluster) should not be prose. The template renders an "In this pillar" index block fed by the registry (published children only), and the Publisher regenerates it on each link pass. The hub body carries prose links to its top 6–10 pages. If the CMS cannot render a feed block, the Publisher appends the index section as markdown and regenerates it.
- **Glossary rule 6 (first use of a defined term links to its entry).** A deterministic post-processor, not the writer: for every glossary row (term, aliases, language), wrap the first occurrence in body text (outside headings, tables, the answer paragraph and existing links) in a token. Because the glossary sits in wave 3, most of those tokens would stay pending for months; the 61 glossary pages are the cheapest in the map, so publish them as an early batch instead.
- **Author rule 7.** A template block from the author record; the author page itself is a registry row so it is a valid target.
- **Cross-pillar links (rule 4, 1–2 per page).** Already in the map's `links_out`; nothing extra.
- **Map changes after pages are written.** The Importer diffs: added rows → `planned`; removed rows → `cancelled`; `links_out` additions → link injection on the source; removals → the token is unwrapped to plain text on the next render.
- **Link injection (adding a link to an already-written page).** First deterministic: if the target's anchor phrase already occurs in the body, wrap it. Only if not, a small model edit adds one sentence in the most related section. Never a full rewrite, never a change to numbers or other links.
- **Multi-language.** One registry row per (page, language) sharing an `hreflang_group`. Tokens resolve within the language only (rule 9). Each translation has its own status; a German page can be pending while its English original is live.
- **Orphans.** Graph Audit computes inbound from the ledger. Zero orphans stays a gate, but it is now checked against what is actually rendered, not what was planned.

## 6. Scenarios not yet on the list

1. **Facts the map does not carry.** The map gives structure and keywords; it has no deliverables, prices, metrics or feature claims. Those live in the site facts library, and a page without them is blocked, not hallucinated.
2. **Hubs written before their children.** Hub prose describes the cluster from the registry (children's H1, core keyword, one-line brief), so it stays true whatever the children later say.
3. **Case studies need written client approval.** Status `awaiting_approval` blocks publish; TruAlign's questionnaire already requires it.
4. **Regulated verticals.** Health, finance, legal, recruiting each need standing disclaimers and claim limits; the industry pack carries them and the validator checks for their presence.
5. **Quality gates on translations.** Run validation (and ideally the detectors) on the target-language text, and tell the FAQ and metadata models the language explicitly. Localised slugs and keywords come from the map's language columns, not from transliterating English.
6. **Idempotency and versions.** A re-run of a page creates version n+1; the Publisher sends the approved version, never the latest by accident. Today a re-run overwrites the sheet row and re-posts.
7. **Source of truth after publish.** If reviewers edit in the CMS, the master goes stale and a link pass would overwrite their edits. Either the CMS exposes read-back so the link pass does fetch → resolve tokens → upsert, or all edits happen before publish on the master. This is a decision, not a detail.
8. **Throughput and cost.** About seven model calls per page, 269 pages, pods of 6–15. The Pod Runner runs 2–3 pages in parallel, logs cost per version via the Money Calculator, and stops the pod on an error budget rather than burning through it.
9. **Pages requested outside the map.** They are inserted into the registry first, then written. Nothing is written that the registry does not know, or linking breaks.
10. **Blog articles and pages in one graph.** Content Maker 5.0 articles should use the same registry and token scheme so articles link to pages and pages to articles under the same rules.
11. **Anchor diversity.** Cap identical anchors per target; the link plan rotates between H1, core keyword and a short form.
12. **CTA and template blocks.** The map's `Primary CTA` is passed in the payload as `cta: {label, url}`; the CMS template renders it, along with author byline, breadcrumb and the index block.
13. **Registry store.** Move from the Google Sheet (broken `specifyRange`, silent empty reads) to n8n Data Tables, with a Sheet export for people.
14. **Cluster hubs and pillar hubs count toward "three clicks from home."** Graph Audit checks depth from the published navigation, not from the plan.

## 7. Decisions needed before the build

1. **CMS contract.** Does the Snoika blog system support upsert by slug, read-back of a page body, a publish event webhook, and template-rendered blocks (index block, CTA, author)? The Reconciler's URL check covers the missing event; nothing covers missing upsert.
2. **Registry store.** n8n Data Tables (recommended) or keep Google Sheets.
3. **Unresolved link rendering.** Plain text with the anchor kept (recommended) or drop the sentence.
4. **Source of truth after publish.** Master markdown (edits before publish only) or CMS with read-back.
5. **Three new page types** (`cluster_hub`, `article`, `author`) and the content-map builder emitting `pm_type` directly.
6. **Glossary timing.** Publish the glossary as an early batch so rule-6 links resolve from the start.

## 8. Build sequence

| Phase | Deliverable |
|---|---|
| 1 | `pm_sites`, `pm_pages`, `pm_page_versions`; Map Importer from the xlsx / run.json; Page Maker `mode: map`, token link plan, outline override, real revalidate, version store |
| 2 | Publisher / Link Resolver, `pm_link_ledger`, Reconciler + Link Pass, CMS upsert |
| 3 | Industry packs and offer models, the three new types, glossary auto-linker, hub index block, Graph Audit and link injection |
| 4 | Multi-language rows, hreflang groups, post-translation quality gates |
