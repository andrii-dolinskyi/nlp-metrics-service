const items = $input.all();

const metrics = items.find(i => i.json.burstinessScore !== undefined)?.json || {};
const seo = items.find(i => i.json.coreKeyword !== undefined)?.json || {};
const rules = items.find(i => i.json.output?.negativeParallelisms !== undefined)?.json?.output || {};

const inRange = (val, min, max) => val >= min && val <= max;
const v = (violated) => violated ? 1 : 0;

const metricsViolations = {
  burstinessScore:        v(!inRange(metrics.burstinessScore, 5, 10)),
  sentenceLengthVariance: v(!inRange(metrics.sentenceLengthVariance, 30, 100)),
  avgParagraphLength:     v(!inRange(metrics.avgParagraphLength, 35, 60)),
  ttr:                    v(!inRange(metrics.ttr, 0.40, 0.55)),
  hapaxRatio:             v(!inRange(metrics.hapaxRatio, 0.25, 0.40)),
  bigramRepCount:         v(!inRange(metrics.bigramRepCount, 0, 17)),
  trigramRepCount:        v(!inRange(metrics.trigramRepCount, 0, 7)),
  nominalizationRatio:    v(!inRange(metrics.nominalizationRatio, 0.010, 0.039)),
  pronounNounRatio:       v(!inRange(metrics.pronounNounRatio, 0.06, 0.12)),
  openerVariety:          v(!inRange(metrics.openerVariety, 0.55, 0.80)),
  aiOpenerPct:            v(metrics.aiOpenerPct > 22),
  connContrast:           v(!inRange(metrics.connContrast, 3, 10)),
  connCause:              v(!inRange(metrics.connCause, 4, 14)),
  arcOverall:             v(!inRange(metrics.arcOverall, 0, 0.08)),
  singleClausePct:        v(!inRange(metrics.singleClausePct, 20, 50)),
  complexSentPct:         v(!inRange(metrics.complexSentPct, 35, 65)),
  tenseShiftCount:        v(metrics.tenseShiftCount <= 17),
  tenseConsistencyPct:    v(!inRange(metrics.tenseConsistencyPct, 55, 70)),
};

const secondaryKW1 = seo.secondaryKeywords?.[0];
const secondaryKW2 = seo.secondaryKeywords?.[1];

const seoViolations = {
  coreKWinH1:             v(seo.coreKWinH1 !== true),
  coreKWinH2:             v(seo.coreKWinH2 !== true),
  coreKWPercentage:       v(!inRange(seo.coreKWPercentage, 0.5, 1.3)),
  coreKWFirst100:         v(seo.coreKWFirst100 !== true),
  coreKWLast100:          v(seo.coreKWLast100 !== true),
  secondaryKW1Percentage: v(!inRange(secondaryKW1?.percentage ?? -1, 0.2, 0.4)),
  secondaryKW2Percentage: v(!inRange(secondaryKW2?.percentage ?? -1, 0.2, 0.4)),
  anySecondaryKWinH2orH3: v(seo.anySecondaryKWinH2orH3 !== true),
  listsCount:             v(![2, 3].includes(seo.listsCount)),
};

const ruleWeights = {
  negativeParallelisms:    1,
  tailingNegations:        1,
  aiVocabulary:            1,
  threeRule:               1,
  signpostingFiller:       1,
  vagueAttributions:       2,
  addressPerspective_lock: 1,
  copulaSubstitutes:       1,
  intensifiers:            1,
  ingPileups:              1,
  significanceInflation:   1,
  hedging:                 1,
  semicolons:              1,
  emDashes:                1,
  salesyLanguage:          1,
  repeatedArguments:       3
};

const metricsPoints = Object.values(metricsViolations).reduce((a, b) => a + b, 0);
const seoPoints     = Object.values(seoViolations).reduce((a, b) => a + b, 0);
const rulesPoints   = Object.entries(rules).reduce((sum, [key, value]) => {
  const weight = ruleWeights[key] || 1;
  return sum + (value * weight);
}, 0);

const totalWords = seo.totalWords || 1;

const metricsDensity  = (metricsPoints / totalWords) * 1000;
const seoDensity      = (seoPoints / totalWords) * 1000;
const rulesDensity    = (rulesPoints / totalWords) * 1000;
const violationDensity = metricsDensity + seoDensity + rulesDensity;

const METRICS_T = 12;
const SEO_T     = 8;
const RULES_T   = 45;

const metricsScore = 100 / (1 + (metricsDensity / METRICS_T));
const seoScore     = 100 / (1 + (seoDensity / SEO_T));
const rulesScore   = 100 / (1 + (rulesDensity / RULES_T));

const qualityScore = +(
  (metricsScore * 0.20) +
  (seoScore     * 0.20) +
  (rulesScore   * 0.60)
).toFixed(2);

return [{
  json: {
    metricsViolations,
    seoViolations,
    rulesViolations: rules,
    violationDensity: +violationDensity.toFixed(2),
    qualityScore
  }
}];