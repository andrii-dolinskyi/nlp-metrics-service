# Writer page briefs: `local` family (8 types)

Rendered by `tools/render_writer_briefs.py` from the real node code with the sample request described in [README.md](README.md), search intent `transactional`. Lines that come from the spec row are the ones to review.

## `location_page` (Location)

Spec: {"words_count_approx": 900, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "Visit or contact <location>", "cta_mode": "required", "faq_required": "Y", "schema_types": "Organization + WebPage + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Location (local family). The page of one physical branch, office, clinic or store. Readers expect the address, hours, contact, services at this location, parking or access and the team.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Visit or contact <location>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
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

## `service_area_city_page` (Service-area city page)

Spec: {"words_count_approx": 900, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "Book <service> in <city>", "cta_mode": "required", "faq_required": "Y", "schema_types": "Service + Organization + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Service-area city page (local family). A service delivered in one city without premises there. Readers expect confirmation the city is covered, how service works there, local specifics and how to book.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Book <service> in <city>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
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

## `service_plus_location_page` (Service-in-location page)

Spec: {"words_count_approx": 900, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "Book <service> in <city>", "cta_mode": "required", "faq_required": "Y", "schema_types": "Service + Organization + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Service-in-location page (local family). One service in one place. Readers expect the service explained for that location, local rules or conditions, prices or timelines that apply there and how to book.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Book <service> in <city>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
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

## `neighborhood_area_guide` (Area guide)

Spec: {"words_count_approx": 2000, "answer_paragraph": true, "answer_style": "key_facts", "tables_min": 0, "research": "none", "closing_heading": "What to do next", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Area guide (local family). An area guide with market data. Readers expect what living or buying there is like, prices and trends, schools, transport and amenities, and who can help.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the key facts style (A location-specific H1 and the facts of this place: address, hours, what is offered here). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What to do next. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 2000 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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

## `practice_location_legal` (Practice area by location)

Spec: {"words_count_approx": 1200, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "Talk to a <practice> lawyer in <city>", "cta_mode": "required", "faq_required": "Y", "schema_types": "LegalService + Person + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Practice area by location (local family). A legal practice area in one jurisdiction. Readers expect the law as it applies there, local courts and deadlines, what the firm does for such cases and how to talk to a lawyer.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Talk to a <practice> lawyer in <city>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
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

## `branch_page_staffing` (Branch staffing)

Spec: {"words_count_approx": 750, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "Contact the <city> branch", "cta_mode": "required", "faq_required": "Y", "schema_types": "Organization + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Branch staffing (local family). A recruiting branch or market page. Readers expect the roles and sectors the branch covers, the local team, how placement works and how to contact the branch.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Contact the <city> branch. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 750 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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

## `dealer_local_hub` (Dealer local hub)

Spec: {"words_count_approx": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "Visit <dealer> in <city>", "cta_mode": "required", "faq_required": "Y", "schema_types": "Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Dealer local hub (local family). The city inventory hub of a dealership. Readers expect the models and stock available locally, services, finance options, the location and how to visit.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Visit <dealer> in <city>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 550 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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

## `regional_country_landing` (Regional country landing)

Spec: {"words_count_approx": 900, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "How to get started in <country>", "cta_mode": "required", "faq_required": "Y", "schema_types": "WebPage + Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Regional country landing (local family). A landing page for one country or region. Readers expect the offer as it applies there: availability, pricing or currency, compliance, local support and how to start.
Search intent: transactional. The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A location-specific H1 and the facts of this place: address, hours, what is offered here. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started in <country>. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
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
