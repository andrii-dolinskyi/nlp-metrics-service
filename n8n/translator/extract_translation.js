// Parses Page Translator's reply. Every block is read tolerantly: a missing or malformed block keeps the English
// value and is reported in translationWarnings, so a page is never lost over one bad block. The app's wording for
// locked headings is put back by position (the k-th H2 of the translation is the k-th H2 of the English page).
const x = $('Context').first().json;
const p = $('Prep Translation').first().json;
const j = $input.first().json || {};
const raw = String(j.output !== undefined ? j.output : (j.text !== undefined ? j.text : '')).replace(/\r\n?/g, '\n');
const b = x.bundle || {};
const en = x.en || {};
const loc = x.localized || {};
const s = v => (v === undefined || v === null) ? '' : String(v).trim();
const list = v => Array.isArray(v) ? v.map(s).filter(Boolean) : [];
const warnings = [];
const block = name => { const m = raw.match(new RegExp('//' + name + '_START//\\s*\\n?([\\s\\S]*?)\\n?\\s*//' + name + '_END//')); return m ? m[1].replace(/^\s*```[a-z]*\s*\n?/, '').replace(/\n?\s*```\s*$/, '').trim() : null; };
const L = x.language;
// Page
let page = block('PAGE');
// Length is compared in characters, not words: Japanese, Chinese and Thai carry no spaces and run shorter than English.
if (!page || page.length < Math.max(200, String(b.finalPage || '').length * 0.2) || !/^#\s+\S/m.test(page)) { warnings.push('page block missing or far too short, English page kept'); page = s(b.finalPage); }
else {
  const enLines = String(b.finalPage || '').split('\n');
  const enH2 = enLines.filter(l => /^##\s+\S/.test(l)).map(l => l.replace(/^##\s+/, '').trim());
  const trLines = page.split('\n');
  const trH2Count = trLines.filter(l => /^##\s+\S/.test(l)).length;
  if (trH2Count !== enH2.length) warnings.push('H2 count differs: English ' + enH2.length + ', translation ' + trH2Count);
  const outline = list(en.h2Outline);
  const locked = list(loc.h2Outline).length === outline.length ? list(loc.h2Outline) : [];
  const norm = t => String(t || '').toLowerCase().replace(/[*_`]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  // Which outline heading each English H2 line is (null for a heading the writer added or the closing H2).
  const headingMap = enH2.map(h => { const i = outline.findIndex(o => norm(o) === norm(h)); return i === -1 ? null : i; });
  let k = 0;
  page = trLines.map(line => {
    if (/^#\s+\S/.test(line)) return s(loc.h1) ? '# ' + s(loc.h1) : line;
    if (/^##\s+\S/.test(line)) { const idx = headingMap[k++]; if (locked.length && trH2Count === enH2.length && typeof idx === 'number' && locked[idx]) return '## ' + locked[idx]; }
    return line;
  }).join('\n');
  // Links: every URL of the English page must still be there, unchanged.
  const urls = t => (String(t).match(/\]\((https?:[^\s)]+)\)/g) || []).map(u => u.slice(2, -1));
  const enUrls = urls(b.finalPage); const trUrls = urls(page);
  const lost = enUrls.filter(u => trUrls.indexOf(u) === -1);
  if (lost.length) warnings.push('links missing in translation: ' + lost.slice(0, 5).join(', '));
}
// Meta
let meta = s(block('META')).split('\n')[0].trim();
if (!meta) { warnings.push('meta block missing, English meta kept'); meta = s(b.metaDescription); }
// FAQ
const enFaq = Array.isArray(b.faq) ? b.faq.filter(q => q && q.question && q.answer) : [];
let faq = enFaq;
const faqText = block('FAQ');
if (enFaq.length) {
  const items = [];
  if (faqText) {
    let cur = null;
    faqText.split('\n').forEach(line => {
      const q = line.match(/^\s*(?:\*\*)?Q\s*[:：]\s*(?:\*\*)?\s*(.+)$/i); const a = line.match(/^\s*(?:\*\*)?A\s*[:：]\s*(?:\*\*)?\s*(.+)$/i);
      if (q) { cur = { question: q[1].trim(), answer: '' }; items.push(cur); }
      else if (a && cur) cur.answer = (cur.answer ? cur.answer + ' ' : '') + a[1].trim();
      else if (cur && line.trim()) cur.answer = (cur.answer ? cur.answer + ' ' : '') + line.trim();
    });
  }
  if (items.length === enFaq.length && items.every(i => i.question && i.answer)) faq = items;
  else { warnings.push('FAQ block has ' + items.length + ' items for ' + enFaq.length + ' questions, English FAQ kept'); }
}
// E-E-A-T
let eeat = b.eeat ? JSON.parse(JSON.stringify(b.eeat)) : null;
const eeatText = block('EEAT');
if (eeat) {
  const got = {};
  (eeatText || '').split('\n').forEach(line => { const m = line.match(/^\s*(experience|expertise|authoritativeness|trustworthiness|priorityFix)\s*[:：]\s*(.+)$/i); if (m) got[m[1].charAt(0).toLowerCase() + m[1].slice(1).replace(/fix$/i, 'Fix')] = m[2].trim(); });
  ['experience', 'expertise', 'authoritativeness', 'trustworthiness'].forEach(k => { if (eeat[k] && eeat[k].evidence) { if (got[k]) eeat[k].evidence = got[k]; else warnings.push('E-E-A-T ' + k + ' not translated'); } });
  if (eeat.priorityFix) { if (got.priorityFix) eeat.priorityFix = got.priorityFix; else warnings.push('E-E-A-T priorityFix not translated'); }
}
// Prompts
const enPrompts = Array.isArray(b.monitoringPrompts) ? b.monitoringPrompts : [];
const promptText = block('PROMPTS');
const got = {};
(promptText || '').split('\n').forEach(line => { const m = line.match(/^\s*(\d+)[.)]\s+(.+)$/); if (m) got[m[1]] = m[2].replace(/\s*\[[^\]]*\]\s*$/, '').trim(); });
const fixedPrompts = list(loc.aiPrompts);
const monitoringPrompts = enPrompts.map((pr, i) => {
  const fixed = pr.source === 'input' && fixedPrompts[i] !== undefined ? fixedPrompts[i] : '';
  const tr = fixed || got[String(i + 1)] || '';
  if (!tr) warnings.push('prompt ' + (i + 1) + ' not translated');
  return Object.assign({}, pr, { prompt: tr || pr.promptEn || pr.prompt, promptEn: pr.promptEn || pr.prompt });
});
// Keywords and slug the model produced, used where the app supplied none.
const kw = {};
(block('KEYWORDS') || '').split('\n').forEach(line => { const m = line.match(/^\s*(coreKeyword|secondaryKeywords|h1|slug)\s*[:：]\s*(.+)$/i); if (m) kw[m[1]] = m[2].trim(); });
const h1Line = (page.split('\n').find(l => /^#\s+\S/.test(l)) || '').replace(/^#\s+/, '').trim();
const slugify = t => String(t || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
const localizedOut = {
  h1: s(loc.h1) || h1Line || s(en.h1),
  h2Outline: list(loc.h2Outline).length === list(en.h2Outline).length ? list(loc.h2Outline) : (() => {
    // Headings the model produced for the outline positions, read back by position from the page.
    const enH2 = String(b.finalPage || '').split('\n').filter(l => /^##\s+\S/.test(l)).map(l => l.replace(/^##\s+/, '').trim());
    const trH2 = page.split('\n').filter(l => /^##\s+\S/.test(l)).map(l => l.replace(/^##\s+/, '').trim());
    const norm = t => String(t || '').toLowerCase().replace(/[*_`]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
    if (trH2.length !== enH2.length) return list(en.h2Outline);
    return list(en.h2Outline).map(o => { const i = enH2.findIndex(h => norm(h) === norm(o)); return i === -1 ? o : trH2[i]; });
  })(),
  coreKeyword: s(loc.coreKeyword) || s(kw.coreKeyword) || s(en.coreKeyword),
  secondaryKeywords: list(loc.secondaryKeywords).length ? list(loc.secondaryKeywords) : (kw.secondaryKeywords ? kw.secondaryKeywords.split('|').map(s).filter(Boolean) : list(en.secondaryKeywords)),
  slugPath: s(loc.slugPath) || (kw.slug && slugify(kw.slug) ? '/' + slugify(kw.slug) + '/' : ''),
  clientName: s(loc.clientName) || s(x.clientName),
  author: loc.author || null, reviewer: loc.reviewer || null, ctaRules: s(loc.ctaRules), ctaUrl: s(loc.ctaUrl), aiPrompts: fixedPrompts, metaTitle: s(loc.metaTitle)
};
if (!raw.trim()) throw new Error('Page Translator returned an empty reply');
if (!block('PAGE')) throw new Error('Page Translator reply has no //PAGE_START// block. Reply started with: ' + raw.slice(0, 200));
return [{ json: {
  finalPage: page, metaDescription: meta, faq, eeat, monitoringPrompts, faqCount: b.faqCount, slug: (localizedOut.slugPath || s(b.slugPath)).split('/').filter(Boolean).pop() || s(b.slug), slugPath: localizedOut.slugPath || s(b.slugPath),
  translated: true, language: L, localized: localizedOut, translationWarnings: warnings, h2Locked: list(loc.h2Outline).length === list(en.h2Outline).length
} }];
