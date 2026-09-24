# Writer page briefs: `reference` family (8 types)

Rendered by `tools/render_writer_briefs.py` from the real node code with the sample request described in [README.md](README.md), search intent `informational`. Lines that come from the spec row are the ones to review.

## `glossary_term` (Glossary term)

Spec: {"words_count_approx": 500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "DefinedTerm + DefinedTermSet + BreadcrumbList"}

```text
<page_brief>
Page type: Glossary term (reference family). The definition of a single term. Readers expect a precise definition in the first sentence, then how the term is used, an example and how it differs from related terms.
Search intent: informational. The reader wants to understand or learn how to do something and is not choosing a supplier yet. Give the answer or the definition in the first lines, then teach: how it works, what varies from case to case, the figures and thresholds that matter, the mistakes and what to check. Formats follow the content: steps for a sequence, a table for figures or options, prose for reasoning. The client appears as the expert explaining, never as the subject of the page, and nothing on the page sells. The closing tells the reader what to do next on their own.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `faq_page` (FAQ page)

Spec: {"words_count_approx": 1400, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "search", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: FAQ page (reference family). A standalone page of questions and answers about one topic or service. Readers expect the real questions people ask, each answered directly in a few sentences, grouped so they can scan.
Search intent: informational. The reader wants to understand or learn how to do something and is not choosing a supplier yet. Give the answer or the definition in the first lines, then teach: how it works, what varies from case to case, the figures and thresholds that matter, the mistakes and what to check. Formats follow the content: steps for a sequence, a table for figures or options, prose for reasoning. The client appears as the expert explaining, never as the subject of the page, and nothing on the page sells. The closing tells the reader what to do next on their own.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A 40 to 60 word direct answer under the H1. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 1400 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `statistics_page` (Statistics page)

Spec: {"words_count_approx": 2500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "research": "search", "closing_heading": "How to use these figures | Methodology and sources", "cta_mode": "none", "faq_required": "N", "schema_types": "Article + BreadcrumbList"}

```text
<page_brief>
Page type: Statistics page (reference family). A curated roundup of statistics on one topic with sources. Readers expect current figures, each with its source and year, grouped by theme, and a note on how to read them.
Search intent: informational. The reader wants to understand or learn how to do something and is not choosing a supplier yet. Give the answer or the definition in the first lines, then teach: how it works, what varies from case to case, the figures and thresholds that matter, the mistakes and what to check. Formats follow the content: steps for a sequence, a table for figures or options, prose for reasoning. The client appears as the expert explaining, never as the subject of the page, and nothing on the page sells. The closing tells the reader what to do next on their own.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to use these figures | Methodology and sources. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 2500 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `spec_sheet` (Spec sheet)

Spec: {"words_count_approx": 700, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "search", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "TechArticle + BreadcrumbList"}

```text
<page_brief>
Page type: Spec sheet (reference family). A technical specification page for one product or material. Readers expect exact figures, dimensions, tolerances, standards and compatibility in a form they can compare.
Search intent: informational. The reader wants to understand or learn how to do something and is not choosing a supplier yet. Give the answer or the definition in the first lines, then teach: how it works, what varies from case to case, the figures and thresholds that matter, the mistakes and what to check. Formats follow the content: steps for a sequence, a table for figures or options, prose for reasoning. The client appears as the expert explaining, never as the subject of the page, and nothing on the page sells. The closing tells the reader what to do next on their own.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: A 40 to 60 word direct answer under the H1. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 700 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `question_page` (Question)

Spec: {"words_count_approx": 900, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "research": "search", "closing_heading": "", "cta_mode": "none", "faq_required": "Y", "schema_types": "Article + QAPage + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Question (reference family). A page that answers one specific question. Readers expect the answer in the first lines, then the conditions under which it changes and what to do with it.
Search intent: informational. The reader wants to understand or learn how to do something and is not choosing a supplier yet. Give the answer or the definition in the first lines, then teach: how it works, what varies from case to case, the figures and thresholds that matter, the mistakes and what to check. Formats follow the content: steps for a sequence, a table for figures or options, prose for reasoning. The client appears as the expert explaining, never as the subject of the page, and nothing on the page sells. The closing tells the reader what to do next on their own.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 900 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `entity_lookup` (Entity lookup)

Spec: {"words_count_approx": 600, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "research": "search", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "Article + BreadcrumbList"}

```text
<page_brief>
Page type: Entity lookup (reference family). A programmatic fact page about one entity such as a company, place or product. Readers expect the key facts in a consistent order, with sources and dates.
Search intent: informational. The reader wants to understand or learn how to do something and is not choosing a supplier yet. Give the answer or the definition in the first lines, then teach: how it works, what varies from case to case, the figures and thresholds that matter, the mistakes and what to check. Formats follow the content: steps for a sequence, a table for figures or options, prose for reasoning. The client appears as the expert explaining, never as the subject of the page, and nothing on the page sells. The closing tells the reader what to do next on their own.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 600 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `country_region_guide` (Country region guide)

Spec: {"words_count_approx": 2000, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "research": "search", "closing_heading": "What to check before you decide", "cta_mode": "none", "faq_required": "Y", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Country region guide (reference family). A regulatory or practical reference for one jurisdiction. Readers expect the rules that apply there, thresholds and deadlines, how it differs from elsewhere and what to check before acting.
Search intent: informational. The reader wants to understand or learn how to do something and is not choosing a supplier yet. Give the answer or the definition in the first lines, then teach: how it works, what varies from case to case, the figures and thresholds that matter, the mistakes and what to check. Formats follow the content: steps for a sequence, a table for figures or options, prose for reasoning. The client appears as the expert explaining, never as the subject of the page, and nothing on the page sells. The closing tells the reader what to do next on their own.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: What to check before you decide. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 2000 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `salary_guide` (Salary guide)

Spec: {"words_count_approx": 2000, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "research": "search", "closing_heading": "How to use this data in a negotiation", "cta_mode": "none", "faq_required": "Y", "schema_types": "Article + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Salary guide (reference family). A compensation reference for one role or region. Readers expect pay ranges by experience and location with sources and year, what moves pay up or down, and how to use the numbers.
Search intent: informational. The reader wants to understand or learn how to do something and is not choosing a supplier yet. Give the answer or the definition in the first lines, then teach: how it works, what varies from case to case, the figures and thresholds that matter, the mistakes and what to check. Formats follow the content: steps for a sequence, a table for figures or options, prose for reasoning. The client appears as the expert explaining, never as the subject of the page, and nothing on the page sells. The closing tells the reader what to do next on their own.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (A 40 to 60 word direct answer under the H1). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to use this data in a negotiation. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 2000 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```
