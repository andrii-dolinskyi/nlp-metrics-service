// Builds the transcreation prompt for Page Translator: the English assets go in one message, the reply comes back in
// sentinel blocks that Extract Translation parses. Values the app already has in the target language (H1, H2s, core
// keyword, secondary keywords, client name, prompts) are locked; everything missing is produced by the model.
const x = $('Context').first().json;
const L = x.language;
const loc = x.localized || {};
const en = x.en || {};
const b = x.bundle || {};
const s = v => (v === undefined || v === null) ? '' : String(v).trim();
const list = v => Array.isArray(v) ? v.map(s).filter(Boolean) : [];
const coreLocal = s(loc.coreKeyword);
const secLocal = list(loc.secondaryKeywords);
const h1Local = s(loc.h1);
const h2Local = list(loc.h2Outline);
const h2Locked = h2Local.length === list(en.h2Outline).length ? h2Local : [];
const clientLocal = s(loc.clientName) || s(x.clientName);
const faq = Array.isArray(b.faq) ? b.faq.filter(q => q && q.question && q.answer) : [];
const eeat = (b.eeat && typeof b.eeat === 'object') ? b.eeat : null;
const EEAT_KEYS = ['experience', 'expertise', 'authoritativeness', 'trustworthiness'];
const eeatLines = eeat ? EEAT_KEYS.filter(k => eeat[k] && s(eeat[k].evidence)).map(k => k + ': ' + s(eeat[k].evidence)).concat(s(eeat.priorityFix) ? ['priorityFix: ' + s(eeat.priorityFix)] : []) : [];
const prompts = Array.isArray(b.monitoringPrompts) ? b.monitoringPrompts : [];
const promptLines = prompts.map((p, i) => (i + 1) + '. ' + s(p.promptEn || p.prompt));
const system = [
'You are a professional translator who knows all nuances and techniques related to translation and its adaptation to the ' + L + ' language. Your only task is to translate the provided webpage content from English into ' + L + '.',
'',
'Your action is as follows:',
'<action_plan>',
'Step 1. First, read the entire page thoroughly to understand the context.',
'Step 2. Translate the entire page from English into ' + L + ', considering the following translation adaptation rules:',
'* Never translate word-for-word. This is a transcreation: your goal is for a native speaker of the target language to feel the overview was written for them originally and not translated.',
'* Always preserve intent. The text must feel natural in the target language.',
'* Never translate idioms or figurative language literally. Replace them with a functionally equivalent expression in the target language, or restructure the sentence to avoid the idiom entirely if no natural equivalent exists.',
'* Always apply target language grammar norms. Sentence length, clause structure, punctuation conventions, and word order must follow the norms of the target language, not English patterns.',
'* Always integrate keywords in their correct grammatical form. Always ensure they appear declined, conjugated, or compounded as a native writer would use them.',
(coreLocal ? '* The following is the core keyword to be used in the target language: ' + coreLocal : '* The core keyword of the page in English is "' + s(en.coreKeyword) + '". No ' + L + ' equivalent was supplied: use the phrase a native speaker would type into a search engine for this subject, in ' + L + ', and use that same phrase consistently where the English keyword appears.'),
(secLocal.length ? '* The following are the secondary keywords to be used in the target language: ' + secLocal.join(', ') : (list(en.secondaryKeywords).length ? '* The secondary keywords of the page in English are: ' + list(en.secondaryKeywords).join(', ') + '. No ' + L + ' equivalents were supplied: use the phrases a native searcher would type, consistently.' : '')),
'* Never translate proper nouns, brand names, or technical terms blindly. Some must stay in English, some have official translations, and some need phonetic adaptation depending on the translated language and its conventions.',
(clientLocal ? '* The client of this page is "' + s(x.clientName) + '". Write its name as "' + clientLocal + '" everywhere, with no translation, no quotation marks and no generic noun added in front of it unless the grammar of ' + L + ' requires one.' : ''),
'* Always adapt punctuation and typography to target language conventions. Quotation marks, spacing around punctuation, decimal separators, and other typographic rules differ significantly between languages and must follow the target language standard, not English.',
'* Never assume cultural references will transfer. Examples, metaphors, or context that resonates with an English-speaking audience may be meaningless or confusing in the target language. Adapt them to culturally relevant equivalents.',
'* Always maintain the author\'s voice. Transcreation must not flatten the tone into generic translated prose. The personality, confidence, and directness of the original must come through in the target language\'s own expressive range.',
'* Do not add new information to the webpage as your task is only to translate and adapt. Every number, date, price, name, source and claim stays exactly as it is.',
'* No em dashes, no en dashes between words, no semicolons and no exclamation marks in the translation, whatever the source uses.',
'Step 3. Keep every hyperlink exactly as it is. The URL inside a markdown link [text](url) never changes; only the anchor text is translated. Never add, remove, shorten or replace a link. Keep the markdown structure exactly as in the source: the same heading levels in the same order, the same tables with the same number of rows and columns, the same lists, the same bold text.',
'Step 4. Use the locked wording below exactly as given, character for character, where the source has the corresponding English text:',
(h1Local ? '* H1: ' + h1Local : '* H1: no ' + L + ' wording supplied, translate the H1 as a page title a native reader would search for.'),
(h2Locked.length ? '* H2 headings, in the order they appear on the page (headings the page has beyond these are translated by you):\n' + h2Locked.map((h, i) => '  ' + (i + 1) + '. "' + s(en.h2Outline[i]) + '" -> "' + h + '"').join('\n') : '* H2 headings: no ' + L + ' wording supplied, translate every heading as a heading, keeping it as short as the English one.'),
(list(loc.aiPrompts).length ? '* Monitoring prompts that already exist in ' + L + ' are given in the PROMPTS block; copy them unchanged and translate only the others.' : ''),
'Step 5. Translate the other assets in the same way: the meta description (one sentence group of at most 150 characters, written as search engines show it), the FAQ questions and answers, the E-E-A-T notes and the monitoring prompts (questions people ask AI assistants, in the words a ' + L + ' speaker would use).',
'Step 6. Read the translated page to make sure you didn\'t miss anything: every section, every table row, every list item, every link. Make the last changes if needed.',
'Step 7. Provide the final output as plain text in the blocks below, in this order, with nothing before the first block and nothing after the last. Every block is present even when it is empty. Do not wrap the blocks in code fences.',
'</action_plan>',
'',
'<output_format>',
'//PAGE_START//',
'[the whole page in Markdown, in ' + L + ', starting with the H1 line and ending with the last section]',
'//PAGE_END//',
'//META_START//',
'[the meta description in ' + L + ', one line, at most 150 characters]',
'//META_END//',
'//FAQ_START//',
'Q: [question 1 in ' + L + ']',
'A: [answer 1 in ' + L + ', one paragraph on one line]',
'[... one Q: and one A: line per FAQ item, in the source order]',
'//FAQ_END//',
'//EEAT_START//',
'experience: [translation]',
'expertise: [translation]',
'authoritativeness: [translation]',
'trustworthiness: [translation]',
'priorityFix: [translation]',
'//EEAT_END//',
'//PROMPTS_START//',
'1. [prompt 1 in ' + L + ']',
'[... one numbered line per prompt, in the source order]',
'//PROMPTS_END//',
'//KEYWORDS_START//',
'coreKeyword: [the core keyword as used in ' + L + ', base form]',
'secondaryKeywords: [secondary keywords in ' + L + ', separated by " | "]',
'h1: [the H1 exactly as it appears in the translated page]',
'slug: [a URL slug for the ' + L + ' page: lower case, ASCII letters and digits, words joined by hyphens, from the core keyword or the H1]',
'//KEYWORDS_END//',
'</output_format>'
].filter(x => x !== '').join('\n');
const user = [
'Translate the following page and its assets from English into ' + L + '. Page type: ' + s(x.pageLabel || x.pageType) + '. Search intent: ' + s(x.searchIntent) + '. Client: ' + s(x.clientName) + (s(x.clientDescription) ? ' (' + s(x.clientDescription).slice(0, 300) + ')' : '') + '.',
'',
'//PAGE_START//',
s(b.finalPage),
'//PAGE_END//',
'//META_START//',
s(b.metaDescription),
'//META_END//',
'//FAQ_START//',
faq.map(q => 'Q: ' + s(q.question).replace(/\s+/g, ' ') + '\nA: ' + s(q.answer).replace(/\s+/g, ' ')).join('\n'),
'//FAQ_END//',
'//EEAT_START//',
eeatLines.join('\n'),
'//EEAT_END//',
'//PROMPTS_START//',
prompts.map((p, i) => { const fixed = (p.source === 'input' && list(loc.aiPrompts)[i] !== undefined) ? list(loc.aiPrompts)[i] : ''; return (i + 1) + '. ' + (fixed ? fixed + '   [already in ' + L + ', copy unchanged]' : s(p.promptEn || p.prompt)); }).join('\n'),
'//PROMPTS_END//'
].join('\n');
return [{ json: { system, user, language: L, h2Count: (s(b.finalPage).match(/^##\s+\S/gm) || []).length, faqCount: faq.length, promptCount: prompts.length, eeatKeys: eeatLines.map(l => l.split(':')[0]) } }];
