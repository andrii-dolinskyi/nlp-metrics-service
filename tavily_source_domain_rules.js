/**
 * Tavily / Researcher source-domain enforcement for the article-writing node.
 * ---------------------------------------------------------------------------
 * PROBLEM THIS SOLVES
 *   The Tavily ("Researcher") tool accepts whitelist (include) and blacklist
 *   (exclude) domains, but the model still proposes links from domains that are
 *   blacklisted or simply not on the whitelist. Customers check every link
 *   against their approved-domain list, so a single off-list link is a defect.
 *
 * WHAT THIS DOES
 *   Adds a hard <source_domain_rules> block to the system prompt that:
 *     - receives the actual allowed/forbidden domain lists inline,
 *     - covers every scenario (full whitelist / short whitelist / no whitelist),
 *     - keeps the blacklist in force in all cases,
 *     - forces a link-by-link verification pass BEFORE the model may output.
 *
 * HOW TO INTEGRATE INTO YOUR n8n CODE NODE (two additive edits, templates
 * untouched):
 *
 *   STEP 1 — after the `const T = { ... };` literal, attach the block:
 *       T.source_domain_rules = SOURCE_DOMAIN_RULES;   // (string defined below)
 *
 *   STEP 2 — replace everything from `const fill = ...` to the final `return`
 *       with the FOOTER section at the bottom of this file.
 *
 * The block is route-agnostic: it is injected into seo_en / geo_en / seo_lang /
 * geo_lang alike, right before <custom_rules>, so it sits with the other hard
 * rules and is governed by the same "custom rules override" precedence.
 */

// ───────────────────────────────────────────────────────────────────────────
// STEP 1 PAYLOAD: the new prompt block (placeholders filled at runtime).
// ───────────────────────────────────────────────────────────────────────────
const SOURCE_DOMAIN_RULES = `<source_domain_rules>
# Source and citation domain rules (CRITICAL — overrides link-count rules)

External links are the highest-risk part of this task. The customer manually checks every link in the finished article against their approved domain list, so one link from a domain that is not allowed is treated as a failure, even if the source is famous or the fact is correct. When these rules conflict with any SEO or GEO rule about how many links to include, these rules win. Fewer links is always better than one link from a domain that is not allowed.

## The domain lists for this article

You are given two lists for the Researcher (Tavily) tool. Either list, or both, can be empty.

ALLOWED domains (whitelist):
__F_whitelistDomains__

FORBIDDEN domains (blacklist):
__F_blacklistDomains__

"Domain" means the registrable domain and every subdomain under it. If "example.com" is allowed, then "www.example.com" and "news.example.com" are allowed too. Match on the domain only, never on the URL path and never on the article's wording. Ignore "http://", "https://", and "www." when you compare.

## Which links are allowed — work top to bottom and use the first case that fits

1. The whitelist has one or more domains (strict mode). Every external link in the article must point to a domain on the ALLOWED list. A link to any other domain is forbidden, however authoritative or relevant it looks. When you call the Researcher tool, scope the search to the allowed domains, and keep a result only after you confirm its final domain is on the list. If no allowed domain supports a claim, drop the link, and drop the claim itself when it needs a citation.

2. The whitelist has only a few domains, too few to reach the link count the SEO or GEO rules ask for (backup for a short whitelist). Stay in strict mode and link only to allowed domains. Cite different specific pages on the same allowed domain across the article, and lower the total number of external links to what those domains genuinely support. Do not add a single off-list link to reach a target number. Staying inside the whitelist matters more than the link count.

3. The whitelist is empty or not provided (open mode). There is no domain restriction beyond the blacklist below. Use any genuinely authoritative, independent source that supports the claim and follow the normal SEO or GEO link rules. This case is fully acceptable, so do not warn about it and do not mention it in the article.

## The blacklist always applies

In every case above, never link to a domain on the FORBIDDEN list. If a Researcher result comes from a forbidden domain, discard it and find another source. If a domain somehow appears on both lists, treat it as forbidden.

## Final link check — do this before you output anything

Do not produce the final JSON until the article passes this check. Run it on your finished draft:

1. Collect every external URL in the draft.
2. Reduce each URL to its registrable domain.
3. If a whitelist is active (case 1 or 2), confirm each domain is on the ALLOWED list. Remove or replace any link that is not, using an allowed-domain source.
4. Confirm no domain is on the FORBIDDEN list. Remove or replace any that is.
5. Only when every remaining link passes both checks may you return the JSON output.

Never write a URL from memory to satisfy a rule. Every link must come from a real Researcher result whose domain you have checked against these lists.
</source_domain_rules>`;

// ───────────────────────────────────────────────────────────────────────────
// STEP 2 PAYLOAD: the replacement FOOTER for the n8n Code node.
// Paste from here down in place of the existing `const fill = ...` → `return`.
// (In the node, `T` already exists and `T.source_domain_rules` was set in step 1.)
// ───────────────────────────────────────────────────────────────────────────

const fill = (t, vals) => Object.entries(vals).reduce(
  (s, [k, v]) => s.split('__F_' + k + '__').join(v == null ? '' : String(v)), t);

const brief = $('Brief EN').first().json;
const item = $input.first().json;

// Normalize a whitelist/blacklist value into a clean array of bare domains.
// Accepts an array or a string delimited by commas, semicolons, or newlines,
// and strips protocols, "www.", and any path so only the domain remains.
const toDomainList = (raw) => {
  if (raw == null) return [];
  const arr = Array.isArray(raw) ? raw : String(raw).split(/[\n,;]+/);
  return arr
    .map(s => String(s).trim()
      .replace(/^https?:\/\//i, '')
      .replace(/^www\./i, '')
      .replace(/\/.*$/, ''))
    .filter(Boolean);
};

// Field names are guessed defensively so the node keeps working if the brief
// schema labels these differently.
const whitelist = toDomainList(
  brief.whitelistDomains ?? brief.includeDomains ?? brief.allowedDomains);
const blacklist = toDomainList(
  brief.blacklistDomains ?? brief.excludeDomains ?? brief.blockedDomains);

const renderDomainList = (list, emptyNote) =>
  list.length ? list.map(d => '- ' + d).join('\n') : emptyNote;

const vals = {
  coreKeyword: brief.coreKeyword, secondaryKeywords: brief.secondaryKeywords,
  ctaRules: brief.ctaRules, writingPreferences: brief.writingPreferences,
  articleTitle: brief.articleTitle,
  articleDescription: item.articleDescription, sectionsFormatted: item.sectionsFormatted,
  whitelistDomains: renderDomainList(
    whitelist, '(empty — no whitelist provided; use scenario 3, open mode)'),
  blacklistDomains: renderDomainList(
    blacklist, '(empty — no blacklisted domains)')
};

// Build the system prompt, then inject the source-domain rules block right
// before <custom_rules> so it applies to every route (seo/geo, en/lang).
let system = fill(T.system[brief.route], vals);
const sourceBlock = fill(T.source_domain_rules, vals);
system = system.replace('<custom_rules>', sourceBlock + '\n\n<custom_rules>');

// Reinforce the domain restriction in the tool description itself, so the model
// scopes Tavily searches correctly from the very first call rather than only
// filtering afterwards.
let researcherDesc = brief.isGeo ? T.descGeo : T.descSeo;
if (whitelist.length) {
  researcherDesc += ' IMPORTANT: restrict every search to the article\'s allowed domains and keep only results whose final domain is on that allowed list. Discard any result from any other domain.';
} else if (blacklist.length) {
  researcherDesc += ' IMPORTANT: never return or use a result from the article\'s blacklisted domains.';
}

return [{ json: {
  system,
  user: fill(T.user, vals),
  researcherDesc
} }];
