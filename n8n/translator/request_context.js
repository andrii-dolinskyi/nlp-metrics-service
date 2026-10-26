// One shape for every way a translation is requested: the Execute Workflow trigger from Content Maker 6.0 (payload
// as a JSON string), or the cm6-translate webhook (a full payload, a restart by translator execution id, or a new
// language for a finished Content Maker execution). Fetch Execution reads the referenced execution when needed.
const j = $input.first().json || {};
const s = v => (v === undefined || v === null) ? '' : String(v).trim();
let ctx = null;
if (typeof j.payload === 'string' && j.payload.trim()) ctx = JSON.parse(j.payload);
else if (j.payload && typeof j.payload === 'object') ctx = j.payload;
else if (j.body && typeof j.body === 'object') ctx = (typeof j.body.payload === 'string' && j.body.payload.trim()) ? JSON.parse(j.body.payload) : j.body;
else ctx = j;
ctx = Object.assign({}, ctx);
ctx.inline = ctx.inline === true;
ctx.delaySeconds = Math.max(0, Number(ctx.delaySeconds) || 0);
ctx.callbackUrl = s(ctx.callback_url || ctx.callbackUrl).replace(/\/$/, '');
ctx.language = s(ctx.language || ctx.targetLanguage);
ctx.retryExecutionId = s(ctx.retryExecutionId);
ctx.sourceExecutionId = s(ctx.sourceExecutionId);
// A webhook call that only names an execution: the context is rebuilt from that execution by Retry Context.
ctx.fetchExecutionId = ctx.retryExecutionId || ((!ctx.bundle || !ctx.bundle.finalPage) ? ctx.sourceExecutionId : '');
if (!ctx.fetchExecutionId) {
  if (!ctx.language) throw new Error('language is required');
  if (!ctx.bundle || !ctx.bundle.finalPage) throw new Error('bundle.finalPage (the English page) is required, or retryExecutionId / sourceExecutionId to load it from an execution');
  if (!ctx.inline && !ctx.callbackUrl) throw new Error('callbackUrl is required');
}
return [{ json: ctx }];
