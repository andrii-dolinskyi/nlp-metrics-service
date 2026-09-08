# Content map method

Distilled from the C+P Consulting map (202 pages, 4 languages, 12 pillars). Apply to any client.

## The test

One sentence per client: "Would a <ICP> with a <problem the client solves> type this?" If a keyword fails it, it is out, whatever the metrics say. Write it in `run.json.client.test` and quote it in the plan tab.

## Selection rules for the core keyword

1. One core keyword per page, unique across the whole map after lower-casing and trimming. A keyword is never a secondary on another page (cannibalisation). A core keyword is never repeated inside its own secondary list.
2. The core keyword names what the page is about. "what is X" belongs to the definition page, not the "do we need X" page; "X software" belongs to the market page, not the maturity page; "X vs Y" belongs to the comparison. When a measured term is attractive but describes a different page, move it to that page; never keep it on a page it does not describe.
3. Never concatenate: "plm go live plm-implementation" is a bug, not a keyword.
4. Intent and confidence come from the intent endpoint (label + probability), never estimated. Where the endpoint and the live result page disagree, the result page wins: a term classified informational whose page one is all vendor solution pages is built commercially.
5. Reject generic terms that fail the test even at high volume: business/IT vocabulary (target operating model, data governance, digital transformation), regulation-of-AI terms when the page is AI-for-compliance (ai compliance), discrete-industry terms for a process-industry client (plm system in Germany). They may stay as "vocabulary only" secondaries with a note.
6. Navigational terms (brand or organisation queries, probability > 50% navigational) are not cores; use the qualified phrase as core and keep the navigational term as a secondary (brc audit → brc certification; compliance dashboard → compliance dashboard manufacturing).
7. `<10` volume is fine for qualified long-tail pages. Four fifths of a good B2B map has no measurable volume; those pages exist for topical completeness and AI citation and are linked from the pages with demand.
8. Definition pages (glossary) take the definitional variant ("what is X", "X definition", "X meaning") so they never compete with the article on X.
9. Secondaries: 2–6 per page; measured ones carry their volume in brackets "(70/mo, difficulty 31)"; polluted or generic ones carry the reason "(1,900/mo: generic IT term, vocabulary only)".

## Page types

The full list is `references/page_types.md` (145 types in 12 families, with default words, schema and the facts the client must supply for each; `assets/page_types.json` is the same data for the scripts). `page_type` in run.json is the catalogue `type_id`. The thirteen that every B2B map uses, with their defaults:

| type_id | Label | Words | Schema |
|---|---|---|---|
| `pillar_hub` | Pillar hub | 2500 | Article + FAQPage + BreadcrumbList + Organization |
| `cluster_hub` | Cluster hub | 1800 | Article + FAQPage + BreadcrumbList |
| `deep_dive_guide` | Deep-dive guide | 2000 | Article + FAQPage + HowTo + BreadcrumbList |
| `supporting_article` | Supporting article | 1400 | Article + FAQPage + BreadcrumbList |
| `head_to_head_vs` | Head-to-head comparison | 1800 | Article + FAQPage + ItemList + BreadcrumbList |
| `alternatives_page` | Alternatives page | 1600 | Article + ItemList + BreadcrumbList |
| `research_report` | Research report (linkable asset) | 2200 | Article + Dataset + FAQPage + BreadcrumbList |
| `service_page` | Service page | 1200 | Service + Organization + FAQPage + BreadcrumbList |
| `solution_use_case_page` | Solution page | 1100 | Service + FAQPage + BreadcrumbList |
| `industry_vertical_page` | Industry page | 1300 | Service + FAQPage + BreadcrumbList |
| `case_study` | Case study | 900 | Article + CaseStudy + BreadcrumbList |
| `author_bio_page` | Author page | 1400 | Person + ProfilePage + BreadcrumbList |
| `glossary_term` | Glossary term | 450 | DefinedTerm + DefinedTermSet + BreadcrumbList |

The family decides how the writer opens the page (answer paragraph for guide, reference, evaluation and tool; value proposition or key facts for offer, proof, entity, local and catalogue), so choosing between two similar types is mostly choosing the family the reader expects. Sector types (`condition_page`, `practice_area_page`, `material_capability_page`, `model_research_page`, `coverage_line_page`...) carry required inputs the client has to provide; list those inputs in the plan tab's Preparation section so week 0 collects them.

## Priority score (0–100)

`assemble.py` computes it if `priority_score` is missing:
volume points (log scale, 0–40) + difficulty points (40 − 0.4·KD, 0 if KD unknown: 20) + intent points (commercial/transactional 15, informational 8, navigational 0) + page-type points (hub 15, service/solution/industry 12, article 8, glossary 3) − 10 if the page is `<10` AND not a hub/service. Clamp 0–100. Sort waves by it.

## H2 outline

Every H2 is in sentence case (see §H1 and meta title). First H2 is always the page's own angle. Then the People Also Ask questions and related searches that fit the page (drop consumer, job-seeker, travel, other-industry and generic-hygiene questions). Then 2–4 sections the angle needs and the SERP lacks. 7–10 H2s, joined with " | ". Never copy one cluster's question block onto every page in the cluster. Glossary: "What <term> means | <Term> in <industry> | <Term> in the product record | Related terms".

## Target AI prompts

3–4 buyer-voice questions the page should be the cited answer to, derived from PAA, joined with " | ". Never placeholders like "best X".

## H1 and meta title

H1 states the angle in plain language (no keyword stuffing, no broken suffixes) and names one subject: never "X & Y", "X and Y" or a comma list of topics — such H1s read as machine-written and spread the page over two intents. If two subjects appear, one of them is a second page. The same rule governs pillar and cluster names. Meta title ≤ 60 characters, contains the core keyword's key words, brand suffix on service pages only. Author H1s are proper names with correct capitalisation.

Sentence case throughout: H1s, H2s, meta titles, pillar and cluster names capitalise the first word and nothing else except proper nouns (TruAlign, McQuaig, Boston), acronyms (VP, CRO, GDPR, PLM) and names that carry their own capitals (MedTech, PowerPoint). "How to choose an executive search firm in MedTech" is right; "How to Choose an Executive Search Firm in MedTech" is not. Title Case is the single most visible sign of generated text and it propagates into every page the map produces, so it is corrected here. Keep `run.json.client.proper_nouns` complete (client, products, competitors, people, places), because the check cannot know that "Predictive Index" is a product and will lower-case it otherwise. `qa_scan.py` blocks on Title Case H1s and H2s; `scripts/sentence_case.py --apply` fixes them.

## Internal linking — the nine rules

1. Every pillar hub links down to every cluster hub and page in its pillar.
2. Every cluster hub links to every page in its cluster.
3. Every page links up to its cluster hub and pillar hub within the first two screens.
4. Every page links horizontally to 3–5 siblings and 1–2 pages in another pillar.
5. Every informational page links to at least one service or industry page.
6. First use of a defined term links to its glossary entry.
7. Every page links to its author page; the author page links back to the article list.
8. Nothing deeper than three clicks from the homepage; pillar hubs reach 15–30 inbound links as the pillar fills.
9. A page in language L links only to pages in language L.

Zero orphans is a hard gate: every URL has ≥1 inbound link from another page in the map (existing strong pages count).

## Waves and pods

Wave 1 (months 1–2): skeleton — services, authors, about, case-study hub, every pillar hub, then the cluster hubs and the pillar with the largest measured demand. Wave 2 (months 3–4): remaining cluster hubs and deep-dives by priority score. Wave 3 (month 5+): supporting articles and glossary.
Pods: weekly groups sized to the cadence. The cadence is derived from the site audit and the intake, never assumed:

| Domain profile (from CM Site Audit) | Month 1 | Month 2 | Months 3–4 | Month 5+ |
|---|---|---|---|---|
| New or weak: < 30 referring domains, < 50 ranking keywords, < 20 pages | 3–4 | 5–6 | 8 | 10 |
| Established: 30–300 referring domains, 50–1,000 ranking keywords | 6–8 | 8–10 | 10–12 | 12 |
| Strong: > 300 referring domains, > 1,000 ranking keywords, active blog | 10 | 12–15 | 15 | 15+ |

Then cap by the client's stated review capacity (a reviewer approving eight pages in three working days is the usual ceiling for a small client team) and by the map size (a 60-page map does not need 15 a week). Record the chosen cadence and the reason in `run.json.client.cadence` and in the plan tab's Cadence row. Month-1 pages are always the skeleton (services, authors, hubs) whatever the cadence, because everything else links into them. A pod never contains a link to a URL that ships later — that link is added in the Friday link pass. Deadline-driven pages (a regulation that applies on a date, a seasonal term) are pulled forward so they publish before the date.

## Localisation

Keywords are never translated; each market is researched. For each page and language write 2–3 candidates: the native phrase, the English term as used in that market, and the acronym if one exists. Sector equivalents differ by country (BRC in the UK, IFS in DACH, France and Italy). Acronyms travel (PPWR, EUDR, CLP, INCI); translated phrases usually do not. Product-category vocabulary often stays English in DACH and Italy ("plm software"); regulatory and process vocabulary is native. Selection: highest measured volume among the candidates, unique per language, exclusion list for ambiguous single words (nomenclature, clp, traçabilité alone), `<10` with the closest literal analogue when nothing measures. Every re-targeted page gets its localisation redone.

## Existing sites

Never ruin what ranks, and never duplicate what exists. The audit gives headings and word counts only; fetch the full body text of every existing URL with `scripts/fetch_site.py` (curl → Jina → Tavily → BLOCKED; see SKILL.md Stage 1) and check every map core against it as an exact phrase before the map is final. Existing page ranking top 20 for a term → that term is its core, status `enhance`, and it gets the new outline. Existing page that already uses a core phrase in its body (≥2×) or H1 without ranking → same rule: the phrase belongs to that page unless it is being merged or redirected. Duplicates → merge with 301. Thin pages on a good keyword → rewrite in place, same URL. New pages link into strong existing ones. Report the status of every existing URL in the master (Page status column, internal profile).

## Plan tab

Ten sections, label + text rows. Every number quoted must be in the measurements. Sections and what each must contain are in `assets/plan_template.json`. Publishing cycle: one week, Monday drafting, Tuesday–Thursday client review (three working days), Friday hreflang build and simultaneous publication in every language in scope, then the Friday link pass. Translation via DeepL with the locked glossary (measured native keyword per page + terms that stay English); an automated check confirms the measured keyword appears in title, H1 and meta of every localised page. Measurement: keyword coverage, citation share, conversions as analytics events; traffic as context.

## Notes discipline (internal profile only)

Per page: pull date, ranking domains, AI Overview presence and sources, PAA used/dropped, every re-target with the old term, why it failed, the new term's measured figures. This is what makes the map auditable a year later.
