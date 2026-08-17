/*
 * Snoika AI Visibility Score — backend proxy
 *
 * Sits between the public frontend and the n8n scoring workflow so the
 * workflow URL and secret never reach the browser. All abuse protection
 * lives here: rate limiting, caching, URL validation, optional CAPTCHA.
 *
 * Environment variables (see .env.example):
 *   N8N_WEBHOOK_URL     required  e.g. https://n8n-test.snoika.com/webhook/ai-visibility-check
 *   N8N_WEBHOOK_SECRET  optional  sent as X-Snoika-Key (enable Header Auth on the n8n webhook)
 *   TURNSTILE_SECRET    optional  Cloudflare Turnstile secret; if set, tokens are verified
 *   TURNSTILE_SITE_KEY  optional  passed to the frontend so the widget renders
 *   PORT                optional  default 3000
 *   RATE_PER_HOUR       optional  scans per IP per hour, default 6
 *   RATE_PER_DAY        optional  scans per IP per day, default 20
 *   CACHE_TTL_HOURS     optional  hours a scan result is reused, default 24
 */

const express = require('express');
const path = require('path');

const app = express();
app.set('trust proxy', true); // behind Cloudflare/nginx: use X-Forwarded-For for client IP
app.use(express.json({ limit: '10kb' }));

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || '';
const N8N_WEBHOOK_SECRET = process.env.N8N_WEBHOOK_SECRET || '';
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET || '';
const TURNSTILE_SITE_KEY = process.env.TURNSTILE_SITE_KEY || '';
const PORT = parseInt(process.env.PORT || '3000', 10);
const RATE_PER_HOUR = parseInt(process.env.RATE_PER_HOUR || '6', 10);
const RATE_PER_DAY = parseInt(process.env.RATE_PER_DAY || '20', 10);
const CACHE_TTL_MS = parseInt(process.env.CACHE_TTL_HOURS || '24', 10) * 3600 * 1000;

if (!N8N_WEBHOOK_URL) {
  console.error('FATAL: N8N_WEBHOOK_URL is not set');
  process.exit(1);
}

/* ── URL validation (same rules as the workflow, defense in depth) ───────── */
function normalizeUrl(raw) {
  raw = String(raw || '').trim();
  if (!raw) return { error: 'Please enter a URL.' };
  if (!/^https?:\/\//i.test(raw)) raw = 'https://' + raw;
  if (raw.length > 2048) return { error: 'That URL is too long.' };
  const m = raw.match(/^(https?):\/\/([^/?#]+)([\s\S]*)$/i);
  if (!m) return { error: 'That does not look like a valid URL.' };
  const host = m[2].replace(/:\d+$/, '').toLowerCase();
  const isPrivate =
    host === 'localhost' || host.endsWith('.local') || host.endsWith('.internal') ||
    /^127\./.test(host) || /^10\./.test(host) || /^192\.168\./.test(host) ||
    /^169\.254\./.test(host) || /^172\.(1[6-9]|2[0-9]|3[01])\./.test(host) ||
    host === '0.0.0.0' || host.startsWith('[');
  if (isPrivate) return { error: 'Private and internal addresses are not allowed.' };
  if (!/^[a-z0-9.-]+$/.test(host) || !host.includes('.')) return { error: 'That does not look like a valid URL.' };
  return { url: raw, key: raw.replace(/[?#][\s\S]*$/, '').replace(/\/+$/, '').toLowerCase() };
}

/* ── in-memory rate limiter (per IP, sliding windows) ────────────────────── */
const hits = new Map(); // ip -> [timestamps]
function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 24 * 3600 * 1000);
  const lastHour = list.filter((t) => now - t < 3600 * 1000);
  if (lastHour.length >= RATE_PER_HOUR) return 'hour';
  if (list.length >= RATE_PER_DAY) return 'day';
  list.push(now);
  hits.set(ip, list);
  return null;
}
setInterval(() => { // prune idle IPs so the map never grows unbounded
  const now = Date.now();
  for (const [ip, list] of hits) {
    const fresh = list.filter((t) => now - t < 24 * 3600 * 1000);
    if (fresh.length === 0) hits.delete(ip); else hits.set(ip, fresh);
  }
}, 10 * 60 * 1000).unref();

/* ── in-memory result cache ──────────────────────────────────────────────── */
const cache = new Map(); // key -> { data, ts }
const CACHE_MAX = 500;
function cacheGet(key) {
  const hit = cache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.ts > CACHE_TTL_MS) { cache.delete(key); return null; }
  return hit.data;
}
function cacheSet(key, data) {
  if (cache.size >= CACHE_MAX) cache.delete(cache.keys().next().value);
  cache.set(key, { data, ts: Date.now() });
}

/* ── optional Cloudflare Turnstile verification ──────────────────────────── */
async function verifyTurnstile(token, ip) {
  if (!TURNSTILE_SECRET) return true; // not configured -> skip
  if (!token) return false;
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: TURNSTILE_SECRET, response: token, remoteip: ip }),
    });
    const j = await r.json();
    return !!j.success;
  } catch (e) {
    console.error('turnstile verify failed:', e.message);
    return false;
  }
}

/* ── config for the frontend (site key only, never secrets) ──────────────── */
app.get('/api/config', (_req, res) => {
  res.json({ turnstileSiteKey: TURNSTILE_SITE_KEY });
});

/* ── the scan endpoint ───────────────────────────────────────────────────── */
app.post('/api/ai-visibility', async (req, res) => {
  const ip = req.ip || 'unknown';
  const norm = normalizeUrl(req.body && req.body.url);
  if (norm.error) return res.status(400).json({ payload: { error: norm.error } });

  const cached = cacheGet(norm.key);
  if (cached) return res.json(cached);

  const limited = rateLimited(ip);
  if (limited === 'hour') return res.status(429).json({ payload: { error: 'Scan limit reached — try again in an hour.' } });
  if (limited === 'day') return res.status(429).json({ payload: { error: 'Daily scan limit reached — come back tomorrow.' } });

  if (!(await verifyTurnstile(req.body && req.body.turnstileToken, ip))) {
    return res.status(403).json({ payload: { error: 'Human verification failed — refresh the page and try again.' } });
  }

  try {
    const headers = { 'Content-Type': 'application/json' };
    if (N8N_WEBHOOK_SECRET) headers['X-Snoika-Key'] = N8N_WEBHOOK_SECRET;
    const upstream = await fetch(N8N_WEBHOOK_URL + '?url=' + encodeURIComponent(norm.url), {
      method: 'POST',
      headers,
      signal: AbortSignal.timeout(35000),
    });
    const data = await upstream.json();
    if (!data || typeof data !== 'object' || !('payload' in data)) {
      console.error('unexpected upstream shape:', JSON.stringify(data).slice(0, 300));
      return res.status(502).json({ payload: { error: 'The scanner returned an unexpected response. Please try again.' } });
    }
    if (!data.payload.error) cacheSet(norm.key, data);
    return res.json(data);
  } catch (e) {
    console.error('upstream error:', e.message);
    return res.status(504).json({ payload: { error: 'The scan took too long or the scanner is busy. Please try again in a minute.' } });
  }
});

app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1h', index: 'index.html' }));

app.listen(PORT, () => console.log('AI Visibility Score serving on http://localhost:' + PORT));
