🤖 📖 **YouTube Script Maker: how to request a script**

Post ONE message in this channel with `key: value` pairs, one per line. The bot checks the channel every minute, writes the script, cleans the style, translates it if needed, and posts the script plus YouTube metadata back here (usually 5 to 10 minutes). Errors come back here too. Type `help` any time to see this message again.

**Keys**
- `videoType` (required): educational, listicle, comparison, product update, product news, product use case, thought leadership, ai news, shorts
- `contentIdea` (required): what the video is about. Be concrete: product names, audience, angle, the points you want covered. It can span several lines.
- `title` (optional): the exact title to use. Leave it out and the writer creates one.
- `language` (optional, default English): output language, for example Spanish, German, Ukrainian, Japanese. The script is written in English and translated with DeepL.
- `videoLength` (optional): target length in minutes, for example 8. For shorts use seconds, for example 45s. Every type has its own default and allowed range (listed below).
- `research` (optional, default false): true or false. With true the writer runs live web research and lists sources. Use it for news, comparisons, prices, dates, and any factual claims.
- `blacklistDomains` (optional): comma-separated domains to exclude from research, for example competitor.com, another.com

Notes: keys are case-insensitive (`video type`, `video_type` and `videoType` all work). Do not start your message with 🤖, that marks bot messages. Anything you write on lines without a known key is treated as part of the previous value.

**Templates and examples per video type**

1) Educational (default 8 min, range 2 to 25)
```
videoType: educational
contentIdea: How to set up Google Search Console for a new website. Cover domain vs URL-prefix properties, DNS verification, submitting a sitemap, and reading the Performance report for the first time. Audience: small business owners with no SEO background.
title: How to Set Up Google Search Console (Step by Step)
language: English
videoLength: 8
research: false
```

2) Listicle (default 10 min, range 3 to 20)
```
videoType: listicle
contentIdea: 7 AI tools that actually save time for a one-person marketing team. Pick tools with a free tier, say what each is best for, and be opinionated about which one we use daily.
language: English
videoLength: 10
research: true
```

3) Comparison (default 9 min, range 4 to 20)
```
videoType: comparison
contentIdea: Ahrefs vs Semrush for a small agency in 2026: pricing, keyword research depth, site audit, reporting, and which one to pick for a team of 5.
title: Ahrefs vs Semrush: Which Should a Small Agency Buy?
language: English
videoLength: 9
research: true
blacklistDomains: ahrefs.com, semrush.com
```

4) Product update (default 4 min, range 1 to 10)
```
videoType: product update
contentIdea: Snoika Content Maker 5.0 release: new GEO (generative engine optimization) briefs, one-click brand voice profiles, and the DeepL translation step. Explain what changed for existing users and how to enable each feature.
language: English
videoLength: 4
research: false
```

5) Product news (default 5 min, range 2 to 12)
```
videoType: product news
contentIdea: Google announced AI Mode rolling out to all EU countries this week. What it means for organic traffic, what publishers should change first, and how the market reacted.
language: German
videoLength: 5
research: true
```

6) Product use case (default 7 min, range 3 to 15)
```
videoType: product use case
contentIdea: How a 4-person SaaS marketing team used Snoika to publish 40 SEO articles a month without hiring writers. Walk through the setup, the review workflow, and the before-and-after numbers.
language: English
videoLength: 7
research: false
```

7) Thought leadership (default 9 min, range 4 to 20)
```
videoType: thought leadership
contentIdea: Thesis: keyword volume is a dead metric for B2B content in 2026, and teams should plan content around buyer questions instead. Argue it from agency experience, steelman the opposing view, and give a 12-month prediction.
language: English
videoLength: 9
research: false
```

8) AI news (default 8 min, range 3 to 15)
```
videoType: ai news
contentIdea: This week in AI for marketers: the three stories that matter for content teams (new model releases, changes in AI search, and any pricing changes). Keep it fast and opinionated.
language: English
videoLength: 8
research: true
```

9) Shorts (default 45 seconds, range 15 seconds to 3 min)
```
videoType: shorts
contentIdea: One setting in Google Search Console most people never open: the URL Inspection tool. Show why it matters and the one thing to check with it today.
language: English
videoLength: 45s
research: false
```
