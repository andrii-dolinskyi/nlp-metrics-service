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
| `pageType` | yes | a `type_id` from `page_type_specs` (the dropdown lists every row) |
| `searchIntent` | yes | one of `informational`, `commercial`, `transactional`, `navigational` (a dropdown in the app). Parse Request rejects a request without it or with another value. It drives the writer brief (what the reader wants first, which formats carry the sections, how the page ends) and the meta description rules |
| `targetLanguage` | yes | language name as in Content Maker 5.0 (English name, e.g. "French", "German", "Japanese"); default English; one run per language. **Every text value in the request is sent in this language**, the way the app stores it. For a non-English run the flow translates those values to English with DeepL before Parse Request (`Translate Inputs?`, `DeepL Prep Inputs`, `Translate Inputs`, `Request EN`), writes and edits in English, then translates the page, meta description, FAQ and E-E-A-T back and restores the app's own `h1`, `h2Outline`, author and reviewer wording on the final page |
| `clientName` | yes | `clientDescription` optional but strongly recommended (`productDescription` also accepted) |
| `h1` | yes | used verbatim |
| `slugPath` | no | the page's own path; echoed as `slug` and used for canonical and breadcrumb; derived from the H1 when empty |
| `siteRootUrl` | recommended | absolute URLs in JSON-LD; any link to this host other than `ctaUrl` is rejected by the validator, because internal links are placed by a separate process |
| `coreKeyword` | per type | placed in the first 60 words and used lightly in the body; never density-checked |
| `secondaryKeywords` | no | array or comma string |
| `h2Outline` | yes | array of heading strings (a `\|` separated string also works); every heading appears on the page word for word, in this order; the writer may add H2 sections of its own between or after them when the reader needs a subject the outline misses (never instead of a supplied one). No per-heading format: the writer decides prose, steps, table or bullets per section from the heading, the search intent and its research, and puts at least two H3s under the H2 whose subject splits. When the last heading already reads as a closing section (next steps, how to get started, contact, book) it is used as the closing section; otherwise the flow appends one closing H2 per the spec |
| `aiPrompts` | no | answered inside the sections, used as the first FAQ questions, and returned word for word in `monitoringPrompts` |
| `ctaRules`, `ctaUrl` | no | the action the closing section asks for and its link. The spec's `cta_mode` decides whether the page has a CTA at all: `required` types get one natural CTA as the last sentence or two of the closing section, following `ctaRules` (named in words without a link when `ctaUrl` is empty); `none` types never get one. Never in the body or the FAQ, never forced (no urgency, no superlative) |
| `writingPreferences`, `whitelistDomains`, `blacklistDomains` | no | as in Content Maker |
| `metaTitle` | no | ignored since 2026-09-22: the page returns a meta description only |
| `author` | yes | the page's author, stored once in the app's article settings: `name` (required), `jobTitle`, `url` (author page), `linkedin` or `sameAs[]`, `image`, `description`. Fills the Person and author blocks of the JSON-LD and the ProfilePage of bio pages (for a bio page send the person the page is about as the author) |
| `reviewer` | no | optional expert reviewer for medical, legal and financial pages: `name`, `jobTitle` or `credentials`, `url`. Fills `reviewedBy` in the JSON-LD |
| `facts` | recommended | free-form object, any keys (deliverables, process, pricing, proof, team, locations, whatever the page needs); the writer may only claim about the client what is in here, and blends each fact into the section where it supports the point instead of listing them. No fact list is required per type; a commercial page with no facts is written without client claims |

The smallest valid request is `pageType`, `searchIntent`, `clientName`, `callback_url`, `h1`, `h2Outline` and `author.name`. No page type needs structured data for its schema beyond the author: every JSON-LD block is built from the request, the page, the FAQ and the author or reviewer objects. Page types whose schema needed client data (events, jobs, products, listings, vehicles, recipes, videos, podcasts, courses, datasets, infographics, rooms, tours, menus, app listings) were removed from the catalogue on 2026-09-21; it now has 128 types. Fields that were accepted earlier and are now ignored: `internalLinks`, per-heading `format`. Nothing else is required from the user.

## Callbacks

The final callback is one object whose parts stay separate: `articleTextMd` (the page), `metaDescription`, `faq` (array of five question and answer pairs, present only for page types whose spec has `faq_required` = Y; absent otherwise, and absent on an FAQ page whose questions sit in the body as H3s and feed the FAQPage block), `monitoringPrompts`, `eeat`, `jsonLd`, `author`, `reviewer`, `quality`.

`monitoringPrompts` is the seed list for the app's monitoring page: the prompts a person types into ChatGPT, Perplexity or Google AI Mode for which this page should be cited. Each entry has `prompt` (page language), `promptEn`, `source` and `branded`:

- `input`: every `aiPrompts` entry word for word as the app sent it, with its English rendering in `promptEn`;
- `h1`: one unbranded question behind the H1 with the core keyword, written by the Prompt Maker agent;
- `brand`: one question about the client on this subject, grounded in the page, `branded: true`.

Three to five prompts per page. The two generated ones are translated with the page for non-English runs.

On a non-English run the app's own wording is guaranteed in the output for: the H1 and every outline H2 (rewritten from the request after translation, on English runs too), the client name (translated to one English form for the writer, protected through DeepL with a `translate="no"` span carrying the original, so the page, meta description, E-E-A-T and prompts carry it exactly), the author and reviewer fields, and the JSON-LD `name`, `headline`, `serviceType`, `termCode` and organisation name. The core keyword is not forced, because inserting a fixed form into inflected languages breaks grammar; `quality.coreKeywordMentions` and `quality.clientNameMentions` report how often the exact original strings appear in the shipped page instead. `writingPreferences` reach the writer in English with the original wording appended, since translated instructions lose meaning. Nothing is merged into the page text, so the app stores and renders each part in its own template slot. For a non-English run all four text parts are in the target language and the H1 and H2s are the app's own wording. Every text field passes the `Clean Text` node before the callback: no HTML entities, no invisible characters, no em dashes, no semicolons in FAQ, meta or E-E-A-T lines, markdown intact.

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
  "metaDescription": "TruAlign Partners provides sales leadership recruiters for medical device roles, so you get a shortlist of three to five vetted candidates.",
  "articleTextMd": "# Sales leadership recruiters for medical device companies\n\n...",
  "faq": [ { "question": "...", "answer": "..." } ],
  "eeat": { "experience": { "score": 4, "evidence": "..." }, "expertise": { "score": 6, "evidence": "..." }, "authoritativeness": { "score": 3, "evidence": "..." }, "trustworthiness": { "score": 4, "evidence": "..." }, "overall": 4.3, "priorityFix": "..." },
  "jsonLd": [ { "@context": "https://schema.org", "@type": "Service", "...": "..." }, { "@type": "Organization" }, { "@type": "FAQPage" }, { "@type": "BreadcrumbList" } ],
  "schemaTypes": ["Service", "Organization", "FAQPage", "BreadcrumbList"],
  "schemaWarnings": [],
  "author": { "name": "Jane Doe", "jobTitle": "Managing Partner, TruAlign Partners", "url": "https://trualignpartners.com/team/jane-doe/", "sameAs": ["https://www.linkedin.com/in/janedoe/"], "kind": "author" },
  "reviewer": null,
  "quality": { "totalWords": 1060, "h2Count": 9, "h3Count": 4, "tableRows": 14, "ctaLinks": 1, "externalCitations": 1, "patternsFixed": { "ingPileups": 0, "parallelSeries": 0, "hedging": 1, "negativeParallelisms": 0, "tailingNegations": 0, "aiPhrasing": 3 } },
  "generatedAt": "2026-09-08T13:48:23.387Z"
}
```

Blocked run (required facts missing or a template-only page type), also on `POST {callback_url}/page`:

```json
{ "status": "blocked", "reason": "Required facts for service_page are missing. Send a facts object with: deliverables, process, pricing model, proof, differentiators", "missing": ["deliverables", "process", "pricing model", "proof", "differentiators"], "taskId": "cm6-test-blocked", "brandId": "trualign-test", "userId": "andrii", "pageType": "service_page", "language": "English", "n8nExecutionId": "15947" }
```

Progress: the Content Plan Progress Reporter sub-workflow is called with `article_request_received`, `draft_written` and `final_assets_ready`, with the same inputs Content Maker 5.0 sends (`articleType` carries the page type).

## page_type_specs data table (id `2ErETiHi4MCy5LOc`)

One row per page type, 128 rows seeded from `skills/content-map-builder/assets/page_type_specs.json` (generated by `tools/build_specs.py`, listed in `docs/page-type-writing-rules.md`). Add a row to add a type; the app's dropdown lists every row. Sixteen columns since 2026-09-24:

| Column | Meaning |
|---|---|
| `type_id`, `label`, `family` | id sent in `pageType`; label for people; one of hub, guide, reference, evaluation, offer, proof, entity, tool, asset, local, catalogue, ops |
| `definition` | two or three sentences: what the page is for and what readers expect to find; quoted to the writer, the FAQ writer and the prompt maker |
| `industries` | help text |
| `words_count_approx` | the length the writer aims for; complete guides, pillar hubs and research reports sit near 4,000, bios and hubs near 500 |
| `answer_paragraph`, `answer_style`, `answer_max_words` | whether the page opens with a direct answer and in which style |
| `tables_min`, `research` | minimum tables; how much the writer should use its Live Research tool (none, search, deep) |
| `schema_types` | JSON-LD blocks, e.g. `Service + Organization + FAQPage + BreadcrumbList` |
| `opening` | how the opening paragraph is written |
| `closing_heading` | when set, the flow appends one closing H2 after the outline with a heading following these patterns (unless the outline already ends with a closing section); empty means no closing H2 |
| `cta_mode` | `required` (one natural CTA at the end of the closing section, following `ctaRules`) or `none` |
| `faq_required` | Y: five FAQs; N: no FAQ block, no FAQPage schema |

Removed on 2026-09-24: `words_min`, `words_max`, `default_words` (one approximate length instead), `citations_min` (citations wherever a figure needs one), `required_facts`, `optional_facts` (facts are free-form and blended in), `constraints`, `section_format_hints`, `format_rules`, `h3_policy` (the writer decides formats and H3 placement per section from the heading, the intent and its research), `ai_writable`, `closing_mode`, `closing_content`, `cta_guidance` and `meta_description_pattern` (the meta description rules come from the search intent).

## Prompts and node code

The writer guidelines and the Style Updater prompt live inside the `Prep Writer` and `Prep Update` Code nodes, so they can be reviewed and edited in the n8n editor. The repo mirrors them: `n8n/cm6/prep_writer.js` and `n8n/cm6/prep_update.js` hold the node code, and `docs/prompts/cm6_writer_guidelines.md` and `docs/prompts/cm6_style_editor.md` hold the two prompt texts on their own. `tools/build_n8n_code.py` embeds the markdown into the JS, and `tools/build_n8n_code.py --extract` goes the other way after a prompt was edited in the editor and the node code copied back into the repo. The `CM6 Code Loader` helper writes every file listed in `n8n/manifest.json` into the named node through the n8n API, so the repo copy must be brought up to date before the loader runs. The `cm6_prompts` data table is no longer read.

## Progress reporting

The Generation - Report Progress sub-workflow is called inline on the main chain (wait for completion off, so the page data passes through unchanged) at six stages: `article_request_received` (5%), `outline_ready` (15%, brief built), `draft_written` (25%), `editorial_scan_running` (35%, peelers done), `style_cleanup_done` (50%, FAQ, meta and E-E-A-T start), `final_assets_ready` (95%, before the callback).

## Evaluation

The evaluator scores the English page as the Style Updater returned it (the `Extract Updated` output), never the translated callback text, so the text metrics and the rules judge apply to what the writer and editor wrote.

The Money Calculator sub-workflow, called after the callback, sums tokens and cost for every flow. For executions whose workflow name is exactly `Content Maker 6.0` it also runs the Content Maker 5.0 evaluator (text metrics and rules compliance on GPT 5.6 Luna, final calculations) and appends the scores to the EVALUATOR sheet with Flow Version "Content Maker 6.0". The nine SEO metrics of the 5.0 evaluator are not calculated any more: their sheet columns are filled with N/A, and violation density and quality score come from text metrics (25 percent, tolerance 24 failed checks per 1,000 words) and rules (75 percent, tolerance 70 weighted points per 1,000 words). The bigram and trigram repeat limits are per 1,000 words. The tense-shift check deliberately requires more than 17 shifts, to break flat single-tense text.

## Helper workflows (test only)

- `CM6 Test Callback Receiver` (`aoPTgo0YDsIGLrRr`): `POST /webhook/pm-test-callback/page` and `/execution-started`, stores every callback in the `pm_test_callbacks` data table. Use `https://n8n-test.snoika.com/webhook/pm-test-callback` as `callback_url` when testing by hand.
- `CM6 Spec Seeder` (`eeeDwSvQ8QW3TiXj`): upserts the catalogue from the repo into `page_type_specs` by type id and deletes the rows listed in `n8n/removed_page_types.json`. Safe to re-run.
- `CM6 Code Loader` (`eXzLzVVBLtHcivrA`): `POST https://n8n-test.snoika.com/webhook/cm6-load-code` (optional body `{"workflowId": "..."}`) writes the repo node code and prompts into Content Maker 6.0 and Money Calculator through the n8n API. Publish the target workflow afterwards.
