#!/usr/bin/env python3
"""Select localised keywords from measured candidates.

usage: localise.py run.json [--exclude "nomenclature,clp,traçabilité"]

Reads run.pages[].loc_candidates[CODE] (list of candidate strings) and run.measurements["<location>|<lang>"]
(keyword -> CM Measure row). Writes run.pages[].loc[CODE] = {keyword, vol, vol_display, kd, yoy}.
Rule: highest measured volume wins; ties keep candidate order (first = closest literal analogue);
no term used on more than one page per language; excluded ambiguous words never chosen when an alternative exists;
'<10' with the first candidate when nothing measured. Pages are processed in descending primary volume so the
page with real demand gets the shared term.
"""
import json, sys, argparse


def main():
    ap = argparse.ArgumentParser(); ap.add_argument('run'); ap.add_argument('--exclude', default='')
    a = ap.parse_args(); run = json.load(open(a.run))
    excl = {x.strip().lower() for x in a.exclude.split(',') if x.strip()}
    markets = {m['code']: m for m in run['client']['markets'] if not m.get('primary')}
    meas = run.get('measurements', {})
    def vol(code, k):
        m = markets[code]; tab = meas.get(f"{m['location_name']}|{m['language_code']}", {})
        row = tab.get(k.lower()) or tab.get(k); return row
    def pv(p):
        v = p['core'].get('vol'); return v if isinstance(v, (int, float)) else 0
    used = {c: set() for c in markets}; report = {c: {'measured': 0, 'lt10': 0, 'forced_dup': []} for c in markets}
    for p in sorted(run['pages'], key=lambda x: -pv(x)):
        p.setdefault('loc', {})
        for code in markets:
            cands = [c for c in (p.get('loc_candidates') or {}).get(code, []) if c]
            if not cands:
                continue
            pool = [c for c in cands if c.lower() not in excl] or cands
            ranked = sorted(pool, key=lambda k: -(((vol(code, k) or {}).get('vol') or 0)))
            chosen = next((k for k in ranked if k.lower() not in used[code]), None)
            if chosen is None:
                chosen = ranked[0]; report[code]['forced_dup'].append((p['url'], chosen))
            used[code].add(chosen.lower())
            row = vol(code, chosen) or {}
            v = row.get('vol')
            p['loc'][code] = {'keyword': chosen, 'vol': v, 'vol_display': v if isinstance(v, (int, float)) and v >= 10 else '<10',
                              'kd': row.get('kd'), 'yoy': row.get('yoy')}
            report[code]['measured' if isinstance(v, (int, float)) and v >= 10 else 'lt10'] += 1
    json.dump(run, open(a.run, 'w'), ensure_ascii=False, indent=1)
    print(json.dumps(report, ensure_ascii=False, indent=1))


if __name__ == '__main__':
    main()
