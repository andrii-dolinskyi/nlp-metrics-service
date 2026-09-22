// One item with the separate assets: page text, meta description, FAQ block and E-E-A-T. They stay separate
// objects all the way to the callback. Translation, JSON-LD and the payload read this item.
const r = $('Parse Request').first().json;
const page = $('Extract Updated').first().json.page;
let faq = []; try { const j = $('FAQ Writer').first().json; faq = (j.output && Array.isArray(j.output.FAQ)) ? j.output.FAQ : (Array.isArray(j.FAQ) ? j.FAQ : []); } catch (e) { faq = []; }
let m = {}; try { m = $('Metadata Generator').first().json.output || {}; } catch (e) { m = {}; }
let eeat = null; try { eeat = $('EEAT Analysis').first().json.output || null; } catch (e) { eeat = null; }
// The FAQ never names the client and never carries a call to action.
const client = String(r.clientName || '').trim();
const esc = t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const clientRe = client ? new RegExp(esc(client), 'i') : null;
const shortRe = client && client.split(/\s+/)[0].length > 3 ? new RegExp('\\b' + esc(client.split(/\s+/)[0]) + '\\b') : null;
const ctaRe = /\b(schedule (a|your)|book (a|your)|contact (us|our)|get in touch|reach out|request (a|your)|talk to (us|our)|call us|sign up|get started|our team|we offer|we provide|we help|with us)\b/i;
const clean = t => {
  const sentences = String(t || '').replace(/[—–]/g, ',').split(/(?<=[.!?])\s+/);
  const kept = sentences.filter(x => !(clientRe && clientRe.test(x)) && !(shortRe && shortRe.test(x)) && !ctaRe.test(x));
  return (kept.length ? kept : sentences.slice(0, 1)).join(' ').replace(/\s+/g, ' ').trim();
};
faq = faq.filter(f => f && f.question && f.answer).map(f => ({ question: clean(f.question) || String(f.question).trim(), answer: clean(f.answer) })).filter(f => f.answer.length > 20).slice(0, 5);
const cap = x => { x = String(x || '').trim(); return x ? x.charAt(0).toUpperCase() + x.slice(1) : x; };
const clamp = (x, max) => {
  x = String(x || '').replace(/[—–;]/g, ',').replace(/\s+/g, ' ').trim();
  if (x.length <= max) return x;
  const cut = x.slice(0, max);
  const dot = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.'));
  if (dot > max * 0.6) return cut.slice(0, dot + 1).trim();
  const sp = cut.lastIndexOf(' ');
  return (sp > 0 ? cut.slice(0, sp) : cut).replace(/[,:]$/, '').trim() + '.';
};
const metaDescription = clamp(cap(m.meta_description), 150);
const slug = r.slugPath.split('/').filter(Boolean).pop() || '';
return [{ json: { slug, slugPath: r.slugPath, finalPage: page, metaDescription, faq, eeat } }];
