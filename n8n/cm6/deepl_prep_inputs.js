// Runs on the raw webhook item when targetLanguage is not English. The app sends every text value in the
// target language; this node lists them for DeepL so that the writer, peelers, editors and FAQ, meta and
// E-E-A-T prompts all work in English. Request EN puts the English values back and keeps the originals.
const raw = $input.first().json;
const b = raw.body || raw || {};
const LANGUAGE_MAP = {
  'acehnese': 'ACE', 'afrikaans': 'AF', 'albanian': 'SQ', 'arabic': 'AR', 'aragonese': 'AN', 'armenian': 'HY', 'assamese': 'AS', 'aymara': 'AY', 'azerbaijani': 'AZ', 'bashkir': 'BA', 'basque': 'EU', 'belarusian': 'BE', 'bengali': 'BN', 'bhojpuri': 'BHO', 'bosnian': 'BS', 'breton': 'BR', 'bulgarian': 'BG', 'burmese': 'MY', 'cantonese': 'YUE', 'catalan': 'CA', 'cebuano': 'CEB',
  'chinese (simplified)': 'ZH-HANS', 'chinese simplified': 'ZH-HANS', 'simplified chinese': 'ZH-HANS', 'chinese (traditional)': 'ZH-HANT', 'chinese traditional': 'ZH-HANT', 'traditional chinese': 'ZH-HANT', 'chinese': 'ZH',
  'croatian': 'HR', 'czech': 'CS', 'danish': 'DA', 'dari': 'PRS', 'dutch': 'NL', 'english': 'EN', 'esperanto': 'EO', 'estonian': 'ET', 'finnish': 'FI', 'french': 'FR', 'french (canadian)': 'FR-CA', 'canadian french': 'FR-CA', 'galician': 'GL', 'georgian': 'KA', 'german': 'DE', 'german (swiss)': 'DE-CH', 'swiss german': 'DE-CH', 'greek': 'EL', 'guarani': 'GN', 'gujarati': 'GU', 'haitian creole': 'HT', 'hausa': 'HA', 'hebrew': 'HE', 'hindi': 'HI', 'hungarian': 'HU', 'icelandic': 'IS', 'igbo': 'IG', 'indonesian': 'ID', 'irish': 'GA', 'italian': 'IT', 'japanese': 'JA', 'javanese': 'JV', 'kapampangan': 'PAM', 'kazakh': 'KK', 'konkani': 'GOM', 'korean': 'KO', 'kurdish (kurmanji)': 'KMR', 'kurmanji': 'KMR', 'kurdish (sorani)': 'CKB', 'sorani': 'CKB', 'kyrgyz': 'KY', 'latin': 'LA', 'latvian': 'LV', 'lingala': 'LN', 'lithuanian': 'LT', 'lombard': 'LMO', 'luxembourgish': 'LB', 'macedonian': 'MK', 'maithili': 'MAI', 'malagasy': 'MG', 'malay': 'MS', 'malayalam': 'ML', 'maltese': 'MT', 'maori': 'MI', 'marathi': 'MR', 'mongolian': 'MN', 'nepali': 'NE', 'norwegian bokmål': 'NB', 'norwegian': 'NB', 'occitan': 'OC', 'oromo': 'OM', 'pangasinan': 'PAG', 'pashto': 'PS', 'persian': 'FA', 'polish': 'PL',
  'portuguese (brazilian)': 'PT-BR', 'brazilian portuguese': 'PT-BR', 'portuguese (european)': 'PT-PT', 'european portuguese': 'PT-PT', 'portuguese': 'PT',
  'punjabi': 'PA', 'quechua': 'QU', 'romanian': 'RO', 'russian': 'RU', 'sanskrit': 'SA', 'serbian': 'SR', 'sesotho': 'ST', 'sicilian': 'SCN', 'slovak': 'SK', 'slovenian': 'SL', 'spanish': 'ES', 'spanish (latin american)': 'ES-419', 'latin american spanish': 'ES-419', 'sundanese': 'SU', 'swahili': 'SW', 'swedish': 'SV', 'tagalog': 'TL', 'tajik': 'TG', 'tamil': 'TA', 'tatar': 'TT', 'telugu': 'TE', 'thai': 'TH', 'tsonga': 'TS', 'tswana': 'TN', 'turkish': 'TR', 'turkmen': 'TK', 'ukrainian': 'UK', 'urdu': 'UR', 'uzbek': 'UZ', 'vietnamese': 'VI', 'welsh': 'CY', 'wolof': 'WO', 'xhosa': 'XH', 'yiddish': 'YI', 'zulu': 'ZU'
};
const key = String(b.targetLanguage || 'English').toLowerCase().trim();
const targetLang = LANGUAGE_MAP[key];
if (!targetLang) throw new Error('Unsupported targetLanguage: "' + b.targetLanguage + '". Must be a language DeepL supports, spelled as its English name (e.g. "French", "German", "Japanese").');
const sourceLang = targetLang.split('-')[0]; // DeepL takes the base code as source_lang
const s = v => (v === undefined || v === null) ? '' : String(v).trim();
const list = v => Array.isArray(v) ? v : (v === undefined || v === null || v === '' ? [] : String(v).split(','));
const outline = (Array.isArray(b.h2Outline) ? b.h2Outline : (b.h2Outline ? String(b.h2Outline).split('|') : [])).map(x => typeof x === 'string' ? x.trim() : s(x && (x.h2 || x.heading || x.title))).filter(Boolean);
// Normalised copy of the body: arrays as arrays, headings as strings. Request EN writes the English values into it.
const body = JSON.parse(JSON.stringify(b));
body.h2Outline = outline;
body.secondaryKeywords = list(b.secondaryKeywords).map(s).filter(Boolean);
body.aiPrompts = list(b.aiPrompts).map(s).filter(Boolean);
const fields = [];
const add = (path, v) => { const t = s(v); if (t) fields.push({ path, text: t }); };
add('clientDescription', b.clientDescription || b.productDescription);
add('h1', b.h1);
add('coreKeyword', b.coreKeyword);
body.secondaryKeywords.forEach((x, i) => add('secondaryKeywords.' + i, x));
body.h2Outline.forEach((x, i) => add('h2Outline.' + i, x));
body.aiPrompts.forEach((x, i) => add('aiPrompts.' + i, x));
add('ctaRules', b.ctaRules);
add('writingPreferences', b.writingPreferences);
['author', 'reviewer'].forEach(k => { const p = b[k]; if (p && typeof p === 'object') { add(k + '.jobTitle', p.jobTitle || p.role || p.title); add(k + '.description', p.description || p.bio); add(k + '.credentials', p.credentials); } });
const facts = (b.facts && typeof b.facts === 'object' && !Array.isArray(b.facts)) ? b.facts : {};
Object.keys(facts).forEach(k => { const v = facts[k]; if (Array.isArray(v)) v.forEach((x, i) => { if (typeof x === 'string') add('facts.' + k + '.' + i, x); }); else if (typeof v === 'string') add('facts.' + k, v); });
if (!fields.length) return [{ json: { paths: [], texts: [], sourceLang, targetLang, body } }];
// DeepL accepts up to 50 texts per call: one item per batch, Request EN joins them again.
const out = [];
for (let i = 0; i < fields.length; i += 50) { const chunk = fields.slice(i, i + 50); out.push({ json: { paths: chunk.map(f => f.path), texts: chunk.map(f => f.text), sourceLang, targetLang, body: i === 0 ? body : undefined } }); }
return out;
