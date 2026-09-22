const r = $('Parse Request').first().json;
const c = $('Page Contract').first().json;
const f = $input.first().json;
let st = {}; try { st = $('Stabilizer').first().json; } catch (e) { st = {}; }
// Page statistics for the callback, counted on the final page text (there is no validator step).
const md = String(f.finalPage || '');
const body = md.replace(/^#{1,6}\s+.*$/gm, ' ').replace(/^\|.*\|\s*$/gm, ' ').replace(/\[([^\]]+)\]\([^\)]*\)/g, '$1');
const totalWords = body.split(/\s+/).filter(Boolean).length;
const h2Count = (md.match(/^##\s+\S/gm) || []).length;
const h3Count = (md.match(/^###\s+\S/gm) || []).length;
const tableRows = (md.match(/^\|.*\|\s*$/gm) || []).filter(l => !/^\|\s*:?-{2,}/.test(l)).length;
const urls = (md.match(/\]\((https?:[^\)\s]+)\)/g) || []).map(x => x.slice(2, -1));
const nu = u => String(u || '').replace(/\/$/, '').toLowerCase();
const host = u => { const m = nu(u).match(/^https?:\/\/(?:www\.)?([^\/]+)/); return m ? m[1] : ''; };
const rootHost = host(r.siteRootUrl); const cta = nu(r.ctaUrl); const ctaHost = host(r.ctaUrl);
const ctaLinks = cta ? urls.filter(u => nu(u) === cta).length : 0;
const externalCitations = new Set(urls.filter(u => { const h = host(u); return h && h !== rootHost && h !== ctaHost; })).size;
const esc = t => String(t || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const count = t => t ? (md.match(new RegExp(esc(t), 'gi')) || []).length : 0;
const keywordLocal = r.coreKeywordLocal || (r.original && r.original.coreKeyword) || r.coreKeyword;
const clientLocal = r.clientNameLocal || (r.original && r.original.clientName) || r.clientName;
return [{ json: {
  taskId: r.taskId, brandId: r.brandId, userId: r.userId, n8nExecutionId: String($execution.id),
  status: 'ok', pageType: r.pageType, language: r.targetLanguage,
  slug: f.slug, slugPath: f.slugPath, canonicalUrl: f.canonicalUrl,
  metaDescription: f.metaDescription,
  articleTextMd: f.finalPage,
  faq: c.faqCount > 0 ? (f.faq || []) : undefined,
  monitoringPrompts: f.monitoringPrompts || [],
  author: r.authorLocal || r.author, reviewer: r.reviewerLocal || r.reviewer || null,
  eeat: f.eeat || null,
  jsonLd: f.jsonLd, schemaTypes: f.schemaTypes, schemaWarnings: f.schemaWarnings,
  quality: { totalWords, h2Count, h3Count, tableRows, ctaLinks, externalCitations, coreKeywordMentions: count(keywordLocal), clientNameMentions: count(clientLocal), patternsFixed: { ingPileups: (st.ingPileups || []).length, parallelSeries: (st.parallelSeries || []).length, hedging: (st.hedging || []).length, negativeParallelisms: (st.negativeParallelisms || []).length, tailingNegations: (st.tailingNegations || []).length, aiPhrasing: (st.aiPhrasing || []).length } },
  generatedAt: new Date().toISOString()
} }];
