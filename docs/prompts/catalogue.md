# Writer page briefs: `catalogue` family (26 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `product_page` (Product)

Spec: {"words_min": 300, "words_max": 1200, "default_words": 750, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Product + Offer + AggregateRating + BreadcrumbList"}

```text
<page_brief>
Page type: Product (catalogue family). Single product
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [172 words]
  2. Second H2 from the app [172 words, as a markdown table with a header row]
  3. Third H2 from the app [172 words]
  4. Fourth H2 from the app [172 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 300 to 1200 words. Aim for about 750.
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
- Page type constraints: Specs, price and availability only from the facts; no unsupported free, guaranteed or environmental claims.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `product_category_page` (Product category)

Spec: {"words_min": 200, "words_max": 800, "default_words": 500, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "CollectionPage + ItemList + BreadcrumbList"}

```text
<page_brief>
Page type: Product category (catalogue family). Category with editorial copy
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [110 words]
  2. Second H2 from the app [110 words, as a markdown table with a header row]
  3. Third H2 from the app [110 words]
  4. Fourth H2 from the app [110 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 200 to 800 words. Aim for about 500.
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

## `collection_curated_page` (Collection curated)

Spec: {"words_min": 200, "words_max": 600, "default_words": 400, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "CollectionPage + ItemList + BreadcrumbList"}

```text
<page_brief>
Page type: Collection curated (catalogue family). Themed collection
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words, as a markdown table with a header row]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 200 to 600 words. Aim for about 400.
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

## `intermediary_category_page` (Intermediary category)

Spec: {"words_min": 200, "words_max": 500, "default_words": 350, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "CollectionPage + BreadcrumbList"}

```text
<page_brief>
Page type: Intermediary category (catalogue family). Parent category routing to subcategories
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words, as a markdown table with a header row]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 200 to 500 words. Aim for about 350.
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

## `listing_detail_page` (Listing detail)

Spec: {"words_min": 300, "words_max": 900, "default_words": 600, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "RealEstateListing + Vehicle + Offer + Accommodation + BreadcrumbList"}

```text
<page_brief>
Page type: Listing detail (catalogue family). Single listing (property, vehicle, rental)
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [135 words]
  2. Second H2 from the app [135 words, as a markdown table with a header row]
  3. Third H2 from the app [135 words]
  4. Fourth H2 from the app [135 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 300 to 900 words. Aim for about 600.
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
- Page type constraints: Fair Housing language rules; specs and price only from the facts.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `search_results_listing_page` (Search results listing) — not written by the flow (ai_writable = N), shown for completeness

Spec: {"words_min": 100, "words_max": 400, "default_words": 250, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "SearchResultsPage + CollectionPage"}

```text
<page_brief>
Page type: Search results listing (catalogue family). Filtered listing grid
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words, as a markdown table with a header row]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
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

## `model_research_page` (Model research)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1300, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Product + Vehicle + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Model research (catalogue family). Hand-written page for a vehicle model or product line
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the key facts style (The item's title and key facts). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [305 words]
  2. Second H2 from the app [305 words, as a markdown table with a header row]
  3. Third H2 from the app [305 words]
  4. Fourth H2 from the app [305 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 800 to 1800 words. Aim for about 1300.
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

## `job_posting_page` (Job posting)

Spec: {"words_min": 400, "words_max": 900, "default_words": 650, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "JobPosting + BreadcrumbList"}

```text
<page_brief>
Page type: Job posting (catalogue family). Single vacancy
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [148 words]
  2. Second H2 from the app [148 words, as a markdown table with a header row]
  3. Third H2 from the app [148 words]
  4. Fourth H2 from the app [148 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 400 to 900 words. Aim for about 650.
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
- Page type constraints: Real salary, location, employer and deadline from the facts; equal-opportunity language; no discriminatory requirements.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `job_category_page` (Job category)

Spec: {"words_min": 200, "words_max": 600, "default_words": 400, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "CollectionPage + ItemList + BreadcrumbList"}

```text
<page_brief>
Page type: Job category (catalogue family). Jobs by role, industry or location
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words, as a markdown table with a header row]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 200 to 600 words. Aim for about 400.
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

## `careers_page` (Careers)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "WebPage + Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Careers (catalogue family). Employer branding and open roles
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [198 words]
  2. Second H2 from the app [198 words, as a markdown table with a header row]
  3. Third H2 from the app [198 words]
  4. Fourth H2 from the app [198 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 500 to 1200 words. Aim for about 850.
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

## `event_page` (Event)

Spec: {"words_min": 300, "words_max": 900, "default_words": 600, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Event + Offer + Place + BreadcrumbList"}

```text
<page_brief>
Page type: Event (catalogue family). Single event or class
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [135 words]
  2. Second H2 from the app [135 words, as a markdown table with a header row]
  3. Third H2 from the app [135 words]
  4. Fourth H2 from the app [135 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 300 to 900 words. Aim for about 600.
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

## `recipe_page` (Recipe)

Spec: {"words_min": 600, "words_max": 1500, "default_words": 1050, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Recipe + HowTo + VideoObject + BreadcrumbList"}

```text
<page_brief>
Page type: Recipe (catalogue family). Recipe
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the key facts style (The item's title and key facts). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [242 words]
  2. Second H2 from the app [242 words, as a markdown table with a header row]
  3. Third H2 from the app [242 words]
  4. Fourth H2 from the app [242 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 600 to 1500 words. Aim for about 1050.
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
- Page type constraints: Yields, times, allergens and nutrition only from the facts.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `menu_page` (Menu)

Spec: {"words_min": 200, "words_max": 800, "default_words": 500, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Menu + MenuSection + MenuItem + BreadcrumbList"}

```text
<page_brief>
Page type: Menu (catalogue family). Restaurant menu as HTML
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [110 words]
  2. Second H2 from the app [110 words, as a markdown table with a header row]
  3. Third H2 from the app [110 words]
  4. Fourth H2 from the app [110 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 200 to 800 words. Aim for about 500.
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

## `accommodation_room_page` (Accommodation room)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Accommodation + HotelRoom + Offer + BreadcrumbList"}

```text
<page_brief>
Page type: Accommodation room (catalogue family). Hotel room or property type
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [122 words]
  2. Second H2 from the app [122 words, as a markdown table with a header row]
  3. Third H2 from the app [122 words]
  4. Fourth H2 from the app [122 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
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

## `tour_package_page` (Tour package)

Spec: {"words_min": 800, "words_max": 2000, "default_words": 1400, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "TouristTrip + Offer + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Tour package (catalogue family). Tour or itinerary
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [335 words]
  2. Second H2 from the app [335 words, as a markdown table with a header row]
  3. Third H2 from the app [335 words]
  4. Fourth H2 from the app [335 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 800 to 2000 words. Aim for about 1400.
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

## `app_marketplace_listing` (App marketplace listing)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "SoftwareApplication + Offer + BreadcrumbList"}

```text
<page_brief>
Page type: App marketplace listing (catalogue family). App or plugin listing
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [122 words]
  2. Second H2 from the app [122 words, as a markdown table with a header row]
  3. Third H2 from the app [122 words]
  4. Fourth H2 from the app [122 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
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

## `material_capability_page` (Capability or material page)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1300, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Service + Product + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Capability or material page (catalogue family). Manufacturing capability or material
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [310 words]
  2. Second H2 from the app [310 words, as a markdown table with a header row]
  3. Third H2 from the app [310 words]
  4. Fourth H2 from the app [310 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 800 to 1800 words. Aim for about 1300.
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

## `application_page_industrial` (Industrial application page)

Spec: {"words_min": 700, "words_max": 1500, "default_words": 1100, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Service + Product + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Industrial application page (catalogue family). Industrial use-case page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [260 words]
  2. Second H2 from the app [260 words, as a markdown table with a header row]
  3. Third H2 from the app [260 words]
  4. Fourth H2 from the app [260 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 700 to 1500 words. Aim for about 1100.
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

## `condition_page` (Condition)

Spec: {"words_min": 1000, "words_max": 2500, "default_words": 1750, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "MedicalWebPage + MedicalCondition + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Condition (catalogue family). Medical condition overview
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the key facts style (The item's title and key facts). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [418 words]
  2. Second H2 from the app [418 words, as a markdown table with a header row]
  3. Third H2 from the app [418 words]
  4. Fourth H2 from the app [418 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
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
- Page type constraints: Medical content: cite clinical sources with year; name a credentialed reviewer in the facts; never diagnose or promise outcomes; include when-to-seek-care guidance and a see-a-professional line.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `treatment_procedure_page` (Treatment procedure)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "MedicalWebPage + MedicalProcedure + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Treatment procedure (catalogue family). Treatment or procedure
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the key facts style (The item's title and key facts). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [355 words]
  2. Second H2 from the app [355 words, as a markdown table with a header row]
  3. Third H2 from the app [355 words]
  4. Fourth H2 from the app [355 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 1000 to 2000 words. Aim for about 1500.
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
- Page type constraints: Medical content: clinical facts from sources with year; named reviewer; candidacy, risks and recovery stated honestly; no outcome guarantees; see-a-professional line.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `drug_medication_page` (Drug medication)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "MedicalWebPage + Drug + BreadcrumbList"}

```text
<page_brief>
Page type: Drug medication (catalogue family). Medication reference
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the key facts style (The item's title and key facts). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [355 words]
  2. Second H2 from the app [355 words, as a markdown table with a header row]
  3. Third H2 from the app [355 words]
  4. Fourth H2 from the app [355 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 1000 to 2000 words. Aim for about 1500.
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
- Page type constraints: Medication content: dosage and interactions only from cited official sources; named reviewer; regulatory wording; no off-label suggestions; see-a-professional line.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `practice_area_page` (Practice area)

Spec: {"words_min": 1500, "words_max": 2500, "default_words": 2000, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "LegalService + FAQPage + Attorney + BreadcrumbList"}

```text
<page_brief>
Page type: Practice area (catalogue family). Legal practice area
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words, as a markdown table with a header row]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 1500 to 2500 words. Aim for about 2000.
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
- Page type constraints: Legal advertising: no best, top, expert or specialist unless certified; results carry 'prior results do not guarantee a similar outcome'; no legal advice, consult-an-attorney framing; 'attorney advertising' label where the facts say it is required.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `coverage_line_page` (Coverage line)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1300, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Service + InsuranceAgency + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Coverage line (catalogue family). Insurance line
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [310 words]
  2. Second H2 from the app [310 words, as a markdown table with a header row]
  3. Third H2 from the app [310 words]
  4. Fourth H2 from the app [310 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 800 to 1800 words. Aim for about 1300.
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
- Page type constraints: Insurance: scope, exclusions and deductibles from the facts; coverage subject to policy terms line; availability may vary by state; no payout or savings guarantees.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `financial_product_page` (Financial product)

Spec: {"words_min": 600, "words_max": 1500, "default_words": 1050, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "FinancialProduct + Offer + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Financial product (catalogue family). Loan, card, account or fund
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [248 words]
  2. Second H2 from the app [248 words, as a markdown table with a header row]
  3. Third H2 from the app [248 words]
  4. Fourth H2 from the app [248 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 600 to 1500 words. Aim for about 1050.
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
- Page type constraints: Financial promotion: rates, fees and eligibility only from the facts with an as-of date; representative example for credit; risk warning stated plainly near the top; not financial advice line.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `plan_tariff_page` (Plan tariff)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Offer + Product + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Plan tariff (catalogue family). Telecom, energy or utility plan
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [198 words]
  2. Second H2 from the app [198 words, as a markdown table with a header row]
  3. Third H2 from the app [198 words]
  4. Fourth H2 from the app [198 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 500 to 1200 words. Aim for about 850.
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
- Page type constraints: Regulated price and contract disclosures from the facts; speed and coverage claims as 'up to' where the facts say so.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `route_lane_page` (Route lane)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "section_format_hints": "table,prose", "schema_types": "Service + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Route lane (catalogue family). Shipping route or corridor
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The item's title and key facts. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [198 words]
  2. Second H2 from the app [198 words, as a markdown table with a header row]
  3. Third H2 from the app [198 words]
  4. Fourth H2 from the app [198 words]
- Preferred formats for this page type, where a section has no format of its own: table (as a markdown table with a header row), prose (as prose).
- Total length: 500 to 1200 words. Aim for about 850.
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
