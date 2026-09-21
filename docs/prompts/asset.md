# Writer page briefs: `asset` family (3 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `research_report` (Research report)

Spec: {"words_min": 2000, "words_max": 6000, "default_words": 2200, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 2, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per finding inside the findings section.", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Research report (asset family). Original research findings
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the key facts style (What is inside and who it is for). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Methodology and how to cite this report. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: Sample, method, period and the citation line, from the facts, in 60 to 120 words.
- Formats for this page type: Key findings as a numbered list. Data in tables. Timestamps or chapters as a table. Everything else in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 2 markdown tables where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per finding inside the findings section. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 2000 to 6000 words. Aim for about 2200.
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
One call to action, in the closing section only (section 5). Soft: one plain sentence naming the action that fits the asset (download, register, listen, watch), linked to the CTA URL when one is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `whitepaper_ebook_gate` (Whitepaper or ebook gate)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 2, "research": "search", "closing_mode": "none", "cta_mode": "required", "h3_policy": "none.", "schema_types": "Article + WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Whitepaper or ebook gate (asset family). Gated asset landing page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: What is inside and who it is for. Not a definitional answer paragraph. Then begin the first H2.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [122 words]
  2. Second H2 from the app [122 words]
  3. Third H2 from the app [122 words]
  4. Fourth H2 from the app [122 words] (this is the closing section, see below)
  The last section above is the closing section. Content: the one decision or action the reader should take now, in 60 to 120 words, without recapping the page
- Formats for this page type: Key findings as a numbered list. Data in tables. Timestamps or chapters as a table. Everything else in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- No H3 subheadings on this page type. 
- Total length: 300 to 800 words. Aim for about 550.
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
One call to action, in the closing section only (section 4). The last outline section asks for the download in two plain sentences with the CTA link, after saying what is inside and how long it is. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `template_example_page` (Template example)

Spec: {"words_min": 600, "words_max": 1500, "default_words": 1050, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 1, "citations_min": 2, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "optional: use H3s inside a section that walks through several findings or chapters.", "schema_types": "Article + HowTo + BreadcrumbList"}

```text
<page_brief>
Page type: Template example (asset family). Downloadable or copyable template
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the key facts style (What is inside and who it is for). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [218 words]
  2. Second H2 from the app [218 words]
  3. Third H2 from the app [218 words]
  4. Fourth H2 from the app [218 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to use this template. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The steps to adapt the template and the one mistake to avoid, in 50 to 100 words, then the download sentence when there is a CTA URL.
- Formats for this page type: Key findings as a numbered list. Data in tables. Timestamps or chapters as a table. Everything else in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s inside a section that walks through several findings or chapters. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 600 to 1500 words. Aim for about 1050.
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
One call to action, in the closing section only (section 5). Soft: one plain sentence naming the action that fits the asset (download, register, listen, watch), linked to the CTA URL when one is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```
