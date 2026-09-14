# Writer page briefs: `guide` family (12 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `deep_dive_guide` (Deep-dive guide)

Spec: {"words_min": 2000, "words_max": 4000, "default_words": 2000, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 4, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "Article + FAQPage + HowTo + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words, as a markdown table with a header row]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 2000 to 4000 words. Aim for about 2000.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 4 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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

## `how_to` (How-to guide)

Spec: {"words_min": 1000, "words_max": 2500, "default_words": 1750, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "HowTo + Article + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [418 words]
  2. Second H2 from the app [418 words, as a markdown table with a header row]
  3. Third H2 from the app [418 words]
  4. Fourth H2 from the app [418 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 1000 to 2500 words. Aim for about 1750.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 3 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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

## `supporting_article` (Supporting article)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1400, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 2, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "Article + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [330 words]
  2. Second H2 from the app [330 words, as a markdown table with a header row]
  3. Third H2 from the app [330 words]
  4. Fourth H2 from the app [330 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 800 to 1800 words. Aim for about 1400.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 2 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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

## `explainer_what_is` (What-is explainer)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "Article + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [355 words]
  2. Second H2 from the app [355 words, as a markdown table with a header row]
  3. Third H2 from the app [355 words]
  4. Fourth H2 from the app [355 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 1000 to 2000 words. Aim for about 1500.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 3 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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

## `checklist` (Checklist)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1300, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "HowTo + Article + ItemList + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [305 words]
  2. Second H2 from the app [305 words, as a markdown table with a header row]
  3. Third H2 from the app [305 words]
  4. Fourth H2 from the app [305 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 800 to 1800 words. Aim for about 1300.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 3 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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

## `regulation_compliance_explainer` (Regulation compliance explainer)

Spec: {"words_min": 1500, "words_max": 3000, "default_words": 2250, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "Article + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words, as a markdown table with a header row]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 1500 to 3000 words. Aim for about 2250.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 3 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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
- Page type constraints: Cite the official text; state jurisdiction and effective dates; not legal advice line.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `process_page` (Process)

Spec: {"words_min": 700, "words_max": 1500, "default_words": 1100, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "Article + Service + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [255 words]
  2. Second H2 from the app [255 words, as a markdown table with a header row]
  3. Third H2 from the app [255 words]
  4. Fourth H2 from the app [255 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 700 to 1500 words. Aim for about 1100.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 3 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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

## `mistakes_pitfalls` (Mistakes pitfalls)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "Article + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [355 words]
  2. Second H2 from the app [355 words, as a markdown table with a header row]
  3. Third H2 from the app [355 words]
  4. Fourth H2 from the app [355 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 1000 to 2000 words. Aim for about 1500.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 3 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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

## `trend_outlook` (Trend outlook)

Spec: {"words_min": 1500, "words_max": 3000, "default_words": 2250, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "Article + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words, as a markdown table with a header row]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 1500 to 3000 words. Aim for about 2250.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 3 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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

## `symptom_problem_page` (Symptom problem)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "Article + MedicalWebPage + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [355 words]
  2. Second H2 from the app [355 words, as a markdown table with a header row]
  3. Third H2 from the app [355 words]
  4. Fourth H2 from the app [355 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 1000 to 2000 words. Aim for about 1500.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 3 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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
- Page type constraints: Diagnostic content: state severity thresholds and when to call a professional; no diagnosis; reviewer named where the vertical is medical.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `destination_guide` (Destination guide)

Spec: {"words_min": 1500, "words_max": 3500, "default_words": 2500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "Article + TouristDestination + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words, as a markdown table with a header row]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 1500 to 3500 words. Aim for about 2500.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 3 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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

## `career_guide` (Career guide)

Spec: {"words_min": 1500, "words_max": 2500, "default_words": 2000, "answer_paragraph": true, "answer_style": "definition", "tables_min": 1, "citations_min": 3, "research": "search", "section_format_hints": "prose,steps,table", "schema_types": "Article + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words, as a markdown table with a header row]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), steps (as numbered steps), table (as a markdown table with a header row).
- Total length: 1500 to 2500 words. Aim for about 2000.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- Include at least 3 external citations as markdown links to URLs that appear in the evidence section. Name the source and the year in the sentence.
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
- Page type constraints: Salary and requirement figures carry source and year.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```
