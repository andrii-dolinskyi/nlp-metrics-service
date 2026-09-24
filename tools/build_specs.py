#!/usr/bin/env python3
"""Build the Content Maker 6.0 page-type spec table.

Reads skills/content-map-builder/assets/page_type_specs.json, keeps the columns Content Maker 6.0 reads,
applies the per-type values below and writes the file back with exactly this column set:

  type_id, label, family, definition, industries, words_count_approx, answer_paragraph, answer_style,
  answer_max_words, tables_min, research, schema_types, opening, closing_heading, cta_mode, faq_required

  definition          two or three sentences: what the page is for and what a reader expects to find on it
  words_count_approx  the length the writer aims for (the brief says "about N words")
  closing_heading     heading patterns for a closing H2 the writer adds after the app's outline; empty = no closing H2
  cta_mode            required | none
  faq_required        Y | N (5 FAQs written when Y, none on faq_page)

Format rules, H3 rules, fact lists, constraints and meta patterns are no longer columns: the writer decides
formats per section from research, and the facts are blended into the page where they fit.
It also writes docs/page-type-writing-rules.md. Run from the repo root: python3 tools/build_specs.py
"""
import json
import os
from collections import OrderedDict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPECS = os.path.join(ROOT, 'skills', 'content-map-builder', 'assets', 'page_type_specs.json')
DOC = os.path.join(ROOT, 'docs', 'page-type-writing-rules.md')

COLUMNS = ['type_id', 'label', 'family', 'definition', 'industries', 'words_count_approx', 'answer_paragraph', 'answer_style',
           'answer_max_words', 'tables_min', 'research', 'schema_types', 'opening', 'closing_heading', 'cta_mode', 'faq_required']

# type_id: (definition, words_count_approx, cta_mode)
T = {
    # hub
    'pillar_hub': ('The top page of a topic: it explains the whole subject in one place and links every cluster page beneath it. Readers expect a complete, well ordered overview they can read end to end or use as a map to the detailed pages.', 4000, 'none'),
    'cluster_hub': ('The index of one sub-topic inside a pillar: it explains that sub-topic and links its detailed pages. Readers expect a clear scope, the main points of the sub-topic and a route to each deeper page.', 2000, 'none'),
    'resource_library': ('An index of downloadable or watchable assets such as reports, templates, webinars and tools. Readers expect to see what is available, what each item is for and how to get it.', 600, 'none'),
    'blog_category_hub': ('The landing page of one blog category with an editorial introduction. Readers expect to learn what the category covers, who it is for and which articles to start with.', 400, 'none'),
    'glossary_index': ('The A to Z index of a glossary with one-line definitions. Readers expect to find a term quickly and understand the scope of the vocabulary the site explains.', 1000, 'none'),
    'service_area_hub': ('The index of every city or region the client serves. Readers expect to confirm their area is covered, see how service works there and reach the page for their own location.', 600, 'required'),
    'location_index': ('The directory of the client\'s physical branches, offices or stores. Readers expect addresses, hours and a fast way to pick the location nearest to them.', 400, 'none'),
    'industry_hub': ('The index of every industry the client serves. Readers expect to see whether their sector is covered, what changes per industry and where the page for their sector is.', 600, 'required'),
    'integration_directory': ('The index of integration pages grouped by category. Readers expect to check whether the tools they use connect, and what each connection does.', 600, 'none'),
    'template_gallery_hub': ('The index of templates or examples. Readers expect to see what templates exist, which situation each one fits and how to use them.', 600, 'none'),
    'topic_hub_programmatic': ('A programmatic hub for one modifier set, such as a topic by state or by industry. Readers expect the shared rules of the topic and a direct route to the page for their own modifier.', 600, 'none'),
    # guide
    'deep_dive_guide': ('The complete guide to one topic, written to answer every question a reader has on it. Readers expect depth: definitions, how it works, options, costs, timelines, mistakes and what to do next, in one authoritative page.', 4000, 'required'),
    'how_to': ('Step-by-step instructions for one task. Readers expect what they need before they start, the steps in order with what varies at each one, and how to know they succeeded.', 2000, 'required'),
    'supporting_article': ('A narrow cluster article that answers one sub-question of a larger topic. Readers expect a direct answer first, then the reasoning, the exceptions and what to check in their own case.', 1500, 'required'),
    'explainer_what_is': ('A conceptual article that explains what something is. Readers expect a clear definition, how it works, why it matters, where it applies and how it differs from things it is confused with.', 1600, 'required'),
    'checklist': ('An actionable checklist with the context behind each item. Readers expect a list they can work through, with what each item means, why it matters and what happens if it is skipped.', 1400, 'required'),
    'regulation_compliance_explainer': ('A plain-language explanation of a law, regulation or standard. Readers expect who it applies to, what it requires, deadlines and penalties, and the practical steps to comply.', 2500, 'required'),
    'process_page': ('An explanation of what happens when a reader works with the client, from first contact to the end. Readers expect the stages in order, how long each takes, what they must provide and what they get back.', 1200, 'required'),
    'mistakes_pitfalls': ('An article on the mistakes people make around one topic and how to avoid them. Readers expect each mistake named, why it happens, what it costs and the fix.', 1600, 'required'),
    'trend_outlook': ('A yearly trends or state-of-the-field article. Readers expect the main developments with figures and sources, what drives them, and what they mean for a reader\'s decisions this year.', 2500, 'none'),
    'symptom_problem_page': ('A page about a symptom or problem: why it happens and what to do about it. Readers expect the likely causes, how to tell them apart, what they can do themselves and when to get professional help.', 1600, 'required'),
    'destination_guide': ('A travel or area guide for one destination. Readers expect what to see and do, when to go, how to get around, costs and practical tips from someone who knows the place.', 3000, 'required'),
    'career_guide': ('A guide to becoming or working as one profession. Readers expect the requirements, training routes, time and cost, pay, daily work and how to take the first step.', 2000, 'none'),
    # reference
    'glossary_term': ('The definition of a single term. Readers expect a precise definition in the first sentence, then how the term is used, an example and how it differs from related terms.', 500, 'none'),
    'faq_page': ('A standalone page of questions and answers about one topic or service. Readers expect the real questions people ask, each answered directly in a few sentences, grouped so they can scan.', 1400, 'none'),
    'statistics_page': ('A curated roundup of statistics on one topic with sources. Readers expect current figures, each with its source and year, grouped by theme, and a note on how to read them.', 2500, 'none'),
    'spec_sheet': ('A technical specification page for one product or material. Readers expect exact figures, dimensions, tolerances, standards and compatibility in a form they can compare.', 700, 'none'),
    'question_page': ('A page that answers one specific question. Readers expect the answer in the first lines, then the conditions under which it changes and what to do with it.', 900, 'none'),
    'entity_lookup': ('A programmatic fact page about one entity such as a company, place or product. Readers expect the key facts in a consistent order, with sources and dates.', 600, 'none'),
    'country_region_guide': ('A regulatory or practical reference for one jurisdiction. Readers expect the rules that apply there, thresholds and deadlines, how it differs from elsewhere and what to check before acting.', 2000, 'none'),
    'salary_guide': ('A compensation reference for one role or region. Readers expect pay ranges by experience and location with sources and year, what moves pay up or down, and how to use the numbers.', 2000, 'none'),
    # evaluation
    'listicle_best_of': ('A ranked list of the best options in one category. Readers expect the criteria, a short verdict per option with who it suits, prices and a clear recommendation at the end.', 2500, 'none'),
    'head_to_head_vs': ('A comparison of two named options. Readers expect the differences that matter side by side, who each option suits, prices and a verdict they can act on.', 2000, 'none'),
    'alternatives_page': ('A list of alternatives to one named product or service. Readers expect why people switch, the strongest alternatives with who each suits, and how the client\'s option fits among them.', 2000, 'required'),
    'competitor_comparison_own': ('A first-party comparison of the client against one competitor. Readers expect a fair feature and price comparison, where each is stronger, and when to choose the client.', 1500, 'required'),
    'review_page': ('An in-depth review of one third-party product or service. Readers expect hands-on findings, strengths and weaknesses, price, who should buy it and who should not.', 2200, 'none'),
    'cost_page': ('An answer to how much something costs. Readers expect a typical range with the year, what drives the price up or down, example scenarios and how to get an accurate quote.', 2000, 'required'),
    'is_x_worth_it': ('A value judgement on one purchase or decision. Readers expect the costs against the benefits, when it pays off and when it does not, and a verdict for their situation.', 1500, 'required'),
    'diy_vs_pro': ('A comparison of doing something yourself against hiring a professional. Readers expect costs, time, risks and outcomes for each route, and a clear rule for when to call a professional.', 1500, 'required'),
    'category_comparison': ('A comparison of the types or categories within one field. Readers expect each type explained, the differences in a table, who each suits and how to choose.', 1800, 'required'),
    'buying_guide': ('A guide to choosing one kind of product or service, followed by picks. Readers expect the criteria that matter, mistakes to avoid, price bands and recommendations by need.', 2500, 'required'),
    'top_in_location': ('A list of the best providers of one thing in one city. Readers expect how the list was chosen, a short profile of each with location and price signals, and how to pick between them.', 1800, 'none'),
    'migration_switch_page': ('A guide to switching from one provider or product to another. Readers expect why to switch, what to prepare, the steps in order, what can go wrong and how long it takes.', 1500, 'required'),
    # offer
    'service_page': ('The core commercial page for one service. Readers expect what the service is, who it is for, what is included, how it works, what it costs or how pricing works, and how to start.', 1500, 'required'),
    'solution_use_case_page': ('The product presented around one job to be done. Readers expect the problem named as they experience it, how the product solves it, what changes in their work and proof.', 1200, 'required'),
    'industry_vertical_page': ('The product or service presented for one industry. Readers expect the sector\'s specific problems, how the offer handles them, relevant compliance or terms and industry proof.', 1300, 'required'),
    'role_persona_page': ('The product or service presented for one job title or persona. Readers expect their own goals and obstacles named, what the offer does for that role and how it fits their day.', 1100, 'required'),
    'segment_size_page': ('The offer presented for one company size or segment. Readers expect what matters at their size, which plan or setup fits, limits and pricing signals.', 1100, 'required'),
    'feature_page': ('One product feature explained. Readers expect what the feature does, the problem it removes, how it works in practice, limits and how to try it.', 1000, 'required'),
    'integration_page': ('The product together with one partner integration. Readers expect what the connection does, what data moves, setup steps and requirements, and the benefit of using both.', 900, 'required'),
    'x_for_y_programmatic': ('A templated offer page for one segment, place or use. Readers expect the offer adapted to their modifier with specific facts, not a generic page with the modifier swapped in.', 900, 'required'),
    'pricing_page': ('The plans, tiers and billing rules. Readers expect prices, what each plan includes, limits, how billing works and which plan fits which situation.', 800, 'required'),
    'product_landing_page': ('A long-form page for one product built to convince. Readers expect the outcome, how it works, specifications, proof, objections answered and how to buy.', 1700, 'required'),
    'quote_request_page': ('A page that leads to a quote or estimate request. Readers expect what the quote covers, what information they must give, how fast they get it and what happens next.', 500, 'required'),
    'brand_page': ('A brand or manufacturer page inside a retailer or distributor site. Readers expect what the brand makes, what it is known for, the ranges carried and how to buy.', 700, 'required'),
    'partnership_program_page': ('A partner, affiliate or reseller programme page. Readers expect who can join, what partners get, commission or terms, obligations and how to apply.', 900, 'required'),
    'membership_plan_page': ('A gym, club or subscription membership page. Readers expect the plans, what each includes, prices, terms such as commitment and cancellation, and how to join.', 900, 'required'),
    'financing_page': ('A payment plans and financing page. Readers expect the options, rates or terms, eligibility, an example of monthly cost and how to apply.', 800, 'required'),
    'ad_landing_page': ('A campaign landing page with a single action. Readers expect the offer they clicked on confirmed at once, the key benefits, proof and one clear action.', 650, 'required'),
    'squeeze_lead_magnet_page': ('A minimal page that exchanges an asset for contact details. Readers expect what the asset is, what they gain from it and what they must give to get it.', 300, 'required'),
    'pre_launch_waitlist_page': ('A coming-soon page that collects sign-ups. Readers expect what is launching, for whom, when, and what joining the waitlist gives them.', 300, 'required'),
    'donate_page': ('A donation page for a nonprofit. Readers expect what the money does, examples of impact per amount, ways to give, tax notes and how to donate.', 600, 'required'),
    'program_page': ('A nonprofit programme page. Readers expect who the programme serves, what it delivers, how it works, results so far and how to join, apply or support it.', 1100, 'required'),
    'specials_offers_page': ('A page of current promotions. Readers expect each offer with its terms, dates and conditions, and how to claim it.', 400, 'required'),
    # proof
    'case_study': ('The story of one client engagement. Readers expect who the client was, the problem, what was done, the measured results and what a similar project involves.', 1000, 'required'),
    'case_results_page': ('A list of verdicts, settlements or results. Readers expect each result with the case type, the amount or outcome and the context that makes it comparable to their own case.', 800, 'required'),
    'testimonials_reviews_page': ('An aggregated page of client reviews. Readers expect real quotes with names and context, an honest overall picture and how to work with the client.', 800, 'required'),
    'portfolio_project_page': ('One completed project. Readers expect the brief, the constraints, what was built or delivered, the outcome and what a similar project would involve.', 700, 'required'),
    'impact_report_page': ('A yearly impact summary. Readers expect the headline numbers, what changed for beneficiaries, how the money was used and what comes next.', 1800, 'none'),
    'awards_certifications_page': ('A page of credentials and accreditations. Readers expect each award or certification named with who issued it, the year and what it means for the client\'s work.', 550, 'none'),
    'customer_logos_wall': ('A trusted-by page of client logos. Readers expect who the client works with, grouped by sector or size, and a few words on what was done for them.', 250, 'none'),
    # entity
    'about_page': ('The company story, mission and facts. Readers expect who the company is, what it does, since when, who leads it, what it stands for and how to work with it.', 900, 'required'),
    'team_index': ('The team directory. Readers expect the people, their roles and specialties, and a route to each profile.', 350, 'none'),
    'team_member_bio': ('The profile of one staff member. Readers expect the role, expertise, credentials, experience and how to reach or work with this person.', 600, 'required'),
    'author_bio_page': ('The author page behind bylines. Readers expect who the author is, their expertise and credentials, what they write about and where else they are published.', 600, 'none'),
    'attorney_bio': ('The profile of one lawyer. Readers expect practice areas, bar admissions, education, notable matters, approach and how to book a consultation.', 900, 'required'),
    'provider_profile': ('The profile of one clinician. Readers expect specialties, credentials, conditions treated, approach, locations, insurance and how to book.', 700, 'required'),
    'agent_profile': ('The profile of one real estate or insurance agent. Readers expect the areas or lines served, experience, licences, results and how to contact the agent.', 650, 'required'),
    'partner_vendor_profile': ('A listing of one partner or vendor. Readers expect what the partner does, what it offers through the client, its credentials and how to engage it.', 550, 'none'),
    'company_facts_page': ('A programmatic profile of one company. Readers expect the key facts in a fixed order: what it does, size, location, founding, leadership and sources.', 550, 'none'),
    'press_room': ('The media kit and press release index. Readers expect company facts for journalists, brand assets, recent releases and the press contact.', 350, 'none'),
    'press_release_news': ('A single press release. Readers expect the news in the first paragraph, the facts and quotes that support it, background on the company and a contact.', 650, 'none'),
    # tool
    'calculator_page': ('A calculator with the copy that explains it. Readers expect what the tool calculates, the inputs and where to find them, how to read the result and what to do with it.', 1000, 'none'),
    'quiz_assessment_page': ('A self-assessment or eligibility quiz. Readers expect what the quiz determines, how long it takes, what each result means and what to do next.', 650, 'none'),
    'configurator_estimator': ('A configurator or instant estimate tool. Readers expect what can be configured, how the estimate is built, what it includes and how to turn it into a quote.', 550, 'required'),
    'generator_checker_tool': ('A free utility that generates or checks something. Readers expect what it does, how to use it, how to read the output and its limits.', 850, 'none'),
    'interactive_map_finder': ('A store or provider locator. Readers expect to find the nearest location fast, with address, hours and contact for each.', 250, 'none'),
    # asset
    'research_report': ('Original research findings. Readers expect the key findings with figures, the method and sample, charts or tables of the data, what it means and how to cite it.', 4000, 'none'),
    'whitepaper_ebook_gate': ('A gated landing page for a whitepaper or ebook. Readers expect what the document covers, who it is for, what they will learn and what they give to download it.', 550, 'required'),
    'template_example_page': ('A downloadable or copyable template with guidance. Readers expect what the template is for, what it contains, how to fill it in and mistakes to avoid.', 1000, 'none'),
    # local
    'location_page': ('The page of one physical branch, office, clinic or store. Readers expect the address, hours, contact, services at this location, parking or access and the team.', 900, 'required'),
    'service_area_city_page': ('A service delivered in one city without premises there. Readers expect confirmation the city is covered, how service works there, local specifics and how to book.', 900, 'required'),
    'service_plus_location_page': ('One service in one place. Readers expect the service explained for that location, local rules or conditions, prices or timelines that apply there and how to book.', 900, 'required'),
    'neighborhood_area_guide': ('An area guide with market data. Readers expect what living or buying there is like, prices and trends, schools, transport and amenities, and who can help.', 2000, 'required'),
    'practice_location_legal': ('A legal practice area in one jurisdiction. Readers expect the law as it applies there, local courts and deadlines, what the firm does for such cases and how to talk to a lawyer.', 1200, 'required'),
    'branch_page_staffing': ('A recruiting branch or market page. Readers expect the roles and sectors the branch covers, the local team, how placement works and how to contact the branch.', 750, 'required'),
    'dealer_local_hub': ('The city inventory hub of a dealership. Readers expect the models and stock available locally, services, finance options, the location and how to visit.', 550, 'required'),
    'regional_country_landing': ('A landing page for one country or region. Readers expect the offer as it applies there: availability, pricing or currency, compliance, local support and how to start.', 900, 'required'),
    # catalogue
    'product_category_page': ('A product category with editorial copy. Readers expect what the category contains, how to choose within it, key differences and a route to the products.', 500, 'none'),
    'collection_curated_page': ('A themed collection of products or items. Readers expect why these items belong together, who the collection suits and what each item adds.', 400, 'none'),
    'intermediary_category_page': ('A parent category that routes to subcategories. Readers expect a short orientation on the range and a clear way to pick the right subcategory.', 350, 'none'),
    'search_results_listing_page': ('A filtered listing grid. Readers expect the results that match their filters and a short note on what the listing covers.', 250, 'none'),
    'careers_page': ('The employer page with open roles. Readers expect what it is like to work there, benefits, how hiring works, the open roles and how to apply.', 900, 'required'),
    'material_capability_page': ('One manufacturing capability or material. Readers expect the process or material explained, specifications and tolerances, applications, lead times and how to request a quote.', 1300, 'required'),
    'application_page_industrial': ('One industrial use case. Readers expect the application described, the requirements it sets, the products or capabilities that meet them and proof from similar work.', 1100, 'required'),
    'condition_page': ('An overview of one medical condition. Readers expect symptoms, causes, diagnosis, treatment options, outlook and when to see a specialist, in plain language.', 2000, 'required'),
    'treatment_procedure_page': ('One treatment or procedure. Readers expect what it treats, how it works, preparation, what happens during and after, risks, recovery, cost signals and how to book.', 1500, 'required'),
    'drug_medication_page': ('A medication reference. Readers expect what it is for, how it is taken, dosage principles, side effects, interactions and when to talk to a prescriber.', 1500, 'none'),
    'practice_area_page': ('A legal practice area. Readers expect what the area covers, common case types, how the process works, what affects the outcome, what the firm does and how to start.', 2000, 'required'),
    'coverage_line_page': ('One insurance line. Readers expect what is covered and what is not, who needs it, how premiums are set, how claims work and how to get a quote.', 1300, 'required'),
    'financial_product_page': ('A loan, card, account or fund. Readers expect what it is, rates and fees, eligibility, how it works, risks or terms and how to apply.', 1100, 'required'),
    'plan_tariff_page': ('A telecom, energy or utility plan. Readers expect what the plan includes, prices, contract terms, who it suits and how to sign up or switch.', 900, 'required'),
    'route_lane_page': ('One shipping route or corridor. Readers expect transit times, services and frequencies, costs or rate factors, customs or requirements and how to request a rate.', 900, 'required'),
    # ops
    'documentation_article': ('A product documentation page. Readers expect the task stated, prerequisites, exact steps, expected results and what to do when it fails.', 900, 'none'),
    'help_center_article': ('A support article for one question. Readers expect the answer or steps first, the conditions that change them and where to go if it still does not work.', 500, 'none'),
    'changelog_release_notes': ('Dated product changes. Readers expect each change with the date and version, what changed for them and any action they must take.', 350, 'none'),
    'api_reference': ('An endpoint or SDK reference. Readers expect the exact parameters, types, responses, errors and an example call.', 600, 'none'),
    'community_forum_thread': ('A user discussion thread. Readers expect the question, the accepted answer and the useful replies.', 550, 'none'),
    'contact_page': ('The contact page. Readers expect every way to reach the client, hours, locations and what happens after they send a message.', 250, 'none'),
    'thank_you_page': ('The confirmation after a conversion. Readers expect confirmation of what they did, what happens next and when, and one useful next step.', 200, 'none'),
    'legal_policy_page': ('A privacy, terms, cookies or accessibility page. Readers expect the rules stated plainly, what data or obligations are involved and whom to contact.', 1900, 'none'),
    'claims_how_to_file_page': ('The claims process. Readers expect when they can claim, what to gather, the steps in order, timelines and what happens after filing.', 900, 'none'),
    'patient_forms_prep_page': ('Pre-visit instructions. Readers expect what to bring, forms to complete, how to prepare and what to expect at the visit.', 550, 'none'),
    'sitemap_html': ('The HTML sitemap. Readers expect every section of the site listed in a logical order.', 550, 'none'),
    'login_account_cart_checkout': ('Authentication and transactional pages. Readers expect a short, clear explanation of what to do and what happens next.', 550, 'none'),
    'search_results_internal': ('Site search results. Readers expect matching pages and a hint on refining the search.', 550, 'none'),
    'error_404_page': ('The not-found page. Readers expect to learn the page is missing and get a useful route back into the site.', 100, 'none'),
    'homepage': ('The site home. Readers expect who the client is, what it offers, for whom, proof, and the fastest route to the main services and to contact.', 700, 'required'),
}

CLOSING_OVERRIDE = {'pillar_hub': 'Where to start | How to use this guide'}


def main():
    with open(SPECS) as f:
        rows = json.load(f)
    seen = set()
    out = []
    for r in rows:
        tid = r['type_id']
        if tid not in T:
            raise SystemExit('No values for ' + tid)
        seen.add(tid)
        definition, words, cta = T[tid]
        closing = CLOSING_OVERRIDE.get(tid, r.get('closing_heading') or '')
        if str(r.get('closing_mode') or 'none') == 'none':
            closing = ''
        n = OrderedDict()
        n['type_id'] = tid
        n['label'] = r['label']
        n['family'] = r['family']
        n['definition'] = definition
        n['industries'] = r.get('industries') or ''
        n['words_count_approx'] = words
        n['answer_paragraph'] = bool(r.get('answer_paragraph'))
        n['answer_style'] = r.get('answer_style') or 'none'
        n['answer_max_words'] = int(r.get('answer_max_words') or 0)
        n['tables_min'] = int(r.get('tables_min') or 0)
        n['research'] = r.get('research') or 'none'
        n['schema_types'] = r.get('schema_types') or ''
        n['opening'] = r.get('opening') or ''
        n['closing_heading'] = closing
        n['cta_mode'] = cta
        n['faq_required'] = 'N' if tid == 'faq_page' else (r.get('faq_required') or 'Y')
        out.append(n)
    missing = set(T) - seen
    if missing:
        raise SystemExit('Types in build_specs.py but not in the catalogue: ' + ', '.join(sorted(missing)))
    with open(SPECS, 'w') as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
        f.write('\n')
    write_doc(out)
    print('wrote', len(out), 'rows with columns', ', '.join(COLUMNS))


def write_doc(rows):
    lines = ['# Page type writing rules (Content Maker 6.0)', '',
             'Generated by `tools/build_specs.py` from `skills/content-map-builder/assets/page_type_specs.json`, the file the `CM6 Spec Seeder` loads into the `page_type_specs` data table. One row per type.', '',
             '## Columns', '',
             '| column | role in the flow |', '|---|---|',
             '| `type_id` | value of `pageType` in the request; the dropdown in the app |',
             '| `label` | human name, used in the writer brief, the meta prompt, the FAQ prompt and the prompt maker |',
             '| `family` | hub, guide, reference, evaluation, offer, proof, entity, tool, asset, local, catalogue, ops; named in the brief |',
             '| `definition` | two or three sentences on what the page is for and what readers expect to find; quoted to the writer, the FAQ writer and the prompt maker |',
             '| `industries` | where the type is common; informational |',
             '| `words_count_approx` | the length the writer aims for ("about N words"); the writer spreads it by what each section needs |',
             '| `answer_paragraph`, `answer_style`, `answer_max_words` | whether the page opens with a direct answer under the H1, in which style (definition, key facts, verdict, value proposition) and how long |',
             '| `tables_min` | minimum number of markdown tables; the writer picks the sections that suit them |',
             '| `research` | none, search or deep: how hard the writer uses the Live Research tool |',
             '| `schema_types` | JSON-LD blocks Build JSON-LD emits, joined with + |',
             '| `opening` | how the opening paragraph is written |',
             '| `closing_heading` | when set, the writer adds one closing H2 after the app\'s outline, headed by one of these patterns (unless the outline already ends with a closing section); empty means no closing H2 |',
             '| `cta_mode` | required: one natural CTA at the end of the closing section following the request\'s ctaRules; none: no CTA anywhere |',
             '| `faq_required` | Y: five FAQs are written and shipped; N: no FAQ block and no FAQPage schema |',
             '',
             'Format per section (prose, steps, table, bullets), where the H3s go, how the client facts are used and what the meta description says are not columns any more. The writer decides them from the heading, the search intent sent with the request and its research; the rules are in `n8n/cm6/prep_writer.js` and `n8n/cm6/prep_meta.js`.', '',
             '## Types', '',
             '| type_id | family | words | answer | tables | research | closing H2 | CTA | FAQ | definition |', '|---|---|---|---|---|---|---|---|---|---|']
    for r in rows:
        ans = (r['answer_style'] + ' ' + str(r['answer_max_words'])) if r['answer_paragraph'] else 'no'
        lines.append('| `%s` | %s | %s | %s | %s | %s | %s | %s | %s | %s |' % (
            r['type_id'], r['family'], r['words_count_approx'], ans, r['tables_min'], r['research'],
            r['closing_heading'] or 'none', r['cta_mode'], r['faq_required'], r['definition'].replace('|', '/')))
    with open(DOC, 'w') as f:
        f.write('\n'.join(lines) + '\n')


if __name__ == '__main__':
    main()
