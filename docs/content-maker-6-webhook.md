# Content Maker 6.0 — webhook contract

Workflow: `MZUUvWCdCXlHKllN` on https://n8n-test.snoika.com (renamed from "Page Maker").
Endpoint: `POST https://n8n-test.snoika.com/webhook/page-maker` (production once published; `/webhook-test/page-maker` for test runs). The webhook answers immediately with "Workflow got started"; results arrive on the callback.

## Request

One request writes one page in one language. Everything about the page comes from the app; how the page type is written comes from the `page_type_specs` data table in n8n.

```json
{
  "taskId": "cm6-test-001",
  "brandId": "trualign-test",
  "userId": "andrii",
  "callback_url": "https://app.example.com/api/cm6",

  "pageType": "service_page",
  "targetLanguage": "English",
  "clientName": "TruAlign Partners",
  "clientDescription": "TruAlign Partners is a US executive search and recruiting firm for medical device companies ...",

  "h1": "Sales leadership recruiters for medical device companies",
  "slugPath": "/sales-leadership-recruiters/",
  "siteRootUrl": "https://trualignpartners.com",
  "coreKeyword": "sales leadership recruiters",
  "secondaryKeywords": ["sales leadership recruiting", "sales executive search firm"],

  "h2Outline": [
    "Director-to-VP sales leadership search",
    "Why device specialists matter",
    { "h2": "From intake to offer", "format": "table" }
  ],
  "aiPrompts": [
    "Which recruiting firms specialize in placing VP of Sales leaders at medical device companies?",
    "What should a growth-stage medtech company expect to pay for a retained sales leadership search?"
  ],
  "internalLinks": [
    { "url": "https://trualignpartners.com/medtech-executive-search/", "anchor": "MedTech executive search" }
  ],

  "ctaRules": "Explain how TruAlign Partners helps medical device companies hire sales leaders and ask the reader to schedule a strategy call.",
  "ctaUrl": "https://trualignpartners.com/contact/",
  "writingPreferences": "US spelling. Never promise placement outcomes.",
  "whitelistDomains": [],
  "blacklistDomains": ["wikipedia.org", "reddit.com"],
  "metaTitle": "",

  "facts": {
    "deliverables": ["Role definition workshop and written role scorecard", "Shortlist of three to five vetted candidates"],
    "process": "Intake in week one, shortlist within four weeks, offer by week ten on a typical search",
    "pricing_model": "Retained search, fee as a percentage of first-year target compensation, three installments",
    "differentiators": ["Every consultant has worked in medical device sales"],
    "proof": "Searches completed for cardiology and surgical robotics companies"
  }
}
```

| Field | Required | Notes |
|---|---|---|
| `taskId`, `brandId`, `userId`, `callback_url` | yes | as in Content Maker 5.0 (`callbackUrl` also accepted) |
| `pageType` | yes | a `type_id` from `page_type_specs` (dropdown = rows with `ai_writable` not `N`) |
| `targetLanguage` | yes | language name; default English; one run per language |
| `clientName` | yes | `clientDescription` optional but strongly recommended (`productDescription` also accepted) |
| `h1` | yes | used verbatim |
| `slugPath` | yes | the page's own path; echoed as `slug` and used for canonical and breadcrumb |
| `siteRootUrl` | recommended | absolute URLs in JSON-LD; also used to detect invented internal links |
| `coreKeyword` | per type | placed in the first 60 words and used lightly in the body; never density-checked |
| `secondaryKeywords` | no | array or comma string |
| `h2Outline` | yes | array of strings or `{h2, format}`; followed verbatim, in order; `format` is prose, table, steps, bullets or cards |
| `aiPrompts` | no | answered inside the sections, then used as the first FAQ questions |
| `internalLinks` | no | `{url, anchor}`; each placed exactly once in body text; empty list means none |
| `ctaRules`, `ctaUrl` | no | closing call to action; omitted when `ctaRules` is empty |
| `writingPreferences`, `whitelistDomains`, `blacklistDomains` | no | as in Content Maker |
| `metaTitle` | no | used as sent; generated when empty |
| `facts` | per type | free-form object keyed by the spec's `required_facts`; the writer may only claim about the client what is in here |

Families `offer`, `proof`, `entity`, `local`, `catalogue`, `evaluation` and `tool` stop with `status: blocked` when `facts` is empty. The other families run without facts.

## Callbacks

`POST {callback_url}/execution-started` at the start:

```json
{ "createdAt": "2026-09-08T13:36:48.000Z", "executionId": "15926", "workflowId": "MZUUvWCdCXlHKllN", "workflowName": "Content Maker 6.0", "taskId": "cm6-test-001", "brandId": "trualign-test", "userId": "andrii", "pageType": "service_page", "targetLanguage": "English" }
```

`POST {callback_url}/page` at the end. Same shape as Content Maker 5.0's `/blog-post` without the Strapi block, plus the page-specific fields:

```json
{
  "taskId": "cm6-test-001", "brandId": "trualign-test", "userId": "andrii", "n8nExecutionId": "15926",
  "status": "ok",
  "pageType": "service_page", "language": "English",
  "slug": "sales-leadership-recruiters", "slugPath": "/sales-leadership-recruiters/",
  "canonicalUrl": "https://trualignpartners.com/sales-leadership-recruiters/",
  "metaTitle": "Sales leadership recruiters for medical device companies",
  "metaDescription": "TruAlign Partners provides sales leadership recruiters for medical device roles, so you get a shortlist of three to five vetted candidates.",
  "articleTextMd": "# Sales leadership recruiters for medical device companies\n\n...",
  "faq": [ { "question": "...", "answer": "..." } ],
  "eeat": { "experience": { "score": 4, "evidence": "..." }, "expertise": { "score": 6, "evidence": "..." }, "authoritativeness": { "score": 3, "evidence": "..." }, "trustworthiness": { "score": 4, "evidence": "..." }, "overall": 4.3, "priorityFix": "..." },
  "jsonLd": [ { "@context": "https://schema.org", "@type": "Service", "...": "..." }, { "@type": "Organization" }, { "@type": "FAQPage" }, { "@type": "BreadcrumbList" } ],
  "schemaTypes": ["Service", "Organization", "FAQPage", "BreadcrumbList"],
  "schemaWarnings": [],
  "promptCoverage": [ { "prompt": "...", "answered": true, "addedByFixer": false } ],
  "quality": { "totalWords": 1060, "h2Count": 8, "tableRows": 14, "internalLinks": 3, "externalCitations": 1, "remainingIssues": [], "patternsFixed": { "ingPileups": 0, "parallelSeries": 0, "hedging": 1, "negativeParallelisms": 0, "tailingNegations": 0 } },
  "generatedAt": "2026-09-08T13:48:23.387Z"
}
```

Blocked run (required facts missing or a template-only page type), also on `POST {callback_url}/page`:

```json
{ "status": "blocked", "reason": "Required facts for service_page are missing. Send a facts object with: deliverables, process, pricing model, proof, differentiators", "missing": ["deliverables", "process", "pricing model", "proof", "differentiators"], "taskId": "cm6-test-blocked", "brandId": "trualign-test", "userId": "andrii", "pageType": "service_page", "language": "English", "n8nExecutionId": "15947" }
```

Progress: the Content Plan Progress Reporter sub-workflow is called with `article_request_received`, `draft_written` and `final_assets_ready`, with the same inputs Content Maker 5.0 sends (`articleType` carries the page type).

## page_type_specs data table (id `2ErETiHi4MCy5LOc`)

One row per page type, 145 rows seeded from `skills/content-map-builder/assets/page_type_specs.json`. Add a row to add a type; the dropdown in the app should list rows where `ai_writable` is not `N`.

| Column | Meaning |
|---|---|
| `type_id`, `label`, `family` | id sent in `pageType`; label for people; one of hub, guide, reference, evaluation, offer, proof, entity, tool, asset, local, catalogue, ops |
| `definition`, `industries` | help text |
| `words_min`, `words_max`, `default_words` | length band; sections share `default_words` |
| `answer_paragraph`, `answer_style`, `answer_max_words` | whether the page opens with a direct answer and in which style |
| `tables_min`, `citations_min`, `research` | minimum tables and citations; Tavily depth: none, search, deep (with `none`, citations are not required) |
| `schema_types` | JSON-LD blocks, e.g. `Service + Organization + FAQPage + BreadcrumbList` |
| `required_facts`, `optional_facts` | what the app's facts form asks for |
| `constraints` | sector rules injected into the writer and the validator |
| `opening`, `section_format_hints` | how the family opens and default section formats |
| `ai_writable` | Y, P (facts must be supplied and checked) or N (never written) |

## Helper workflows (test only)

- `CM6 Test Callback Receiver` (`aoPTgo0YDsIGLrRr`): `POST /webhook/pm-test-callback/page` and `/execution-started`, stores every callback in the `pm_test_callbacks` data table. Use `https://n8n-test.snoika.com/webhook/pm-test-callback` as `callback_url` when testing by hand.
- `CM6 Spec Seeder` (`eeeDwSvQ8QW3TiXj`): loads the catalogue from the repo into `page_type_specs`. Run once; re-running duplicates rows.
