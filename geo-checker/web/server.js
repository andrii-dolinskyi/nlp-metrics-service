/*
 * Snoika lead-magnet tools API + static hosting
 *
 * One small server for ALL n8n-backed free tools. Each tool is one entry in
 * tools.config.js pointing at its n8n webhook. The browser never sees the
 * webhook URLs or secrets; this server adds rate limiting, caching, input
 * validation, optional CAPTCHA, and generic error messages.
 *
 * Routes:
 *   POST /api/t/<slug>        run a tool (slugs come from tools.config.js)
 *   POST /api/ai-visibility   legacy alias for /api/t/ai-visibility
 *   GET  /api/config          public config for the frontend (site key only)
 *   GET  /                    serves public/ (the AI Visibility page)
 *
 * Environment (see .env.example):
 *   N8N_WEBHOOK_URL      required   webhook for the ai-visibility tool
 *   N8N_WEBHOOK_SECRET   optional   sent as X-Snoika-Key
 *   ALLOWED_ORIGIN       optional   e.g. https://snoika.com — enables CORS so
 *                                   a page hosted elsewhere (Lovable) can call
 *                                   this API cross-origin. Comma-separate for
 *                                   several origins.
 *   TURNSTILE_SECRET / TURNSTILE_SITE_KEY   optional CAPTCHA
 *   PORT, RATE_PER_HOUR, RATE_PER_DAY, CACHE_TTL_HOURS   optional tuning
 */

const express = require('express');
const path = require('path');
const crypto = require('crypto');
const TOOLS = require('./tools.config.js');

const app = express();
app.set('trust proxy', true);
app.use(express.json({ limit: '10kb' }));

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET || '';
const TURNSTILE_SITE_KEY = process.env.TURNSTILE_SITE_KEY || '';
const PORT = parseInt(process.env.PORT || '3000', 10);
const RATE_PER_HOUR = parseInt(process.env.RATE_PER_HOUR || '6', 10);
const RATE_PER_DAY = parseInt(process.env.RATE_PER_DAY || '20', 10);
const DEFAULT_CACHE_TTL_MS = parseInt(process.env.CACHE_TTL_HOURS || '24', 10) * 3600 * 1000;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGIN || '').split(',').map((s) => s.trim()).filter(Boolean);

/* ── CORS (only when ALLOWED_ORIGIN is configured) ───────────────────────── */
app.use('/api', (req, res, next) => {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
    res.set('Vary', 'Origin');
    res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '86400');
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

/* ── input validation ────────────────────────────────────────────────────── */
function validateUrl(raw) {
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
  return { value: raw };
}

function validateInputs(tool, body) {
  const values = {};
  for (const spec of tool.inputs) {
    const raw = body ? body[spec.name] : undefined;
    if (raw === undefined || raw === null || String(raw).trim() === '') {
      if (spec.required) return { error: 'Missing required field: ' + spec.name };
      continue;
    }
    if (spec.type === 'url') {
      const v = validateUrl(raw);
      if (v.error) return { error: v.error };
      values[spec.name] = v.value;
    } else {
      const s = String(raw).trim().slice(0, spec.maxLen || 300);
      values[spec.name] = s;
    }
  }
  return { values };
}

/* ── in-memory rate limiter (shared across all tools, per IP) ────────────── */
const hits = new Map();
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
setInterval(() => {
  const now = Date.now();
  for (const [ip, list] of hits) {
    const fresh = list.filter((t) => now - t < 24 * 3600 * 1000);
    if (fresh.length === 0) hits.delete(ip); else hits.set(ip, fresh);
  }
}, 10 * 60 * 1000).unref();

/* ── in-memory result cache ──────────────────────────────────────────────── */
const cache = new Map();
const CACHE_MAX = 500;
function cacheGet(key, ttlMs) {
  const hit = cache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.ts > ttlMs) { cache.delete(key); return null; }
  return hit.data;
}
function cacheSet(key, data) {
  if (cache.size >= CACHE_MAX) cache.delete(cache.keys().next().value);
  cache.set(key, { data, ts: Date.now() });
}

/* ── optional Cloudflare Turnstile ───────────────────────────────────────── */
async function verifyTurnstile(token, ip) {
  if (!TURNSTILE_SECRET) return true;
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

app.get('/api/config', (_req, res) => {
  res.json({ turnstileSiteKey: TURNSTILE_SITE_KEY, tools: Object.keys(TOOLS) });
});

/* ── generic tool runner ─────────────────────────────────────────────────── */
async function runTool(slug, req, res) {
  const tool = TOOLS[slug];
  if (!tool) return res.status(404).json({ payload: { error: 'Unknown tool.' } });

  const webhookUrl = process.env[tool.webhookUrlEnv] || '';
  if (!webhookUrl) {
    console.error('missing env ' + tool.webhookUrlEnv + ' for tool ' + slug);
    return res.status(500).json({ payload: { error: 'This tool is not configured yet.' } });
  }

  const ip = req.ip || 'unknown';
  const v = validateInputs(tool, req.body);
  if (v.error) return res.status(400).json({ payload: { error: v.error } });

  const ttlMs = (tool.cacheTtlHours ? tool.cacheTtlHours * 3600 * 1000 : DEFAULT_CACHE_TTL_MS);
  const cacheKey = slug + ':' + crypto.createHash('sha1').update(JSON.stringify(v.values)).digest('hex');
  const cached = cacheGet(cacheKey, ttlMs);
  if (cached) return res.json(cached);

  const limited = rateLimited(ip);
  if (limited === 'hour') return res.status(429).json({ payload: { error: 'Scan limit reached — try again in an hour.' } });
  if (limited === 'day') return res.status(429).json({ payload: { error: 'Daily scan limit reached — come back tomorrow.' } });

  if (!(await verifyTurnstile(req.body && req.body.turnstileToken, ip))) {
    return res.status(403).json({ payload: { error: 'Human verification failed — refresh the page and try again.' } });
  }

  try {
    const headers = { 'Content-Type': 'application/json' };
    const secret = process.env[tool.secretEnv || 'N8N_WEBHOOK_SECRET'] || '';
    if (secret) headers['X-Snoika-Key'] = secret;
    const qs = v.values.url ? '?url=' + encodeURIComponent(v.values.url) : '';
    const upstream = await fetch(webhookUrl + qs, {
      method: 'POST',
      headers,
      body: JSON.stringify(v.values),
      signal: AbortSignal.timeout(tool.timeoutMs || 35000),
    });
    const data = await upstream.json();
    if (!data || typeof data !== 'object' || !('payload' in data)) {
      console.error('unexpected upstream shape for ' + slug + ':', JSON.stringify(data).slice(0, 300));
      return res.status(502).json({ payload: { error: 'The tool returned an unexpected response. Please try again.' } });
    }
    if (!data.payload.error) cacheSet(cacheKey, data);
    return res.json(data);
  } catch (e) {
    console.error('upstream error for ' + slug + ':', e.message);
    return res.status(504).json({ payload: { error: 'The scan took too long or the tool is busy. Please try again in a minute.' } });
  }
}

app.post('/api/t/:slug', (req, res) => runTool(req.params.slug, req, res));
app.post('/api/ai-visibility', (req, res) => runTool('ai-visibility', req, res));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1h', index: 'index.html' }));

app.listen(PORT, () => console.log('Snoika tools API serving on http://localhost:' + PORT + ' — tools: ' + Object.keys(TOOLS).join(', ')));
