// Pick Request: merge all fetched pages, keep only human channel messages that are recent and not bot output, oldest first.
const BOT_MARKER = '🤖';
const LOOKBACK_MS = 3 * 60 * 60 * 1000; // 3 hours
const pages = $input.all().map(i => i.json || {});
const list = pages.flatMap(p => (Array.isArray(p.data) ? p.data : []));
const now = Date.now();
const seen = new Set();
return list
  .filter(m => m && m.id && (m.type === 'message' || m.type === 'post'))
  .filter(m => !String(m.content || '').trim().startsWith(BOT_MARKER))
  .filter(m => Number(m.date) >= now - LOOKBACK_MS)
  .filter(m => (seen.has(String(m.id)) ? false : (seen.add(String(m.id)), true)))
  .sort((a, b) => Number(a.date) - Number(b.date))
  .map(m => ({ json: {
    message_id: String(m.id),
    user_id: String(m.user_id || ''),
    content: String(m.content || ''),
    date: Number(m.date),
    type: String(m.type)
  } }));
