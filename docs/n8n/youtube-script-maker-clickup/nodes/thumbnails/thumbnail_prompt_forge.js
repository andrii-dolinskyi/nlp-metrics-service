// Thumbnail Prompt Forge: turn the art director's four concepts into gpt-image-1 prompts.
const fa = $('Final Assembly').first().json;
const intake = $('Intake').first().json;
const isShorts = fa.videoType === 'shorts';

const dir = ($input.first().json || {}).output || {};
let options = Array.isArray(dir.options) ? dir.options.slice(0, 4) : [];

const ideas = Array.isArray(fa.thumbnailIdeas) ? fa.thumbnailIdeas.map(t => String(t || '').trim()).filter(Boolean) : [];
const topic = String(intake.contentIdea || fa.title || 'the topic of the video').replace(/\s+/g, ' ').slice(0, 160);
const FALLBACKS = [
  { option: 1, archetype: 'headline', style: 'bold flat vector illustration', text: ideas[0] || 'WATCH THIS', subject: 'a single large symbolic object that stands for ' + topic, composition: 'object on the right two thirds, text in the upper left', background: 'flat, solid colour', colours: 'deep navy background, bright yellow accent', mood: 'clear, confident', rationale: 'fallback' },
  { option: 2, archetype: 'human', style: 'photorealistic photograph', text: '', subject: 'a person in their thirties in casual smart clothing reacting with visible surprise to something about ' + topic, composition: 'head and shoulders on the left third, the subject of their attention on the right', background: 'softly blurred modern workspace', colours: 'light neutral background, orange accent', mood: 'surprised, curious', rationale: 'fallback' },
  { option: 3, archetype: 'object', style: 'clean 3D render with soft studio lighting', text: '', subject: 'a hero close-up of the central object of ' + topic, composition: 'centred, filling two thirds of the frame', background: 'smooth dark gradient', colours: 'dark teal background, mint accent', mood: 'premium, focused', rationale: 'fallback' },
  { option: 4, archetype: 'format', style: 'cinematic photograph with dramatic rim light', text: ideas[1] || '', subject: 'a wide scene showing the real-world setting of ' + topic, composition: 'main element in the centre-left, generous space around it', background: 'atmospheric, simple', colours: 'black background, red accent', mood: 'dramatic, newsy', rationale: 'fallback' }
];
for (let i = 0; i < 4; i++) {
  if (!options[i] || typeof options[i] !== 'object') options[i] = FALLBACKS[i];
}

const tidy = (v, fb) => {
  const s = String(v == null ? '' : v).trim().replace(/\s+/g, ' ').replace(/[.\s]+$/, '');
  return s.length >= 3 ? s : fb;
};
const cleanText = t => String(t || '').replace(/["“”]/g, '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 4).join(' ');

const COMMON = 'This image is a YouTube video thumbnail and must read instantly at a small size: one dominant focal subject filling 50 to 70 percent of the frame, bold high-contrast colours with one vivid accent colour against a clean simpler background, strong directional lighting, crisp sharp focus on the subject, no clutter, no small details, no busy patterns. Professional, premium, polished look, the kind of thumbnail a top channel would publish. No watermarks, no logos, no real brand marks, no real company names, no recognisable real people, no borders, no frames, no split panels unless the concept asks for two sides.';
const SAFE_LANDSCAPE = 'Safe area: leave a clear empty margin of at least 10 percent of the height at the top and at the bottom and at least 6 percent of the width on the left and right. Text and the focal subject must never touch or be cut by any edge, and the bottom-right corner stays empty because YouTube overlays the video duration there. The picture is cropped to 16:9 after generation.';
const SAFE_PORTRAIT = 'Vertical composition for a YouTube Short. Safe area: leave a clear empty margin of at least 12 percent of the width on the left and on the right and keep all text and the focal subject inside the middle 60 percent of the height, because the top and bottom are covered by the Shorts interface. Text must be smaller than the frame width and never touch or be cut by any edge.';
const NO_TEXT = 'ABSOLUTELY NO TEXT anywhere in the image: no letters, words, numbers, captions, labels, signage, logos or interface text, and any screen, sign or surface in frame is blank or out of focus.';
const withText = t => 'Include the exact text "' + t + '" as the ONLY text in the image, spelled exactly like that: very large, bold, clean geometric sans-serif capital letters in a bright colour with a thick dark outline or a solid contrasting block behind them, perfectly straight and fully visible, taking about 40 percent of the frame width, never covering the focal subject. No other letters, numbers or words anywhere else in the image.';

const stamp = Date.now();
const safeId = String(intake.message_id || stamp).replace(/[^a-z0-9]/gi, '');

return options.map((o, i) => {
  const fb = FALLBACKS[i];
  const archetype = ['headline', 'human', 'object', 'format'][i];
  let text = archetype === 'human' || archetype === 'object' ? '' : cleanText(o.text);
  if (archetype === 'headline' && !text) text = cleanText(ideas[0] || fb.text);
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
    text ? withText(text) : NO_TEXT,
    COMMON,
    isShorts ? SAFE_PORTRAIT : SAFE_LANDSCAPE
  ].join(' ');

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
