# Writer page briefs: `entity` family (11 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `about_page` (About)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "AboutPage + Organization + BreadcrumbList"}

```text
<page_brief>
Page type: About (entity family). Company story, mission, facts
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: Key facts: who, role, credentials, where. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [198 words]
  2. Second H2 from the app [198 words, as a markdown table with a header row]
  3. Third H2 from the app [198 words]
  4. Fourth H2 from the app [198 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 500 to 1200 words. Aim for about 850.
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

## `team_index` (Team index)

Spec: {"words_min": 200, "words_max": 500, "default_words": 350, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "CollectionPage + Person + BreadcrumbList"}

```text
<page_brief>
Page type: Team index (entity family). Team directory
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: Key facts: who, role, credentials, where. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words, as a markdown table with a header row]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 200 to 500 words. Aim for about 350.
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

## `team_member_bio` (Team member bio)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "ProfilePage + Person + BreadcrumbList"}

```text
<page_brief>
Page type: Team member bio (entity family). Individual staff profile
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: Key facts: who, role, credentials, where. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [122 words]
  2. Second H2 from the app [122 words, as a markdown table with a header row]
  3. Third H2 from the app [122 words]
  4. Fourth H2 from the app [122 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 300 to 800 words. Aim for about 550.
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

## `author_bio_page` (Author page)

Spec: {"words_min": 300, "words_max": 800, "default_words": 1400, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "Person + ProfilePage + BreadcrumbList"}

```text
<page_brief>
Page type: Author page (entity family). Author page for bylines
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: Key facts: who, role, credentials, where. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [335 words]
  2. Second H2 from the app [335 words, as a markdown table with a header row]
  3. Third H2 from the app [335 words]
  4. Fourth H2 from the app [335 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 300 to 800 words. Aim for about 1400.
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

## `attorney_bio` (Attorney bio)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "ProfilePage + Person + BreadcrumbList"}

```text
<page_brief>
Page type: Attorney bio (entity family). Lawyer profile
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: Key facts: who, role, credentials, where. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [198 words]
  2. Second H2 from the app [198 words, as a markdown table with a header row]
  3. Third H2 from the app [198 words]
  4. Fourth H2 from the app [198 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 500 to 1200 words. Aim for about 850.
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
- Page type constraints: Bar admissions, education and results only from the facts; results carry the prior-results disclaimer; no expert or specialist unless certified.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `provider_profile` (Provider profile)

Spec: {"words_min": 400, "words_max": 1000, "default_words": 700, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "ProfilePage + Physician + MedicalOrganization + BreadcrumbList"}

```text
<page_brief>
Page type: Provider profile (entity family). Clinician profile
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: Key facts: who, role, credentials, where. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [160 words]
  2. Second H2 from the app [160 words, as a markdown table with a header row]
  3. Third H2 from the app [160 words]
  4. Fourth H2 from the app [160 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 400 to 1000 words. Aim for about 700.
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
- Page type constraints: Credentials, board certifications and licence data only from the facts; no superlatives such as best or top.

CTA:
The final section closes with a call to action paragraph that follows this rule: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. No button, no heading.
</page_brief>
```

## `agent_profile` (Agent profile)

Spec: {"words_min": 400, "words_max": 900, "default_words": 650, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "ProfilePage + RealEstateAgent + BreadcrumbList"}

```text
<page_brief>
Page type: Agent profile (entity family). Real estate or insurance agent
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: Key facts: who, role, credentials, where. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [148 words]
  2. Second H2 from the app [148 words, as a markdown table with a header row]
  3. Third H2 from the app [148 words]
  4. Fourth H2 from the app [148 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 400 to 900 words. Aim for about 650.
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

## `partner_vendor_profile` (Partner vendor profile)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "ProfilePage + Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Partner vendor profile (entity family). Partner or vendor listing
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: Key facts: who, role, credentials, where. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [122 words]
  2. Second H2 from the app [122 words, as a markdown table with a header row]
  3. Third H2 from the app [122 words]
  4. Fourth H2 from the app [122 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 300 to 800 words. Aim for about 550.
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

## `company_facts_page` (Company facts)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "Organization + ProfilePage + BreadcrumbList"}

```text
<page_brief>
Page type: Company facts (entity family). Programmatic company profile
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the key facts style (Key facts: who, role, credentials, where). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [118 words]
  2. Second H2 from the app [118 words, as a markdown table with a header row]
  3. Third H2 from the app [118 words]
  4. Fourth H2 from the app [118 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 300 to 800 words. Aim for about 550.
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

## `press_room` (Press room)

Spec: {"words_min": 200, "words_max": 500, "default_words": 350, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "CollectionPage + Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Press room (entity family). Media kit and releases index
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: Key facts: who, role, credentials, where. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words, as a markdown table with a header row]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 200 to 500 words. Aim for about 350.
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

## `press_release_news` (Press release news)

Spec: {"words_min": 400, "words_max": 900, "default_words": 650, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "section_format_hints": "prose,bullets", "schema_types": "NewsArticle + BreadcrumbList"}

```text
<page_brief>
Page type: Press release news (entity family). Single press release
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: Key facts: who, role, credentials, where. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder sections. H3 subheadings inside a section are allowed where they help.
  1. First H2 from the app [148 words]
  2. Second H2 from the app [148 words, as a markdown table with a header row]
  3. Third H2 from the app [148 words]
  4. Fourth H2 from the app [148 words]
- Preferred formats for this page type, where a section has no format of its own: prose (as prose), bullets (as a short bulleted list).
- Total length: 400 to 900 words. Aim for about 650.
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
