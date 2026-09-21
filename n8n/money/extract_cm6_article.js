const exec = $('Fetch Execution').first().json;
const rd = (exec.data && exec.data.resultData && exec.data.resultData.runData) || {};
const first = (n) => { try { return rd[n][0].data.main[0][0].json; } catch (e) { return null; } };
const payload = first('Build Payload');
const req = first('Parse Request');
if (!payload || !payload.articleTextMd) throw new Error('No Build Payload output in execution ' + exec.id);
const totalWords = String(payload.articleTextMd).split(/\s+/).filter(w => w.length > 0).length;
return [{ json: { finalArticle: payload.articleTextMd, totalWords, primaryKeyword: (req && req.coreKeyword) || '', secondaryKeywords: (req && req.secondaryKeywords) || [], clientName: (req && req.clientName) || '', pageType: payload.pageType || '', articleTitle: (req && req.h1) || '', executionId: String(exec.id), language: payload.language || '' } }];
