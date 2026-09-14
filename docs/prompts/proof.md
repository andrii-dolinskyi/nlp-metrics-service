# Writer page briefs: `proof` family (7 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `case_study` (Case study)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 900, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 2, "research": "deep", "section_format_hints": "prose,table", "schema_types": "Article + CaseStudy + BreadcrumbList"}

```text
<page_brief>
Page type: Case study (proof family). One client story
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The headline result in one paragraph. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [210 words]
  2. Second H2 from the app [210 words, as a markdown table with a header row]
  3. Third H2 from the app [210 words]
  4. Fourth H2 from the app [210 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 800 to 1800 words. Aim for about 900.
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
- Page type constraints: Client name, metrics and quotes only from the facts and only with permission status confirmed.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `case_results_page` (Case results)

Spec: {"words_min": 400, "words_max": 1200, "default_words": 800, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "prose,table", "schema_types": "ItemList + WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Case results (proof family). Verdicts and settlements list
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The headline result in one paragraph. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [185 words]
  2. Second H2 from the app [185 words, as a markdown table with a header row]
  3. Third H2 from the app [185 words]
  4. Fourth H2 from the app [185 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 400 to 1200 words. Aim for about 800.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
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
- Page type constraints: Every result dated and from the facts; the prior-results disclaimer appears once near the top.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `testimonials_reviews_page` (Testimonials reviews)

Spec: {"words_min": 400, "words_max": 1200, "default_words": 800, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "prose,table", "schema_types": "Review + AggregateRating + Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Testimonials reviews (proof family). Aggregated reviews
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The headline result in one paragraph. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [185 words]
  2. Second H2 from the app [185 words, as a markdown table with a header row]
  3. Third H2 from the app [185 words]
  4. Fourth H2 from the app [185 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 400 to 1200 words. Aim for about 800.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
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
- Page type constraints: Only verified review text from the facts; Review schema only for real reviews.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `portfolio_project_page` (Portfolio project)

Spec: {"words_min": 400, "words_max": 1000, "default_words": 700, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "prose,table", "schema_types": "CreativeWork + Article + Place + BreadcrumbList"}

```text
<page_brief>
Page type: Portfolio project (proof family). One completed project
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The headline result in one paragraph. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [160 words]
  2. Second H2 from the app [160 words, as a markdown table with a header row]
  3. Third H2 from the app [160 words]
  4. Fourth H2 from the app [160 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 400 to 1000 words. Aim for about 700.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
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

## `impact_report_page` (Impact report)

Spec: {"words_min": 1000, "words_max": 2500, "default_words": 1750, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "prose,table", "schema_types": "Report + Article + BreadcrumbList"}

```text
<page_brief>
Page type: Impact report (proof family). Annual impact summary
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The headline result in one paragraph. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [422 words]
  2. Second H2 from the app [422 words, as a markdown table with a header row]
  3. Third H2 from the app [422 words]
  4. Fourth H2 from the app [422 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 1000 to 2500 words. Aim for about 1750.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
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

## `awards_certifications_page` (Awards certifications)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "prose,table", "schema_types": "Organization + ItemList + BreadcrumbList"}

```text
<page_brief>
Page type: Awards certifications (proof family). Credentials and accreditations
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The headline result in one paragraph. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [122 words]
  2. Second H2 from the app [122 words, as a markdown table with a header row]
  3. Third H2 from the app [122 words]
  4. Fourth H2 from the app [122 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 300 to 800 words. Aim for about 550.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
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

## `customer_logos_wall` (Customer logos wall) — not written by the flow (ai_writable = N), shown for completeness

Spec: {"words_min": 100, "words_max": 400, "default_words": 250, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "prose,table", "schema_types": "Organization"}

```text
<page_brief>
Page type: Customer logos wall (proof family). Trusted-by index
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The headline result in one paragraph. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words, as a markdown table with a header row]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), table (as a markdown table with a header row).
- Total length: 100 to 400 words. Aim for about 250.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
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
