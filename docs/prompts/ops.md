# Writer page briefs: `ops` family (15 types)

Rendered by `tools/render_writer_briefs.py` from the real node code with the sample request described in [README.md](README.md), search intent `navigational`. Lines that come from the spec row are the ones to review.

## `documentation_article` (Documentation article)

Spec: {"words_count_approx": 900, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "research": "none", "closing_heading": "If it still does not work", "cta_mode": "none", "faq_required": "N", "schema_types": "TechArticle + BreadcrumbList"}

```text
<page_brief>
Page type: Documentation article (ops family). A product documentation page. Readers expect the task stated, prerequisites, exact steps, expected results and what to do when it fails.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (The task in one sentence, then prerequisites and steps). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: If it still does not work. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `help_center_article` (Help center article)

Spec: {"words_count_approx": 500, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "research": "none", "closing_heading": "If it still does not work", "cta_mode": "none", "faq_required": "Y", "schema_types": "TechArticle + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Help center article (ops family). A support article for one question. Readers expect the answer or steps first, the conditions that change them and where to go if it still does not work.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (The task in one sentence, then prerequisites and steps). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: If it still does not work. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections.
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

## `changelog_release_notes` (Changelog release notes)

Spec: {"words_count_approx": 350, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "SoftwareApplication + Article + BreadcrumbList"}

```text
<page_brief>
Page type: Changelog release notes (ops family). Dated product changes. Readers expect each change with the date and version, what changed for them and any action they must take.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 350 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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

## `api_reference` (API reference)

Spec: {"words_count_approx": 600, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "TechArticle + BreadcrumbList"}

```text
<page_brief>
Page type: API reference (ops family). An endpoint or SDK reference. Readers expect the exact parameters, types, responses, errors and an example call.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
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

## `community_forum_thread` (Community forum thread)

Spec: {"words_count_approx": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "QAPage + BreadcrumbList"}

```text
<page_brief>
Page type: Community forum thread (ops family). A user discussion thread. Readers expect the question, the accepted answer and the useful replies.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `contact_page` (Contact)

Spec: {"words_count_approx": 250, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "ContactPage + Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Contact (ops family). The contact page. Readers expect every way to reach the client, hours, locations and what happens after they send a message.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 250 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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

## `thank_you_page` (Thank you)

Spec: {"words_count_approx": 200, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Thank you (ops family). The confirmation after a conversion. Readers expect confirmation of what they did, what happens next and when, and one useful next step.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 200 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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

## `legal_policy_page` (Legal policy)

Spec: {"words_count_approx": 1900, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Legal policy (ops family). A privacy, terms, cookies or accessibility page. Readers expect the rules stated plainly, what data or obligations are involved and whom to contact.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 1900 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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

## `claims_how_to_file_page` (Claims how to file)

Spec: {"words_count_approx": 900, "answer_paragraph": true, "answer_style": "definition", "tables_min": 0, "research": "none", "closing_heading": "After you file", "cta_mode": "none", "faq_required": "Y", "schema_types": "HowTo + FAQPage + BreadcrumbList"}

```text
<page_brief>
Page type: Claims how to file (ops family). The claims process. Readers expect when they can claim, what to gather, the steps in order, timelines and what happens after filing.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: a direct answer of 40 to 80 words in the definition style (The task in one sentence, then prerequisites and steps). No heading above it, no preamble. It answers the question the H1 implies.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: After you file. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `patient_forms_prep_page` (Patient forms prep)

Spec: {"words_count_approx": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "Before your visit", "cta_mode": "none", "faq_required": "N", "schema_types": "WebPage + HowTo + BreadcrumbList"}

```text
<page_brief>
Page type: Patient forms prep (ops family). Pre-visit instructions. Readers expect what to bring, forms to complete, how to prepare and what to expect at the visit.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: Before your visit. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections.
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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `sitemap_html` (HTML sitemap)

Spec: {"words_count_approx": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: HTML sitemap (ops family). The HTML sitemap. Readers expect every section of the site listed in a logical order.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `login_account_cart_checkout` (Login, account, cart, checkout)

Spec: {"words_count_approx": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Login, account, cart, checkout (ops family). Authentication and transactional pages. Readers expect a short, clear explanation of what to do and what happens next.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `search_results_internal` (Search results internal)

Spec: {"words_count_approx": 550, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: Search results internal (ops family). Site search results. Readers expect matching pages and a hint on refining the search.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

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
There is no call to action on this page. Nowhere on the page do you ask the reader to contact, book, call, schedule, sign up, request or get in touch.
</page_brief>
```

## `error_404_page` (404 page)

Spec: {"words_count_approx": 100, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "", "cta_mode": "none", "faq_required": "N", "schema_types": "WebPage + BreadcrumbList"}

```text
<page_brief>
Page type: 404 page (ops family). The not-found page. Readers expect to learn the page is missing and get a useful route back into the site.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app

- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
- H3 subheadings: at least one H2 on this page carries two or more H3s. Choose the H2 whose subject splits into distinct sub-questions or items a reader would scan for (the section your research shows answer engines quote), and put at least two H3s there; use H3s in other sections only where they split the same way. Phrase each H3 as the specific sub-question or item it covers, in sentence case. Never one lone H3, never an H3 in a section under 150 words, never an H4.
- Length: about 100 words for the whole page. Give each section the length its subject needs, not an equal share; a section that answers its heading in 80 words stops there, and a section the reader will act on gets the room. Stay within roughly 20 percent of the target.
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

## `homepage` (Homepage)

Spec: {"words_count_approx": 700, "answer_paragraph": false, "answer_style": "none", "tables_min": 0, "research": "none", "closing_heading": "How to get started", "cta_mode": "required", "faq_required": "N", "schema_types": "WebSite + Organization + BreadcrumbList"}

```text
<page_brief>
Page type: Homepage (ops family). The site home. Readers expect who the client is, what it offers, for whom, proof, and the fastest route to the main services and to contact.
Search intent: navigational. The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.
The page type and the search intent are not suggestions. A page of this type written for a reader with another intent fails the brief, however well it reads.
Client: Example Client
What the client does: What the client does, as sent by the app.
H1 (use verbatim): Sample H1 sent by the app
Core keyword: sample core keyword
Secondary keywords: secondary one, secondary two
Language: write in English.

Structure:
- Opening paragraph: The task in one sentence, then prerequisites and steps. Not a definitional answer paragraph. Then begin the first H2.
- These H2 sections, in this order, with these exact headings. Every one of them must appear on the page, word for word: never rename, merge, reorder or drop one.
  1. First H2 from the app
  2. Second H2 from the app
  3. Third H2 from the app
  4. Fourth H2 from the app
  5. A closing H2 that you write yourself, about 60 to 120 words. Heading: follow one of these patterns, filling any <...> from the H1 or the facts, in sentence case: How to get started. Never head it "Conclusion", "Summary", "Final thoughts" or "Key takeaways". Content: the one decision or action the reader should take now and why, adding a last useful point instead of summarising the sections, and the call to action as its last sentence or two.
- You may add H2 sections of your own, between or after the supplied ones, when the reader with this intent needs a subject the outline does not cover and it would not fit under a supplied heading without overloading it. Phrase an added H2 as the subject it covers, in sentence case, and keep it before the closing section. Adding a focused section is better than stuffing two subjects under one heading; adding a section the reader does not need is padding.
- Format of each section: decide it from what the heading asks for and from what your research shows the strongest pages on this subject use for that section. Prose for reasoning, explanation and anything with a "because". A numbered list for a sequence the reader performs in order. A table only when the section sets two or more items against the same attributes (options, figures, dates, thresholds) and a reader would scan it. Bullets only for four or more short parallel items. Never a table where prose answers the heading, never bullets to pad, never a list of one or two items.
- Tables are optional. Use one only where a section compares items on the same attributes.
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
