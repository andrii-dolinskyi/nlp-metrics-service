// Read both evaluator outputs by node name so a partial merge run can never write a half-empty row.
let metrics = null, rules = null;
try { metrics = $('Calculate Metrics').first().json; } catch (e) { metrics = null; }
try { rules = $('Rules Compliance Evaluation').first().json.output; } catch (e) { rules = null; }
if (!metrics || metrics.burstinessScore === undefined || !rules || rules.negativeParallelisms === undefined) return [];

const inRange = (val, min, max) => val >= min && val <= max;
let totalWords = 1; try { totalWords = Number($('Extract CM6 Article').first().json.totalWords) || 1; } catch (e) { totalWords = 1; }
const wordsK = Math.max(totalWords, 1) / 1000;
const v = (violated) => violated ? 1 : 0;

const metricsViolations = {
  burstinessScore:        v(!inRange(metrics.burstinessScore, 5, 10)),
  sentenceLengthVariance: v(!inRange(metrics.sentenceLengthVariance, 30, 100)),
  avgParagraphLength:     v(!inRange(metrics.avgParagraphLength, 35, 60)),
  ttr:                    v(!inRange(metrics.ttr, 0.40, 0.55)),
  hapaxRatio:             v(!inRange(metrics.hapaxRatio, 0.25, 0.40)),
  bigramRepCount:         v(!inRange(metrics.bigramRepCount / wordsK, 0, 17)),   // per 1,000 words
  trigramRepCount:        v(!inRange(metrics.trigramRepCount / wordsK, 0, 7)),   // per 1,000 words
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

// SEO metrics are no longer evaluated for Content Maker 6.0. The legacy sheet columns are filled with N/A.
const seoViolations = {
  coreKWinH1: 'N/A', coreKWinH2: 'N/A', coreKWPercentage: 'N/A', coreKWFirst100: 'N/A', coreKWLast100: 'N/A',
  secondaryKW1Percentage: 'N/A', secondaryKW2Percentage: 'N/A', anySecondaryKWinH2orH3: 'N/A', listsCount: 'N/A'
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
const rulesPoints   = Object.entries(rules).reduce((sum, [key, value]) => {
  const weight = ruleWeights[key] || 1;
  return sum + (value * weight);
}, 0);


const metricsDensity  = (metricsPoints / totalWords) * 1000;
const rulesDensity    = (rulesPoints / totalWords) * 1000;
const violationDensity = metricsDensity + rulesDensity;

// Tolerance: the density (points per 1,000 words) at which a group scores 50. Recalibrated 2026-09-21 for Content Maker 6.0 pages.
const METRICS_T = 24;
const RULES_T   = 70;

const metricsScore = 100 / (1 + (metricsDensity / METRICS_T));
const rulesScore   = 100 / (1 + (rulesDensity / RULES_T));

// The 20% that SEO metrics carried in Content Maker 5.0 is redistributed in proportion: metrics 20 -> 25, rules 60 -> 75.
const qualityScore = +(
  (metricsScore * 0.25) +
  (rulesScore   * 0.75)
).toFixed(2);

return [{
  json: {
    metricsViolations,
    seoViolations,
    totalWords,
    rulesViolations: rules,
    violationDensity: +violationDensity.toFixed(2),
    qualityScore
  }
}];