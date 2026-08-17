# AI Visibility Score — deployment handoff

Everything the site team needs to put the free checker on snoika.com.
Three files matter: `worker.js` (backend proxy, Cloudflare Workers —
the deploy target), `public/index.html` (the complete page), and
`wrangler.toml` (Workers config). `server.js` is the same backend as a
classic Express app, kept for local dev or a Render/VPS deploy if ever
preferred. No build step, no framework.

## What the backend does (and why it exists)

The browser never talks to n8n. It calls `POST /api/ai-visibility` on our
own domain, and the server forwards the request to the n8n workflow with a
secret header. The server also enforces:

- **Rate limiting** — 6 scans/hour and 20/day per IP (configurable)
- **Result caching** — same URL within 24h is served from cache (fast + saves
  extraction credits)
- **URL validation** — http/https only, public hosts only (SSRF guard)
- **Optional Cloudflare Turnstile** — invisible CAPTCHA, enabled by env vars
- **Generic errors** — upstream details are logged server-side, never shown

## Run locally

```bash
cd geo-checker/web
npm install
npx wrangler dev          # Workers runtime, http://localhost:8787
# or the Express variant:
N8N_WEBHOOK_URL=https://n8n-test.snoika.com/webhook/ai-visibility-check node server.js
# open http://localhost:3000
```

## Deploy checklist (Cloudflare Workers, free plan)

1. `npx wrangler deploy` from `geo-checker/web` (first run: browser login).
   Non-secret config lives in `wrangler.toml` `[vars]`; redeploy after edits.
2. Set the secret: generate with `openssl rand -hex 32`, then
   `npx wrangler secret put N8N_WEBHOOK_SECRET`.
   Optional but recommended: create a KV namespace
   (`npx wrangler kv namespace create TOOLS_KV`) and uncomment the
   `[[kv_namespaces]]` block in `wrangler.toml` so rate limits and the
   result cache persist across Worker instances.
3. In the n8n editor, open the **Score API Request** webhook node →
   Authentication → **Header Auth** → create a credential with header name
   `X-Snoika-Key` and the same secret. From then on, requests without the
   header are rejected.
4. In the n8n **Respond Report** node, remove the
   `Access-Control-Allow-Origin: *` response header (no longer needed once
   the browser talks only to our own domain).
5. Firewall (recommended): restrict `n8n-test.snoika.com/webhook/*` to the
   backend's egress IPs, or put Cloudflare Access in front of it. Also plan
   to move the workflow off the `-test` subdomain for production.
6. Optional: create a Turnstile widget (Cloudflare dashboard → Turnstile).
   Put `TURNSTILE_SITE_KEY` in `wrangler.toml` `[vars]` and set the secret
   with `npx wrangler secret put TURNSTILE_SECRET`. The frontend picks the
   site key up automatically from `/api/config`.
7. Set a spend alert on the Tavily account as a last-resort backstop.

## Frontend integration notes

- `public/index.html` is self-contained (all CSS/JS inline). To embed in the
  main site, either serve it as-is on the `/free-tools/geo-checker` route
  or copy the `<style>`, body sections and `<script>` into your page template.
- Replace the two placeholder links at the top of the script:
  `BOOK_URL` and `TRIAL_URL` (currently `https://snoika.com`).
- The page includes a faux top-nav and footer for standalone use — strip them
  when embedding under the site's real chrome.
- The renderer consumes the API response as-is (`{ page, payload }`), so
  workflow scoring changes need no frontend edits unless categories change shape.

## Scaling note

On Workers, rate limiting and cache use the `TOOLS_KV` namespace when bound
(persistent, shared) and fall back to per-instance memory otherwise. Free-plan
KV allows 1,000 writes/day — each fresh scan costs 2 writes, so roughly 500
new scans/day before limits soften; far above expected lead-magnet traffic.
The Express variant (`server.js`) keeps both in process memory: fine for one
instance, move to Redis if ever load-balanced.
