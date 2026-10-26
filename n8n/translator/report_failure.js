// Page Translator failed on both models. Inline (called by Content Maker 6.0 for its primary page): the error goes up
// to the parent execution and its error workflow. Otherwise the app gets a status error callback with this execution
// id, which it can send back to the cm6-translate webhook as retryExecutionId to run the translation again.
const ctx = $('Context').first().json;
const j = $input.first().json || {};
const reason = String((j.error && (j.error.message || j.error)) || j.message || 'Page Translator failed').slice(0, 500);
if (ctx.inline) throw new Error('Translation into ' + ctx.language + ' failed: ' + reason);
return [{ json: {
  status: 'error', reason, taskId: ctx.taskId, brandId: ctx.brandId, userId: ctx.userId, pageType: ctx.pageType, language: ctx.language,
  sourceLanguage: 'English', translationOf: ctx.sourceTaskId || ctx.taskId, sourceExecutionId: ctx.sourceExecutionId || undefined,
  n8nExecutionId: String($execution.id), retryExecutionId: String($execution.id), callbackUrl: ctx.callbackUrl
} }];
