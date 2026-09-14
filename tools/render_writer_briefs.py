#!/usr/bin/env python3
"""Render the Content Maker 6.0 writer page brief for every page type.

Mirrors the `Page Contract` and `Prep Writer` code nodes of the workflow so the
docs in docs/prompts/ show exactly what the writer receives for each type,
using one identical sample request. Run from the repo root:

    python3 tools/render_writer_briefs.py
"""
import json
import os
import re
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
    'h2Outline': ['First H2 from the app', 'Second H2 from the app', 'Third H2 from the app', 'Fourth H2 from the app'],
    'aiPrompts': ['First AI prompt sent by the app?', 'Second AI prompt sent by the app?'],
    'siteRootUrl': 'https://example.com',
    'facts': OrderedDict([('fact_key_1', 'fact value from the app'), ('fact_key_2', ['list', 'of', 'values'])]),
    'ctaRules': 'CTA rule sent by the app.',
    'ctaUrl': 'https://example.com/contact/',
    'writingPreferences': '',
}

CLOSING_RE = re.compile(r'^(what to do next|next steps?|where to (start|go next)|how to (get started|start|book|apply|order|join|enrol|enroll|register|contact|reach|choose|decide|claim|install|sign up|switch|work with)|get(ting)? started|book |contact |talk to |request |our verdict|which (one |alternative |category )?(to choose|fits)|when to (see|call|get|talk)|conclusion|summary|final thoughts|key takeaways|wrapping up|in summary|to sum up|the bottom line)', re.I)

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
        'constraints': str(spec.get('constraints') or ''), 'opening': str(spec.get('opening') or ''),
        'aiWritable': str(spec.get('ai_writable') or 'Y').upper(),
        'closingMode': str(spec.get('closing_mode') or 'none').lower(), 'closingHeading': str(spec.get('closing_heading') or ''), 'closingContent': str(spec.get('closing_content') or ''),
        'ctaMode': str(spec.get('cta_mode') or 'none').lower(), 'ctaGuidance': str(spec.get('cta_guidance') or ''), 'formatRules': str(spec.get('format_rules') or ''),
        'h3Policy': str(spec.get('h3_policy') or 'optional'),
    }
    S['h3Mode'] = (re.split(r'[:.]', S['h3Policy'])[0] or 'optional').strip().lower()
    if S['h3Mode'] not in ('required', 'optional', 'none'):
        S['h3Mode'] = 'optional'
    if S['research'] == 'none':
        S['citationsMin'] = 0
    outline = r['h2Outline']
    n = len(outline)
    last_is_closing = n > 1 and bool(CLOSING_RE.match(outline[-1]))
    append_closing = S['closingMode'] == 'append' and not last_is_closing
    cta_mode = S['ctaMode']
    if cta_mode == 'optional' and not r['ctaRules'] and not r['ctaUrl']:
        cta_mode = 'none'
    per = round((S['defaultWords'] - (S['answerMaxWords'] if S['answerParagraph'] else 60) - (100 if append_closing else 0)) / max(n, 1))
    per = max(90, min(per, 450))
    sections = [{'index': i + 1, 'h2': h, 'words': per, 'isClosing': (not append_closing) and i == n - 1 and (last_is_closing or cta_mode != 'none')} for i, h in enumerate(outline)]
    closing = {'index': n + 1, 'headingPatterns': S['closingHeading'], 'content': S['closingContent'], 'words': 100} if append_closing else None
    c = {'sections': sections, 'closing': closing, 'ctaMode': cta_mode, 'closingSectionIndex': n + 1 if append_closing else n, 'isLang': r['isLang']}
    return S, c


def brief(S, c, r):
    """Port of the page brief part of the Prep Writer node."""
    sections = c['sections']
    sec = '\n'.join('  %d. %s [%d words]%s' % (s['index'], s['h2'], s['words'], ' (this is the closing section, see below)' if s['isClosing'] else '') for s in sections)
    if c['closing']:
        closing_line = '  %d. A closing H2 that you write yourself [about %d words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: %s. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: %s' % (c['closing']['index'], c['closing']['words'], c['closing']['headingPatterns'], c['closing']['content'])
    elif any(s['isClosing'] for s in sections):
        closing_line = '  The last section above is the closing section. Content: ' + (S['closingContent'] or 'the one decision or action the reader should take now, in 60 to 120 words, without recapping the page')
    else:
        closing_line = ''
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
    strip = lambda mode: re.sub(r'^' + mode + r'[:.]?\s*', '', S['h3Policy'], flags=re.I)
    if S['h3Mode'] == 'none':
        h3 = 'No H3 subheadings on this page type. ' + strip('none')
    else:
        h3 = ('H3 subheadings are required: ' + strip('required') if S['h3Mode'] == 'required' else 'H3 subheadings are optional: ' + strip('optional')) + ' When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.'
    if c['ctaMode'] == 'none':
        cta = 'There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.'
    else:
        cta = 'One call to action, in the closing section only (section %d). ' % c['closingSectionIndex'] + (S['ctaGuidance'] or 'Two or three plain sentences that say what the client does on this subject, from the facts, and ask for one action.') + ' The action: ' + (r['ctaRules'] or 'the action that fits this page type, in the words the facts support') + '. ' + (('Link the action to ' + r['ctaUrl'] + " with a plain anchor of two to four words. That is the only link to the client's site on the page.") if r['ctaUrl'] else 'No CTA URL was supplied, so name the action in words without a link.') + ' Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.'
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
        '- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.',
        sec,
        closing_line,
        '- Formats for this page type: ' + (S['formatRules'] or 'prose by default; a table where a section compares or lists figures; numbered steps for a sequence; bullets only for four or more short items') + ' Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.',
        ('- Include at least %d markdown table%s where a section suits one. Real pipe tables with a header row.' % (S['tablesMin'], 's' if S['tablesMin'] > 1 else '')) if S['tablesMin'] > 0 else '- Tables are optional. Use one only where it helps the reader.',
        '- ' + h3,
        '- Total length: %d to %d words. Aim for about %d.' % (S['wordsMin'], S['wordsMax'], S['defaultWords']),
        ('- Include at least %d external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.' % S['citationsMin']) if S['citationsMin'] > 0 else '- External citations are optional. Any you use must come from the Live Research tool.',
        '- Research: ' + research,
        '- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.',
        '- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.',
        '',
        'Questions this page must answer:',
        ('Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.\n' + prompts) if prompts else 'No target questions were supplied.',
        '',
        'Client facts:',
        ('These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.\n' + facts) if facts else 'No client facts were supplied. Make no claim about the client beyond what this brief says. General knowledge about the field is welcome.',
        '',
        'Hard rules for this page:',
        '- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.',
        "- Never link to the client's own website" + ((' (' + r['siteRootUrl'] + ')') if r.get('siteRootUrl') else '') + " and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.",
        '- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.',
        '- No exclamation marks.',
        ('- Page type constraints: ' + S['constraints']) if S['constraints'] else '',
        '',
        'CTA:',
        cta,
        '</page_brief>',
    ]
    return '\n'.join(lines)


SPEC_KEYS = ['words_min', 'words_max', 'default_words', 'answer_paragraph', 'answer_style', 'tables_min', 'citations_min', 'research', 'closing_mode', 'cta_mode', 'h3_policy', 'schema_types']


def main():
    specs = json.load(open(SPECS))
    by_family = OrderedDict((f, []) for f in FAMILIES)
    for s in specs:
        by_family.setdefault(str(s.get('family')).lower(), []).append(s)
    for fam, rows in by_family.items():
        out = ['# Writer page briefs: `%s` family (%d types)' % (fam, len(rows)), '',
               'Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.', '']
        for s in rows:
            S, c = contract(s, SAMPLE)
            title = '## `%s` (%s)' % (s['type_id'], S['label'])
            if S['aiWritable'] == 'N':
                title += ' — not written by the flow (ai_writable = N), shown for completeness'
            out += [title, '', 'Spec: ' + json.dumps(OrderedDict((k, s.get(k)) for k in SPEC_KEYS)), '', '```text', brief(S, c, SAMPLE), '```', '']
        with open(os.path.join(OUT, fam + '.md'), 'w') as f:
            f.write('\n'.join(out))
    print('rendered', sum(len(v) for v in by_family.values()), 'types into', OUT)


if __name__ == '__main__':
    main()
