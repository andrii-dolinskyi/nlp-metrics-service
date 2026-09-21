const results = [];
for (const item of $input.all()) {
  try {
    const markdown = (item.json?.finalArticle || '').trim();

    if (!markdown || markdown.length < 50) {
      results.push({ json: { ERROR: 'Article not found' } });
      continue;
    }

    const cleanedText = markdown
      .replace(/!\[.*?\]\(.*?\)/g, ' ')
      .replace(/<imagePrompt>.*?<\/imagePrompt>/gis, ' ')
      .replace(/\[([^\]]+)\]\([^\)]*\)/g, '$1')
      .replace(/[`*_>#+]/g, ' ')
      .replace(/[–—]/g, ' ')
      .replace(/\d+/g, ' ')
      .replace(/[%€$£¥]/g, ' ')
      .replace(/\s+/g, ' ')
      .toLowerCase()
      .trim();

    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const sentences = cleanedText.split(/[.!?]+(?:\s+|$)/g).filter(s => s && s.trim().length > 5);
    const sentenceCount = sentences.length || 1;
    const corpus = cleanedText.replace(/[.,;:!?(){}[\]"']/g, ' ').replace(/\s+/g, ' ').trim();
    const wordsArray = corpus.split(' ').filter(w => /^[a-z]{2,}$/.test(w));
    const totalWords = wordsArray.length;

    if (totalWords < 50) {
      results.push({ json: { ERROR: 'Not enough words', totalWords } });
      continue;
    }

    const sentLengths = sentences.map(s => s.trim().split(/\s+/).length);
    const avgSentLen = sentLengths.reduce((a, b) => a + b, 0) / sentLengths.length;
    const sentVariance = sentLengths.reduce((a, b) => a + Math.pow(b - avgSentLen, 2), 0) / sentLengths.length;
    const burstiness = Math.sqrt(sentVariance);

    const paragraphs = markdown.split(/\n\n+/).map(p => p.trim()).filter(p => p.length > 20);
    const paraLengths = paragraphs.map(p => p.split(/\s+/).length);
    const avgParaLen = paraLengths.reduce((a, b) => a + b, 0) / (paraLengths.length || 1);

    const wordFreq = {};
    for (const w of wordsArray) wordFreq[w] = (wordFreq[w] || 0) + 1;
    const uniqueWords = Object.keys(wordFreq);
    const ttr = uniqueWords.length / totalWords;
    const hapax = uniqueWords.filter(w => wordFreq[w] === 1);
    const hapaxRatio = hapax.length / totalWords;

    const bigrams = {};
    for (let i = 0; i < wordsArray.length - 1; i++) {
      const bg = wordsArray[i] + ' ' + wordsArray[i + 1];
      bigrams[bg] = (bigrams[bg] || 0) + 1;
    }
    const repeatedBigrams = Object.entries(bigrams).filter(([_, c]) => c > 2);

    const trigrams = {};
    for (let i = 0; i < wordsArray.length - 2; i++) {
      const tg = wordsArray[i] + ' ' + wordsArray[i + 1] + ' ' + wordsArray[i + 2];
      trigrams[tg] = (trigrams[tg] || 0) + 1;
    }
    const repeatedTrigrams = Object.entries(trigrams).filter(([_, c]) => c > 1);

    const NOMINALIZATION_SUFFIXES = ["tion","sion","ment","ness","ity","ance","ence"];
    const nominalizationCount = wordsArray.filter(w => w.length > 6 && NOMINALIZATION_SUFFIXES.some(s => w.endsWith(s))).length;
    const nominalizationRatio = nominalizationCount / totalWords;

    const PRONOUNS = ["i","you","he","she","it","we","they","me","him","her","us","them","my","your","his","its","our","their","this","that","these","those"];
    const pronounCount = PRONOUNS.reduce((sum, p) => sum + (wordFreq[p] || 0), 0);
    const nounCount = wordsArray.filter(w => w.length > 4 && !PRONOUNS.includes(w)).length;
    const pronounToNounRatio = nounCount > 0 ? pronounCount / nounCount : 0;

    const firstWords = sentences.map(s => s.trim().split(/\s+/)[0] || '');
    const uniqueOpeners = new Set(firstWords).size;
    const openerVarietyRatio = uniqueOpeners / (firstWords.length || 1);
    const AI_OPENERS = ["the","this","these","it","in","when","as","for","by"];
    const aiOpenerCount = firstWords.filter(w => AI_OPENERS.includes(w)).length;
    const aiOpenerPct = (aiOpenerCount / (firstWords.length || 1)) * 100;

    const CONNECTIVES = {
      contrast: ["however","although","though","yet","nevertheless","nonetheless","on the other hand","in contrast","conversely","despite","whereas"],
      cause:    ["because","since","therefore","thus","consequently","as a result","hence"],
    };
    const connectiveCounts = {};
    for (const [cat, terms] of Object.entries(CONNECTIVES)) {
      connectiveCounts[cat] = terms.reduce((sum, t) => sum + (cleanedText.match(new RegExp(esc(t), 'gi')) || []).length, 0);
    }

    const POSITIVE_WORDS = ["good","great","excellent","best","better","amazing","wonderful","fantastic","perfect","success","successful","effective","improve","benefit","advantage","easy","simple","clear","helpful","valuable","important","powerful","strong","beautiful","love","enjoy","happy","positive","win","achieve","growth"];
    const NEGATIVE_WORDS = ["bad","worst","terrible","poor","fail","failure","difficult","hard","problem","issue","wrong","error","mistake","risk","danger","loss","lose","negative","weak","limit","challenge","concern","worry","fear","avoid","prevent","stop"];
    const scoreSentiment = (text) => {
      const words = text.split(/\s+/);
      const pos = words.filter(w => POSITIVE_WORDS.includes(w)).length;
      const neg = words.filter(w => NEGATIVE_WORDS.includes(w)).length;
      return +((pos - neg) / (words.length || 1)).toFixed(4);
    };
    const arcOverall = scoreSentiment(cleanedText);

    const SUBORD_CONJUNCTIONS = ["because","although","though","even though","while","whereas","since","unless","until","before","after","when","whenever","if","whether","as if","as though","so that","in order that","provided that","assuming that","given that","once","now that","rather than","as long as","as soon as","even if","no matter","in case","except that"];
    const clausesPerSentence = sentences.map(sent => {
      let clauses = 1;
      for (const conj of SUBORD_CONJUNCTIONS) {
        if (new RegExp('\\b' + esc(conj) + '\\b', 'i').test(sent)) clauses++;
      }
      if (/\b(who|whom|whose|which|that)\b/i.test(sent)) clauses++;
      clauses += (sent.match(/,\s+(?:and|but|or|nor|so|yet)\s+/gi) || []).length;
      return clauses;
    });
    const singleClauseSentences = clausesPerSentence.filter(c => c === 1).length;
    const complexSentences      = clausesPerSentence.filter(c => c >= 2).length;
    const singleClausePct = +((singleClauseSentences / sentenceCount) * 100).toFixed(1);
    const complexSentPct  = +((complexSentences      / sentenceCount) * 100).toFixed(1);

    const presentVerbs = ["is","are","am","has","have","do","does","know","think","see","say","make","get","go","come","take","use","find","give","tell","keep","let","begin","show","hear","play","run","move","live","feel","try","ask","need","seem","turn","call","help","start","work","build","include","involve","create","develop","provide","allow","require","enable","support","improve","increase","reduce","change","apply","consider","ensure","focus","learn","understand","follow","review","check","test","measure","track","monitor","analyze","evaluate","optimize"];
    const pastVerbs    = ["was","were","had","did","got","went","came","took","made","said","gave","told","kept","began","showed","heard","played","ran","moved","felt","asked","turned","called","helped","started","worked","built","included","involved","created","developed","provided","allowed","required","enabled","supported","improved","increased","reduced","changed","applied","considered","ensured","focused","learned","understood","followed","reviewed","checked","tested","measured","tracked","monitored","analyzed","evaluated","optimized","found","used","saw","known","thought","shown"];
    const futureMarkers = ["will","shall","going to","gonna","would","could","might","may","should"];
    let presentCount = 0, pastCount = 0, futureCount = 0;
    for (const w of wordsArray) {
      if (presentVerbs.includes(w)) presentCount++;
      else if (pastVerbs.includes(w)) pastCount++;
    }
    for (const marker of futureMarkers) {
      futureCount += (cleanedText.match(new RegExp('\\b' + esc(marker) + '\\b', 'gi')) || []).length;
    }
    const totalVerbsFound = presentCount + pastCount + futureCount || 1;
    const tenseConsistencyPct = +((Math.max(presentCount, pastCount, futureCount) / totalVerbsFound) * 100).toFixed(1);
    const sentenceTenses = sentences.map(sent => {
      const pw  = presentVerbs.filter(v => new RegExp('\\b' + v + '\\b', 'i').test(sent)).length;
      const ptw = pastVerbs.filter(v => new RegExp('\\b' + v + '\\b', 'i').test(sent)).length;
      const fw  = futureMarkers.filter(v => new RegExp('\\b' + esc(v) + '\\b', 'i').test(sent)).length;
      if (pw === 0 && ptw === 0 && fw === 0) return null;
      if (pw >= ptw && pw >= fw) return 'present';
      if (ptw >= fw) return 'past';
      return 'future';
    }).filter(t => t !== null);
    let tenseShiftCount = 0;
    for (let i = 1; i < sentenceTenses.length; i++) {
      if (sentenceTenses[i] !== sentenceTenses[i - 1]) tenseShiftCount++;
    }

    results.push({
      json: {
        burstinessScore:        +burstiness.toFixed(2),
        sentenceLengthVariance: +sentVariance.toFixed(2),
        avgParagraphLength:     +avgParaLen.toFixed(2),
        ttr:                    +ttr.toFixed(4),
        hapaxRatio:             +hapaxRatio.toFixed(4),
        bigramRepCount:         repeatedBigrams.length,
        trigramRepCount:        repeatedTrigrams.length,
        nominalizationRatio:    +nominalizationRatio.toFixed(4),
        pronounNounRatio:       +pronounToNounRatio.toFixed(4),
        openerVariety:          +openerVarietyRatio.toFixed(4),
        aiOpenerPct:            +aiOpenerPct.toFixed(2),
        connContrast:           connectiveCounts.contrast,
        connCause:              connectiveCounts.cause,
        arcOverall,
        singleClausePct,
        complexSentPct,
        tenseShiftCount,
        tenseConsistencyPct,
      }
    });
  } catch (err) {
    results.push({ json: { ERROR: err.message, STACK: err.stack } });
  }
}
return results;