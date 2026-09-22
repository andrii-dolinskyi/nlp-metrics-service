const exec = $('Fetch Execution').first().json;
const rd = (exec.data && exec.data.resultData && exec.data.resultData.runData) || {};
const first = (n) => { try { return rd[n][0].data.main[0][0].json; } catch (e) { return null; } };
// The evaluator scores the English page as the Style Updater returned it (parsed by Extract Updated),
// never the translated callback text, so the metrics and rules apply to what the writer and editor wrote.
const updated = first('Extract Updated');
const payload = first('Build Payload');
const req = first('Parse Request');
const finalArticle = (updated && updated.page) || (payload && payload.articleTextMd) || '';
if (!finalArticle) throw new Error('No Extract Updated or Build Payload output in execution ' + exec.id);
const totalWords = String(finalArticle).split(/\s+/).filter(w => w.length > 0).length;
return [{ json: { finalArticle, totalWords, primaryKeyword: (req && req.coreKeyword) || '', secondaryKeywords: (req && req.secondaryKeywords) || [], clientName: (req && req.clientName) || '', pageType: (payload && payload.pageType) || (req && req.pageType) || '', articleTitle: (req && req.h1) || '', executionId: String(exec.id), language: (payload && payload.language) || (req && req.targetLanguage) || '' } }];
