const j = $input.first().json;
const a = $('Assemble Meta').first().json;
const decode = s => String(s || '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, String.fromCharCode(34)).replace(/&#39;/g, String.fromCharCode(39));
const t = (j.translations || []).map(x => decode(x.text));
if (!t.length || !t[0]) throw new Error('DeepL returned no translation');
const faq = a.faq.map((f, i) => ({ question: t[2 + i * 2] || f.question, answer: t[3 + i * 2] || f.answer }));
const clean = (v, d) => (!v || v === '-') ? d : v;
return [{ json: { finalPage: t[0], metaDescription: clean(t[1], a.metaDescription), faq, slug: a.slug, slugPath: a.slugPath, translated: true } }];
