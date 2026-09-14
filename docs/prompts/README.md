# Content Maker 6.0 writer prompts, all 145 page types

The writer's system prompt is assembled at run time from two parts:

1. **Static guidelines**, identical for every page type: persona, the plain style frame (who the reader is, the eight sentence decisions, words, the paragraph, the given-new chain, the reading test, a worked example), tone guidelines, the pattern rules with wrong and right examples (the Content Maker 5.0 rules plus two new ones: the reveal and setup, the pairing tic), link rules (external citations only, no internal links) and keyword rules. Stored in the `cm6_prompts` data table (row `writer_guidelines`) and mirrored in [`cm6_writer_guidelines.md`](cm6_writer_guidelines.md). Edit the table row to change the writer's voice without touching the workflow.
2. **The page brief**, built by the `Prep Writer` node from the `page_type_specs` row and the request, followed by the custom rules block (writing preferences), the action plan and the expected page items. This is the only part that differs between page types.

The files below show the page brief for every type, rendered with one identical sample request (four outline headings, two questions, two facts, a CTA rule and URL) so that only the type-driven lines differ: page type line, opening paragraph rule, the closing section (appended H2 with its heading patterns and content, or none), format rules, table minimum, H3 policy, length band, citation minimum, the research line, page type constraints and the CTA text (required, optional or none). Internal links no longer appear anywhere in the prompt. The blocks that follow the brief in the real prompt (custom rules, action plan, expected page items) are the same for every type and are shown once at the end of this page.

| Family | Types | File |
|---|---|---|
| `hub` | 11 | [hub.md](hub.md) |
| `guide` | 12 | [guide.md](guide.md) |
| `reference` | 8 | [reference.md](reference.md) |
| `evaluation` | 12 | [evaluation.md](evaluation.md) |
| `offer` | 22 | [offer.md](offer.md) |
| `proof` | 7 | [proof.md](proof.md) |
| `entity` | 11 | [entity.md](entity.md) |
| `tool` | 5 | [tool.md](tool.md) |
| `asset` | 8 | [asset.md](asset.md) |
| `local` | 8 | [local.md](local.md) |
| `catalogue` | 26 | [catalogue.md](catalogue.md) |
| `ops` | 15 | [ops.md](ops.md) |

## Blocks after the page brief (same for every type)

```text
<custom_rules>
Custom rules provided for this specific page are as follows:

{writingPreferences or None.}

Rules for handling custom rules:
- Custom rules override all writing guidelines, link rules, keyword rules and tone guidelines listed above when they conflict
- Custom rules never override the page brief: the H1, the H2 outline, the client facts and the CTA placement stand
- If two custom rules contradict each other, follow the one listed first
</custom_rules>

<action_plan>
Follow these steps in order before writing any part of the page:

**Step 1. Read the page brief carefully:** the page type and its family, the H1, every H2 in order, the closing section, the questions the page must answer, the client facts and the CTA rule. Name to yourself the one reader who typed this search.
**Step 2. Determine the tone:** apply the tone guidelines for that reader.
**Step 3. Read the custom rules:** note any that override the writing guidelines, link rules or tone guidelines.
**Step 4. Plan the page:** for each section decide the point of each paragraph (its topic sentence), which listed question it answers, which client fact belongs in it, whether the heading asks for a table, steps, bullets or prose, and whether the section is long enough to need H3s.
**Step 5. Write the page:** the H1 verbatim, the opening paragraph as the brief describes, then every H2 section in the given order with the given heading, within the word budgets, then the closing section as the brief describes.
**Step 6. Apply the plain style while writing:** topic sentence first, given-new chain between sentences, subject as doer, verb as action, breathing length. Then check each sentence against the pattern rules.
**Step 7. Apply the link rules and keyword rules while writing.** No internal links.
**Step 8. Use the Live Research tool while writing** when you need a specific citation URL for a concrete factual claim, data point or direct quote, as the research line in the page brief describes. Be very specific and precise in your query. At most two searches per claim.
**Step 9. Review before outputting:** read the page as the reader would. Check it against the page brief, the custom rules, the plain style, the pattern rules, the link rules and the keyword rules. Cut every sentence that adds no fact, reason or step.
**Step 10. Provide the final output as plain Markdown**, not JSON. The very first line of your reply must be START_ARTICLE. Then output the entire page in Markdown, starting with the H1 and ending with the last section. The very last line of your reply must be END_ARTICLE.
</action_plan>

<expected_page_items>
START_ARTICLE
# {H1} // Do not modify the H1 above. Use it exactly as provided!
[opening paragraph as the brief describes]

## {first H2}
[section content, about N words]

## {next H2} ...

## [closing heading that follows the pattern in the brief]
[closing section, about 100 words, ending with the CTA when the page has one]

END_ARTICLE
</expected_page_items>
```

User message: `Write the page now. Follow the page brief: the section order, the exact headings, the closing section and the word budgets. Return it between START_ARTICLE and END_ARTICLE.`

The per-type values behind the closing section, CTA, formats, H3s and meta description are listed in [`../page-type-writing-rules.md`](../page-type-writing-rules.md).

There is no separate research step before the writer. Research happens inside the writer node through the Live Research tool (Tavily), exactly as in Content Maker 5.0: the writer searches for what it needs while it writes, and the request's whitelist and blacklist domains are passed to every search.

The family files are generated by `tools/render_writer_briefs.py`, which mirrors the `Page Contract` and `Prep Writer` nodes. Re-run it after changing either node.
