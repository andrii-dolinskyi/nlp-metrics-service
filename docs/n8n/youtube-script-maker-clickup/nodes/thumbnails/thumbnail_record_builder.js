// Thumbnail Record Builder: one summary item with the four options and their YouTube-sized Cloudinary URLs.
const items = $('Merge Thumbnails').all().map(i => i.json);
const uploads = $input.all().map(i => i.json || {});
const isShorts = items.length ? Boolean(items[0].isShorts) : false;

// Delivery transform per option (the generator returns 3:2 or 2:3, YouTube wants 16:9 or 9:16):
// - no text on the image (GTA option): smart crop, nothing important is lost and there are no bars
// - photo with a title banner (Anton option): pad and let Cloudinary generative fill extend the photo, so the banner is never cut
// - illustration with a title banner: pad with the predominant colour so icons and text are never cut
const transformFor = (style, hasText) => {
  const dims = isShorts ? 'w_1080,h_1920' : 'w_1280,h_720';
  const tail = ',q_auto:good,f_jpg';
  if (!hasText) return 'c_fill,g_auto,' + dims + tail;
  const isPhoto = /photo/i.test(String(style || ''));
  return 'c_pad,' + (isPhoto ? 'b_gen_fill' : 'b_auto') + ',' + dims + tail;
};
const youtubeUrl = (secureUrl, style, hasText) => {
  const s = String(secureUrl || '');
  const marker = '/image/upload/';
  const at = s.indexOf(marker);
  if (at === -1) return s;
  return s.slice(0, at + marker.length) + transformFor(style, hasText) + '/' + s.slice(at + marker.length);
};

const thumbnails = items.map((it, i) => {
  const up = uploads[i] || {};
  const original = it.imageGenerated && !up.error ? String(up.secure_url || up.url || '') : '';
  const url = original ? youtubeUrl(original, it.style, Boolean(it.hasText)) : '';
  let error = '';
  if (!it.imageGenerated) error = it.imageError || 'image generation failed';
  else if (!original) error = up.error ? (typeof up.error === 'string' ? up.error : (up.error.message || 'upload failed')) : 'upload returned no URL';
  return { option: it.option, archetype: it.archetype, style: it.style, text: it.text || '', posture: it.posture || '', rationale: it.rationale || '', ok: Boolean(url), url, originalUrl: original, publicId: up.public_id || '', error: String(error).slice(0, 300) };
}).sort((a, b) => Number(a.option) - Number(b.option));

return [{ json: {
  thumbnails,
  thumbnailCount: thumbnails.filter(t => t.ok).length,
  thumbnailSpec: isShorts ? '1080x1920 px, 9:16, JPG (YouTube Shorts)' : '1280x720 px, 16:9, JPG (YouTube standard)'
} }];
