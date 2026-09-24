#!/usr/bin/env python3
"""Render the Content Maker 6.0 writer page brief for every page type.

Runs the real node code (n8n/cm6/page_contract.js and n8n/cm6/prep_writer.js) under Node with a stub for `$`,
one identical sample request per search intent, so docs/prompts/ shows exactly what the writer receives for each
type. Run from the repo root: python3 tools/render_writer_briefs.py
"""
import json
import os
import subprocess
from collections import OrderedDict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPECS = os.path.join(ROOT, 'skills', 'content-map-builder', 'assets', 'page_type_specs.json')
OUT = os.path.join(ROOT, 'docs', 'prompts')
FAMILIES = ['hub', 'guide', 'reference', 'evaluation', 'offer', 'proof', 'entity', 'tool', 'asset', 'local', 'catalogue', 'ops']
INTENT_OF_FAMILY = {'hub': 'informational', 'guide': 'informational', 'reference': 'informational', 'evaluation': 'commercial', 'offer': 'transactional', 'proof': 'transactional', 'entity': 'navigational', 'tool': 'informational', 'asset': 'informational', 'local': 'transactional', 'catalogue': 'transactional', 'ops': 'navigational'}

SAMPLE = {
    'clientName': 'Example Client', 'clientDescription': 'What the client does, as sent by the app.',
    'h1': 'Sample H1 sent by the app', 'coreKeyword': 'sample core keyword', 'secondaryKeywords': ['secondary one', 'secondary two'],
    'targetLanguage': 'English', 'isLang': False,
    'h2Outline': ['First H2 from the app', 'Second H2 from the app', 'Third H2 from the app', 'Fourth H2 from the app'],
    'aiPrompts': ['First AI prompt sent by the app?', 'Second AI prompt sent by the app?'],
    'siteRootUrl': 'https://example.com',
    'facts': OrderedDict([('fact_key_1', 'fact value from the app'), ('fact_key_2', ['list', 'of', 'values'])]),
    'ctaRules': 'CTA rule sent by the app.', 'ctaUrl': 'https://example.com/contact/', 'writingPreferences': '',
}

HARNESS = r'''
const fs = require('fs');
const [specs, sample] = JSON.parse(fs.readFileSync(0, 'utf8'));
const contract = new Function(fs.readFileSync('n8n/cm6/page_contract.js', 'utf8'));
const writer = new Function(fs.readFileSync('n8n/cm6/prep_writer.js', 'utf8'));
const out = {};
for (const spec of specs) {
  const r = Object.assign({}, sample, { pageType: spec.type_id, searchIntent: spec.__intent });
  global.$ = name => ({ first: () => ({ json: name === 'Parse Request' ? r : c }) });
  global.$input = { all: () => [{ json: spec }] };
  var c = contract()[0].json;
  const sys = writer()[0].json.system;
  const i = sys.indexOf('<page_brief>');
  out[spec.type_id] = { brief: sys.slice(i, sys.indexOf('</page_brief>') + '</page_brief>'.length), tail: sys.slice(sys.indexOf('<custom_rules>')) };
}
process.stdout.write(JSON.stringify(out));
'''

SPEC_KEYS = ['words_count_approx', 'answer_paragraph', 'answer_style', 'tables_min', 'research', 'closing_heading', 'cta_mode', 'faq_required', 'schema_types']


def main():
    specs = json.load(open(SPECS))
    for s in specs:
        s['__intent'] = INTENT_OF_FAMILY.get(str(s.get('family')).lower(), 'informational')
    res = subprocess.run(['node', '-e', HARNESS], input=json.dumps([specs, SAMPLE]), capture_output=True, text=True, cwd=ROOT)
    if res.returncode:
        raise SystemExit(res.stderr)
    briefs = json.loads(res.stdout)
    by_family = OrderedDict((f, []) for f in FAMILIES)
    for s in specs:
        by_family.setdefault(str(s.get('family')).lower(), []).append(s)
    for fam, rows in by_family.items():
        out = ['# Writer page briefs: `%s` family (%d types)' % (fam, len(rows)), '',
               'Rendered by `tools/render_writer_briefs.py` from the real node code with the sample request described in [README.md](README.md), search intent `%s`. Lines that come from the spec row are the ones to review.' % INTENT_OF_FAMILY[fam], '']
        for s in rows:
            out += ['## `%s` (%s)' % (s['type_id'], s['label']), '', 'Spec: ' + json.dumps(OrderedDict((k, s.get(k)) for k in SPEC_KEYS)), '', '```text', briefs[s['type_id']]['brief'], '```', '']
        with open(os.path.join(OUT, fam + '.md'), 'w') as f:
            f.write('\n'.join(out))
    readme = ['# Content Maker 6.0 writer prompts, all %d page types' % len(specs), '',
              "The writer's system prompt is assembled at run time from two parts:", '',
              '1. **Static guidelines**, identical for every page type: persona, the plain style frame, tone guidelines, the pattern rules, link rules and keyword rules. Kept as a template string inside the `Prep Writer` Code node; the source is [`cm6_writer_guidelines.md`](cm6_writer_guidelines.md), embedded into `n8n/cm6/prep_writer.js` by `tools/build_n8n_code.py` and written into the node by the CM6 Code Loader.',
              '2. **The page brief**, built by the `Prep Writer` node from the `page_type_specs` row, the search intent and the request, followed by the custom rules block (writing preferences), the action plan and the expected page items. The page type line, the search intent block, the opening rule, the closing section, the table minimum, the length and the CTA text are the lines that differ between types and intents; the structure rules (format per section decided from the heading and research, at least two H3s under the H2 that splits, supplied H2s word for word with the freedom to add H2s), the fact rule (facts blended where they support the point) and the hard rules are the same for every type.', '',
              'The files below show the page brief for every type, rendered with one identical sample request (four outline headings, two questions, two facts, a CTA rule and URL) and the search intent typical for the family. The blocks that follow the brief in the real prompt (custom rules, action plan, expected page items) are shown once at the end of this page.', '',
              '| Family | Types | Intent used | File |', '|---|---|---|---|']
    for fam, rows in by_family.items():
        readme.append('| `%s` | %d | %s | [%s.md](%s.md) |' % (fam, len(rows), INTENT_OF_FAMILY[fam], fam, fam))
    readme += ['', '## Search intent blocks', '', 'One of these follows the page type line, chosen by `searchIntent` in the request:', '']
    seen = set()
    for s in specs:
        it = s['__intent']
        if it in seen:
            continue
        seen.add(it)
        b = briefs[s['type_id']]['brief']
        line = [l for l in b.split('\n') if l.startswith('Search intent: ')][0]
        readme += ['- **%s**: %s' % (it, line[len('Search intent: ') + len(it) + 2:]), '']
    first = specs[0]['type_id']
    readme += ['## Blocks after the page brief (same for every type)', '', '```text', briefs[first]['tail'], '```', '']
    with open(os.path.join(OUT, 'README.md'), 'w') as f:
        f.write('\n'.join(readme))
    print('rendered', len(specs), 'types into', OUT)


if __name__ == '__main__':
    main()
