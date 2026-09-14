#!/usr/bin/env python3
"""Render the Content Maker 6.0 writer page brief for every page type.

Mirrors the `Page Contract` and `Prep Writer` code nodes of the workflow so the
docs in docs/prompts/ show exactly what the writer receives for each type,
using one identical sample request. Run from the repo root:

    python3 tools/render_writer_briefs.py
"""
import json
import os
from collections import OrderedDict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPECS = os.path.join(ROOT, 'skills', 'content-map-builder', 'assets', 'page_type_specs.json')
OUT = os.path.join(ROOT, 'docs', 'prompts')

FAMILIES = ['hub', 'guide', 'reference', 'evaluation', 'offer', 'proof', 'entity', 'tool', 'asset', 'local', 'catalogue', 'ops']

SAMPLE = {
    'clientName': 'Example Client',
    'clientDescription': 'What the client does, as sent by the app.',
    'h1': 'Sample H1 sent by the app',
    'coreKeyword': 'sample core keyword',
    'secondaryKeywords': ['secondary one', 'secondary two'],
    'targetLanguage': 'English',
    'isLang': False,
    'h2Outline': [
        {'h2': 'First H2 from the app', 'format': ''},
        {'h2': 'Second H2 from the app', 'format': 'table'},
        {'h2': 'Third H2 from the app', 'format': ''},
        {'h2': 'Fourth H2 from the app', 'format': ''},
    ],
    'aiPrompts': ['First AI prompt sent by the app?', 'Second AI prompt sent by the app?'],
    'internalLinks': [{'url': 'https://example.com/published-page/', 'anchor': 'anchor text from the app'}],
    'facts': OrderedDict([('fact_key_1', 'fact value from the app'), ('fact_key_2', ['list', 'of', 'values'])]),
    'ctaRules': 'CTA rule sent by the app.',
    'ctaUrl': 'https://example.com/contact/',
    'writingPreferences': '',
}

FMT = {'table': 'as a markdown table with a header row', 'steps': 'as numbered steps', 'bullets': 'as a short bulleted list', 'prose': 'as prose', 'cards': 'as short titled blocks'}


def num(v, d):
    return d if v in (None, '') else int(v)


def contract(spec, r):
    """Port of the Page Contract node."""
    S = {
        'typeId': spec['type_id'], 'label': spec.get('label') or spec['type_id'], 'family': str(spec.get('family') or 'guide').lower(),
        'definition': spec.get('definition') or '',
        'wordsMin': num(spec.get('words_min'), 800), 'wordsMax': num(spec.get('words_max'), 2000), 'defaultWords': num(spec.get('default_words'), 1200),
        'answerParagraph': spec.get('answer_paragraph') in (True, 'true'), 'answerStyle': str(spec.get('answer_style') or 'none'),
        'answerMaxWords': num(spec.get('answer_max_words'), 80),
        'tablesMin': num(spec.get('tables_min'), 0), 'citationsMin': num(spec.get('citations_min'), 0), 'research': str(spec.get('research') or 'none').lower(),
        'constraints': str(spec.get('constraints') or ''), 'opening': str(spec.get('opening') or ''), 'formatHints': str(spec.get('section_format_hints') or ''),
        'aiWritable': str(spec.get('ai_writable') or 'Y').upper(),
    }
    if S['research'] == 'none':
        S['citationsMin'] = 0
    n = len(r['h2Outline'])
    per = round((S['defaultWords'] - (S['answerMaxWords'] if S['answerParagraph'] else 60)) / max(n, 1))
    per = max(90, min(per, 450))
    sections = [{'index': i + 1, 'h2': h['h2'], 'format': h.get('format') or '', 'words': per} for i, h in enumerate(r['h2Outline'])]
    return S, sections


def brief(S, sections, r):
    """Port of the page brief part of the Prep Writer node."""
    sec = '\n'.join('  %d. %s [%d words%s]' % (s['index'], s['h2'], s['words'], (', ' + FMT[s['format']]) if s['format'] in FMT else '') for s in sections)
    hints = ', '.join(x + ' (' + FMT[x] + ')' for x in [h.strip() for h in S['formatHints'].split(',')] if x in FMT)
    links = '\n'.join('  - ' + l['url'] + ((' (anchor: ' + l['anchor'] + ')') if l.get('anchor') else '') for l in r['internalLinks'])
    prompts = '\n'.join('  %d. %s' % (i + 1, p) for i, p in enumerate(r['aiPrompts']))
    facts = '\n'.join('- ' + k + ': ' + (v if isinstance(v, str) else json.dumps(v, separators=(',', ':'))) for k, v in r['facts'].items())
    if S['answerParagraph']:
        ans = 'Opening paragraph: a direct answer of 40 to %d words in the %s style (%s). No heading above it, no preamble. It answers the question the H1 implies.' % (S['answerMaxWords'], S['answerStyle'].replace('_', ' ', 1), S['opening'])
    else:
        ans = 'Opening paragraph: ' + (S['opening'] or 'two or three sentences that open the page') + '. Not a definitional answer paragraph. Then begin the first H2.'
    if S['research'] == 'deep':
        research = 'Research this page thoroughly with the Live Research tool: every statistic, price, study result and quote needs a real source you found.'
    elif S['research'] == 'search':
        research = 'Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.'
    else:
        research = 'This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.'
    lines = [
        '<page_brief>',
        'Page type: %s (%s family). %s' % (S['label'], S['family'], S['definition']),
        'Client: ' + r['clientName'],
        'What the client does: ' + (r['clientDescription'] or 'not supplied'),
        'H1 (use verbatim): ' + r['h1'],
        ('Core keyword: ' + r['coreKeyword']) if r['coreKeyword'] else 'Core keyword: none',
        ('Secondary keywords: ' + ', '.join(r['secondaryKeywords'])) if r['secondaryKeywords'] else '',
        'Language: write in English.' + ((' A later step translates the page into ' + r['targetLanguage'] + '.') if r['isLang'] else ''),
        '',
        'Structure:',
        '- ' + ans,
        '- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.',
        sec,
        ('- Preferred formats for this page type, where a section has no format of its own: ' + hints + '.') if hints else '',
        '- Total length: %d to %d words. Aim for about %d.' % (S['wordsMin'], S['wordsMax'], S['defaultWords']),
        ('- Include at least %d markdown table where a section suits one. Real pipe tables with a header row.' % S['tablesMin']) if S['tablesMin'] > 0 else '- Tables are optional. Use one only where it helps the reader.',
        ('- Include at least %d external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.' % S['citationsMin']) if S['citationsMin'] > 0 else '- External citations are optional. Any you use must come from the Live Research tool.',
        '- Research: ' + research,
        '- Every H2 section opens with a sentence that answers that section directly, then explains, then evidences.',
        '- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.',
        '',
        'Questions this page must answer:',
        ('Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.\n' + prompts) if prompts else 'No target questions were supplied.',
        '',
        'Internal links:',
        ('Place every one of these exactly once, in body text, with the given anchor or a natural variant of it. Never in the H1, the opening paragraph, a heading, a table or a list of links. Never invent any other internal link.\n' + links) if links else 'None. Do not invent any.',
        '',
        'Client facts:',
        ('These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.\n' + facts) if facts else 'No client facts were supplied. Make no claim about the client beyond what this brief says. General knowledge about the field is welcome.',
        '',
        'Hard rules for this page:',
        '- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.',
        '- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.',
        '- No exclamation marks.',
        ('- Page type constraints: ' + S['constraints']) if S['constraints'] else '',
        '',
        'CTA:',
        ('The final section closes with a call to action paragraph that follows this rule: ' + r['ctaRules'] + ((' Link the action to ' + r['ctaUrl'] + ' with a plain anchor of two to four words.') if r['ctaUrl'] else '') + ' No button, no heading.') if r['ctaRules'] else 'There is no CTA on this page. Write none.',
        '</page_brief>',
    ]
    return '\n'.join(lines)


SPEC_KEYS = ['words_min', 'words_max', 'default_words', 'answer_paragraph', 'answer_style', 'tables_min', 'citations_min', 'research', 'section_format_hints', 'schema_types']


def main():
    specs = json.load(open(SPECS))
    by_family = OrderedDict((f, []) for f in FAMILIES)
    for s in specs:
        by_family.setdefault(str(s.get('family')).lower(), []).append(s)
    for fam, rows in by_family.items():
        out = ['# Writer page briefs: `%s` family (%d types)' % (fam, len(rows)), '',
               'Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.', '']
        for s in rows:
            S, sections = contract(s, SAMPLE)
            title = '## `%s` (%s)' % (s['type_id'], S['label'])
            if S['aiWritable'] == 'N':
                title += ' — not written by the flow (ai_writable = N), shown for completeness'
            out += [title, '', 'Spec: ' + json.dumps(OrderedDict((k, s.get(k)) for k in SPEC_KEYS)), '', '```text', brief(S, sections, SAMPLE), '```', '']
        with open(os.path.join(OUT, fam + '.md'), 'w') as f:
            f.write('\n'.join(out))
    print('rendered', sum(len(v) for v in by_family.values()), 'types into', OUT)


if __name__ == '__main__':
    main()
