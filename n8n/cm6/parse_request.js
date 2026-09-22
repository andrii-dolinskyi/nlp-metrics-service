const b = $input.first().json.body || $input.first().json || {};
const s = v => (v === undefined || v === null) ? '' : String(v).trim();
const arr = v => Array.isArray(v) ? v.map(x => typeof x === 'string' ? x.trim() : x).filter(x => x !== '' && x !== null && x !== undefined) : (v ? String(v).split(',').map(x => x.trim()).filter(Boolean) : []);
const obj = v => (v && typeof v === 'object' && !Array.isArray(v)) ? v : {};
const person = (v, kind) => {
  const o = obj(v);
  const same = arr(o.sameAs).concat([o.linkedin, o.linkedinUrl, o.linkedIn, o.twitter, o.x].map(s).filter(Boolean));
  return { name: s(o.name || o.fullName), jobTitle: s(o.jobTitle || o.role || o.title || o.credentials), url: s(o.url || o.profileUrl || o.pageUrl), sameAs: same.filter((x, i) => same.indexOf(x) === i), image: s(o.image || o.photo || o.imageUrl), description: s(o.description || o.bio), credentials: s(o.credentials), kind };
};
const outlineRaw = Array.isArray(b.h2Outline) ? b.h2Outline : (b.h2Outline ? String(b.h2Outline).split('|') : []);
const h2Outline = outlineRaw.map(x => typeof x === 'string' ? x.trim() : s(x && (x.h2 || x.heading || x.title))).filter(Boolean);
const slugify = t => String(t || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
const out = {
  taskId: s(b.taskId), brandId: s(b.brandId), userId: s(b.userId),
  callbackUrl: s(b.callback_url || b.callbackUrl).replace(/\/$/, ''),
  pageType: s(b.pageType).toLowerCase(),
  targetLanguage: s(b.targetLanguage) || 'English',
  clientName: s(b.clientName), clientDescription: s(b.clientDescription || b.productDescription),
  h1: s(b.h1), slugPath: s(b.slugPath || b.slug), siteRootUrl: s(b.siteRootUrl).replace(/\/$/, ''),
  coreKeyword: s(b.coreKeyword), secondaryKeywords: arr(b.secondaryKeywords),
  h2Outline, aiPrompts: arr(b.aiPrompts),
  ctaRules: s(b.ctaRules), ctaUrl: s(b.ctaUrl), writingPreferences: s(b.writingPreferences),
  whitelistDomains: arr(b.whitelistDomains), blacklistDomains: arr(b.blacklistDomains),
  metaTitle: s(b.metaTitle), facts: obj(b.facts),
  author: person(b.author, 'author'), reviewer: person(b.reviewer, 'reviewer'),
  // Filled by Request EN when the request came in another language: the app's own wording, restored on the final page.
  original: obj(b._original), deeplTarget: s(b._deeplTarget)
};
out.h1Local = out.original.h1 || out.h1;
out.coreKeywordLocal = out.original.coreKeyword || out.coreKeyword;
out.clientNameLocal = out.original.clientName || out.clientName;
out.authorLocal = person(Object.assign({}, obj(b.author), obj(out.original.author)), 'author');
out.reviewerLocal = person(Object.assign({}, obj(b.reviewer), obj(out.original.reviewer)), 'reviewer');
if (!out.reviewerLocal.name) out.reviewerLocal = null;
const missing = ['pageType', 'clientName', 'callbackUrl', 'h1'].filter(k => !out[k]);
if (!out.h2Outline.length) missing.push('h2Outline');
if (!out.author.name) missing.push('author.name');
if (!out.reviewer.name) out.reviewer = null;
if (missing.length) throw new Error('Missing required fields: ' + missing.join(', '));
if (!out.slugPath) out.slugPath = '/' + slugify(out.original.h1 || out.h1) + '/';
if (out.slugPath.charAt(0) !== '/') out.slugPath = '/' + out.slugPath;
const lang = out.targetLanguage.toLowerCase();
out.isLang = !(lang === '' || lang.indexOf('english') === 0);
return [{ json: out }];
