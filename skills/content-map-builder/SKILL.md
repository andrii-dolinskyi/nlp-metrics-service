---
name: content-map-builder
description: Build a fully researched SEO/GEO content map for any client (any industry, any language set) and deliver it as an Excel workbook in Snoika's standard format — pillar tabs, master list, implementation plan. Use this skill whenever the user asks for a content map, content architecture, topical authority map, keyword map, pillar/cluster plan, site content plan, "what pages should client X publish", or wants to extend or audit an existing content map. Also trigger when the user mentions a client domain plus content strategy, or asks to run keyword/SERP research at scale for a site. It orchestrates three n8n research workflows (measure, SERP enrich, site audit) so it never runs hundreds of tool calls itself.
---

# Content Map Builder

Produces the same deliverable as the C+P Consulting content map: a workbook with one tab per pillar, an "All Pages (master)" tab, and an "IMPLEMENTATION PLAN" tab, every keyword measured live, every figure verified, zero orphans, unique keywords per language. Works for one language (any language, not necessarily English) or many.

The skill is the brain; n8n does the loops. Every research stage that repeats per keyword or per page is an n8n workflow call that returns JSON. Claude only does the judgment stages. State lives in a run folder on disk, so a run can stop and resume across sessions.

Read `references/method.md` before stage 2. Read `references/page_types.md` before choosing any page type (stage 2 hypotheses and stage 4 assignment); it is the only list of types a map may use. Read `references/workflows_and_schema.md` before the first workflow call. Scripts are in `scripts/`; run them, don't rewrite them.

## Hard rules (from the preference file — always apply)

- Never name the data provider (DataForSEO) anywhere in a client deliverable. Say "live search data".
- Every keyword, volume, difficulty, intent and trend in the workbook is measured in this run. Nothing is estimated or carried from memory.
- The client workbook never shows KD, YoY, notes, competitor lists or provider names. The internal workbook shows everything. Both are built from the same run.json by `scripts/assemble.py --profile client|internal`.

## Stage 0 — Intake (always first)

Open with the questionnaire. On mobile use the tappable-options tool for the closed questions; otherwise one message. Required: client domain, target markets, languages. Everything else is optional and has a stated fallback. Never stall on an optional field; record the assumption in `run.json.client.assumptions` so the client can correct it.

Questions, in order:

1. Client domain (required).
2. Target markets — countries (required). Each becomes a `location_name`.
3. Languages: "English only" / "one other language: which?" / "several: which?" (required). The first language listed is the primary; its keyword goes in "Core keyword". Any language can be primary (Arabic, French, German...).
4. What the client sells, in a sentence (optional — fallback: infer from the site audit and state it back for confirmation).
5. ICP: who buys, company size, roles (optional — fallback: infer from the site, services pages and competitors' positioning).
6. Named competitors (optional — fallback: the site audit returns the organic competitors, and every SERP pull returns who ranks).
7. Does the site already have content pages? (yes/no/don't know — if not "no", run the site audit).
8. Topics or pages to exclude (optional).
9. Publishing capacity per week, if known (optional — otherwise the cadence is derived from the site audit's domain profile using the table in method.md §Waves and pods, then capped by review capacity).
10. Delivery: client workbook only, or client + internal (default both).

Then create the run folder: `runs/<run_id>/` with `run.json` (schema in workflows_and_schema.md), `intake.md` (the answers and assumptions), and `log.md` (one line per stage with date). `run_id` = client slug + date.

## Stage 1 — Existing-site audit (skip only if the site has no content pages)

Call **CM Site Audit** with the domain and the primary market. Store the result in `run.json.existing_site`. Then, for every crawled page, infer its target keyword from title, H1 and the keywords it already ranks for, and assign a status: `existing-strong` (ranks top 20 for something with volume), `existing-thin`, `duplicate-of:<url>`. Write the existing topical map (which pillars the site already covers) to `intake.md`. Rules that follow from it:

- Never assign a new page a core keyword an existing page already ranks top 20 for. Mark that existing page `enhance` and give the keyword to it.
- Two existing pages ranking for the same keyword → `merge` (keep the stronger, 301 the other).
- Existing pages join the link graph: new pages link into strong existing ones.
- `.html` or messy URLs → the plan tab's Migration row.
- **Body-text check (mandatory).** The audit workflow now returns the full body text of every sitemap URL, fetched through a ladder: direct (browser UA) → Jina Reader (JavaScript rendering) → Tavily Extract → Crawlbase JS. Each page carries `body_text`, `body_headings`, `body_method` (which tier succeeded) and `body_tried` (why earlier tiers failed); the response's `body_coverage` block lists `by_method`, `blocked_count` and the `blocked` URLs with their trail. Save the pages' body fields as `crawl/pages_full.json` so the phrase check can use them.
  - A Googlebot-only robots block does not affect this fetch; a real bot wall does, and the workflow marks the page `body_method: "BLOCKED"` instead of returning it empty.
  - At the end of Stage 4, count every map core keyword as an exact phrase against every fetched body. A core found ≥2× in an existing body or in its H1 means that page already owns the phrase: give it to the existing page (`enhance`/`rewrite`) or link into it — never create a second page for it.
  - If `body_coverage.blocked_count` > 0, the check is incomplete: never report "no overlaps" for those pages. Ask the client for temporary CMS access or a content export (onboarding questionnaire §24.3), rerun the check on the export, and until then state "N of M pages could not be read" in the plan tab's Research section and list the URLs in `intake.md`.
  - Record the check either way ("N cores checked against M of P existing page bodies; K blocked") in the plan tab.
  - Fallback only: if the audit workflow is unavailable or an older version returned no `body_text`, run `python3 scripts/fetch_site.py <run_folder>` — the same ladder from the container (Tavily needs `TAVILY_API_KEY`; Crawlbase is not available there).
- **Client keyword list.** If the intake mentions the client has its own keyword list or content tree, ask for it before Stage 4 and reconcile; if it is not available, say so in the plan tab so the map is not mistaken for a check against it.
- **URL convention.** Match the site's existing slug style (trailing slash or not, directory depth) for every new URL; do not introduce a second convention.

## Stage 2 — Define the test, pillars and seed keywords (Claude, no tools)

Read `references/method.md` first. Write into `run.json.client`:

- `test`: one sentence, e.g. "Would a EUR 1–5bn European food, beverage, cosmetics or chemicals manufacturer with a PLM problem type this?" Every keyword must pass it, whatever its volume.
- `rejection_rules`: generic-audience terms to reject even at high volume (the C+P examples: target operating model, data governance, ai compliance, plm system in Germany).
- Pillars: 8–14, each anchored to something the client sells, qualified by the industry it sells into. Every pillar ends in a conversion page. Always include: services, industries/segments, glossary, authors/about, case studies.
- Page types come from the catalogue in `references/page_types.md` (147 types in 12 families, with an industry starter set per sector). Start from the client's sector set, then add from the catalogue; a clinic gets condition and treatment pages, a law firm practice-area pages, a manufacturer capability pages, and forcing those into "supporting article" loses the schema and the inputs the vertical's result pages expect. If nothing fits, declare a custom type in `run.json.client.custom_page_types` with its family; never invent a label.
- Seed keywords: 300–600 candidates in the primary language across all pillars, each with a page hypothesis (url, page type id, angle). Include definitional variants for glossary entries and the exact-question variants for "what is X" pages.

## Stage 3 — Measure (n8n)

Call **CM Measure** once per market/language with all candidates (it chunks internally). Store results in `run.json.measurements[<market>]`. Never call it with fewer than 50 keywords unless re-measuring re-targets.

## Stage 4 — Map design (Claude)

**Naming rule (hard).** Every pillar name, cluster name, H1 and meta title is one phrase about one thing. No ampersands, no "X and Y", no comma lists of topics ("Products & Services", "Fraud & Number Intelligence", "SMS throughput, retries and fallback" are all rejected). A pair is a signal that two subjects are being forced into one page or one group: split them — one becomes the pillar/cluster/page, the other becomes a cluster inside it or its own page — then group the rest under the single phrase. `qa_scan.py` flags violations as blocking (`joined_pair_name`).

**Sentence case (hard).** H1s, H2s and meta titles are written in sentence case: only the first word, proper nouns (people, companies, products, places), acronyms (VP, SEO, GDPR) and names with their own capitals (MedTech, iPhone) keep a capital. "Hiring a VP of sales for a growth-stage MedTech company", not "Hiring a VP of Sales for a Growth-Stage MedTech Company". Title Case reads as machine-written and is what the client's writers will copy into every page, so it is fixed in the map, not downstream. Put the client's names, products and competitors in `run.json.client.proper_nouns` so the check can tell McQuaig from a common noun; `qa_scan.py` blocks on `title_case_h1` and `title_case_h2` and warns on `title_case_meta`, and `python scripts/sentence_case.py runs/<run_id>/run.json --apply` rewrites the flagged headings in place.

**Page type (hard).** `page_type` is a `type_id` from `references/page_types.md` (`pillar_hub`, `service_page`, `condition_page`...) or a custom type declared in run.json. The workbook shows the label, the internal profile adds the id in a "Page Maker type" column, and the page writer consumes the id. Words and schema default from the catalogue entry; override per row only with a reason in the notes. `qa_scan.py` blocks on `unknown_page_type` and on `template_only_page_type` (login, cart, API reference and other pages the writer never produces).


Select one core keyword per page. Rules in method.md §Selection. Non-negotiable checks: unique across the map (normalised), passes the test, intent from the intent endpoint (label + probability), `<10` allowed for qualified long-tail pages, generic high-volume terms demoted to "vocabulary only" secondaries. Assign page type (catalogue id), cluster, wave, pod, words, schema, H1, meta title, secondaries, CTA, links per the nine rules, answer block. Write pages to `run.json.pages`. Run `python scripts/qa_scan.py runs/<run_id>/run.json` — fix everything it reports before stage 5; for heading case run `python scripts/sentence_case.py runs/<run_id>/run.json --apply` and re-scan.

## Stage 5 — Per-page SERP enrichment (n8n)

Call **CM SERP Enrich** in batches of 15–25 pages, `draft_outline: true`, each page carrying its brief (h1, angle, page_type, secondaries, test). Store per page in `run.json.pages[i].serp` and `.draft`. Highest-volume pillar first; if budget is limited, it is acceptable to enrich the pillars with measured demand and give long-tail pages Claude-written outlines from their angle (state this in the plan tab, as C+P did).

Then review: every `draft.fit == "mismatch"` is a core keyword on the wrong page — re-target it (stage 4 rules), re-measure the new term (stage 3, small batch), re-enrich it. Read a sample of outlines per pillar; the first H2 must be the page's own angle, never a copied cluster question. Drafted H2s come back in whatever case the model chose; run `sentence_case.py --apply` again after enrichment so every outline is sentence case before assembly. Competitor domains and AI-Overview presence go to the internal notes.

## Stage 6 — Localisation (only if more than one language)

For every page and every non-primary language, write 2–3 candidate analogues of the *page's* core keyword (method.md §Localisation: native term vs English-in-market vs acronym; sector equivalents such as IFS for BRC in DACH). Measure all candidates with CM Measure per market. Then `python scripts/localise.py runs/<run_id>/run.json` picks the highest measured volume, unique per language, with an exclusion list for ambiguous single words, and records `<10` where nothing measured. Re-check the chosen terms for the re-targeted pages.

## Stage 7 — Plan tab and assembly

Fill `run.json.plan` from `assets/plan_template.json` (sections: what this is, argument, research, competitive landscape, site architecture, language plan, preparation week 0, weekly cycle, internal linking and pods, measurement). Every figure quoted must exist in the measurements. Then:

```
python scripts/qa_scan.py runs/<run_id>/run.json            # must report zero issues
python scripts/assemble.py runs/<run_id>/run.json --profile client   --out outputs/<Client>-Content-Map.xlsx
python scripts/assemble.py runs/<run_id>/run.json --profile internal --out outputs/<Client>-Content-Map-INTERNAL.xlsx
```

Present both files. Summarise in chat: page count, URLs per language, biggest measured findings (top 5 volumes, fastest risers, rejected terms), existing pages affected, and anything deferred.

## Stage 8 — Approval and cleanup

When the user says the client approved: zip `runs/<run_id>/` into `archive/<run_id>.zip`, delete the run folder, log it. Never delete without the user saying approved. Nothing persists in n8n — the workflows are stateless — so there is nothing to clear there.

## Resuming

If a run folder exists, read `log.md` and continue from the last completed stage. Never re-measure what `run.json` already holds unless the keyword changed.
