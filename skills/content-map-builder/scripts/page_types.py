#!/usr/bin/env python3
"""Shared page-type helpers. Reads ../assets/page_types.json plus run.json client.custom_page_types.

  from page_types import Catalogue
  cat = Catalogue(run)            # run = parsed run.json (optional)
  cat.resolve('PILLAR HUB')       -> 'pillar_hub'   (aliases from the old label set)
  cat.info('service_page')        -> dict or None
  cat.label('service_page')       -> 'Service page'
  cat.family('service_page')      -> 'offer'
"""
import json, os

_ASSET = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'assets', 'page_types.json')


class Catalogue:
    def __init__(self, run=None):
        d = json.load(open(_ASSET))
        self.families = d['families']
        self.aliases = {k.lower(): v for k, v in d['aliases'].items()}
        self.types = {t['type_id']: t for t in d['types']}
        for t in ((run or {}).get('client') or {}).get('custom_page_types', []) or []:
            t = dict(t); t.setdefault('label', t['type_id'].replace('_', ' ').capitalize())
            t.setdefault('ai_writable', 'Y'); t.setdefault('answer_paragraph', False); t['custom'] = True
            self.types[t['type_id']] = t

    def resolve(self, value):
        v = str(value or '').strip()
        if v in self.types: return v
        return self.aliases.get(v.lower(), v.lower().replace(' ', '_').replace('-', '_'))

    def info(self, value):
        return self.types.get(self.resolve(value))

    def known(self, value):
        return self.resolve(value) in self.types

    def label(self, value):
        t = self.info(value); return t['label'] if t else str(value)

    def family(self, value):
        t = self.info(value); return t.get('family') if t else None

    def points(self, value):
        f = self.family(value); return self.families.get(f, {}).get('points', 8) if f else 8

    def low_volume_ok(self, value):
        f = self.family(value); return bool(self.families.get(f, {}).get('low_volume_ok')) if f else False
