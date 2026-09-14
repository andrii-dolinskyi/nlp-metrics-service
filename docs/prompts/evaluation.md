# Writer page briefs: `evaluation` family (12 types)

Rendered with the standard sample request described in [README.md](README.md). Lines that come from the spec row are the ones to review.

## `listicle_best_of` (Best-of list)

Spec: {"words_min": 1500, "words_max": 3500, "default_words": 2500, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 3, "research": "deep", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per listed item, in ranked order, with the item name as the heading.", "schema_types": "Article + ItemList + BreadcrumbList"}

```text
<page_brief>
Page type: Best-of list (evaluation family). Best X ranked list
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to pick from this list. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: A verdict paragraph that says which option suits which reader and why, in 60 to 120 words, then the one action to take. No recap.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per listed item, in ranked order, with the item name as the heading. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 3500 words. Aim for about 2500.
- Include at least 3 external citations as markdown links to sources you found with the Live Research tool. Name the source and the year in the sentence.
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
- Page type constraints: Every option's facts and pricing carry an as-of date; disclose who publishes the page and any commercial relationship.

CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `head_to_head_vs` (Head-to-head comparison)

Spec: {"words_min": 1500, "words_max": 3000, "default_words": 1800, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 2, "citations_min": 2, "research": "search", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "optional: one H3 per criterion inside the comparison section when it runs over 250 words.", "schema_types": "Article + FAQPage + ItemList + BreadcrumbList"}

```text
<page_brief>
Page type: Head-to-head comparison (evaluation family). A vs B comparison
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [405 words]
  2. Second H2 from the app [405 words]
  3. Third H2 from the app [405 words]
  4. Fourth H2 from the app [405 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Which one to choose | Our verdict. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: A verdict paragraph that says which option suits which reader and why, in 60 to 120 words, then the one action to take. No recap.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 2 markdown tables where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: one H3 per criterion inside the comparison section when it runs over 250 words. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 3000 words. Aim for about 1800.
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
- Page type constraints: Both options' facts and pricing carry an as-of date; nominative trademark use only; state who publishes the page.

CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `alternatives_page` (Alternatives page)

Spec: {"words_min": 1500, "words_max": 3000, "default_words": 1600, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per alternative with its name as the heading.", "schema_types": "Article + ItemList + BreadcrumbList"}

```text
<page_brief>
Page type: Alternatives page (evaluation family). Competitor alternatives list with own product positioned
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [355 words]
  2. Second H2 from the app [355 words]
  3. Third H2 from the app [355 words]
  4. Fourth H2 from the app [355 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Which alternative fits you. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: A verdict paragraph that says which option suits which reader and why, in 60 to 120 words, then the one action to take. No recap.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per alternative with its name as the heading. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 3000 words. Aim for about 1600.
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
- Page type constraints: Competitor facts verifiable and dated; nominative use of trademarks only; no disparagement; disclose who publishes the page.

CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `competitor_comparison_own` (Us-vs-competitor page)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "required", "h3_policy": "required: one H3 per option, item or criterion inside the sections that go through them one by one.", "schema_types": "WebPage + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Us-vs-competitor page (evaluation family). Us vs competitor first-party page
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [330 words]
  2. Second H2 from the app [330 words]
  3. Third H2 from the app [330 words]
  4. Fourth H2 from the app [330 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to decide between us | When to choose <client>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: An honest verdict that says when the competitor is the better fit and when the client is, from the facts, in 60 to 120 words, then the CTA sentence.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per option, item or criterion inside the sections that go through them one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2000 words. Aim for about 1500.
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
- Page type constraints: Verifiable, dated competitor facts; nominative trademark use; no disparagement.

CTA:
One call to action, in the closing section only (section 5). Direct: two or three plain sentences at the end of the closing section that say what the client does on this subject (facts only) and ask for the one action named in the CTA rule, linked to the CTA URL with a two to four word anchor. One CTA on the page, in the closing section only. No urgency, no "imagine", no superlative. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `review_page` (Review)

Spec: {"words_min": 1500, "words_max": 3000, "default_words": 2250, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "optional: one H3 per aspect reviewed inside a section over 250 words.", "schema_types": "Review + Product + BreadcrumbList"}

```text
<page_brief>
Page type: Review (evaluation family). In-depth review of one third-party product
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Who should buy it | Our verdict. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: Who the product suits and who should skip it, with the deciding fact for each, in 60 to 120 words.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional: one H3 per aspect reviewed inside a section over 250 words. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 3000 words. Aim for about 2250.
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
- Page type constraints: Affiliate or commercial relationship disclosed; ratings only from a stated rubric.

CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `cost_page` (Cost page)

Spec: {"words_min": 1200, "words_max": 2500, "default_words": 1850, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per cost driver inside the section that goes through them.", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Cost page (evaluation family). How much does X cost
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [418 words]
  2. Second H2 from the app [418 words]
  3. Third H2 from the app [418 words]
  4. Fourth H2 from the app [418 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to budget for it | What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: What a realistic budget looks like for the reader's likely case and what changes it, in 60 to 120 words, then the CTA sentence when there is one.
- Formats for this page type: One price table with the item, the range and the year. Cost drivers as prose under H3s. No bullets except a short list of inclusions. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per cost driver inside the section that goes through them. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1200 to 2500 words. Aim for about 1850.
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


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `is_x_worth_it` (Is-it-worth-it page)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "optional.", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Is-it-worth-it page (evaluation family). Value judgement on a purchase or decision
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [330 words]
  2. Second H2 from the app [330 words]
  3. Third H2 from the app [330 words]
  4. Fourth H2 from the app [330 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: When it is worth it | Our verdict. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: A verdict paragraph that says which option suits which reader and why, in 60 to 120 words, then the one action to take. No recap.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are optional:  When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2000 words. Aim for about 1500.
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


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `diy_vs_pro` (DIY-vs-professional page)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per option, item or criterion inside the sections that go through them one by one.", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: DIY-vs-professional page (evaluation family). X vs doing it yourself
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [330 words]
  2. Second H2 from the app [330 words]
  3. Third H2 from the app [330 words]
  4. Fourth H2 from the app [330 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: When to call a professional. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The cases where the reader should do it themselves and the cases where they should hire, with the deciding factor for each, in 60 to 120 words, then the CTA sentence when there is one.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per option, item or criterion inside the sections that go through them one by one. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2000 words. Aim for about 1500.
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


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `category_comparison` (Category comparison)

Spec: {"words_min": 1200, "words_max": 2500, "default_words": 1850, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per category compared.", "schema_types": "Article + ItemList + BreadcrumbList"}

```text
<page_brief>
Page type: Category comparison (evaluation family). Types of X compared
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [418 words]
  2. Second H2 from the app [418 words]
  3. Third H2 from the app [418 words]
  4. Fourth H2 from the app [418 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Which category fits you. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: A verdict paragraph that says which option suits which reader and why, in 60 to 120 words, then the one action to take. No recap.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per category compared. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1200 to 2500 words. Aim for about 1850.
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


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `buying_guide` (Buying guide)

Spec: {"words_min": 1500, "words_max": 3000, "default_words": 2250, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per buying criterion.", "schema_types": "Article + ItemList + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Buying guide (evaluation family). How to choose X, then picks
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [450 words]
  2. Second H2 from the app [450 words]
  3. Third H2 from the app [450 words]
  4. Fourth H2 from the app [450 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Checklist before you buy. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The five to seven checks to make before paying, as one numbered list with a one sentence reason each. No recap.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per buying criterion. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1500 to 3000 words. Aim for about 2250.
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


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `top_in_location` (Best-in-location list)

Spec: {"words_min": 1000, "words_max": 2500, "default_words": 1750, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per listed provider with its name as the heading.", "schema_types": "ItemList + LocalBusiness + BreadcrumbList"}

```text
<page_brief>
Page type: Best-in-location list (evaluation family). Best X in city
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [392 words]
  2. Second H2 from the app [392 words]
  3. Third H2 from the app [392 words]
  4. Fourth H2 from the app [392 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to choose between them. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: A verdict paragraph that says which option suits which reader and why, in 60 to 120 words, then the one action to take. No recap.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per listed provider with its name as the heading. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2500 words. Aim for about 1750.
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


CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `migration_switch_page` (Migration switch)

Spec: {"words_min": 1000, "words_max": 2000, "default_words": 1500, "answer_paragraph": true, "answer_style": "verdict", "tables_min": 1, "citations_min": 2, "research": "deep", "closing_mode": "append", "cta_mode": "optional", "h3_policy": "required: one H3 per migration stage.", "schema_types": "Article + HowTo + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Migration switch (evaluation family). Switching from A to B
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the verdict style (A verdict paragraph that says which option suits whom). No heading above it, no preamble. It answers the question the H1 implies.
- Then these H2 sections, in this exact order, with these exact headings. Do not add, merge, rename or reorder them.
  1. First H2 from the app [330 words]
  2. Second H2 from the app [330 words]
  3. Third H2 from the app [330 words]
  4. Fourth H2 from the app [330 words]
  5. A closing H2 that you write yourself [about 100 words]. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to plan the switch. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: The order of the switch steps and the one risk to plan for, in 60 to 120 words, then the CTA sentence when there is one.
- Formats for this page type: One comparison table in the section that sets the options against each other. Pros and cons as two short bullet lists per option. Prices and specifications in a table. Verdicts and reasoning in prose. Decide per section from what the heading asks for. Never put a table where prose answers the heading, never pad a section with bullets, and never write a list of one or two items.
- Include at least 1 markdown table where a section suits one. Real pipe tables with a header row.
- H3 subheadings are required: one H3 per migration stage. When you use H3s in a section, use at least two, phrase each as the specific sub-question or item it covers (that is what answer engines quote), keep them in sentence case, and never put an H3 in a section under 150 words. Never use H4.
- Total length: 1000 to 2000 words. Aim for about 1500.
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
- Page type constraints: Early termination and switching terms from the facts stated plainly.

CTA:
One call to action, in the closing section only (section 5). Soft: one plain sentence at the end of the verdict naming how the client helps with the decision, only when a client fact supports it and only after the verdict is given. The action: CTA rule sent by the app.. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```
