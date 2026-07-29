# Page Maker 1.0 — Industry & Solution Pages

`page-maker-industry-solution.json` — a single n8n workflow that generates both **industry pages**
(`[category] for [industry]`) and **solution pages** (`[category] for [use case/job]`). The page type is a
webhook field and the branching happens inside the flow, so there is one workflow to maintain, not two.

Built from scratch against the *Industry & Solutions Pages (SEO + GEO)* research. It reuses the article
flow's architecture — execution-context logging, DeepL round trip, parallel style scanners, Pinecone
internal linking, the STRAPI converter — but every prompt, gate and threshold is page-specific.

77 nodes. Import into n8n and the credential references resolve against the existing article-flow credentials.

---

## Flow at a glance

```
Party Starter (webhook)
  └─ request-parser ──┬─ Execution Data ─ Send Execution Data          (callback: /execution-started)
                      └─ Init Execution Context ─ Save to Sheet ─ Restore
                           └─ Route Classifier          industry|solution × en|lang  →  4 routes
                                └─ Brief Parser         DeepL codes, country, domain lists, proof inventory
                                     └─ Translate Inputs?  ─(lang)→ DeepL Prep ─ Translate Inputs ─┐
                                          └────────────────────────────────────────── Brief EN ────┘
                                               └─ Prep Page Architect ─ Page Architect   (+ Vertical Researcher)
                                                    └─ Blueprint Cleanser
                                                         └─ Prep Writer ─ Page Writer    (+ Researcher)
                                                              └─ 6 parallel style scanners
                                                                   └─ Feedback Merger ─ Stabilizer
                                                                        └─ Prep Update ─ Style Updater
                                                                             └─ Localize?  ─(lang)→ Links Remover
                                                                                  ─ Translation Prep ─ Translate Page
                                                                                  ─ Unwrapper ─ Page Researcher
                                                                                       └─ Page Ready
                                                                                            └─ Internal Linker (Pinecone)
                                                                                                 └─ SEO Check ─ SEO OK?
                                                                                                      └─(no)→ SEO edit loop
                                                                                                           └─ Final Page
                                                                                                                ├─ Text Cleaner ─ STRAPI Converter ─┐
                                                                                                                └─ Prep Meta ─ Meta Lang? ─ DeepL   │
                                                                                                                     ─ Metadata Generator            │
                                                                                                                     ─ Schema Builder ───────────────┤
                                                                                                                                        Final Merger ┘
                                                                                                                                             └─ Send Page  (callback: /page)
```

### The four routes

| route | page type | language | behaviour |
|---|---|---|---|
| `industry_en` | industry | English | no DeepL |
| `industry_lang` | industry | other | brief → EN, page → target, re-cited in target |
| `solution_en` | solution | English | no DeepL |
| `solution_lang` | solution | other | brief → EN, page → target, re-cited in target |

Page type switches the **research plan, the burden of proof, the pain-point framing, the proof framing
and the FAQ fan-out**, per the research's industry-vs-solution table. Language switches the DeepL legs.

---

## Webhook input

`POST /webhook/industry-solution-page`

### Required

| field | type | notes |
|---|---|---|
| `pageType` | `"industry" \| "solution"` | the master switch. Anything else throws. |
| `primaryKeyword` | string | one intent per page. `[category] for [industry]` or `[category] for [use case]`. |
| `clientName` | string | proof, CTA and quick-answer blocks can't be written without it. |
| `industry` | string | **required when `pageType: "industry"`** — e.g. `"law firms"`. |
| `useCase` | string | **required when `pageType: "solution"`** — e.g. `"appointment scheduling"`. |

Each of these throws a descriptive error rather than producing a degraded page.

### Everything else

```jsonc
{
  "taskId": "", "brandId": "", "userId": "",
  "callback_url": "https://api.example.com/hooks",

  "pageType": "industry",
  "primaryKeyword": "CRM for law firms",
  "secondaryKeywords": "legal CRM, law firm client management",   // string or array, 3–6 recommended
  "targetLanguage": "English",                                    // any DeepL-supported language name

  // industry pages
  "industry": "law firms",
  "industryRegulations": "ABA Model Rule 1.6, state bar advertising rules",
  "industryJargon": "billable-hour leakage, conflict checks, matter management",

  // solution pages
  "useCase": "appointment scheduling",
  "jobToBeDone": "let clients book without phone tag",
  "adjacentTools": "Google Calendar, Outlook, Zoom",

  // client + product
  "clientName": "Lexwork",
  "clientUrl": "https://lexwork.example.com",
  "productCategory": "CRM",
  "productDescription": "Lexwork is a client relationship system for small and mid-size law firms.",
  "features": [{ "name": "Conflict check engine", "description": "Screens new matters against client history." }],
  "integrations": "Clio, QuickBooks, Outlook",
  "pricingModel": "per-seat, from $59/user/month",
  "implementationTime": "11 days",
  "migrationNotes": "Imports from Clio and MyCase exports.",

  // proof — client-supplied only, never invented (see below)
  "caseStudies":   [{ "title": "", "client": "", "industry": "", "result": "", "url": "" }],
  "clientLogos":   [{ "name": "", "industry": "", "url": "" }],
  "certifications": ["SOC 2 Type II", "GDPR"],
  "clientMetrics": [{ "metric": "40% faster client intake", "context": "Barrett & Cole, 2024", "source": "https://..." }],
  "testimonials":  [{ "quote": "", "author": "", "role": "", "company": "" }],

  // conversion
  "primaryCta":   { "label": "Book a 20-minute walkthrough", "url": "https://..." },
  "secondaryCta": { "label": "Download the checklist", "url": "https://..." },
  "frictionStrippers": "no credit card required",
  "ctaRules": "Always name the client explicitly in the closing CTA.",

  // page + seo scaffolding
  "urlPath": "/industries/law-firms",
  "breadcrumb": [{ "name": "Home", "url": "/" }, { "name": "Industries", "url": "/industries" }],
  "faqSeeds": ["Is X compliant with attorney-client confidentiality requirements?"],
  "writingPreferences": "Refer to the reader as \"you\".",
  "whitelistDomains": [], "blacklistDomains": ["competitor.com"],

  // internal linking
  "pineconeIndex": "lexwork-index",
  "pineconeNamespace": "lexwork"
}
```

**Why these fields.** `pricingModel`, `implementationTime`, `migrationNotes` and `integrations` exist
because the research names those five fan-out sub-questions (compliance, pricing, integrations,
migration, implementation) as what the FAQ block must cover. `faqSeeds` carries real phrasings from
People Also Ask, sales calls and support chats — the research is explicit that FAQ wording should be
lifted from how buyers actually ask, not invented. `industryJargon` and `industryRegulations` seed the
vocabulary research so pain points land in the buyer's own language.

### The proof contract

Proof is the one place the flow refuses to be creative. Client results come **only** from
`caseStudies`, `clientLogos`, `certifications`, `clientMetrics` and `testimonials`. The architect prompt,
the writer prompt and the citation prompt each forbid inventing a customer, a logo or a number, and the
`Promo Peeler` flags any unsourced statistic that slips through.

When a proof category is empty the block renders shorter rather than padded — no industry-stat
substitution, since that wasn't selected. Client metrics are quoted verbatim: the style editor and the
SEO applier are both forbidden from rounding or reframing a number.

---

## Webhook output

`POST {callback_url}/page`

```jsonc
{
  "taskId": "", "userId": "", "brandId": "", "n8nExecutionId": "1234",

  "pageType": "industry",
  "targetLanguage": "English",
  "industry": "law firms",
  "useCase": "",

  "primaryKeyword": "CRM for law firms",
  "secondaryKeywords": "legal CRM, law firm client management",
  "keywordNote": {
    "supplied": "CRM for law firms",
    "architectConfirmed": "CRM for law firms",
    "appliedToPage": "CRM for law firms",
    "architectChangedIt": false
  },

  "slug": "crm-for-law-firms",
  "metaTitle": "CRM for law firms built on the matter record",
  "metaDescription": "See how a CRM for law firms keeps conflict checks on the matter record...",
  "pageUrl": "https://lexwork.example.com/industries/law-firms",
  "lastUpdated": "2026-07-29",

  "pageText": { /* STRAPI rich-text tree — identical shape to the article flow */ },
  "pageTextMd": "# CRM for law firms\n...",

  "faq": [{ "question": "...", "answer": "..." }],
  "schemaJsonLd": { "@context": "https://schema.org", "@graph": [ /* Organization, Service, BreadcrumbList, FAQPage */ ] },

  "cta": { "primary": {...}, "secondary": {...}, "frictionStrippers": "no credit card required" },
  "proofUsed": { "caseStudies": [], "clientLogos": [], "certifications": [], "clientMetrics": [], "testimonials": [] },

  "seo": {
    "totalWords": 940,
    "primaryKeywordCount": 9,
    "primaryKeywordPercentage": 0.96,
    "secondaryKeywords": [{ "keyword": "legal crm", "count": 3, "percentage": 0.32, "inHeading": true }],
    "structural": { "coreInH1": true, "coreInAnyH2": true, "coreInFirst60": true, "anySecondaryInHeading": true, "h2Count": 5, "h3Count": 9 },
    "listsCount": 2
  }
}
```

`pageText` is produced by the same `STRAPI Converter` code as the article flow, unchanged, so it drops
into the existing content type with no Strapi-side work.

`keywordNote` surfaces a disagreement rather than hiding it: the architect is instructed to replace the
client's internal naming with search-demand phrasing (the Miro "Mind Map" vs "Diagramming Module" case
in the research). On English routes the correction is applied; on localised routes the client's own
target-language keyword wins, because round-tripping a corrected English phrase through DeepL is more
likely to hurt than help. Either way `architectChangedIt` tells you it happened.

---

## How the research maps onto the flow

| Research requirement | Where it lives |
|---|---|
| One intent = one page, BOFU over volume | `Prep Page Architect` scope rules |
| Primary keyword from search demand, not internal naming | architect returns `confirmedPrimaryKeyword`; surfaced as `keywordNote` |
| 1 primary + 3–6 secondary + 4–8 FAQ | blueprint schema, enforced by the structured output parser |
| Hero: H1 = search pattern, subheadline = outcome not technology | writer block rules 1 |
| Quick answer: 40–80 words, neutral, zero promo, AI-liftable | writer block rules 2 + template |
| Pain points in the vertical's own vocabulary, 3–5, sourced | architect research plan → `verticalVocabulary` + `sourceUrl`; writer block rules 3 |
| Solution mapping: feature → vertical outcome, buying-committee layering, product visual | `solutionMapping.audienceLayer` + `visualHint`; writer emits `Visual:` lines for design |
| Proof same-vertical, quantified, adjacent to CTA | writer block rules 5 — proof block ends with the CTA sentence |
| FAQ 4–8, ~40–60 words, answer-first, fan-out coverage | `fanoutCategory` in the blueprint; writer block rules 6 |
| CTA repeated + lower-commitment alternative + friction strippers | writer block rules 7, fed from `primaryCta`/`secondaryCta`/`frictionStrippers` |
| Internal links to siblings, case studies, blog | `Internal Linker` over Pinecone, prioritised in that order |
| Schema stack: Organization + Service + FAQPage + BreadcrumbList in one graph | `Schema Builder` (deterministic code, no model) |
| Visible "last updated" date | `lastUpdated` in the payload |
| Answer-first everywhere | writer structural rule 1, per-block |
| Paragraphs 2–3 sentences | writer structural rule 2 |
| H2s as real questions | architect H2 rules |
| Zero superlatives / promotional language | writer structural rule 4 **and** the `Promo Peeler` scanner |
| Every statistic carries a named source | writer SEO rules; `Promo Peeler` criteria 7 flags unsourced numbers |
| Specific and verifiable beats vague | writer structural rule 5, editor fix guidance |
| Real differentiation per page | architect critical rule: "if two clients could swap this page, it failed" |

### GEO expectation

The research is blunt that these pages rarely earn direct AI citations — their GEO job is to be
accurately machine-legible so engines describe the client correctly. That shaped three choices: the
quick-answer block is written to stand alone away from the page, the schema graph is deterministic
rather than model-generated, and the FAQ is parsed straight out of the rendered Markdown so
`FAQPage` always matches what's actually on the page.

The technical items the research lists that live **outside** this workflow, for whoever owns the CMS:
server-rendered HTML including tab/accordion content, AI crawlers unblocked in `robots.txt` and CDN
settings (Cloudflare blocks AI bots by default), and a 3–6 month refresh cycle against `lastUpdated`.

---

## Style enforcement

Six scanners run in parallel on the draft, each returning verbatim offending sentences, then one editor
applies every fix in a single pass:

| scanner | catches |
|---|---|
| `Ing Peeler` | present-participle pile-ups, `including`/`depending on` tails |
| `Three Rule Peeler` | three-or-more parallel series (15 grammatical types) — Markdown bullet lists exempt |
| `Hedging Peeler` | modal/frequency/possibility/attribution hedges, intensifiers — real conditionals exempt |
| `Negative Parallelism` | "not X, it's Y" constructions |
| `Tailing Negations` | clipped negation fragments |
| `Promo Peeler` | **new** — superlatives, hype adjectives, unverifiable trust claims, urgency tactics, imagined scenarios, technology-first claims, unsourced statistics |

`Promo Peeler` was added because the research names promotional language as a filtering trigger for AI
models and an active conversion cost. Its scope exceptions keep it from flagging legitimate CTAs,
named certifications and client-attributed metrics.

---

## Deliberate differences from the article flow

**Dropped.** All `Execute Article Progress` sub-workflow calls. The whole evaluation branch (`Eval Gate`,
`Calculate Metrics`, `Calculate SEO Metrics`, `Rules Compliance Evaluation`, `Final Calculations`,
`Evaluation Recorder`). The standalone `FAQ Writer` — the FAQ is a page block, so the writer produces it
inline and `Schema Builder` parses it back out. The `EEAT Analysis` agent. The `SEO Route?` gate, since
both page types are keyword-led and both need the check.

**Kept.** Execution-context logging to Sheets with `retryOnFail`, the `/execution-started` callback with
`onError: continueRegularOutput`, `retryOnFail`/`maxTries: 5`/`waitBetweenTries: 2000` on every agent,
HTTP and parser node, `executeOnce` on the expensive legs, and the fail-fast validation throws in
`request-parser`, `Brief Parser`, `Brief EN`, `Unwrapper` and `Blueprint Cleanser`.

**Changed.** The SEO gate emits language-neutral structured `edits` objects (`action`, `keyword`,
`currentCount`, `targetCount`, `diff`, `placement`) instead of pre-translated natural-language sentences.
That removed ~30 hardcoded language blocks from the article flow's `SEO Check` — the phrasing now lives
in the system prompt, which already goes through DeepL. Keyword density bands are page-appropriate
(primary 0.6–1.8%, secondary 0.15–0.6%) rather than article-appropriate, and heading placement is
reported but never auto-edited so the architect's outline survives intact.

---

## Setup

Credentials referenced by ID, matching the article flow: `main-sheet` (Google Sheets), `DeepL API`,
`Tavily API`, `Pinecone API`, `Article Writing API` (OpenAI), `Anthropic API`, `Gemini API`.

Models: Claude Opus 4.8 drives the architect and the writer. Gemini 3.5 Flash leads the six scanners,
the SEO edit finder and the metadata generator, with GPT as the configured fallback leg. GPT drives the
style editor, the localised citation pass, the internal linker and the SEO applier.

The execution-context sheet needs a `pageType` column added alongside the existing article columns; the
primary keyword is written into the existing `coreKeyword` column.
