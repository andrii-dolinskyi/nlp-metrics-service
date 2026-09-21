# Writer page briefs: `reference` family (8 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `glossary_term` (Glossary term)

Spec: {"words_min": 300, "words_max": 900, "default_words": 450, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "none", "closing_mode": "none", "cta_mode": "none", "h3_policy": "none: a glossary entry has no subheadings.", "schema_types": "DefinedTerm + DefinedTermSet + BreadcrumbList"}

```text
<page_brief>
Page type: Glossary term (reference family). Single term definition
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [92 words]
  2. Second H2 from the app [92 words]
  3. Third H2 from the app [92 words]
  4. Fourth H2 from the app [92 words]

- Formats for this page type: The definition in prose. A table only when the term has variants to compare. Related terms as a short bullet list. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- No H3 subheadings on this page type. a glossary entry has no subheadings.
- Total length: 300 to 900 words. Aim for about 450.
- External citations are optional. Any you use must come from the Live Research tool.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `faq_page` (FAQ page)

Spec: {"words_min": 800, "words_max": 2000, "default_words": 1400, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 1, "research": "search", "closing_mode": "none", "cta_mode": "none", "h3_policy": "required: every question is an H3 phrased exactly as a reader asks it.", "schema_types": "FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: FAQ page (reference family). Standalone FAQ for a topic or service
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A 40 to 60 word direct answer under the H1. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [335 words]
  2. Second H2 from the app [335 words]
  3. Third H2 from the app [335 words]
  4. Fourth H2 from the app [335 words]

- Formats for this page type: Each question as an H3 in the section it belongs to, with a 40 to 80 word answer that opens with the direct answer. No table. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are required: every question is an H3 phrased exactly as a reader asks it. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 2000 words. Aim for about 1400.
- Include at least 1 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `statistics_page` (Statistics page)

Spec: {"words_min": 1500, "words_max": 3000, "default_words": 2250, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "search", "closing_mode": "append", "cta_mode": "none", "h3_policy": "required: one H3 per statistic group, phrased as the figure it holds.", "schema_types": "Article + BreadcrumbList"}

```text
<page_brief>
Page type: Statistics page (reference family). Curated statistics roundup with citations
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to use these figures | Methodology and sources. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: Where the figures come from, how recent they are and how to cite the page, in 60 to 100 words.
- Formats for this page type: Every statistic in a table with the value, the year and the source. One sentence of context per figure in prose. Key findings as a numbered list at the top. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are required: one H3 per statistic group, phrased as the figure it holds. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 3000 words. Aim for about 2250.
- Include at least 1 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
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
- Page type constraints: Every statistic carries a named source, URL and year from the evidence; nothing unsourced.

CTA:
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `spec_sheet` (Spec sheet)

Spec: {"words_min": 300, "words_max": 1000, "default_words": 650, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 1, "research": "search", "closing_mode": "none", "cta_mode": "none", "h3_policy": "none: the table carries the structure.", "schema_types": "TechArticle + BreadcrumbList"}

```text
<page_brief>
Page type: Spec sheet (reference family). Technical specification page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A 40 to 60 word direct answer under the H1. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [148 words]
  2. Second H2 from the app [148 words]
  3. Third H2 from the app [148 words]
  4. Fourth H2 from the app [148 words]

- Formats for this page type: Specifications in tables grouped by category. Two or three sentences of prose per group at most. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- No H3 subheadings on this page type. the table carries the structure.
- Total length: 300 to 1000 words. Aim for about 650.
- Include at least 1 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `question_page` (Question)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "search", "closing_mode": "none", "cta_mode": "none", "h3_policy": "none: one question, one answer, no subheadings.", "schema_types": "Article + QAPage + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Question (reference family). Single-question page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [192 words]
  2. Second H2 from the app [192 words]
  3. Third H2 from the app [192 words]
  4. Fourth H2 from the app [192 words]

- Formats for this page type: The answer in prose, a table only when the answer depends on cases. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- No H3 subheadings on this page type. one question, one answer, no subheadings.
- Total length: 500 to 1200 words. Aim for about 850.
- Include at least 1 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `entity_lookup` (Entity lookup)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "search", "closing_mode": "none", "cta_mode": "none", "h3_policy": "none.", "schema_types": "Article + BreadcrumbList"}

```text
<page_brief>
Page type: Entity lookup (reference family). Programmatic fact page about an entity
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [118 words]
  2. Second H2 from the app [118 words]
  3. Third H2 from the app [118 words]
  4. Fourth H2 from the app [118 words]

- Formats for this page type: Facts in a two column table, then prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- No H3 subheadings on this page type. 
- Total length: 300 to 800 words. Aim for about 550.
- Include at least 1 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `country_region_guide` (Country region guide)

Spec: {"words_min": 1200, "words_max": 2500, "default_words": 1850, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per topic (rules, costs, timelines) inside the sections that cover several.", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Country region guide (reference family). Regulatory or practical reference by jurisdiction
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [418 words]
  2. Second H2 from the app [418 words]
  3. Third H2 from the app [418 words]
  4. Fourth H2 from the app [418 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What to check before you decide. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".
- Formats for this page type: Definitions and explanations in prose. Figures, ranges, specifications and comparisons in tables. Bullets only for lists of four or more short items. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are required: one H3 per topic (rules, costs, timelines) inside the sections that cover several. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1200 to 2500 words. Aim for about 1850.
- Include at least 1 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
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
- Page type constraints: Jurisdiction and effective dates on every rule; sources cited; not legal or tax advice line.

CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `salary_guide` (Salary guide)

Spec: {"words_min": 1000, "words_max": 2500, "default_words": 1750, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per role, level or region inside the sections that list them.", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Salary guide (reference family). Compensation reference by role or region
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [392 words]
  2. Second H2 from the app [392 words]
  3. Third H2 from the app [392 words]
  4. Fourth H2 from the app [392 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to use this data in a negotiation. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: How to read the range against the reader's own case and what moves a figure up or down, in 60 to 120 words.
- Formats for this page type: Salary ranges in tables with the year and the source. Prose for what moves the figure. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are required: one H3 per role, level or region inside the sections that list them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2500 words. Aim for about 1750.
- Include at least 1 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
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
- Page type constraints: Every figure carries its source and year; state methodology.

CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```
