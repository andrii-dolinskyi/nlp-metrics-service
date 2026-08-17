# Lovable handover — AI Visibility Score (and future lead-magnet tools)

This folder is the complete package. It runs standalone (own server + page),
and this document explains how to hand it to Lovable so the page lives on
snoika.com under your chosen slug while the backend stays on your own host.

## The architecture (one backend for ALL your lead magnets)

```
snoika.com/free-tools/<slug>   (Lovable page — design + rendering only)
        │  fetch POST
        ▼
tools API (this folder, deployed once on Render/Railway/VPS)
  /api/t/ai-visibility     → n8n workflow "GEO Checker"
  /api/t/<next-tool>       → its own n8n workflow      ← add in tools.config.js
        │  X-Snoika-Key secret, server-to-server
        ▼
your n8n workflows (webhooks with Header Auth, firewalled)
```

The API is **tool-agnostic**: every future lead magnet is one new entry in
`tools.config.js` (slug, webhook env var, input fields) plus one env var.
Rate limiting, caching, validation, CAPTCHA and secrets are shared and already
done. Different payloads are fine — the API forwards whatever the workflow
returns; only the page's renderer is tool-specific.

## Step 1 — deploy the API yourself (10 minutes, no developers)

Render.com (you already use it):
1. New → Web Service → connect the GitHub repo, branch `claude/geo-aeo-checker-tool-b4vaey`
2. Root Directory: `geo-checker/web` · Build: `npm install` · Start: `node server.js`
3. Environment: `N8N_WEBHOOK_URL=https://n8n-test.snoika.com/webhook/ai-visibility-check`
   (add `N8N_WEBHOOK_SECRET`, `ALLOWED_ORIGIN=https://snoika.com`, Turnstile keys later)
4. Deploy. You get e.g. `https://snoika-tools.onrender.com` — this is BOTH your
   sandbox (the full page works there immediately) and later the production API.
   Free plan sleeps when idle (first request after a pause takes ~30 s);
   the $7 Starter plan removes that.

## Step 2 — test it yourself with real links

- Open your Render URL → paste any article URL → Check my page.
- Watch the workflow fire live: n8n editor → left sidebar → **Executions**.
  Every scan appears there; click one to inspect every node's output.
- Test the API directly:
  `curl -X POST "https://<your-app>.onrender.com/api/t/ai-visibility" -H "Content-Type: application/json" -d '{"url":"https://ahrefs.com/blog/seo-basics/"}'`
- Good test set: your own blog post (high score), a bbc.com article
  (shows blocked AI robots), a competitor's page.
- Note: repeat scans of the same URL are served from cache (instant); the
  n8n execution list only shows the first one. Rate limit is 6/hour per IP —
  raise `RATE_PER_HOUR` on your sandbox if you're testing a lot.

## Step 3 — what to give Lovable

Paste this prompt into Lovable (attach `public/index.html` as the reference):

> Create a page at the slug `/free-tools/ai-visibility-score`, matching the
> attached `index.html` exactly: same layout, colors, copy, FAQ and footer.
> Keep all text as written. The scan form must POST JSON `{ "url": "<input>" }`
> to `https://<your-app>.onrender.com/api/t/ai-visibility` and render the
> response, which has the shape `{ page, payload }` (see attached
> `sample-payload.json`). The rendering logic (score ring, category
> accordions, three row types: checks with points, patterns with
> clean/notable/heavy chips, metrics with value + good/fair/poor chips, and
> the score-dependent CTA band) is fully implemented in the `<script>` at the
> bottom of the reference file — port it as-is. Also copy the
> `<script type="application/ld+json">` block from the reference `<head>`
> into the page head, update its `url` field to the final page URL, set the
> page <title> and meta description from the reference, and remove the
> demo top-nav and footer (the site already has its own).

Also give Lovable/your site config:
- **llms.txt**: add this line to snoika.com's `/llms.txt`:
  `- [AI Visibility Score](https://snoika.com/free-tools/ai-visibility-score): free checker that scores any page on 50+ signals for how likely ChatGPT, Perplexity and Google AI are to quote it`
- **Sitemap**: make sure the slug is in the sitemap (Lovable usually handles this).
- Set `ALLOWED_ORIGIN=https://snoika.com` on the API so the Lovable page may call it.
- Replace `BOOK_URL` / `TRIAL_URL` placeholders with the real booking/signup links.

## Where to edit what (the map)

| You want to change | File / place |
|---|---|
| Headline, intro, explainers, FAQ, grade legend | `public/index.html` — plain HTML sections, top to bottom |
| Colors, fonts, spacing | `public/index.html` — CSS variables in `:root` at the top (`--bg`, `--violet`, `--cyan`…) |
| CTA texts shown after a scan (low/high score) | `public/index.html` — `buildCta()` function in the `<script>` |
| Category subtitles on the result cards | `public/index.html` — `CAT_SUBS` object in the `<script>` |
| Check names, comments, scoring, points | NOT on the page — they come from n8n: **Score Engine** node in the GEO Checker workflow |
| Rate limits, cache time, CAPTCHA | env vars (`.env.example`) |
| Add a whole new tool | `tools.config.js` + one env var + its own page |

## Security recap (already wired, flip on when ready)

1. n8n webhook → Authentication → Header Auth → `X-Snoika-Key` = the secret
   you also set as `N8N_WEBHOOK_SECRET` on the API. (Ask Claude to enable the
   workflow side, or click it yourself in the webhook node.)
2. Remove `Access-Control-Allow-Origin: *` from the workflow's Respond node.
3. Cloudflare: restrict n8n's `/webhook/*` to the API host, move off the
   `-test` subdomain for production, set a Tavily spend alert.
