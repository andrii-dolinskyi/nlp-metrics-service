// Thumbnail Bytes Materializer: pair image API responses with the prompts. Failed options pass through without binary.
const prompts = $('Thumbnail Prompt Forge').all().map(i => i.json);
const responses = $input.all().map(i => i.json || {});
return prompts.map((p, i) => {
  const res = responses[i] || {};
  const first = Array.isArray(res.data) ? res.data[0] : null;
  const b64 = first && first.b64_json;
  if (!b64) {
    const err = res.error ? (typeof res.error === 'string' ? res.error : (res.error.message || JSON.stringify(res.error))) : 'image API returned no image';
    return { json: { ...p, imageGenerated: false, imageError: String(err).slice(0, 300) } };
  }
  return {
    json: { ...p, imageGenerated: true },
    binary: { data: { data: b64, mimeType: 'image/jpeg', fileName: p.objectKey + '.jpg' } }
  };
});
