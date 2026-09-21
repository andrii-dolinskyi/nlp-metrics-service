# Writer page briefs: `catalogue` family (15 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `product_category_page` (Product category)

Spec: {"words_min": 200, "words_max": 800, "default_words": 500, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "none", "cta_mode": "none", "h3_policy": "none.", "schema_types": "CollectionPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [110 words]
  2. Second H2 from the app [110 words]
  3. Third H2 from the app [110 words]
  4. Fourth H2 from the app [110 words]

- Formats for this page type: Prose for what the category holds and how to choose. A table only when it compares sub ranges. No bullets. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- No H3 subheadings on this page type. 
- Total length: 200 to 800 words. Aim for about 500.
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

## `collection_curated_page` (Collection curated)

Spec: {"words_min": 200, "words_max": 600, "default_words": 400, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "none", "cta_mode": "none", "h3_policy": "none.", "schema_types": "CollectionPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]

- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- No H3 subheadings on this page type. 
- Total length: 200 to 600 words. Aim for about 400.
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

## `intermediary_category_page` (Intermediary category)

Spec: {"words_min": 200, "words_max": 500, "default_words": 350, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "none", "cta_mode": "none", "h3_policy": "none.", "schema_types": "CollectionPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]

- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- No H3 subheadings on this page type. 
- Total length: 200 to 500 words. Aim for about 350.
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

## `search_results_listing_page` (Search results listing) — not written by the flow (ai_writable = N), shown for completeness

Spec: {"words_min": 100, "words_max": 400, "default_words": 250, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "none", "cta_mode": "none", "h3_policy": "none.", "schema_types": "WebPage + CollectionPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]

- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- No H3 subheadings on this page type. 
- Total length: 100 to 400 words. Aim for about 250.
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

## `careers_page` (Careers)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s inside a section over 250 words that covers several variants, options or stages.", "schema_types": "WebPage + Organization + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [172 words]
  2. Second H2 from the app [172 words]
  3. Third H2 from the app [172 words]
  4. Fourth H2 from the app [172 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: See open roles | How to apply. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The first step to get the item, what happens next and how long it takes, from the facts, in 40 to 90 words, then the CTA sentence.
- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s inside a section over 250 words that covers several variants, options or stages. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 500 to 1200 words. Aim for about 850.
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
One call to action, in the closing section only (section 5). Direct: one plain sentence pointing to the open roles, linked to the CTA URL. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `material_capability_page` (Capability or material page)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1300, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: one H3 per grade or process inside a section that covers several.", "schema_types": "Service + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [285 words]
  2. Second H2 from the app [285 words]
  3. Third H2 from the app [285 words]
  4. Fourth H2 from the app [285 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Request a quote for <material>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The first step to get the item, what happens next and how long it takes, from the facts, in 40 to 90 words, then the CTA sentence.
- Formats for this page type: Properties, tolerances and sizes in tables. Processes as numbered steps. Applications as bullets. Prose for the reasoning. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: one H3 per grade or process inside a section that covers several. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 1800 words. Aim for about 1300.
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
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `application_page_industrial` (Industrial application page)

Spec: {"words_min": 700, "words_max": 1500, "default_words": 1100, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s inside a section over 250 words that covers several variants, options or stages.", "schema_types": "Service + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [235 words]
  2. Second H2 from the app [235 words]
  3. Third H2 from the app [235 words]
  4. Fourth H2 from the app [235 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Discuss your application. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The first step to get the item, what happens next and how long it takes, from the facts, in 40 to 90 words, then the CTA sentence.
- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s inside a section over 250 words that covers several variants, options or stages. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 700 to 1500 words. Aim for about 1100.
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
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `condition_page` (Condition)

Spec: {"words_min": 1000, "words_max": 2500, "default_words": 1750, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "required: one H3 per symptom group, cause or treatment option inside the sections that go through them.", "schema_types": "MedicalWebPage + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [392 words]
  2. Second H2 from the app [392 words]
  3. Third H2 from the app [392 words]
  4. Fourth H2 from the app [392 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: When to see a specialist. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The signs that mean the reader should book an appointment rather than wait, and what the first visit involves, from the facts, in 60 to 120 words, then the CTA sentence. The reviewer line the constraints require stays.
- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per symptom group, cause or treatment option inside the sections that go through them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2500 words. Aim for about 1750.
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
- Page type constraints: Medical content: cite clinical sources with year; name a credentialed reviewer in the facts; never diagnose or promise outcomes; include when-to-seek-care guidance and a see-a-professional line.

CTA:
One call to action, in the closing section only (section 5). Direct but calm: one or two plain sentences asking for the appointment in the CTA rule, linked to the CTA URL. No fear appeal, no outcome promise. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `treatment_procedure_page` (Treatment procedure)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "required: one H3 per stage (before, during, after) or per option inside the sections that go through them.", "schema_types": "MedicalWebPage + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [330 words]
  2. Second H2 from the app [330 words]
  3. Third H2 from the app [330 words]
  4. Fourth H2 from the app [330 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Booking a consultation. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the consultation covers and how to prepare, from the facts, in 50 to 100 words, then the CTA sentence. Risks stated on the page stay stated.
- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per stage (before, during, after) or per option inside the sections that go through them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2000 words. Aim for about 1500.
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
- Page type constraints: Medical content: clinical facts from sources with year; named reviewer; candidacy, risks and recovery stated honestly; no outcome guarantees; see-a-professional line.

CTA:
One call to action, in the closing section only (section 5). Direct but calm: one or two plain sentences asking for the consultation in the CTA rule, linked to the CTA URL. No outcome promise. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `drug_medication_page` (Drug medication)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "none", "h3_policy": "required: one H3 per dosage form, use or side effect group inside the sections that go through them.", "schema_types": "MedicalWebPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [330 words]
  2. Second H2 from the app [330 words]
  3. Third H2 from the app [330 words]
  4. Fourth H2 from the app [330 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: When to talk to your prescriber. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The situations in which the reader should contact a prescriber or pharmacist, in 50 to 100 words. No CTA. The reviewer line the constraints require stays.
- Formats for this page type: Doses, forms and interactions in tables. Everything else in prose. No bullets except a short list of warning signs. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per dosage form, use or side effect group inside the sections that go through them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2000 words. Aim for about 1500.
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
- Page type constraints: Medication content: dosage and interactions only from cited official sources; named reviewer; regulatory wording; no off-label suggestions; see-a-professional line.

CTA:
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `practice_area_page` (Practice area)

Spec: {"words_min": 1500, "words_max": 2500, "default_words": 2000, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "required: one H3 per matter type or per stage inside the sections that go through them.", "schema_types": "LegalService + FAQPage + Person + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Talk to a <practice> lawyer. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The first step to get the item, what happens next and how long it takes, from the facts, in 40 to 90 words, then the CTA sentence.
- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per matter type or per stage inside the sections that go through them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 2500 words. Aim for about 2000.
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
- Page type constraints: Legal advertising: no best, top, expert or specialist unless certified; results carry 'prior results do not guarantee a similar outcome'; no legal advice, consult-an-attorney framing; 'attorney advertising' label where the facts say it is required.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the consultation in the CTA rule, linked to the CTA URL. Any result carries the disclaimer the constraints require. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `coverage_line_page` (Coverage line)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1300, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "required: one H3 per coverage part or per exclusion group.", "schema_types": "Service + Organization + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [285 words]
  2. Second H2 from the app [285 words]
  3. Third H2 from the app [285 words]
  4. Fourth H2 from the app [285 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get a quote. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The first step to get the item, what happens next and how long it takes, from the facts, in 40 to 90 words, then the CTA sentence.
- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per coverage part or per exclusion group. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 1800 words. Aim for about 1300.
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
- Page type constraints: Insurance: scope, exclusions and deductibles from the facts; coverage subject to policy terms line; availability may vary by state; no payout or savings guarantees.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the quote in the CTA rule, linked to the CTA URL. Coverage limits and exclusions stated on the page stay stated. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `financial_product_page` (Financial product)

Spec: {"words_min": 600, "words_max": 1500, "default_words": 1050, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: one H3 per eligibility group or fee type.", "schema_types": "FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [222 words]
  2. Second H2 from the app [222 words]
  3. Third H2 from the app [222 words]
  4. Fourth H2 from the app [222 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to apply. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The first step to get the item, what happens next and how long it takes, from the facts, in 40 to 90 words, then the CTA sentence.
- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: one H3 per eligibility group or fee type. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 600 to 1500 words. Aim for about 1050.
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
- Page type constraints: Financial promotion: rates, fees and eligibility only from the facts with an as-of date; representative example for credit; risk warning stated plainly near the top; not financial advice line.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the application in the CTA rule, linked to the CTA URL. Every rate carries the disclosure the constraints require. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `plan_tariff_page` (Plan tariff)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "required: one H3 per plan.", "schema_types": "FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [172 words]
  2. Second H2 from the app [172 words]
  3. Third H2 from the app [172 words]
  4. Fourth H2 from the app [172 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to sign up | How to switch. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The first step to get the item, what happens next and how long it takes, from the facts, in 40 to 90 words, then the CTA sentence.
- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per plan. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 500 to 1200 words. Aim for about 850.
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
- Page type constraints: Regulated price and contract disclosures from the facts; speed and coverage claims as 'up to' where the facts say so.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `route_lane_page` (Route lane)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional.", "schema_types": "Service + FAQPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [172 words]
  2. Second H2 from the app [172 words]
  3. Third H2 from the app [172 words]
  4. Fourth H2 from the app [172 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Request a rate for this route. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The first step to get the item, what happens next and how long it takes, from the facts, in 40 to 90 words, then the CTA sentence.
- Formats for this page type: Specifications, prices, sizes, doses, coverage and comparisons in tables. Sequences as numbered steps. Inclusions and options as bullets. Descriptions and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional:  When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 500 to 1200 words. Aim for about 850.
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
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```
