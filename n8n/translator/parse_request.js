// The request item for the delivery chain (Clean Text, Build JSON-LD, Build Payload, Send Page), in the same shape
// Content Maker 6.0's Parse Request produces, so those nodes run unchanged here. The page's own wording comes from
// Extract Translation: the app's localized values where supplied, the model's otherwise.
const ctx = $('Context').first().json;
const t = $('Extract Translation').first().json;
const loc = t.localized || {};
const s = v => (v === undefined || v === null) ? '' : String(v).trim();
const arr = v => Array.isArray(v) ? v.map(x => typeof x === 'string' ? x.trim() : x).filter(Boolean) : [];
const obj = v => (v && typeof v === 'object' && !Array.isArray(v)) ? v : {};
const person = (v, kind) => {
  const o = obj(v); if (!o.name) return null;
  const same = arr(o.sameAs);
  return { name: s(o.name), jobTitle: s(o.jobTitle), url: s(o.url), sameAs: same, image: s(o.image), description: s(o.description), credentials: s(o.credentials), kind };
};
const en = ctx.en || {};
let slugPath = s(loc.slugPath) || s(t.slugPath) || s(ctx.slugPath);
if (slugPath && slugPath.charAt(0) !== '/') slugPath = '/' + slugPath;
const out = {
  taskId: s(ctx.taskId), brandId: s(ctx.brandId), userId: s(ctx.userId), callbackUrl: s(ctx.callbackUrl).replace(/\/$/, ''),
  pageType: s(ctx.pageType), searchIntent: s(ctx.searchIntent),
  sourceLanguage: 'English', inputsLanguage: s(ctx.inputsLanguage), targetLanguage: s(ctx.language), targetLanguages: [s(ctx.language)], extraTargets: [],
  translationOf: s(ctx.sourceTaskId || ctx.taskId), sourceExecutionId: s(ctx.sourceExecutionId), retryOf: s(ctx.retryOf),
  clientName: s(ctx.clientName), clientDescription: s(ctx.clientDescription),
  h1: s(en.h1), slugPath, siteRootUrl: s(ctx.siteRootUrl).replace(/\/$/, ''),
  coreKeyword: s(en.coreKeyword), secondaryKeywords: arr(en.secondaryKeywords), h2Outline: arr(en.h2Outline), aiPrompts: arr(en.aiPrompts),
  ctaRules: s(ctx.ctaRules), ctaUrl: s(ctx.ctaUrl), facts: {},
  author: person(ctx.author, 'author') || { name: s(ctx.clientName), kind: 'author' }, reviewer: person(ctx.reviewer, 'reviewer'),
  original: { h1: s(loc.h1), h2Outline: arr(loc.h2Outline), coreKeyword: s(loc.coreKeyword), secondaryKeywords: arr(loc.secondaryKeywords), clientName: s(loc.clientName), slugPath, aiPrompts: arr(loc.aiPrompts) },
  localized: {}, inputsOriginal: {}, isLang: true
};
out.h1Local = out.original.h1 || out.h1;
out.coreKeywordLocal = out.original.coreKeyword || out.coreKeyword;
out.clientNameLocal = out.original.clientName || out.clientName;
out.authorLocal = person(Object.assign({}, obj(ctx.author), obj(loc.author)), 'author') || out.author;
out.reviewerLocal = person(Object.assign({}, obj(ctx.reviewer), obj(loc.reviewer)), 'reviewer');
if (!out.slugPath) out.slugPath = '/' + s(t.slug) + '/';
return [{ json: out }];
