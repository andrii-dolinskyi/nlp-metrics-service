#!/usr/bin/env python3
"""Keep the writer guidelines and the style editor prompt in step with the n8n Code node sources.

docs/prompts/cm6_writer_guidelines.md <-> n8n/cm6/prep_writer.js (const G = `...`)
docs/prompts/cm6_style_editor.md      <-> n8n/cm6/prep_update.js (const T = `...`)

  python3 tools/build_n8n_code.py            embed the markdown files into the JS (edit the markdown, then run this,
                                             push and call the CM6 Code Loader)
  python3 tools/build_n8n_code.py --extract  the other way round: after a prompt was edited inside the n8n editor and
                                             the node code was copied back into the JS, regenerate the markdown from it
"""
import os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAIRS = [('n8n/cm6/prep_writer.js', 'docs/prompts/cm6_writer_guidelines.md', 'G'),
         ('n8n/cm6/prep_update.js', 'docs/prompts/cm6_style_editor.md', 'T')]
def tpl(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
def untpl(s):
    return s.replace('\\${', '${').replace('\\`', '`').replace('\\\\', '\\')
def pattern(var):
    return re.compile(r'const ' + var + r' = `((?:[^`\\]|\\.)*)`;\n')
def embed(js_path, md_path, var):
    js = open(os.path.join(ROOT, js_path)).read()
    md = open(os.path.join(ROOT, md_path)).read()
    pat = pattern(var)
    assert pat.search(js), 'template not found in ' + js_path
    js = pat.sub(lambda m: 'const ' + var + ' = `' + tpl(md) + '`;\n', js, count=1)
    open(os.path.join(ROOT, js_path), 'w').write(js)
    print('embedded', md_path, 'into', js_path)
def extract(js_path, md_path, var):
    js = open(os.path.join(ROOT, js_path)).read()
    m = pattern(var).search(js)
    assert m, 'template not found in ' + js_path
    open(os.path.join(ROOT, md_path), 'w').write(untpl(m.group(1)))
    print('extracted', var, 'from', js_path, 'into', md_path)
for js_path, md_path, var in PAIRS:
    (extract if '--extract' in sys.argv else embed)(js_path, md_path, var)
