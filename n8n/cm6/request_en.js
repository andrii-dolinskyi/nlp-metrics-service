// Reads the Input Translator's reply: the English values go into the body the writer will see, the originals are
// kept in body._original so the final page in the source language carries the app's own H1, H2s, keyword, author
// fields and slug. A text the model skipped keeps its original value, so the run never stops here.
const raw = $('Start').first().json;
const prep = $('Prep Inputs Translation').first().json;
const body = prep.body || JSON.parse(JSON.stringify(raw.body || raw || {}));
const get = (o, path) => path.split('.').reduce((x, p) => (x === undefined || x === null) ? undefined : x[p], o);
const set = (o, path, value) => { const parts = path.split('.'); let cur = o; for (let i = 0; i < parts.length - 1; i++) { const p = parts[i]; if (cur[p] === undefined || cur[p] === null || typeof cur[p] !== 'object') cur[p] = /^\d+$/.test(parts[i + 1]) ? [] : {}; cur = cur[p]; } cur[parts[parts.length - 1]] = value; };
const j = $input.first().json;
const text = String((j && (j.output !== undefined ? j.output : (j.text !== undefined ? j.text : j))) || '');
const translations = {};
const re = /^\s*\[\[(\d+)\]\][^\n]*\n([\s\S]*?)(?=^\s*\[\[(?:\d+|END)\]\]|(?![\s\S]))/gm;
let m; while ((m = re.exec(text)) !== null) translations[m[1]] = m[2].replace(/\s+$/, '').replace(/^\s+/, '');
const original = {};
const missing = [];
(prep.paths || []).forEach((path, i) => {
  const tr = translations[String(i + 1)];
  set(original, path, get(body, path));
  if (tr && tr.trim()) set(body, path, tr.trim()); else missing.push(path);
});
if (prep.paths && prep.paths.length && Object.keys(translations).length === 0) throw new Error('Input Translator returned no translations. Reply started with: ' + text.slice(0, 200));
if (original.writingPreferences && body.writingPreferences && body.writingPreferences !== original.writingPreferences) body.writingPreferences = body.writingPreferences + ' (original wording in the page language: ' + original.writingPreferences + ')';
body._original = original;
body._sourceLanguage = prep.sourceLanguage;
body._inputsTranslation = { translated: (prep.paths || []).length - missing.length, keptOriginal: missing };
return [{ json: { headers: raw.headers, params: raw.params, query: raw.query, body } }];
