const j = $input.first().json;
const r = $('Parse Request').first().json;
const a = $('Assemble Assets').first().json;
const decode = s => String(s || '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, String.fromCharCode(34)).replace(/&#39;/g, String.fromCharCode(39));
const t = (j.translations || []).map(x => decode(x.text));
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
// The app sent its own H1 and H2 wording in the target language: put it back over DeepL's rendering.
const o = r.original || {};
const outline = Array.isArray(o.h2Outline) ? o.h2Outline : [];
let h2i = 0;
const finalPage = t[0].split('\n').map(line => {
  if (o.h1 && /^#\s+\S/.test(line)) return '# ' + o.h1;
  if (/^##\s+\S/.test(line)) { const idx = h2i++; if (idx < outline.length && outline[idx]) return '## ' + outline[idx]; }
  return line;
}).join('\n');
return [{ json: { finalPage, metaDescription: clean(t[1], a.metaDescription), faq, eeat, slug: a.slug, slugPath: a.slugPath, translated: true } }];
