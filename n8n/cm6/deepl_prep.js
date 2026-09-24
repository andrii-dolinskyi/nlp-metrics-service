// Everything the app renders goes to DeepL in one batch: page, meta description, FAQ, E-E-A-T evidence.
// Unwrap Translation reads the same order. The target code comes from the input translation step; the map
// below only covers a request that arrived in English with a non-English target.
const LANG = { afrikaans: 'AF', arabic: 'AR', bulgarian: 'BG', chinese: 'ZH-HANS', croatian: 'HR', czech: 'CS', danish: 'DA', dutch: 'NL', estonian: 'ET', finnish: 'FI', french: 'FR', german: 'DE', greek: 'EL', hebrew: 'HE', hindi: 'HI', hungarian: 'HU', indonesian: 'ID', italian: 'IT', japanese: 'JA', korean: 'KO', latvian: 'LV', lithuanian: 'LT', norwegian: 'NB', polish: 'PL', portuguese: 'PT-PT', romanian: 'RO', russian: 'RU', slovak: 'SK', slovenian: 'SL', spanish: 'ES', swedish: 'SV', thai: 'TH', turkish: 'TR', ukrainian: 'UK', vietnamese: 'VI' };
const r = $('Parse Request').first().json;
const a = $('Assemble Assets').first().json;
const target = r.deeplTarget || LANG[String(r.targetLanguage || '').toLowerCase().trim()];
if (!target) throw new Error('Unsupported targetLanguage for DeepL: ' + r.targetLanguage);
const EEAT_KEYS = ['experience', 'expertise', 'authoritativeness', 'trustworthiness'];
const e = a.eeat || {};
// The app's H1 and H2 wording goes back over the translated page in Unwrap Translation. Because the writer may add
// H2 sections of its own, each H2 line of the English page is matched here, by text, to the outline it came from,
// and the resulting position map travels with the batch: the k-th H2 line after translation is the same heading.
// (DeepL keeps markdown heading lines in place; a translate="no" span on a heading made DeepL copy the client-name
// pattern into it, so headings are not wrapped.)
const norm = t => String(t || '').toLowerCase().replace(/&#?[a-z0-9]{1,8};/gi, ' ').replace(/[*_`]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const outlineIndex = {};
(r.h2Outline || []).forEach((h, i) => { if (h) outlineIndex[norm(h)] = i; });
const headingMap = [];
String(a.finalPage || '').split('\n').forEach(line => {
  const m = line.match(/^##\s+(.+?)\s*$/);
  if (m) headingMap.push(outlineIndex[norm(m[1])] === undefined ? null : outlineIndex[norm(m[1])]);
});
let text = [a.finalPage, a.metaDescription || '-'];
a.faq.forEach(f => { text.push(f.question); text.push(f.answer); });
EEAT_KEYS.forEach(k => text.push((e[k] && e[k].evidence) || '-'));
text.push(e.priorityFix || '-');
// Generated monitoring prompts (h1 and brand) go in the page language too; the input prompts already are.
const gen = (a.monitoringPrompts || []).filter(x => x.source !== 'input');
gen.forEach(x => text.push(x.promptEn || '-'));
// The client name must come back exactly as the app sent it. The writer used the English rendering, so every
// mention (full name, or the name without a generic word such as Law Firm, LLC, GmbH, Group) is wrapped in a
// translate="no" span holding the original; DeepL runs in HTML mode and leaves it alone, Unwrap strips the span.
const orig = (r.original && r.original.clientName) ? String(r.original.clientName).trim() : '';
const en = String(r.clientName || '').trim();
if (orig && en && orig !== en) {
  const GENERIC = /^(the|law firm|law office|law offices|law group|legal|law|attorneys|attorneys at law|llc|llp|ltd|inc|plc|gmbh|ag|sa|srl|s\.r\.l\.|s\.p\.a\.|spa|group|company|co|corporation|corp|agency|studio|clinic|firm|consulting|consultants|solutions|services|systems|technologies|international)$/i;
  const words = en.replace(/[.,]+$/, '').split(/\s+/);
  const forms = new Set([en]);
  const stripTail = w => { let t = w.slice(); let changed = true; while (changed && t.length > 1) { changed = false; if (t.length > 2 && GENERIC.test(t.slice(-2).join(' '))) { t = t.slice(0, -2); changed = true; } else if (GENERIC.test(t[t.length - 1])) { t = t.slice(0, -1); changed = true; } if (changed) forms.add(t.join(' ')); } return t; };
  const stripHead = w => { let t = w.slice(); let changed = true; while (changed && t.length > 1) { changed = false; if (t.length > 2 && GENERIC.test(t.slice(0, 2).join(' '))) { t = t.slice(2); changed = true; } else if (GENERIC.test(t[0])) { t = t.slice(1); changed = true; } if (changed) forms.add(t.join(' ')); } return t; };
  stripTail(stripHead(words)); stripHead(stripTail(words));
  const esc = t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const list = Array.from(forms).filter(f => f.length > 2).sort((x, y) => y.length - x.length);
  const token = '<span translate="no">' + orig + '</span>';
  text = text.map(t => { let out = String(t); list.forEach(f => { out = out.replace(new RegExp('(^|[^\\w>])' + esc(f) + '(?![\\w<])', 'g'), (m, pre) => pre + token); }); return out; });
}
return [{ json: { text, target, faqCount: a.faq.length, generatedPromptCount: gen.length, clientNameProtected: !!(orig && en && orig !== en), headingMap } }];
