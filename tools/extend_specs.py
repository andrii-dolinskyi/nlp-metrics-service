#!/usr/bin/env python3
"""Add the Content Maker 6.0 writing-behaviour columns to every page type spec.

Columns added (or refreshed) on skills/content-map-builder/assets/page_type_specs.json:

  closing_mode      append | none      whether the writer adds one closing H2 after the app's outline
  closing_heading   heading patterns for that closing H2, pipe separated; <...> is filled from the H1 or the facts
  closing_content   what the closing section says (60 to 120 words unless stated)
  cta_mode          required | optional | none
  cta_guidance      how the call to action is written for this type, when there is one
  format_rules      when this type uses numbered steps, tables, bullets and prose
  h3_policy         required | optional | none, with the rule the writer follows
  meta_description_pattern  what the meta description of this type must contain

Run from the repo root: python3 tools/extend_specs.py
"""
import json
import os
from collections import OrderedDict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPECS = os.path.join(ROOT, 'skills', 'content-map-builder', 'assets', 'page_type_specs.json')
DOC = os.path.join(ROOT, 'docs', 'page-type-writing-rules.md')

STEPS = 'This page is a procedure and always carries a numbered step list. When the supplied H2s are the steps themselves, the first section ends with a numbered list of all the steps, one short line each, and every step H2 then gives the detail. When the procedure sits inside one H2, that section is written as numbered steps. A table for any section that compares options or shows costs or timelines. Bullets only for checklists of four or more items. Prose elsewhere.'

CLOSE_STD = 'The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".'

FAMILY = {
    'hub': dict(
        closing_mode='append', closing_heading='Where to start | How to use this hub',
        closing_content='Tells three kinds of reader which part of the hub to read first depending on their situation, in one paragraph of 60 to 100 words. No recap.',
        cta_mode='optional',
        cta_guidance='Soft: one plain sentence at the end of the closing paragraph naming how the client helps with this topic and the one action to take, only when a client fact supports it. No urgency, no superlative.',
        format_rules='Group the child pages: one H3 per group, each link as a bullet with a one or two sentence blurb. Prose for the scope statement and the closing. No table unless a section compares options.',
        h3_policy='required: one H3 per group of child pages, phrased as the group topic.',
        meta_description_pattern='What the hub covers and for whom, naming the two or three biggest subtopics it links to. No client name unless it is a service or industry hub.',
    ),
    'guide': dict(
        closing_mode='append', closing_heading='What to do next | Next steps',
        closing_content=CLOSE_STD,
        cta_mode='optional',
        cta_guidance='Soft: one plain sentence at the end of the closing paragraph offering the client\'s related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative.',
        format_rules='Numbered steps for any section that describes a sequence. A table for any section that compares two or more options, sets criteria against options, or shows costs, timelines or thresholds. Bullets only for checklists or lists of requirements with four or more items. Prose everywhere else, including the opening and the closing.',
        h3_policy='optional: use two to four H3s inside any section over 250 words, each phrased as the specific sub-question or item it covers.',
        meta_description_pattern='The question the page answers and the specific answer or scope (number of steps, options, years, or the key figure). No client name. Factual, no "learn how".',
    ),
    'reference': dict(
        closing_mode='none', closing_heading='', closing_content='',
        cta_mode='none', cta_guidance='',
        format_rules='Definitions and explanations in prose. Figures, ranges, specifications and comparisons in tables. Bullets only for lists of four or more short items.',
        h3_policy='optional: use H3s only when a section holds several distinct items or figures.',
        meta_description_pattern='The exact fact, figure or definition the page holds, with the year and the scope. No client name.',
    ),
    'evaluation': dict(
        closing_mode='append', closing_heading='Which one to choose | How to decide',
        closing_content='A verdict paragraph that says which option suits which reader and why, in 60 to 120 words, then the one action to take. No recap.',
        cta_mode='optional',
        cta_guidance='Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given.',
        format_rules='One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose.',
        h3_policy='required: one H3 per option, item or criterion inside the sections that go through them one by one.',
        meta_description_pattern='Which options are compared and on what criteria, or the price range with the year, and a hint of the verdict. No client name unless the client is one of the options.',
    ),
    'offer': dict(
        closing_mode='append', closing_heading='How to get started | What happens after you contact us',
        closing_content='What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.',
        cta_mode='required',
        cta_guidance='Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative.',
        format_rules='Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing.',
        h3_policy='optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.',
        meta_description_pattern='Client name, the service or product, who it is for, and one concrete differentiator or deliverable from the facts. Factual, 120 to 155 characters.',
    ),
    'proof': dict(
        closing_mode='append', closing_heading='What this means for you | Start a similar project',
        closing_content='One paragraph that relates the result to the reader\'s situation and says what a similar engagement starts with, in 60 to 100 words, then the CTA sentence.',
        cta_mode='required',
        cta_guidance='Direct: one or two plain sentences at the end of the closing section asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor. No promise that the same result will repeat.',
        format_rules='Results in a table with the metric, the before value and the after value. The story in prose. Quotes as plain paragraphs with the speaker named.',
        h3_policy='optional: use H3s only inside a section over 250 words.',
        meta_description_pattern='Client name, who the customer was, and the headline result with its number from the facts. Factual.',
    ),
    'entity': dict(
        closing_mode='append', closing_heading='How to work with <name> | How to contact <name>',
        closing_content='What a first contact looks like and what the reader should bring, in 50 to 90 words, then the CTA sentence.',
        cta_mode='required',
        cta_guidance='Direct: one or two plain sentences asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor.',
        format_rules='Narrative in prose. Credentials, education, languages, memberships and locations as short bullet lists. No table unless a section compares offices or roles.',
        h3_policy='optional: use H3s only inside a section over 250 words.',
        meta_description_pattern='Who the person or company is, the role or specialty, the location, and one credential or fact from the facts.',
    ),
    'tool': dict(
        closing_mode='append', closing_heading='What to do with your result',
        closing_content='How to act on the number or outcome the tool gives, with the thresholds that change the decision, in 60 to 120 words.',
        cta_mode='optional',
        cta_guidance='Soft: one plain sentence at the end of the closing paragraph offering the client\'s service for the next step, only when a client fact supports it.',
        format_rules='Numbered steps for how to use the tool. A table for the inputs (name, meaning, where to find it) and for example outputs. Prose for how to read the result.',
        h3_policy='optional: use H3s inside a section that explains several inputs or several result ranges.',
        meta_description_pattern='What the tool calculates or checks, which inputs it needs, and what the result tells the reader. No client name.',
    ),
    'asset': dict(
        closing_mode='append', closing_heading='Where to go next',
        closing_content=CLOSE_STD,
        cta_mode='optional',
        cta_guidance='Soft: one plain sentence naming the action that fits the asset (download, register, listen, watch), linked to the CTA URL when one is given.',
        format_rules='Key findings as a numbered list. Data in tables. Timestamps or chapters as a table. Everything else in prose.',
        h3_policy='optional: use H3s inside a section that walks through several findings or chapters.',
        meta_description_pattern='What the asset is, what it contains (number of findings, minutes, pages or records), who published it and when.',
    ),
    'local': dict(
        closing_mode='append', closing_heading='Visit or contact <location> | Book <service> in <city>',
        closing_content='How to reach the location or book the service, the hours and the first step, from the facts, in 50 to 100 words, then the CTA sentence.',
        cta_mode='required',
        cta_guidance='Direct: one or two plain sentences asking for the one action in the CTA rule (call, book, get directions), linked to the CTA URL with a two to four word anchor.',
        format_rules='Address, hours and phone as a short bullet list or a two column table. Services offered as bullets. Local specifics in prose. No table for narrative.',
        h3_policy='optional: one H3 per service or per area inside a section that lists several.',
        meta_description_pattern='Client name, the service, the city or area, and one local fact (hours, address area or years served) from the facts.',
    ),
    'catalogue': dict(
        closing_mode='append', closing_heading='How to order | How to book | How to apply',
        closing_content='The first step to get the item, what happens next and how long it takes, from the facts, in 40 to 90 words, then the CTA sentence.',
        cta_mode='required',
        cta_guidance='Direct: one or two plain sentences asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor.',
        format_rules='Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose.',
        h3_policy='optional: use H3s inside a section over 250 words that covers several variants, options or stages.',
        meta_description_pattern='The item name, the two or three facts a buyer compares (price, size, dose, coverage or duration) and who it is for. Client name for the client\'s own products.',
    ),
    'ops': dict(
        closing_mode='none', closing_heading='', closing_content='',
        cta_mode='none', cta_guidance='',
        format_rules='Numbered steps for procedures. Tables for parameters, versions and settings. Bullets for prerequisites. Short prose between them.',
        h3_policy='optional: one H3 per stage inside a long procedure.',
        meta_description_pattern='What the page helps the reader do, naming the product and the version where relevant. No marketing.',
    ),
}

# Type-level overrides. Only the keys given change.
O = {
    # hub
    'pillar_hub': dict(closing_heading='Where to start | How to use this guide'),
    'cluster_hub': dict(closing_heading='Where to start'),
    'resource_library': dict(closing_mode='none', cta_mode='none', h3_policy='optional: one H3 per resource group.'),
    'blog_category_hub': dict(closing_mode='none', cta_mode='none', h3_policy='none: the category list needs no subheadings.'),
    'glossary_index': dict(closing_mode='none', cta_mode='none', h3_policy='required: one H3 per letter or per group of terms.'),
    'location_index': dict(closing_mode='none', cta_mode='none', h3_policy='required: one H3 per region or state.'),
    'integration_directory': dict(closing_mode='none', cta_mode='none', h3_policy='required: one H3 per integration category.'),
    'template_gallery_hub': dict(closing_mode='none', cta_mode='none', h3_policy='required: one H3 per template group.'),
    'topic_hub_programmatic': dict(closing_mode='none', cta_mode='none'),
    'industry_hub': dict(cta_mode='required', closing_heading='How to get started in <industry>', closing_content='What the first step is for a company in this industry and what happens next, from the facts, in 60 to 100 words, then the CTA sentence.', cta_guidance=FAMILY['offer']['cta_guidance']),
    'service_area_hub': dict(cta_mode='required', closing_heading='How to book service in your area', closing_content='How to check coverage and book, from the facts, in 50 to 90 words, then the CTA sentence.', cta_guidance=FAMILY['offer']['cta_guidance']),
    # guide
    'how_to': dict(closing_heading='After you finish | What to do next', closing_content='What the reader should check once the steps are done and the one thing that goes wrong most often, in 60 to 120 words. No recap of the steps.', format_rules=STEPS, h3_policy='optional: when a step section runs over 250 words, split it with two or more H3s phrased as the sub-actions (verb first).'),
    'deep_dive_guide': dict(h3_policy='required: two to four H3s inside every section over 250 words, each phrased as the sub-question it answers.'),
    'explainer_what_is': dict(closing_heading='When this matters for you | What to do next'),
    'checklist': dict(format_rules='The checklist itself as one numbered list with a one sentence reason per item, inside the section that holds it. Prose for how to use the list. No table.', h3_policy='none: the numbered list carries the structure.'),
    'regulation_compliance_explainer': dict(closing_heading='What to do before the deadline | What to do next', closing_content='The first compliance step, the deadline that applies and who is responsible, from the facts and the sources, in 60 to 120 words. Then the reviewer or disclaimer line the constraints require.', h3_policy='required: one H3 per obligation or per article of the rule inside the sections that go through them.'),
    'process_page': dict(closing_heading='After the process ends | What to do next', format_rules=STEPS, h3_policy='optional: when a stage section runs over 250 words, split it with two or more H3s.'),
    'mistakes_pitfalls': dict(closing_heading='How to avoid the next one | What to do next', h3_policy='required: one H3 per mistake, phrased as the mistake itself.', format_rules='One H3 per mistake with two or three prose paragraphs (what it is, why it happens, what to do instead). A table only when the section compares fixes. No bullets.'),
    'trend_outlook': dict(closing_heading='What to watch next', closing_content='The two or three signals that would confirm or break the outlook and when to check them, in 60 to 120 words.', h3_policy='required: one H3 per trend inside the section that lists them.'),
    'symptom_problem_page': dict(closing_heading='When to get help | What to do next', closing_content='The signs that mean the reader should stop self diagnosing and contact a professional, then what the first appointment or call involves, from the facts, in 60 to 120 words, then the CTA sentence.', cta_mode='required', cta_guidance='Direct but calm: one or two plain sentences asking for the one action in the CTA rule (book, call), linked to the CTA URL with a two to four word anchor. No fear appeal.', h3_policy='required: one H3 per cause or per fix inside the sections that go through them.'),
    'destination_guide': dict(closing_heading='How to plan the trip | What to do next', h3_policy='required: one H3 per place, season or activity inside the sections that list them.'),
    'career_guide': dict(closing_heading='How to start | What to do next', cta_mode='none', h3_policy='required: one H3 per role, step or skill inside the sections that list them.'),
    # reference
    'glossary_term': dict(h3_policy='none: a glossary entry has no subheadings.', format_rules='The definition in prose. A table only when the term has variants to compare. Related terms as a short bullet list.', meta_description_pattern='The term and its one sentence definition in the industry the page serves. No client name.'),
    'faq_page': dict(format_rules='Each question as an H3 in the section it belongs to, with a 40 to 80 word answer that opens with the direct answer. No table.', h3_policy='required: every question is an H3 phrased exactly as a reader asks it.', meta_description_pattern='The subject and the number of questions answered, naming the two most asked. No client name unless the FAQ is about the client\'s own product.'),
    'statistics_page': dict(closing_mode='append', closing_heading='How to use these figures | Methodology and sources', closing_content='Where the figures come from, how recent they are and how to cite the page, in 60 to 100 words.', h3_policy='required: one H3 per statistic group, phrased as the figure it holds.', format_rules='Every statistic in a table with the value, the year and the source. One sentence of context per figure in prose. Key findings as a numbered list at the top.'),
    'spec_sheet': dict(h3_policy='none: the table carries the structure.', format_rules='Specifications in tables grouped by category. Two or three sentences of prose per group at most.'),
    'question_page': dict(h3_policy='none: one question, one answer, no subheadings.', format_rules='The answer in prose, a table only when the answer depends on cases.'),
    'entity_lookup': dict(h3_policy='none.', format_rules='Facts in a two column table, then prose.'),
    'country_region_guide': dict(closing_mode='append', closing_heading='What to check before you decide', closing_content=CLOSE_STD, cta_mode='optional', cta_guidance=FAMILY['guide']['cta_guidance'], h3_policy='required: one H3 per topic (rules, costs, timelines) inside the sections that cover several.'),
    'salary_guide': dict(closing_mode='append', closing_heading='How to use this data in a negotiation', closing_content='How to read the range against the reader\'s own case and what moves a figure up or down, in 60 to 120 words.', cta_mode='optional', cta_guidance=FAMILY['guide']['cta_guidance'], h3_policy='required: one H3 per role, level or region inside the sections that list them.', format_rules='Salary ranges in tables with the year and the source. Prose for what moves the figure.'),
    # evaluation
    'listicle_best_of': dict(closing_heading='How to pick from this list', h3_policy='required: one H3 per listed item, in ranked order, with the item name as the heading.'),
    'head_to_head_vs': dict(closing_heading='Which one to choose | Our verdict', h3_policy='optional: one H3 per criterion inside the comparison section when it runs over 250 words.'),
    'alternatives_page': dict(closing_heading='Which alternative fits you', h3_policy='required: one H3 per alternative with its name as the heading.'),
    'competitor_comparison_own': dict(closing_heading='How to decide between us | When to choose <client>', cta_mode='required', cta_guidance=FAMILY['offer']['cta_guidance'], closing_content='An honest verdict that says when the competitor is the better fit and when the client is, from the facts, in 60 to 120 words, then the CTA sentence.'),
    'review_page': dict(closing_heading='Who should buy it | Our verdict', closing_content='Who the product suits and who should skip it, with the deciding fact for each, in 60 to 120 words.', h3_policy='optional: one H3 per aspect reviewed inside a section over 250 words.'),
    'cost_page': dict(closing_heading='How to budget for it | What to do next', closing_content='What a realistic budget looks like for the reader\'s likely case and what changes it, in 60 to 120 words, then the CTA sentence when there is one.', cta_mode='optional', h3_policy='required: one H3 per cost driver inside the section that goes through them.', format_rules='One price table with the item, the range and the year. Cost drivers as prose under H3s. No bullets except a short list of inclusions.'),
    'is_x_worth_it': dict(closing_heading='When it is worth it | Our verdict', h3_policy='optional.'),
    'diy_vs_pro': dict(closing_heading='When to call a professional', closing_content='The cases where the reader should do it themselves and the cases where they should hire, with the deciding factor for each, in 60 to 120 words, then the CTA sentence when there is one.', cta_mode='optional'),
    'category_comparison': dict(closing_heading='Which category fits you', h3_policy='required: one H3 per category compared.'),
    'buying_guide': dict(closing_heading='Checklist before you buy', closing_content='The five to seven checks to make before paying, as one numbered list with a one sentence reason each. No recap.', h3_policy='required: one H3 per buying criterion.'),
    'top_in_location': dict(closing_heading='How to choose between them', h3_policy='required: one H3 per listed provider with its name as the heading.', cta_mode='optional'),
    'migration_switch_page': dict(closing_heading='How to plan the switch', closing_content='The order of the switch steps and the one risk to plan for, in 60 to 120 words, then the CTA sentence when there is one.', cta_mode='optional', h3_policy='required: one H3 per migration stage.'),
    # offer
    'service_page': dict(closing_heading='How to get started with <service> | What happens after you contact us'),
    'solution_use_case_page': dict(closing_heading='How to get started | See it on your own case'),
    'industry_vertical_page': dict(closing_heading='How to get started in <industry>'),
    'role_persona_page': dict(closing_heading='How to get started as a <role>'),
    'segment_size_page': dict(closing_heading='How to get started'),
    'feature_page': dict(closing_heading='How to try <feature>', closing_content='How to turn the feature on or try it, and what plan it needs, from the facts, in 40 to 80 words, then the CTA sentence.'),
    'integration_page': dict(closing_heading='How to connect <integration>', closing_content='The steps to connect and what the reader needs before starting, from the facts, in 40 to 90 words, then the CTA sentence.', h3_policy='optional: one H3 per setup stage.'),
    'x_for_y_programmatic': dict(closing_heading='How to get started'),
    'pricing_page': dict(closing_heading='How to choose a plan', closing_content='Which plan suits which kind of buyer, from the facts, in 60 to 100 words, then the CTA sentence.', h3_policy='required: one H3 per plan or tier.', format_rules='One plan comparison table with price, limits and inclusions. One H3 per plan with two or three prose sentences on who it is for. Inclusions as bullets only inside the table or the plan block. No prose that repeats the table.'),
    'product_landing_page': dict(closing_heading='How to get started with <product>'),
    'quote_request_page': dict(closing_mode='none', closing_content='', cta_guidance='The page is the CTA: the last outline section explains what happens after the request is sent and asks the reader to submit it.', h3_policy='none.'),
    'brand_page': dict(closing_heading='How to buy <brand> | How to work with <brand>', cta_mode='optional'),
    'partnership_program_page': dict(closing_heading='How to apply to the program'),
    'course_program_page': dict(closing_heading='How to enrol', h3_policy='required: one H3 per module or week inside the curriculum section.', format_rules='Curriculum as one H3 per module with two or three prose sentences. Dates, prices and formats in a table. Outcomes as bullets.'),
    'membership_plan_page': dict(closing_heading='How to join', h3_policy='required: one H3 per plan or tier.'),
    'financing_page': dict(closing_heading='How to apply for financing', cta_guidance='Direct: one or two plain sentences asking for the one action in the CTA rule, linked to the CTA URL. Every rate or term stated carries the disclosure the constraints require.'),
    'ad_landing_page': dict(closing_mode='none', cta_guidance='The last outline section is the conversion block: one action, one link, two or three plain sentences. The same message as the ad.', h3_policy='none.'),
    'squeeze_lead_magnet_page': dict(closing_mode='none', cta_guidance='The last outline section asks for the download or sign up in two plain sentences with the CTA link.', h3_policy='none.'),
    'pre_launch_waitlist_page': dict(closing_mode='none', cta_guidance='The last outline section asks the reader to join the waitlist in two plain sentences with the CTA link.', h3_policy='none.'),
    'donate_page': dict(closing_heading='How your donation is used', closing_content='Where the money goes, in figures from the facts, in 50 to 90 words, then the donate sentence.', cta_guidance='Direct: one plain sentence asking for the donation, linked to the CTA URL. No guilt appeal.'),
    'program_page': dict(closing_heading='How to apply | How to join the program'),
    'specials_offers_page': dict(closing_heading='How to claim the offer', closing_content='The steps to claim, the end date and the conditions, from the facts, in 40 to 80 words, then the CTA sentence.', h3_policy='none.'),
    # proof
    'case_study': dict(closing_heading='What this means for a company like yours'),
    'case_results_page': dict(closing_heading='What to expect from your case', closing_content='How a matter like the reader\'s is handled from first contact, from the facts, in 60 to 100 words, then the CTA sentence. Every result carries the past results disclaimer the constraints require.', format_rules='Results in a table (matter, outcome, year). Prose for how they were achieved. No bullets.'),
    'testimonials_reviews_page': dict(closing_heading='How to work with us', cta_mode='optional', format_rules='Each testimonial as a plain paragraph with the person, the role and the company named. No table. No invented quotes: use only the quotes in the facts.'),
    'portfolio_project_page': dict(closing_heading='Start a similar project'),
    'impact_report_page': dict(closing_heading='How to support this work', cta_mode='optional', cta_guidance='Soft: one plain sentence naming how to donate, partner or volunteer, linked to the CTA URL.', h3_policy='required: one H3 per programme or per outcome area.', format_rules='Outcomes in a table with the metric, the value and the year. Programmes under H3s in prose. Key figures as a numbered list at the top.'),
    'awards_certifications_page': dict(closing_mode='none', cta_mode='none', format_rules='Awards in a table (award, body, year). One or two prose sentences per certification on what it covers. No bullets.', h3_policy='optional: one H3 per certification body when there are several.'),
    'customer_logos_wall': dict(closing_mode='none', cta_mode='none', h3_policy='none.'),
    # entity
    'about_page': dict(closing_heading='How to work with us', closing_content='What a first contact looks like and what the reader should bring, in 50 to 90 words, then the CTA sentence.'),
    'team_index': dict(closing_mode='none', cta_mode='none', h3_policy='required: one H3 per team or department.', format_rules='One H3 per team with each member as a bullet (name, role, one line). Prose for the intro only.'),
    'team_member_bio': dict(closing_heading='How to contact <name>', cta_mode='optional'),
    'author_bio_page': dict(closing_mode='none', cta_mode='none', format_rules='Narrative in prose. Credentials and publications as bullets. No table.'),
    'attorney_bio': dict(closing_heading='How to book a consultation with <name>', cta_guidance='Direct: one or two plain sentences asking for the consultation in the CTA rule, linked to the CTA URL. Bar admissions and any results carry the disclaimers the constraints require.'),
    'provider_profile': dict(closing_heading='How to book an appointment with <name>', cta_guidance='Direct: one or two plain sentences asking for the appointment in the CTA rule, linked to the CTA URL. No medical outcome promise.'),
    'agent_profile': dict(closing_heading='How to contact <name>'),
    'partner_vendor_profile': dict(closing_heading='How to contact <partner>', cta_mode='optional'),
    'company_facts_page': dict(closing_mode='none', cta_mode='none', format_rules='Facts in a two column table (fact, value). Prose only for context. No bullets.', h3_policy='none.'),
    'press_room': dict(closing_mode='none', cta_mode='none', format_rules='Releases as a bulleted list with the date and the headline. Media contact as a short block. Prose for the intro only.', h3_policy='optional: one H3 per year when there are many releases.'),
    'press_release_news': dict(closing_heading='About <client>', closing_content='The standard boilerplate paragraph about the client from the facts, 50 to 90 words, then the media contact line from the facts.', cta_mode='none', cta_guidance='', format_rules='Dateline and the news in the first paragraph. Quotes as plain paragraphs with the speaker and title named. No table, no bullets.', h3_policy='none.'),
    # tool
    'configurator_estimator': dict(closing_heading='How to turn the estimate into a quote', closing_content='What the estimate includes, what it does not, and how to get a firm quote, from the facts, in 50 to 90 words, then the CTA sentence.', cta_mode='required', cta_guidance=FAMILY['offer']['cta_guidance']),
    'quiz_assessment_page': dict(closing_heading='What your result means'),
    'generator_checker_tool': dict(closing_heading='What to do with the output'),
    'interactive_map_finder': dict(closing_mode='none', cta_mode='none', h3_policy='none.'),
    # asset
    'research_report': dict(closing_heading='Methodology and how to cite this report', closing_content='Sample, method, period and the citation line, from the facts, in 60 to 120 words.', cta_mode='optional', h3_policy='required: one H3 per finding inside the findings section.'),
    'whitepaper_ebook_gate': dict(closing_mode='none', cta_mode='required', cta_guidance='The last outline section asks for the download in two plain sentences with the CTA link, after saying what is inside and how long it is.', h3_policy='none.'),
    'template_example_page': dict(closing_heading='How to use this template', closing_content='The steps to adapt the template and the one mistake to avoid, in 50 to 100 words, then the download sentence when there is a CTA URL.'),
    'webinar_page': dict(closing_heading='How to register | How to watch the recording', closing_content='Date, length, format and what the reader gets after registering, from the facts, in 40 to 80 words, then the register sentence.', cta_mode='required', cta_guidance='Direct: one plain sentence asking the reader to register or watch, linked to the CTA URL.', h3_policy='none.'),
    'video_page': dict(closing_heading='Where to go next', format_rules='Chapters or timestamps as a table. The summary in prose. Key points as a numbered list.'),
    'podcast_episode_page': dict(closing_heading='Where to go next', format_rules='Timestamps as a table. The summary and the guest intro in prose. Key points as a numbered list.'),
    'infographic_data_viz_page': dict(closing_heading='How to share or embed this', closing_content='The embed and attribution rule and the source line, in 40 to 80 words.', cta_mode='none'),
    'original_dataset_page': dict(closing_heading='How to cite and download the data', closing_content='Licence, citation line, format and update cadence, from the facts, in 50 to 100 words.', cta_mode='optional', h3_policy='required: one H3 per field group or per finding.'),
    # local
    'location_page': dict(closing_heading='Visit or contact <location>'),
    'service_area_city_page': dict(closing_heading='Book <service> in <city>'),
    'service_plus_location_page': dict(closing_heading='Book <service> in <city>', h3_policy='optional: one H3 per service variant inside a section that lists several.'),
    'neighborhood_area_guide': dict(closing_heading='What to do next', closing_content=CLOSE_STD, cta_mode='optional', cta_guidance=FAMILY['guide']['cta_guidance'], h3_policy='required: one H3 per neighbourhood, school, transport link or topic inside the sections that list them.', format_rules='Facts (commute times, prices, schools) in tables with the year and the source. Areas under H3s in prose. Bullets only for short lists of amenities.'),
    'practice_location_legal': dict(closing_heading='Talk to a <practice> lawyer in <city>', cta_guidance='Direct: one or two plain sentences asking for the consultation in the CTA rule, linked to the CTA URL. Any result carries the disclaimer the constraints require.'),
    'branch_page_staffing': dict(closing_heading='Contact the <city> branch'),
    'dealer_local_hub': dict(closing_heading='Visit <dealer> in <city>'),
    'regional_country_landing': dict(closing_heading='How to get started in <country>'),
    # catalogue
    'product_page': dict(closing_mode='none', cta_mode='optional', cta_guidance='Soft: one plain sentence in the last outline section naming how to order or ask for a quote, linked to the CTA URL. The buy button is UI and is not written.', h3_policy='optional: one H3 per variant inside a section that covers several.'),
    'product_category_page': dict(closing_mode='none', cta_mode='none', h3_policy='none.', format_rules='Prose for what the category holds and how to choose. A table only when it compares sub ranges. No bullets.'),
    'collection_curated_page': dict(closing_mode='none', cta_mode='none', h3_policy='none.'),
    'intermediary_category_page': dict(closing_mode='none', cta_mode='none', h3_policy='none.'),
    'listing_detail_page': dict(closing_heading='Book a viewing | Contact the seller'),
    'search_results_listing_page': dict(closing_mode='none', cta_mode='none', h3_policy='none.'),
    'model_research_page': dict(closing_heading='See it in person | Book a test drive', h3_policy='required: one H3 per trim or variant inside the section that goes through them.'),
    'job_posting_page': dict(closing_heading='How to apply', closing_content='The application steps, the deadline and what happens after applying, from the facts, in 40 to 80 words, then the apply sentence.', h3_policy='none.', format_rules='Responsibilities and requirements as bullets. Salary, location and hours in a two column table. Prose for the team and the role context.'),
    'job_category_page': dict(closing_heading='How to apply', h3_policy='optional: one H3 per role family.'),
    'careers_page': dict(closing_heading='See open roles | How to apply', cta_guidance='Direct: one plain sentence pointing to the open roles, linked to the CTA URL.'),
    'event_page': dict(closing_heading='How to register | How to attend', closing_content='Date, venue, price and the registration steps, from the facts, in 40 to 80 words, then the register sentence.', h3_policy='optional: one H3 per session or per day.', format_rules='Agenda as a table (time, session, speaker). Practical facts as bullets. Prose for why to attend.'),
    'recipe_page': dict(closing_mode='none', cta_mode='none', format_rules='Ingredients as a bulleted list with quantities. Method as numbered steps. Prep, cook and total time in a table. Prose for the intro and the notes.', h3_policy='optional: H3s for variations or components when there are several.'),
    'menu_page': dict(closing_mode='none', cta_mode='optional', cta_guidance='Soft: one plain sentence in the last outline section on how to book a table or order, linked to the CTA URL.', format_rules='Dishes as a table per course (dish, description, price). Prose for the intro only.', h3_policy='required: one H3 per course or menu section.'),
    'accommodation_room_page': dict(closing_heading='Check availability | How to book', h3_policy='none.', format_rules='Room facts (size, beds, view, occupancy) in a table. Amenities as bullets. Prose for the description.'),
    'tour_package_page': dict(closing_heading='How to book this tour', h3_policy='required: one H3 per day inside the itinerary section.', format_rules='Itinerary as one H3 per day with prose. Inclusions and exclusions as two bullet lists. Dates and prices in a table.'),
    'app_marketplace_listing': dict(closing_heading='How to install', cta_mode='optional', cta_guidance='Soft: one plain sentence on how to install or start the trial, linked to the CTA URL.', h3_policy='none.'),
    'material_capability_page': dict(closing_heading='Request a quote for <material>', h3_policy='optional: one H3 per grade or process inside a section that covers several.', format_rules='Properties, tolerances and sizes in tables. Processes as numbered steps. Applications as bullets. Prose for the reasoning.'),
    'application_page_industrial': dict(closing_heading='Discuss your application'),
    'condition_page': dict(closing_heading='When to see a specialist', closing_content='The signs that mean the reader should book an appointment rather than wait, and what the first visit involves, from the facts, in 60 to 120 words, then the CTA sentence. The reviewer line the constraints require stays.', cta_guidance='Direct but calm: one or two plain sentences asking for the appointment in the CTA rule, linked to the CTA URL. No fear appeal, no outcome promise.', h3_policy='required: one H3 per symptom group, cause or treatment option inside the sections that go through them.'),
    'treatment_procedure_page': dict(closing_heading='Booking a consultation', closing_content='What the consultation covers and how to prepare, from the facts, in 50 to 100 words, then the CTA sentence. Risks stated on the page stay stated.', cta_guidance='Direct but calm: one or two plain sentences asking for the consultation in the CTA rule, linked to the CTA URL. No outcome promise.', h3_policy='required: one H3 per stage (before, during, after) or per option inside the sections that go through them.'),
    'drug_medication_page': dict(closing_heading='When to talk to your prescriber', closing_content='The situations in which the reader should contact a prescriber or pharmacist, in 50 to 100 words. No CTA. The reviewer line the constraints require stays.', cta_mode='none', cta_guidance='', h3_policy='required: one H3 per dosage form, use or side effect group inside the sections that go through them.', format_rules='Doses, forms and interactions in tables. Everything else in prose. No bullets except a short list of warning signs.'),
    'practice_area_page': dict(closing_heading='Talk to a <practice> lawyer', cta_guidance='Direct: one or two plain sentences asking for the consultation in the CTA rule, linked to the CTA URL. Any result carries the disclaimer the constraints require.', h3_policy='required: one H3 per matter type or per stage inside the sections that go through them.'),
    'coverage_line_page': dict(closing_heading='How to get a quote', cta_guidance='Direct: one or two plain sentences asking for the quote in the CTA rule, linked to the CTA URL. Coverage limits and exclusions stated on the page stay stated.', h3_policy='required: one H3 per coverage part or per exclusion group.'),
    'financial_product_page': dict(closing_heading='How to apply', cta_guidance='Direct: one or two plain sentences asking for the application in the CTA rule, linked to the CTA URL. Every rate carries the disclosure the constraints require.', h3_policy='optional: one H3 per eligibility group or fee type.'),
    'plan_tariff_page': dict(closing_heading='How to sign up | How to switch', h3_policy='required: one H3 per plan.'),
    'route_lane_page': dict(closing_heading='Request a rate for this route', h3_policy='optional.'),
    # ops
    'documentation_article': dict(closing_mode='append', closing_heading='If it still does not work', closing_content='The two or three checks to make when the steps fail and how to contact support, in 40 to 90 words.', cta_mode='optional', cta_guidance='Soft: one plain sentence on how to contact support, linked to the CTA URL when one is given.', format_rules=STEPS, h3_policy='optional: when a stage section runs over 250 words, split it with two or more H3s.'),
    'help_center_article': dict(closing_mode='append', closing_heading='If it still does not work', closing_content='The two or three checks to make when the steps fail and how to contact support, in 40 to 80 words.', cta_mode='optional', cta_guidance='Soft: one plain sentence on how to contact support, linked to the CTA URL when one is given.', format_rules=STEPS),
    'changelog_release_notes': dict(format_rules='One H3 per version with the date, then bullets grouped as added, changed and fixed. No prose beyond one line per version.', h3_policy='required: one H3 per version.'),
    'contact_page': dict(h3_policy='none.', format_rules='Channels as a two column table or bullets (channel, when to use it, response time). Two or three prose sentences at most.'),
    'thank_you_page': dict(h3_policy='none.', format_rules='Prose only: what happens next and when.'),
    'claims_how_to_file_page': dict(closing_mode='append', closing_heading='After you file', closing_content='What happens after the claim is filed, the timeline and who to contact, from the facts, in 50 to 100 words.', cta_mode='optional', cta_guidance='Soft: one plain sentence on how to start the claim, linked to the CTA URL when one is given.', format_rules=STEPS, h3_policy='optional: when a step section runs over 250 words, split it with two or more H3s.'),
    'patient_forms_prep_page': dict(closing_mode='append', closing_heading='Before your visit', closing_content='The checklist of what to bring and when to arrive, as a short numbered list, then the contact line from the facts.', cta_mode='optional', cta_guidance='Soft: one plain sentence on how to reach the practice with questions.', format_rules=STEPS),
    'error_404_page': dict(h3_policy='none.', format_rules='Prose only, two or three short paragraphs.'),
    'homepage': dict(closing_mode='append', closing_heading='How to get started', closing_content='The first step for a new customer and what happens next, from the facts, in 50 to 90 words, then the CTA sentence.', cta_mode='required', cta_guidance=FAMILY['offer']['cta_guidance'], h3_policy='optional: one H3 per service or product line inside the section that lists them.', format_rules='Prose for the value proposition. One H3 per service line with two or three sentences. A table only for plans or comparisons. No bullets in the opening.'),
    'api_reference': dict(h3_policy='required: one H3 per endpoint.'),
    'legal_policy_page': dict(h3_policy='required: one H3 per clause.'),
}

KEYS = ['closing_mode', 'closing_heading', 'closing_content', 'cta_mode', 'cta_guidance', 'format_rules', 'h3_policy', 'meta_description_pattern']


def main():
    specs = json.load(open(SPECS), object_pairs_hook=OrderedDict)
    for s in specs:
        fam = FAMILY[s['family']]
        vals = dict(fam)
        vals.update(O.get(s['type_id'], {}))
        if s.get('ai_writable') == 'N':
            vals.update(closing_mode='none', closing_heading='', closing_content='', cta_mode='none', cta_guidance='')
        if vals['closing_mode'] == 'none':
            vals['closing_heading'] = ''
            vals['closing_content'] = ''
        if vals['cta_mode'] == 'none':
            vals['cta_guidance'] = ''
        for k in KEYS:
            s[k] = vals[k]
    json.dump(specs, open(SPECS, 'w'), indent=1, ensure_ascii=False)
    # review document
    out = ['# Page type writing rules: closing section, CTA, formats, H3s, meta description', '',
           'Generated by `tools/extend_specs.py` from `skills/content-map-builder/assets/page_type_specs.json`. These columns drive the `Prep Writer`, `FAQ Writer` and `Prep Meta` nodes of Content Maker 6.0. Edit the script, re-run it, then re-run the CM6 Spec Seeder to push the table.', '',
           'Closing section: when `closing_mode` is `append`, the writer adds one H2 after the outline the app sent, with a heading that follows `closing_heading` (the writer fills the `<...>` part from the H1 or the facts) and the content in `closing_content`. If the last H2 the app sent already reads as a closing section (next steps, how to get started, contact, book), no section is appended and that section takes the role. CTA text appears only in the closing section, never elsewhere and never in the FAQ.', '']
    fams = OrderedDict()
    for s in specs:
        fams.setdefault(s['family'], []).append(s)
    for fam, rows in fams.items():
        out += ['## `%s` family' % fam, '']
        for s in rows:
            flag = ' (not written by the flow)' if s.get('ai_writable') == 'N' else ''
            out += ['### `%s` (%s)%s' % (s['type_id'], s['label'], flag), '']
            out += ['| Rule | Value |', '|---|---|']
            for k in KEYS:
                v = str(s[k]).replace('|', '\\|')
                out += ['| `%s` | %s |' % (k, v or '(none)')]
            out += ['']
    open(DOC, 'w').write('\n'.join(out))
    print('updated', len(specs), 'specs and wrote', DOC)


if __name__ == '__main__':
    main()
