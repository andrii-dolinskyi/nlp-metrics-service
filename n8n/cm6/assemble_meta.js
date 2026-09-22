let m = {}; try { m = $('Metadata Generator').first().json.output || {}; } catch (e) { m = {}; }
const r = $('Parse Request').first().json;
let cf = { faq: [] }; try { cf = $('Collect FAQ').first().json; } catch (e) { cf = { faq: [] }; }
const page = $('Extract Updated').first().json.page;
const slug = r.slugPath.split('/').filter(Boolean).pop() || '';
const cap = s => { s = String(s || '').trim(); return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; };
const clamp = (s, max) => {
  s = String(s || '').replace(/[—–;]/g, ',').replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const dot = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.'));
  if (dot > max * 0.6) return cut.slice(0, dot + 1).trim();
  const sp = cut.lastIndexOf(' ');
  return (sp > 0 ? cut.slice(0, sp) : cut).replace(/[,:]$/, '').trim() + '.';
};
const metaDescription = clamp(cap(m.meta_description), 150);
return [{ json: { slug, slugPath: r.slugPath, metaDescription, finalPage: page, faq: cf.faq || [] } }];
