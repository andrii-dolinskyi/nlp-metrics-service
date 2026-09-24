# Content Maker 6.0 writer prompts, all 128 page types

The writer's system prompt is assembled at run time from two parts:

1. **Static guidelines**, identical for every page type: persona, the plain style frame, tone guidelines, the pattern rules, link rules and keyword rules. Kept as a template string inside the `Prep Writer` Code node; the source is [`cm6_writer_guidelines.md`](cm6_writer_guidelines.md), embedded into `n8n/cm6/prep_writer.js` by `tools/build_n8n_code.py` and written into the node by the CM6 Code Loader.
2. **The page brief**, built by the `Prep Writer` node from the `page_type_specs` row, the search intent and the request, followed by the custom rules block (writing preferences), the action plan and the expected page items. The page type line, the search intent block, the opening rule, the closing section, the table minimum, the length and the CTA text are the lines that differ between types and intents; the structure rules (format per section decided from the heading and research, at least two H3s under the H2 that splits, supplied H2s word for word with the freedom to add H2s), the fact rule (facts blended where they support the point) and the hard rules are the same for every type.

The files below show the page brief for every type, rendered with one identical sample request (four outline headings, two questions, two facts, a CTA rule and URL) and the search intent typical for the family. The blocks that follow the brief in the real prompt (custom rules, action plan, expected page items) are shown once at the end of this page.

| Family | Types | Intent used | File |
|---|---|---|---|
| `hub` | 11 | informational | [hub.md](hub.md) |
| `guide` | 12 | informational | [guide.md](guide.md) |
| `reference` | 8 | informational | [reference.md](reference.md) |
| `evaluation` | 12 | commercial | [evaluation.md](evaluation.md) |
| `offer` | 21 | transactional | [offer.md](offer.md) |
| `proof` | 7 | transactional | [proof.md](proof.md) |
| `entity` | 11 | navigational | [entity.md](entity.md) |
| `tool` | 5 | informational | [tool.md](tool.md) |
| `asset` | 3 | informational | [asset.md](asset.md) |
| `local` | 8 | transactional | [local.md](local.md) |
| `catalogue` | 15 | transactional | [catalogue.md](catalogue.md) |
| `ops` | 15 | navigational | [ops.md](ops.md) |

## Search intent blocks

One of these follows the page type line, chosen by `searchIntent` in the request:

- **informational**: The reader wants to understand or learn how to do something and is not choosing a supplier yet. Give the answer or the definition in the first lines, then teach: how it works, what varies from case to case, the figures and thresholds that matter, the mistakes and what to check. Formats follow the content: steps for a sequence, a table for figures or options, prose for reasoning. The client appears as the expert explaining, never as the subject of the page, and nothing on the page sells. The closing tells the reader what to do next on their own.

- **commercial**: The reader is comparing options before choosing and wants help deciding. Name the criteria that matter, set the options against each other on those criteria (a table where two or more options are compared on the same attributes), give prices or ranges with the year where research finds them, say who each option suits, and give an honest verdict. Prefer specifics over adjectives. Where the client offers one of the options, it is presented on the same terms as the others, from the facts, never as the automatic winner. The closing states the recommendation and the one action that follows from it.

- **transactional**: The reader has decided what they want and is checking whether this client is the one to get it from. State the offer in the first lines: what it is, who and where it is for, what it includes and what it costs or how pricing works, from the facts. Every section ties a benefit to a specific: the process and how long it takes, what the reader must provide, what they get back, and the objections a buyer has at this point, answered plainly. Proof comes from the facts only. The closing says what the first step is and what happens after it, ending in the call to action.

- **navigational**: The reader searched for this client or this page by name and wants to confirm they are in the right place and get to the practical information fast. The first sentence names the client and what this page is. Then the facts the reader came for, in the order they need them: who, what, where, hours, how to reach or use it. Short sections, no persuasion, no background essay; every sentence carries a fact or a direction.

## Blocks after the page brief (same for every type)

```text
<custom_rules>
Custom rules provided for this specific page are as follows:

None.

Rules for handling custom rules:
- Custom rules override all writing guidelines, link rules, keyword rules and tone guidelines listed above when they conflict
- Custom rules never override the page brief: the H1, the supplied H2 headings, the search intent, the client facts and the CTA placement stand
- If two custom rules contradict each other, follow the one listed first
</custom_rules>

<action_plan>
Follow these steps in order before writing any part of the page:

**Step 1. Read the page brief carefully:** the page type and its definition, the search intent and what that reader wants first, the H1, every supplied H2 in order, the closing section, the questions the page must answer, the client facts and the CTA rule. Name to yourself the one reader who typed this search and what they want to leave the page with.
**Step 2. Determine the tone:** apply the tone guidelines for that reader.
**Step 3. Read the custom rules:** note any that override the writing guidelines, link rules or tone guidelines.
**Step 4. Research before you plan:** where the brief allows research, look at how the strongest pages on this subject treat each heading, which sections carry tables, steps or sub-questions, which figures and sources they rely on, and what they miss. Then plan the page: for each supplied H2 decide the point of each paragraph (its topic sentence), which listed question it answers, which client fact supports it, its format (prose, steps, table, bullets), and whether it is the section that gets the H3s; decide whether the reader needs an H2 the outline lacks; and give each section the length its subject needs within the page total.
**Step 5. Write the page:** the H1 verbatim, the opening paragraph as the brief describes, then every H2 section in the given order with the given heading (plus any section you added), then the closing section as the brief describes.
**Step 6.** Apply the plain style while writing and check each sentence against the pattern rules.
**Step 7.** Apply the link rules and keyword rules while writing. No internal links.
**Step 8. Use the Live Research tool while writing** when you need a specific citation URL for a concrete factual claim, data point or direct quote, as the research line in the page brief describes. Be very specific and precise in your query. At most two searches per claim.
**Step 9. Review before outputting:** read the page as the reader with this search intent would. Check it against the page brief, the custom rules, the plain style, the pattern rules, the link rules and the keyword rules. Check every supplied H2 is present word for word, that the facts read as part of the argument and not as a list, and that the CTA reads as the natural end. Cut every sentence that adds no fact, reason or step.
**Step 10. Provide the final output as plain Markdown**, not JSON. The very first line of your reply must be START_ARTICLE. Then output the entire page in Markdown, starting with the H1 and ending with the last section. The very last line of your reply must be END_ARTICLE.
</action_plan>

<expected_page_items>
START_ARTICLE
# Sample H1 sent by the app // Do not modify the H1 above. Use it exactly as provided!
[opening paragraph as the brief describes]

## First H2 from the app
[section content in the format the heading asks for; H3s where the subject splits]

## Second H2 from the app
[section content in the format the heading asks for; H3s where the subject splits]

## Third H2 from the app
[section content in the format the heading asks for; H3s where the subject splits]

## Fourth H2 from the app
[section content in the format the heading asks for; H3s where the subject splits]

## [closing heading that follows the pattern in the brief]
[closing section, about 100 words]

END_ARTICLE
</expected_page_items>
```
