const r = $('Parse Request').first().json;
const f = $input.first().json;
let v = {}; try { v = $('Validate Draft').first().json; } catch (e) { v = {}; }
let eeat = null; try { eeat = $('EEAT Analysis').first().json.output || null; } catch (e) { eeat = null; }
let st = {}; try { st = $('Stabilizer').first().json; } catch (e) { st = {}; }
return [{ json: {
  taskId: r.taskId, brandId: r.brandId, userId: r.userId, n8nExecutionId: String($execution.id),
  status: 'ok', pageType: r.pageType, language: r.targetLanguage,
  slug: f.slug, slugPath: f.slugPath, canonicalUrl: f.canonicalUrl,
  metaTitle: f.metaTitle, metaDescription: f.metaDescription,
  articleTextMd: f.finalPage,
  faq: f.faq,
  author: r.author, reviewer: r.reviewer || null,
  eeat: eeat,
  jsonLd: f.jsonLd, schemaTypes: f.schemaTypes, schemaWarnings: f.schemaWarnings,
  quality: { totalWords: v.totalWords, h2Count: v.h2Count, h3Count: v.h3Count, tableRows: v.tableRows, ctaLinks: v.ctaLinks, externalCitations: v.externalCitations, remainingIssues: v.issues || [], patternsFixed: { ingPileups: (st.ingPileups || []).length, parallelSeries: (st.parallelSeries || []).length, hedging: (st.hedging || []).length, negativeParallelisms: (st.negativeParallelisms || []).length, tailingNegations: (st.tailingNegations || []).length, aiPhrasing: (st.aiPhrasing || []).length } },
  generatedAt: new Date().toISOString()
} }];
