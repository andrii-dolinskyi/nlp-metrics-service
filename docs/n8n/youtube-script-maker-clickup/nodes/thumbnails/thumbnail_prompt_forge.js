// Thumbnail Prompt Forge: turn the art director's four concepts into gpt-image-1 prompts.
// Options 2 and 3 use the presenter reference photo (image edit endpoint); options 1 and 4 use plain generation.
const fa = $('Final Assembly').first().json;
const intake = $('Intake').first().json;
const isShorts = fa.videoType === 'shorts';

const dir = ($input.first().json || {}).output || {};
let options = Array.isArray(dir.options) ? dir.options.slice(0, 4) : [];

const topic = String(intake.contentIdea || fa.title || 'the topic of the video').replace(/\s+/g, ' ').slice(0, 160);
const titleWords = String(fa.title || intake.contentIdea || '').split(/[:.!?]/)[0].replace(/[^\p{L}\p{N}\s'-]/gu, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
const year = String(new Date().getFullYear());
const titleShort1 = (titleWords.slice(0, 5).join(' ') || 'WATCH THIS').toUpperCase();
const titleShort2 = (titleWords.slice(0, 4).join(' ') + '?').toUpperCase();
const titleShort3 = (titleWords.slice(0, 3).join(' ') + ' ' + year).toUpperCase();

const ARCHETYPES = ['headline', 'ceo', 'gta', 'format'];
const FALLBACKS = [
  { style: 'bold flat vector illustration', text: titleShort1, subject: 'a simplified, colourful depiction of the main subject of: ' + topic + ', fully inside the frame with margin around it', composition: 'subject in the upper two thirds, text in white capitals on a solid teal banner across the bottom', background: 'solid sky blue', colours: 'sky blue background, teal accent', mood: 'bold, clear', relation: topic, posture: '' },
  { style: 'bright photorealistic photograph', text: titleShort2, subject: 'the presenter from the reference photo next to a screen showing the subject of: ' + topic, composition: 'presenter on the left half from the waist up, the screen or object on the right half, text in white capitals on a solid soft-purple banner across the bottom', background: 'bright mint studio wall', colours: 'mint background, soft purple accent', mood: 'curious, energetic', relation: topic, posture: 'pointing at the screen with one hand, eyebrows raised, wearing a light knit cardigan over a white t-shirt' },
  { style: 'GTA 6 style', text: '', subject: 'the presenter from the reference photo in a scene built from the subject of: ' + topic, composition: 'presenter on the left third, the subject filling the right two thirds', background: 'Vice City sunset sky in peach, lavender and teal', colours: 'peach and lavender background, teal accent', mood: 'cool, confident', relation: topic, posture: 'leaning casually with arms crossed and a slight smirk, wearing a pastel shirt' },
  { style: 'isometric illustration', text: titleShort3, subject: 'a bright scene showing the real-world setting and the objects of: ' + topic, composition: 'main element in the centre, text in yellow capitals on a solid teal banner across the top', background: 'light lavender', colours: 'lavender background, soft orange accent', mood: 'playful, energetic', relation: topic, posture: '' }
];
for (let i = 0; i < 4; i++) {
  if (!options[i] || typeof options[i] !== 'object') options[i] = { ...FALLBACKS[i], rationale: 'fallback' };
}

const tidy = (v, fb) => {
  const s = String(v == null ? '' : v).trim().replace(/\s+/g, ' ').replace(/[.\s]+$/, '');
  return s.length >= 3 ? s : fb;
};
const cleanText = t => String(t || '').replace(/["“”]/g, '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 6).join(' ');

const COMMON = 'This image is a YouTube video thumbnail and must read instantly at a small size: one dominant focal subject filling 50 to 70 percent of the frame, bright saturated but soft colours with strong contrast, even bright lighting, crisp sharp focus on the subject, no clutter, no small details, no busy patterns. The whole image must be bright, colourful and friendly, never dark, dim, moody or black, and never use red. The subject must be immediately recognisable as the topic of the video. Professional, premium, polished look, the kind of thumbnail a top channel would publish. No watermarks, no attempt to copy trademarked logos exactly.';
const SAFE_LANDSCAPE = 'Framing: every icon, face, object and letter sits fully inside the picture with a clear empty margin of at least 8 percent of the height above and below it and 6 percent of the width on the left and right. Nothing touches or is cut by any edge, because the picture is cropped to 16:9 after generation.';
const SAFE_PORTRAIT = 'Vertical composition for a YouTube Short. Framing: leave a clear empty margin of at least 12 percent of the width on the left and on the right and keep all text, faces and objects inside the middle 60 percent of the height, because the top and bottom are covered by the Shorts interface. Nothing touches or is cut by any edge.';
const NO_TEXT = 'ABSOLUTELY NO TEXT anywhere in the image: no letters, words, numbers, captions, labels, signage, logos or interface text, and any screen, sign or surface in frame is blank or shows only abstract blocks.';
const withText = t => 'Include the exact text "' + t + '" as the ONLY text in the image, spelled exactly like that, in very large, bold, clean geometric sans-serif capital letters, white or butter yellow, on a solid banner block in one soft saturated colour (teal, sky blue, soft purple, deep mint or soft orange, never red) that spans most of the frame width along the bottom or the top of the image, like a classic YouTube thumbnail banner. The letters are perfectly straight, fully visible, evenly spaced, not cut by any edge, and the banner never covers the focal subject. No other letters, numbers or words anywhere else in the image.';
const CEO_PHOTO = 'The person in the image is the man from the attached reference photo: keep his face, beard, hairstyle, skin tone and eye colour exactly recognisable, as a photorealistic likeness, adult, well groomed. Do not add any other people. Change only his posture, expression, hands, clothing and surroundings as described.';
const CEO_GTA = 'The person in the image is the man from the attached reference photo, drawn as a GTA 6 style character: bold cel-shaded digital painting, thick clean outlines, stylised but with his face, beard and hair clearly recognisable. Sun-drenched Vice City palette (teal, peach, lavender, warm orange gradient sky, golden-hour light). Do not add any other people.';

const stamp = Date.now();
const safeId = String(intake.message_id || stamp).replace(/[^a-z0-9]/gi, '');
const used = new Set();
const pickText = (want, alts) => {
  let t = cleanText(want);
  for (const a of [t, ...alts]) {
    const c = cleanText(a);
    if (c && !used.has(c.toUpperCase())) { used.add(c.toUpperCase()); return c; }
  }
  return t;
};

return options.map((o, i) => {
  const fb = FALLBACKS[i];
  const archetype = ARCHETYPES[i];
  const usesCeo = archetype === 'ceo' || archetype === 'gta';
  let text = '';
  if (archetype === 'headline') text = pickText(o.text || fb.text, [titleShort1, titleShort2, titleShort3]);
  if (archetype === 'ceo') text = pickText(o.text || fb.text, [titleShort2, titleShort3, titleShort1]);
  if (archetype === 'format') text = pickText(o.text || fb.text, [titleShort3, titleShort2, titleShort1]);
  const style = archetype === 'gta' ? 'GTA 6 style' : tidy(o.style, fb.style);
  const subject = tidy(o.subject, fb.subject);
  const composition = tidy(o.composition, fb.composition);
  const background = tidy(o.background, fb.background);
  const colours = tidy(o.colours, fb.colours);
  const mood = tidy(o.mood, fb.mood);
  const posture = usesCeo ? tidy(o.posture, fb.posture) : '';

  const prompt = [
    'Style: ' + style + '.',
    'Subject: ' + subject + '.',
    posture ? 'Posture, expression and clothing of the presenter: ' + posture + '.' : '',
    'Composition: ' + composition + '.',
    'Background: ' + background + '.',
    'Colours: ' + colours + '.',
    'Mood: ' + mood + '.',
    (o.relation ? 'Relation to the video: ' + tidy(o.relation, '') + '.' : ''),
    archetype === 'ceo' ? CEO_PHOTO : (archetype === 'gta' ? CEO_GTA : ''),
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
    usesCeo,
    posture,
    rationale: String(o.rationale || '').trim(),
    imagePrompt: prompt,
    imageSize: isShorts ? '1024x1536' : '1536x1024',
    isShorts,
    objectKey: 'yt-thumb-' + safeId + '-' + stamp + '-' + (i + 1)
  } };
});
