const LANG = { afrikaans: 'AF', arabic: 'AR', bulgarian: 'BG', chinese: 'ZH-HANS', croatian: 'HR', czech: 'CS', danish: 'DA', dutch: 'NL', estonian: 'ET', finnish: 'FI', french: 'FR', german: 'DE', greek: 'EL', hebrew: 'HE', hindi: 'HI', hungarian: 'HU', indonesian: 'ID', italian: 'IT', japanese: 'JA', korean: 'KO', latvian: 'LV', lithuanian: 'LT', norwegian: 'NB', polish: 'PL', portuguese: 'PT-PT', romanian: 'RO', russian: 'RU', slovak: 'SK', slovenian: 'SL', spanish: 'ES', swedish: 'SV', thai: 'TH', turkish: 'TR', ukrainian: 'UK', vietnamese: 'VI' };
const r = $('Parse Request').first().json;
const a = $('Assemble Meta').first().json;
const key = String(r.targetLanguage || '').toLowerCase().trim();
const target = LANG[key];
if (!target) throw new Error('Unsupported targetLanguage for DeepL: ' + r.targetLanguage);
// Batch order: page, meta description, then question and answer of every FAQ. Unwrap Translation reads the same order.
const text = [a.finalPage, a.metaDescription || '-'];
a.faq.forEach(f => { text.push(f.question); text.push(f.answer); });
return [{ json: { text, target, faqCount: a.faq.length } }];
