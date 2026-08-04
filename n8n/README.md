# Page Maker — Industry & Solution Pages

`page-maker-industry-solution.json` — one n8n workflow that writes the body text for **industry pages**
and **solution pages**. `pageType` in the webhook is the switch; the branching happens inside the flow.

It is deliberately the article flow with a different subject. Same node names, same order, same DeepL
round trip, same parallel style scanners, same Pinecone internal linking, same STRAPI converter. What
changed is what the outliner researches, what the writer is told to put in each section, and the fact
that the H1 arrives from the webhook instead of being written.

**Text only.** The output is the page copy: H1, an opening answer, and the body sections. No layout, no
CTA button objects, no schema, no image direction.

74 nodes. Import into n8n and the credential references resolve against the existing article-flow credentials.

---

## Flow

```
Party Starter (webhook)
  └─ request-parser ──┬─ Execution Data ─ Send Execution Data       (callback: /execution-started)
                      └─ Init Execution Context ─ Save to Sheet ─ Restore
                           └─ Route Classifier      industry|solution × en|lang → 4 routes
                                └─ Brief Parser
                                     └─ Translate Inputs? ─(lang)→ DeepL Prep ─ Translate Inputs ─┐
                                          └───────────────────────────────────────── Brief EN ────┘
                                               └─ Prep Outline ─ Outliner            (+ Internet)
                                                    └─ Outline Cleanser
                                                         └─ Prep Writer ─ Writer     (+ Researcher)
                                                              └─ 5 parallel peelers
                                                                   └─ Feedback Merger ─ Stabilizer
                                                                        └─ Prep Update ─ Style Updater
                                                                             └─ Localize? ─(lang)→ Links Remover
                                                                                  ─ Translation Prep ─ Translate Page
                                                                                  ─ Unwrapper ─ Page Researcher
                                                                                       └─ Page Ready
                                                                                            └─ Internal Linker (Pinecone)
                                                                                                 └─ SEO Check ─ SEO OK?
                                                                                                      └─(no)→ SEO edit loop
                                                                                                           └─ Final Page
                                                                                                                ├─ Text Cleaner ─ STRAPI Converter ─┐
                                                                                                                └─ Prep Meta ─ Meta Lang? ─ DeepL   │
                                                                                                                     ─ Metadata Generator ──────────┤
                                                                                                                                        Final Merger┘
                                                                                                                                             └─ Send Page  (callback: /page)
```

| route | page type | language | behaviour |
|---|---|---|---|
| `industry_en` | industry | English | no DeepL |
| `industry_lang` | industry | other | brief → EN, page → target, re-cited in target |
| `solution_en` | solution | English | no DeepL |
| `solution_lang` | solution | other | brief → EN, page → target, re-cited in target |

`pageType` changes what the Outliner researches and what burden of proof the page carries. An industry
page has to show the client knows the vertical's regulations, workflow and vocabulary. A solution page
has to show the client knows the job to be done: the workflow, the before and after, the tools around
it. That difference runs through the pain points, the proof and the FAQ focus.

---

## Webhook input

`POST /webhook/industry-solution-page`

Ready-to-POST examples, both English: `examples/webhook-industry-page.json`,
`examples/webhook-solution-page.json`.

```bash
curl -X POST https://<your-n8n>/webhook/industry-solution-page \
  -H 'Content-Type: application/json' \
  -d @n8n/examples/webhook-industry-page.json
```

```jsonc
{
  "taskId": "", "brandId": "", "userId": "",
  "callback_url": "https://api.yourapp.com/webhooks/n8n",

  "pageType": "industry",                    // REQUIRED — "industry" or "solution"
  "h1": "Practice management software for dental clinics",   // REQUIRED — used verbatim, never rewritten
  "coreKeyword": "practice management software for dental clinics",  // REQUIRED
  "secondaryKeywords": "dental practice management system, dental clinic scheduling software",
  "targetLanguage": "English",               // any DeepL-supported language name

  "industry": "dental clinics",              // industry pages
  "useCase": "incident management",          // solution pages
  "contentIdea": "What the page should argue, in a sentence or three.",

  "clientName": "Chairside",
  "productDescription": "What the client does. Put pricing, setup time and integrations here — the FAQ needs them.",

  "clientProof": "Free text. Client metrics with dates and source URLs, customer names, testimonials.",
  "certifications": "HIPAA compliant (third-party audited), SOC 2 Type II, PCI DSS Level 1",

  "ctaRules": "How the closing CTA should behave.",
  "writingPreferences": "Custom rules. These override the built-in writing rules where they conflict.",

  "whitelistDomains": [],
  "blacklistDomains": ["wikipedia.org"],

  "pineconeIndex": "chairside-prod",
  "pineconeNamespace": "chairside-site"
}
```

Only three fields are required: `pageType`, `h1`, `coreKeyword`. Each throws a descriptive error rather
than producing a degraded page. Everything else degrades gracefully — an unsupplied field reaches the
prompts as `not supplied` rather than as an empty string the model might paper over.

### The H1 is never touched

It goes into the webhook and comes out on the page byte-identical. The Outliner is told not to plan one,
the Writer is told to reproduce it exactly, and on localised routes the `Unwrapper` restores the client's
original string after DeepL round-trips it. `Page Ready` re-asserts it a second time, and the SEO applier
is given it as a locked value. Verified on all four routes, including a German run where DeepL translated
the heading and the flow put it back.

### The proof rule

`clientProof` and `certifications` are the only sources the page may use for a customer name, a metric or
a case study. The Outliner, the Writer and the citation agent are each told never to invent one, and the
citation agent is told to leave client results unlinked because they came from the client rather than a
publisher. If `clientProof` is empty, the proof section is written from certifications alone and stays
short rather than padding with invented specifics.

Put pricing, setup time, integrations and migration notes into `productDescription`. The FAQ section is
required to answer those five buyer questions — compliance, pricing model, integrations, switching, and
setup time — and it can only answer them from what you supply.

---

## Webhook output

`POST {callback_url}/page`

```jsonc
{
  "taskId": "", "userId": "", "brandId": "", "n8nExecutionId": "1234",

  "pageType": "industry",
  "targetLanguage": "English",
  "h1": "Practice management software for dental clinics",
  "coreKeyword": "practice management software for dental clinics",
  "secondaryKeywords": "dental practice management system, ...",

  "slug": "practice-management-software-dental-clinics",
  "metaTitle": "Practice management software for dental clinics",
  "metaDescription": "See how practice management software for dental clinics keeps eligibility checks on the appointment...",

  "pageText":   { /* STRAPI rich-text tree — same shape the article flow sends */ },
  "pageTextMd": "# Practice management software for dental clinics\n...",

  "seo": {
    "totalWords": 940,
    "coreKeywordCount": 9,
    "coreKeywordPercentage": 0.96,
    "secondaryKeywords": [{ "keyword": "...", "count": 3, "percentage": 0.32, "inHeading": true }],
    "structural": { "coreInH1": true, "coreInAnyH2": true, "coreInFirst60": true, "anySecondaryInHeading": true, "h2Count": 5, "h3Count": 9 },
    "listsCount": 2
  }
}
```

`pageText` comes out of the article flow's `STRAPI Converter`, unchanged, so it drops into the existing
content type with no Strapi-side work.

---

## What the page contains

The Outliner plans 5 H2s under the supplied H1, and the Writer fills them:

1. **Opening** (no H2). One outcome sentence, then a 40–80 word plain-language answer that stands alone
   away from the page. Neutral, no links, no promotional wording.
2. **Pain points.** One H3 per pain, 3–5 of them, in the reader's own vocabulary. Regulatory and
   workflow pains on an industry page, process and task pains on a solution page.
3. **What the client does about it.** One H3 per capability, each written as an outcome for this reader
   and then the mechanism. Outcome and cost framing in the earlier H3s, workflow detail in the later ones.
4. **Proof.** Client-supplied only, ending with the primary ask so proof sits next to the decision.
5. **FAQ.** One H3 per question, 4–8 of them, 40–60 words each, answer first.
6. **Closing CTA.** Primary ask plus a lower-commitment alternative.

Style is enforced twice: the writing rules live in the Writer's prompt, then five scanners run in
parallel on the draft (`Ing Peeler`, `Three Rule Peeler`, `Hedging Peeler`, `Negative Parallelism`,
`Tailing Negations`) and one editor applies every fix in a single pass. Same five as the article flow.

---

## Differences from the article flow

**Dropped:** the `SEO Route?` gate (both page types are keyword-led, so the SEO check always runs), the
FAQ Writer agent (the FAQ is a page section, so the Writer produces it inline), the EEAT agent, and the
whole evaluation branch.

**Changed:** `articleTitle` became `h1` and is now locked end to end rather than being a suggestion. The
outliner researches a vertical or a job instead of an audience. The SEO gate emits structured `edits`
objects rather than pre-translated sentences, which removed ~30 hardcoded language blocks — the phrasing
lives in the system prompt, which already goes through DeepL. Keyword bands are page-appropriate
(core 0.6–1.8%, secondary 0.15–0.6%). Heading placement is reported but never auto-edited.

**Kept:** execution-context logging to Sheets with `retryOnFail`, the `/execution-started` callback with
`onError: continueRegularOutput`, `retryOnFail` / `maxTries: 5` / `waitBetweenTries: 2000` on every
agent, HTTP and parser node, `executeOnce` on the expensive legs, and fail-fast throws in
`request-parser`, `Brief Parser`, `Brief EN`, `Outline Cleanser` and `Unwrapper`.

---

## Setup

Credentials referenced by ID, matching the article flow: `main-sheet`, `DeepL API`, `Tavily API`,
`Pinecone API`, `Article Writing API` (OpenAI), `Anthropic API`, `Gemini API`.

Claude Opus 4.8 drives the Outliner and the Writer. Gemini 3.5 Flash leads the five scanners, the SEO
edit finder and the metadata generator, with GPT as the configured fallback leg. GPT drives the style
editor, the localised citation pass, the internal linker and the SEO applier.

The execution-context sheet needs a `pageType` column alongside the existing article columns; the core
keyword writes into the existing `coreKeyword` column.
