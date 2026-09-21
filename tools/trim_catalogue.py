#!/usr/bin/env python3
"""Remove the page types that need structured data from the client, and make every remaining
schema_types value self-filling (built from the request, the page and the author field).
Run from the repo root: python3 tools/trim_catalogue.py
"""
import json, os, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
A = os.path.join(ROOT, 'skills', 'content-map-builder', 'assets')
REMOVE = ['event_page', 'webinar_page', 'job_posting_page', 'job_category_page', 'product_page', 'listing_detail_page', 'model_research_page', 'recipe_page', 'video_page', 'podcast_episode_page', 'course_program_page', 'original_dataset_page', 'infographic_data_viz_page', 'accommodation_room_page', 'tour_package_page', 'menu_page', 'app_marketplace_listing']
KEEP = {'Article', 'BlogPosting', 'NewsArticle', 'TechArticle', 'Report', 'MedicalWebPage', 'WebPage', 'WebSite', 'CollectionPage', 'AboutPage', 'ContactPage', 'QAPage', 'ProfilePage', 'Person', 'Organization', 'Service', 'LegalService', 'SoftwareApplication', 'WebApplication', 'DefinedTerm', 'DefinedTermSet', 'HowTo', 'FAQPage', 'BreadcrumbList'}
RENAME = {'CaseStudy': 'Article', 'CreativeWork': 'Article', 'DigitalDocument': 'Article', 'NGO': 'Organization', 'Brand': 'Organization', 'Physician': 'Person', 'MedicalOrganization': 'Organization', 'InsuranceAgency': 'Organization', 'AutoDealer': 'Organization', 'LocalBusiness': 'Organization', 'RealEstateAgent': 'Person', 'Attorney': 'Person', 'Quiz': 'WebApplication', 'SearchResultsPage': 'WebPage', 'Place': 'WebPage', 'TouristDestination': 'WebPage'}

def fix_schema(s):
    out = []
    for t in [x.strip() for x in str(s).split('+') if x.strip()]:
        t = RENAME.get(t, t)
        if t in KEEP and t not in out:
            out.append(t)
    if 'BreadcrumbList' not in out:
        out.append('BreadcrumbList')
    return ' + '.join(out)

specs = json.load(open(os.path.join(A, 'page_type_specs.json')))
specs = [s for s in specs if s['type_id'] not in REMOVE]
for s in specs:
    s['schema_types'] = fix_schema(s['schema_types'])
json.dump(specs, open(os.path.join(A, 'page_type_specs.json'), 'w'), indent=1, ensure_ascii=False)
json.dump(REMOVE, open(os.path.join(ROOT, 'n8n', 'removed_page_types.json'), 'w'), indent=1)

pt_path = os.path.join(A, 'page_types.json')
if os.path.exists(pt_path):
    pt = json.load(open(pt_path))
    if isinstance(pt, list):
        pt = [x for x in pt if x.get('type_id') not in REMOVE]
        for x in pt:
            if 'schema' in x: x['schema'] = fix_schema(x['schema'])
            if 'schema_types' in x: x['schema_types'] = fix_schema(x['schema_types'])
    elif isinstance(pt, dict):
        for k in REMOVE: pt.pop(k, None)
    json.dump(pt, open(pt_path, 'w'), indent=1, ensure_ascii=False)

md_path = os.path.join(ROOT, 'skills', 'content-map-builder', 'references', 'page_types.md')
lines = open(md_path).read().split('\n')
lines = [l for l in lines if not any(l.startswith('| `' + t + '`') for t in REMOVE)]
open(md_path, 'w').write('\n'.join(lines))
print('kept', len(specs), 'types; removed', len(REMOVE))
