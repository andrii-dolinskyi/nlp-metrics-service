# Writer page briefs: `local` family (8 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `location_page` (Location)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: one H3 per service or per area inside a section that lists several.", "schema_types": "Organization + WebPage + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Location (local family). Physical branch, office, clinic or store
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [172 words]
  2. Second H2 from the app [172 words]
  3. Third H2 from the app [172 words]
  4. Fourth H2 from the app [172 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Visit or contact <location>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: How to reach the location or book the service, the hours and the first step, from the facts, in 50 to 100 words, then the CTA sentence.
- Formats for this page type: Address, hours and phone as a short bullet list or a two column table. Services offered as bullets. Local specifics in prose. No table for narrative. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are optional: one H3 per service or per area inside a section that lists several. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
- Page type constraints: NAP and hours only from the facts.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule (call, book, get directions), linked to the CTA URL with a two to four word anchor. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `service_area_city_page` (Service-area city page)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: one H3 per service or per area inside a section that lists several.", "schema_types": "Service + Organization + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Service-area city page (local family). Service delivered in a city without premises
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [172 words]
  2. Second H2 from the app [172 words]
  3. Third H2 from the app [172 words]
  4. Fourth H2 from the app [172 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Book <service> in <city>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: How to reach the location or book the service, the hours and the first step, from the facts, in 50 to 100 words, then the CTA sentence.
- Formats for this page type: Address, hours and phone as a short bullet list or a two column table. Services offered as bullets. Local specifics in prose. No table for narrative. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are optional: one H3 per service or per area inside a section that lists several. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
- Page type constraints: At least three genuinely local facts and local proof from the facts; otherwise do not write the page.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule (call, book, get directions), linked to the CTA URL with a two to four word anchor. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `service_plus_location_page` (Service-in-location page)

Spec: {"words_min": 600, "words_max": 1200, "default_words": 900, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: one H3 per service variant inside a section that lists several.", "schema_types": "Service + Organization + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Service-in-location page (local family). One service in one place
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [185 words]
  2. Second H2 from the app [185 words]
  3. Third H2 from the app [185 words]
  4. Fourth H2 from the app [185 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Book <service> in <city>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: How to reach the location or book the service, the hours and the first step, from the facts, in 50 to 100 words, then the CTA sentence.
- Formats for this page type: Address, hours and phone as a short bullet list or a two column table. Services offered as bullets. Local specifics in prose. No table for narrative. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are optional: one H3 per service variant inside a section that lists several. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 600 to 1200 words. Aim for about 900.
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
- Page type constraints: At least three genuinely local facts and local proof from the facts; otherwise do not write the page.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule (call, book, get directions), linked to the CTA URL with a two to four word anchor. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `neighborhood_area_guide` (Area guide)

Spec: {"words_min": 1000, "words_max": 2500, "default_words": 1750, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 0, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per neighbourhood, school, transport link or topic inside the sections that list them.", "schema_types": "WebPage + Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Area guide (local family). Area guide with market data
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the key facts style (A location-specific H1 and the facts of this place: address, hours, what is offered here). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [392 words]
  2. Second H2 from the app [392 words]
  3. Third H2 from the app [392 words]
  4. Fourth H2 from the app [392 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The one decision or action the reader should take now and why, in one paragraph of 60 to 120 words. It adds a last useful point instead of summarising the sections. Never open with "In conclusion", "In summary", "Overall" or "Ultimately".
- Formats for this page type: Facts (commute times, prices, schools) in tables with the year and the source. Areas under H3s in prose. Bullets only for short lists of amenities. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are required: one H3 per neighbourhood, school, transport link or topic inside the sections that list them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
- Page type constraints: Fair Housing: no language implying preference by protected class; market stats carry source and date.

CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the closing paragraph offering the client's related service as a way to get the task done, only when a client fact supports it. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `practice_location_legal` (Practice area by location)

Spec: {"words_min": 800, "words_max": 1500, "default_words": 1150, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: one H3 per service or per area inside a section that lists several.", "schema_types": "LegalService + Person + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Practice area by location (local family). Practice area in a jurisdiction
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [248 words]
  2. Second H2 from the app [248 words]
  3. Third H2 from the app [248 words]
  4. Fourth H2 from the app [248 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Talk to a <practice> lawyer in <city>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: How to reach the location or book the service, the hours and the first step, from the facts, in 50 to 100 words, then the CTA sentence.
- Formats for this page type: Address, hours and phone as a short bullet list or a two column table. Services offered as bullets. Local specifics in prose. No table for narrative. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are optional: one H3 per service or per area inside a section that lists several. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 1500 words. Aim for about 1150.
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
- Page type constraints: Legal advertising rules as for practice_area_page; at least three genuinely local facts (courts, procedures, deadlines) from the facts.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the consultation in the CTA rule, linked to the CTA URL. Any result carries the disclaimer the constraints require. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `branch_page_staffing` (Branch staffing)

Spec: {"words_min": 500, "words_max": 1000, "default_words": 750, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: one H3 per service or per area inside a section that lists several.", "schema_types": "Organization + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Branch staffing (local family). Recruiting branch or market page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [148 words]
  2. Second H2 from the app [148 words]
  3. Third H2 from the app [148 words]
  4. Fourth H2 from the app [148 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Contact the <city> branch. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: How to reach the location or book the service, the hours and the first step, from the facts, in 50 to 100 words, then the CTA sentence.
- Formats for this page type: Address, hours and phone as a short bullet list or a two column table. Services offered as bullets. Local specifics in prose. No table for narrative. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are optional: one H3 per service or per area inside a section that lists several. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 500 to 1000 words. Aim for about 750.
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
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule (call, book, get directions), linked to the CTA URL with a two to four word anchor. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `dealer_local_hub` (Dealer local hub)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: one H3 per service or per area inside a section that lists several.", "schema_types": "Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Dealer local hub (local family). City inventory hub for a dealership
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [98 words]
  2. Second H2 from the app [98 words]
  3. Third H2 from the app [98 words]
  4. Fourth H2 from the app [98 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Visit <dealer> in <city>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: How to reach the location or book the service, the hours and the first step, from the facts, in 50 to 100 words, then the CTA sentence.
- Formats for this page type: Address, hours and phone as a short bullet list or a two column table. Services offered as bullets. Local specifics in prose. No table for narrative. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are optional: one H3 per service or per area inside a section that lists several. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 300 to 800 words. Aim for about 550.
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
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule (call, book, get directions), linked to the CTA URL with a two to four word anchor. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `regional_country_landing` (Regional country landing)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: one H3 per service or per area inside a section that lists several.", "schema_types": "WebPage + Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Regional country landing (local family). Country or region landing
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [172 words]
  2. Second H2 from the app [172 words]
  3. Third H2 from the app [172 words]
  4. Fourth H2 from the app [172 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started in <country>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: How to reach the location or book the service, the hours and the first step, from the facts, in 50 to 100 words, then the CTA sentence.
- Formats for this page type: Address, hours and phone as a short bullet list or a two column table. Services offered as bullets. Local specifics in prose. No table for narrative. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Tables are optional. Use one only where it helps the reader.
- H3 subheadings are optional: one H3 per service or per area inside a section that lists several. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule (call, book, get directions), linked to the CTA URL with a two to four word anchor. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```
