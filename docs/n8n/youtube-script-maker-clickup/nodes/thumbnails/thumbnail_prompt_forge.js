// Thumbnail Prompt Forge: turn the art director's four concepts into gpt-image-1 prompts.
const fa = $('Final Assembly').first().json;
const intake = $('Intake').first().json;
const isShorts = fa.videoType === 'shorts';

const dir = ($input.first().json || {}).output || {};
let options = Array.isArray(dir.options) ? dir.options.slice(0, 4) : [];

const ideas = Array.isArray(fa.thumbnailIdeas) ? fa.thumbnailIdeas.map(t => String(t || '').trim()).filter(Boolean) : [];
const topic = String(intake.contentIdea || fa.title || 'the topic of the video').replace(/\s+/g, ' ').slice(0, 160);
const titleWords = String(fa.title || intake.contentIdea || '').split(/[:.!?]/)[0].replace(/[^\p{L}\p{N}\s'-]/gu, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
const titleShort1 = titleWords.slice(0, 5).join(' ').toUpperCase() || 'WATCH THIS';
const titleShort2 = (titleWords.length > 5 ? titleWords.slice(0, 3).join(' ') + ' ' + (new Date()).getFullYear() : titleWords.slice(0, 5).join(' ') + '?').toUpperCase();
const FALLBACKS = [
  { option: 1, archetype: 'headline', style: 'bold flat vector illustration', text: titleShort1, subject: 'a simplified, colourful depiction of the main subject of: ' + topic, composition: 'subject in the upper two thirds, text in white capitals on a solid red banner across the bottom', background: 'solid electric blue', colours: 'electric blue background, sunny yellow accent', mood: 'bold, clear', relation: topic, rationale: 'fallback' },
  { option: 2, archetype: 'human', style: 'bright photorealistic photograph', text: '', subject: 'a person in their thirties in casual smart clothing reacting with visible surprise to a screen showing the subject of: ' + topic, composition: 'person on the left half, the screen or object on the right half', background: 'bright white modern workspace', colours: 'white background, coral accent', mood: 'surprised, curious', relation: topic, rationale: 'fallback' },
  { option: 3, archetype: 'object', style: 'clean 3D render with soft studio lighting', text: '', subject: 'a colourful hero close-up of the central object or interface of: ' + topic, composition: 'centred, filling two thirds of the frame', background: 'smooth mint gradient', colours: 'mint background, purple accent', mood: 'clean, premium', relation: topic, rationale: 'fallback' },
  { option: 4, archetype: 'format', style: 'isometric illustration', text: titleShort2, subject: 'a bright scene showing the real-world setting and the objects of: ' + topic, composition: 'main element in the centre, text in yellow capitals on a solid purple banner across the top', background: 'light lavender', colours: 'lavender background, orange accent', mood: 'playful, energetic', relation: topic, rationale: 'fallback' }
];
for (let i = 0; i < 4; i++) {
  if (!options[i] || typeof options[i] !== 'object') options[i] = FALLBACKS[i];
}

const tidy = (v, fb) => {
  const s = String(v == null ? '' : v).trim().replace(/\s+/g, ' ').replace(/[.\s]+$/, '');
  return s.length >= 3 ? s : fb;
};
const cleanText = t => String(t || '').replace(/["“”]/g, '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 6).join(' ');

const COMMON = 'This image is a YouTube video thumbnail and must read instantly at a small size: one dominant focal subject filling 50 to 70 percent of the frame, bright saturated colours with strong contrast and one vivid accent colour, even bright lighting, crisp sharp focus on the subject, no clutter, no small details, no busy patterns. The whole image must be bright, colourful and energetic, never dark, dim, moody or black. The subject must be immediately recognisable as the topic of the video. Professional, premium, polished look, the kind of thumbnail a top channel would publish. No watermarks, no recognisable real people, no attempt to copy trademarked logos exactly.';
const SAFE_LANDSCAPE = 'Safe area: keep all letters at least 8 percent of the height away from the top and bottom edges and at least 6 percent of the width away from the left and right edges, so nothing is cut when the picture is cropped to 16:9 after generation.';
const SAFE_PORTRAIT = 'Vertical composition for a YouTube Short. Safe area: leave a clear empty margin of at least 12 percent of the width on the left and on the right and keep all text and the focal subject inside the middle 60 percent of the height, because the top and bottom are covered by the Shorts interface. Text must be smaller than the frame width and never touch or be cut by any edge.';
const NO_TEXT = 'ABSOLUTELY NO TEXT anywhere in the image: no letters, words, numbers, captions, labels, signage, logos or interface text, and any screen, sign or surface in frame is blank or out of focus.';
const withText = t => 'Include the exact text "' + t + '" as the ONLY text in the image, spelled exactly like that, in very large, bold, clean geometric sans-serif capital letters, white or bright yellow, on a solid banner block in one saturated colour that spans most of the frame width along the bottom or the top of the image, like a classic YouTube thumbnail banner. The letters are perfectly straight, fully visible, evenly spaced, not cut by any edge, and the banner never covers the focal subject. No other letters, numbers or words anywhere else in the image.';

const stamp = Date.now();
const safeId = String(intake.message_id || stamp).replace(/[^a-z0-9]/gi, '');

return options.map((o, i) => {
  const fb = FALLBACKS[i];
  const archetype = ['headline', 'human', 'object', 'format'][i];
  let text = archetype === 'human' || archetype === 'object' ? '' : cleanText(o.text);
  if (archetype === 'headline' && !text) text = cleanText(fb.text);
  if (archetype === 'format' && (!text || (options[0] && cleanText(options[0].text).toUpperCase() === text.toUpperCase()))) text = cleanText(titleShort2.toUpperCase() === cleanText(options[0] && options[0].text).toUpperCase() ? titleShort1 + '?' : titleShort2);
  const style = tidy(o.style, fb.style);
  const subject = tidy(o.subject, fb.subject);
  const composition = tidy(o.composition, fb.composition);
  const background = tidy(o.background, fb.background);
  const colours = tidy(o.colours, fb.colours);
  const mood = tidy(o.mood, fb.mood);

  const prompt = [
    'Style: ' + style + '.',
    'Subject: ' + subject + '.',
    'Composition: ' + composition + '.',
    'Background: ' + background + '.',
    'Colours: ' + colours + '.',
    'Mood: ' + mood + '.',
    (o.relation ? 'Relation to the video: ' + tidy(o.relation, '') + '.' : ''),
    text ? withText(text) : NO_TEXT,
    COMMON,
    isShorts ? SAFE_PORTRAIT : SAFE_LANDSCAPE
  ].filter(Boolean).join(' ');

  return { json: {
    option: i + 1,
    archetype,
    style,
    text,
    hasText: Boolean(text),
    rationale: String(o.rationale || '').trim(),
    imagePrompt: prompt,
    imageSize: isShorts ? '1024x1536' : '1536x1024',
    isShorts,
    objectKey: 'yt-thumb-' + safeId + '-' + stamp + '-' + (i + 1)
  } };
});
