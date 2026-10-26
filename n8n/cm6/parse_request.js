const b = $input.first().json.body || $input.first().json || {};
const s = v => (v === undefined || v === null) ? '' : String(v).trim();
const arr = v => Array.isArray(v) ? v.map(x => typeof x === 'string' ? x.trim() : x).filter(x => x !== '' && x !== null && x !== undefined) : (v ? String(v).split(',').map(x => x.trim()).filter(Boolean) : []);
const obj = v => (v && typeof v === 'object' && !Array.isArray(v)) ? v : {};
const person = (v, kind) => {
  const o = obj(v);
  const same = arr(o.sameAs).concat([o.linkedin, o.linkedinUrl, o.linkedIn, o.twitter, o.x].map(s).filter(Boolean));
  return { name: s(o.name || o.fullName), jobTitle: s(o.jobTitle || o.role || o.title || o.credentials), url: s(o.url || o.profileUrl || o.pageUrl), sameAs: same.filter((x, i) => same.indexOf(x) === i), image: s(o.image || o.photo || o.imageUrl), description: s(o.description || o.bio), credentials: s(o.credentials), kind };
};
const outlineOf = v => (Array.isArray(v) ? v : (v ? String(v).split('|') : [])).map(x => typeof x === 'string' ? x.trim() : s(x && (x.h2 || x.heading || x.title))).filter(Boolean);
const h2Outline = outlineOf(b.h2Outline);
const slugify = t => String(t || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
// Languages: the app sends English language names (regional variants in brackets, e.g. "French (Canada)"). Every
// name is checked here so a typo fails the request instead of producing a page in the wrong language.
const LANGUAGES = [
  'Acehnese',
  'Afrikaans',
  'Albanian',
  'Amharic',
  'Arabic',
  'Arabic (Egypt)',
  'Arabic (Morocco)',
  'Arabic (Saudi Arabia)',
  'Arabic (UAE)',
  'Aragonese',
  'Armenian',
  'Assamese',
  'Aymara',
  'Azerbaijani',
  'Bambara',
  'Bashkir',
  'Basque',
  'Belarusian',
  'Bengali',
  'Bhojpuri',
  'Bosnian',
  'Breton',
  'Bulgarian',
  'Burmese',
  'Cantonese',
  'Catalan',
  'Cebuano',
  'Chichewa',
  'Chinese',
  'Chinese (Hong Kong)',
  'Chinese (Simplified)',
  'Chinese (Taiwan)',
  'Chinese (Traditional)',
  'Corsican',
  'Croatian',
  'Czech',
  'Danish',
  'Dari',
  'Dhivehi',
  'Dogri',
  'Dutch',
  'Dutch (Belgium)',
  'English',
  'English (Australia)',
  'English (Canada)',
  'English (India)',
  'English (Ireland)',
  'English (New Zealand)',
  'English (Singapore)',
  'English (South Africa)',
  'English (UK)',
  'English (US)',
  'Esperanto',
  'Estonian',
  'Ewe',
  'Filipino',
  'Finnish',
  'French',
  'French (Belgium)',
  'French (Canada)',
  'French (France)',
  'French (Switzerland)',
  'Frisian',
  'Galician',
  'Georgian',
  'German',
  'German (Austria)',
  'German (Germany)',
  'German (Switzerland)',
  'Greek',
  'Guarani',
  'Gujarati',
  'Haitian Creole',
  'Hausa',
  'Hawaiian',
  'Hebrew',
  'Hindi',
  'Hmong',
  'Hungarian',
  'Icelandic',
  'Igbo',
  'Ilocano',
  'Indonesian',
  'Irish',
  'Italian',
  'Italian (Switzerland)',
  'Japanese',
  'Javanese',
  'Kapampangan',
  'Kazakh',
  'Khmer',
  'Kinyarwanda',
  'Konkani',
  'Korean',
  'Krio',
  'Kurdish (Kurmanji)',
  'Kurdish (Sorani)',
  'Kyrgyz',
  'Lao',
  'Latin',
  'Latvian',
  'Lingala',
  'Lithuanian',
  'Lombard',
  'Luganda',
  'Luxembourgish',
  'Macedonian',
  'Maithili',
  'Malagasy',
  'Malay',
  'Malayalam',
  'Maltese',
  'Maori',
  'Marathi',
  'Meiteilon',
  'Mizo',
  'Mongolian',
  'Nepali',
  'Norwegian',
  'Norwegian (Bokmål)',
  'Norwegian (Nynorsk)',
  'Occitan',
  'Odia',
  'Oromo',
  'Pangasinan',
  'Pashto',
  'Persian',
  'Polish',
  'Portuguese',
  'Portuguese (Brazil)',
  'Portuguese (Portugal)',
  'Punjabi',
  'Quechua',
  'Romanian',
  'Russian',
  'Samoan',
  'Sanskrit',
  'Scots Gaelic',
  'Sepedi',
  'Serbian',
  'Serbian (Cyrillic)',
  'Serbian (Latin)',
  'Sesotho',
  'Shona',
  'Sicilian',
  'Sindhi',
  'Sinhala',
  'Slovak',
  'Slovenian',
  'Somali',
  'Spanish',
  'Spanish (Argentina)',
  'Spanish (Chile)',
  'Spanish (Colombia)',
  'Spanish (Latin America)',
  'Spanish (Mexico)',
  'Spanish (Peru)',
  'Spanish (Spain)',
  'Spanish (US)',
  'Sundanese',
  'Swahili',
  'Swedish',
  'Tagalog',
  'Tajik',
  'Tamil',
  'Tatar',
  'Telugu',
  'Thai',
  'Tigrinya',
  'Tsonga',
  'Tswana',
  'Turkish',
  'Turkmen',
  'Twi',
  'Ukrainian',
  'Urdu',
  'Uyghur',
  'Uzbek',
  'Vietnamese',
  'Welsh',
  'Wolof',
  'Xhosa',
  'Yiddish',
  'Yoruba',
  'Zulu'
];
const LANGUAGE_ALIASES = {
  'chinese simplified': 'Chinese (Simplified)',
  'simplified chinese': 'Chinese (Simplified)',
  'mandarin': 'Chinese (Simplified)',
  'chinese traditional': 'Chinese (Traditional)',
  'traditional chinese': 'Chinese (Traditional)',
  'canadian french': 'French (Canada)',
  'french (canadian)': 'French (Canada)',
  'swiss german': 'German (Switzerland)',
  'german (swiss)': 'German (Switzerland)',
  'brazilian portuguese': 'Portuguese (Brazil)',
  'portuguese (brazilian)': 'Portuguese (Brazil)',
  'european portuguese': 'Portuguese (Portugal)',
  'portuguese (european)': 'Portuguese (Portugal)',
  'latin american spanish': 'Spanish (Latin America)',
  'spanish (latin american)': 'Spanish (Latin America)',
  'mexican spanish': 'Spanish (Mexico)',
  'castilian': 'Spanish (Spain)',
  'castilian spanish': 'Spanish (Spain)',
  'american english': 'English (US)',
  'british english': 'English (UK)',
  'english (united states)': 'English (US)',
  'english (united kingdom)': 'English (UK)',
  'kurmanji': 'Kurdish (Kurmanji)',
  'sorani': 'Kurdish (Sorani)',
  'norwegian bokmål': 'Norwegian (Bokmål)',
  'bokmål': 'Norwegian (Bokmål)',
  'nynorsk': 'Norwegian (Nynorsk)',
  'tagalog': 'Filipino',
  'farsi': 'Persian',
  'flemish': 'Dutch (Belgium)',
  'ukranian': 'Ukrainian',
  'deutsch': 'German',
  'français': 'French',
  'español': 'Spanish',
  'italiano': 'Italian',
  'nederlands': 'Dutch',
  'português': 'Portuguese',
  'polski': 'Polish',
  'українська': 'Ukrainian',
  '日本語': 'Japanese',
  '中文': 'Chinese (Simplified)'
};
const canonLang = v => {
  const t = s(v); if (!t) return '';
  const k = t.toLowerCase().replace(/\s+/g, ' ');
  if (LANGUAGE_ALIASES[k]) return LANGUAGE_ALIASES[k];
  const hit = LANGUAGES.find(l => l.toLowerCase() === k);
  if (hit) return hit;
  throw new Error('Unknown language "' + t + '". Use the English name of the language, e.g. "German", "French (Canada)", "Chinese (Simplified)".');
};
const isEnglish = l => /^english/i.test(String(l || ''));
// Language contract. sourceLanguage: the language of the inputs (H1, outline, facts, CTA). targetLanguages: every
// language the app wants the page in. The page is always written in English; a non-English source is translated
// into English first (Request EN), and each non-English target is a translation of the English page by the CM6
// Translator. The primary target (English when it is among the targets, else the first target) is produced by this
// execution; the other targets are started after the primary page has been sent (Extra Languages).
const targetList = arr(b.targetLanguages).map(canonLang).filter((x, i, a) => x && a.indexOf(x) === i);
const singleTarget = canonLang(b.targetLanguage);
const sourceLanguage = canonLang(b.sourceLanguage || b._sourceLanguage) || (targetList.length ? 'English' : (singleTarget || 'English'));
const targetLanguages = targetList.length ? targetList : [singleTarget || sourceLanguage];
const primary = targetLanguages.find(isEnglish) || targetLanguages[0];
const extraTargets = targetLanguages.filter(l => l !== primary);
const out = {
  taskId: s(b.taskId), brandId: s(b.brandId), userId: s(b.userId),
  callbackUrl: s(b.callback_url || b.callbackUrl).replace(/\/$/, ''),
  pageType: s(b.pageType).toLowerCase(),
  // The app's dropdown: informational | commercial | transactional | navigational. Drives the writer brief and the meta description.
  searchIntent: s(b.searchIntent || b.search_intent || b.intent).toLowerCase().replace(/\s+intent$/, ''),
  sourceLanguage, targetLanguages, targetLanguage: primary, extraTargets,
  clientName: s(b.clientName), clientDescription: s(b.clientDescription || b.productDescription),
  h1: s(b.h1), slugPath: s(b.slugPath || b.slug), siteRootUrl: s(b.siteRootUrl).replace(/\/$/, ''),
  coreKeyword: s(b.coreKeyword), secondaryKeywords: arr(b.secondaryKeywords),
  h2Outline, aiPrompts: arr(b.aiPrompts),
  ctaRules: s(b.ctaRules), ctaUrl: s(b.ctaUrl), writingPreferences: s(b.writingPreferences),
  whitelistDomains: arr(b.whitelistDomains), blacklistDomains: arr(b.blacklistDomains),
  metaTitle: s(b.metaTitle), facts: obj(b.facts),
  author: person(b.author, 'author'), reviewer: person(b.reviewer, 'reviewer'),
  // Filled by Request EN when the inputs came in another language: the app's own wording, in the source language.
  inputsOriginal: obj(b._original),
  original: {}
};
// Localized values the app already has per language (the content map carries the core keyword per language; H1,
// outline, slug, author fields and prompts are optional). Keyed by language name; the source-language wording of
// the inputs is one of them. The Translator uses them verbatim and lets Claude produce whatever is missing.
const localized = {};
const addLocalized = (lang, v) => {
  const L = canonLang(lang); if (!L) return;
  const o = typeof v === 'string' ? { coreKeyword: v } : obj(v);
  const cur = localized[L] || {};
  const pick = (k, f) => { const x = f(o[k]); if (Array.isArray(x) ? x.length : (x && typeof x === 'object' ? Object.keys(x).length : x)) cur[k] = x; };
  pick('h1', s); pick('coreKeyword', s); pick('secondaryKeywords', arr); pick('h2Outline', outlineOf); pick('slugPath', s); pick('clientName', s);
  pick('ctaRules', s); pick('ctaUrl', s); pick('aiPrompts', arr); pick('metaTitle', s);
  if (o.author && typeof o.author === 'object') cur.author = o.author;
  if (o.reviewer && typeof o.reviewer === 'object') cur.reviewer = o.reviewer;
  localized[L] = cur;
};
Object.keys(obj(b.localizedKeywords)).forEach(k => addLocalized(k, b.localizedKeywords[k]));
Object.keys(obj(b.localized)).forEach(k => addLocalized(k, b.localized[k]));
if (!isEnglish(sourceLanguage) && Object.keys(out.inputsOriginal).length) addLocalized(sourceLanguage, out.inputsOriginal);
out.localized = localized;
// The page this execution ships is in the primary language. Its own wording (H1, H2s, keyword, names) comes from the
// localized values for that language: the app's inputs when the primary is the source language.
out.original = (primary === sourceLanguage && !isEnglish(primary)) ? Object.assign({}, out.inputsOriginal, localized[primary] || {}) : {};
out.h1Local = out.original.h1 || out.h1;
out.coreKeywordLocal = out.original.coreKeyword || out.coreKeyword;
out.clientNameLocal = out.original.clientName || out.clientName;
out.authorLocal = person(Object.assign({}, obj(b.author), obj(out.original.author)), 'author');
out.reviewerLocal = person(Object.assign({}, obj(b.reviewer), obj(out.original.reviewer)), 'reviewer');
if (!out.reviewerLocal.name) out.reviewerLocal = null;
const missing = ['pageType', 'clientName', 'callbackUrl', 'h1', 'searchIntent'].filter(k => !out[k]);
if (!out.h2Outline.length) missing.push('h2Outline');
if (!out.author.name) missing.push('author.name');
if (!out.reviewer.name) out.reviewer = null;
if (missing.length) throw new Error('Missing required fields: ' + missing.join(', '));
const INTENTS = ['informational', 'commercial', 'transactional', 'navigational'];
if (INTENTS.indexOf(out.searchIntent) === -1) throw new Error('searchIntent must be one of ' + INTENTS.join(', ') + ', got: ' + out.searchIntent);
if (!out.slugPath) out.slugPath = '/' + slugify(out.original.h1 || out.h1) + '/';
if (out.slugPath.charAt(0) !== '/') out.slugPath = '/' + out.slugPath;
if (out.original.slugPath) { out.slugPath = out.original.slugPath; if (out.slugPath.charAt(0) !== '/') out.slugPath = '/' + out.slugPath; }
out.isLang = !isEnglish(primary);
return [{ json: out }];
