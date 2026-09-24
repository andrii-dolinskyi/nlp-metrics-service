const j = $input.first().json;
const r = $('Parse Request').first().json;
const a = $('Assemble Assets').first().json;
// DeepL runs with tag_handling html, so it returns entities (&#x27; for an apostrophe, &amp;, &quot;) and sometimes
// joins clauses with semicolons the style rules forbid. Decode every entity and turn a semicolon into a comma.
const decode = s => String(s || '')
  .replace(/&#x([0-9a-f]+);/gi, (m, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(parseInt(n, 10)))
  .replace(/&quot;/g, String.fromCharCode(34)).replace(/&apos;/g, String.fromCharCode(39)).replace(/&nbsp;/g, ' ')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
  .replace(/\s*;\s+/g, ', ');
// DeepL sometimes returns the protected span on a paragraph of its own in the middle of a sentence (… «\n\nNAME\n\n» …):
// when the text before the blank lines is an open clause (no sentence end, no heading), the span goes back inline.
// Then every span is stripped. The dedupe below removes the quotes and the generic noun DeepL put around the name.
const unspan = s => String(s)
  .replace(/([^\n.!?:»"”\s])[ \t]*\n[ \t]*\n[ \t]*(<span[^>]*translate="no"[^>]*>[\s\S]*?<\/span>)[ \t]*\n[ \t]*\n[ \t]*(?=[^\n#|*\-\d])/gi, '$1 $2 ')
  .replace(/<span[^>]*translate="no"[^>]*>\s*([\s\S]*?)\s*<\/span>/gi, '$1')
  .replace(/<\/?span[^>]*>/gi, '')
  // A paragraph that is only a stray closing quote (what DeepL leaves after a span it broke out) goes away.
  .replace(/\n[ \t]*\n[ \t]*[»"”][ \t]*(?=\n)/g, '\n');
const origName = (r.original && r.original.clientName) ? String(r.original.clientName).trim() : '';
const dedupe = s => {
  if (!origName) return s;
  const esc = x => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const words = origName.split(/\s+/);
  let out = s;
  // DeepL puts an inflected generic noun and « » quotes in front of the protected name (juridychnij firmi «Juridychna
  // firma ...»), sometimes across a line break. Each leading word of the original matches by its stem, the quotes and
  // the whitespace are optional, and the whole run collapses to the name exactly as the app sent it.
  const stem = w => { const core = w.length > 5 ? w.slice(0, Math.max(4, w.length - 2)) : w.slice(0, Math.max(3, w.length - 1)); return esc(core) + '\\p{L}*'; };
  for (let k = Math.min(3, words.length - 1); k >= 1; k--) {
    const lead = words.slice(0, k).map(stem).join('\\s+');
    out = out.replace(new RegExp('(^|[^\\p{L}])' + lead + '\\s*[«"“]?\\s*' + esc(origName) + '\\s*[»"”]?', 'giu'), (m, pre) => pre + origName);
  }
  // Quotes DeepL added around the bare name go too: the app sent the name without them.
  out = out.replace(new RegExp('[«"“]\\s*' + esc(origName) + '\\s*[»"”]', 'gu'), origName);
  // No space between the name and a following comma or full stop, none after an opening bracket or quote.
  out = out.replace(new RegExp(esc(origName) + '[ \\t]+(?=[,.;:!?)])', 'gu'), origName).replace(new RegExp('([«("“])[ \\t]+' + esc(origName), 'gu'), '$1' + origName);
  return out;
};
const t = (j.translations || []).map(x => dedupe(unspan(decode(x.text))));
// The meta description was written to 150 characters in English and grows in translation: cut it back at a
// sentence end, else at a clause end, else at a word, and drop a dangling connector.
const clampMeta = (x, max) => {
  x = String(x || '').replace(/[—–;]/g, ',').replace(/\s+/g, ' ').trim();
  if (x.length <= max) return x;
  const cut = x.slice(0, max);
  const dot = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.'));
  if (dot > max * 0.6) return cut.slice(0, dot + 1).trim();
  const comma = cut.lastIndexOf(', ');
  let out = comma > max * 0.5 ? cut.slice(0, comma) : cut.slice(0, Math.max(cut.lastIndexOf(' '), 0) || max);
  out = out.replace(/[,:]$/, '').replace(/\s+(et|ou|de|des|du|à|au|aux|en|pour|par|sur|avec|dans|que|qui|and|or|of|to|for|with|in|on|by|und|oder|von|zu|für|mit|y|o|de|para|con|e|di|a|per|con)$/i, '').trim();
  return out.replace(/[,:]$/, '') + '.';
};
if (!t.length || !t[0]) throw new Error('DeepL returned no translation');
const clean = (v, d) => (!v || v === '-') ? d : v;
const n = a.faq.length;
const faq = a.faq.map((f, i) => ({ question: t[2 + i * 2] || f.question, answer: t[3 + i * 2] || f.answer }));
const EEAT_KEYS = ['experience', 'expertise', 'authoritativeness', 'trustworthiness'];
let eeat = a.eeat ? JSON.parse(JSON.stringify(a.eeat)) : null;
if (eeat) {
  EEAT_KEYS.forEach((k, i) => { if (eeat[k]) eeat[k].evidence = clean(t[2 + n * 2 + i], eeat[k].evidence); });
  eeat.priorityFix = clean(t[2 + n * 2 + EEAT_KEYS.length], eeat.priorityFix);
}
const promptBase = 2 + n * 2 + EEAT_KEYS.length + 1;
let gi = 0;
const monitoringPrompts = (a.monitoringPrompts || []).map(x => { if (x.source === 'input') return x; const tr = t[promptBase + gi++]; return Object.assign({}, x, { prompt: clean(tr, x.prompt) }); });
// The app's H1 and H2 wording goes back by position: DeepL Prep recorded, for every H2 line of the English page,
// which outline heading it was (null for a section the writer added or the closing H2). DeepL keeps the heading lines
// in place, so the k-th H2 line after translation is the same heading. Clean Text re-checks every heading by text.
const o = r.original || {};
const outline = Array.isArray(o.h2Outline) ? o.h2Outline : [];
const headingMap = Array.isArray($('DeepL Prep').first().json.headingMap) ? $('DeepL Prep').first().json.headingMap : [];
const lines = t[0].split('\n');
const h2Count = lines.filter(l => /^##\s+\S/.test(l)).length;
const restore = outline.length > 0 && headingMap.length === h2Count;
let k = 0;
const finalPage = lines.map(line => {
  if (o.h1 && /^#\s+\S/.test(line)) return '# ' + o.h1;
  if (/^##\s+\S/.test(line)) { const idx = headingMap[k++]; if (restore && typeof idx === 'number' && outline[idx]) return '## ' + outline[idx]; }
  return line;
}).join('\n');
return [{ json: { finalPage, headingsRestored: restore, metaDescription: clampMeta(clean(t[1], a.metaDescription), 150), faq, eeat, monitoringPrompts, faqCount: a.faqCount, slug: a.slug, slugPath: a.slugPath, translated: true } }];
