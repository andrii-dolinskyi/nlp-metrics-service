# Lovable handover — AI Visibility Score (and future lead-magnet tools)

This folder is the complete package. It runs standalone (own server + page),
and this document explains how to hand it to Lovable so the page lives on
snoika.com under your chosen slug while the backend stays on your own host.

## The architecture (one backend for ALL your lead magnets)

```
snoika.com/free-tools/<slug>   (Lovable page — design + rendering only)
        │  fetch POST
        ▼
tools API (this folder, deployed once on Cloudflare Workers — free, no cold starts)
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

Cloudflare Workers (free plan, always warm — no sleeping, no keep-alive needed):

1. On your machine, clone the repo and open `geo-checker/web`
   (branch `claude/geo-aeo-checker-tool-b4vaey`). Needs Node 18+.
2. `npm install`, then `npx wrangler deploy` — the first run opens a browser
   to log in to your (free) Cloudflare account. That's the whole deploy.
3. You get e.g. `https://snoika-tools.<your-account>.workers.dev` — this is
   BOTH your sandbox (the full page works there immediately) and later the
   production API.
4. Set the webhook secret (after you enable Header Auth on the n8n side):
   `npx wrangler secret put N8N_WEBHOOK_SECRET`
5. Non-secret settings (webhook URL, `ALLOWED_ORIGIN`, rate limits,
   `TURNSTILE_SITE_KEY`) live in `wrangler.toml` under `[vars]` — edit and
   re-run `npx wrangler deploy`. Turnstile's secret key goes in via
   `npx wrangler secret put TURNSTILE_SECRET`.
6. Recommended: `npx wrangler kv namespace create TOOLS_KV`, paste the printed
   id into the commented `[[kv_namespaces]]` block in `wrangler.toml`, deploy
   again. This makes rate limits and the result cache persistent (without it
   they reset whenever Cloudflare recycles the instance — still functional,
   just softer).
7. Later, to update: pull the repo and `npx wrangler deploy` again.
   Live logs: `npx wrangler tail`.

Free-plan limits are generous for a lead magnet: 100,000 requests/day.
(The old Express version, `server.js`, still works for Render/VPS if ever
needed — same behavior, same env vars.)

## Step 2 — test it yourself with real links

- Open your `workers.dev` URL → paste any article URL → Check my page.
- Watch the workflow fire live: n8n editor → left sidebar → **Executions**.
  Every scan appears there; click one to inspect every node's output.
- Test the API directly:
  `curl -X POST "https://snoika-tools.<your-account>.workers.dev/api/t/ai-visibility" -H "Content-Type: application/json" -d '{"url":"https://ahrefs.com/blog/seo-basics/"}'`
- Good test set: your own blog post (high score), a bbc.com article
  (shows blocked AI robots), a competitor's page.
- Note: repeat scans of the same URL are served from cache (instant); the
  n8n execution list only shows the first one. Rate limit is 6/hour per IP —
  raise `RATE_PER_HOUR` on your sandbox if you're testing a lot.

## Step 3 — what to give Lovable

Paste this prompt into Lovable (attach `public/index.html` as the reference):

> Create a page at the slug `/free-tools/geo-checker`, matching the
> attached `index.html` exactly: same layout, colors, copy, FAQ and footer.
> Keep all text as written. The scan form must POST JSON `{ "url": "<input>" }`
> to `https://snoika-tools.<your-account>.workers.dev/api/t/ai-visibility` and render the
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
  `- [AI Visibility Score](https://snoika.com/free-tools/geo-checker): free checker that scores any page on 50+ signals for how likely ChatGPT, Perplexity and Google AI are to quote it`
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
| Rate limits, cache time, CAPTCHA | `wrangler.toml` `[vars]` (secrets via `npx wrangler secret put`) |
| Add a whole new tool | `tools.config.js` + one var in `wrangler.toml` + its own page |

## Security recap (already wired, flip on when ready)

1. n8n webhook → Authentication → Header Auth → `X-Snoika-Key` = the secret
   you also set as `N8N_WEBHOOK_SECRET` on the API. (Ask Claude to enable the
   workflow side, or click it yourself in the webhook node.)
2. Remove `Access-Control-Allow-Origin: *` from the workflow's Respond node.
3. Cloudflare: restrict n8n's `/webhook/*` to the API host, move off the
   `-test` subdomain for production, set a Tavily spend alert.
