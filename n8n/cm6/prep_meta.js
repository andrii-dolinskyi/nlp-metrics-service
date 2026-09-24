const r = $('Parse Request').first().json;
const c = $('Page Contract').first().json;
const S = c.spec;
const page = $('Extract Updated').first().json.page;
const intent = c.searchIntent || r.searchIntent || 'informational';
// The search intent sent by the app decides what the description must carry and what leads it. The rest of the
// rules are the same for every page.
const INTENT = {
  informational: { must: 'the question the page answers and the specific answer or scope it gives: the number of steps or options, the years, the key figure or the definition. The client name stays out unless the page is about the client.', lead: 'the core keyword' },
  commercial: { must: 'what is compared or evaluated, on which criteria or in which price range, and a hint of the verdict (who it suits, which wins). The client name only when the client is one of the options on the page.', lead: 'the core keyword' },
  transactional: { must: 'the client name, the service or product, who or where it is for, and one concrete deliverable, differentiator or figure that is on the page.', lead: 'the client name or the core keyword, whichever the page is about' },
  navigational: { must: 'the client name first, what this page is (the page purpose in the reader\'s words) and the practical fact the reader came for: location, hours, role, contact route.', lead: 'the client name' }
};
const I = INTENT[intent] || INTENT.informational;
const sys = ['You are an SEO copywriter. Write the meta description for a ' + c.label + ' page written for ' + intent + ' search intent. Follow every rule exactly, then return JSON with meta_description.',
'',
'<meta_description_rules>',
'A meta description is the pitch under the title in Google results. Google uses it when it describes the page better than a sentence lifted from the body, so it must be specific to this page, factual and complete.',
'- Length: maximum 150 characters including spaces and punctuation. Never over 150.',
'- Search intent: ' + intent + '. What it must contain for this intent: ' + I.must,
'- Front load it: the first 60 characters carry the subject, which is ' + I.lead + '.',
'- Name the concrete thing this page holds (the service, the figure, the place, the item, the number of steps or options) so the line could not sit on any other page of the site.',
'- Write it as a factual statement of what the page contains, never as an invitation and never as an ad. Never write learn, discover, find out, explore, unlock, everything you need, your guide to, or a question.',
'- No keyword list, no client name unless the intent rule above calls for it, no superlative, no exclamation mark, no em dash, no semicolon, no ampersand.',
'- Sentence case. Reproduce the client name and the core keyword word for word when you use them. Never translate, abbreviate or reword either.',
'- Plain style: one or two sentences, subject then verb, no present participle pile ups, no series of three, no negative parallelism, no tailing negation, no hedging.',
'- Never claim a result, number or certification that is not already on the page.',
'',
'Bad (a keyword list): "Sewing supplies, yarn, colored pencils, sewing machines, threads, bobbins, needles."',
'Good (specific and factual): "Get everything you need to sew your next garment. Open Monday to Friday 8 to 5, located in the Fashion District."',
'</meta_description_rules>',
'',
'<locked_values>',
'client name = ' + r.clientName,
'core keyword = ' + (r.coreKeyword || r.h1),
'page type = ' + S.label,
'search intent = ' + intent,
'</locked_values>'].filter(x => x !== '').join('\n');
return [{ json: { metaSystem: sys, finalPage: page } }];
