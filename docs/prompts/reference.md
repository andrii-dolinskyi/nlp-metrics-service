# Writer page briefs: `reference` family (8 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `glossary_term` (Glossary term)

Spec: {"words_min": 300, "words_max": 900, "default_words": 450, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "none", "section_format_hints": "prose,table", "schema_types": "DefinedTerm + DefinedTermSet + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [92 words]
  2. Second H2 from the app [92 words, as a markdown table with a header row]
  3. Third H2 from the app [92 words]
  4. Fourth H2 from the app [92 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 300 to 900 words. Aim for about 450.
- Tables are optional. Use one only where it helps the reader.
- External citations are optional and must come from the evidence section or the Live Research tool.
- Every H2 section opens with a sentence that answers that section directly, then explains, then evidences.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Internal links:
Place every one of these exactly once, in body text, with the given anchor or a natural variant of it. Never in the H1, the opening paragraph, a heading, a table or a list of links. Never invent any other internal link.
  - https://example.com/published-page/ (anchor: anchor text from the app)

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts, the evidence or a Live Research result, do not write it.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `faq_page` (FAQ page)

Spec: {"words_min": 800, "words_max": 2000, "default_words": 1400, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 1, "research": "search", "section_format_hints": "prose,table", "schema_types": "FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [335 words]
  2. Second H2 from the app [335 words, as a markdown table with a header row]
  3. Third H2 from the app [335 words]
  4. Fourth H2 from the app [335 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 800 to 2000 words. Aim for about 1400.
- Tables are optional. Use one only where it helps the reader.
- Include at least 1 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
- Every H2 section opens with a sentence that answers that section directly, then explains, then evidences.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Internal links:
Place every one of these exactly once, in body text, with the given anchor or a natural variant of it. Never in the H1, the opening paragraph, a heading, a table or a list of links. Never invent any other internal link.
  - https://example.com/published-page/ (anchor: anchor text from the app)

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts, the evidence or a Live Research result, do not write it.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `statistics_page` (Statistics page)

Spec: {"words_min": 1500, "words_max": 3000, "default_words": 2250, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "search", "section_format_hints": "prose,table", "schema_types": "Article + Dataset + ItemList + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words, as a markdown table with a header row]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 1500 to 3000 words. Aim for about 2250.
- Tables are optional. Use one only where it helps the reader.
- Include at least 1 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
- Every H2 section opens with a sentence that answers that section directly, then explains, then evidences.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Internal links:
Place every one of these exactly once, in body text, with the given anchor or a natural variant of it. Never in the H1, the opening paragraph, a heading, a table or a list of links. Never invent any other internal link.
  - https://example.com/published-page/ (anchor: anchor text from the app)

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts, the evidence or a Live Research result, do not write it.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.
- Page type constraints: Every statistic carries a named source, URL and year from the evidence; nothing unsourced.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `spec_sheet` (Spec sheet)

Spec: {"words_min": 300, "words_max": 1000, "default_words": 650, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 1, "research": "search", "section_format_hints": "prose,table", "schema_types": "Product + PropertyValue + TechArticle + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [148 words]
  2. Second H2 from the app [148 words, as a markdown table with a header row]
  3. Third H2 from the app [148 words]
  4. Fourth H2 from the app [148 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 300 to 1000 words. Aim for about 650.
- Tables are optional. Use one only where it helps the reader.
- Include at least 1 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
- Every H2 section opens with a sentence that answers that section directly, then explains, then evidences.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Internal links:
Place every one of these exactly once, in body text, with the given anchor or a natural variant of it. Never in the H1, the opening paragraph, a heading, a table or a list of links. Never invent any other internal link.
  - https://example.com/published-page/ (anchor: anchor text from the app)

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts, the evidence or a Live Research result, do not write it.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `question_page` (Question)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "search", "section_format_hints": "prose,table", "schema_types": "Article + QAPage + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [192 words]
  2. Second H2 from the app [192 words, as a markdown table with a header row]
  3. Third H2 from the app [192 words]
  4. Fourth H2 from the app [192 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 500 to 1200 words. Aim for about 850.
- Tables are optional. Use one only where it helps the reader.
- Include at least 1 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
- Every H2 section opens with a sentence that answers that section directly, then explains, then evidences.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Internal links:
Place every one of these exactly once, in body text, with the given anchor or a natural variant of it. Never in the H1, the opening paragraph, a heading, a table or a list of links. Never invent any other internal link.
  - https://example.com/published-page/ (anchor: anchor text from the app)

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts, the evidence or a Live Research result, do not write it.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `entity_lookup` (Entity lookup)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "search", "section_format_hints": "prose,table", "schema_types": "Article + Dataset + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [118 words]
  2. Second H2 from the app [118 words, as a markdown table with a header row]
  3. Third H2 from the app [118 words]
  4. Fourth H2 from the app [118 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 300 to 800 words. Aim for about 550.
- Tables are optional. Use one only where it helps the reader.
- Include at least 1 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
- Every H2 section opens with a sentence that answers that section directly, then explains, then evidences.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Internal links:
Place every one of these exactly once, in body text, with the given anchor or a natural variant of it. Never in the H1, the opening paragraph, a heading, a table or a list of links. Never invent any other internal link.
  - https://example.com/published-page/ (anchor: anchor text from the app)

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts, the evidence or a Live Research result, do not write it.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `country_region_guide` (Country region guide)

Spec: {"words_min": 1200, "words_max": 2500, "default_words": 1850, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "search", "section_format_hints": "prose,table", "schema_types": "Article + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [442 words]
  2. Second H2 from the app [442 words, as a markdown table with a header row]
  3. Third H2 from the app [442 words]
  4. Fourth H2 from the app [442 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 1200 to 2500 words. Aim for about 1850.
- Tables are optional. Use one only where it helps the reader.
- Include at least 1 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
- Every H2 section opens with a sentence that answers that section directly, then explains, then evidences.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Internal links:
Place every one of these exactly once, in body text, with the given anchor or a natural variant of it. Never in the H1, the opening paragraph, a heading, a table or a list of links. Never invent any other internal link.
  - https://example.com/published-page/ (anchor: anchor text from the app)

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts, the evidence or a Live Research result, do not write it.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.
- Page type constraints: Jurisdiction and effective dates on every rule; sources cited; not legal or tax advice line.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `salary_guide` (Salary guide)

Spec: {"words_min": 1000, "words_max": 2500, "default_words": 1750, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "citations_min": 1, "research": "search", "section_format_hints": "prose,table", "schema_types": "Article + Dataset + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [418 words]
  2. Second H2 from the app [418 words, as a markdown table with a header row]
  3. Third H2 from the app [418 words]
  4. Fourth H2 from the app [418 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 1000 to 2500 words. Aim for about 1750.
- Tables are optional. Use one only where it helps the reader.
- Include at least 1 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
- Every H2 section opens with a sentence that answers that section directly, then explains, then evidences.
- Each section has its own job. Say a thing once, in the section where it belongs. A client fact appears where it is relevant and at most twice on the whole page. Never recycle facts to reach a word budget; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Internal links:
Place every one of these exactly once, in body text, with the given anchor or a natural variant of it. Never in the H1, the opening paragraph, a heading, a table or a list of links. Never invent any other internal link.
  - https://example.com/published-page/ (anchor: anchor text from the app)

Client facts:
These are the only claims you may make about the client. Use them exactly and invent nothing about the client beyond them. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact_key_1: fact value from the app
- fact_key_2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts, the evidence or a Live Research result, do not write it.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.
- Page type constraints: Every figure carries its source and year; state methodology.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```
