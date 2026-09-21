const item = $input.first().json;
const articleText = item.finalArticle || '';
const title = (articleText.match(/^#\s+(.+)$/m) || [])[1] || '';
const coreKeyword = (item.primaryKeyword || '').trim().toLowerCase();
const secondaryKeywords = Array.isArray(item.secondaryKeywords)
  ? item.secondaryKeywords.map(k => k.trim().toLowerCase()).filter(k => k)
  : (item.secondaryKeywords || '').split(',').map(k => k.trim().toLowerCase()).filter(k => k);

const totalWords = articleText.split(/\s+/).filter(w => w.length > 0).length;

const bodyText = articleText.replace(/^#\s+.+\n/, '');
const words = bodyText.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(w => w.length > 0);

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const countKW = kw => kw
  ? (articleText.toLowerCase().match(new RegExp(esc(kw), 'g')) || []).length
  : 0;

const coreKWCount      = countKW(coreKeyword);
const coreKWPercentage = totalWords > 0 ? +((coreKWCount / totalWords) * 100).toFixed(2) : 0;
const coreKWinH1       = coreKeyword ? title.toLowerCase().includes(coreKeyword) : false;

const h2Lines    = [...articleText.matchAll(/^##\s+(.+)$/gm)].map(m => m[1].toLowerCase());
const h3Lines    = [...articleText.matchAll(/^###\s+(.+)$/gm)].map(m => m[1].toLowerCase());
const allHeadings = [...h2Lines, ...h3Lines];

const coreKWinH2     = coreKeyword ? h2Lines.some(h => h.includes(coreKeyword)) : false;
const first100text   = words.slice(0, 100).join(' ');
const last100text    = words.slice(-100).join(' ');
const coreKWFirst100 = coreKeyword ? first100text.includes(coreKeyword) : false;
const coreKWLast100  = coreKeyword ? last100text.includes(coreKeyword) : false;

const secondaryStats = secondaryKeywords.map(kw => {
  const count = countKW(kw);
  return {
    keyword: kw,
    count,
    percentage: totalWords > 0 ? +((count / totalWords) * 100).toFixed(2) : 0,
    inHeading: allHeadings.some(h => h.includes(kw))
  };
});

const anySecondaryKWinH2orH3 = secondaryStats.some(s => s.inHeading);

const lines = articleText.split('\n');
let listsCount = 0;
let inList = false;
for (const line of lines) {
  const isListItem = /^\s*[-*+]\s|^\s*\d+\.\s/.test(line);
  if (isListItem && !inList)           { listsCount++; inList = true; }
  else if (!isListItem && line.trim()) { inList = false; }
}

return [{
  json: {
    totalWords,
    coreKeyword,
    coreKWCount,
    coreKWPercentage,
    coreKWinH1,
    coreKWinH2,
    coreKWFirst100,
    coreKWLast100,
    secondaryKeywords: secondaryStats,
    anySecondaryKWinH2orH3,
    listsCount
  }
}];