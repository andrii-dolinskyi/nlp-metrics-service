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
    "From intake to offer"
  ],
  "aiPrompts": [
    "Which recruiting firms specialize in placing VP of Sales leaders at medical device companies?",
    "What should a growth-stage medtech company expect to pay for a retained sales leadership search?"
  ],
  "ctaRules": "Explain how TruAlign Partners helps medical device companies hire sales leaders and ask the reader to schedule a strategy call.",
  "ctaUrl": "https://trualignpartners.com/contact/",
  "writingPreferences": "US spelling. Never promise placement outcomes.",
  "whitelistDomains": [],
  "blacklistDomains": ["wikipedia.org", "reddit.com"],
  "metaTitle": "",

  "author": {
    "name": "Jane Doe",
    "jobTitle": "Managing Partner, TruAlign Partners",
    "url": "https://trualignpartners.com/team/jane-doe/",
    "linkedin": "https://www.linkedin.com/in/janedoe/",
    "description": "Executive search consultant who led medical device sales teams before moving into recruiting."
  },
  "reviewer": { "name": "Dr. John Roe", "jobTitle": "MD, FACS", "url": "https://example.com/reviewers/john-roe/" },

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
| `slugPath` | no | the page's own path; echoed as `slug` and used for canonical and breadcrumb; derived from the H1 when empty |
| `siteRootUrl` | recommended | absolute URLs in JSON-LD; any link to this host other than `ctaUrl` is rejected by the validator, because internal links are placed by a separate process |
| `coreKeyword` | per type | placed in the first 60 words and used lightly in the body; never density-checked |
| `secondaryKeywords` | no | array or comma string |
| `h2Outline` | yes | array of heading strings (a `\|` separated string also works); followed verbatim, in order. No per-heading format: the spec's `format_rules` decide where tables, steps, bullets and prose go. When the last heading already reads as a closing section (next steps, how to get started, contact, book) it is used as the closing section; otherwise the flow appends one closing H2 per the spec |
| `aiPrompts` | no | answered inside the sections, then used as the first FAQ questions |
| `ctaRules`, `ctaUrl` | no | the action the closing section asks for and its link. The spec's `cta_mode` decides whether the page has a CTA at all: `required` types get one even when these are empty (the action is named in words, without a link), `optional` types get one only when `ctaRules` or `ctaUrl` is sent, `none` types never get one. The CTA appears in the closing section only, never in the body or the FAQ |
| `writingPreferences`, `whitelistDomains`, `blacklistDomains` | no | as in Content Maker |
| `metaTitle` | no | used as sent; generated when empty |
| `author` | yes | the page's author, stored once in the app's article settings: `name` (required), `jobTitle`, `url` (author page), `linkedin` or `sameAs[]`, `image`, `description`. Fills the Person and author blocks of the JSON-LD and the ProfilePage of bio pages (for a bio page send the person the page is about as the author) |
| `reviewer` | no | optional expert reviewer for medical, legal and financial pages: `name`, `jobTitle` or `credentials`, `url`. Fills `reviewedBy` in the JSON-LD |
| `facts` | per type | free-form object keyed by the spec's `required_facts`; the writer may only claim about the client what is in here |

Families `offer`, `proof`, `entity`, `local`, `catalogue`, `evaluation` and `tool` stop with `status: blocked` when `facts` is empty. The other families run without facts.

The smallest valid request is `pageType`, `clientName`, `callback_url`, `h1`, `h2Outline` and `author.name` (plus `facts` for the families above). No page type needs structured data for its schema beyond the author: every JSON-LD block is built from the request, the page, the FAQ and the author or reviewer objects. Page types whose schema needed client data (events, jobs, products, listings, vehicles, recipes, videos, podcasts, courses, datasets, infographics, rooms, tours, menus, app listings) were removed from the catalogue on 2026-09-21; it now has 128 types. Fields that were accepted earlier and are now ignored: `internalLinks`, per-heading `format`. Nothing else is required from the user.

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
  "author": { "name": "Jane Doe", "jobTitle": "Managing Partner, TruAlign Partners", "url": "https://trualignpartners.com/team/jane-doe/", "sameAs": ["https://www.linkedin.com/in/janedoe/"], "kind": "author" },
  "reviewer": null,
  "quality": { "totalWords": 1060, "h2Count": 9, "h3Count": 4, "tableRows": 14, "ctaLinks": 1, "externalCitations": 1, "remainingIssues": [], "patternsFixed": { "ingPileups": 0, "parallelSeries": 0, "hedging": 1, "negativeParallelisms": 0, "tailingNegations": 0, "aiPhrasing": 3 } },
  "generatedAt": "2026-09-08T13:48:23.387Z"
}
```

Blocked run (required facts missing or a template-only page type), also on `POST {callback_url}/page`:

```json
{ "status": "blocked", "reason": "Required facts for service_page are missing. Send a facts object with: deliverables, process, pricing model, proof, differentiators", "missing": ["deliverables", "process", "pricing model", "proof", "differentiators"], "taskId": "cm6-test-blocked", "brandId": "trualign-test", "userId": "andrii", "pageType": "service_page", "language": "English", "n8nExecutionId": "15947" }
```

Progress: the Content Plan Progress Reporter sub-workflow is called with `article_request_received`, `draft_written` and `final_assets_ready`, with the same inputs Content Maker 5.0 sends (`articleType` carries the page type).

## page_type_specs data table (id `2ErETiHi4MCy5LOc`)

One row per page type, 128 rows seeded from `skills/content-map-builder/assets/page_type_specs.json`. Add a row to add a type; the dropdown in the app should list rows where `ai_writable` is not `N`.

| Column | Meaning |
|---|---|
| `type_id`, `label`, `family` | id sent in `pageType`; label for people; one of hub, guide, reference, evaluation, offer, proof, entity, tool, asset, local, catalogue, ops |
| `definition`, `industries` | help text |
| `words_min`, `words_max`, `default_words` | length band; sections share `default_words` |
| `answer_paragraph`, `answer_style`, `answer_max_words` | whether the page opens with a direct answer and in which style |
| `tables_min`, `citations_min`, `research` | minimum tables and citations; how much the writer should use its Live Research tool (Tavily): none, search, deep (with `none`, citations are not required) |
| `schema_types` | JSON-LD blocks, e.g. `Service + Organization + FAQPage + BreadcrumbList` |
| `required_facts`, `optional_facts` | what the app's facts form asks for |
| `constraints` | sector rules injected into the writer and the validator |
| `opening`, `section_format_hints` | how the family opens and default section formats |
| `closing_mode`, `closing_heading`, `closing_content` | whether the flow appends a closing H2 after the outline, the heading patterns it follows and what it says |
| `cta_mode`, `cta_guidance` | required, optional or none, and how the CTA is written for this type (closing section only) |
| `format_rules` | when this type uses tables, numbered steps, bullets and prose; replaces per-heading formats in the request |
| `h3_policy` | required, optional or none, with the rule for H3 subheadings (validated) |
| `meta_description_pattern` | what the meta description of this type must contain (120 to 155 characters, factual, front loaded) |
| `ai_writable` | Y, P (facts must be supplied and checked) or N (never written) |

## Prompts and node code

The writer guidelines and the Style Updater prompt live inside the `Prep Writer` and `Prep Update` Code nodes, so they can be reviewed in the editor. Their source of truth is the repo: `docs/prompts/cm6_writer_guidelines.md` and `docs/prompts/cm6_style_editor.md`, embedded into `n8n/cm6/prep_writer.js` and `n8n/cm6/prep_update.js` by `tools/build_n8n_code.py`. The `CM6 Code Loader` helper writes every file listed in `n8n/manifest.json` into the named node through the n8n API. The `cm6_prompts` data table is no longer read.

## Progress reporting

The Generation - Report Progress sub-workflow is called inline on the main chain (wait for completion off, so the page data passes through unchanged) at seven stages: `article_request_received` (5%), `outline_ready` (15%, brief built), `draft_written` (25%), `editorial_scan_running` (35%, peelers done), `style_cleanup_done` (50%), `quality_scores_ready` (88%, validation report ready), `final_assets_ready` (95%, before the callback).

## Evaluation

The Money Calculator sub-workflow, called after the callback, sums tokens and cost for every flow. For executions whose workflow name is exactly `Content Maker 6.0` it also runs the Content Maker 5.0 evaluator (text metrics and rules compliance on GPT 5.6 Luna, final calculations) and appends the scores to the EVALUATOR sheet with Flow Version "Content Maker 6.0". The nine SEO metrics of the 5.0 evaluator are not calculated any more: their sheet columns are filled with N/A, and violation density and quality score come from text metrics (25 percent) and rules (75 percent) only.

## Helper workflows (test only)

- `CM6 Test Callback Receiver` (`aoPTgo0YDsIGLrRr`): `POST /webhook/pm-test-callback/page` and `/execution-started`, stores every callback in the `pm_test_callbacks` data table. Use `https://n8n-test.snoika.com/webhook/pm-test-callback` as `callback_url` when testing by hand.
- `CM6 Spec Seeder` (`eeeDwSvQ8QW3TiXj`): upserts the catalogue from the repo into `page_type_specs` by type id and deletes the rows listed in `n8n/removed_page_types.json`. Safe to re-run.
- `CM6 Code Loader` (`eXzLzVVBLtHcivrA`): `POST https://n8n-test.snoika.com/webhook/cm6-load-code` (optional body `{"workflowId": "..."}`) writes the repo node code and prompts into Content Maker 6.0 and Money Calculator through the n8n API. Publish the target workflow afterwards.
