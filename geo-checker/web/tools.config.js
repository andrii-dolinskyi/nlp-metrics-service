/*
 * Registry of lead-magnet tools served by this API.
 *
 * To add a new tool (new n8n workflow), add one entry here and set its
 * webhook URL env var. Nothing else in server.js needs to change.
 * The frontend for each tool calls POST /api/t/<slug> with a JSON body
 * containing the declared inputs, and renders whatever the workflow
 * returns ({ page, payload } shape recommended).
 */
module.exports = {
  'ai-visibility': {
    label: 'AI Visibility Score',
    webhookUrlEnv: 'N8N_WEBHOOK_URL',
    secretEnv: 'N8N_WEBHOOK_SECRET',
    timeoutMs: 35000,
    cacheTtlHours: 24,
    inputs: [
      { name: 'url', type: 'url', required: true },
    ],
  },

  /* Example for the next lead magnet — uncomment and adapt:
  'competitor-gap': {
    label: 'Competitor Gap Finder',
    webhookUrlEnv: 'N8N_WEBHOOK_URL_COMPETITOR_GAP',
    secretEnv: 'N8N_WEBHOOK_SECRET',          // shared secret is fine
    timeoutMs: 45000,
    cacheTtlHours: 12,
    inputs: [
      { name: 'url', type: 'url', required: true },
      { name: 'competitor', type: 'url', required: true },
      { name: 'keyword', type: 'text', required: false, maxLen: 120 },
    ],
  },
  */
};
