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
const text = [a.finalPage, a.metaDescription || '-'];
a.faq.forEach(f => { text.push(f.question); text.push(f.answer); });
EEAT_KEYS.forEach(k => text.push((e[k] && e[k].evidence) || '-'));
text.push(e.priorityFix || '-');
// Generated monitoring prompts (h1 and brand) go in the page language too; the input prompts already are.
const gen = (a.monitoringPrompts || []).filter(x => x.source !== 'input');
gen.forEach(x => text.push(x.promptEn || '-'));
return [{ json: { text, target, faqCount: a.faq.length, generatedPromptCount: gen.length } }];
