# AI Visibility Score — deployment handoff

Everything the site team needs to put the free checker on snoika.com.
Two files matter: `server.js` (backend proxy) and `public/index.html`
(the complete page). No build step, no framework.

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
N8N_WEBHOOK_URL=https://n8n-test.snoika.com/webhook/ai-visibility-check node server.js
# open http://localhost:3000
```

## Deploy checklist

1. Deploy this folder to any Node 18+ host (Render, Railway, Fly, a VPS,
   or wrap `server.js` as a Next.js/Express route in the main site repo).
2. Set env vars from `.env.example`. Generate the secret:
   `openssl rand -hex 32`.
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
6. Optional: create a Turnstile widget (Cloudflare dashboard → Turnstile),
   set `TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET`. The frontend picks the
   site key up automatically from `/api/config`.
7. Set a spend alert on the Tavily account as a last-resort backstop.

## Frontend integration notes

- `public/index.html` is self-contained (all CSS/JS inline). To embed in the
  main site, either serve it as-is on a route like `/free-tools/ai-visibility`
  or copy the `<style>`, body sections and `<script>` into your page template.
- Replace the two placeholder links at the top of the script:
  `BOOK_URL` and `TRIAL_URL` (currently `https://snoika.com`).
- The page includes a faux top-nav and footer for standalone use — strip them
  when embedding under the site's real chrome.
- The renderer consumes the API response as-is (`{ page, payload }`), so
  workflow scoring changes need no frontend edits unless categories change shape.

## Scaling note

Rate limiting and cache are in-memory: perfect for a single instance, reset on
restart. If you ever run multiple instances behind a load balancer, move both
to Redis (the functions `rateLimited`, `cacheGet`, `cacheSet` in `server.js`
are the only three places to touch).
