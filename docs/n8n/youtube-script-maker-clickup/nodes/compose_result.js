// Compose Result: turn the final script + metadata into one or more ClickUp chat messages (40k char limit per message).
const r = $('Final Assembly').first().json;
const intake = $('Intake').first().json;
let thumbs = null;
try { thumbs = $('Thumbnail Record Builder').first().json; } catch (e) { thumbs = null; }
const MAX = 38000;
const fmtMin = m => (Number(m) < 1 ? Math.round(Number(m) * 60) + ' s' : (Math.round(Number(m) * 10) / 10) + ' min');

const lines = [];
lines.push('🤖 ✅ **Script ready: ' + String(r.title || '').trim() + '**');
lines.push('Requested by **' + (intake.requester_name || 'unknown user') + '** · ' + r.videoTypeLabel + ' · ' + r.language + ' · ' + r.wordCount + ' words (about ' + fmtMin(r.estimatedDurationMinutes) + ', requested ' + fmtMin(r.requestedMinutes) + ') · research ' + (r.researchEnabled ? 'on' : 'off'));
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
const messages = parts.map((p, i) => {
  let content = p;
  if (parts.length > 1) {
    content = (i === 0 ? p.replace(/^🤖 ✅ /, '🤖 ✅ (part 1 of ' + parts.length + ') ') : '🤖 **(part ' + (i + 1) + ' of ' + parts.length + ')**\n\n' + p);
  }
  return { json: { part: i + 1, parts: parts.length, body: { type: 'message', content_format: 'text/md', content, followers: i === 0 ? followers : [] } } };
});

// Thumbnail options as a separate message so the editor can compare them.
const tl = [];
tl.push('🤖 🖼️ **Thumbnail options: ' + String(r.title || '').trim() + '**');
if (thumbs && Array.isArray(thumbs.thumbnails) && thumbs.thumbnails.length) {
  tl.push('Four different concepts, ' + (thumbs.thumbnailSpec || 'YouTube size') + '. Pick one as is, or use a text-free option as a base for your own text overlay.');
  const label = { headline: 'Headline text', human: 'Human reaction (no text)', object: 'Object hero (no text)', format: 'Format-specific' };
  for (const t of thumbs.thumbnails) {
    tl.push('');
    tl.push('**Option ' + t.option + ' · ' + (label[t.archetype] || t.archetype) + ' · ' + t.style + '**' + (t.text ? ' · text: "' + t.text + '"' : ''));
    if (t.rationale) tl.push(t.rationale);
    if (t.ok) {
      tl.push('![Option ' + t.option + '](' + t.url + ')');
      tl.push(t.url);
    } else {
      tl.push('Generation failed for this option' + (t.error ? ': ' + t.error : '') + '. Post the request again if you need a fourth choice.');
    }
  }
} else {
  tl.push('Thumbnail generation did not run for this request (no thumbnails were produced). The script above is complete; post the request again if you need thumbnails.');
}
messages.push({ json: { part: 'thumbnails', parts: parts.length, body: { type: 'message', content_format: 'text/md', content: tl.join('\n'), followers: [] } } });
return messages;
