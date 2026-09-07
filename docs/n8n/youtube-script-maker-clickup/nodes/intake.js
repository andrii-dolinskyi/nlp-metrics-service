// Intake: parse a ClickUp chat message written as "key: value" lines into a validated script request.
const req = $('Build Request').first().json;
const ctx = {
  message_id: String(req.message_id || ''),
  requester_id: String(req.requester_id || ''),
  requester_name: String(req.requester_name || ''),
  requestExcerpt: String(req.excerpt || '')
};
const str = v => (v == null ? '' : String(v).trim());

// ClickUp returns markdown: undo backslash escapes and normalise line endings.
const text = String(req.content || '').replace(/\r/g, '').replace(/\\([\\`*_{}\[\]()#+\-.!>~|"'])/g, '$1');

// "help" command
if (/^\s*[*_#\s]*\/?(help|template|templates|start|commands)\s*[*_\s]*$/i.test(text) || /^\s*\?\s*$/.test(text)) {
  return [{ json: { valid: false, help: true, errors: [], notes: [], ...ctx } }];
}

const KEYMAP = {
  videotype: 'videoType', type: 'videoType', video: 'videoType', format: 'videoType', category: 'videoType', videocategory: 'videoType', kind: 'videoType',
  contentidea: 'contentIdea', idea: 'contentIdea', content: 'contentIdea', topic: 'contentIdea', about: 'contentIdea', brief: 'contentIdea', description: 'contentIdea', subject: 'contentIdea',
  title: 'title', videotitle: 'title',
  language: 'language', lang: 'language', outputlanguage: 'language', targetlanguage: 'language', locale: 'language',
  videolength: 'videoLength', length: 'videoLength', duration: 'videoLength', minutes: 'videoLength', lengthminutes: 'videoLength', targetlength: 'videoLength', time: 'videoLength',
  research: 'research', websearch: 'research', search: 'research', tavily: 'research', useresearch: 'research',
  blacklistdomains: 'blacklistDomains', blacklist: 'blacklistDomains', excludedomains: 'blacklistDomains', exclude: 'blacklistDomains', blockeddomains: 'blacklistDomains'
};
const norm = k => String(k).toLowerCase().replace(/[^a-z0-9]/g, '');
const LOOKS_LIKE_KEY = /(type|idea|title|lang|length|duration|research|blacklist|exclude)/;

const fields = {};
const unknownKeys = [];
let lastKey = null;
let sawKey = false;
for (const line of text.split('\n')) {
  const m = line.match(/^\s*(?:[-*•]\s*)?(?:\*\*|__)?\s*([A-Za-z][A-Za-z0-9 _\-]{0,40}?)\s*(?:\*\*|__)?\s*[:=]\s*(.*)$/);
  if (m) {
    const key = KEYMAP[norm(m[1])];
    if (key) {
      fields[key] = fields[key] ? fields[key] + '\n' + m[2] : m[2];
      lastKey = key;
      sawKey = true;
      continue;
    }
    if (!lastKey || LOOKS_LIKE_KEY.test(norm(m[1]))) {
      unknownKeys.push(m[1].trim());
      if (!lastKey) continue;
      if (LOOKS_LIKE_KEY.test(norm(m[1]))) { lastKey = null; continue; }
    }
  }
  if (lastKey) fields[lastKey] += '\n' + line;
}
for (const k of Object.keys(fields)) {
  fields[k] = fields[k].replace(/```/g, '').split('\n').map(l => l.replace(/\s+$/, '')).join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

const errors = [];
const notes = [];
if (!sawKey) {
  errors.push('I could not find any "key: value" lines in your message. A request needs at least "videoType: ..." and "contentIdea: ...".');
}
if (unknownKeys.length) notes.push('Ignored unknown keys: ' + [...new Set(unknownKeys)].join(', '));

const language = str(fields.language) || 'English';
const LANGUAGE_MAP = {
  'acehnese': 'ACE', 'afrikaans': 'AF', 'albanian': 'SQ', 'arabic': 'AR', 'aragonese': 'AN', 'armenian': 'HY', 'assamese': 'AS', 'aymara': 'AY', 'azerbaijani': 'AZ', 'bashkir': 'BA', 'basque': 'EU', 'belarusian': 'BE', 'bengali': 'BN', 'bhojpuri': 'BHO', 'bosnian': 'BS', 'breton': 'BR', 'bulgarian': 'BG', 'burmese': 'MY', 'cantonese': 'YUE', 'catalan': 'CA', 'cebuano': 'CEB',
  'chinese (simplified)': 'ZH-HANS', 'chinese simplified': 'ZH-HANS', 'simplified chinese': 'ZH-HANS', 'chinese (traditional)': 'ZH-HANT', 'chinese traditional': 'ZH-HANT', 'traditional chinese': 'ZH-HANT', 'chinese': 'ZH',
  'croatian': 'HR', 'czech': 'CS', 'danish': 'DA', 'dari': 'PRS', 'dutch': 'NL', 'english': 'EN', 'english (us)': 'EN', 'english (uk)': 'EN', 'american english': 'EN', 'british english': 'EN', 'english us': 'EN', 'english uk': 'EN', 'en-us': 'EN', 'en-gb': 'EN', 'esperanto': 'EO', 'estonian': 'ET', 'finnish': 'FI', 'french': 'FR', 'french (canadian)': 'FR-CA', 'canadian french': 'FR-CA', 'galician': 'GL', 'georgian': 'KA', 'german': 'DE', 'german (swiss)': 'DE-CH', 'swiss german': 'DE-CH', 'greek': 'EL', 'guarani': 'GN', 'gujarati': 'GU', 'haitian creole': 'HT', 'hausa': 'HA', 'hebrew': 'HE', 'hindi': 'HI', 'hungarian': 'HU', 'icelandic': 'IS', 'igbo': 'IG', 'indonesian': 'ID', 'irish': 'GA', 'italian': 'IT', 'japanese': 'JA', 'javanese': 'JV', 'kapampangan': 'PAM', 'kazakh': 'KK', 'konkani': 'GOM', 'korean': 'KO',
  'kurdish (kurmanji)': 'KMR', 'kurmanji': 'KMR', 'kurdish (sorani)': 'CKB', 'sorani': 'CKB',
  'kyrgyz': 'KY', 'latin': 'LA', 'latvian': 'LV', 'lingala': 'LN', 'lithuanian': 'LT', 'lombard': 'LMO', 'luxembourgish': 'LB', 'macedonian': 'MK', 'maithili': 'MAI', 'malagasy': 'MG', 'malay': 'MS', 'malayalam': 'ML', 'maltese': 'MT', 'maori': 'MI', 'marathi': 'MR', 'mongolian': 'MN', 'nepali': 'NE', 'norwegian bokmål': 'NB', 'norwegian': 'NB', 'occitan': 'OC', 'oromo': 'OM', 'pangasinan': 'PAG', 'pashto': 'PS', 'persian': 'FA', 'polish': 'PL',
  'portuguese (brazilian)': 'PT-BR', 'brazilian portuguese': 'PT-BR', 'portuguese (european)': 'PT-PT', 'european portuguese': 'PT-PT', 'portuguese': 'PT',
  'punjabi': 'PA', 'quechua': 'QU', 'romanian': 'RO', 'russian': 'RU', 'sanskrit': 'SA', 'serbian': 'SR', 'sesotho': 'ST', 'sicilian': 'SCN', 'slovak': 'SK', 'slovenian': 'SL', 'spanish': 'ES', 'spanish (latin american)': 'ES-419', 'latin american spanish': 'ES-419', 'sundanese': 'SU', 'swahili': 'SW', 'swedish': 'SV', 'tagalog': 'TL', 'tajik': 'TG', 'tamil': 'TA', 'tatar': 'TT', 'telugu': 'TE', 'thai': 'TH', 'tsonga': 'TS', 'tswana': 'TN', 'turkish': 'TR', 'turkmen': 'TK', 'ukrainian': 'UK', 'urdu': 'UR', 'uzbek': 'UZ', 'vietnamese': 'VI', 'welsh': 'CY', 'wolof': 'WO', 'xhosa': 'XH', 'yiddish': 'YI', 'zulu': 'ZU'
};
const ALIASES = {
  'educational': 'educational', 'education': 'educational', 'explainer': 'educational', 'tutorial': 'educational', 'how to': 'educational', 'howto': 'educational', 'educational video': 'educational', 'educational videos': 'educational',
  'listicle': 'listicle', 'listicles': 'listicle', 'list': 'listicle', 'top list': 'listicle',
  'comparison': 'comparison', 'product comparison': 'comparison', 'compare': 'comparison', 'vs': 'comparison', 'versus': 'comparison',
  'product update': 'product_update', 'product updates': 'product_update', 'update': 'product_update', 'updates': 'product_update', 'changelog': 'product_update', 'release notes': 'product_update', 'feature update': 'product_update',
  'product news': 'product_news', 'productnews': 'product_news',
  'product use case': 'use_case', 'product use cases': 'use_case', 'use case': 'use_case', 'use cases': 'use_case', 'case study': 'use_case',
  'thought leadership': 'thought_leadership', 'opinion': 'thought_leadership', 'vision': 'thought_leadership',
  'ai news': 'ai_news', 'ainews': 'ai_news',
  'shorts': 'shorts', 'short': 'shorts', 'youtube shorts': 'shorts', 'youtube short': 'shorts', 'reel': 'shorts'
};
const SPECS = {
  educational: {
    label: 'Educational video',
    defaultMinutes: 8, minMinutes: 2, maxMinutes: 25,
    hook: 'In the first 15 seconds (roughly the first 30 words): name the problem the viewer has, promise the specific outcome they will walk away with, and give one line of proof or credibility for why you can teach it. Proven hook patterns for this type: the result-first hook ("By the end of this video you will be able to X"), the mistake hook ("Most people do X wrong, and it costs them Y"), and the question hook that names the exact pain the viewer typed into search. Do not greet, do not introduce the channel, do not say "in this video" more than once.',
    structure: 'Sections in order: "## Hook" (the retention opener), "## Why This Matters" (stakes and context, keep it under 15 percent of the script), then 3 to 5 teaching sections with concrete descriptive H2 titles (one core concept each, always explained with a real example or a walkthrough), "## Recap" (the takeaways compressed into a few spoken lines), "## Outro" (CTA). Every 60 to 90 seconds of script, re-hook the viewer: pose a question, tease what is coming next, or flip perspective. Preview the payoff of later sections early ("the third one saves the most time") to build an open loop.',
    titleGuidance: 'Under 60 characters, outcome-driven and search-friendly. Patterns that work: "How to X (Without Y)", "X Explained in N Minutes", "The Only X Guide You Need in 2026", "X: What Nobody Tells You". Front-load the searched keyword.',
    content: 'Success lives on specificity: exact steps, exact numbers, real tools, real examples. One idea per section, ruthlessly cut tangents. Explain jargon the moment it appears. Assume the viewer is smart but new to this exact topic.',
    cta: 'Close by pointing at the natural next step in the learning journey: subscribe framed around future value ("I publish a breakdown like this every week") plus one concrete action the viewer can take today with what they learned.'
  },
  listicle: {
    label: 'Listicle',
    defaultMinutes: 10, minMinutes: 3, maxMinutes: 20,
    hook: 'In the first 15 seconds: promise the full list, state the selection criteria in one line so the list feels researched instead of random, and tease the strongest item without naming it ("and the last one is the one I actually use every day"). That unresolved tease is the retention engine of the whole video.',
    structure: 'Sections in order: "## Hook", "## How I Picked These" (one short paragraph of criteria), then one H2 per list item with the item name in the title (for example "## 1. Notion" ... counting up), and "## Outro". Order items so a strong one opens the list, the strongest closes it, and momentum never dips in the middle. For each item cover: what it is in one line, why it earned the spot, the one standout detail or number that makes it memorable, and who it is best for. Keep item sections balanced in length so pacing stays predictable.',
    titleGuidance: 'Put the number in the title, odd numbers slightly outperform even ones. Under 60 characters. Patterns: "7 X That Actually Y", "Top 5 X for Y in 2026", "N X I Wish I Knew Before Z".',
    content: 'The list must feel curated by someone with real experience: opinionated one-line verdicts beat neutral descriptions. Cut any item you cannot say something specific about. Never pad the count.',
    cta: 'Ask the viewer to defend their pick or name the missing item in the comments, because comment velocity is the growth lever for listicles. Then subscribe line.'
  },
  comparison: {
    label: 'Product comparison',
    defaultMinutes: 9, minMinutes: 4, maxMinutes: 20,
    hook: 'In the first 20 seconds: name both products, name the real decision pain ("both cost about the same, both claim the same thing"), promise a clear verdict, and give the short answer immediately ("short version: X wins for most people, but there are two cases where Y is the better buy"). Giving the quick verdict up front builds trust and keeps the viewer watching for the nuance.',
    structure: 'Sections in order: "## Hook" (with the short verdict), "## Who Each Is For" (one paragraph per product), then 3 to 5 head-to-head H2 rounds named after decision criteria that actually matter (pricing, core workflow, performance, support, ecosystem), each round ending with a spoken winner call, "## The Scorecard" (tally the rounds in spoken prose), "## Verdict" (final recommendation split by persona: "if you are X, buy A; if you are Y, buy B"), "## Outro".',
    titleGuidance: 'Pattern: "X vs Y: Which Should You Buy in 2026?", "X vs Y – The Honest Comparison", "I Tested X and Y for 30 Days". Both product names in the title, under 65 characters.',
    content: 'Fairness is the product: state a real weakness of the winner and a real strength of the loser. Use concrete criteria with observable differences (price numbers, limits, speeds) instead of vibes. Never declare a tie on every round, that reads as cowardice.',
    cta: 'Point to links for both products (use [LINK] placeholders), invite the viewer to say which side they landed on in the comments, subscribe line tied to future comparisons.'
  },
  product_update: {
    label: 'Product update',
    defaultMinutes: 4, minMinutes: 1, maxMinutes: 10,
    hook: 'In the first 10 seconds: lead with the single biggest change and what it unlocks for the user, in one sentence. Updates are news, so no wind-up: "X just shipped Y, and it changes how you do Z."',
    structure: 'Sections in order: "## Hook", "## The Headline Feature" (the biggest change: what it does, why users asked for it, how it changes the workflow), "## Everything Else That Changed" (rapid-fire walk through the remaining changes, one or two spoken lines each), "## How to Get It" (availability, rollout, pricing tier, how to enable), "## What Is Next" (roadmap tease if known), "## Outro".',
    titleGuidance: 'Pattern: "[Product] Just Got a Major Upgrade: [Feature]", "What Is New in [Product] – [Month Year]", "[Product] [Version]: Every New Feature Explained". Product name first, under 65 characters.',
    content: 'Translate every change from changelog language into user benefit language: never "we improved the API", always "your syncs now finish in half the time". Order changes by user impact, never by internal team structure.',
    cta: 'Send the viewer to try the flagship feature today, point at docs or changelog with a [LINK] placeholder, subscribe framed as "I cover every release of [Product]".'
  },
  product_news: {
    label: 'Product news',
    defaultMinutes: 5, minMinutes: 2, maxMinutes: 12,
    hook: 'In the first 10 seconds: state the news in one plain sentence, then immediately answer "why should you care" in the second sentence. Recency framing matters: anchor the story in time ("this week", "yesterday", the actual date).',
    structure: 'Sections in order: "## Hook", "## What Happened" (the facts: who, what, when, the concrete numbers of the announcement), "## The Context" (what led here, what the company or market was doing before), "## What It Means for You" (practical implications for the viewer segment watching), "## The Reaction" (how the market, competitors, or community responded, with named sources when research is on), "## What to Watch Next", "## Outro".',
    titleGuidance: 'Newsy and specific, under 65 characters: "[Company] Just Announced [Thing]", "What [Product] News Means for [Audience]", "[Thing] Is Here – And It Changes [Category]". No vague hype words.',
    content: 'Separate confirmed facts from your interpretation and say which is which out loud. Facts get sources, interpretation gets your reasoning. Wrong or inflated news kills a channel faster than boring news.',
    cta: 'Ask viewers what their read on the news is, subscribe framed around staying ahead of the category, comment prompt with a concrete question.'
  },
  use_case: {
    label: 'Product use case',
    defaultMinutes: 7, minMinutes: 3, maxMinutes: 15,
    hook: 'In the first 15 seconds: lead with the finished outcome and the concrete result ("here is how a 4-person team cut reporting from 6 hours to 20 minutes with X"), then promise the viewer will see the exact setup end to end. Outcome first, product second.',
    structure: 'Sections in order: "## Hook", "## The Problem" (the situation before, what was broken and what it cost), "## The Setup" (walk through the workflow step by step as the demo spine, each step described so a viewer can follow along on screen), "## The Results" (specific before-and-after numbers or outcomes), "## How to Do This Yourself" (compressed action steps the viewer can replicate), "## Outro".',
    titleGuidance: 'Pattern: "How [Who] Uses [Product] to [Outcome]", "From [Pain] to [Result] with [Product]", "[Product] in the Real World: [Use Case]". Under 65 characters, outcome visible in the title.',
    content: 'Concrete beats impressive: real numbers, real workflow names, real friction encountered during setup and how it was solved. Admit what the product does not solve in this use case, that one line buys credibility for everything else.',
    cta: 'Offer the next step to replicate: trial, demo, or template with [LINK] placeholders, plus invite viewers to share their use case in the comments.'
  },
  thought_leadership: {
    label: 'Thought leadership',
    defaultMinutes: 9, minMinutes: 4, maxMinutes: 20,
    hook: 'In the first 15 seconds: state the thesis as a bold, falsifiable claim the mainstream disagrees with, and stake personal credibility on it ("after ten years building X, I think everyone is wrong about Y, and here is what I am betting on instead"). The hook is the argument, compressed.',
    structure: 'Sections in order: "## Hook" (the thesis), "## The Stakes" (why this argument matters right now, what changes if the thesis is right), then 2 to 4 H2 argument sections each carrying one pillar of evidence or experience, "## The Steelman" (the strongest version of the opposing view, answered honestly), "## What I Would Do" (implications turned into positions or predictions with timeframes), "## Outro". Write in first person throughout, this format lives on personal conviction.',
    titleGuidance: 'Opinionated and specific, under 60 characters: "Why X Is Wrong About Y", "The Future of X Is Not What You Think", "Stop Doing X. Do Y Instead.", "[Contrarian claim]". The title should be disagreeable enough to earn a click and defensible enough to earn a subscribe.',
    content: 'Predictions need timeframes, claims need reasoning shown out loud, and at least one concession keeps it honest. The viewer should finish able to repeat the argument to a colleague in two sentences.',
    cta: 'Invite disagreement explicitly in the comments (the debate is the distribution), subscribe framed around the ongoing point of view, not the single video.'
  },
  ai_news: {
    label: 'AI news',
    defaultMinutes: 8, minMinutes: 3, maxMinutes: 15,
    hook: 'In the first 10 seconds: tease the biggest story of the roundup without fully resolving it, and set the frame ("three AI stories this week actually matter, and the third one affects anyone who writes code"). Time-anchor the episode ("this week in AI") because recency is the product.',
    structure: 'Sections in order: "## Hook", then one H2 per story ordered by impact with the story name in the title (biggest story first or last, but tease the placement in the hook), "## Quick Hits" (two or three one-line mentions that did not earn a full section), "## The Takeaway" (the pattern connecting the stories, your read on where things move next), "## Outro". Per story: what happened in two sentences, the concrete numbers, why it matters, and one sharp opinionated take. Keep pacing fast, stories must not overstay.',
    titleGuidance: 'Under 65 characters, lead with the biggest story plus the roundup frame: "[Biggest Story] – This Week in AI", "AI News: [Story], [Story] and More", "The AI News That Actually Matters This Week".',
    content: 'Verify every claim when research is on, and date-stamp every story out loud. Separate the announcement from the demo from the shipped product, because AI news constantly conflates the three, and calling that out is your differentiation.',
    cta: 'Subscribe framed as the recurring cadence ("every week, the AI news without the hype"), comment prompt asking which story the viewer wants a deep dive on.'
  },
  shorts: {
    label: 'YouTube Short',
    defaultMinutes: 0.75, minMinutes: 0.25, maxMinutes: 3,
    hook: 'The first line IS the video: 5 to 10 words that create an information gap or a bold claim, delivered in the first 2 seconds. No greeting, no intro, no context. Patterns: the bold claim ("You are using ChatGPT wrong"), the curiosity gap ("This one setting doubles your battery life"), the direct callout ("If you write emails, stop scrolling").',
    structure: 'No H2 sections. Just the H1 title and 1 to 3 short paragraphs of continuous spoken text: hook line, then the payoff delivered immediately in tight steps or beats (one idea only for the whole Short), then a looping ending where the final line connects back to the opening line so the replay feels seamless. Every sentence must earn the next one, cut every word that does not.',
    titleGuidance: 'Short and punchy, under 40 characters, can be the hook line itself or a compressed version of it. The title is secondary for Shorts distribution, the first frame and first line matter more.',
    content: 'One idea, zero tangents. Concrete and immediately actionable or immediately surprising. Write at a fast spoken cadence with short sentences. No section recaps, no "let me explain", no setup longer than one line.',
    cta: 'One closing line maximum, or none: "Follow for more like this" or a loop line that doubles as the CTA. Never a long outro, Shorts die on outros.'
  }
};

const languageKey = language.toLowerCase().trim().replace(/\s+/g, ' ');
let targetSource = LANGUAGE_MAP[languageKey];
if (!targetSource && /^(en|eng|en-us|en-gb)$/i.test(languageKey)) targetSource = 'EN';
if (!targetSource && Object.values(LANGUAGE_MAP).includes(language.toUpperCase())) targetSource = language.toUpperCase();
const isEnglish = /^EN(-|$)/.test(String(targetSource || ''));

const contentIdea = str(fields.contentIdea);
const providedTitle = str(fields.title).replace(/^["'“”]+|["'“”]+$/g, '').trim();
const rawType = str(fields.videoType).toLowerCase().replace(/[\s_-]+/g, ' ').replace(/\.$/, '');
const rawResearch = str(fields.research).toLowerCase();
let research = false;
if (rawResearch) {
  if (/^(true|yes|y|on|1|enabled?|enable)$/.test(rawResearch)) research = true;
  else if (/^(false|no|n|off|0|disabled?|disable|none)$/.test(rawResearch)) research = false;
  else errors.push('research must be true or false (got "' + fields.research + '").');
}

if (sawKey && !rawType) errors.push('videoType is required. Use one of: educational, listicle, comparison, product update, product news, product use case, thought leadership, ai news, shorts.');
const typeKey = rawType ? ALIASES[rawType] : null;
if (rawType && !typeKey) errors.push('videoType "' + fields.videoType + '" is not supported. Use one of: educational, listicle, comparison, product update, product news, product use case, thought leadership, ai news, shorts.');
if (sawKey && !contentIdea) errors.push('contentIdea is required. Describe what the video is about.');
else if (contentIdea && contentIdea.length < 12) errors.push('contentIdea is too short ("' + contentIdea + '"). Give at least one full sentence.');
if (!targetSource) errors.push('language "' + language + '" is not supported by the DeepL translation step. Use a language name such as Spanish, German, Ukrainian or Japanese, or a DeepL language code.');

const spec = typeKey ? SPECS[typeKey] : null;
let minutes = null;
const rawLen = str(fields.videoLength).toLowerCase();
if (rawLen) {
  const num = parseFloat(rawLen.replace(',', '.').replace(/[^0-9.]/g, ' ').trim().split(/\s+/)[0]);
  if (!isFinite(num) || num <= 0) {
    errors.push('videoLength "' + fields.videoLength + '" is not a valid length. Use minutes (e.g. 8) or seconds for shorts (e.g. 45s).');
  } else if (/\b(sec|secs|second|seconds|s)\b|[0-9]s$/.test(rawLen)) {
    minutes = num / 60;
  } else if (/\b(h|hr|hour|hours)\b/.test(rawLen)) {
    minutes = num * 60;
  } else {
    minutes = num;
  }
}

if (errors.length) {
  return [{ json: { valid: false, help: false, errors, notes, ...ctx } }];
}

if (minutes == null) minutes = spec.defaultMinutes;
const clamped = Math.min(Math.max(minutes, spec.minMinutes), spec.maxMinutes);
if (clamped !== minutes) {
  const fmt = m => (m < 1 ? Math.round(m * 60) + ' seconds' : (Math.round(m * 10) / 10) + ' min');
  notes.push('videoLength adjusted from ' + fmt(minutes) + ' to ' + fmt(clamped) + ' (allowed range for ' + spec.label + ': ' + fmt(spec.minMinutes) + ' to ' + fmt(spec.maxMinutes) + ').');
}
minutes = clamped;
const targetWords = Math.round(minutes * 120);

const DEFAULT_BLACKLIST = ['youtube.com', 'reddit.com', 'wikipedia.org', 'threads.net', 'threads.com', 'facebook.com', 'instagram.com', 'x.com', 'twitter.com', 'tiktok.com', 'linkedin.com', 'pinterest.com', 'quora.com', 'tumblr.com', 'snapchat.com', 'vk.com', 'discord.com', 'twitch.tv', 'fandom.com'];
const extra = str(fields.blacklistDomains).split(/[\s,;]+/).map(d => d.toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '')).filter(d => d && d.includes('.'));
const tavilyExcludeDomains = [...new Set([...DEFAULT_BLACKLIST, ...extra])];
if (extra.length && !research) notes.push('blacklistDomains only apply when research is true.');

return [{ json: {
  valid: true,
  help: false,
  errors: [],
  notes,
  ...ctx,
  language,
  targetSource,
  isEnglish,
  needsTranslation: !isEnglish,
  contentIdea,
  providedTitle,
  hasTitle: providedTitle.length > 0,
  videoType: typeKey,
  videoTypeLabel: spec.label,
  targetMinutes: minutes,
  targetWords,
  wordsMin: Math.round(targetWords * 0.9),
  wordsMax: Math.round(targetWords * 1.1),
  research,
  tavilyExcludeDomains,
  spec
} }];
