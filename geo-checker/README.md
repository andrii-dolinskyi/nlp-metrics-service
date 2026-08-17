# GEO Checker — AI Visibility Score

Free GEO/AEO checker tool: paste any URL, get a 100-point score for how likely
the page is to be cited by ChatGPT, Perplexity, Google AI Overviews and Claude.

Deployed as an n8n workflow (`workflow.sdk.mjs` is the source of truth,
built with the n8n Workflow SDK):
https://n8n-test.snoika.com/workflow/TmUOmIhnBh17MiCh

## Endpoints (production, workflow must be published)

- **UI page:** `GET https://n8n-test.snoika.com/webhook/ai-visibility`
- **API:** `POST https://n8n-test.snoika.com/webhook/ai-visibility-check?url=<page-url>`
  → JSON with `totalScore`, `grade`, `verdict`, `fixAllPrompt`, per-category
  checks with hardcoded range-based comments, and per-check fix prompts.

## Pipeline (typically 2–7 s per run)

1. `Normalize URL` — validation + SSRF guard (private hosts rejected)
2. `Fetch Page HTML` — raw HTML with browser UA (schema/technical checks)
3. `Fetch Article Markdown` — Jina Reader (`r.jina.ai`) extracts the article
   body as markdown so linguistic analysis runs on article text only, never on
   raw HTML. Falls back to HTML text extraction if Jina fails. Keyless by
   default; add a Jina API key (Authorization: Bearer) on the node for higher
   rate limits.
4. `Fetch llms.txt` / `Fetch robots.txt` — domain-level AI-crawler signals
5. `Score Engine` — single Code node, all deterministic (no LLM calls)
6. `Wait For All Sources` (Merge barrier) → `Score Engine` → `Respond Report` — response shape is `{ page, payload }`

## Scoring: 7 categories, 100 points

| Category | Pts | Checks |
|---|---|---|
| Answer Architecture | 22 | heading skeleton, question-phrased subheadings, liftable blocks (tables/lists), passage sizing 75–300w, answer-first openers, FAQ coverage |
| Machine-Readable Signals | 15 | JSON-LD present, Article schema w/ date+author, FAQ/HowTo schema, Person/Organization entities, Breadcrumb/ItemList, image alt-text coverage |
| Evidence & Trust | 18 | stats density (≥1/200w), primary-source citations, expert quotes, named author/byline, topic depth, visual assets present |
| AI Crawler Access | 15 | robots.txt policy for 11 AI bots, llms.txt, payload <1 MB, server-rendered text, meta hygiene, favicon |
| Recency Signals | 8 | dateModified freshness, visible "last updated" stamp, current-year anchor |
| Human Voice | 12 | 16 AI-writing detectors + 12 writing diagnostics (below) |
| Linguistic Signature | 10 | 12 stylometric metrics (burstiness, sentence length, opener variety, TTR, hapax, clause mix, tense consistency, nominalization, phrase recycling…) each with good/fair/poor tiers |

## Human Voice — 16 AI-writing detectors

Each runs on extracted article text only, reports count + per-1k-word rate,
and prints a hardcoded comment per severity tier (clean / notable / heavy):

negativeParallelisms, tailingNegations, aiVocabulary, threeRule,
signpostingFiller, vagueAttributions, addressPerspectiveLock,
copulaSubstitutes, intensifiers, ingPileups, significanceInflation,
hedging, semicolons, emDashes, salesyLanguage, repeatedArguments

Diagnostics: sentence burstiness, avg sentence length, opener variety,
generic openers %, TTR, hapax ratio, avg paragraph length, clause mix,
tense consistency, connectives, nominalization, repeated phrases.

The category score is a weighted severity index scaled to 15 points; heavy
patterns feed a "humanize prompt" the user can copy.

## Notes

- Code-node JS is written for n8n's sandbox: no `new URL()`, no `Set` —
  regex/object equivalents are used instead.
- `Fix-All Prompt` concatenates the fix prompts of every failed check.
- Category and check names are original (not copied from context.dev).
