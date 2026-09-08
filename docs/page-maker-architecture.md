# Page Maker 2.0 — architecture, revision 3

Status: proposal for review before the n8n workflow `MZUUvWCdCXlHKllN` ("Page Maker") is changed.
Revision 3 applies the 33 comments left on revision 2. Everything that is not "receive a webhook, write an excellent page of the requested type, return it in the Content Maker callback shape" is gone.

## 0. Scope

**In scope.** One run receives one webhook for one page in one language and returns the page: body in markdown, answer paragraph where the page type calls for one, five FAQs, meta description (and meta title if the app does not send one), JSON-LD from the page type's schema, the internal links the app asked for placed in the body, and the EEAT analysis the Content Maker callback already carries.

**Out of scope, permanently.** Publishing, slugs and link state, any registry of pages, the content map file, brand data stored in n8n, Search Console, index requests, reverse link passes, SEO density loops, outline generation, evaluation sheets and run logs, Strapi output, blog-article types. The app owns pages, plans, slugs, links and client data. n8n owns page-type specifications and writing quality.

## 1. Run model

The Snoika app calls `POST /webhook/page-maker` once per page per language. The run reads exactly two sources:

| Source | Holds | Where |
|---|---|---|
| Webhook payload | everything about this page and this client: type, H1, outline, keywords, AI prompts, internal links, CTA, facts, writing preferences, domain lists, language | sent by the app |
| Page type specs | how each page type is written: family, word band, answer paragraph, tables, citations, research depth, schema types, required facts, constraints | n8n Data Table `page_type_specs`, one row per type, custom types included |

Nothing is inferred, looked up elsewhere or carried between runs. If the payload or the spec lacks something the page needs, the run stops and says so in the callback.

Pipeline for one run:

```
Parse → Load spec (page_type_specs by pageType) → Check required facts (stop if missing)
→ Research (Tavily, depth from spec, domains from payload)
→ Write in English: H1 and H2 outline exactly as sent, answer paragraph per family,
  AI prompts answered inside the sections, internal links placed as sent, facts only
→ 5 peelers → Style Updater → Validate (structure, links, facts, style) → Section Fixer → Revalidate
→ Answer-coverage check (every AI prompt answered somewhere; misses go back to the fixer once)
→ FAQ (always 5) → Meta (slug from app; title if missing; description) → JSON-LD (from spec) → EEAT
→ Translate body, FAQ, meta with DeepL (only for non-English runs)
→ Build payload → Callback → Money Calculator
```

Progress reporting to the app's progress endpoint stays as in Content Maker 5.0, with the same stage keys minus the ones for stages that no longer exist (outline, SEO edits, quality scores).

## 2. Page types

### 2.1 Specs as data

A page type is a row in `page_type_specs`, not a branch in code. The Page Contract node reads the row for `pageType` and derives section budgets and validation from it. Adding a type, including a one-off type for a niche client, is adding a row. The app's page-type dropdown is the list of rows where `ai_writable` is not `N`.

| Column | Meaning |
|---|---|
| `type_id`, `label`, `family` | id the app sends, label people see, one of the 12 families |
| `definition`, `industries` | what the page is, where it is common (for the dropdown's help text) |
| `words_min`, `words_max`, `default_words` | length band; sections get `default_words` divided by the outline length, clamped |
| `answer_paragraph`, `answer_style`, `answer_max_words` | whether the page opens with a direct answer, and in which style (definition, verdict, key facts, value proposition) |
| `tables_min`, `citations_min`, `research` | minimum tables, minimum external citations, Tavily depth (none, search, deep) |
| `schema_types` | JSON-LD blocks to build, for example `Service + Organization + FAQPage + BreadcrumbList` |
| `required_facts`, `optional_facts` | the fact fields the app must send for this type (drives the UI form) |
| `constraints` | standing rules for sector types: disclaimers, claim limits, reviewer requirement (a condition page needs a named reviewer and "see a professional" language; a practice-area page needs the "prior results do not guarantee" line) |
| `opening`, `section_format_hints` | how the family opens, and default formats (table, steps, bullets) when the outline does not say |
| `ai_writable` | Y, P (writer drafts, facts must be supplied) or N (never written by the flow) |

The seed for this table is the catalogue in Appendix A: 145 types in 12 families, 136 writer-usable. Sector constraints in Appendix B become the `constraints` column of the sector types.

### 2.2 Families

The family fixes the shape: what the page opens with, whether tables, steps or cards dominate, and length. The writer reads the family before the type.

| Family | Reader wants | Opens with |
|---|---|---|
| `hub` | orientation, where to start | scope statement, then grouped links with blurbs |
| `guide` | understanding or completing a task | answer or definition paragraph |
| `reference` | one precise fact or definition | 40–60 word direct answer |
| `evaluation` | a decision between options | verdict paragraph, then criteria and a comparison table |
| `offer` | whether to buy from this company | value proposition and CTA |
| `proof` | evidence the company delivers | headline result |
| `entity` | who this is | key facts |
| `tool` | a personalised output | short framing |
| `asset` | a downloadable or watchable thing | what is inside |
| `local` | the service near me | location-specific H1 and facts |
| `catalogue` | to browse or inspect a specific item | title and key facts |
| `ops` | to operate the product or complete a task | the task |

Every type serves one intent, which is why blog articles are not a type of their own: an article is a `deep_dive_guide`, a `how_to`, a `supporting_article`, an `explainer_what_is`, a `listicle_best_of` and so on, and the spec of that type is what makes it good.

## 3. The webhook payload

### 3.1 Fields on every run

| Field | Required | Notes |
|---|---|---|
| `taskId`, `brandId`, `userId`, `callback_url` | yes | as in Content Maker 5.0 |
| `pageType` | yes | `type_id` from the dropdown |
| `targetLanguage` | yes | language name as today ("English", "German"); one run per language |
| `clientName`, `clientDescription` | yes | who the page is for and what they do; `clientDescription` is Content Maker's `productDescription` |
| `h1` | yes | used verbatim as the H1 |
| `slugPath` | yes | used for canonical and breadcrumb JSON-LD and echoed as `slug` in the callback; the app only sends slugs of published pages for links, this is the page's own slug |
| `siteRootUrl` | yes | for absolute URLs in JSON-LD |
| `coreKeyword` | per spec | required unless the spec says the type has no keyword (case study, author, integration); placed in the H1, one H2 and the first 60 words, at most twice more in the body, never repeated to hit a quota |
| `secondaryKeywords[]` | no | used naturally, never checked by density |
| `h2Outline[]` | yes | the H2s in order, written exactly as sent; optionally each item carries `format` (prose, table, steps, bullets) |
| `aiPrompts[]` | yes | the questions the page must be the cited answer to; answered inside the sections where they fit and used as the first FAQ questions |
| `internalLinks[]` | yes | `{url, anchor}` for every link the page must carry; the app sends only published pages; each is placed once, in body text, never in the H1, the answer paragraph, a heading or a table; an empty list means no internal links |
| `ctaRules`, `ctaUrl` | yes | what to say about the client and the one action to ask for, as in Content Maker; `ctaUrl` is placed in the closing section |
| `writingPreferences` | no | client rules: tone, spelling, claims to avoid, formatting |
| `whitelistDomains[]`, `blacklistDomains[]` | no | research and citation domains, as today |
| `metaTitle` | no | used when sent; generated otherwise |
| `facts` | per spec | object keyed by the spec's `required_facts` and `optional_facts` (section 3.2) |

Gone from revision 2: `words`, `schemaTypes`, `researchDepth` (all from the spec), `mode`, `existingBody`, `pillarId`, `clusterId`, `hubSlug`, `linksOut`, `answerBlock`, `localizedKeyword`, `localizedH1`, `pineconeIndex`, `prompt`, `articleType`, `contentIdea`.

### 3.2 Facts by family

The spec's `required_facts` decides what the app's form asks for. What each family needs beyond the fields above:

| Family | Required facts | Optional facts |
|---|---|---|
| `hub` | child pages: title, one-line summary, URL (published ones) | start-here path |
| `guide` | none | steps, tools, time, prerequisites, expert quotes, sources |
| `reference` | the definition or the verified facts with source and year | related terms, examples |
| `evaluation` | option or competitor list with verifiable facts, feature matrix, pricing with an as-of date | own differentiators, criteria weights |
| `offer` | deliverables or feature list, process, pricing model | price band, proof, certifications, differentiators, plan matrix |
| `proof` | client facts, metrics, quotes, permission status | photos, timeline |
| `entity` | person or organisation record: name, role, credentials, bio, URL, sameAs | publications, awards |
| `tool` | formula or assumptions, inputs, interpretation ranges | methodology text |
| `asset` | what is inside, key findings; reports add methodology, sample, dates | author, charts |
| `local` | NAP, hours, services here, at least three genuinely local facts, local proof | team, parking, photos |
| `catalogue` | the item record: specs, variants, price, availability; clinical pages add sources and reviewer | reviews, related items |
| `ops` | the exact verified procedure or change list | screenshots, versions |

A missing required fact stops the run before any model call; the callback carries `status: blocked` and the list of missing fields. The writer never invents deliverables, prices, metrics or credentials.

## 4. Writing rules the spec and payload drive

**Outline is sacred.** The H2s come from the app, in the order sent, verbatim. No outline agent, no added sections, no reordering. Each section gets a word budget from the spec's `default_words` divided by the number of H2s, clamped to the spec's per-section band. Format hints (table, steps, bullets) come from the outline item when present and from the spec otherwise.

**SEO and GEO at once, without reading forced.** The page serves the core keyword through placement (H1, one H2, first 60 words) and serves the AI prompts through answers woven into the section whose H2 is closest to each question: a direct answering sentence first, then the explanation, then the evidence. There are no inserted "Q&A" blocks and no restated questions. After the Style Updater, an answer-coverage check asks a judge model, for each prompt, which passage answers it; a prompt with no passage goes to the Section Fixer once with the instruction to answer it inside the most related section. Prompts still unanswered become FAQ questions. The callback reports coverage per prompt.

**Answer paragraph.** Families `guide`, `reference`, `evaluation` and `tool` open with a direct answer under the H1, in the style the spec names; the other families open with a value proposition or key facts. The flow generates it; nothing is sent for it.

**Internal links.** Exactly the list from the app: every URL placed once with its anchor (a natural variant of the anchor is allowed, never a bare URL), in body text only. The validator checks each URL appears exactly once and that no other internal-looking URL exists. There is no minimum or maximum; the count is whatever the app sent.

**Facts and evidence.** Numbers, prices, results, certifications and capabilities come only from `facts` or from the research evidence, each statistic with a named source and a link from the evidence. The spec's `citations_min` sets how many external citations the page needs; `tables_min` how many tables.

**Style.** The five peelers (participle pile-ups, series of three, hedging, negative parallelism, tailing negations) and the Style Updater stay as built, on the English text. Banned words, em dashes and semicolons stay in the validator. The validator no longer checks keyword density.

**FAQ.** Always five questions and answers, AI prompts first, then People Also Ask questions from research, then generated ones. One answer mentions the client in the way `ctaRules` describes.

**Constraints.** The spec's `constraints` column adds sector rules to the writer prompt and the validator: required disclaimers, claim limits, reviewer lines. General client rules come through `writingPreferences`.

**Model outputs carry the article between markers, not inside JSON.** The Writer, Style Updater, Section Fixer and translation unwrapper return the full page as markdown between `START_ARTICLE` and `END_ARTICLE` tags, extracted by a Code node, as Content Maker does. A whole article inside a JSON string breaks on escaping and truncation; markers do not.

## 5. Schema

`schema_types` from the spec name the JSON-LD blocks. A library of block builders covers Article, HowTo (from step sections), FAQPage (from the five FAQs), BreadcrumbList (from `slugPath`), Organization, Person and ProfilePage, Service, Product and Offer, SoftwareApplication, WebApplication, DefinedTerm, ItemList (from compared options), Dataset, LocalBusiness and its subtypes, Course, Event, JobPosting, MedicalWebPage with `reviewedBy`, LegalService, Review and AggregateRating (only from real reviews). Each builder declares the facts it needs; a block whose facts are missing is omitted with a warning in the callback, never invented. A schema type with no builder is generated by a model constrained to that schema.org type, validated as JSON and flagged `generated: true`.

## 6. Languages

As built: everything in English through the peelers, the Style Updater, validation, fixing and revalidation. FAQ, meta title and meta description are generated in English too, so every check runs on checked text. Then one DeepL call per text unit (body, FAQ, meta title, meta description) with `tag_handling: html` so the internal links the app sent survive translation untouched. One run per language; the app sends the language's own H1, outline, prompts, links and slug. Languages DeepL does not support fall back to a model translation.

## 7. Callback

`POST {callback_url}/execution-started` at the start and the page at the end, in the Content Maker 5.0 shape without the Strapi block:

```
{
  taskId, brandId, userId, n8nExecutionId,
  slug,                 // echoed from slugPath
  metaTitle,            // sent by the app or generated
  metaDescription,
  articleTextMd,        // the page as markdown, H1 included, internal links in place
  faq: [{question, answer}] × 5,
  eeat: {experience, expertise, authoritativeness, trustworthiness, overall, priorityFix},
  jsonLd,               // array of schema blocks, from the spec
  pageType, language,
  promptCoverage: [{prompt, answered}],
  status: "ok" | "blocked", missing: [...]   // blocked when required facts are absent
}
```

`metaTitle`, `jsonLd`, `pageType`, `language`, `promptCoverage` and `status` are additions to the Content Maker shape; the rest is identical. `articleText` (Strapi blocks) and `similarArticles` are dropped.

## 8. Relation to Content Maker 5.0

Page Maker replaces it. Kept from 5.0: the callback contract above, the progress reporter, the five peelers and the Style Updater, the writer with live research, DeepL translation, FAQ, metadata, EEAT analysis, the Money Calculator. Dropped from 5.0: the outliner, the SEO density check and edit loop, Pinecone internal links, the GEO route switch, the STRAPI converter, the evaluation and run-log sheets. Blog articles are written as catalogue types.

## 9. Node-level delta in the n8n workflow

| Node | Change |
|---|---|
| Parse Request | fields from 3.1; `facts` object; `internalLinks[]`; `h2Outline[]`; `aiPrompts[]`; drop the removed fields |
| Page Contract | replaced by a Data Table lookup of `page_type_specs`; sections come from `h2Outline`, budgets from the spec |
| Load Page Registry, Link Plan | removed; the link plan is `internalLinks` as sent |
| Research Queries | built from H1, core keyword, H2s and AI prompts; depth from the spec |
| Prep Writer | outline verbatim, family opening, AI prompts as questions to answer in place, links as given, facts by kind, spec constraints |
| Page Writer, Style Updater, Section Fixer | output between `START_ARTICLE` and `END_ARTICLE`, extracted by code |
| Validate Draft | outline order and verbatim headings, link presence and placement, fact discipline, citations and tables from the spec, constraints, style; no density |
| Revalidate | actually re-runs Validate |
| new: Answer Coverage | judge over `aiPrompts`, one fixer round for misses |
| FAQ Writer | five questions, prompts first, client mention per `ctaRules` |
| Metadata Generator | slug removed (from app); meta title only when absent; description |
| Build JSON-LD | block builders from the spec's `schema_types`; generated fallback |
| new: EEAT Analysis | ported from Content Maker |
| DeepL Translate | body, FAQ and meta in one batch, links preserved |
| Build Payload, Send Page | Content Maker shape from section 7 |
| Mark Page Written | removed |
| Calculate Money | passes the real title |

## 10. Open points

1. Meta title: should the app always send it, or should the flow generate it when absent (current proposal)?
2. Non-English runs: keep the English citations through translation (current proposal), or strip and re-source them in the target language as Content Maker 5.0 does for its `_lang` route?
3. The five payload additions in section 7: confirm they are acceptable to the app.

## Appendix A. Page-type catalogue

145 types. Columns: AP = needs an answer paragraph under the H1. AI = worth generating with a writer: Y yes, P partial (writer drafts, facts must be supplied and verified), N no (template or engineering owns it). Inputs are in addition to keyword, H1, audience, voice and link targets. Word ranges are defaults the descriptor overrides.

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

## Appendix B. Sector constraints (seed for the `constraints` column)

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
