# Page-type catalogue

The single list of page types a content map may use. `page_type` in run.json is the `type_id` from this file; the workbook shows the label; Page Maker consumes the id. Source of truth is `assets/page_types.json` (same content, machine-readable); keep the two in step.

Contents: how to choose · families · the catalogue by family · industry starter sets · custom types

## How to choose a type for a page

Pick by what the reader wants when the core keyword is typed, then by what the client sells:

1. Every map has a skeleton whatever the industry: `pillar_hub` per pillar, `cluster_hub` per cluster, at least one `service_page` (or the offer-family type that matches the client's model: `course_program_page`, `product_page`, `coverage_line_page`, `practice_area_page`...), `about_page`, one `author_bio_page` per named specialist, `case_study` slots, and `glossary_term` entries. Every pillar ends in a conversion page inside the pillar.
2. Informational demand ("what is", "how to", "why", "signs of") goes to the `guide` and `reference` families. Definitional variants always go to `glossary_term` or `explainer_what_is`, never to the article on the topic.
3. Decision demand ("vs", "best", "alternatives", "cost", "worth it") goes to the `evaluation` family. Two named options → `head_to_head_vs`; three or more → `listicle_best_of`; a competitor's name plus "alternatives" → `alternatives_page`; "how much does X cost" → `cost_page`.
4. Commercial demand for something the client sells goes to the `offer` family, qualified by industry (`industry_vertical_page`), buyer (`role_persona_page`), size (`segment_size_page`) or place (`local` family).
5. Sector-specific types exist for a reason: a clinic gets `condition_page` and `treatment_procedure_page`, a law firm `practice_area_page` and `attorney_bio`, a manufacturer `material_capability_page` and `spec_sheet`, a dealership `model_research_page`. Use them instead of forcing a generic article; their required inputs and schema are what the vertical's result pages expect. The industry starter sets below list the usual mix.
6. Types marked AI = N are template or engineering pages; they may appear in the site architecture section of the plan but never as map rows with a core keyword.
7. Nothing fits: declare a custom type (last section) rather than stretching a label. A custom type still has a family, and the family decides how the page opens and what the writer must have.

Word count for a row is the type's default (`default_words`) unless the SERP or the client's convention says otherwise; the range is the allowed band. Schema for a row is `default_schema` unless the map specifies more (HowTo for a procedural deep-dive, for example).

## Families

Every type belongs to one family. The family fixes the shape: what the page opens with, whether tables, steps or cards dominate, and how long it is. The writer (Page Maker) reads the family before the type.

| Family | Reader wants | Opens with | Priority points | Fine below 10 searches |
|---|---|---|---|---|
| `hub` | orientation, where to start | scope statement | 15 | yes |
| `guide` | understanding or completing a task | answer paragraph | 8 | no |
| `reference` | one precise fact or definition | direct answer | 3 | no |
| `evaluation` | a decision between options | verdict paragraph | 8 | no |
| `offer` | whether to buy from this company | value proposition and CTA | 12 | yes |
| `proof` | evidence the company delivers | headline result | 6 | yes |
| `entity` | who this is | key facts | 5 | yes |
| `tool` | a personalised output | short framing | 8 | no |
| `asset` | a downloadable or watchable thing | what is inside | 8 | no |
| `local` | the service near me | location H1 and NAP | 10 | yes |
| `catalogue` | to browse or inspect a specific item | title and key facts | 8 | yes |
| `ops` | to operate the product or complete a task | the task | 2 | yes |

"Fine below 10 searches" means the page exists for completeness or conversion and is not penalised in the priority score for having no measurable volume.

## The catalogue

Columns: default words (allowed range), default schema, what the client must supply beyond keyword, H1, audience and links, AP = opens with an answer paragraph, AI = Y writer-ready, P writer drafts but the facts must be supplied and verified, N not written by the page maker.

### hub (11)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `pillar_hub` | Pillar hub | Broad topic overview that summarises and links every cluster page | all content-led sites | 2,500 (2,000–5,000) | Article + FAQPage + BreadcrumbList + Organization | child list with slugs and one-line summaries, scope boundaries | Y | Y |
| `cluster_hub` | Cluster hub | Mid-level index for a sub-topic within a pillar | same | 1,800 (800–2,000) | Article + FAQPage + BreadcrumbList | child list, parent pillar slug | Y | Y |
| `resource_library` | Resource library | Index of downloadable or watchable assets | SaaS, B2B services, nonprofits, education | 550 (300–800) | CollectionPage + ItemList + BreadcrumbList | asset inventory | N | Y |
| `blog_category_hub` | Blog category hub | Blog category landing with editorial intro | all | 400 (200–600) | CollectionPage + BreadcrumbList | category scope, top posts | N | Y |
| `glossary_index` | Glossary index | A–Z index of terms with one-line definitions | SaaS, finance, legal, health, industrial | 1,000 (500–1,500) | DefinedTermSet + CollectionPage + BreadcrumbList | term list | N | Y |
| `service_area_hub` | Service area hub | Index of all city or region pages served | local services, trades, healthcare networks, law, real estate | 550 (300–800) | CollectionPage + LocalBusiness + BreadcrumbList | area list, map | N | Y |
| `location_index` | Location index | Directory of physical branches | multi-location retail, healthcare, banks, dealerships | 400 (200–600) | CollectionPage + ItemList + BreadcrumbList | location data per site | N | Y |
| `industry_hub` | Industry hub | Index of all vertical pages | SaaS, agencies, manufacturing, insurance, staffing | 550 (300–800) | CollectionPage + BreadcrumbList | vertical list | N | Y |
| `integration_directory` | Integration directory | Index of integration pages by category | SaaS | 550 (300–800) | CollectionPage + ItemList + BreadcrumbList | integration list | N | Y |
| `template_gallery_hub` | Template gallery hub | Index of templates or examples | SaaS, agencies, creators | 550 (300–800) | CollectionPage + BreadcrumbList | template inventory | N | Y |
| `topic_hub_programmatic` | Topic hub programmatic | Programmatic hub for a modifier set ("LLC by state") | programmatic sites, legal-tech, fintech | 550 (300–800) | CollectionPage + BreadcrumbList | entity list, child slugs | N | Y |

### guide (12)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `deep_dive_guide` | Deep-dive guide | Complete guide to one topic | all | 2,000 (2,000–4,000) | Article + FAQPage + HowTo + BreadcrumbList | sub-topic outline, sources, expert quotes, author | Y | Y |
| `how_to` | How-to guide | Step-by-step instructions for one task | all; SaaS, trades, DIY, finance | 1,750 (1,000–2,500) | HowTo + Article + BreadcrumbList | steps, tools, time, prerequisites | Y | Y |
| `supporting_article` | Supporting article | Narrow cluster article on one sub-question | all | 1,400 (800–1,800) | Article + FAQPage + BreadcrumbList | parent hub slug, sources | Y | Y |
| `explainer_what_is` | What-is explainer | "What is X" conceptual article | SaaS, finance, health, legal, industrial | 1,500 (1,000–2,000) | Article + FAQPage + BreadcrumbList | sources, examples, related terms | Y | Y |
| `checklist` | Checklist | Actionable checklist with context per item | compliance, ops, moving, events, HR | 1,300 (800–1,800) | HowTo + Article + ItemList + BreadcrumbList | items, downloadable version | Y | Y |
| `regulation_compliance_explainer` | Regulation compliance explainer | Plain-language explanation of a law or standard | legal, finance, HR, health, energy, telecom | 2,250 (1,500–3,000) | Article + FAQPage + BreadcrumbList | official citations, jurisdiction, dates, penalties, reviewer | Y | P |
| `process_page` | Process | What happens when you work with us | professional services, healthcare, legal, construction | 1,100 (700–1,500) | Article + Service + BreadcrumbList | steps, timelines | Y | Y |
| `mistakes_pitfalls` | Mistakes pitfalls | Mistakes to avoid | all | 1,500 (1,000–2,000) | Article + BreadcrumbList | mistake list with fixes | Y | Y |
| `trend_outlook` | Trend outlook | Annual trends or state of X | B2B, agencies, tech, HR, retail | 2,250 (1,500–3,000) | Article + BreadcrumbList | data sources, quotes, year | Y | P |
| `symptom_problem_page` | Symptom problem | Why is X happening, signs of X | healthcare, trades, auto, IT | 1,500 (1,000–2,000) | Article + MedicalWebPage + FAQPage + BreadcrumbList | causes, severity guidance, when-to-call thresholds, reviewer | Y | P |
| `destination_guide` | Destination guide | Travel or area guide | travel, hospitality, real estate, relocation | 2,500 (1,500–3,500) | Article + TouristDestination + FAQPage + BreadcrumbList | place data, attractions, seasons | Y | Y |
| `career_guide` | Career guide | How to become an X | recruiting, education, professional bodies | 2,000 (1,500–2,500) | Article + FAQPage + BreadcrumbList | requirements, salary data, steps | Y | Y |

### reference (8)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `glossary_term` | Glossary term | Single term definition | SaaS, finance, legal, health, industrial, marketing | 450 (300–900) | DefinedTerm + DefinedTermSet + BreadcrumbList | definition, example, related terms, glossary slug | Y | Y |
| `faq_page` | FAQ page | Standalone FAQ for a topic or service | all; healthcare, legal, insurance, local | 1,400 (800–2,000) | FAQPage + BreadcrumbList | question list with source answers | N | Y |
| `statistics_page` | Statistics page | Curated statistics roundup with citations | B2B, SaaS, agencies, HR, health, finance | 2,250 (1,500–3,000) | Article + Dataset + ItemList + BreadcrumbList | verified stats with source and year each | Y | P |
| `spec_sheet` | Spec sheet | Technical specification page | manufacturing, industrial, electronics, energy, telecom | 650 (300–1,000) | Product + PropertyValue + TechArticle + BreadcrumbList | spec table, tolerances, certifications, datasheet | N | P |
| `question_page` | Question | Single-question page | legal, healthcare, finance, insurance, HR | 850 (500–1,200) | Article + QAPage + FAQPage + BreadcrumbList | authoritative answer, jurisdiction, reviewer | Y | P |
| `entity_lookup` | Entity lookup | Programmatic fact page about an entity | data sites, fintech, health, HR | 550 (300–800) | Article + Dataset + BreadcrumbList | structured entity record | Y | P |
| `country_region_guide` | Country region guide | Regulatory or practical reference by jurisdiction | HR, fintech, legal-tech, logistics, travel | 1,850 (1,200–2,500) | Article + FAQPage + BreadcrumbList | jurisdiction data, sources, dates | Y | P |
| `salary_guide` | Salary guide | Compensation reference by role or region | recruiting, HR, education | 1,750 (1,000–2,500) | Article + Dataset + FAQPage + BreadcrumbList | salary data with source and methodology | Y | P |

### evaluation (12)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `listicle_best_of` | Best-of list | Best X ranked list | SaaS, e-commerce, agencies, marketplaces, travel | 2,500 (1,500–3,500) | Article + ItemList + BreadcrumbList | candidate list, criteria, pricing, own position | Y | P |
| `head_to_head_vs` | Head-to-head comparison | A vs B comparison | SaaS, fintech, insurance, e-commerce, auto, education | 1,800 (1,500–3,000) | Article + FAQPage + ItemList + BreadcrumbList | feature matrix, pricing for both, ideal user for each | Y | P |
| `alternatives_page` | Alternatives page | Competitor alternatives list with own product positioned | SaaS, fintech, services | 1,600 (1,500–3,000) | Article + ItemList + BreadcrumbList | competitor list with verifiable weaknesses, own differentiators | Y | P |
| `competitor_comparison_own` | Us-vs-competitor page | Us vs competitor first-party page | SaaS, services, insurance, telecom | 1,500 (1,000–2,000) | WebPage + FAQPage + BreadcrumbList | feature matrix, pricing, proof | Y | P |
| `review_page` | Review | In-depth review of one third-party product | media, affiliates, marketplaces | 2,250 (1,500–3,000) | Review + Product + BreadcrumbList | hands-on notes, rubric, pricing | Y | P |
| `cost_page` | Cost page | How much does X cost | trades, legal, healthcare, agencies, real estate, auto, education | 1,850 (1,200–2,500) | Article + FAQPage + BreadcrumbList | price ranges with factors and sources, own pricing | Y | P |
| `is_x_worth_it` | Is-it-worth-it page | Value judgement on a purchase or decision | consumer and B2B | 1,500 (1,000–2,000) | Article + FAQPage + BreadcrumbList | costs, benefits, breakeven data | Y | Y |
| `diy_vs_pro` | DIY-vs-professional page | X vs doing it yourself | trades, legal, accounting, agencies, home services | 1,500 (1,000–2,000) | Article + FAQPage + BreadcrumbList | cost, time and risk comparison data | Y | Y |
| `category_comparison` | Category comparison | Types of X compared | insurance, finance, materials, health, education | 1,850 (1,200–2,500) | Article + ItemList + BreadcrumbList | category attributes table | Y | Y |
| `buying_guide` | Buying guide | How to choose X, then picks | e-commerce, retail, industrial, auto, insurance | 2,250 (1,500–3,000) | Article + ItemList + FAQPage + BreadcrumbList | criteria, product list, specs, price bands | Y | P |
| `top_in_location` | Best-in-location list | Best X in city | marketplaces, directories, travel, local media, real estate | 1,750 (1,000–2,500) | ItemList + LocalBusiness + BreadcrumbList | verified local entity list, ratings, addresses | Y | P |
| `migration_switch_page` | Migration switch | Switching from A to B | SaaS, telecom, banks, energy, insurance | 1,500 (1,000–2,000) | Article + HowTo + FAQPage + BreadcrumbList | migration steps, data mapping, incentives | Y | P |

### offer (22)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `service_page` | Service page | Core commercial page for one service | professional services, agencies, trades, healthcare, legal, logistics | 1,200 (800–2,000) | Service + Organization + FAQPage + BreadcrumbList | deliverables, process, pricing model, proof, differentiators | N | Y |
| `solution_use_case_page` | Solution page | Product framed around one job to be done | SaaS, fintech, industrial | 1,100 (800–1,800) | Service + FAQPage + BreadcrumbList | pain points, feature mapping, outcomes, proof | N | Y |
| `industry_vertical_page` | Industry page | Product or service framed for one industry | SaaS, agencies, insurance, staffing, manufacturing, logistics, telecom | 1,300 (800–1,800) | Service + FAQPage + BreadcrumbList | industry pains, regulations, proof, vertical vocabulary | N | Y |
| `role_persona_page` | Role page | Framed for a job title or persona | SaaS, B2B services | 1,100 (700–1,500) | WebPage + BreadcrumbList | persona goals and objections, features that matter | N | Y |
| `segment_size_page` | Segment page | Framed for company size or segment | SaaS, fintech, telecom, insurance | 1,100 (700–1,500) | WebPage + BreadcrumbList | segment needs, plan mapping, proof | N | Y |
| `feature_page` | Feature | One product feature explained | SaaS, hardware, auto, telecom | 1,050 (600–1,500) | SoftwareApplication + Product + FAQPage + BreadcrumbList | feature spec, screenshots, use cases, plan availability | N | Y |
| `integration_page` | Integration | Product plus partner integration page | SaaS, fintech, e-commerce platforms | 850 (500–1,200) | SoftwareApplication + HowTo + FAQPage + BreadcrumbList | partner data, triggers and actions, setup steps | Y | Y |
| `x_for_y_programmatic` | X-for-Y page | Templated product for segment, place or use | SaaS, services, legal-tech, fintech, marketplaces | 850 (500–1,200) | WebPage + Service + FAQPage + BreadcrumbList | at least three page-specific facts, entity data | Y | P |
| `pricing_page` | Pricing | Plans, tiers, billing FAQ | SaaS, telecom, subscriptions, agencies, education | 800 (400–1,200) | Product + Offer + PriceSpecification + FAQPage + BreadcrumbList | plan matrix, prices, limits, add-ons | N | P |
| `product_landing_page` | Product landing | Long-form single-product persuasion page | DTC e-commerce, courses, hardware, apps | 1,650 (800–2,500) | Product + Offer + FAQPage + BreadcrumbList | benefits, specs, proof, guarantees, objections | N | Y |
| `quote_request_page` | Quote request | Quote or estimate page with form | insurance, trades, logistics, manufacturing, printing | 500 (300–700) | ContactPage + Service + BreadcrumbList | form fields, turnaround, what affects the quote | N | Y |
| `brand_page` | Brand | Brand or manufacturer page within a retailer | e-commerce, distribution, auto, industrial | 700 (400–1,000) | Brand + CollectionPage + BreadcrumbList | brand facts, product lines, authorised status | N | Y |
| `partnership_program_page` | Partnership program | Partner, affiliate or reseller program | SaaS, telecom, fintech, manufacturing | 900 (600–1,200) | WebPage + Offer + BreadcrumbList | program terms, tiers, benefits | N | Y |
| `course_program_page` | Course program | Course, degree or bootcamp | education, edtech, training | 1,400 (800–2,000) | Course + CourseInstance + Offer + FAQPage + BreadcrumbList | curriculum, duration, outcomes, prerequisites, price, accreditation | N | Y |
| `membership_plan_page` | Membership plan | Gym, club or subscription plan | fitness, media, associations, coworking | 850 (500–1,200) | Offer + Product + BreadcrumbList | plan details, terms | N | Y |
| `financing_page` | Financing | Payment plans and financing | auto, trades, dental, furniture, education | 750 (500–1,000) | WebPage + LoanOrCredit + FAQPage + BreadcrumbList | lender terms, APR ranges, eligibility, disclosures | N | P |
| `ad_landing_page` | Ad landing | Campaign page, usually noindex, single CTA | all | 650 (300–1,000) | WebPage + BreadcrumbList | offer, audience, message match, form | N | Y |
| `squeeze_lead_magnet_page` | Squeeze lead magnet | Minimal asset-for-contact page | all | 300 (150–400) | WebPage + BreadcrumbList | asset summary, form | N | Y |
| `pre_launch_waitlist_page` | Pre launch waitlist | Coming soon capture page | startups, launches, developments | 300 (150–400) | WebPage + BreadcrumbList | launch date, teaser | N | Y |
| `donate_page` | Donate | Donation conversion page | nonprofits | 550 (300–800) | DonateAction + NGO + BreadcrumbList | giving levels, impact per amount, tax status | N | Y |
| `program_page` | Program | Nonprofit program page | nonprofits, government-adjacent | 1,050 (600–1,500) | WebPage + Service + NGO + BreadcrumbList | goals, beneficiaries, outcomes, funders | N | Y |
| `specials_offers_page` | Specials offers | Current promotions | auto dealers, retail, restaurants, trades | 400 (200–600) | Offer + SpecialAnnouncement + BreadcrumbList | offer list with expiry | N | P |

### proof (7)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `case_study` | Case study | One client story | B2B services, SaaS, agencies, manufacturing, construction | 900 (800–1,800) | Article + CaseStudy + BreadcrumbList | client facts, metrics, quotes, permission status | N | P |
| `case_results_page` | Case results | Verdicts and settlements list | legal | 800 (400–1,200) | ItemList + WebPage + BreadcrumbList | results with dates, disclaimer | N | P |
| `testimonials_reviews_page` | Testimonials reviews | Aggregated reviews | all local and services | 800 (400–1,200) | Review + AggregateRating + Organization + BreadcrumbList | verified review text, ratings source | N | P |
| `portfolio_project_page` | Portfolio project | One completed project | construction, architecture, agencies, interiors, landscaping | 700 (400–1,000) | CreativeWork + Article + Place + BreadcrumbList | project facts, location, photos, scope | N | P |
| `impact_report_page` | Impact report | Annual impact summary | nonprofits, ESG, energy | 1,750 (1,000–2,500) | Report + Article + BreadcrumbList | outcome metrics, financials, stories | N | P |
| `awards_certifications_page` | Awards certifications | Credentials and accreditations | manufacturing, healthcare, legal, finance, trades, logistics | 550 (300–800) | Organization + ItemList + BreadcrumbList | credential list with issuing bodies | N | P |
| `customer_logos_wall` | Customer logos wall | Trusted-by index | SaaS, agencies | 250 (100–400) | Organization | logo list | N | N |

### entity (11)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `about_page` | About | Company story, mission, facts | all | 850 (500–1,200) | AboutPage + Organization + BreadcrumbList | founding facts, team size, locations, values | N | Y |
| `team_index` | Team index | Team directory | services, healthcare, legal, agencies | 350 (200–500) | CollectionPage + Person + BreadcrumbList | roster | N | Y |
| `team_member_bio` | Team member bio | Individual staff profile | services, agencies, law, finance | 550 (300–800) | ProfilePage + Person + BreadcrumbList | CV facts, credentials | N | P |
| `author_bio_page` | Author page | Author page for bylines | media, health, finance, SaaS blogs | 1,400 (300–800) | Person + ProfilePage + BreadcrumbList | credentials, sameAs, published articles | N | P |
| `attorney_bio` | Attorney bio | Lawyer profile | legal | 850 (500–1,200) | ProfilePage + Person + BreadcrumbList | admissions, education, results with disclaimer | N | P |
| `provider_profile` | Provider profile | Clinician profile | healthcare, dental, veterinary, therapy | 700 (400–1,000) | ProfilePage + Physician + MedicalOrganization + BreadcrumbList | specialties, board certs, insurances, locations, NPI | N | P |
| `agent_profile` | Agent profile | Real estate or insurance agent | real estate, insurance, finance | 650 (400–900) | ProfilePage + RealEstateAgent + BreadcrumbList | licence number, areas, listings, reviews | N | P |
| `partner_vendor_profile` | Partner vendor profile | Partner or vendor listing | marketplaces, partner programs, directories | 550 (300–800) | ProfilePage + Organization + BreadcrumbList | partner data, services, ratings | N | P |
| `company_facts_page` | Company facts | Programmatic company profile | data sites, recruiting, fintech | 550 (300–800) | Organization + ProfilePage + BreadcrumbList | structured company record | Y | P |
| `press_room` | Press room | Media kit and releases index | mid and large companies, nonprofits | 350 (200–500) | CollectionPage + Organization + BreadcrumbList | press contact, assets | N | Y |
| `press_release_news` | Press release news | Single press release | all | 650 (400–900) | NewsArticle + BreadcrumbList | facts, quotes, boilerplate, date | N | P |

### tool (5)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `calculator_page` | Calculator | Calculator with explanatory copy | fintech, real estate, SaaS, health, logistics, HR, energy | 1,000 (500–1,500) | WebApplication + HowTo + FAQPage + BreadcrumbList | formula or assumptions, inputs, interpretation ranges | Y | P |
| `quiz_assessment_page` | Quiz assessment | Self-assessment or eligibility quiz | healthcare, education, insurance, SaaS | 650 (300–1,000) | WebApplication + Quiz + BreadcrumbList | question logic, result descriptions | N | P |
| `configurator_estimator` | Configurator estimator | Configurator or instant estimate | manufacturing, construction, auto, printing | 550 (300–800) | WebApplication + Product + BreadcrumbList | option data, pricing rules | N | P |
| `generator_checker_tool` | Generator checker tool | Free utility | SaaS, marketing, legal-tech | 850 (500–1,200) | WebApplication + FAQPage + BreadcrumbList | tool purpose, limits | Y | P |
| `interactive_map_finder` | Locator page | Store or provider locator | retail, healthcare, auto, telecom, banks | 250 (100–400) | WebApplication + ItemList | location dataset | N | N |

### asset (8)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `research_report` | Research report | Original research findings | B2B, SaaS, agencies, HR, fintech, industry bodies | 2,200 (2,000–6,000) | Article + Dataset + FAQPage + BreadcrumbList | methodology, sample, findings, charts, author | Y | P |
| `whitepaper_ebook_gate` | Whitepaper or ebook gate | Gated asset landing page | B2B, SaaS, finance, industrial | 550 (300–800) | DigitalDocument + WebPage + BreadcrumbList | asset outline, takeaways, form | N | Y |
| `template_example_page` | Template example | Downloadable or copyable template | SaaS, HR, legal-tech, finance, agencies | 1,050 (600–1,500) | CreativeWork + HowTo + BreadcrumbList | template file, fields explained | Y | Y |
| `webinar_page` | Webinar | Registration or on-demand webinar | SaaS, B2B, education, healthcare CE | 550 (300–800) | Event + VideoObject + BreadcrumbList | speakers, agenda, date, replay | N | Y |
| `video_page` | Video | Single video with transcript | media, SaaS, education, health | 900 (300–1,500) | VideoObject + Article + BreadcrumbList | transcript, chapters | Y | P |
| `podcast_episode_page` | Podcast episode | Episode page with show notes | media, B2B | 800 (400–1,200) | PodcastEpisode + BreadcrumbList | transcript or notes, guests | N | P |
| `infographic_data_viz_page` | Infographic page | Infographic host page | marketing, health, finance, nonprofits | 700 (400–1,000) | ImageObject + Article + BreadcrumbList | image, data sources | Y | P |
| `original_dataset_page` | Original dataset | Public dataset or index page | fintech, HR, proptech, energy, logistics | 1,650 (800–2,500) | Dataset + Report + BreadcrumbList | data, methodology, update cadence | Y | P |

### local (8)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `location_page` | Location | Physical branch, office, clinic or store | healthcare, legal, retail, banks, dealerships, agencies | 850 (500–1,200) | LocalBusiness + Place + FAQPage + BreadcrumbList | NAP, hours, staff, services here, parking, reviews | N | P |
| `service_area_city_page` | Service-area city page | Service delivered in a city without premises | trades, home services, cleaning, movers, IT support | 850 (500–1,200) | Service + LocalBusiness + FAQPage + BreadcrumbList | local proof, local facts (codes, climate, permits), response time | N | P |
| `service_plus_location_page` | Service-in-location page | One service in one place | trades, legal, healthcare, staffing | 900 (600–1,200) | Service + LocalBusiness + FAQPage + BreadcrumbList | as above plus service-specific local factors | N | P |
| `neighborhood_area_guide` | Area guide | Area guide with market data | real estate, relocation, hospitality | 1,750 (1,000–2,500) | Place + Article + FAQPage + BreadcrumbList | market stats, schools, amenities, listings | Y | P |
| `practice_location_legal` | Practice area by location | Practice area in a jurisdiction | legal | 1,150 (800–1,500) | LegalService + Attorney + FAQPage + BreadcrumbList | local courts, statutes, deadlines, results, bar disclaimers | N | P |
| `branch_page_staffing` | Branch staffing | Recruiting branch or market page | staffing, banks, insurance | 750 (500–1,000) | LocalBusiness + FAQPage + BreadcrumbList | local market data, roles, team | N | P |
| `dealer_local_hub` | Dealer local hub | City inventory hub for a dealership | automotive | 550 (300–800) | AutoDealer + ItemList + BreadcrumbList | inventory feed, local facts | N | P |
| `regional_country_landing` | Regional country landing | Country or region landing | SaaS, fintech, telecom, travel, logistics | 850 (500–1,200) | WebPage + Organization + BreadcrumbList | local pricing, currency, compliance, support hours | N | P |

### catalogue (26)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `product_page` | Product | Single product | e-commerce, retail, industrial, food | 750 (300–1,200) | Product + Offer + AggregateRating + BreadcrumbList | specs, variants, price, stock, images, reviews, compliance labels | N | P |
| `product_category_page` | Product category | Category with editorial copy | e-commerce, retail, distribution | 500 (200–800) | CollectionPage + ItemList + BreadcrumbList | product feed, subcategories, buying tips | N | Y |
| `collection_curated_page` | Collection curated | Themed collection | e-commerce, retail, travel | 400 (200–600) | CollectionPage + ItemList + BreadcrumbList | selection rule, theme | N | Y |
| `intermediary_category_page` | Intermediary category | Parent category routing to subcategories | e-commerce, industrial | 350 (200–500) | CollectionPage + BreadcrumbList | subcategory list | N | Y |
| `listing_detail_page` | Listing detail | Single listing (property, vehicle, rental) | real estate, auto, marketplaces, travel | 600 (300–900) | RealEstateListing + Vehicle + Offer + Accommodation + BreadcrumbList | listing record, photos, features, price | N | P |
| `search_results_listing_page` | Search results listing | Filtered listing grid | real estate, auto, marketplaces, jobs | 250 (100–400) | SearchResultsPage + CollectionPage | filter definitions, feed | N | N |
| `model_research_page` | Model research | Hand-written page for a vehicle model or product line | automotive, appliances, electronics | 1,300 (800–1,800) | Product + Vehicle + FAQPage + BreadcrumbList | trims, specs, pricing, inventory link | Y | P |
| `job_posting_page` | Job posting | Single vacancy | recruiting, all employers | 650 (400–900) | JobPosting + BreadcrumbList | role, salary, location, employer, deadline | N | P |
| `job_category_page` | Job category | Jobs by role, industry or location | recruiting, marketplaces | 400 (200–600) | CollectionPage + ItemList + BreadcrumbList | job feed, market notes | N | P |
| `careers_page` | Careers | Employer branding and open roles | all employers | 850 (500–1,200) | WebPage + Organization + BreadcrumbList | culture, benefits, hiring process | N | Y |
| `event_page` | Event | Single event or class | education, nonprofits, hospitality, B2B, arts | 600 (300–900) | Event + Offer + Place + BreadcrumbList | date, venue, agenda, tickets, speakers | N | Y |
| `recipe_page` | Recipe | Recipe | food, media, hospitality, appliance brands | 1,050 (600–1,500) | Recipe + HowTo + VideoObject + BreadcrumbList | ingredients, steps, times, nutrition, yield | Y | Y |
| `menu_page` | Menu | Restaurant menu as HTML | hospitality | 500 (200–800) | Menu + MenuSection + MenuItem + BreadcrumbList | menu data, allergens, prices | N | P |
| `accommodation_room_page` | Accommodation room | Hotel room or property type | hospitality, travel | 550 (300–800) | Accommodation + HotelRoom + Offer + BreadcrumbList | room facts, amenities, rates | N | P |
| `tour_package_page` | Tour package | Tour or itinerary | travel | 1,400 (800–2,000) | TouristTrip + Offer + FAQPage + BreadcrumbList | itinerary, inclusions, price, dates | N | Y |
| `app_marketplace_listing` | App marketplace listing | App or plugin listing | SaaS platforms, marketplaces | 550 (300–800) | SoftwareApplication + Offer + BreadcrumbList | app data, screenshots, pricing | N | P |
| `material_capability_page` | Capability or material page | Manufacturing capability or material | manufacturing, industrial, construction materials | 1,300 (800–1,800) | Service + Product + FAQPage + BreadcrumbList | tolerances, equipment, materials, certs, lead times, MOQ | N | P |
| `application_page_industrial` | Industrial application page | Industrial use-case page | manufacturing, energy, telecom, logistics | 1,100 (700–1,500) | Service + Product + FAQPage + BreadcrumbList | application requirements, relevant products, compliance | N | Y |
| `condition_page` | Condition | Medical condition overview | healthcare, dental, veterinary, mental health | 1,750 (1,000–2,500) | MedicalWebPage + MedicalCondition + FAQPage + BreadcrumbList | clinical facts with sources, reviewer, when to seek care | Y | P |
| `treatment_procedure_page` | Treatment procedure | Treatment or procedure | healthcare, dental, cosmetic, physio, vet | 1,500 (1,000–2,000) | MedicalWebPage + MedicalProcedure + FAQPage + BreadcrumbList | clinical facts, provider, costs, insurance, reviewer | Y | P |
| `drug_medication_page` | Drug medication | Medication reference | pharma, pharmacies, health publishers | 1,500 (1,000–2,000) | MedicalWebPage + Drug + BreadcrumbList | dosage, interactions, sources, reviewer | Y | P |
| `practice_area_page` | Practice area | Legal practice area | legal | 2,000 (1,500–2,500) | LegalService + FAQPage + Attorney + BreadcrumbList | statutes, process, deadlines, results with disclaimer, attorneys | N | P |
| `coverage_line_page` | Coverage line | Insurance line | insurance | 1,300 (800–1,800) | Service + InsuranceAgency + FAQPage + BreadcrumbList | coverage scope, exclusions, deductibles, state availability | N | P |
| `financial_product_page` | Financial product | Loan, card, account or fund | banks, fintech, lenders, investment | 1,050 (600–1,500) | FinancialProduct + Offer + FAQPage + BreadcrumbList | rates, fees, eligibility, representative example, risk warnings | N | P |
| `plan_tariff_page` | Plan tariff | Telecom, energy or utility plan | telecom, energy, utilities | 850 (500–1,200) | Offer + Product + FAQPage + BreadcrumbList | tariff data, contract terms, regulated disclosures | N | P |
| `route_lane_page` | Route lane | Shipping route or corridor | logistics, freight, travel | 850 (500–1,200) | Service + FAQPage + BreadcrumbList | transit times, ports, pricing factors, customs notes | N | P |

### ops (15)

| type_id | Label | What it is | Common industries | Words | Schema | Client must supply | AP | AI |
|---|---|---|---|---|---|---|---|---|
| `documentation_article` | Documentation article | Product docs page | SaaS, hardware, dev tools | 900 (300–1,500) | TechArticle + BreadcrumbList | exact product behaviour, screenshots, versions | Y | P |
| `help_center_article` | Help center article | Support article | SaaS, e-commerce, telecom, banks | 500 (200–800) | TechArticle + FAQPage + BreadcrumbList | verified procedure | Y | P |
| `changelog_release_notes` | Changelog release notes | Dated product changes | SaaS, hardware, apps | 350 (100–600) | SoftwareApplication + Article + BreadcrumbList | change list from engineering | N | P |
| `api_reference` | API reference | Endpoint or SDK reference | dev tools, fintech, SaaS | 600 (200–1,000) | TechArticle | generated from spec | N | N |
| `community_forum_thread` | Community forum thread | User discussion | SaaS, hobbies, marketplaces | n/a | QAPage + DiscussionForumPosting | UGC | N | N |
| `contact_page` | Contact | Contact details and form | all | 250 (100–400) | ContactPage + Organization + BreadcrumbList | NAP, hours, channels | N | Y |
| `thank_you_page` | Thank you | Post-conversion confirmation | all | 200 (100–300) | WebPage + BreadcrumbList | next steps, secondary offer | N | Y |
| `legal_policy_page` | Legal policy | Privacy, terms, cookies, accessibility | all | 1,900 (800–3,000) | WebPage | legal review required | N | N |
| `claims_how_to_file_page` | Claims how to file | Claims process | insurance, warranties, logistics | 850 (500–1,200) | HowTo + FAQPage + BreadcrumbList | process steps, contacts, timelines | Y | P |
| `patient_forms_prep_page` | Patient forms prep | Pre-visit instructions | healthcare, dental | 550 (300–800) | WebPage + HowTo + BreadcrumbList | form links, instructions | N | P |
| `sitemap_html` | HTML sitemap | HTML sitemap | all | n/a | WebPage | URL list | N | N |
| `login_account_cart_checkout` | Login, account, cart, checkout | Auth and transactional pages | e-commerce, SaaS | n/a | WebPage | n/a | N | N |
| `search_results_internal` | Search results internal | Site search results | all | n/a | SearchResultsPage | n/a | N | N |
| `error_404_page` | 404 page | Not-found page | all | 100 (50–150) | WebPage + BreadcrumbList | top links | N | Y |
| `homepage` | Homepage | Site home | all | 650 (300–1,000) | WebSite + Organization + BreadcrumbList | positioning, key links, proof | N | P |

## Industry starter sets

The five to eight types that make up most of a site in each sector, and the writing constraints the map must respect (they go into the plan tab's Templates row and into every brief). Use the set as the first draft of the pillar-to-type allocation, then add from the catalogue.

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

## Custom types

When a client needs a page the catalogue lacks, add it to `run.json.client.custom_page_types` and use its id in `page_type`:

```
"custom_page_types": [
  { "type_id": "grant_program_page", "family": "offer", "label": "Grant programme page",
    "default_words": 1000, "words": {"min": 700, "max": 1400},
    "default_schema": "Grant + Organization + FAQPage + BreadcrumbList",
    "required_inputs": "funder, amount range, deadline, eligibility criteria, application steps",
    "answer_paragraph": true }
]
```

`family` is mandatory because it is what the writer uses to shape the page. Name the type the way the catalogue does: snake_case, the noun the reader would use, `_page` only when the bare noun would be ambiguous. qa_scan.py accepts any id that is in the catalogue or in this list and blocks everything else, so a typo cannot reach the workbook.
