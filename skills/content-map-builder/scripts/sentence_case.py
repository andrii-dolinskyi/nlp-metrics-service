#!/usr/bin/env python3
"""Sentence-case check and fixer for headings in run.json.

  sentence_case.py run.json            # report H1s, H2s and meta titles that read as Title Case
  sentence_case.py run.json --apply    # rewrite them in place (only the flagged ones)
  sentence_case.py --text "Hiring a VP of Sales for a Growth-Stage MedTech Company" [--nouns "TruAlign,Boston"]

Rule: only the first word, the first word after a colon, proper nouns, acronyms and mixed-case
names keep their capitals. Proper nouns come from run.json.client.proper_nouns plus the client
name, competitors, market and language names; pass extra ones with --nouns.
"""
import json, re, sys, argparse

SMALL = {'a', 'an', 'the', 'and', 'or', 'of', 'in', 'on', 'for', 'to', 'vs', 'with', 'at', 'by', 'from', 'as', 'is'}
WORD = re.compile(r"[A-Za-z][A-Za-z0-9'’]*")


def noun_set(run, extra=''):
    nouns = set()
    c = (run or {}).get('client') or {}
    for v in [c.get('name')] + list(c.get('proper_nouns') or []) + list(c.get('competitors') or []) + list(extra.split(',')):
        for w in str(v or '').split():
            w = w.strip(',.;:()"\'')
            if w: nouns.add(w.lower())
    for m in c.get('markets') or []:
        for v in (m.get('location_name'), m.get('language_name')):
            for w in str(v or '').split(): nouns.add(w.lower())
    nouns.add('i')
    return nouns


def is_protected(w, nouns):
    """Words that keep their capitals: acronyms, mixed-case names (MedTech, iPhone), proper nouns."""
    core = w.strip("'’")
    if core.lower() in nouns: return True
    if re.fullmatch(r'[A-Z]{2,6}s?', core): return True         # SEO, VP, VPs, PLM, GDPR
    if re.search(r'[a-z][A-Z]', core): return True                 # MedTech, PowerPoint, iPhone
    if re.search(r'\d', core): return True                        # 2026, B2B, 3D
    return False


def looks_title_case(text, nouns):
    """True when two or more non-initial words are Capitalised without a reason."""
    if not text: return False
    parts = re.split(r':\s+', str(text), maxsplit=1)
    hits = 0; eligible = 0
    for pi, part in enumerate(parts):
        words = WORD.findall(part)
        for i, w in enumerate(words):
            if i == 0: continue
            if is_protected(w, nouns): continue
            if len(w) < 3 and w.lower() in SMALL: continue
            eligible += 1
            if re.fullmatch(r"[A-Z][a-z'’]+", w): hits += 1
    return hits >= 2 and eligible and hits / eligible >= 0.5


def to_sentence_case(text, nouns, canon=None):
    """Lower-case every word except the first, the first after a colon, and protected words."""
    canon = canon or {}
    out = []
    parts = re.split(r'(:\s+)', str(text))
    for k, part in enumerate(parts):
        if k % 2 == 1: out.append(part); continue
        pos = 0; buf = ''
        first = True
        for m in WORD.finditer(part):
            buf += part[pos:m.start()]; w = m.group(0)
            if first:
                buf += w if (is_protected(w, nouns) or w[0].isupper()) else w[0].upper() + w[1:]
                first = False
            elif is_protected(w, nouns):
                buf += canon.get(w.lower(), w)
            else:
                # hyphenated compounds: lower each half unless protected
                buf += '-'.join(h if is_protected(h, nouns) else h.lower() for h in w.split('-'))
            pos = m.end()
        buf += part[pos:]; out.append(buf)
    return ''.join(out)


def scan(run, extra='', apply=False):
    nouns = noun_set(run, extra)
    canon = {}
    for v in list((run.get('client') or {}).get('proper_nouns') or []) + [(run.get('client') or {}).get('name') or '']:
        for w in str(v).split(): canon[w.lower()] = w
    changes = []
    for p in run.get('pages', []):
        for field in ('h1', 'meta'):
            v = p.get(field)
            if looks_title_case(v, nouns):
                fixed = to_sentence_case(v, nouns, canon); changes.append((p['url'], field, v, fixed))
                if apply: p[field] = fixed
        if p.get('h2_outline'):
            h2s = [h.strip() for h in str(p['h2_outline']).split('|')]
            new = []
            for h in h2s:
                if looks_title_case(h, nouns):
                    f = to_sentence_case(h, nouns, canon); changes.append((p['url'], 'h2', h, f)); new.append(f)
                else: new.append(h)
            if apply: p['h2_outline'] = ' | '.join(new)
    return changes


if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('run', nargs='?'); ap.add_argument('--apply', action='store_true')
    ap.add_argument('--text'); ap.add_argument('--nouns', default='')
    a = ap.parse_args()
    if a.text:
        nouns = noun_set({}, a.nouns); print(to_sentence_case(a.text, nouns)); sys.exit(0)
    run = json.load(open(a.run)); ch = scan(run, a.nouns, a.apply)
    if a.apply: json.dump(run, open(a.run, 'w'), indent=1, ensure_ascii=False)
    for u, f, old, new in ch: print(f"{u} [{f}]\n  - {old}\n  + {new}")
    print(json.dumps({'flagged': len(ch), 'applied': a.apply}))
