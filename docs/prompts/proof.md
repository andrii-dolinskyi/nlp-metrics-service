# Writer page briefs: `proof` family (7 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `case_study` (Case study)

Spec: {"words_min": 800, "words_max": 1800, "default_words": 900, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words.", "schema_types": "Article + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [185 words]
  2. Second H2 from the app [185 words]
  3. Third H2 from the app [185 words]
  4. Fourth H2 from the app [185 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What this means for a company like yours. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: One paragraph that relates the result to the reader's situation and says what a similar engagement starts with, in 60 to 100 words, then the CTA sentence.
- Formats for this page type: Results in a table with the metric, the before value and the after value. The story in prose. Quotes as plain paragraphs with the speaker named. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 800 to 1800 words. Aim for about 900.
- Include at least 2 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
- Research: Research this page thoroughly with the Live Research tool: every statistic, price, study result and quote needs a real source you found.
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
- Page type constraints: Client name, metrics and quotes only from the facts and only with permission status confirmed.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences at the end of the closing section asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor. No promise that the same result will repeat. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `case_results_page` (Case results)

Spec: {"words_min": 400, "words_max": 1200, "default_words": 800, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words.", "schema_types": "WebPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [160 words]
  2. Second H2 from the app [160 words]
  3. Third H2 from the app [160 words]
  4. Fourth H2 from the app [160 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What to expect from your case. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: How a matter like the reader's is handled from first contact, from the facts, in 60 to 100 words, then the CTA sentence. Every result carries the past results disclaimer the constraints require.
- Formats for this page type: Results in a table (matter, outcome, year). Prose for how they were achieved. No bullets. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
- Page type constraints: Every result dated and from the facts; the prior-results disclaimer appears once near the top.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences at the end of the closing section asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor. No promise that the same result will repeat. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `testimonials_reviews_page` (Testimonials reviews)

Spec: {"words_min": 400, "words_max": 1200, "default_words": 800, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "optional: use H3s only inside a section over 250 words.", "schema_types": "Organization + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [160 words]
  2. Second H2 from the app [160 words]
  3. Third H2 from the app [160 words]
  4. Fourth H2 from the app [160 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to work with us. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: One paragraph that relates the result to the reader's situation and says what a similar engagement starts with, in 60 to 100 words, then the CTA sentence.
- Formats for this page type: Each testimonial as a plain paragraph with the person, the role and the company named. No table. No invented quotes: use only the quotes in the facts. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
- Page type constraints: Only verified review text from the facts; Review schema only for real reviews.

CTA:
One call to action, in the closing section only (section 5). Direct: one or two plain sentences at the end of the closing section asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor. No promise that the same result will repeat. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `portfolio_project_page` (Portfolio project)

Spec: {"words_min": 400, "words_max": 1000, "default_words": 700, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "required", "h3_policy": "optional: use H3s only inside a section over 250 words.", "schema_types": "Article + WebPage + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [135 words]
  2. Second H2 from the app [135 words]
  3. Third H2 from the app [135 words]
  4. Fourth H2 from the app [135 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Start a similar project. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: One paragraph that relates the result to the reader's situation and says what a similar engagement starts with, in 60 to 100 words, then the CTA sentence.
- Formats for this page type: Results in a table with the metric, the before value and the after value. The story in prose. Quotes as plain paragraphs with the speaker named. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: use H3s only inside a section over 250 words. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
One call to action, in the closing section only (section 5). Direct: one or two plain sentences at the end of the closing section asking for the one action in the CTA rule, linked to the CTA URL with a two to four word anchor. No promise that the same result will repeat. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `impact_report_page` (Impact report)

Spec: {"words_min": 1000, "words_max": 2500, "default_words": 1750, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per programme or per outcome area.", "schema_types": "Report + Article + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [398 words]
  2. Second H2 from the app [398 words]
  3. Third H2 from the app [398 words]
  4. Fourth H2 from the app [398 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to support this work. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: One paragraph that relates the result to the reader's situation and says what a similar engagement starts with, in 60 to 100 words, then the CTA sentence.
- Formats for this page type: Outcomes in a table with the metric, the value and the year. Programmes under H3s in prose. Key figures as a numbered list at the top. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per programme or per outcome area. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence naming how to donate, partner or volunteer, linked to the CTA URL. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `awards_certifications_page` (Awards certifications)

Spec: {"words_min": 300, "words_max": 800, "default_words": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "none", "cta_mode": "none", "h3_policy": "optional: one H3 per certification body when there are several.", "schema_types": "Organization + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [122 words]
  2. Second H2 from the app [122 words]
  3. Third H2 from the app [122 words]
  4. Fourth H2 from the app [122 words]

- Formats for this page type: Awards in a table (award, body, year). One or two prose sentences per certification on what it covers. No bullets. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: one H3 per certification body when there are several. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `customer_logos_wall` (Customer logos wall) — not written by the flow (ai_writable = N), shown for completeness

Spec: {"words_min": 100, "words_max": 400, "default_words": 250, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "citations_min": 0, "research": "none", "closing_mode": "none", "cta_mode": "none", "h3_policy": "none.", "schema_types": "Organization + BreadcrumbList"}

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
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [90 words]
  2. Second H2 from the app [90 words]
  3. Third H2 from the app [90 words]
  4. Fourth H2 from the app [90 words]

- Formats for this page type: Results in a table with the metric, the before value and the after value. The story in prose. Quotes as plain paragraphs with the speaker named. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
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
