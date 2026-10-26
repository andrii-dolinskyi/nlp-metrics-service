// After the primary page has been sent: one item per extra target language, each starting its own CM6 Translator
// execution (Start Translations runs them without waiting). Five translations start at once; every further group of
// five waits four minutes longer inside the Translator (Stagger), so 150 languages never hit the model at the same
// time. Each translation sends its own execution-started and page callbacks and its own Money Calculator run.
const r = $('Parse Request').first().json;
const c = $('Page Contract').first().json;
const a = $('Assemble Assets').first().json;
const extras = Array.isArray(r.extraTargets) ? r.extraTargets : [];
const isEnglish = l => /^english/i.test(String(l || ''));
const bundle = { finalPage: a.finalPage, metaDescription: a.metaDescription, faq: a.faq || [], eeat: a.eeat || null, monitoringPrompts: a.monitoringPrompts || [], faqCount: a.faqCount, slug: a.slug, slugPath: a.slugPath };
const common = {
  inline: false,
  taskId: r.taskId, brandId: r.brandId, userId: r.userId, callbackUrl: r.callbackUrl,
  sourceTaskId: r.taskId, sourceExecutionId: String($execution.id),
  pageType: r.pageType, pageLabel: c.label || (c.spec && c.spec.label) || r.pageType, searchIntent: r.searchIntent,
  schemaTypes: c.schemaTypes || (c.spec && c.spec.schemaTypes) || '', faqCount: c.faqCount, typeId: c.spec && c.spec.typeId,
  sourceLanguage: 'English', inputsLanguage: r.sourceLanguage,
  clientName: r.clientName, clientDescription: r.clientDescription, siteRootUrl: r.siteRootUrl, slugPath: r.slugPath, ctaUrl: r.ctaUrl, ctaRules: r.ctaRules,
  author: r.author, reviewer: r.reviewer,
  en: { h1: r.h1, h2Outline: r.h2Outline, coreKeyword: r.coreKeyword, secondaryKeywords: r.secondaryKeywords, aiPrompts: r.aiPrompts },
  bundle
};
return extras.filter(L => !isEnglish(L)).map((L, i) => {
  const loc = Object.assign({}, (r.localized && r.localized[L]) || {});
  if (L === r.sourceLanguage && r.inputsOriginal) Object.assign(loc, r.inputsOriginal, (r.localized && r.localized[L]) || {});
  // The request's slug belongs to the page in the inputs' language; other languages get the app's localized slug or one from the translator.
  if (L === r.sourceLanguage && !loc.slugPath) loc.slugPath = r.slugPath;
  const p = Object.assign({}, common, { language: L, localized: loc, delaySeconds: Math.floor(i / 5) * 240 });
  return { json: { payload: JSON.stringify(p), language: L, delaySeconds: p.delaySeconds } };
});
