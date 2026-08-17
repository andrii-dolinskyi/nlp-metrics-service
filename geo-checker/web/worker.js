/*
 * Snoika lead-magnet tools API — Cloudflare Workers edition
 *
 * Same behavior as server.js (Express), rebuilt for the Workers runtime:
 * free tier, no cold starts, no keep-alive needed. The static page in
 * public/ is served by Workers Static Assets (see wrangler.toml).
 *
 * Routes:
 *   POST /api/t/<slug>        run a tool (slugs come from tools.config.js)
 *   POST /api/ai-visibility   legacy alias for /api/t/ai-visibility
 *   GET  /api/config          public config for the frontend (site key only)
 *   GET  /*                   static assets from public/
 *
 * Bindings (wrangler.toml [vars] + `wrangler secret put`):
 *   N8N_WEBHOOK_URL      required   webhook for the ai-visibility tool
 *   N8N_WEBHOOK_SECRET   secret     sent as X-Snoika-Key
 *   ALLOWED_ORIGIN       optional   e.g. https://snoika.com (comma-separate several)
 *   TURNSTILE_SECRET / TURNSTILE_SITE_KEY   optional CAPTCHA
 *   RATE_PER_HOUR, RATE_PER_DAY, CACHE_TTL_HOURS   optional tuning
 *   TOOLS_KV             optional   KV namespace; makes rate limits + cache
 *                                   persistent across isolates. Without it an
 *                                   in-memory fallback is used (still works,
 *                                   just weaker guarantees).
 */

import TOOLS from './tools.config.js';

/* ── helpers ─────────────────────────────────────────────────────────────── */
const num = (v, d) => { const n = parseInt(v || '', 10); return Number.isFinite(n) ? n : d; };

async function sha1(s) {
  const d = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function corsHeaders(request, env) {
  const allowed = (env.ALLOWED_ORIGIN || '').split(',').map((s) => s.trim()).filter(Boolean);
  const origin = request.headers.get('Origin');
  if (!origin || !allowed.includes(origin)) return {};
  return {
    'Access-Control-Allow-Origin': origin,
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function json(data, status, extraHeaders) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json', ...(extraHeaders || {}) },
  });
}

/* ── input validation (identical rules to server.js) ─────────────────────── */
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
      values[spec.name] = String(raw).trim().slice(0, spec.maxLen || 300);
    }
  }
  return { values };
}

/* ── rate limiting: KV when bound, per-isolate memory otherwise ──────────── */
const memHits = new Map();

async function rateLimited(env, ip) {
  const now = Date.now();
  const perHour = num(env.RATE_PER_HOUR, 6);
  const perDay = num(env.RATE_PER_DAY, 20);

  let list;
  if (env.TOOLS_KV) {
    try { list = JSON.parse((await env.TOOLS_KV.get('rl:' + ip)) || '[]'); }
    catch { list = []; }
  } else {
    list = memHits.get(ip) || [];
  }

  list = list.filter((t) => now - t < 24 * 3600 * 1000);
  const lastHour = list.filter((t) => now - t < 3600 * 1000);
  if (lastHour.length >= perHour) return 'hour';
  if (list.length >= perDay) return 'day';
  list.push(now);

  if (env.TOOLS_KV) {
    await env.TOOLS_KV.put('rl:' + ip, JSON.stringify(list), { expirationTtl: 24 * 3600 });
  } else {
    memHits.set(ip, list);
    if (memHits.size > 2000) memHits.delete(memHits.keys().next().value);
  }
  return null;
}

/* ── result cache: KV when bound, per-isolate memory otherwise ───────────── */
const memCache = new Map();

async function cacheGet(env, key, ttlMs) {
  if (env.TOOLS_KV) {
    try { return await env.TOOLS_KV.get('c:' + key, 'json'); } catch { return null; }
  }
  const hit = memCache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.ts > ttlMs) { memCache.delete(key); return null; }
  return hit.data;
}

async function cacheSet(env, key, data, ttlMs) {
  if (env.TOOLS_KV) {
    // KV minimum TTL is 60 s
    await env.TOOLS_KV.put('c:' + key, JSON.stringify(data), { expirationTtl: Math.max(60, Math.floor(ttlMs / 1000)) });
    return;
  }
  if (memCache.size >= 500) memCache.delete(memCache.keys().next().value);
  memCache.set(key, { data, ts: Date.now() });
}

/* ── optional Cloudflare Turnstile ───────────────────────────────────────── */
async function verifyTurnstile(env, token, ip) {
  if (!env.TURNSTILE_SECRET) return true;
  if (!token) return false;
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token, remoteip: ip }),
    });
    const j = await r.json();
    return !!j.success;
  } catch (e) {
    console.error('turnstile verify failed:', e.message);
    return false;
  }
}

/* ── generic tool runner (mirrors server.js) ─────────────────────────────── */
async function runTool(slug, request, env, cors) {
  const tool = TOOLS[slug];
  if (!tool) return json({ payload: { error: 'Unknown tool.' } }, 404, cors);

  const webhookUrl = env[tool.webhookUrlEnv] || '';
  if (!webhookUrl) {
    console.error('missing binding ' + tool.webhookUrlEnv + ' for tool ' + slug);
    return json({ payload: { error: 'This tool is not configured yet.' } }, 500, cors);
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  let body = {};
  try { body = await request.json(); } catch { body = {}; }

  const v = validateInputs(tool, body);
  if (v.error) return json({ payload: { error: v.error } }, 400, cors);

  const ttlMs = (tool.cacheTtlHours ? tool.cacheTtlHours : num(env.CACHE_TTL_HOURS, 24)) * 3600 * 1000;
  const cacheKey = slug + ':' + (await sha1(JSON.stringify(v.values)));
  const cached = await cacheGet(env, cacheKey, ttlMs);
  if (cached) return json(cached, 200, cors);

  const limited = await rateLimited(env, ip);
  if (limited === 'hour') return json({ payload: { error: 'Scan limit reached — try again in an hour.' } }, 429, cors);
  if (limited === 'day') return json({ payload: { error: 'Daily scan limit reached — come back tomorrow.' } }, 429, cors);

  if (!(await verifyTurnstile(env, body && body.turnstileToken, ip))) {
    return json({ payload: { error: 'Human verification failed — refresh the page and try again.' } }, 403, cors);
  }

  try {
    const headers = { 'Content-Type': 'application/json' };
    const secret = env[tool.secretEnv || 'N8N_WEBHOOK_SECRET'] || '';
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
      return json({ payload: { error: 'The tool returned an unexpected response. Please try again.' } }, 502, cors);
    }
    if (!data.payload.error) await cacheSet(env, cacheKey, data, ttlMs);
    return json(data, 200, cors);
  } catch (e) {
    console.error('upstream error for ' + slug + ':', e.message);
    return json({ payload: { error: 'The scan took too long or the tool is busy. Please try again in a minute.' } }, 504, cors);
  }
}

/* ── entry point ─────────────────────────────────────────────────────────── */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/api')) {
      const cors = corsHeaders(request, env);
      if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

      if (url.pathname === '/api/config' && request.method === 'GET') {
        return json({ turnstileSiteKey: env.TURNSTILE_SITE_KEY || '', tools: Object.keys(TOOLS) }, 200, cors);
      }
      const m = url.pathname.match(/^\/api\/t\/([a-z0-9-]+)$/);
      if (m && request.method === 'POST') return runTool(m[1], request, env, cors);
      if (url.pathname === '/api/ai-visibility' && request.method === 'POST') return runTool('ai-visibility', request, env, cors);

      return json({ payload: { error: 'Not found.' } }, 404, cors);
    }

    // everything else: the static page from public/
    return env.ASSETS.fetch(request);
  },
};
