// Compose Error Notice: runs after the Error Trigger. Posts to the channel only when the failed execution belonged to a channel request.
const err = $('On Error').first().json || {};
const rows = $input.all().map(i => i.json).filter(r => r && r.message_id);
if (!rows.length) return []; // not a channel request (for example the poll itself failed): stay silent, the n8n execution log has the details
const row = rows[0];
const ex = err.execution || {};
const e = ex.error || {};
const message = String(e.message || e.description || 'Unknown error').slice(0, 800);
const lines = [];
lines.push('🤖 ❌ **Script generation failed**');
lines.push('Request by **' + (row.requester || 'unknown user') + '**' + (row.summary ? ': "' + String(row.summary).slice(0, 140) + '"' : ''));
lines.push('');
lines.push('- Failed step: ' + (ex.lastNodeExecuted || 'unknown'));
lines.push('- Error: ' + message);
if (ex.url) lines.push('- Execution log: ' + ex.url);
lines.push('');
lines.push('Post the request again as a new message to retry. If it keeps failing, contact the n8n admin.');
const requesterId = (String(row.requester || '').match(/\((\d+)\)\s*$/) || [])[1];
return [{ json: {
  body: {
    type: 'message',
    content_format: 'text/md',
    content: lines.join('\n'),
    followers: requesterId ? [requesterId] : []
  }
} }];
