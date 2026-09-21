const j = $input.first().json;
const r = $('Parse Request').first().json;
let faq = (j.output && Array.isArray(j.output.FAQ)) ? j.output.FAQ : (Array.isArray(j.FAQ) ? j.FAQ : []);
const client = String(r.clientName || '').trim();
const clientRe = client ? new RegExp(client.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') : null;
const shortRe = client && client.split(/\s+/)[0].length > 3 ? new RegExp('\\b' + client.split(/\s+/)[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b') : null;
const ctaRe = /\b(schedule (a|your)|book (a|your)|contact (us|our)|get in touch|reach out|request (a|your)|talk to (us|our)|call us|sign up|get started|our team|we offer|we provide|we help|with us)\b/i;
const clean = t => {
  const sentences = String(t || '').replace(/[—–]/g, ',').split(/(?<=[.!?])\s+/);
  const kept = sentences.filter(s => !(clientRe && clientRe.test(s)) && !(shortRe && shortRe.test(s)) && !ctaRe.test(s));
  return (kept.length ? kept : sentences.slice(0, 1)).join(' ').replace(/\s+/g, ' ').trim();
};
faq = faq.filter(f => f && f.question && f.answer).map(f => ({ question: clean(f.question) || String(f.question).trim(), answer: clean(f.answer) })).filter(f => f.answer.length > 20).slice(0, 5);
return [{ json: { finalPage: $('Validate Draft').first().json.page, faq } }];
