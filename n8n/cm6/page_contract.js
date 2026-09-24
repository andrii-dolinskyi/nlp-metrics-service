const r = $('Parse Request').first().json;
const rows = $input.all().map(i => i.json).filter(x => x && x.type_id);
const spec = rows[0];
if (!spec) throw new Error('Unknown pageType: ' + r.pageType + '. Add it to the page_type_specs data table.');
const num = (v, d) => (v === null || v === undefined || v === '') ? d : Number(v);
const str = (v, d) => (v === null || v === undefined) ? (d || '') : String(v);
// The 16 columns of page_type_specs. Formats, H3s, facts and the meta description are decided by the writer and the
// meta prompt from the heading, the search intent and the research, not by the table.
const S = {
  typeId: spec.type_id, label: spec.label || spec.type_id, family: str(spec.family, 'guide').toLowerCase(), definition: str(spec.definition), industries: str(spec.industries),
  wordsApprox: num(spec.words_count_approx, 1200),
  answerParagraph: spec.answer_paragraph === true || spec.answer_paragraph === 'true', answerStyle: str(spec.answer_style, 'none'), answerMaxWords: num(spec.answer_max_words, 80),
  tablesMin: num(spec.tables_min, 0), research: str(spec.research, 'none').toLowerCase(),
  schemaTypes: str(spec.schema_types, 'Article + BreadcrumbList'), opening: str(spec.opening),
  closingHeading: str(spec.closing_heading).trim(),
  ctaMode: str(spec.cta_mode, 'none').trim().toLowerCase() === 'required' ? 'required' : 'none',
  faqRequired: str(spec.faq_required, 'Y').toUpperCase() !== 'N'
};
const closingRe = /^(what to do next|next steps?|where to (start|go next)|how to (get started|start|book|apply|order|join|enrol|enroll|register|contact|reach|choose|decide|claim|install|sign up|switch|work with)|get(ting)? started|book |contact |talk to |request |our verdict|which (one |alternative |category )?(to choose|fits)|when to (see|call|get|talk)|conclusion|summary|final thoughts|key takeaways|wrapping up|in summary|to sum up|the bottom line)/i;
const outline = r.h2Outline;
const n = outline.length;
const lastIsClosing = n > 1 && closingRe.test(outline[n - 1]);
const appendClosing = !!S.closingHeading && !lastIsClosing;
const ctaMode = S.ctaMode;
const sections = outline.map((h, i) => ({ index: i + 1, h2: h, isClosing: !appendClosing && i === n - 1 && (lastIsClosing || ctaMode !== 'none') }));
const closing = appendClosing ? { index: n + 1, headingPatterns: S.closingHeading, words: 100 } : null;
return [{ json: { spec: S, searchIntent: r.searchIntent, sections, closing, appendClosing, lastIsClosing, expectedH2Count: n + (appendClosing ? 1 : 0), closingSectionIndex: appendClosing ? n + 1 : n, ctaMode, sectionCount: n, wordsApprox: S.wordsApprox, isLang: r.isLang, research: S.research, blocked: false, blockedReason: '', missingFacts: [], h1: r.h1, label: S.label, schemaTypes: S.schemaTypes, faqCount: (S.faqRequired && S.typeId !== 'faq_page') ? 5 : 0 } }];
