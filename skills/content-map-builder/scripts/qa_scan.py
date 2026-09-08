#!/usr/bin/env python3
"""QA gate for run.json. Exit code 1 if any blocking issue. usage: qa_scan.py run.json"""
import json, re, sys, os
from collections import Counter, defaultdict
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from page_types import Catalogue
from sentence_case import noun_set, looks_title_case

INTENTS = {'Informational', 'Commercial', 'Transactional', 'Navigational'}
PROVIDER = re.compile(r'dataforseo', re.I)


def norm(s):
    return re.sub(r'\s+', ' ', str(s or '').strip().lower())


def main(path):
    run = json.load(open(path)); pages = run['pages']; issues = defaultdict(list); warn = defaultdict(list)
    cat = Catalogue(run); nouns = noun_set(run)
    urls = [p['url'] for p in pages]; uset = set(urls)
    for pl in run.get('pillars', []):
        v = str(pl.get('name') or '')
        if '&' in v or re.search(r'\band\b', v) or v.count(',') >= 2: issues['joined_pair_name'].append(('pillar', pl.get('num'), v))
    for u, c in Counter(urls).items():
        if c > 1: issues['duplicate_url'].append(u)
    cores = [norm(p['core']['keyword']) for p in pages]
    for k, c in Counter(cores).items():
        if c > 1: issues['duplicate_core'].append(k)
    core_set = set(cores)
    inbound = Counter()
    for p in pages:
        for l in p.get('links_out', []):
            if l in uset and l != p['url']: inbound[l] += 1
    other_codes = [m['code'] for m in run['client']['markets'] if not m.get('primary')]
    loc_seen = {c: Counter() for c in other_codes}
    for p in pages:
        u = p['url']; c = p['core']; k = norm(c['keyword'])
        if not k: issues['empty_core'].append(u)
        # naming rule: one phrase per pillar, cluster, H1, meta — no '&', 'X and Y', or comma lists of topics
        for field in ('h1', 'meta', 'cluster'):
            v = str(p.get(field) or '')
            if '&' in v or re.search(r'\band\b', v) or v.count(',') >= 2:
                issues['joined_pair_name'].append((u, field, v))
        # page type must be a catalogue id (or a declared custom type); labels such as 'PILLAR HUB' resolve through aliases
        if not cat.known(p.get('page_type')): issues['unknown_page_type'].append((u, p.get('page_type')))
        elif (cat.info(p.get('page_type')) or {}).get('ai_writable') == 'N': issues['template_only_page_type'].append((u, p.get('page_type')))
        # sentence case: H1 and every H2 keep capitals only on the first word, proper nouns, acronyms and mixed-case names
        if looks_title_case(p.get('h1'), nouns): issues['title_case_h1'].append((u, p.get('h1')))
        for h in str(p.get('h2_outline') or '').split('|'):
            if looks_title_case(h.strip(), nouns): issues['title_case_h2'].append((u, h.strip()))
        if looks_title_case(str(p.get('meta') or '').split('|')[0], nouns): warn['title_case_meta'].append((u, p.get('meta')))
        if len(k.split()) > 7 or re.search(r'-(management|data|implementation|selection)\b', k) or re.search(r'(\b\w+\b)(?:.*)\1', k) and len(k.split()) > 5:
            warn['possibly_mangled_core'].append((u, k))
        if c.get('intent') not in INTENTS: issues['bad_intent'].append((u, c.get('intent')))
        conf = c.get('intent_conf')
        if not (isinstance(conf, str) and conf.endswith('%')): issues['bad_intent_conf'].append((u, conf))
        vd = c.get('vol_display', c.get('vol'))
        if not (vd == '<10' or isinstance(vd, int)): issues['bad_vol'].append((u, vd))
        secs = [norm(s.split(' (')[0]) for s in str(p.get('secondaries') or '').split(';') if s.strip()]
        if k in secs: issues['core_in_secondaries'].append(u)
        for s in secs:
            if s in core_set and s != k: issues['secondary_is_another_core'].append((u, s))
        d = [s for s, n in Counter(secs).items() if n > 1]
        if d: issues['duplicate_secondaries'].append((u, d))
        for f in ('h1', 'meta', 'h2_outline', 'ai_prompts', 'words', 'page_type', 'cluster', 'pillar_num', 'wave', 'pod', 'schema'):
            if p.get(f) in (None, ''): issues['missing_' + f].append(u)
        if p.get('meta') and len(p['meta']) > 70: warn['meta_over_70'].append((u, len(p['meta'])))
        if p.get('h2_outline') and len(p['h2_outline'].split('|')) < 4: warn['thin_outline'].append(u)
        if p.get('ai_prompts') and re.search(r'\bbest \w+ \w+ \w+\b', p['ai_prompts']) and 'best ' + k in p['ai_prompts']: warn['placeholder_prompt'].append(u)
        for l in p.get('links_out', []):
            if l not in uset and l not in (run.get('existing_site', {}).get('page_status') or {}): issues['dead_link'].append((u, l))
            if l == u: issues['self_link'].append(u)
        if inbound.get(u, 0) == 0: issues['orphan'].append(u)
        for code in other_codes:
            L = (p.get('loc') or {}).get(code)
            if run['client'].get('languages_enabled', True):
                if not L or not L.get('keyword'): issues['missing_localisation_' + code].append(u)
                else: loc_seen[code][norm(L['keyword'])] += 1
        for f in ('notes', 'h2_outline', 'secondaries', 'answer_block', 'h1', 'meta'):
            if p.get(f) and PROVIDER.search(str(p[f])): issues['provider_named'].append((u, f))
    for code, cnt in loc_seen.items():
        for k, n in cnt.items():
            if n > 1: issues['duplicate_localised_' + code].append(k)
    # H2 blocks copied across pages
    blocks = defaultdict(list)
    for p in pages:
        h = norm(p.get('h2_outline'))
        if h: blocks[h].append(p['url'])
    for h, us in blocks.items():
        if len(us) > 1 and not all('/glossary/' in u for u in us): issues['shared_h2_outline'].append(us)
    for sec in run.get('plan', {}).get('sections', []):
        for label, text in sec['rows']:
            if PROVIDER.search(str(text)): issues['provider_named'].append(('plan', label))
    out = {'blocking': {k: v[:50] for k, v in issues.items()}, 'warnings': {k: v[:50] for k, v in warn.items()},
           'pages': len(pages), 'blocking_count': sum(len(v) for v in issues.values())}
    print(json.dumps(out, indent=1, ensure_ascii=False))
    sys.exit(1 if out['blocking_count'] else 0)


if __name__ == '__main__':
    main(sys.argv[1])
