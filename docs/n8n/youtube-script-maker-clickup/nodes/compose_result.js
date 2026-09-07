// Compose Result: turn the final script + metadata into one or more ClickUp chat messages (40k char limit per message).
const r = $input.first().json;
const intake = $('Intake').first().json;
const MAX = 38000;

const lines = [];
lines.push('🤖 ✅ **Script ready: ' + String(r.title || '').trim() + '**');
lines.push('Requested by **' + (intake.requester_name || 'unknown user') + '** · ' + r.videoTypeLabel + ' · ' + r.language + ' · ' + r.wordCount + ' words (about ' + r.estimatedDurationMinutes + ' min, requested ' + r.requestedMinutes + ' min) · research ' + (r.researchEnabled ? 'on' : 'off'));
for (const n of (intake.notes || [])) lines.push('ℹ️ ' + n);
lines.push('');
lines.push('---');
lines.push('');
lines.push(String(r.script || '').trim());
lines.push('');
lines.push('---');
lines.push('');
lines.push('**📦 YouTube metadata**');
lines.push('');
lines.push('**Title:** ' + String(r.title || '').trim());
lines.push('');
lines.push('**Description:**');
lines.push(String(r.description || '').trim());
if (Array.isArray(r.tags) && r.tags.length) {
  lines.push('');
  lines.push('**Tags:** ' + r.tags.join(', '));
}
if (Array.isArray(r.thumbnailIdeas) && r.thumbnailIdeas.length) {
  lines.push('');
  lines.push('**Thumbnail text ideas:**');
  for (const t of r.thumbnailIdeas) lines.push('- ' + t);
}
if (Array.isArray(r.sources) && r.sources.length) {
  lines.push('');
  lines.push('**Sources:**');
  for (const s of r.sources) {
    const label = s.title ? s.title : s.url;
    lines.push('- [' + label + '](' + s.url + ')' + (s.usedFor ? ': ' + s.usedFor : ''));
  }
}
const full = lines.join('\n');

const parts = [];
let rest = full;
while (rest.length > MAX) {
  let cut = rest.lastIndexOf('\n\n', MAX);
  if (cut < MAX * 0.5) cut = rest.lastIndexOf('\n', MAX);
  if (cut < MAX * 0.5) cut = MAX;
  parts.push(rest.slice(0, cut));
  rest = rest.slice(cut).replace(/^\n+/, '');
}
parts.push(rest);

const followers = /^\d+$/.test(String(intake.requester_id || '')) ? [String(intake.requester_id)] : [];
return parts.map((p, i) => {
  let content = p;
  if (parts.length > 1) {
    content = (i === 0 ? p.replace(/^🤖 ✅ /, '🤖 ✅ (part 1 of ' + parts.length + ') ') : '🤖 **(part ' + (i + 1) + ' of ' + parts.length + ')**\n\n' + p);
  }
  return { json: { part: i + 1, parts: parts.length, body: { type: 'message', content_format: 'text/md', content, followers: i === 0 ? followers : [] } } };
});
