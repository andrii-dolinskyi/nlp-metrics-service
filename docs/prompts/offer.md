# Writer page briefs: `offer` family (21 types)

Rendered by `tools/render_writer_briefs.py` from the real node code with the sample request described in [README.md](README.md), search intent `transactional`. Lines that come from the spec row are the ones to review.

## `service_page` (Service page)

Spec: {"words_count_approx": 1500, "answer_paragraph": false, "answer_style": "none", "tables_min": 2, "research": "none", "closing_heading": "How to get started with <service> | What happens after you contact us", "cta_mode": "required", "faq_required": "Y", "schema_types": "Service + Organization + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Service page (offer family). The core commercial page for one service. Readers expect what the service is, who it is for, what is included, how it works, what it costs or how pricing works, and how to start.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started with <service> | What happens after you contact us. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 2 markdown tables. Put them in the sections whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 1500 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `solution_use_case_page` (Solution page)

Spec: {"words_count_approx": 1200, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to get started | See it on your own case", "cta_mode": "required", "faq_required": "Y", "schema_types": "Service + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Solution page (offer family). The product presented around one job to be done. Readers expect the problem named as they experience it, how the product solves it, what changes in their work and proof.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started | See it on your own case. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 1200 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `industry_vertical_page` (Industry page)

Spec: {"words_count_approx": 1300, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "search", "closing_heading": "How to get started in <industry>", "cta_mode": "required", "faq_required": "Y", "schema_types": "Service + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Industry page (offer family). The product or service presented for one industry. Readers expect the sector's specific problems, how the offer handles them, relevant compliance or terms and industry proof.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started in <industry>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 1300 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: Use the Live Research tool for the specific statistics, prices, study results and quotes the page needs, at most two searches per claim, and look at how the strongest pages on this subject structure each section before you choose its format.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `role_persona_page` (Role page)

Spec: {"words_count_approx": 1100, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to get started as a <role>", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Role page (offer family). The product or service presented for one job title or persona. Readers expect their own goals and obstacles named, what the offer does for that role and how it fits their day.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started as a <role>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 1100 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `segment_size_page` (Segment page)

Spec: {"words_count_approx": 1100, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to get started", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Segment page (offer family). The offer presented for one company size or segment. Readers expect what matters at their size, which plan or setup fits, limits and pricing signals.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 1100 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `feature_page` (Feature)

Spec: {"words_count_approx": 1000, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to try <feature>", "cta_mode": "required", "faq_required": "Y", "schema_types": "SoftwareApplication + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Feature (offer family). One product feature explained. Readers expect what the feature does, the problem it removes, how it works in practice, limits and how to try it.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to try <feature>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 1000 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `integration_page` (Integration)

Spec: {"words_count_approx": 900, "answer_paragraph": true, "answer_style": "value_prop", "tables_min": 1, "research": "none", "closing_heading": "How to connect <integration>", "cta_mode": "required", "faq_required": "Y", "schema_types": "SoftwareApplication + HowTo + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Integration (offer family). The product together with one partner integration. Readers expect what the connection does, what data moves, setup steps and requirements, and the benefit of using both.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the value prop style (A value proposition that names the outcome and the one action to take). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to connect <integration>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 900 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `x_for_y_programmatic` (X-for-Y page)

Spec: {"words_count_approx": 900, "answer_paragraph": true, "answer_style": "value_prop", "tables_min": 1, "research": "none", "closing_heading": "How to get started", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + Service + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: X-for-Y page (offer family). A templated offer page for one segment, place or use. Readers expect the offer adapted to their modifier with specific facts, not a generic page with the modifier swapped in.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the value prop style (A value proposition that names the outcome and the one action to take). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 900 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `pricing_page` (Pricing)

Spec: {"words_count_approx": 800, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to choose a plan", "cta_mode": "required", "faq_required": "Y", "schema_types": "FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Pricing (offer family). The plans, tiers and billing rules. Readers expect prices, what each plan includes, limits, how billing works and which plan fits which situation.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to choose a plan. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 800 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `product_landing_page` (Product landing)

Spec: {"words_count_approx": 1700, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to get started with <product>", "cta_mode": "required", "faq_required": "Y", "schema_types": "FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Product landing (offer family). A long-form page for one product built to convince. Readers expect the outcome, how it works, specifications, proof, objections answered and how to buy.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started with <product>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 1700 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `quote_request_page` (Quote request)

Spec: {"words_count_approx": 500, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "", "cta_mode": "required", "faq_required": "Y", "schema_types": "ContactPage + Service + BreadcrumbList"}

```text
<page_brief>
Page type: Quote request (offer family). A page that leads to a quote or estimate request. Readers expect what the quote covers, what information they must give, how fast they get it and what happens next.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app (this is the closing section, see below)
  The last section above is the closing section: the one decision or action the reader should take now, in 60 to 120 words, without recapping the page, ending with the call to action.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 500 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 4), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `brand_page` (Brand)

Spec: {"words_count_approx": 700, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to buy <brand> | How to work with <brand>", "cta_mode": "required", "faq_required": "Y", "schema_types": "Organization + CollectionPage + BreadcrumbList"}

```text
<page_brief>
Page type: Brand (offer family). A brand or manufacturer page inside a retailer or distributor site. Readers expect what the brand makes, what it is known for, the ranges carried and how to buy.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to buy <brand> | How to work with <brand>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 700 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `partnership_program_page` (Partnership program)

Spec: {"words_count_approx": 900, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to apply to the program", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Partnership program (offer family). A partner, affiliate or reseller programme page. Readers expect who can join, what partners get, commission or terms, obligations and how to apply.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to apply to the program. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 900 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `membership_plan_page` (Membership plan)

Spec: {"words_count_approx": 900, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to join", "cta_mode": "required", "faq_required": "Y", "schema_types": "BreadcrumbList"}

```text
<page_brief>
Page type: Membership plan (offer family). A gym, club or subscription membership page. Readers expect the plans, what each includes, prices, terms such as commitment and cancellation, and how to join.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to join. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 900 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `financing_page` (Financing)

Spec: {"words_count_approx": 800, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to apply for financing", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Financing (offer family). A payment plans and financing page. Readers expect the options, rates or terms, eligibility, an example of monthly cost and how to apply.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to apply for financing. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 800 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `ad_landing_page` (Ad landing)

Spec: {"words_count_approx": 650, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Ad landing (offer family). A campaign landing page with a single action. Readers expect the offer they clicked on confirmed at once, the key benefits, proof and one clear action.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app (this is the closing section, see below)
  The last section above is the closing section: the one decision or action the reader should take now, in 60 to 120 words, without recapping the page, ending with the call to action.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 650 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 4), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `squeeze_lead_magnet_page` (Squeeze lead magnet)

Spec: {"words_count_approx": 300, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Squeeze lead magnet (offer family). A minimal page that exchanges an asset for contact details. Readers expect what the asset is, what they gain from it and what they must give to get it.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app (this is the closing section, see below)
  The last section above is the closing section: the one decision or action the reader should take now, in 60 to 120 words, without recapping the page, ending with the call to action.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 300 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 4), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `pre_launch_waitlist_page` (Pre launch waitlist)

Spec: {"words_count_approx": 300, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Pre launch waitlist (offer family). A coming-soon page that collects sign-ups. Readers expect what is launching, for whom, when, and what joining the waitlist gives them.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app (this is the closing section, see below)
  The last section above is the closing section: the one decision or action the reader should take now, in 60 to 120 words, without recapping the page, ending with the call to action.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 300 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 4), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `donate_page` (Donate)

Spec: {"words_count_approx": 600, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How your donation is used", "cta_mode": "required", "faq_required": "Y", "schema_types": "Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Donate (offer family). A donation page for a nonprofit. Readers expect what the money does, examples of impact per amount, ways to give, tax notes and how to donate.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How your donation is used. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 600 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `program_page` (Program)

Spec: {"words_count_approx": 1100, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to apply | How to join the program", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + Service + Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Program (offer family). A nonprofit programme page. Readers expect who the programme serves, what it delivers, how it works, results so far and how to join, apply or support it.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to apply | How to join the program. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 1100 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```

## `specials_offers_page` (Specials offers)

Spec: {"words_count_approx": 400, "answer_paragraph": false, "answer_style": "none", "tables_min": 1, "research": "none", "closing_heading": "How to claim the offer", "cta_mode": "required", "faq_required": "Y", "schema_types": "BreadcrumbList"}

```text
<page_brief>
Page type: Specials offers (offer family). A page of current promotions. Readers expect each offer with its terms, dates and conditions, and how to claim it.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A value proposition that names the outcome and the one action to take. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to claim the offer. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- This page type carries at least 1 markdown table. Put it in the section whose content is a comparison or a set of figures. Real pipe tables with a header row.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 400 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
- Research: This page type is written from the client facts and general professional knowledge. Use the Live Research tool only when a sentence needs a specific external figure or quote, and drop the sentence if nothing reliable comes back.
- External citations are welcome where a figure, a study or a quote needs one; every citation is a markdown link to a source you found with the Live Research tool, with the source named in the sentence. Never cite from memory.
- Every H2 section opens with a sentence that answers that heading directly, then explains, then gives what varies, then what to check.
- Each section has its own job. Say a thing once, in the section where it belongs. Never recycle a fact to reach a length; when a section needs more substance, explain the subject itself: how the practice works, what varies from case to case, what a reader should check, what goes wrong and why.

Questions this page must answer:
Readers and answer engines ask these questions. Answer each one once, inside the section where it fits best, with a direct answering sentence first and the evidence after it. Never insert a question as text, never add a question and answer block, never restate the question. The reader must not notice the question was planted.
  1. First AI prompt sent by the app?
  2. Second AI prompt sent by the app?

Client facts:
These are the only claims you may make about the client. They are material, not a list to reproduce: work each fact into the page at the point where it supports what that section is saying, as evidence inside the argument, in your own sentence. Never list them, never put them all in one section, never copy a fact as a datasheet line, never use a fact twice. A fact that supports nothing on this page is left out. General knowledge about the field, the practice and what buyers should look for is welcome and must never be phrased as a claim about the client.
- fact key 1: fact value from the app
- fact key 2: ["list","of","values"]

Hard rules for this page:
- Never invent a number, a price, a client result, a certification, a credential or a capability. If it is not in the client facts or in a Live Research result you saw, do not write it.
- Never link to the client's own website (https://example.com) and never invent an internal link. Links between the client's pages are placed by a separate process after this page is written. The only client link allowed is the CTA link described below, when there is one.
- Do not write an author line, a testimonial block, a breadcrumb, a related links block or a FAQ. Those are produced separately.
- No exclamation marks.

CTA:
One call to action, at the end of the closing section only (section 5), as its last one or two sentences. It reads as the natural end of the page: a plain statement of what the client does on this subject, from the facts, and the one action to take. The action and its wording: CTA rule sent by the app. Link the action to https://example.com/contact/ with a plain anchor of two to four words. That is the only link to the client's site on the page. Never force it: no urgency, no "don't wait", no "imagine", no superlative, no exclamation, no sentence that could sit in an advert. Outside the closing section, never ask the reader to contact, book, call, schedule, sign up or get in touch, and never write "we" as the client.
</page_brief>
```
