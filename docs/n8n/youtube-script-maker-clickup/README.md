# YouTube Script Maker: ClickUp channel integration

n8n workflow: https://n8n-test.snoika.com/workflow/Ig6vaKhi8bRlWzcb
ClickUp channel: https://app.clickup.com/9012588798/chat/r/8ck2c7y-33812 ("YouTube Scripts", workspace `snoika-ai`)

This folder is a reference copy of the ClickUp-facing parts of the workflow (the Code node sources and
the request templates). The workflow itself lives in n8n.

## How it works

ClickUp offers no webhook events for chat channel messages (only task/list/folder/space/goal events), so the
workflow polls the channel:

1. **Poll Channel** (Schedule Trigger, every minute) -> **Fetch Messages** (`GET /api/v3/workspaces/{ws}/chat/channels/{ch}/messages?limit=50&content_format=text/md`).
2. **Pick Request** drops bot messages (every bot message starts with the marker `🤖`) and anything older than 3 hours.
3. **Not Processed?** filters out message ids already stored in the n8n data table `yt_script_requests`.
4. **Take Oldest** handles one request per poll (the rest are picked up on the following runs).
5. **Resolve Requester** (`GET /api/v2/team`) maps the message `user_id` to a username.
6. **Register Request** inserts a row (`message_id`, `execution_id`, `status=processing`, requester, summary).
7. **Intake** parses the `key: value` lines (see `nodes/intake.js`), validates them and reports all problems at once.
   `help` / `templates` posts the templates message (`clickup-request-templates.md`).
8. Valid requests run the existing pipeline: Writer (Claude, optional Tavily research) -> 5 style peelers ->
   **Any Flags?** -> Style Updater (skipped when nothing was flagged) -> DeepL translation (non-English) -> Packager.
9. **Thumbnail Director** (Grok) designs four thumbnail concepts in soft bright colours (no red, no dark scenes) that show
   the actual products, interfaces or scenario of the video: 1 title text on a colour banner plus icons, 2 the CEO
   (Anton Vedeshin, from a reference photo) in a bright photo-style scene with a varied posture, expression and hands plus a
   second title variation, 3 the CEO in GTA 6 style without text, 4 the format-specific concept with a third title variation.
   **Thumbnail Prompt Forge** adds the YouTube rules and falls back to generic concepts if the director fails.
   **Uses CEO Photo?** routes options 2 and 3 through **Fetch CEO Photo** (reference photo stored on Cloudinary at
   `youtube-thumbnails/reference/anton-vedeshin.jpg`, replace that asset to change the presenter) → **Attach CEO Photo** →
   **Thumbnail Edit Synthesis** (gpt-image-1 image edit, `input_fidelity=high`, quality medium); options 1 and 4 go through
   **Thumbnail Image Synthesis** (plain generation, quality medium). **Merge Thumbnails** joins both branches,
   **Cloudinary Upload** stores the originals in folder `youtube-thumbnails`, and **Thumbnail Record Builder** builds the
   delivery URLs: photo-style 16:9 images are smart-cropped to 1280x720, illustrations are padded (`c_pad,b_auto`) so icons
   and text are never cut, Shorts are padded to 1080x1920. A failed option is reported in the channel; the script is still
   delivered. Sources: `nodes/thumbnails/`.
10. **Compose Result** builds the channel message (script + YouTube metadata + sources), splits it into parts under
   ClickUp's 40,000 character limit, **Post Result** posts each part and adds the requester as a follower,
   **Mark Request Done** records the posted message ids. A second message lists the four thumbnail options with
   inline previews and the YouTube-sized URLs.
11. **On Error** (Error Trigger) -> **Lookup Request** by execution id -> **Compose Error Notice** -> **Post Error**
    -> **Mark Request Failed**. Failures that do not belong to a channel request (for example the poll itself failing)
    are only logged in n8n.

Credential used for all ClickUp calls: `ClickUp Andrii` (n8n credential id `LYJZwpmFBhQ9sRSk`). The bot therefore
posts as Andrii Dolinskyi; bot messages are recognised by the `🤖` marker, not by user id.

## Request format

See `clickup-request-templates.md` (the same text the bot posts on `help`). Required keys: `videoType`,
`contentIdea`. Optional: `title`, `language`, `videoLength`, `research`, `blacklistDomains`.

## Data table `yt_script_requests`

| column | meaning |
| --- | --- |
| message_id | ClickUp chat message id of the request (dedupe key) |
| execution_id | n8n execution that handled it (used by the error path) |
| status | processing, done, help, invalid, failed |
| requester | `Name (user id)` |
| summary | first 140 characters of the request |
| note | posted message ids, or the error message |
