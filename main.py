"""
NLP Content Metrics Microservice
Computes: MDD, Syntactic Tree Depth, Yngve, Referential Cohesion,
          NER, Anaphora, and Lexical Sophistication metrics.

Deploy free on Render.com — see render.yaml.
"""
from contextlib import asynccontextmanager
from collections import Counter, defaultdict
import logging
import math
import statistics

from fastapi import FastAPI, HTTPException
from nltk.stem import PorterStemmer
from pydantic import BaseModel
import spacy

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

nlp_model = None
stemmer = PorterStemmer()


# ── Academic Word List (Coxhead 2000) ─────────────────────────────────────────
AWL = set("""
abandon abstract access accommodate accompany accumulate accurate achieve
acknowledge acquire adapt adequate adjacent adjust administrate advocate affect
aggregate aid allocate alter ambiguous amend analyse analogy annual anticipate
apparent append appreciate appropriate approximate arbitrary aspect assemble
assess assign assist assume assure attach attain attitude attribute authority
automate available aware behalf benefit bias bond brief capable capacity
category cease challenge channel chapter chemical circumstance clarify classic
clause commit communicate community complex component concept conclude conduct
consequent considerable consist constant construct consult contact contemporary
context contract contradict contrast contribute controversy convention convert
convince cooperate coordinate core corporate correspond create credit criteria
culture cycle data debate decline define demonstrate design detect deviate
device distribute domain dynamic economy enable encounter energy environment
equivalent establish evaluate evident evolve exclude expand expose external
factor feature federal final finance focus formula function generate global
goal grade grant guideline hypothesis identical ideology illustrate image
impact implicate imply indicate individual inherent initial input integrate
interact interpret interval invest involve isolate issue legal liberal major
method minimal modify mutual network normal obtain obvious option output
parallel participate percent period policy portion previous principal procedure
process project proportion provide publish ratio region regulate reinforce
relax release rely remove require research resource restrict retain reveal
role section sequence significant similar source specific stable strategy
structure style survey sustain technique technology theory tradition transfer
trend utilize valid variable various volume
""".split())


# ── Pydantic model ─────────────────────────────────────────────────────────────
class ArticleRequest(BaseModel):
    text: str


# ── App lifespan ──────────────────────────────────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    global nlp_model
    nlp_model = spacy.load("en_core_web_sm")
    logger.info("spaCy en_core_web_sm loaded")
    yield
    nlp_model = None


app = FastAPI(lifespan=lifespan)


# ── Tree helpers ──────────────────────────────────────────────────────────────
def tree_depth(token) -> int:
    """Iterative depth — avoids Python recursion limit on deep trees."""
    depth = 0
    current = token
    seen: set = set()
    while current.head is not current and current.i not in seen:
        seen.add(current.i)
        current = current.head
        depth += 1
    return depth


def yngve_depth(token) -> int:
    """
    Dependency-tree approximation of Yngve (1960) depth.
    For each ancestor on path to root, count right-sibling dependents
    (tokens depending on that ancestor that appear *after* the current node).
    Higher = more working-memory load.
    """
    depth = 0
    current = token
    seen: set = set()
    while current.head is not current and current.i not in seen:
        seen.add(current.i)
        parent = current.head
        depth += sum(1 for child in parent.children if child.i > current.i)
        current = parent
    return depth


# ── Noun-set helpers ──────────────────────────────────────────────────────────
def noun_set(sent, stemmed: bool = False) -> set:
    tokens = [
        t.lemma_.lower() for t in sent
        if t.pos_ in ("NOUN", "PROPN") and not t.is_stop and len(t.text) > 2
    ]
    return set(stemmer.stem(w) for w in tokens) if stemmed else set(tokens)


def jaccard(a: set, b: set) -> float:
    union = a | b
    return len(a & b) / len(union) if union else 0.0


# ── Word-frequency helpers ────────────────────────────────────────────────────
try:
    from wordfreq import word_frequency

    def is_common(word: str) -> bool:
        """True if word is in roughly the top-5 000 English words."""
        return word_frequency(word, "en") >= 1e-5

    def is_rare(word: str) -> bool:
        """True if word is outside the top-10 000 but exists in the corpus."""
        f = word_frequency(word, "en")
        return 0 < f < 3e-6

    HAS_WORDFREQ = True
except ImportError:
    HAS_WORDFREQ = False

    def is_common(word: str) -> bool:  # crude fallback
        return len(word) <= 8

    def is_rare(word: str) -> bool:  # crude fallback
        return len(word) > 11


# ── Stats helper ──────────────────────────────────────────────────────────────
def safe_stats(vals: list) -> tuple:
    """Return (mean, variance, min, max, stdev) — safe for empty / single lists."""
    if not vals:
        return 0.0, 0.0, 0.0, 0.0, 0.0
    mean = statistics.mean(vals)
    var = statistics.variance(vals) if len(vals) > 1 else 0.0
    std = statistics.stdev(vals) if len(vals) > 1 else 0.0
    return mean, var, min(vals), max(vals), std


# ── Core computation ──────────────────────────────────────────────────────────
def compute_metrics(text: str) -> dict:
    doc = nlp_model(text)
    sentences = list(doc.sents)
    if not sentences:
        raise ValueError("No sentences detected in text")

    # ── MDD (Mean Dependency Distance) ───────────────────────────────────────
    mdd_per_sent = []
    for sent in sentences:
        dists = [abs(t.i - t.head.i) for t in sent if t.head is not t]
        if dists:
            mdd_per_sent.append(sum(dists) / len(dists))

    mdd_mean, mdd_var, mdd_min, mdd_max, mdd_std = safe_stats(mdd_per_sent)

    # ── Syntactic tree depth ─────────────────────────────────────────────────
    td_per_sent = []
    for sent in sentences:
        depths = [tree_depth(t) for t in sent]
        if depths:
            td_per_sent.append(max(depths))

    td_avg, td_var, td_min, td_max, td_std = safe_stats(td_per_sent)

    # ── Yngve depth ──────────────────────────────────────────────────────────
    yngve_per_sent = []
    all_yngve: list = []
    for sent in sentences:
        vals = [yngve_depth(t) for t in sent]
        if vals:
            yngve_per_sent.append(statistics.mean(vals))
            all_yngve.extend(vals)

    y_mean, y_var, _, _, _ = safe_stats(yngve_per_sent)
    y_abs_max = max(all_yngve) if all_yngve else 0

    if y_mean < 1.5:
        y_cog = "Low"
    elif y_mean < 3.0:
        y_cog = "Medium"
    elif y_mean < 5.0:
        y_cog = "High"
    else:
        y_cog = "Overload"

    # ── Referential cohesion ─────────────────────────────────────────────────
    sent_nouns = [noun_set(s) for s in sentences]
    sent_nouns_stem = [noun_set(s, stemmed=True) for s in sentences]
    overlaps, stem_overlaps, arg_overlaps = [], [], []

    for i in range(len(sentences) - 1):
        overlaps.append(jaccard(sent_nouns[i], sent_nouns[i + 1]))
        stem_overlaps.append(jaccard(sent_nouns_stem[i], sent_nouns_stem[i + 1]))
        union = sent_nouns[i] | sent_nouns[i + 1]
        intersect = sent_nouns[i] & sent_nouns[i + 1]
        arg_overlaps.append(len(intersect) / len(union) if union else 0.0)

    noun_overlap = statistics.mean(overlaps) if overlaps else 0.0
    stem_overlap = statistics.mean(stem_overlaps) if stem_overlaps else 0.0
    arg_overlap_avg = statistics.mean(arg_overlaps) if arg_overlaps else 0.0

    all_nouns_flat = [n for ns in sent_nouns for n in ns]
    noun_freq = Counter(all_nouns_flat)
    repeated_ratio = (
        sum(1 for c in noun_freq.values() if c > 1) / len(noun_freq)
        if noun_freq else 0.0
    )
    if repeated_ratio > 0.4:
        exact_repeat_signal = "high"
    elif repeated_ratio > 0.2:
        exact_repeat_signal = "moderate"
    else:
        exact_repeat_signal = "absent"

    coh_comp = (noun_overlap + stem_overlap + arg_overlap_avg) / 3
    if coh_comp >= 0.55:
        cohesion_rating = "Excellent"
    elif coh_comp >= 0.40:
        cohesion_rating = "Good"
    elif coh_comp >= 0.25:
        cohesion_rating = "Fair"
    else:
        cohesion_rating = "Poor"

    # ── NER ──────────────────────────────────────────────────────────────────
    LABEL_MAP = {
        "PERSON": "person",
        "ORG": "org",
        "GPE": "location", "LOC": "location", "FAC": "location",
        "DATE": "date", "TIME": "date",
    }
    ne_cats = Counter(LABEL_MAP.get(e.label_, "other") for e in doc.ents)
    ne_total = len(doc.ents)

    person_count   = ne_cats["person"]
    org_count      = ne_cats["org"]
    location_count = ne_cats["location"]
    date_count     = ne_cats["date"]
    other_count    = ne_cats["other"]
    ne_type_count  = len(ne_cats)

    total_ner = max(ne_total, 1)
    ner_entropy = -sum(
        (c / total_ner) * math.log2(c / total_ner)
        for c in ne_cats.values() if c > 0
    )
    if ner_entropy >= 1.6:
        ner_diversity = "Excellent"
    elif ner_entropy >= 1.0:
        ner_diversity = "Good"
    elif ner_entropy >= 0.5:
        ner_diversity = "Fair"
    else:
        ner_diversity = "Poor"

    # ── Anaphora ─────────────────────────────────────────────────────────────
    ANAPHORA_SET = {
        "he", "she", "it", "they", "him", "her", "them",
        "his", "hers", "their", "theirs", "its",
        "himself", "herself", "itself", "themselves",
        "this", "that", "these", "those",
        "who", "whom", "which",
    }
    anaphora_tokens = [
        t for t in doc
        if t.lower_ in ANAPHORA_SET and t.pos_ in ("PRON", "DET")
    ]
    anaphora_count = len(anaphora_tokens)

    tok_to_sent_idx: dict = {}
    for idx, sent in enumerate(sentences):
        for t in sent:
            tok_to_sent_idx[t.i] = idx

    res_dists: list = []
    for pt in anaphora_tokens:
        si = tok_to_sent_idx.get(pt.i, 0)
        for d in range(1, min(6, si + 1)):
            prev_sent = sentences[si - d]
            if any(t.pos_ in ("NOUN", "PROPN") for t in prev_sent):
                res_dists.append(d)
                break

    avg_res_dist = statistics.mean(res_dists) if res_dists else 0.0
    max_res_dist = max(res_dists) if res_dists else 0

    if avg_res_dist <= 1.0:
        anaphora_soph = "Simple"
    elif avg_res_dist <= 2.0:
        anaphora_soph = "Moderate"
    elif avg_res_dist <= 3.0:
        anaphora_soph = "Complex"
    else:
        anaphora_soph = "Sophisticated"

    all_pronouns = [t for t in doc if t.pos_ == "PRON"]
    content_nouns_count = sum(
        1 for t in doc if t.pos_ in ("NOUN", "PROPN") and not t.is_stop
    )
    pronoun_density = len(all_pronouns) / max(content_nouns_count, 1)

    # Coreference chains — approximate via entity lemma grouping + repeated pronouns
    ent_groups: dict = defaultdict(int)
    for e in doc.ents:
        ent_groups[e.lemma_.lower()] += 1
    coref_chains = sum(1 for c in ent_groups.values() if c > 1)
    pron_freqs = Counter(t.lower_ for t in anaphora_tokens)
    coref_chains += sum(1 for c in pron_freqs.values() if c >= 2)

    # ── Lexical sophistication ────────────────────────────────────────────────
    content_toks = [
        t.lower_ for t in doc
        if t.pos_ in ("NOUN", "VERB", "ADJ", "ADV")
        and not t.is_stop and not t.is_punct
        and t.is_alpha and len(t.text) > 2
    ]
    total_ct = max(len(content_toks), 1)

    non_common_count = sum(1 for w in content_toks if not is_common(w))
    rare_word_count  = sum(1 for w in content_toks if is_rare(w))
    awl_count        = sum(1 for w in content_toks if w in AWL)

    non_common_ratio    = non_common_count / total_ct
    academic_word_ratio = awl_count / total_ct

    lex_score = round(
        min(non_common_ratio / 0.30, 1.0) * 40
        + min(academic_word_ratio / 0.13, 1.0) * 30
        + min(rare_word_count / 40.0, 1.0) * 30,
        1,
    )

    # ── Return all metrics ────────────────────────────────────────────────────
    return {
        # MDD
        "mddMean":     round(mdd_mean, 3),
        "mddVariance": round(mdd_var,  3),
        "mddMin":      round(mdd_min,  3),
        "mddMax":      round(mdd_max,  3),
        "mddStdDev":   round(mdd_std,  3),
        # Syntactic tree depth
        "treeDepthAvg":      round(td_avg, 3),
        "treeDepthVariance": round(td_var, 3),
        "treeDepthMin":      int(td_min),
        "treeDepthMax":      int(td_max),
        "treeDepthStdDev":   round(td_std, 3),
        # Yngve
        "yngveMean":          round(y_mean,    3),
        "yngveVariance":      round(y_var,     3),
        "yngveMax":           round(y_abs_max, 3),
        "yngveCognitiveLoad": y_cog,
        # Referential cohesion
        "nounOverlapScore":      round(noun_overlap,    4),
        "exactNounRepeatSignal": exact_repeat_signal,
        "stemOverlapScore":      round(stem_overlap,    4),
        "argumentOverlapAvg":    round(arg_overlap_avg, 4),
        "cohesionRating":        cohesion_rating,
        # NER
        "neTotalCount":    ne_total,
        "nePersonCount":   person_count,
        "neOrgCount":      org_count,
        "neLocationCount": location_count,
        "neDateCount":     date_count,
        "neOtherCount":    other_count,
        "neTypeCount":     ne_type_count,
        "nerEntropyScore": round(ner_entropy, 4),
        "nerDiversityRating": ner_diversity,
        # Anaphora
        "anaphoraCount":          anaphora_count,
        "avgResolutionDistance":  round(avg_res_dist, 3),
        "maxResolutionDistance":  max_res_dist,
        "anaphoraSophistication": anaphora_soph,
        "pronounDensity":         round(pronoun_density, 4),
        "coreferenceChains":      coref_chains,
        # Lexical sophistication
        "nonCommonWordRatio":     round(non_common_ratio,    4),
        "academicWordRatio":      round(academic_word_ratio, 4),
        "rareWordCount":          rare_word_count,
        "lexSophisticationScore": lex_score,
    }


# ── Routes ────────────────────────────────────────────────────────────────────
@app.get("/health")
def health():
    return {"status": "ok", "model_loaded": nlp_model is not None}


@app.post("/analyze")
async def analyze(request: ArticleRequest):
    if nlp_model is None:
        raise HTTPException(status_code=503, detail="Model not loaded yet")
    if not request.text or len(request.text.strip()) < 50:
        raise HTTPException(status_code=400, detail="Text too short (min 50 chars)")
    try:
        return compute_metrics(request.text)
    except Exception as exc:
        logger.exception("Metric computation failed")
        raise HTTPException(status_code=500, detail=str(exc))
    