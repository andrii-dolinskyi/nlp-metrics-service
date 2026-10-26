// Primary target in another language: hands the English assets (page, meta, FAQ, E-E-A-T, prompts) to the CM6
// Translator sub-workflow in inline mode and waits for the translated bundle. The app's own wording for this language
// (r.original: H1, H2s, keyword, slug, names, prompts) is locked in the translation.
const r = $('Parse Request').first().json;
const c = $('Page Contract').first().json;
const a = $('Assemble Assets').first().json;
const L = r.targetLanguage;
const loc = Object.assign({}, (r.localized && r.localized[L]) || {}, r.original || {});
if (!loc.aiPrompts && r.inputsOriginal && Array.isArray(r.inputsOriginal.aiPrompts) && r.sourceLanguage === L) loc.aiPrompts = r.inputsOriginal.aiPrompts;
// The request's slug is the slug of the page this execution delivers, whatever language it is in.
loc.slugPath = r.slugPath;
const payload = {
  inline: true, delaySeconds: 0,
  taskId: r.taskId, brandId: r.brandId, userId: r.userId, callbackUrl: r.callbackUrl,
  sourceTaskId: r.taskId, sourceExecutionId: String($execution.id),
  pageType: r.pageType, pageLabel: c.label || (c.spec && c.spec.label) || r.pageType, searchIntent: r.searchIntent,
  schemaTypes: c.schemaTypes || (c.spec && c.spec.schemaTypes) || '', faqCount: c.faqCount, typeId: c.spec && c.spec.typeId,
  sourceLanguage: 'English', inputsLanguage: r.sourceLanguage, language: L,
  clientName: r.clientName, clientDescription: r.clientDescription, siteRootUrl: r.siteRootUrl, slugPath: r.slugPath, ctaUrl: r.ctaUrl, ctaRules: r.ctaRules,
  author: r.author, reviewer: r.reviewer,
  en: { h1: r.h1, h2Outline: r.h2Outline, coreKeyword: r.coreKeyword, secondaryKeywords: r.secondaryKeywords, aiPrompts: r.aiPrompts },
  localized: loc,
  bundle: { finalPage: a.finalPage, metaDescription: a.metaDescription, faq: a.faq || [], eeat: a.eeat || null, monitoringPrompts: a.monitoringPrompts || [], faqCount: a.faqCount, slug: a.slug, slugPath: a.slugPath }
};
return [{ json: { payload: JSON.stringify(payload), language: L } }];
