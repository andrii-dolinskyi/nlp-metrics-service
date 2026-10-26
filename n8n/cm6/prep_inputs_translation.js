// Runs on the raw webhook item when the inputs are not in English. The app sends the H1, outline, keywords, facts,
// CTA rule and author fields in the source language; this node lists every text for the Input Translator (Claude
// Opus 5.5, GPT 5.6 Sol as fallback) so that the writer, peelers, editors and the FAQ, meta and E-E-A-T prompts all
// work in English. Request EN puts the English values back into the body and keeps the originals in body._original.
const raw = $input.first().json;
const b = raw.body || raw || {};
const s = v => (v === undefined || v === null) ? '' : String(v).trim();
const list = v => Array.isArray(v) ? v : (v === undefined || v === null || v === '' ? [] : String(v).split(','));
const targets = list(b.targetLanguages).map(s).filter(Boolean);
const sourceLanguage = s(b.sourceLanguage) || (targets.length ? 'English' : (s(b.targetLanguage) || 'English'));
const outline = (Array.isArray(b.h2Outline) ? b.h2Outline : (b.h2Outline ? String(b.h2Outline).split('|') : [])).map(x => typeof x === 'string' ? x.trim() : s(x && (x.h2 || x.heading || x.title))).filter(Boolean);
// Normalised copy of the body: arrays as arrays, headings as strings. Request EN writes the English values into it.
const body = JSON.parse(JSON.stringify(b));
body.h2Outline = outline;
body.secondaryKeywords = list(b.secondaryKeywords).map(s).filter(Boolean);
body.aiPrompts = list(b.aiPrompts).map(s).filter(Boolean);
const fields = [];
const add = (path, v, label) => { const t = s(v); if (t) fields.push({ path, text: t, label }); };
add('clientName', b.clientName, 'client name (a brand)');
add('clientDescription', b.clientDescription || b.productDescription, 'what the client does');
add('h1', b.h1, 'page H1');
add('coreKeyword', b.coreKeyword, 'core keyword');
body.secondaryKeywords.forEach((x, i) => add('secondaryKeywords.' + i, x, 'secondary keyword'));
body.h2Outline.forEach((x, i) => add('h2Outline.' + i, x, 'H2 heading'));
body.aiPrompts.forEach((x, i) => add('aiPrompts.' + i, x, 'question people ask AI assistants'));
add('ctaRules', b.ctaRules, 'call to action rule');
add('writingPreferences', b.writingPreferences, 'writing preferences');
add('metaTitle', b.metaTitle, 'meta title');
['author', 'reviewer'].forEach(k => { const p = b[k]; if (p && typeof p === 'object') { add(k + '.jobTitle', p.jobTitle || p.role || p.title, k + ' job title'); add(k + '.description', p.description || p.bio, k + ' bio'); add(k + '.credentials', p.credentials, k + ' credentials'); } });
const facts = (b.facts && typeof b.facts === 'object' && !Array.isArray(b.facts)) ? b.facts : {};
Object.keys(facts).forEach(k => { const v = facts[k]; if (Array.isArray(v)) v.forEach((x, i) => { if (typeof x === 'string') add('facts.' + k + '.' + i, x, 'client fact: ' + k); }); else if (typeof v === 'string') add('facts.' + k, v, 'client fact: ' + k); });
const cn = s(b.clientName);
const system = [
'You are a professional translator who knows all nuances of ' + sourceLanguage + ' and English. Your only task is to translate the numbered texts below from ' + sourceLanguage + ' into English. They are the inputs for an English web page about one client: the page H1, its H2 outline, SEO keywords, facts about the client, a call-to-action rule, author details and questions people ask AI assistants.',
'',
'Rules:',
'- Translate meaning, not words: natural English a native marketer would write. Keep each text as short as the original; a heading stays a heading, a keyword stays a keyword phrase (lower case unless it is a name).',
'- Keywords are search phrases: give the phrase an English searcher would type, not a literal rendering.',
'- Facts and figures must stay exact: numbers, dates, prices, units, percentages, names of products, certifications, laws and places. Do not add, drop or round anything.',
(cn ? '- The client name is "' + cn + '". A brand name is never translated: if it is written in the Latin alphabet, keep it exactly as it is in every text where it appears. If it is in another script, use its established Latin spelling (as on the client\'s own website) and use that one spelling everywhere, including text 1 when it is the client name.' : ''),
'- Keep markdown, URLs, placeholders and quotation marks as they are. Never translate a URL.',
'- Never add explanations, notes or alternatives. One translation per text.',
'',
'Output format: for every text, a line with its number in double square brackets, then the English translation on the following line(s), in the same order. Finish with a line [[END]]. Output nothing else. Example:',
'[[1]]',
'English translation of text 1',
'[[2]]',
'English translation of text 2',
'[[END]]'
].filter(x => x !== '').join('\n');
const user = fields.length ? fields.map((f, i) => '[[' + (i + 1) + ']] (' + f.label + ')\n' + f.text).join('\n\n') : '';
return [{ json: { paths: fields.map(f => f.path), texts: fields.map(f => f.text), count: fields.length, sourceLanguage, body, system, user } }];
