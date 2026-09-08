# Page Maker 2.0 — architecture, revision 2

Status: proposal for review before the n8n workflow `MZUUvWCdCXlHKllN` ("Page Maker") is changed.
Revision 2 applies the feedback of 2026-09-08: no pods or waves, one page per run per language, publishing and hreflang out of scope, Google Sheets kept as the registry, page types researched across industries, blog articles absorbed from Content Maker 5.0.

## 0. Scope

**In scope.** One run writes one page of one type in one language: body, answer paragraph, FAQ, meta title and description, JSON-LD, internal links placed in the body, plus a list of already-written pages whose links should be updated because this page now exists, and an indexing signal for those pages.

**Out of scope.** Publishing, the CMS, hreflang, the order in which pages are published (the user decides by priority in the Snoika app), pods, waves, and anything after the callback.

## 1. Run model

The Snoika app calls the webhook once per page per language. The flow does not know or care about order. Every run reads three sources:

| Source | Scope | Delivered how |
|---|---|---|
| Webhook payload | this page: everything the user typed from the content map, type-specific facts, writing preferences, domain lists | from the Snoika app UI |
| Client context tables | this brand: ICP and audience test, offer, authors and reviewers, allowed and forbidden claims, proof and data library, CTA map, glossary terms, link exclusions, industry pack | n8n Data Tables keyed by `brandId`, read on every run |
| Page registry | this site: every planned page with its status and planned links | Google Sheet (kept for now), read and written on every run |

Field resolution when a value could come from more than one place: payload → page type descriptor → brand tables → industry pack → family default. The payload always wins.

Pipeline for one run:

```
Parse → Resolve (descriptor + brand + registry) → Link plan → Research (Tavily, by descriptor)
→ Write in English → 5 peelers → Style Updater → Validate → Section Fixer → Revalidate (real)
→ Answer-coverage check (AI prompts) → FAQ (EN) → Meta (EN) → JSON-LD
→ Translate body + FAQ + meta (DeepL, glossary) → Post-translation keyword check → Slug from map
→ Build payload → Callback → Registry update → Reverse link pass → Index signal → Money Calculator
```

Nothing in the pipeline depends on which pages were written before it, except the link plan and the reverse link pass.

## 2. Page types: a catalogue plus a descriptor

### 2.1 Twelve structural families

Every page type belongs to one family. The family fixes the shape (what opens the page, whether tables, steps or cards dominate, length band, schema); the type fixes the content slots. A niche page is "family plus overrides", which is what makes the fallback in 2.4 work.

| Family | Reader wants | Opens with | Typical shape | Words |
|---|---|---|---|---|
| `hub` | orientation, where to start | 2–4 sentence scope statement | grouped link blocks with blurbs, optional "start here" path, FAQ; pillar variant adds a summary per child topic | index 300–800, pillar 2,000–5,000 |
| `guide` | understanding or completing a task | answer or definition paragraph | H2s in logical or step order, tables where variables exist, pitfalls, FAQ | 1,200–3,500 |
| `reference` | one precise fact or definition | 40–60 word direct answer | expansion, example, related terms, compact tables, citations | term 300–900, FAQ page 800–2,000, statistics 1,500–3,000 |
| `evaluation` | a decision between options | verdict paragraph | criteria, comparison table, per-option sections, who should choose which, FAQ | 1,500–3,500 |
| `offer` | whether to buy from this company | value proposition and CTA | problem and outcome, what is included, process, proof, differentiators, pricing or how pricing works, FAQ, CTA | 600–2,000 |
| `proof` | evidence the company delivers | headline result | context, approach, outcome table, quotes, CTA | 800–1,800 |
| `entity` | who this is | key facts | bio, credentials, focus areas, contact, links to their content | 300–1,200 |
| `tool` | a personalised output | short framing | the tool, methodology, assumptions table, how to read the result, FAQ | 500–1,500 |
| `asset` | a downloadable or watchable thing | what is inside | key findings, who it is for, form or player; reports add methodology and findings | gate 300–800, report 2,000–6,000 |
| `local` | the service near me | location-specific H1 and NAP | services here, local proof, team, directions, area FAQ, CTA | 500–1,500 |
| `catalogue` | to browse or inspect a specific item | title and key facts | spec table, description, variants, reviews, related; category variant is intro, grid, editorial text, FAQ | item 300–1,200, category 200–800 |
| `ops` | to operate the product or complete a task | the task | prerequisites, steps, expected result; dated entries; numbered clauses | 200–1,500 |

Two rules the writer carries for every family: answer-first is the default for `guide`, `reference`, `evaluation`, `tool` and programmatic pages; `offer`, `proof`, `entity`, `local` and `catalogue` open with a value proposition or key facts instead. Templated families (`local`, `catalogue`, programmatic `offer`) need page-specific facts before generation or they read as doorway pages.

### 2.2 The catalogue

The research produced 147 page types across the families; 138 are worth generating with a writer, 9 are template or engineering pages (login, cart, API reference, legal policies, search results). The full catalogue with definition, industries, word range, schema, extra inputs, answer-paragraph flag and AI-writable flag is in Appendix A. Every row is stored as a descriptor record, so the workflow reads it as data.

The 13 types in the content-map method map onto it directly:

| Content map type | Catalogue type |
|---|---|
| PILLAR HUB | `pillar_hub` |
| Cluster hub | `cluster_hub` |
| Deep-dive article | `deep_dive_guide` (or `how_to` when procedural) |
| Supporting article | `supporting_article` |
| Comparison page | `head_to_head_vs` (two options) or `listicle_best_of` |
| Alternatives page | `alternatives_page` |
| Linkable asset | `research_report` or `statistics_page` |
| Service page | `service_page` |
| Solution page | `solution_use_case_page` |
| Industry page | `industry_vertical_page` or `segment_size_page` |
| Case study | `case_study` |
| Author page | `author_bio_page` |
| Glossary term | `glossary_term` |

Blog articles from Content Maker 5.0 become two more types, `blog_article_seo` and `blog_article_geo`, in the `guide` family (section 8). Recommendation: the content-map builder writes the catalogue `type_id` into the map from now on.

### 2.3 The type descriptor: types as data

A page type is a row in a `pm_page_types` table, not a branch in code. The Page Contract node reads the row and derives sections, budgets and validation from it. Adding a type is adding a row.

```yaml
type_id: service_page
family: offer
extends: null                         # inherit from another type, override below
word_range: {min: 800, max: 2000}
answer_paragraph: {required: false, style: value_prop, max_words: 60}
section_outline:                      # default; the map's H2 outline replaces it when supplied
  - {heading: "What problem this service solves", format: prose, required: true}
  - {heading: "What is included", format: table, required: true}
  - {heading: "How the engagement runs", format: steps, required: true}
  - {heading: "Who this is for and who it is not for", format: prose}
  - {heading: "What it costs and what drives the price", format: prose}
  - {heading: "How results are measured", format: prose}
tables: {required: true, min: 1}
citations: {required: false, min_sources: 0, must_be_dated: true}
faq: {min: 4, max: 6, source: ai_prompts_then_generated}
cta: {style: book, positions: [top, end]}
author: {required: false}
reviewer: {required: false}
disclaimers: []                       # industry pack may add
claim_rules: {no_outcome_promises: true}
schema_types: {primary: Service, secondary: [Organization, FAQPage, BreadcrumbList]}
required_facts: [deliverables, process_steps, pricing_model]
optional_facts: [price_band, proof, certifications, differentiators]
uniqueness_min_facts: 0
research: none                        # none | search | deep
links: {min: 3, max: 5}
indexable: true
```

The descriptor is also the UI specification: the Snoika app can render the input form for a page type from `required_facts` and `optional_facts`, so a new type needs no UI change.

### 2.4 Niche clients: the fallback

When a client needs a page that is not in the catalogue, the user creates a descriptor in the UI with the minimum subset: `family`, `word_range`, `answer_paragraph.required`, an outline (or accept the family default), `tables.required`, `citations.required`, `schema_types.primary`, `required_facts`, `faq` counts, `cta.style`. Everything else defaults from the family, or from a catalogue type named in `extends`. Each family also has a `generic_<family>` type so that "a page in this family with this outline and these facts" is always writable. The research report includes a worked example, a university grant programme page, built this way.

### 2.5 Industry packs

Compliance and vocabulary are not page-type properties, so they live in `pm_industry_packs`, selected per brand. Contents: preferred and avoided vocabulary, standing disclaimers by family, claim rules, reviewer requirements, default source domains, and outline overrides per type. The research report's industry table (Appendix B) is the seed: for example, legal pages get the "prior results do not guarantee a similar outcome" disclaimer and a ban on "best", "expert" and "specialist" unless certified; healthcare pages require a named reviewer with credentials and `MedicalWebPage` schema; financial pages require dated sources and risk warnings on the face of the page; recruiting pages require real salary and location data in job schema and equal-opportunity language.

## 3. What the Snoika app sends per run

### 3.1 Universal fields, every page type

| Field | Required | Notes |
|---|---|---|
| `brandId`, `taskId`, `userId`, `callback_url` | yes | as today |
| `pageType` | yes | catalogue `type_id`, or `customType` with a descriptor object |
| `targetLanguage` | yes | one language per run |
| `coreKeyword` | per descriptor | required unless the descriptor says otherwise (case study, author, integration) |
| `secondaryKeywords[]` | no | clean terms only; strip volume annotations and drop "vocabulary only" terms in the UI |
| `searchIntent` | no | informational, commercial, transactional, navigational |
| `h1` | yes | from the map |
| `metaTitle` | no | authoritative when given; the Metadata Generator only fills the description |
| `slugPath` | yes | from the map; for non-English runs, the localised slug from the map |
| `siteRootUrl` | yes | or taken from the brand table |
| `h2Outline[]` | no | from the map; replaces the descriptor outline when present; optional `format` per item (prose, table, steps, bullets) |
| `aiPrompts[]` | no | the map's target AI prompts; drive the answer paragraph, the coverage check and the FAQ |
| `answerBlock` | no | the map's answer block, seeds the answer paragraph |
| `words` | no | target; the descriptor range clamps it |
| `schemaTypes[]` | no | from the map; the descriptor default otherwise |
| `cta` | no | `{label, url}`; the brand CTA map otherwise |
| `pillarId`, `clusterId`, `hubSlug` | no | for the link heuristics when `linksOut` is absent |
| `linksOut[]` | no | slugs from the map's "Internal links OUT" |
| `localizedKeyword`, `localizedH1` | non-English runs | measured native keyword from the map, checked after translation |
| `writingPreferences`, `whitelistDomains[]`, `blacklistDomains[]` | no | as today; brand defaults otherwise |
| `researchDepth` | no | can only lower the descriptor's default |
| `mode` | no | `write` (default) or `rewrite` with `existingBody` |

### 3.2 Facts by family

The descriptor's `required_facts` decides what the form asks for. The families need, in addition to the universal fields:

| Family | Required facts | Optional facts |
|---|---|---|
| `hub` | child pages: slug, H1, one-line summary (from the registry when present) | start-here path |
| `guide` | none beyond outline and sources | steps, tools, time, prerequisites, expert quotes |
| `reference` | definition or the verified facts with source and year | related terms, examples |
| `evaluation` | competitor or option list with verifiable facts; feature matrix; pricing with an as-of date | own differentiators, criteria weights |
| `offer` | deliverables or feature list; process; pricing model | price band, proof, certifications, plan matrix |
| `proof` | client facts, metrics, quotes, permission status | photos, timeline |
| `entity` | person or organisation record: name, role, credentials, bio, URL, sameAs | publications, awards |
| `tool` | formula or assumptions, inputs, interpretation ranges | methodology text |
| `asset` | what is inside, key findings; reports add methodology, sample, dates | author, charts |
| `local` | NAP, hours, services here, at least three genuinely local facts, local proof | team, parking, photos |
| `catalogue` | the item record: specs, variants, price, availability; for clinical pages, sources and reviewer | reviews, related items |
| `ops` | the exact verified procedure or change list | screenshots, versions |

Missing required facts stop the run with `blocked:missing_facts` in the callback and the registry; the writer never invents them.

### 3.3 Brand tables in n8n

| Table | Holds |
|---|---|
| `pm_brands` | name, description, site root, industry pack, offer model, ICP, audience test, URL convention, default language, glossary path, link exclusions, default domain lists, default writing preferences |
| `pm_brand_facts` | typed rows: service, deliverable, price_band, proof, certification, metric, feature, claim_allowed, claim_forbidden, competitor, disclaimer; the writer receives only the kinds the descriptor asks for |
| `pm_brand_people` | authors and reviewers: name, role, credentials, bio, URL, sameAs |
| `pm_brand_cta` | CTA label and URL by page type or family |
| `pm_glossary` | term, aliases, slug, language, status; used for automatic first-mention links |
| `pm_page_types`, `pm_industry_packs` | global, not per brand |

## 4. Outline and AI prompts

**Outline.** When `h2Outline` is supplied, it becomes the section list. Each section gets a word budget from the descriptor's range divided by the section count, clamped to the descriptor's per-section band, and a format hint (table, steps, bullets) from the item or from the descriptor. When it is absent, the descriptor's outline is used, and research may add two to four sections the result page lacks. The first H2 is always the page's own angle; the validator checks the outline headings appear in order.

**AI prompts** are used in three places:

1. The answer paragraph must answer the H1's question, seeded by `answerBlock` when given and by the first prompt otherwise.
2. An **answer-coverage check** after the Style Updater: a judge model returns, for each prompt, the passage that answers it or "none". Every "none" goes to the Section Fixer with the instruction to answer that question inside the most related section. The payload reports `promptCoverage` per prompt.
3. The **FAQ writer** takes the prompts first, then People Also Ask questions from research, then generated questions, up to the descriptor's FAQ count.

## 5. Schema: built from the page type, extensible

`schemaTypes` come from the map when given and from the descriptor otherwise. JSON-LD is assembled from a library of block builders keyed by schema type: Article, BlogPosting, NewsArticle, TechArticle, HowTo (from step sections), FAQPage (from the FAQ), BreadcrumbList (from the slug), Organization, Person and ProfilePage (from the people table), Service, Product and Offer, SoftwareApplication, WebApplication, DefinedTerm and DefinedTermSet, ItemList (from compared options), Dataset and Report, LocalBusiness and its subtypes, Course, Event, JobPosting, MedicalWebPage with `reviewedBy`, LegalService, Review and AggregateRating (only from real reviews). Each builder declares the facts it needs; when a fact is missing the block is omitted and a warning is returned, never invented. A schema type with no builder is generated by a model constrained to that schema.org type and the descriptor's required properties, validated as JSON, and flagged `generated: true` for review. Author blocks stop being stubs: they carry the author record from the brand table.

## 6. Internal linking, revisited

Revision 1 proposed page-id tokens resolved at publish time. That needs a resolver in the publishing path, which is now out of scope. The replacement follows your idea: link only to pages that already exist, and update already-written pages when a new page appears.

### 6.1 Forward links at write time

The link plan is the map's `linksOut` restricted to registry rows whose status is `written` or `published` (existing site pages are imported as `published`). URL is site root plus slug. Planned targets that do not exist yet are recorded in the page's `pending_out` column and are not linked. The descriptor's link minimum becomes "min of descriptor minimum and available targets", so early pages are not failed for links they cannot have. When `linksOut` is absent, the existing hub, sibling and commercial heuristics run against the registry. Rule 6 (first mention of a glossary term) is a deterministic post-processor against `pm_glossary` rows that exist. Link exclusions from the brand table are rejected by the validator.

### 6.2 Reverse link pass after the page is written

After the callback succeeds, the flow looks up every registry row with status `written` or `published` whose `links_out` or `pending_out` contains the new page's slug. For each, it produces a link update:

1. Deterministic first: if an anchor hint for the new page (H1, core keyword, short form) already occurs in the source body outside headings, tables, the answer paragraph and existing links, wrap it.
2. Otherwise a small model edit adds one sentence containing the link in the most related section. The edit is validated by diff: exactly one link added, no other change.
3. The registry row's `pending_out` loses the slug; a `pm_link_ledger` row is written.

Two ways to run it. **Stateless (recommended):** the main run only returns `inboundUpdatesNeeded: [{slug, anchorHints}]`; the Snoika app calls a second entry point, `mode: link_update`, with the source page's current body and receives the modified body. The body stays owned by the app, so an edit a person made after delivery is never overwritten. **Self-contained:** the registry keeps the last delivered markdown per page and the flow posts updates to the callback itself. This works without app changes but goes stale as soon as anyone edits a page outside the flow.

Volume: the TruAlign map has 2,480 links over 269 pages, about nine inbound updates per new page, most of them deterministic. A hub written early receives one small update per child page as the children arrive, which replaces the manual Friday link pass.

### 6.3 Plan changes

- Page will never be published: status `cancelled` in the registry. The same link-update mechanism runs in reverse, unwrapping links to it in every source to plain text. If a `replaced_by` slug is set, the link is re-pointed instead.
- Slug changes before writing: the registry is keyed by slug, so the row is renamed and `links_out` lists are rewritten by the importer. Nothing else references it.
- URL changes after publish: `redirect_to` in the registry; sources are updated on the next link pass; the 301 covers the interval.
- Page re-targeted: anchor hints change; the audit flags anchors that no longer match.
- Map grows: new rows are `planned`; `links_out` additions on written pages become link updates.

### 6.4 Index check and reindex request

After link updates, for each affected page with a `published_url`, the flow can call the Google Search Console URL Inspection API (`urlInspection.index.inspect`, 2,000 requests per day per property, needs the property verified and a service account added to it). The result says whether the URL is indexed. If not indexed, nothing happens; the page will be crawled fresh. If indexed, the flow asks for a recrawl. Two facts to know here: Google has no public endpoint to request indexing of general pages (the Indexing API is restricted to job postings and live events), and IndexNow covers Bing, Yandex, Naver and Seznam but not Google. So the flow emits `indexSignals: [{url, indexed, checkedAt}]` and calls an optional `indexingHookUrl` the app provides; the app decides what to do with it (sitemap `lastmod`, IndexNow, or a manual request).

### 6.5 Registry sheet

One tab per brand, keyed by slug and language: `slug`, `lang`, `page_type`, `h1`, `core_kw`, `pillar`, `cluster`, `priority`, `status` (planned, blocked, written, published, cancelled, redirected), `published_url`, `replaced_by`, `redirect_to`, `links_out`, `pending_out`, `anchor_hints`, `inbound_count`, `version`, `written_at`, `execution_id`. The read node's range bug is fixed and an empty read fails the run instead of passing silently. Who sets `published`: the app on publish, or a person; the flow only needs the value.

### 6.6 Is it too complex?

The reverse pass is moderate: one registry query, N small edits, N callbacks. The complexity is not in n8n but in ownership of the page body after delivery, which is why the stateless variant is recommended. The index check is a single HTTP call per page once GSC access exists per property; the reindex request is the part that cannot be promised for Google.

## 7. Languages

Sequence, as built: everything in English through the five peelers, the Style Updater, validation, fixing and revalidation; FAQ and metadata are generated in English too, so every check runs on checked text. Then one DeepL call per text unit (body, FAQ, meta title, meta description) with the brand glossary: measured native keywords per page and the terms that stay English. Then a post-translation check: `localizedKeyword` must appear in the H1, the meta title and the first sixty words; if not, a targeted fix in the target language, and if still not, a warning in the payload. The slug is the localised slug from the map, never a transliteration. JSON-LD `inLanguage` becomes a BCP-47 code. One run per language, one registry row per slug and language; forward links resolve within the language only. Languages DeepL does not support fall back to a model translation with the same glossary.

## 8. Blog articles: absorbing Content Maker 5.0

Content Maker 5.0 is the same pipeline shape (outline, write, five peelers, Style Updater, translate, FAQ, meta, callback) with different prompts and a few stages Page Maker lacks. Two catalogue types carry it:

| Type | Family | Inputs beyond the universal fields | Writer rules ported from 5.0 |
|---|---|---|---|
| `blog_article_seo` | `guide` | `articleType`, `contentIdea`, `ctaRules`; `articleTitle` is the H1 | keyword in the first and last 30 words, intro ≤150 words, conclusion ≤100 with the CTA in its last paragraph, minimum 15 dated external links, density gate (core 0.55–1.3%, secondaries 0.2–0.4%) |
| `blog_article_geo` | `guide` | `question` (the H1 anchor), `answerIdea`, `productDescription` | 40–60 word opening answer, each H2/H3 130–180 words opening with a direct answer plus one sourced claim, one link per section, final H2 is the CTA section |

In 5.0 the GEO route is switched by a non-empty `prompt`; in Page Maker the page type switches it and the UI maps the field.

What Page Maker absorbs from 5.0, in order of weight:

1. **Outliner stage.** 5.0 researches the audience or the client with Tavily and produces the H2/H3 outline. Page Maker gets the same node as the fallback for every type when no `h2Outline` is supplied, which is the common case for blog articles and for pages written outside a content map.
2. **SEO density loop.** The deterministic density check plus Edit Finder and Edit Applier become part of validation for types whose descriptor sets `keyword_density: true` (the SEO article; optional for guides).
3. **Re-citation in the target language.** 5.0 strips all links before translation and re-sources citations with target-country search. Pages keep their citations through translation today. The descriptor gets a flag, `recite_in_target_language`, true for blog types, false by default.
4. **Internal links from Pinecone.** 5.0 finds internal links by vector search over the client's existing blog. The registry only knows planned pages, so `pineconeIndex` and `pineconeNamespace` stay as an optional second link source, with the same 7 links, 2 per section, CTA-link rules folded into the validator.
5. **EEAT analysis** (experience, expertise, authoritativeness, trust with evidence and a priority fix) runs for every type; it is one cheap model call and the payload carries it.
6. **Progress reporting.** The nine stage keys sent to the progress sub-workflow (`article_request_received` through `final_assets_ready`) are kept, with `jobType` set from the family.
7. **Callback shape.** 5.0 posts to `/blog-post` with Strapi rich-text blocks in `articleText` plus `articleTextMd`; Page Maker posts to `/page` with markdown. The payload for blog types carries both `markdown` and `articleText` blocks; which endpoint the app consumes is the app's choice.
8. **Evaluation and logs.** The English-SEO quality score (metrics, SEO, rules compliance) and the Stats sheet, the run-log sheet, execution custom data and the error workflow are kept as they are. The Money Calculator receives the real title.

Once these are in, 5.0 can be retired, and blog articles get everything pages have: the descriptor, the brand tables, the registry links and the reverse link pass.

## 9. Output payload

Today's payload plus: `answerParagraph`, `sections[] {h2, words}`, `promptCoverage[] {prompt, answered, passage}`, `faq[]` in the target language, `relatedLinks[]` (all planned children or siblings with status, for a template block), `pendingLinks[]`, `inboundUpdatesNeeded[]`, `indexSignals[]`, `language` as a BCP-47 code, `localizedKeywordCheck`, `schemaWarnings[]`, `blocked` with a reason when facts are missing, and `version`.

## 10. Node-level delta in the n8n workflow

| Node | Change |
|---|---|
| Parse Request | new fields from 3.1; `customType` descriptor; `mode` |
| Page Contract | reads `pm_page_types` and the industry pack instead of the hardcoded `S` and `BP`; outline from payload wins |
| Load Page Registry | range fixed, fails loudly, filters by brand and language |
| Link Plan | `linksOut` ∩ existing rows; heuristics as fallback; `pending_out` written back |
| Prep Writer | sections from the outline, facts from brand tables by kind, disclaimers from the pack |
| Validate Draft | outline order, prompt coverage, disclaimers, link exclusions, anchor rules |
| Revalidate | actually re-runs Validate |
| new: Answer Coverage | judge model over `aiPrompts` |
| FAQ Writer, Metadata Generator | moved before translation, prompts-first FAQ, meta title passthrough |
| DeepL Translate | body, FAQ and meta in one batch with the glossary |
| new: Localized Keyword Check | after translation |
| Build JSON-LD | block builders from `schemaTypes`, people table for authors, generated fallback |
| new: Reverse Link Pass | registry query, deterministic wrap, model insert, ledger |
| new: Index Signal | URL Inspection API, optional hook |
| new webhook: `page-maker/link-update` | stateless link update entry point |
| Money Calculator | passes the real title |

## 11. Open points

1. Can the Snoika app supply the current body of a written page when asked for a link update (stateless variant), or should the registry keep the last delivered markdown?
2. Do we have Search Console access per client property (service account added to the property)? Without it the index check is skipped.
3. Who sets `published` in the registry: the app on publish, or a person? Forward linking depends on it.

## Appendix A. Page-type catalogue

147 types. Columns: AP = needs an answer paragraph under the H1. AI = worth generating with a writer: Y yes, P partial (writer drafts, facts must be supplied and verified), N no (template or engineering owns it). Inputs are in addition to keyword, H1, audience, voice and link targets. Word ranges are defaults the descriptor overrides.

### hub

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `pillar_hub` | Broad topic overview that summarises and links every cluster page | all content-led sites | 2,000–5,000 | Article, CollectionPage, FAQPage | child list with slugs and one-line summaries, scope boundaries | Y | Y |
| `cluster_hub` | Mid-level index for a sub-topic within a pillar | same | 800–2,000 | CollectionPage, Article | child list, parent pillar slug | Y | Y |
| `resource_library` | Index of downloadable or watchable assets | SaaS, B2B services, nonprofits, education | 300–800 | CollectionPage, ItemList | asset inventory | N | Y |
| `blog_category_hub` | Blog category landing with editorial intro | all | 200–600 | CollectionPage | category scope, top posts | N | Y |
| `glossary_index` | A–Z index of terms with one-line definitions | SaaS, finance, legal, health, industrial | 500–1,500 | DefinedTermSet, CollectionPage | term list | N | Y |
| `service_area_hub` | Index of all city or region pages served | local services, trades, healthcare networks, law, real estate | 300–800 | CollectionPage, LocalBusiness | area list, map | N | Y |
| `location_index` | Directory of physical branches | multi-location retail, healthcare, banks, dealerships | 200–600 | CollectionPage, ItemList | location data per site | N | Y |
| `industry_hub` | Index of all vertical pages | SaaS, agencies, manufacturing, insurance, staffing | 300–800 | CollectionPage | vertical list | N | Y |
| `integration_directory` | Index of integration pages by category | SaaS | 300–800 | CollectionPage, ItemList | integration list | N | Y |
| `template_gallery_hub` | Index of templates or examples | SaaS, agencies, creators | 300–800 | CollectionPage | template inventory | N | Y |
| `topic_hub_programmatic` | Programmatic hub for a modifier set ("LLC by state") | programmatic sites, legal-tech, fintech | 300–800 | CollectionPage | entity list, child slugs | N | Y |

### guide

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `deep_dive_guide` | Complete guide to one topic | all | 2,000–4,000 | Article, FAQPage | sub-topic outline, sources, expert quotes, author | Y | Y |
| `how_to` | Step-by-step instructions for one task | all; SaaS, trades, DIY, finance | 1,000–2,500 | HowTo, Article | steps, tools, time, prerequisites | Y | Y |
| `supporting_article` | Narrow cluster article on one sub-question | all | 800–1,800 | Article | parent hub slug, sources | Y | Y |
| `blog_article_seo` | Keyword-led blog article (Content Maker 5.0 SEO route) | all | 1,500–3,000 | BlogPosting, FAQPage | articleType, contentIdea, ctaRules | Y | Y |
| `blog_article_geo` | Question-led answer article (Content Maker 5.0 GEO route) | all | 1,200–2,500 | BlogPosting, FAQPage | question, answerIdea, productDescription | Y | Y |
| `explainer_what_is` | "What is X" conceptual article | SaaS, finance, health, legal, industrial | 1,000–2,000 | Article, FAQPage | sources, examples, related terms | Y | Y |
| `checklist` | Actionable checklist with context per item | compliance, ops, moving, events, HR | 800–1,800 | HowTo or Article, ItemList | items, downloadable version | Y | Y |
| `regulation_compliance_explainer` | Plain-language explanation of a law or standard | legal, finance, HR, health, energy, telecom | 1,500–3,000 | Article, FAQPage | official citations, jurisdiction, dates, penalties, reviewer | Y | P |
| `process_page` | What happens when you work with us | professional services, healthcare, legal, construction | 700–1,500 | Article or Service | steps, timelines | Y | Y |
| `mistakes_pitfalls` | Mistakes to avoid | all | 1,000–2,000 | Article | mistake list with fixes | Y | Y |
| `trend_outlook` | Annual trends or state of X | B2B, agencies, tech, HR, retail | 1,500–3,000 | Article | data sources, quotes, year | Y | P |
| `symptom_problem_page` | Why is X happening, signs of X | healthcare, trades, auto, IT | 1,000–2,000 | Article or MedicalWebPage, FAQPage | causes, severity guidance, when-to-call thresholds, reviewer | Y | P |
| `destination_guide` | Travel or area guide | travel, hospitality, real estate, relocation | 1,500–3,500 | Article, TouristDestination, FAQPage | place data, attractions, seasons | Y | Y |
| `career_guide` | How to become an X | recruiting, education, professional bodies | 1,500–2,500 | Article, FAQPage | requirements, salary data, steps | Y | Y |

### reference

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `glossary_term` | Single term definition | SaaS, finance, legal, health, industrial, marketing | 300–900 | DefinedTerm, Article, FAQPage | definition, example, related terms, glossary slug | Y | Y |
| `faq_page` | Standalone FAQ for a topic or service | all; healthcare, legal, insurance, local | 800–2,000 | FAQPage | question list with source answers | N | Y |
| `statistics_page` | Curated statistics roundup with citations | B2B, SaaS, agencies, HR, health, finance | 1,500–3,000 | Article, Dataset, ItemList | verified stats with source and year each | Y | P |
| `spec_sheet` | Technical specification page | manufacturing, industrial, electronics, energy, telecom | 300–1,000 | Product, PropertyValue, TechArticle | spec table, tolerances, certifications, datasheet | N | P |
| `question_page` | Single-question page | legal, healthcare, finance, insurance, HR | 500–1,200 | Article or QAPage, FAQPage | authoritative answer, jurisdiction, reviewer | Y | P |
| `entity_lookup` | Programmatic fact page about an entity | data sites, fintech, health, HR | 300–800 | Article or Dataset | structured entity record | Y | P |
| `country_region_guide` | Regulatory or practical reference by jurisdiction | HR, fintech, legal-tech, logistics, travel | 1,200–2,500 | Article, FAQPage | jurisdiction data, sources, dates | Y | P |
| `salary_guide` | Compensation reference by role or region | recruiting, HR, education | 1,000–2,500 | Article, Dataset, FAQPage | salary data with source and methodology | Y | P |

### evaluation

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `listicle_best_of` | Best X ranked list | SaaS, e-commerce, agencies, marketplaces, travel | 1,500–3,500 | Article, ItemList | candidate list, criteria, pricing, own position | Y | P |
| `head_to_head_vs` | A vs B comparison | SaaS, fintech, insurance, e-commerce, auto, education | 1,500–3,000 | Article, FAQPage | feature matrix, pricing for both, ideal user for each | Y | P |
| `alternatives_page` | Competitor alternatives list with own product positioned | SaaS, fintech, services | 1,500–3,000 | Article, ItemList | competitor list with verifiable weaknesses, own differentiators | Y | P |
| `competitor_comparison_own` | Us vs competitor first-party page | SaaS, services, insurance, telecom | 1,000–2,000 | WebPage, FAQPage | feature matrix, pricing, proof | Y | P |
| `review_page` | In-depth review of one third-party product | media, affiliates, marketplaces | 1,500–3,000 | Review, Product | hands-on notes, rubric, pricing | Y | P |
| `cost_page` | How much does X cost | trades, legal, healthcare, agencies, real estate, auto, education | 1,200–2,500 | Article, FAQPage | price ranges with factors and sources, own pricing | Y | P |
| `is_x_worth_it` | Value judgement on a purchase or decision | consumer and B2B | 1,000–2,000 | Article, FAQPage | costs, benefits, breakeven data | Y | Y |
| `diy_vs_pro` | X vs doing it yourself | trades, legal, accounting, agencies, home services | 1,000–2,000 | Article, FAQPage | cost, time and risk comparison data | Y | Y |
| `category_comparison` | Types of X compared | insurance, finance, materials, health, education | 1,200–2,500 | Article, ItemList | category attributes table | Y | Y |
| `buying_guide` | How to choose X, then picks | e-commerce, retail, industrial, auto, insurance | 1,500–3,000 | Article, ItemList, FAQPage | criteria, product list, specs, price bands | Y | P |
| `top_in_location` | Best X in city | marketplaces, directories, travel, local media, real estate | 1,000–2,500 | ItemList, LocalBusiness | verified local entity list, ratings, addresses | Y | P |
| `migration_switch_page` | Switching from A to B | SaaS, telecom, banks, energy, insurance | 1,000–2,000 | Article or HowTo, FAQPage | migration steps, data mapping, incentives | Y | P |

### offer

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `service_page` | Core commercial page for one service | professional services, agencies, trades, healthcare, legal, logistics | 800–2,000 | Service, FAQPage, Organization | deliverables, process, pricing model, proof, differentiators | N | Y |
| `solution_use_case_page` | Product framed around one job to be done | SaaS, fintech, industrial | 800–1,800 | WebPage or Service, FAQPage | pain points, feature mapping, outcomes, proof | N | Y |
| `industry_vertical_page` | Product or service framed for one industry | SaaS, agencies, insurance, staffing, manufacturing, logistics, telecom | 800–1,800 | Service or WebPage, FAQPage | industry pains, regulations, proof, vertical vocabulary | N | Y |
| `role_persona_page` | Framed for a job title or persona | SaaS, B2B services | 700–1,500 | WebPage | persona goals and objections, features that matter | N | Y |
| `segment_size_page` | Framed for company size or segment | SaaS, fintech, telecom, insurance | 700–1,500 | WebPage | segment needs, plan mapping, proof | N | Y |
| `feature_page` | One product feature explained | SaaS, hardware, auto, telecom | 600–1,500 | SoftwareApplication or Product, FAQPage | feature spec, screenshots, use cases, plan availability | N | Y |
| `integration_page` | Product plus partner integration page | SaaS, fintech, e-commerce platforms | 500–1,200 | SoftwareApplication, HowTo, FAQPage | partner data, triggers and actions, setup steps | Y | Y |
| `x_for_y_programmatic` | Templated product for segment, place or use | SaaS, services, legal-tech, fintech, marketplaces | 500–1,200 | WebPage or Service, FAQPage | at least three page-specific facts, entity data | Y | P |
| `pricing_page` | Plans, tiers, billing FAQ | SaaS, telecom, subscriptions, agencies, education | 400–1,200 | Product, Offer, PriceSpecification, FAQPage | plan matrix, prices, limits, add-ons | N | P |
| `product_landing_page` | Long-form single-product persuasion page | DTC e-commerce, courses, hardware, apps | 800–2,500 | Product, Offer, FAQPage | benefits, specs, proof, guarantees, objections | N | Y |
| `quote_request_page` | Quote or estimate page with form | insurance, trades, logistics, manufacturing, printing | 300–700 | ContactPage, Service | form fields, turnaround, what affects the quote | N | Y |
| `brand_page` | Brand or manufacturer page within a retailer | e-commerce, distribution, auto, industrial | 400–1,000 | Brand, CollectionPage | brand facts, product lines, authorised status | N | Y |
| `partnership_program_page` | Partner, affiliate or reseller program | SaaS, telecom, fintech, manufacturing | 600–1,200 | WebPage, Offer | program terms, tiers, benefits | N | Y |
| `course_program_page` | Course, degree or bootcamp | education, edtech, training | 800–2,000 | Course, CourseInstance, Offer, FAQPage | curriculum, duration, outcomes, prerequisites, price, accreditation | N | Y |
| `membership_plan_page` | Gym, club or subscription plan | fitness, media, associations, coworking | 500–1,200 | Offer, Product | plan details, terms | N | Y |
| `financing_page` | Payment plans and financing | auto, trades, dental, furniture, education | 500–1,000 | WebPage, LoanOrCredit, FAQPage | lender terms, APR ranges, eligibility, disclosures | N | P |
| `ad_landing_page` | Campaign page, usually noindex, single CTA | all | 300–1,000 | WebPage | offer, audience, message match, form | N | Y |
| `squeeze_lead_magnet_page` | Minimal asset-for-contact page | all | 150–400 | WebPage | asset summary, form | N | Y |
| `pre_launch_waitlist_page` | Coming soon capture page | startups, launches, developments | 150–400 | WebPage | launch date, teaser | N | Y |
| `donate_page` | Donation conversion page | nonprofits | 300–800 | DonateAction, NGO | giving levels, impact per amount, tax status | N | Y |
| `program_page` | Nonprofit program page | nonprofits, government-adjacent | 600–1,500 | WebPage or Service, NGO | goals, beneficiaries, outcomes, funders | N | Y |
| `specials_offers_page` | Current promotions | auto dealers, retail, restaurants, trades | 200–600 | Offer, SpecialAnnouncement | offer list with expiry | N | P |

### proof

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `case_study` | One client story | B2B services, SaaS, agencies, manufacturing, construction | 800–1,800 | Article, Organization | client facts, metrics, quotes, permission status | N | P |
| `case_results_page` | Verdicts and settlements list | legal | 400–1,200 | ItemList, WebPage | results with dates, disclaimer | N | P |
| `testimonials_reviews_page` | Aggregated reviews | all local and services | 400–1,200 | Review, AggregateRating, Organization | verified review text, ratings source | N | P |
| `portfolio_project_page` | One completed project | construction, architecture, agencies, interiors, landscaping | 400–1,000 | CreativeWork, Article, Place | project facts, location, photos, scope | N | P |
| `impact_report_page` | Annual impact summary | nonprofits, ESG, energy | 1,000–2,500 | Report, Article | outcome metrics, financials, stories | N | P |
| `awards_certifications_page` | Credentials and accreditations | manufacturing, healthcare, legal, finance, trades, logistics | 300–800 | Organization, ItemList | credential list with issuing bodies | N | P |
| `customer_logos_wall` | Trusted-by index | SaaS, agencies | 100–400 | Organization | logo list | N | N |

### entity

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `about_page` | Company story, mission, facts | all | 500–1,200 | AboutPage, Organization | founding facts, team size, locations, values | N | Y |
| `team_index` | Team directory | services, healthcare, legal, agencies | 200–500 | CollectionPage, Person list | roster | N | Y |
| `team_member_bio` | Individual staff profile | services, agencies, law, finance | 300–800 | ProfilePage, Person | CV facts, credentials | N | P |
| `author_bio_page` | Author page for bylines | media, health, finance, SaaS blogs | 300–800 | ProfilePage, Person | credentials, sameAs, published articles | N | P |
| `attorney_bio` | Lawyer profile | legal | 500–1,200 | ProfilePage, Person | admissions, education, results with disclaimer | N | P |
| `provider_profile` | Clinician profile | healthcare, dental, veterinary, therapy | 400–1,000 | ProfilePage, Physician, MedicalOrganization | specialties, board certs, insurances, locations, NPI | N | P |
| `agent_profile` | Real estate or insurance agent | real estate, insurance, finance | 400–900 | ProfilePage, RealEstateAgent | licence number, areas, listings, reviews | N | P |
| `partner_vendor_profile` | Partner or vendor listing | marketplaces, partner programs, directories | 300–800 | ProfilePage, Organization | partner data, services, ratings | N | P |
| `company_facts_page` | Programmatic company profile | data sites, recruiting, fintech | 300–800 | Organization, ProfilePage | structured company record | Y | P |
| `press_room` | Media kit and releases index | mid and large companies, nonprofits | 200–500 | CollectionPage, Organization | press contact, assets | N | Y |
| `press_release_news` | Single press release | all | 400–900 | NewsArticle | facts, quotes, boilerplate, date | N | P |

### tool

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `calculator_page` | Calculator with explanatory copy | fintech, real estate, SaaS, health, logistics, HR, energy | 500–1,500 | WebApplication, HowTo, FAQPage | formula or assumptions, inputs, interpretation ranges | Y | P |
| `quiz_assessment_page` | Self-assessment or eligibility quiz | healthcare, education, insurance, SaaS | 300–1,000 | WebApplication, Quiz | question logic, result descriptions | N | P |
| `configurator_estimator` | Configurator or instant estimate | manufacturing, construction, auto, printing | 300–800 | WebApplication, Product | option data, pricing rules | N | P |
| `generator_checker_tool` | Free utility | SaaS, marketing, legal-tech | 500–1,200 | WebApplication, FAQPage | tool purpose, limits | Y | P |
| `interactive_map_finder` | Store or provider locator | retail, healthcare, auto, telecom, banks | 100–400 | WebApplication, ItemList | location dataset | N | N |

### asset

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `research_report` | Original research findings | B2B, SaaS, agencies, HR, fintech, industry bodies | 2,000–6,000 | Report, Dataset, Article | methodology, sample, findings, charts, author | Y | P |
| `whitepaper_ebook_gate` | Gated asset landing page | B2B, SaaS, finance, industrial | 300–800 | DigitalDocument, WebPage | asset outline, takeaways, form | N | Y |
| `template_example_page` | Downloadable or copyable template | SaaS, HR, legal-tech, finance, agencies | 600–1,500 | CreativeWork, HowTo | template file, fields explained | Y | Y |
| `webinar_page` | Registration or on-demand webinar | SaaS, B2B, education, healthcare CE | 300–800 | Event or VideoObject | speakers, agenda, date, replay | N | Y |
| `video_page` | Single video with transcript | media, SaaS, education, health | 300–1,500 | VideoObject, Article | transcript, chapters | Y | P |
| `podcast_episode_page` | Episode page with show notes | media, B2B | 400–1,200 | PodcastEpisode | transcript or notes, guests | N | P |
| `infographic_data_viz_page` | Infographic host page | marketing, health, finance, nonprofits | 400–1,000 | ImageObject, Article | image, data sources | Y | P |
| `original_dataset_page` | Public dataset or index page | fintech, HR, proptech, energy, logistics | 800–2,500 | Dataset, Report | data, methodology, update cadence | Y | P |

### local

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `location_page` | Physical branch, office, clinic or store | healthcare, legal, retail, banks, dealerships, agencies | 500–1,200 | LocalBusiness subtype, Place, FAQPage | NAP, hours, staff, services here, parking, reviews | N | P |
| `service_area_city_page` | Service delivered in a city without premises | trades, home services, cleaning, movers, IT support | 500–1,200 | Service with areaServed, LocalBusiness, FAQPage | local proof, local facts (codes, climate, permits), response time | N | P |
| `service_plus_location_page` | One service in one place | trades, legal, healthcare, staffing | 600–1,200 | Service, LocalBusiness, FAQPage | as above plus service-specific local factors | N | P |
| `neighborhood_area_guide` | Area guide with market data | real estate, relocation, hospitality | 1,000–2,500 | Place, Article, FAQPage | market stats, schools, amenities, listings | Y | P |
| `practice_location_legal` | Practice area in a jurisdiction | legal | 800–1,500 | LegalService, Attorney, FAQPage | local courts, statutes, deadlines, results, bar disclaimers | N | P |
| `branch_page_staffing` | Recruiting branch or market page | staffing, banks, insurance | 500–1,000 | LocalBusiness, FAQPage | local market data, roles, team | N | P |
| `dealer_local_hub` | City inventory hub for a dealership | automotive | 300–800 | AutoDealer, ItemList | inventory feed, local facts | N | P |
| `regional_country_landing` | Country or region landing | SaaS, fintech, telecom, travel, logistics | 500–1,200 | WebPage, Organization | local pricing, currency, compliance, support hours | N | P |

### catalogue

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `product_page` | Single product | e-commerce, retail, industrial, food | 300–1,200 | Product, Offer, AggregateRating, BreadcrumbList | specs, variants, price, stock, images, reviews, compliance labels | N | P |
| `product_category_page` | Category with editorial copy | e-commerce, retail, distribution | 200–800 | CollectionPage, ItemList | product feed, subcategories, buying tips | N | Y |
| `collection_curated_page` | Themed collection | e-commerce, retail, travel | 200–600 | CollectionPage, ItemList | selection rule, theme | N | Y |
| `intermediary_category_page` | Parent category routing to subcategories | e-commerce, industrial | 200–500 | CollectionPage | subcategory list | N | Y |
| `listing_detail_page` | Single listing (property, vehicle, rental) | real estate, auto, marketplaces, travel | 300–900 | RealEstateListing, Vehicle, Offer, Accommodation | listing record, photos, features, price | N | P |
| `search_results_listing_page` | Filtered listing grid | real estate, auto, marketplaces, jobs | 100–400 | SearchResultsPage or CollectionPage | filter definitions, feed | N | N |
| `model_research_page` | Hand-written page for a vehicle model or product line | automotive, appliances, electronics | 800–1,800 | Product or Vehicle, FAQPage | trims, specs, pricing, inventory link | Y | P |
| `job_posting_page` | Single vacancy | recruiting, all employers | 400–900 | JobPosting | role, salary, location, employer, deadline | N | P |
| `job_category_page` | Jobs by role, industry or location | recruiting, marketplaces | 200–600 | CollectionPage, ItemList | job feed, market notes | N | P |
| `careers_page` | Employer branding and open roles | all employers | 500–1,200 | WebPage, Organization | culture, benefits, hiring process | N | Y |
| `event_page` | Single event or class | education, nonprofits, hospitality, B2B, arts | 300–900 | Event, Offer, Place | date, venue, agenda, tickets, speakers | N | Y |
| `recipe_page` | Recipe | food, media, hospitality, appliance brands | 600–1,500 | Recipe, HowTo, VideoObject | ingredients, steps, times, nutrition, yield | Y | Y |
| `menu_page` | Restaurant menu as HTML | hospitality | 200–800 | Menu, MenuSection, MenuItem | menu data, allergens, prices | N | P |
| `accommodation_room_page` | Hotel room or property type | hospitality, travel | 300–800 | Accommodation, HotelRoom, Offer | room facts, amenities, rates | N | P |
| `tour_package_page` | Tour or itinerary | travel | 800–2,000 | TouristTrip, Offer, FAQPage | itinerary, inclusions, price, dates | N | Y |
| `app_marketplace_listing` | App or plugin listing | SaaS platforms, marketplaces | 300–800 | SoftwareApplication, Offer | app data, screenshots, pricing | N | P |
| `material_capability_page` | Manufacturing capability or material | manufacturing, industrial, construction materials | 800–1,800 | Service or Product, FAQPage | tolerances, equipment, materials, certs, lead times, MOQ | N | P |
| `application_page_industrial` | Industrial use-case page | manufacturing, energy, telecom, logistics | 700–1,500 | Service or Product, FAQPage | application requirements, relevant products, compliance | N | Y |
| `condition_page` | Medical condition overview | healthcare, dental, veterinary, mental health | 1,000–2,500 | MedicalWebPage, MedicalCondition, FAQPage | clinical facts with sources, reviewer, when to seek care | Y | P |
| `treatment_procedure_page` | Treatment or procedure | healthcare, dental, cosmetic, physio, vet | 1,000–2,000 | MedicalWebPage, MedicalProcedure, FAQPage | clinical facts, provider, costs, insurance, reviewer | Y | P |
| `drug_medication_page` | Medication reference | pharma, pharmacies, health publishers | 1,000–2,000 | MedicalWebPage, Drug | dosage, interactions, sources, reviewer | Y | P |
| `practice_area_page` | Legal practice area | legal | 1,500–2,500 | LegalService, FAQPage, Attorney | statutes, process, deadlines, results with disclaimer, attorneys | N | P |
| `coverage_line_page` | Insurance line | insurance | 800–1,800 | Service, InsuranceAgency, FAQPage | coverage scope, exclusions, deductibles, state availability | N | P |
| `financial_product_page` | Loan, card, account or fund | banks, fintech, lenders, investment | 600–1,500 | FinancialProduct subtypes, Offer, FAQPage | rates, fees, eligibility, representative example, risk warnings | N | P |
| `plan_tariff_page` | Telecom, energy or utility plan | telecom, energy, utilities | 500–1,200 | Offer or Product, FAQPage | tariff data, contract terms, regulated disclosures | N | P |
| `route_lane_page` | Shipping route or corridor | logistics, freight, travel | 500–1,200 | Service, FAQPage | transit times, ports, pricing factors, customs notes | N | P |

### ops

| type_id | Definition | Common industries | Words | Schema | Extra inputs | AP | AI |
|---|---|---|---|---|---|---|---|
| `documentation_article` | Product docs page | SaaS, hardware, dev tools | 300–1,500 | TechArticle | exact product behaviour, screenshots, versions | Y | P |
| `help_center_article` | Support article | SaaS, e-commerce, telecom, banks | 200–800 | TechArticle, FAQPage | verified procedure | Y | P |
| `changelog_release_notes` | Dated product changes | SaaS, hardware, apps | 100–600 per entry | SoftwareApplication, Article | change list from engineering | N | P |
| `api_reference` | Endpoint or SDK reference | dev tools, fintech, SaaS | 200–1,000 per endpoint | TechArticle | generated from spec | N | N |
| `community_forum_thread` | User discussion | SaaS, hobbies, marketplaces | UGC | QAPage, DiscussionForumPosting | UGC | N | N |
| `contact_page` | Contact details and form | all | 100–400 | ContactPage, Organization | NAP, hours, channels | N | Y |
| `thank_you_page` | Post-conversion confirmation | all | 100–300 | WebPage | next steps, secondary offer | N | Y |
| `legal_policy_page` | Privacy, terms, cookies, accessibility | all | 800–3,000 | WebPage | legal review required | N | N |
| `claims_how_to_file_page` | Claims process | insurance, warranties, logistics | 500–1,200 | HowTo, FAQPage | process steps, contacts, timelines | Y | P |
| `patient_forms_prep_page` | Pre-visit instructions | healthcare, dental | 300–800 | WebPage, HowTo | form links, instructions | N | P |
| `sitemap_html` | HTML sitemap | all | list | WebPage | URL list | N | N |
| `login_account_cart_checkout` | Auth and transactional pages | e-commerce, SaaS | n/a | WebPage | n/a | N | N |
| `search_results_internal` | Site search results | all | n/a | SearchResultsPage | n/a | N | N |
| `error_404_page` | Not-found page | all | 50–150 | WebPage | top links | N | Y |
| `homepage` | Site home | all | 300–1,000 | WebSite, Organization | positioning, key links, proof | N | P |

## Appendix B. Industry constraints

Seed content for `pm_industry_packs`. Each row: the page types that make up most of a site in that industry, then the constraints the writer and validator enforce.

| Industry | Core page types | Constraints |
|---|---|---|
| B2B SaaS | feature, solution/use case, industry vertical, integration, head-to-head and alternatives, pricing, template/example, glossary term, case study, documentation | comparison pages use verifiable dated competitor facts, nominative trademark use only, no disparagement; integration and X-for-Y pages need genuine per-page substance; docs reflect exact product behaviour supplied by the product, never inferred |
| Professional services, agencies, consulting | service, industry vertical, case study, process, team bio, cost, pillar hub and deep-dive guide, location | deliverables and pricing model are required inputs; results claims need client permission or anonymisation |
| Recruiting and staffing | employer side: service, industry vertical, role persona, branch, case study; candidate side: job posting, job category, salary guide, career guide | two funnels on one site, keep the job board from cannibalising service pages; JobPosting schema needs real salary, location and expiry, expired jobs removed; salary guides state source and year; equal-opportunity language, no discriminatory requirements |
| Healthcare and medtech | condition, treatment/procedure, provider profile, location, specialty service, symptom/problem, FAQ, patient forms | YMYL: named credentialed author and a reviewer with credentials and sameAs to licence boards; MedicalWebPage on clinical pages; no diagnosis, cure or outcome promises; "see a professional" language; no identifiable patient stories without consent; device claims match cleared or approved indications, no off-label claims |
| Legal | practice area, practice area by location, attorney bio, case results, question page, location, FAQ, cost | one page per practice area per genuinely served location, location pages need roughly 400 words of truly local content or should not exist; no "best", "top", "expert", "specialist" unless certified; "prior results do not guarantee a similar outcome" on results; testimonials restricted in some states; "attorney advertising" label where required; no legal advice, "consult an attorney" framing |
| Finance and fintech | financial product, head-to-head, calculator, glossary term, deep-dive guide, regulation explainer, country guide, author bio | YMYL: named credentialed authors, dated content, cited sources; UK: FCA "clear, fair and not misleading", prescribed risk warnings on the face of the page, representative APR examples for credit, promotions approved by an authorised person; US: SEC and FINRA rules on performance claims and testimonials, "not financial advice" disclosures |
| Insurance | coverage line, quote request, location or agent profile, claims how-to, category comparison, cost, FAQ | one page per line explaining scope, exclusions, deductibles, endorsements; coverage varies by state, state licence numbers and "subject to policy terms" disclaimers; no guarantees of payout or savings; premium figures framed as examples |
| Real estate | neighbourhood guide, listing detail, search results listing, agent profile, calculator, buyer and seller guides, about, blog category hub | Fair Housing: no language implying preference by protected class, including "family-friendly" style descriptors; MLS and IDX display rules; licence numbers; market stats need source and date |
| E-commerce, retail, food and CPG | product category, product, buying guide, curated collection, brand, head-to-head and best-of, recipe, FAQ | category pages carry the most traffic, editorial copy sits below the grid; product copy from verified specs; consumer law on "free", "guaranteed" and environmental claims; food: allergen and nutrition data, health-claim regulation, real yields and times |
| Manufacturing, industrial, energy | material or capability, product and spec sheet, industrial application, industry vertical, awards and certifications, quote request, case study, location | built around capabilities, materials, industries, applications and locations, not a generic services page; pages carry tolerances, materials, finishes, MOQ, lead times, certifications; energy: regulated tariff disclosures, safety claims, subsidy eligibility must be current |
| Construction, trades, local services | service, service-area city and service-plus-location, portfolio project, testimonials, cost, financing, symptom/problem, about | every service gets its own page; city pages need local proof and local facts or they are doorway pages; individual project pages beat one gallery; licence, bond and insurance numbers on about and location pages; financing pages need lender disclosures; emergency pages need real response commitments |
| Education and edtech | course or program, pillar hub and deep-dive guide, career guide, head-to-head, cost, is-it-worth-it, FAQ, event | Course and CourseInstance schema need provider, mode, duration, price; outcome claims (placement, salary) need methodology; accreditation status exact; refund terms under consumer protection |
| Travel and hospitality | destination guide, accommodation or room, tour package, top-in-location, menu, event, location, FAQ | accommodation pages nested under destinations; menus as HTML; price and availability dynamic or dated; ratings and stars official; accessibility and safety statements accurate |
| Automotive | model research, listing detail (VDP), search results (SRP), service department, specials, financing, dealer local hub, model-vs-model | VDP and SRP must not use OEM boilerplate; Vehicle schema on VDPs; sold inventory redirected or noindexed; advertised prices need fees and disclaimers per state; financing APR disclosures |
| Nonprofits and government-adjacent | program, donate, impact report, about, event, careers or volunteer, resource library, press release | publish financials and registration numbers; tax-deductibility language matches status; Google Ad Grant content quality; plain-language and accessibility standards; no political endorsement |
| Media, publishers, marketplaces, directories | media: supporting article, pillar hub, best-of, review, author bio, video; marketplaces: product category, top-in-location, partner or vendor profile, listing detail, job category | category pages carry most traffic; vendor profiles need unique copy; affiliate disclosure on reviews and best-of; Review schema only for real reviews; UGC moderation |
| Logistics and telecom | service, route or lane and plan or tariff, industry vertical, calculator, regional landing, migration or switch, help centre article, location | telecom: regulated price and contract disclosures, coverage claims match maps, "up to" speed rules, switching pages state early termination terms; logistics: customs and Incoterms content needs jurisdiction and date, transit times as ranges |
