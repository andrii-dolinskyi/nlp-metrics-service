#!/usr/bin/env python3
"""Embed the writer guidelines and the style editor prompt into the n8n Code node sources.

docs/prompts/cm6_writer_guidelines.md -> n8n/cm6/prep_writer.js (const G = `...`)
docs/prompts/cm6_style_editor.md      -> n8n/cm6/prep_update.js (const T = `...`)
Run from the repo root after editing either markdown file, then push and call the CM6 Code Loader.
"""
import os, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def tpl(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
def embed(js_path, md_path, var):
    js = open(os.path.join(ROOT, js_path)).read()
    md = open(os.path.join(ROOT, md_path)).read()
    pat = re.compile(r'const ' + var + r' = `[\s\S]*?`;\n')
    assert pat.search(js), 'template not found in ' + js_path
    js = pat.sub(lambda m: 'const ' + var + ' = `' + tpl(md) + '`;\n', js, count=1)
    open(os.path.join(ROOT, js_path), 'w').write(js)
    print('embedded', md_path, 'into', js_path)
embed('n8n/cm6/prep_writer.js', 'docs/prompts/cm6_writer_guidelines.md', 'G')
embed('n8n/cm6/prep_update.js', 'docs/prompts/cm6_style_editor.md', 'T')
