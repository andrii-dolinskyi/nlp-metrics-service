const r = $('Parse Request').first().json;
const rows = $input.all().map(i => i.json).filter(x => x && x.type_id);
const spec = rows[0];
if (!spec) throw new Error('Unknown pageType: ' + r.pageType + '. Add it to the page_type_specs data table.');
const num = (v, d) => (v === null || v === undefined || v === '') ? d : Number(v);
const str = (v, d) => (v === null || v === undefined) ? (d || '') : String(v);
const S = {
  typeId: spec.type_id, label: spec.label || spec.type_id, family: str(spec.family, 'guide').toLowerCase(), definition: str(spec.definition),
  wordsMin: num(spec.words_min, 800), wordsMax: num(spec.words_max, 2000), defaultWords: num(spec.default_words, 1200),
  answerParagraph: spec.answer_paragraph === true || spec.answer_paragraph === 'true', answerStyle: str(spec.answer_style, 'none'), answerMaxWords: num(spec.answer_max_words, 80),
  tablesMin: num(spec.tables_min, 0), citationsMin: num(spec.citations_min, 0), research: str(spec.research, 'none').toLowerCase(),
  schemaTypes: str(spec.schema_types, 'Article + BreadcrumbList'), requiredFacts: str(spec.required_facts), constraints: str(spec.constraints),
  opening: str(spec.opening), formatHints: str(spec.section_format_hints), aiWritable: str(spec.ai_writable, 'Y').toUpperCase(),
  closingMode: str(spec.closing_mode, 'none').toLowerCase(), closingHeading: str(spec.closing_heading), closingContent: str(spec.closing_content),
  ctaMode: str(spec.cta_mode, 'none').toLowerCase(), ctaGuidance: str(spec.cta_guidance), formatRules: str(spec.format_rules),
  h3Policy: str(spec.h3_policy, 'optional'), metaPattern: str(spec.meta_description_pattern),
  faqRequired: str(spec.faq_required, 'Y').toUpperCase() !== 'N'
};
S.h3Mode = (S.h3Policy.split(/[:.]/)[0] || 'optional').trim().toLowerCase();
if (['required', 'optional', 'none'].indexOf(S.h3Mode) === -1) S.h3Mode = 'optional';
if (S.research === 'none') S.citationsMin = 0;
let blocked = false, reason = '', missing = [];
if (S.aiWritable === 'N') { blocked = true; reason = 'Page type ' + S.typeId + ' is a template or engineering page and is not written by this flow.'; }
const factFamilies = ['offer', 'proof', 'entity', 'local', 'catalogue', 'evaluation', 'tool'];
const factKeys = Object.keys(r.facts || {}).filter(k => { const v = r.facts[k]; return v !== null && v !== undefined && String(v).trim() !== '' && !(Array.isArray(v) && !v.length); });
if (!blocked && S.requiredFacts && factFamilies.indexOf(S.family) !== -1 && !factKeys.length) {
  blocked = true; missing = S.requiredFacts.split(',').map(x => x.trim()).filter(Boolean);
  reason = 'Required facts for ' + S.typeId + ' are missing. Send a facts object with: ' + missing.join(', ');
}
const closingRe = /^(what to do next|next steps?|where to (start|go next)|how to (get started|start|book|apply|order|join|enrol|enroll|register|contact|reach|choose|decide|claim|install|sign up|switch|work with)|get(ting)? started|book |contact |talk to |request |our verdict|which (one |alternative |category )?(to choose|fits)|when to (see|call|get|talk)|conclusion|summary|final thoughts|key takeaways|wrapping up|in summary|to sum up|the bottom line)/i;
const outline = r.h2Outline;
const n = outline.length;
const lastIsClosing = n > 1 && closingRe.test(outline[n - 1]);
const appendClosing = S.closingMode === 'append' && !lastIsClosing;
let ctaMode = S.ctaMode;
if (ctaMode === 'optional' && !r.ctaRules && !r.ctaUrl) ctaMode = 'none';
const closingWords = appendClosing ? 100 : 0;
let per = Math.round((S.defaultWords - (S.answerParagraph ? S.answerMaxWords : 60) - closingWords) / Math.max(n, 1));
per = Math.max(90, Math.min(per, 450));
const sections = outline.map((h, i) => ({ index: i + 1, h2: h, words: per, isClosing: !appendClosing && i === n - 1 && (lastIsClosing || ctaMode !== 'none') }));
const closing = appendClosing ? { index: n + 1, headingPatterns: S.closingHeading, content: S.closingContent, words: 100 } : null;
return [{ json: { spec: S, sections, closing, appendClosing, lastIsClosing, expectedH2Count: n + (appendClosing ? 1 : 0), closingSectionIndex: appendClosing ? n + 1 : n, ctaMode, sectionCount: n, sectionWords: per, isLang: r.isLang, research: S.research, blocked, blockedReason: reason, missingFacts: missing, h1: r.h1, label: S.label, schemaTypes: S.schemaTypes, faqCount: (S.faqRequired && S.typeId !== 'faq_page') ? 5 : 0 } }];
