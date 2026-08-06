# Page Maker — backend integration requirements

What the backend has to build to request industry and solution pages from the n8n Page Maker
workflow and store what comes back.

**In scope:** request construction and validation, callback endpoints, persistence, timeout handling.
**Out of scope:** the n8n workflow itself, Strapi publishing.

---

## 1. Outbound request

```
POST https://<n8n-host>/webhook/industry-solution-page
Content-Type: application/json
```

Fire and forget. n8n responds 200 immediately with no useful body — **do not hold the connection or
treat the response as a result.** A run takes 4–10 minutes.

| field | type | required | notes |
|---|---|---|---|
| `taskId` | string | ours | our correlation id, echoed back on both callbacks. n8n does not enforce it; we do |
| `brandId` | string | | echoed back |
| `userId` | string | | echoed back |
| `callback_url` | string | ✅ | base URL, **no trailing slash**. Two paths are appended to it |
| `pageType` | `"industry"` \| `"solution"` | ✅ | anything else kills the run |
| `h1` | string | ✅ | used verbatim as the page H1, returned byte-identical |
| `coreKeyword` | string | ✅ | must be in `targetLanguage` |
| `clientName` | string | ✅ | the meta description opens with it |
| `productDescription` | string | ✅ | the only field the page's argument is derived from |
| `secondaryKeywords` | string | | comma-separated. **2–3 keywords**, in `targetLanguage` |
| `targetLanguage` | string | | language name (`"Arabic"`, `"Ukrainian"`). Defaults to `"English"` |
| `industry` | string | | industry pages only. Falls back to the subject of the H1 |
| `clientProof` | string | | the **only** permitted source of a metric, customer name or case study |
| `certifications` | string | | |
| `writingPreferences` | string | | overrides the built-in writing rules where they conflict |
| `researchEnabled` | boolean | | `false` = no web research, zero external links. Defaults to `false` |
| `whitelistDomains` | string[] | | |
| `blacklistDomains` | string[] | | defaults to `["wikipedia.org"]` |
| `pineconeIndex` | string | | **this client's** index |
| `pineconeNamespace` | string | | **this client's** namespace |

### Validation the backend must do before sending

n8n fails **silently** — a rejected request produces no callback at all. Every one of these has to be
caught on our side:

1. `pageType` is one of the two values.
2. `h1`, `coreKeyword`, `clientName`, `productDescription` are all non-empty.
3. `targetLanguage` is on the supported list (~130 language names; anything else throws in `Brief Parser`).
4. `h1`, `coreKeyword` and `secondaryKeywords` are in `targetLanguage`. Keyword counts are literal, so
   English keywords against an Arabic page score zero and trigger a pointless edit loop.
5. `pineconeIndex` / `pineconeNamespace` belong to the client named in `clientName`. Pointing a client
   page at another client's namespace produces a page with no internal links and no error.
6. `callback_url` has no trailing slash.

### Example

```json
{
  "taskId": "task_01J8ZQ4M7XKD3P",
  "brandId": "brand_schneider",
  "userId": "user_amelia_ruiz",
  "callback_url": "https://backend-production.snoika.com/n8n/webhook",

  "pageType": "solution",
  "h1": "AI search visibility for B2B SaaS companies",
  "coreKeyword": "AI search visibility",
  "secondaryKeywords": "generative engine optimization, ChatGPT visibility",
  "targetLanguage": "English",

  "clientName": "Snoika",
  "productDescription": "Snoika is an AI marketing agency… Put pricing, setup time and integrations here.",
  "clientProof": "Named customers, metrics with dates, source URLs.",
  "certifications": "ISO 27001, SOC 2 Type II",
  "writingPreferences": "Address the reader as \"you\". Never call Snoika a platform.",

  "researchEnabled": true,
  "whitelistDomains": [],
  "blacklistDomains": ["wikipedia.org"],

  "pineconeIndex": "snoika",
  "pineconeNamespace": "snoika-internal-linking"
}
```

---

## 2. Callback: run started

```
POST {callback_url}/execution-started
```

```json
{
  "createdAt": "2026-08-06T09:14:22.113Z",
  "executionKey": "kM3sQp:18432",
  "executionId": "18432",
  "workflowId": "kM3sQp",
  "workflowName": "Page Maker",
  "taskId": "task_01J8ZQ4M7XKD3P",
  "brandId": "brand_schneider",
  "userId": "user_amelia_ruiz",
  "pageType": "solution",
  "coreKeyword": "AI search visibility",
  "traceId": "8f14e45f-ceea-467a-9e0f-1b3c2a7d5e91"
}
```

Best-effort and **not a guarantee the run will finish**. If our endpoint is down n8n continues anyway.
Use it to record `executionId` against `taskId` and to start the timeout clock.

---

## 3. Callback: page ready

```
POST {callback_url}/solution      ← pageType is the path segment
POST {callback_url}/industry
```

```json
{
  "taskId": "task_01J8ZQ4M7XKD3P",
  "userId": "user_amelia_ruiz",
  "brandId": "brand_schneider",
  "n8nExecutionId": "18432",

  "pageType": "solution",
  "targetLanguage": "Arabic",
  "h1": "برنامج إدارة البنية التحتية لمراكز البيانات",
  "coreKeyword": "إدارة البنية التحتية لمراكز البيانات",
  "secondaryKeywords": "برنامج DCIM, مراقبة الطاقة في مراكز البيانات",

  "slug": "data-centre-infrastructure-management",
  "metaTitle": "…",
  "metaDescription": "…",

  "pageText": {
    "title": "…",
    "h1Title": "…",
    "introduction": [{ "type": "paragraph", "children": [{ "type": "text", "text": "…" }] }],
    "h2Headings": [
      { "h2Heading": "…", "headingId": 1, "bodyText": [], "h3Headings": [] }
    ],
    "primaryKeyword": "…",
    "secondaryKeywords": ["…"]
  },
  "pageTextMd": "# …\n\n…"
}
```

- `pageText` is the Strapi rich-text tree. It drops into the existing content type with no transformation.
- `pageTextMd` is the same page as Markdown, for diffing and review.
- `slug` is always ASCII. Non-Latin scripts are transliterated (Ukrainian uses the official KMU 55
  standard); scripts with no reliable romanisation fall back to the English core keyword.
- **Retried up to 5 times, 2 s apart.** The endpoint must be idempotent.

---

## 4. Failure handling

**There is no error callback.** A validation throw, a DeepL outage or an agent failure ends the run
silently. The backend is the only thing that will notice.

- Mark a task `failed` if no page callback arrives within **30 minutes** of the request. Typical run is
  4–10 minutes.
- Receiving `/execution-started` does not mean the run will complete.
- The workflow does not guarantee slug uniqueness. Deduplicate on our side.
- Both callback endpoints must accept a repeat delivery without creating a second record.

---

## 5. Acceptance criteria

| # | Criterion |
|---|---|
| AC1 | A request missing any required field is rejected with 422 and **no** call to n8n |
| AC2 | An unsupported `targetLanguage` is rejected before sending |
| AC3 | A request whose `pineconeNamespace` does not belong to `clientName` is rejected |
| AC4 | `h1` in the page callback equals `h1` sent, byte for byte, including Arabic, Cyrillic and Greek |
| AC5 | The same `(taskId, n8nExecutionId)` delivered three times creates exactly one stored page |
| AC6 | `/execution-started` returning 500 does not prevent the page callback from being stored |
| AC7 | No page callback within 30 minutes → task status `failed` and an alert is raised |
| AC8 | Two pages resolving to the same slug are both stored and both retrievable, slugs distinct |
| AC9 | `pageText` renders in Strapi with no transformation on our side |
| AC10 | A request with `researchEnabled: false` returns `pageTextMd` containing zero external links |
| AC11 | `slug` is always `^[a-z0-9]+(-[a-z0-9]+)*$`, whatever the target language |
