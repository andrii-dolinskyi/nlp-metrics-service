# Writer page briefs: `offer` family (22 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `service_page` (Service page)

Spec: {"words_min": 800, "words_max": 2000, "default_words": 1200, "answer_paragraph": false, "answer_style": "none", "tables_min": 2, "citations_min": 1, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "Service + Organization + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Service page (offer family). Core commercial page for one service
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [260 words]
  2. Second H2 from the app [260 words]
  3. Third H2 from the app [260 words]
  4. Fourth H2 from the app [260 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started with <service> | What happens after you contact us. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 2 markdown tables where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 2000 words. Aim for about 1200.
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
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `solution_use_case_page` (Solution page)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1100, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 1, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "Service + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Solution page (offer family). Product framed around one job to be done
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [235 words]
  2. Second H2 from the app [235 words]
  3. Third H2 from the app [235 words]
  4. Fourth H2 from the app [235 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started | See it on your own case. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 1800 words. Aim for about 1100.
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
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `industry_vertical_page` (Industry page)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 1300, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 2, "research": "search", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "Service + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Industry page (offer family). Product or service framed for one industry
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [285 words]
  2. Second H2 from the app [285 words]
  3. Third H2 from the app [285 words]
  4. Fourth H2 from the app [285 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started in <industry>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 1800 words. Aim for about 1300.
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
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `role_persona_page` (Role page)

Spec: {"words_min": 700, "words_max": 1500, "default_words": 1100, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Role page (offer family). Framed for a job title or persona
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [235 words]
  2. Second H2 from the app [235 words]
  3. Third H2 from the app [235 words]
  4. Fourth H2 from the app [235 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started as a <role>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `segment_size_page` (Segment page)

Spec: {"words_min": 700, "words_max": 1500, "default_words": 1100, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Segment page (offer family). Framed for company size or segment
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [235 words]
  2. Second H2 from the app [235 words]
  3. Third H2 from the app [235 words]
  4. Fourth H2 from the app [235 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `feature_page` (Feature)

Spec: {"words_min": 600, "words_max": 1500, "default_words": 1050, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "SoftwareApplication + Product + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Feature (offer family). One product feature explained
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [222 words]
  2. Second H2 from the app [222 words]
  3. Third H2 from the app [222 words]
  4. Fourth H2 from the app [222 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to try <feature>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: How to turn the feature on or try it, and what plan it needs, from the facts, in 40 to 80 words, then the CTA sentence.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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


CTA:
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `integration_page` (Integration)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": true, "answer_style": "value_prop", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: one H3 per setup stage.", "schema_types": "SoftwareApplication + HowTo + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Integration (offer family). Product plus partner integration page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the value prop style (A value proposition that names the outcome and the one action to take). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [168 words]
  2. Second H2 from the app [168 words]
  3. Third H2 from the app [168 words]
  4. Fourth H2 from the app [168 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to connect <integration>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The steps to connect and what the reader needs before starting, from the facts, in 40 to 90 words, then the CTA sentence.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: one H3 per setup stage. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `x_for_y_programmatic` (X-for-Y page)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": true, "answer_style": "value_prop", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "WebPage + Service + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: X-for-Y page (offer family). Templated product for segment, place or use
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the value prop style (A value proposition that names the outcome and the one action to take). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [168 words]
  2. Second H2 from the app [168 words]
  3. Third H2 from the app [168 words]
  4. Fourth H2 from the app [168 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
- Page type constraints: At least three page-specific facts must be present; otherwise the page is a doorway page and must not be written.

CTA:
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `pricing_page` (Pricing)

Spec: {"words_min": 400, "words_max": 1200, "default_words": 800, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "required: one H3 per plan or tier.", "schema_types": "Product + Offer + PriceSpecification + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Pricing (offer family). Plans, tiers, billing FAQ
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [160 words]
  2. Second H2 from the app [160 words]
  3. Third H2 from the app [160 words]
  4. Fourth H2 from the app [160 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to choose a plan. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: Which plan suits which kind of buyer, from the facts, in 60 to 100 words, then the CTA sentence.
- Formats for this page type: One plan comparison table with price, limits and inclusions. One H3 per plan with two or three prose sentences on who it is for. Inclusions as bullets only inside the table or the plan block. No prose that repeats the table. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per plan or tier. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 400 to 1200 words. Aim for about 800.
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
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `product_landing_page` (Product landing)

Spec: {"words_min": 800, "words_max": 2500, "default_words": 1650, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "Product + Offer + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Product landing (offer family). Long-form single-product persuasion page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [372 words]
  2. Second H2 from the app [372 words]
  3. Third H2 from the app [372 words]
  4. Fourth H2 from the app [372 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started with <product>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 2500 words. Aim for about 1650.
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
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `quote_request_page` (Quote request)

Spec: {"words_min": 300, "words_max": 700, "default_words": 500, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "none", "cta_mode": "required", "h3_policy": "none.", "schema_types": "ContactPage + Service + BreadcrumbList"}

```text
<page_brief>
Page type: Quote request (offer family). Quote or estimate page with form
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [110 words]
  2. Second H2 from the app [110 words]
  3. Third H2 from the app [110 words]
  4. Fourth H2 from the app [110 words] (this is the closing section, see below)
  The last section above is the closing section. Content: the one decision or action the reader should take now, in 60 to 120 words, without recapping the page
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- No H3 subheadings on this page type. 
- Total length: 300 to 700 words. Aim for about 500.
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
One call to action, in the closing section only (section 4). The page is the CTA: the last outline section explains what happens after the request is sent and asks the reader to submit it. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `brand_page` (Brand)

Spec: {"words_min": 400, "words_max": 1000, "default_words": 700, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "Brand + CollectionPage + BreadcrumbList"}

```text
<page_brief>
Page type: Brand (offer family). Brand or manufacturer page within a retailer
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [135 words]
  2. Second H2 from the app [135 words]
  3. Third H2 from the app [135 words]
  4. Fourth H2 from the app [135 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to buy <brand> | How to work with <brand>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 400 to 1000 words. Aim for about 700.
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
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `partnership_program_page` (Partnership program)

Spec: {"words_min": 600, "words_max": 1200, "default_words": 900, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "WebPage + Offer + BreadcrumbList"}

```text
<page_brief>
Page type: Partnership program (offer family). Partner, affiliate or reseller program
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [185 words]
  2. Second H2 from the app [185 words]
  3. Third H2 from the app [185 words]
  4. Fourth H2 from the app [185 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to apply to the program. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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


CTA:
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `course_program_page` (Course program)

Spec: {"words_min": 800, "words_max": 2000, "default_words": 1400, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "required: one H3 per module or week inside the curriculum section.", "schema_types": "Course + CourseInstance + Offer + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Course program (offer family). Course, degree or bootcamp
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [310 words]
  2. Second H2 from the app [310 words]
  3. Third H2 from the app [310 words]
  4. Fourth H2 from the app [310 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to enrol. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Curriculum as one H3 per module with two or three prose sentences. Dates, prices and formats in a table. Outcomes as bullets. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per module or week inside the curriculum section. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 2000 words. Aim for about 1400.
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
- Page type constraints: Accreditation, duration, price and outcomes only from the facts; placement or salary claims need a stated methodology.

CTA:
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `membership_plan_page` (Membership plan)

Spec: {"words_min": 500, "words_max": 1200, "default_words": 850, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "required: one H3 per plan or tier.", "schema_types": "Offer + Product + BreadcrumbList"}

```text
<page_brief>
Page type: Membership plan (offer family). Gym, club or subscription plan
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [172 words]
  2. Second H2 from the app [172 words]
  3. Third H2 from the app [172 words]
  4. Fourth H2 from the app [172 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to join. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per plan or tier. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `financing_page` (Financing)

Spec: {"words_min": 500, "words_max": 1000, "default_words": 750, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "WebPage + LoanOrCredit + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Financing (offer family). Payment plans and financing
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [148 words]
  2. Second H2 from the app [148 words]
  3. Third H2 from the app [148 words]
  4. Fourth H2 from the app [148 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to apply for financing. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
- Page type constraints: Lender terms and APR ranges only from the facts with required disclosures; no guaranteed approval language.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences asking for the one action in the CTA rule, linked to the CTA URL. Every rate or term stated carries the disclosure the constraints require. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `ad_landing_page` (Ad landing)

Spec: {"words_min": 300, "words_max": 1000, "default_words": 650, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "none", "cta_mode": "required", "h3_policy": "none.", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Ad landing (offer family). Campaign page, usually noindex, single CTA
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [148 words]
  2. Second H2 from the app [148 words]
  3. Third H2 from the app [148 words]
  4. Fourth H2 from the app [148 words] (this is the closing section, see below)
  The last section above is the closing section. Content: the one decision or action the reader should take now, in 60 to 120 words, without recapping the page
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- No H3 subheadings on this page type. 
- Total length: 300 to 1000 words. Aim for about 650.
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
One call to action, in the closing section only (section 4). The last outline section is the conversion block: one action, one link, two or three plain sentences. The same message as the ad. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `squeeze_lead_magnet_page` (Squeeze lead magnet)

Spec: {"words_min": 150, "words_max": 400, "default_words": 300, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "none", "cta_mode": "required", "h3_policy": "none.", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Squeeze lead magnet (offer family). Minimal asset-for-contact page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words] (this is the closing section, see below)
  The last section above is the closing section. Content: the one decision or action the reader should take now, in 60 to 120 words, without recapping the page
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- No H3 subheadings on this page type. 
- Total length: 150 to 400 words. Aim for about 300.
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
One call to action, in the closing section only (section 4). The last outline section asks for the download or sign up in two plain sentences with the CTA link. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `pre_launch_waitlist_page` (Pre launch waitlist)

Spec: {"words_min": 150, "words_max": 400, "default_words": 300, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "none", "cta_mode": "required", "h3_policy": "none.", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Pre launch waitlist (offer family). Coming soon capture page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words] (this is the closing section, see below)
  The last section above is the closing section. Content: the one decision or action the reader should take now, in 60 to 120 words, without recapping the page
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- No H3 subheadings on this page type. 
- Total length: 150 to 400 words. Aim for about 300.
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
One call to action, in the closing section only (section 4). The last outline section asks the reader to join the waitlist in two plain sentences with the CTA link. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `donate_page` (Donate)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "DonateAction + NGO + BreadcrumbList"}

```text
<page_brief>
Page type: Donate (offer family). Donation conversion page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [98 words]
  2. Second H2 from the app [98 words]
  3. Third H2 from the app [98 words]
  4. Fourth H2 from the app [98 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How your donation is used. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: Where the money goes, in figures from the facts, in 50 to 90 words, then the donate sentence.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
- Page type constraints: Tax-deductibility wording matches the status in the facts.

CTA:
One call to action, in the closing section only (section 5). Direct: one plain sentence asking for the donation, linked to the CTA URL. No guilt appeal. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `program_page` (Program)

Spec: {"words_min": 600, "words_max": 1500, "default_words": 1050, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one.", "schema_types": "WebPage + Service + NGO + BreadcrumbList"}

```text
<page_brief>
Page type: Program (offer family). Nonprofit program page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [222 words]
  2. Second H2 from the app [222 words]
  3. Third H2 from the app [222 words]
  4. Fourth H2 from the app [222 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to apply | How to join the program. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What the first step is, what happens next and how long it takes, taken from the client facts, in 60 to 120 words, then the CTA sentence. No recap.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words that walks through steps, plans or deliverables one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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


CTA:
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `specials_offers_page` (Specials offers)

Spec: {"words_min": 200, "words_max": 600, "default_words": 400, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "none.", "schema_types": "Offer + SpecialAnnouncement + BreadcrumbList"}

```text
<page_brief>
Page type: Specials offers (offer family). Current promotions
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to claim the offer. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The steps to claim, the end date and the conditions, from the facts, in 40 to 80 words, then the CTA sentence.
- Formats for this page type: Prose for the value proposition and the reasoning. A table for deliverables, process timelines, plan comparisons and prices. Bullets for lists of deliverables or inclusions with four or more items. No bullets in the opening or the closing. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
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
- Page type constraints: Every offer carries its expiry and conditions from the facts.

CTA:
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```
