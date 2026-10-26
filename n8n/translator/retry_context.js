// Rebuilds the translation context from a fetched execution. A translator execution (retryExecutionId) gives back
// its own Request Context item; a Content Maker 6.0 execution (sourceExecutionId) gives the English assets, the parsed
// request and the page contract. Values sent on the webhook (language, callbackUrl, localized, delaySeconds) win.
const req = $('Request Context').first().json;
const ex = $input.first().json || {};
const run = (ex.data && ex.data.resultData && ex.data.resultData.runData) || {};
const first = name => { try { return run[name][run[name].length - 1].data.main[0][0].json; } catch (e) { return null; } };
const s = v => (v === undefined || v === null) ? '' : String(v).trim();
let ctx;
if (req.retryExecutionId) {
  ctx = first('Request Context');
  if (!ctx || !ctx.bundle) throw new Error('Execution ' + req.retryExecutionId + ' is not a CM6 Translator run with a request context');
  ctx = Object.assign({}, ctx);
} else {
  const r = first('Parse Request'); const c = first('Page Contract'); const a = first('Assemble Assets');
  if (!r || !c || !a) throw new Error('Execution ' + req.sourceExecutionId + ' is not a finished Content Maker 6.0 run (Parse Request, Page Contract and Assemble Assets are needed)');
  ctx = {
    taskId: r.taskId, brandId: r.brandId, userId: r.userId, callbackUrl: r.callbackUrl,
    sourceTaskId: r.taskId, sourceExecutionId: req.sourceExecutionId,
    pageType: r.pageType, pageLabel: c.label || (c.spec && c.spec.label) || r.pageType, searchIntent: r.searchIntent,
    schemaTypes: c.schemaTypes || (c.spec && c.spec.schemaTypes) || '', faqCount: c.faqCount, typeId: c.spec && c.spec.typeId,
    sourceLanguage: 'English', inputsLanguage: r.sourceLanguage || 'English',
    clientName: r.clientName, clientDescription: r.clientDescription, siteRootUrl: r.siteRootUrl, slugPath: r.slugPath, ctaUrl: r.ctaUrl, ctaRules: r.ctaRules,
    author: r.author, reviewer: r.reviewer,
    en: { h1: r.h1, h2Outline: r.h2Outline, coreKeyword: r.coreKeyword, secondaryKeywords: r.secondaryKeywords, aiPrompts: r.aiPrompts },
    localized: {},
    bundle: { finalPage: a.finalPage, metaDescription: a.metaDescription, faq: a.faq || [], eeat: a.eeat || null, monitoringPrompts: a.monitoringPrompts || [], faqCount: a.faqCount, slug: a.slug, slugPath: a.slugPath }
  };
  const L = s(req.language);
  if (!L) throw new Error('language is required when translating from a Content Maker execution');
  ctx.localized = Object.assign({}, (r.localized && r.localized[L]) || {});
  if (L === r.sourceLanguage && r.inputsOriginal) ctx.localized = Object.assign({}, r.inputsOriginal, ctx.localized);
}
['language', 'callbackUrl', 'taskId', 'brandId', 'userId', 'delaySeconds'].forEach(k => { if (s(req[k])) ctx[k] = req[k]; });
if (req.localized && typeof req.localized === 'object') ctx.localized = Object.assign({}, ctx.localized || {}, req.localized);
ctx.inline = false;
ctx.delaySeconds = Math.max(0, Number(ctx.delaySeconds) || 0);
ctx.callbackUrl = s(ctx.callbackUrl).replace(/\/$/, '');
ctx.retryOf = req.retryExecutionId || '';
ctx.fetchExecutionId = '';
if (!ctx.language) throw new Error('language is required');
if (!ctx.callbackUrl) throw new Error('callbackUrl is required');
return [{ json: ctx }];
