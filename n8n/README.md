# LinkedIn News Bot — with Unsplash image posting

`linkedin-news-image-workflow.json` is the updated n8n workflow. It finds a
topical news article, writes a LinkedIn post, finds a matching stock photo on
Unsplash, previews the image + text on Telegram for approval, then publishes the
post **with the image** to the LinkedIn company page.

## What changed vs. the original flow

New/modified nodes:

- **News Reporter / Reporter Output** — now also return an `imageQuery` field
  (2–4 concrete visual keywords, no brand or company names) used to search Unsplash.
- **Find Image** (HTTP → `api.unsplash.com/search/photos`) — one landscape photo,
  `content_filter=high`. On error it passes through so the run never blocks.
- **Pick Image** (Code) — picks the first result, stores the image URL, the
  photographer credit, and the Unsplash `download_location`. Appends
  `Photo by <name> on Unsplash` to the post body when an image is found.
- **Has Image? → Send Preview Photo** — sends the image to Telegram (`sendPhoto`)
  right before the existing approval message, so you review image + text together.
- **Publish Route** — after approval, branches on whether an image exists.
- **Download Image** (HTTP, binary) → **Publish to LinkedIn** (`shareMediaCategory: IMAGE`).
- **Unsplash Download Ping** — pings `download_location` (required by Unsplash API terms).
- **Publish to LinkedIn (Text)** — text-only fallback (`shareMediaCategory: NONE`)
  used when no image is found or the image download fails.

`pinData` was cleared so the new steps run on live data (re-pin nodes yourself
for testing if you like).

## Setup required after import

1. **Create the Unsplash credential.** In n8n: **Credentials → New → "Header Auth"**.
   - Name: `Unsplash API`
   - Header **Name**: `Authorization`
   - Header **Value**: `Client-ID <YOUR_UNSPLASH_ACCESS_KEY>`

   Then open **Find Image** and **Unsplash Download Ping** and select this credential.
   (Only the Access Key is needed. The Secret Key is only for OAuth and is not used.)

2. **Set the LinkedIn organization URN.** In **Publish to LinkedIn** and
   **Publish to LinkedIn (Text)**, replace `YOUR_LINKEDIN_ORG_ID` with your real
   organization URN, and confirm the LinkedIn OAuth credential is selected.

3. **Confirm Telegram + Anthropic credentials** carried over on import
   (`LinkedIn News Bot`, `Anthropic API`, `JinaAI API`).

## Notes on Unsplash compliance

- Attribution is added as a plain-text `Photo by <name> on Unsplash` line at the
  end of the post (no hyperlink, to avoid LinkedIn's link-reach penalty), and shown
  in the Telegram preview caption.
- The **Unsplash Download Ping** node satisfies the API's "trigger a download"
  requirement when the image is actually used (i.e. after approval).
- Free tier: 50 requests/hour (demo apps). Two runs/day stays well within it.
