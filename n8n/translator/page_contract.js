// The contract fields the delivery chain reads (schema types, type id, sections, FAQ count), carried over from the
// Content Maker 6.0 run that wrote the English page.
const ctx = $('Context').first().json;
const r = $('Parse Request').first().json;
const types = String(ctx.schemaTypes || 'Article + BreadcrumbList');
const n = (r.h2Outline || []).length;
return [{ json: {
  spec: { typeId: ctx.typeId || ctx.pageType, label: ctx.pageLabel || ctx.pageType, schemaTypes: types, faqRequired: Number(ctx.faqCount) > 0 },
  searchIntent: r.searchIntent, sections: (r.h2Outline || []).map((h, i) => ({ index: i + 1, h2: h, isClosing: false })), closing: null, appendClosing: false,
  sectionCount: n, isLang: true, h1: r.h1, label: ctx.pageLabel || ctx.pageType, schemaTypes: types, faqCount: Number(ctx.faqCount) || 0, blocked: false
} }];
