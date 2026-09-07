// Build Request: attach requester name and execution id to the chosen message.
const msg = $('Take Oldest').first().json;
let requesterName = '';
try {
  const teams = $('Resolve Requester').first().json.teams || [];
  for (const t of teams) {
    for (const m of (t.members || [])) {
      if (m && m.user && String(m.user.id) === String(msg.user_id)) {
        requesterName = m.user.username || m.user.email || '';
      }
    }
  }
} catch (e) {}
const excerpt = String(msg.content || '').replace(/\s+/g, ' ').trim().slice(0, 140);
return [{ json: {
  message_id: String(msg.message_id),
  requester_id: String(msg.user_id || ''),
  requester_name: requesterName || ('user ' + msg.user_id),
  content: String(msg.content || ''),
  date: msg.date,
  excerpt,
  execution_id: String($execution.id)
} }];
