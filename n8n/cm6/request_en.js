// Joins the DeepL batches: the English values go into the body the writer will see, the originals are kept
// in body._original so the final page carries the app's own H1, H2s, author fields and slug.
const raw = $('Start').first().json;
const preps = $('DeepL Prep Inputs').all().map(i => i.json);
const results = $input.all().map(i => i.json);
const body = preps[0].body || JSON.parse(JSON.stringify(raw.body || raw || {}));
const get = (o, path) => path.split('.').reduce((x, p) => (x === undefined || x === null) ? undefined : x[p], o);
const set = (o, path, value) => { const parts = path.split('.'); let cur = o; for (let i = 0; i < parts.length - 1; i++) { const p = parts[i]; if (cur[p] === undefined || cur[p] === null || typeof cur[p] !== 'object') cur[p] = /^\d+$/.test(parts[i + 1]) ? [] : {}; cur = cur[p]; } cur[parts[parts.length - 1]] = value; };
const original = {};
if (preps.length && preps[0].paths.length) {
  if (results.length !== preps.length) throw new Error('DeepL returned ' + results.length + ' batches for ' + preps.length + ' input batches');
  preps.forEach((p, k) => {
    const tr = results[k].translations || [];
    if (tr.length !== p.paths.length) throw new Error('DeepL returned ' + tr.length + ' translations but ' + p.paths.length + ' input texts were sent');
    p.paths.forEach((path, i) => { set(original, path, get(body, path)); set(body, path, String(tr[i].text || '').trim() || get(body, path)); });
  });
}
body._original = original;
body._deeplTarget = preps.length ? preps[0].targetLang : '';
return [{ json: { headers: raw.headers, params: raw.params, query: raw.query, body } }];
