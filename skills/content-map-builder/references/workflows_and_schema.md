# n8n workflows and run.json schema

## Workflows (instance: https://n8n-test.snoika.com)

All three are stateless: JSON in, JSON out, nothing stored in n8n. Trigger them through the n8n MCP (`execute_workflow` with the ID and the payload as the webhook body) or by POSTing to the production webhook URL once the workflow is published. Each HTTP node inside uses the "DataForSEO" basic-auth credential; the draft step uses the "Anthropic API" credential. Never expose these names in deliverables.

| Workflow | ID | Webhook path | Purpose |
|---|---|---|---|
| CM Measure (keyword metrics) | `Vg8LVZ3kjCjpiiBy` | `/webhook/cm-measure` | Bulk metrics per market |
| CM SERP Enrich (per-page research) | `a8MduRE8doH2VYHV` | `/webhook/cm-serp-enrich` | Per-page SERP + optional drafted outline |
| CM Site Audit (existing site) | `nuy0hIkic5XkVwPB` | `/webhook/cm-site-audit` | Existing site crawl, rankings, competitors |

### CM Measure
Payload: `{ "run_id": "...", "location_name": "Germany", "language_code": "de", "keywords": ["...", "..."] }`
Chunks 700 (labs overview), 1000 (Ads volume), 1000 (intent) internally. Returns one item:
```
{ run_id, location_name, language_code, measured_at, count,
  results: [{ keyword, in_labs_db, vol, vol_display, vol_labs, vol_ads, kd, yoy, cpc, competition,
              intent, intent_prob, intent_labs, monthly:[{year,month,search_volume}], serp_features:[...] }] }
```
`vol` = labs volume when present, else Ads volume. `vol_display` is "<10" under 10. `intent`/`intent_prob` come from the intent endpoint; `intent_labs` is the overview's label (use the endpoint's, note disagreements). Store the whole result under `run.json.measurements["<location_name>|<language_code>"]` keyed by keyword.

### CM SERP Enrich
Payload: `{ "run_id", "draft_outline": true, "pages": [{ "page_id", "keyword", "location_name", "language_code", "brief": { "h1", "angle", "page_type", "secondaries": [], "test" } }] }`
Send 15–25 pages per call. Returns:
```
{ run_id, count, mismatches:[page_id...],
  pages: [{ page_id, keyword, fetched_at, serp_ok, results_count, organic:[{pos,domain,url,title}], paa:[...],
            related:[...], ai_overview, ai_overview_sources:[...], featured_snippet, error,
            draft: { h2_outline, ai_prompts, fit:"fit|mismatch", fit_reason, paa_used, paa_dropped } | null }] }
```
`draft.fit == "mismatch"` means the keyword returns a different topic or audience than the brief — re-target the core keyword; do not keep the outline.

### CM Site Audit
Payload: `{ "run_id", "domain": "client.com", "location_name", "language_code", "max_pages": 300 }`
Returns domain_metrics (organic keywords, traffic estimate, top-3 count, backlinks, referring domains, domain rank), `ranked_keywords` (up to 500: keyword, vol, kd, intent, position, url), `competitors` (20 organic competitors with intersections), and `pages` (every sitemap URL with title, description, h1[], h2[], word_count, internal/external link counts, canonical, and `ranking_keywords` for that URL). If no sitemap is found it audits the homepage only and says so in `sitemap_note`.

### Failure handling
Every HTTP node continues on error; a failed chunk or page comes back with `error` set and empty data. Re-send only the failed keywords/pages. If a response is truncated by size, reduce the batch. Log each call in `log.md`: stage, market, count, failures.

## run.json schema

```
{
  "run_id": "cplusp-2026-09",
  "created": "2026-09-03",
  "client": {
    "name": "C+P Consulting", "domain": "cpluspconsulting.com",
    "offer": "...", "icp": "...", "test": "...",
    "rejection_rules": ["..."], "competitors": ["..."], "assumptions": ["..."],
    "proper_nouns": ["McQuaig", "Predictive Index", "Boston"],     // names that keep capitals in sentence-case headings (client, products, competitors, people, places)
    "custom_page_types": [ { "type_id": "grant_program_page", "family": "offer", "label": "Grant programme page", "default_words": 1000, "default_schema": "Grant + Organization + FAQPage + BreadcrumbList" } ],  // only when the catalogue has no fit
    "markets": [ { "location_name": "United Kingdom", "language_code": "en", "language_name": "English", "code": "EN", "primary": true },
                 { "location_name": "Germany", "language_code": "de", "language_name": "German", "code": "DE", "primary": false } ],
    "languages_enabled": true,
    "cadence": [4, 6, 8, 8, 10]            // pages per week, month 1..5+
  },
  "existing_site": { ...CM Site Audit output..., "page_status": { "<url>": "existing-strong|existing-thin|enhance|merge|redirect" } },
  "pillars": [ { "num": 1, "name": "PLM Strategy", "entity": "Entity to own: ...", "goal": "...", "glossary": false } ],
  "measurements": { "United Kingdom|en": { "<keyword>": { ...CM Measure result row... } } },
  "pages": [ {
    "page_id": "p001", "pillar_num": 1, "cluster": "1.1 Operating model",
    "wave": "Wave 1 (Months 1-2)", "pod": "Week 3", "priority_score": 80,
    "page_type": "pillar_hub", "url": "/insights/plm-strategy/", "status": "new",     // catalogue type_id from references/page_types.md (old labels such as "PILLAR HUB" still resolve)
    "core": { "keyword": "plm strategy", "vol": 10, "vol_display": 10, "kd": 26, "yoy": 29, "intent": "Informational", "intent_conf": "94%" },
    "loc": { "DE": { "keyword": "plm strategie", "vol": 10, "vol_display": 10, "kd": null, "yoy": null },
             "FR": { ... }, "IT": { ... } },
    "loc_candidates": { "DE": ["plm strategie", "..."] },
    "secondaries": "plm strategy consumer goods; product data strategy manufacturer",
    "words": 2500, "h1": "...", "meta": "...", "schema": "Article + FAQPage + BreadcrumbList + Organization",   // h1, meta and every H2 in sentence case
    "h2_outline": "A | B | C", "ai_prompts": "q1 | q2 | q3", "cta": "...", "answer_block": "...",
    "links_out": ["/services/plm-consulting", "..."],
    "notes": "...", "serp": { ...CM SERP Enrich page result... }, "draft": { ... }
  } ],
  "plan": { "sections": [ { "title": "1. WHAT THIS IS", "rows": [ ["The plan", "..."], ["Scale", "..."] ] } ] },
  "keyword_research": { "findings": [ ["Label", "text"] ], "native_table": [ ["EN term", "DE term", vol, "FR term", vol, ...] ] }
}
```
`vol_display` is what the workbook shows (`<10` or the integer). `loc` keys are the language codes from `client.markets` (non-primary). Inbound links are computed by `assemble.py` from every page's `links_out`; do not store them.

## Language handling in the workbook

- Column "Core keyword" holds the primary-language keyword; its volume column is "<CODE> vol/mo" (e.g. "EN vol/mo", "AR vol/mo", "FR vol/mo").
- For each non-primary market in order: "<Language name> keyword", "<CODE> vol" (client) plus "<CODE> KD", "<CODE> YoY" (internal).
- One language → no language blocks at all. The rest of the layout is identical to the C+P reference.


## Body text in CM Site Audit
Every page item from CM Site Audit also carries: `body_text` (≤30,000 chars), `body_headings` ([[tag,text],…]), `body_words`, `body_method` (`direct` | `jina` | `tavily` | `crawlbase` | `BLOCKED`), `body_blocked` (bool), `body_tried` ([`"direct: http 403"`, `"jina: captcha"`, …]). Top level: `body_coverage` = {fetched, by_method, blocked_count, blocked:[{url, tried}], note}. Tiers: direct fetch with a browser UA → Jina Reader (credential "JinaAI API") → Tavily Extract (credential "Tavily API") → Crawlbase JS (credential "Crawlbase JS"). A tier is rejected on non-200, challenge/captcha page, <120 words, or a JS shell.

## Fallback: body-text fetch from the container
`scripts/fetch_site.py <run_folder>` — same ladder minus Crawlbase (curl → Jina Reader → Tavily if `TAVILY_API_KEY` → BLOCKED). Reads `audit_raw.json` URLs; writes `crawl/pages_full.json` ({url: {method, status, words, headings, text, tried}}) and `crawl/coverage.json`. Use only when the audit workflow did not return `body_text`.
