# Writer page briefs: `guide` family (12 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `deep_dive_guide` (Deep-dive guide)

Spec: {"words_min": 2000, "words_max": 4000, "default_words": 2000, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 4, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: two to four H3s inside every section over 250 words, each phrased as the sub-question it answers.", "schema_types": "Article + FAQPage + HowTo + BreadcrumbList"}

```text
<page_brief>
Page type: Deep-dive guide (guide family). Complete guide to one topic
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What to do next | Next steps. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".
- Formats for this page type: Numbered steps for any section that describes a sequence. A table for any section that compares two or more options, sets criteria against options, or shows costs, timelines or thresholds. Bullets only for checklists or lists of requirements with four or more items. Prose everywhere else, including the opening and the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: two to four H3s inside every section over 250 words, each phrased as the sub-question it answers. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 2000 to 4000 words. Aim for about 2000.
- Include at least 4 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `how_to` (How-to guide)

Spec: {"words_min": 1000, "words_max": 2500, "default_words": 1750, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "optional: when a step section runs over 250 words, split it with two or more H3s phrased as the sub-actions (verb first).", "schema_types": "HowTo + Article + BreadcrumbList"}

```text
<page_brief>
Page type: How-to guide (guide family). Step-by-step instructions for one task
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [392 words]
  2. Second H2 from the app [392 words]
  3. Third H2 from the app [392 words]
  4. Fourth H2 from the app [392 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: After you finish | What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the reader should check once the steps are done and the one thing that goes wrong most often, in 60 to 120 words. No recap of the steps.
- Formats for this page type: This page is a procedure and always carries a numbered step list. When the supplied H2s are the steps themselves, the first section ends with a numbered list of all the steps, one short line each, and every step H2 then gives the detail. When the procedure sits inside one H2, that section is written as numbered steps. A table for any section that compares options or shows costs or timelines. Bullets only for checklists of four or more items. Prose elsewhere. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: when a step section runs over 250 words, split it with two or more H3s phrased as the sub-actions (verb first). When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2500 words. Aim for about 1750.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `supporting_article` (Supporting article)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1400, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 2, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "optional: use two to four H3s inside any section over 250 words, each phrased as the specific sub-question or item it covers.", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Supporting article (guide family). Narrow cluster article on one sub-question
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [305 words]
  2. Second H2 from the app [305 words]
  3. Third H2 from the app [305 words]
  4. Fourth H2 from the app [305 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What to do next | Next steps. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".
- Formats for this page type: Numbered steps for any section that describes a sequence. A table for any section that compares two or more options, sets criteria against options, or shows costs, timelines or thresholds. Bullets only for checklists or lists of requirements with four or more items. Prose everywhere else, including the opening and the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use two to four H3s inside any section over 250 words, each phrased as the specific sub-question or item it covers. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 1800 words. Aim for about 1400.
- Include at least 2 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `explainer_what_is` (What-is explainer)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "optional: use two to four H3s inside any section over 250 words, each phrased as the specific sub-question or item it covers.", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: What-is explainer (guide family). "What is X" conceptual article
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [330 words]
  2. Second H2 from the app [330 words]
  3. Third H2 from the app [330 words]
  4. Fourth H2 from the app [330 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: When this matters for you | What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".
- Formats for this page type: Numbered steps for any section that describes a sequence. A table for any section that compares two or more options, sets criteria against options, or shows costs, timelines or thresholds. Bullets only for checklists or lists of requirements with four or more items. Prose everywhere else, including the opening and the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use two to four H3s inside any section over 250 words, each phrased as the specific sub-question or item it covers. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2000 words. Aim for about 1500.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `checklist` (Checklist)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1300, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "none: the numbered list carries the structure.", "schema_types": "HowTo + Article + BreadcrumbList"}

```text
<page_brief>
Page type: Checklist (guide family). Actionable checklist with context per item
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [280 words]
  2. Second H2 from the app [280 words]
  3. Third H2 from the app [280 words]
  4. Fourth H2 from the app [280 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What to do next | Next steps. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".
- Formats for this page type: The checklist itself as one numbered list with a one sentence reason per item, inside the section that holds it. Prose for how to use the list. No table. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- No H3 subheadings on this page type. the numbered list carries the structure.
- Total length: 800 to 1800 words. Aim for about 1300.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `regulation_compliance_explainer` (Regulation compliance explainer)

Spec: {"words_min": 1500, "words_max": 3000, "default_words": 2250, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per obligation or per article of the rule inside the sections that go through them.", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Regulation compliance explainer (guide family). Plain-language explanation of a law or standard
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What to do before the deadline | What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The first compliance step, the deadline that applies and who is responsible, from the facts and the sources, in 60 to 120 words. Then the reviewer or disclaimer line the constraints require.
- Formats for this page type: Numbered steps for any section that describes a sequence. A table for any section that compares two or more options, sets criteria against options, or shows costs, timelines or thresholds. Bullets only for checklists or lists of requirements with four or more items. Prose everywhere else, including the opening and the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per obligation or per article of the rule inside the sections that go through them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 3000 words. Aim for about 2250.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.
- Page type constraints: Cite the official text; state jurisdiction and effective dates; not legal advice line.

CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `process_page` (Process)

Spec: {"words_min": 700, "words_max": 1500, "default_words": 1100, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "optional: when a stage section runs over 250 words, split it with two or more H3s.", "schema_types": "Article + Service + BreadcrumbList"}

```text
<page_brief>
Page type: Process (guide family). What happens when you work with us
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [230 words]
  2. Second H2 from the app [230 words]
  3. Third H2 from the app [230 words]
  4. Fourth H2 from the app [230 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: After the process ends | What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".
- Formats for this page type: This page is a procedure and always carries a numbered step list. When the supplied H2s are the steps themselves, the first section ends with a numbered list of all the steps, one short line each, and every step H2 then gives the detail. When the procedure sits inside one H2, that section is written as numbered steps. A table for any section that compares options or shows costs or timelines. Bullets only for checklists of four or more items. Prose elsewhere. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: when a stage section runs over 250 words, split it with two or more H3s. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 700 to 1500 words. Aim for about 1100.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `mistakes_pitfalls` (Mistakes pitfalls)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per mistake, phrased as the mistake itself.", "schema_types": "Article + BreadcrumbList"}

```text
<page_brief>
Page type: Mistakes pitfalls (guide family). Mistakes to avoid
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [330 words]
  2. Second H2 from the app [330 words]
  3. Third H2 from the app [330 words]
  4. Fourth H2 from the app [330 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to avoid the next one | What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".
- Formats for this page type: One H3 per mistake with two or three prose paragraphs (what it is, why it happens, what to do instead). A table only when the section compares fixes. No bullets. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per mistake, phrased as the mistake itself. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2000 words. Aim for about 1500.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `trend_outlook` (Trend outlook)

Spec: {"words_min": 1500, "words_max": 3000, "default_words": 2250, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per trend inside the section that lists them.", "schema_types": "Article + BreadcrumbList"}

```text
<page_brief>
Page type: Trend outlook (guide family). Annual trends or state of X
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What to watch next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The two or three signals that would confirm or break the outlook and when to check them, in 60 to 120 words.
- Formats for this page type: Numbered steps for any section that describes a sequence. A table for any section that compares two or more options, sets criteria against options, or shows costs, timelines or thresholds. Bullets only for checklists or lists of requirements with four or more items. Prose everywhere else, including the opening and the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per trend inside the section that lists them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 3000 words. Aim for about 2250.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `symptom_problem_page` (Symptom problem)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "closing_mode": "append", "cta_mode": "required", "h3_policy": "required: one H3 per cause or per fix inside the sections that go through them.", "schema_types": "Article + MedicalWebPage + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Symptom problem (guide family). Why is X happening, signs of X
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [330 words]
  2. Second H2 from the app [330 words]
  3. Third H2 from the app [330 words]
  4. Fourth H2 from the app [330 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: When to get help | What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The signs that mean the reader should stop self diagnosing and contact a professional, then what the first appointment or call involves, from the facts, in 60 to 120 words, then the CTA sentence.
- Formats for this page type: Numbered steps for any section that describes a sequence. A table for any section that compares two or more options, sets criteria against options, or shows costs, timelines or thresholds. Bullets only for checklists or lists of requirements with four or more items. Prose everywhere else, including the opening and the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per cause or per fix inside the sections that go through them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2000 words. Aim for about 1500.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.
- Page type constraints: Diagnostic content: state severity thresholds and when to call a professional; no diagnosis; reviewer named where the vertical is medical.

CTA:
One call to action, in the closing section only (section 5). Direct but calm: one or two plain sentences asking for the one action in the CTA rule (book, call), linked to the CTA URL with a two to four word anchor. No fear appeal. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `destination_guide` (Destination guide)

Spec: {"words_min": 1500, "words_max": 3500, "default_words": 2500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per place, season or activity inside the sections that list them.", "schema_types": "Article + WebPage + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Destination guide (guide family). Travel or area guide
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to plan the trip | What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".
- Formats for this page type: Numbered steps for any section that describes a sequence. A table for any section that compares two or more options, sets criteria against options, or shows costs, timelines or thresholds. Bullets only for checklists or lists of requirements with four or more items. Prose everywhere else, including the opening and the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per place, season or activity inside the sections that list them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 3500 words. Aim for about 2500.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `career_guide` (Career guide)

Spec: {"words_min": 1500, "words_max": 2500, "default_words": 2000, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "closing_mode": "append", "cta_mode": "none", "h3_policy": "required: one H3 per role, step or skill inside the sections that list them.", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Career guide (guide family). How to become an X
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A direct answer or definition paragraph under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to start | What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".
- Formats for this page type: Numbered steps for any section that describes a sequence. A table for any section that compares two or more options, sets criteria against options, or shows costs, timelines or thresholds. Bullets only for checklists or lists of requirements with four or more items. Prose everywhere else, including the opening and the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per role, step or skill inside the sections that list them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 2500 words. Aim for about 2000.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.
- Page type constraints: Salary and requirement figures carry source and year.

CTA:
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```
