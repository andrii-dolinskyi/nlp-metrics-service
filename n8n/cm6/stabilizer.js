const items = $input.all();
const find = (key) => items.find(i => i.json.output?.[key] !== undefined)?.json.output?.[key] || [];
const sent = a => (a || []).map(i => (i && i.sentence) ? i.sentence : String(i || '')).filter(Boolean);
return [{ json: {
  ingPileups:           sent(find('ingPileups')),
  parallelSeries:       sent(find('parallelSeries')),
  hedging:              sent(find('hedging')),
  negativeParallelisms: sent(find('negativeParallelisms')),
  tailingNegations:     sent(find('tailingNegations')),
  aiPhrasing:           sent(find('aiPhrasing'))
}}];
