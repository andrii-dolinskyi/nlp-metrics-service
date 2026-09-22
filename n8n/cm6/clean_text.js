// Last stop before JSON-LD and the callback, on every run and in every language: decode what DeepL or a model
// escaped, remove invisible characters, repair markdown the translation bent, and apply the typography rules
// to the shipped text. The English page the evaluator scores (Extract Updated) is not touched.
const f = $input.first().json;
const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ensp: ' ', emsp: ' ', thinsp: ' ', hellip: '…', ndash: '–', mdash: '—', lsquo: '‘', rsquo: '’', sbquo: '‚', ldquo: '“', rdquo: '”', bdquo: '„', laquo: '«', raquo: '»', lsaquo: '‹', rsaquo: '›', euro: '€', pound: '£', yen: '¥', cent: '¢', copy: '©', reg: '®', trade: '™', deg: '°', plusmn: '±', times: '×', divide: '÷', middot: '·', bull: '•', sect: '§', para: '¶', frac12: '½', frac14: '¼', frac34: '¾', sup2: '²', sup3: '³', micro: 'µ', iexcl: '¡', iquest: '¿', szlig: 'ß', shy: '' };
const ACCENTS = { grave: '̀', acute: '́', circ: '̂', tilde: '̃', uml: '̈', ring: '̊', cedil: '̧', slash: '', caron: '̌' };
const decodeOnce = s => String(s)
  .replace(/&#x([0-9a-f]{1,6});/gi, (m, h) => { try { return String.fromCodePoint(parseInt(h, 16)); } catch (e) { return m; } })
  .replace(/&#(\d{1,7});/g, (m, n) => { try { return String.fromCodePoint(parseInt(n, 10)); } catch (e) { return m; } })
  .replace(/&([a-z][a-z0-9]{1,8});/gi, (m, name) => {
    if (NAMED[name] !== undefined) return NAMED[name];
    const acc = name.match(/^([A-Za-z])(grave|acute|circ|tilde|uml|ring|cedil|slash|caron)$/);
    if (acc && ACCENTS[acc[2]] !== undefined) return (acc[1] + ACCENTS[acc[2]]).normalize('NFC');
    if (name.toLowerCase() === 'oslash') return 'ø'; if (name === 'Oslash') return 'Ø';
    if (name.toLowerCase() === 'aelig') return name === 'AElig' ? 'Æ' : 'æ';
    if (name.toLowerCase() === 'oelig') return name === 'OElig' ? 'Œ' : 'œ';
    return m;
  });
const decode = s => { let cur = String(s || ''); for (let i = 0; i < 3; i++) { const next = decodeOnce(cur); if (next === cur) break; cur = next; } return cur; };
const invisible = s => s.replace(/[​‌‍⁠﻿­]/g, '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').replace(/\r\n?/g, '\n').replace(/ /g, ' ');
const typography = s => s
  .replace(/\s*—\s*/g, ', ')                       // em dash: never
  .replace(/(^|[^\d])\s*–\s*(?=[^\d]|$)/g, '$1, ')  // en dash between words: never; 4–6 stays
  .replace(/\s+,/g, ',').replace(/,\s*,/g, ',').replace(/([.!?]),\s/g, '$1 ');
const apostrophes = s => (/’/.test(s) ? s.replace(/(\p{L})'(\p{L})/gu, '$1’$2') : s);
const markdown = s => s
  .replace(/\]\s*\(\s*(https?:\/\/[^)]*?)\s*\)/g, (m, u) => '](' + u.replace(/\s+/g, '') + ')')   // [text] ( url with spaces ) -> [text](url)
  .replace(/\*\*\s+([^*\n]+?)\s+\*\*/g, '**$1**')                  // ** text ** -> **text**
  .replace(/^(\s*)(\d+)\)\s+/gm, '$1$2. ')                          // 1) step -> 1. step
  .replace(/^(#{1,6})([^#\s])/gm, '$1 $2')                          // ##Title -> ## Title
  .replace(/^\|(\s*:?-+:?\s*\|)+\s*$/gm, row => row.replace(/\s+/g, '')) // table separator rows without spaces
  .replace(/^(\|.*\|)[ \t]+$/gm, '$1')
  .replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trim();
const cleanBlock = s => markdown(typography(apostrophes(invisible(decode(s)))));
const cleanLine = s => typography(apostrophes(invisible(decode(s)))).replace(/\*\*|__|`/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\s*;\s+/g, ', ').replace(/\s+/g, ' ').trim();
const r = $('Parse Request').first().json;
const unspan = s => String(s).replace(/<span[^>]*translate="no"[^>]*>([\s\S]*?)<\/span>/gi, '$1').replace(/<\/?span[^>]*>/gi, '');
// The H1 and the outline H2s ship exactly as the app sent them, whatever the writer, the editor or DeepL did to them.
const headings = s => {
  const h1 = (r.original && r.original.h1) || r.h1 || '';
  const outline = (r.original && Array.isArray(r.original.h2Outline) && r.original.h2Outline.length) ? r.original.h2Outline : (r.h2Outline || []);
  const h2Lines = (s.match(/^##\s+\S/gm) || []).length;
  headingsMismatch = outline.length > 0 && h2Lines < outline.length;
  let h2i = 0;
  return s.split('\n').map(line => {
    if (h1 && /^#\s+\S/.test(line)) return '# ' + h1;
    if (!headingsMismatch && /^##\s+\S/.test(line)) { const idx = h2i++; if (idx < outline.length && outline[idx]) return '## ' + outline[idx]; }
    return line;
  }).join('\n');
};
let headingsMismatch = false;
const out = Object.assign({}, f);
out.finalPage = headings(cleanBlock(unspan(f.finalPage)));
out.metaDescription = cleanLine(unspan(f.metaDescription));
out.faq = (f.faq || []).map(q => ({ question: cleanLine(unspan(q.question)), answer: cleanLine(unspan(q.answer)) }));
if (f.eeat && typeof f.eeat === 'object') {
  out.eeat = JSON.parse(JSON.stringify(f.eeat));
  ['experience', 'expertise', 'authoritativeness', 'trustworthiness'].forEach(k => { if (out.eeat[k] && out.eeat[k].evidence) out.eeat[k].evidence = cleanLine(unspan(out.eeat[k].evidence)); });
  if (out.eeat.priorityFix) out.eeat.priorityFix = cleanLine(unspan(out.eeat.priorityFix));
}
out.monitoringPrompts = (f.monitoringPrompts || []).map(x => Object.assign({}, x, { prompt: cleanLine(unspan(x.prompt)), promptEn: cleanLine(unspan(x.promptEn)) }));
// Report what was repaired so a problem in a language shows up in the execution, not in production.
const before = JSON.stringify({ p: f.finalPage, m: f.metaDescription, q: f.faq, e: f.eeat });
out.textCleaned = { headingsMismatch, entities: (before.match(/&#?[a-z0-9]{1,8};/gi) || []).length, changed: before !== JSON.stringify({ p: out.finalPage, m: out.metaDescription, q: out.faq, e: out.eeat }) };
return [{ json: out }];
