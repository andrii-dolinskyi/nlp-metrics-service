// Simulation test harness for linkedin-news-reporter.json
// Runs the real jsCode of every Code node in a sandbox and validates the graph.
const fs = require('fs');
const vm = require('vm');

const wf = JSON.parse(fs.readFileSync(process.argv[2] || 'linkedin-news-reporter.json'));
const byName = Object.fromEntries(wf.nodes.map(n => [n.name, n]));

let failures = 0;
function check(label, cond, extra) {
  if (cond) { console.log('  PASS ' + label); }
  else { failures++; console.log('  FAIL ' + label + (extra !== undefined ? ' -> ' + JSON.stringify(extra) : '')); }
}

/* ---------------- graph validation ---------------- */
console.log('--- Graph validation');
for (const [src, types] of Object.entries(wf.connections)) {
  check(`source node exists: ${src}`, !!byName[src]);
  for (const [type, outputs] of Object.entries(types)) {
    for (const branch of outputs) {
      for (const conn of branch) {
        check(`target exists: ${src} -> ${conn.node} (${type})`, !!byName[conn.node]);
      }
    }
  }
}
// every non-trigger, non-sticky, non-subnode node has an incoming main connection
const subnodeTypes = ['@n8n/n8n-nodes-langchain.lmChatOpenAi', '@n8n/n8n-nodes-langchain.lmChatAnthropic', '@n8n/n8n-nodes-langchain.outputParserStructured'];
const incoming = new Set();
for (const types of Object.values(wf.connections)) {
  for (const outputs of Object.values(types)) {
    for (const branch of outputs) for (const c of branch) incoming.add(c.node);
  }
}
for (const n of wf.nodes) {
  if (n.type === 'n8n-nodes-base.scheduleTrigger' || n.type === 'n8n-nodes-base.stickyNote' || subnodeTypes.includes(n.type)) continue;
  check(`node has incoming connection: ${n.name}`, incoming.has(n.name));
}
// agents have model + parser
for (const agent of ['News Picker', 'News Reporter']) {
  const hasModel = Object.entries(wf.connections).some(([s, t]) => t.ai_languageModel && t.ai_languageModel.some(b => b.some(c => c.node === agent)));
  const hasParser = Object.entries(wf.connections).some(([s, t]) => t.ai_outputParser && t.ai_outputParser.some(b => b.some(c => c.node === agent)));
  check(`${agent} has ai_languageModel`, hasModel);
  check(`${agent} has ai_outputParser`, hasParser);
}
// merge receives 4 inputs on distinct indexes
const mergeIdx = new Set();
for (const types of Object.values(wf.connections)) {
  (types.main || []).forEach(branch => branch.forEach(c => { if (c.node === 'Merge Feeds') mergeIdx.add(c.index); }));
}
check('Merge Feeds gets inputs 0..3', mergeIdx.size === 4 && [0,1,2,3].every(i => mergeIdx.has(i)), [...mergeIdx]);
// error-output nodes route second branch
check('Extract News error branch -> Handle Rejection', wf.connections['Extract News'].main[1][0].node === 'Handle Rejection');
check('Publish to LinkedIn error branch -> Publish Failed Alert', wf.connections['Publish to LinkedIn'].main[1][0].node === 'Publish Failed Alert');
check('Retry Pick? true loops back to News Picker', wf.connections['Retry Pick?'].main[0][0].node === 'News Picker');
// sendAndWait node has webhookId
check('Request Approval has webhookId', !!byName['Request Approval'].webhookId);
// expressions reference existing nodes
const nodeRefRe = /\$\('([^']+)'\)/g;
for (const n of wf.nodes) {
  const s = JSON.stringify(n.parameters);
  let m; while ((m = nodeRefRe.exec(s))) check(`${n.name} references existing node '${m[1]}'`, !!byName[m[1]]);
}

/* ---------------- code node executor ---------------- */
const staticData = {}; // shared across the whole "workflow instance"
let nodeData = {}; // per-scenario mock for $('Node') references
function runCode(nodeName, items) {
  const js = byName[nodeName].parameters.jsCode;
  const ctx = {
    $getWorkflowStaticData: () => staticData,
    $input: {
      all: () => items,
      first: () => items[0],
    },
    $: (name) => ({ first: () => {
      if (!(name in nodeData)) throw new Error('Referenced node "' + name + '" has no data');
      return { json: nodeData[name] };
    } }),
    Date, Set, Error, String, Array, JSON, isNaN, Object,
  };
  const fn = new vm.Script('(function(){\n' + js + '\n})()');
  return fn.runInNewContext(ctx);
}

const NOW = Date.now();
const h = n => new Date(NOW - n * 3600 * 1000).toISOString();
const item = j => ({ json: j });

function feedItems(list) { return list.map(item); }

function article(title, link, ageHours, snippet) {
  return { title, link, contentSnippet: snippet || 'snippet for ' + title, isoDate: h(ageHours) };
}

/* ---------------- Scenario 1: happy path ---------------- */
console.log('--- Scenario 1: happy path (articles in 4h window, approved first try)');
// simulate leftover state from an old version of the workflow + old runs
staticData.usedTopics = ['Legacy string topic', { title: 'Covered yesterday', ts: NOW - 26 * 3600 * 1000 }, { title: 'Ancient topic', ts: NOW - 9 * 24 * 3600 * 1000 }];
staticData.rejectedLinks = ['https://old.example.com/rejected'];
staticData.runCount = 2; // legacy field
runCode('Clean Memory', [item({ timestamp: h(0) })]);
check('legacy runCount removed', !('runCount' in staticData));
check('usedTopics pruned to 2 (>7d dropped)', staticData.usedTopics.length === 2, staticData.usedTopics);
check('string topic migrated to object', typeof staticData.usedTopics[0] === 'object' && staticData.usedTopics[0].title === 'Legacy string topic');
check('attemptCount reset', staticData.attemptCount === 0);

const feeds = [
  article('Startup A raises $50M', 'https://ex.com/a', 1),
  article('Covered yesterday', 'https://ex.com/covered', 2),           // excluded: used topic
  article('Startup A raises $50M', 'https://dupe.com/a', 2),           // excluded: duplicate title
  article('Old article outside window', 'https://ex.com/old', 12),     // excluded: too old
  article('Meta ads update', 'https://ex.com/b', 3),
  { title: 'No date article', link: 'https://ex.com/nodate' },         // excluded: no isoDate
  { json: undefined },                                                 // garbage
];
let out = runCode('Collect Candidates', feedItems(feeds));
let cc = out[0].json;
check('found=true', cc.found === true);
check('windowHours=4', cc.windowHours === 4);
check('2 candidates survive filtering', cc.candidateCount === 2, cc.candidates.map(c => c.link));
check('usedTopics passed as titles', Array.isArray(cc.usedTopics) && cc.usedTopics.includes('Covered yesterday'));

// picker returns valid choice
out = runCode('Select Article', [item({ output: { article: { title: 'Startup A raises $50M', link: 'https://ex.com/a', reason: 'x' } } })]);
let sel = out[0].json;
check('selected the picked article', sel.link === 'https://ex.com/a');
check('attempt=1', sel.attempt === 1);
check('currentSelection stored', staticData.currentSelection.link === 'https://ex.com/a');

// jina returns content (simplified shape { title, content })
out = runCode('Prepare Content', [item({ title: 'Raw', content: 'x'.repeat(5000) })]);
let pc = out[0].json;
check('content length propagated', pc.contentLength === 5000);
check('publication derived from link', pc.publication === 'ex.com', pc.publication);
check('title comes from selection', pc.title === 'Startup A raises $50M');

// reporter output -> format post
out = runCode('Format Post', [item({ output: { headline: 'Startup A raises $50M Series B', post: 'Hook\n\nBody\n\n#startups #SaaS' } })]);
let fp = out[0].json;
check('post formatted', fp.post.startsWith('Hook'));
check('link carried for approval message', fp.link === 'https://ex.com/a');
check('attempt carried', fp.attempt === 1);

// approved -> publish -> update memory
out = runCode('Update Memory', [item({ urn: 'urn:li:share:1' })]);
check('published title recorded in usedTopics', staticData.usedTopics.some(t => t.title === 'Startup A raises $50M'));
check('per-run state cleared', staticData.currentSelection === null && staticData.attemptCount === 0 && staticData.candidates.length === 0);
check('notify payload has title+link', out[0].json.title === 'Startup A raises $50M' && out[0].json.link === 'https://ex.com/a');

/* ---------------- Scenario 2: 6h fallback window ---------------- */
console.log('--- Scenario 2: nothing in 4h, articles in 6h window');
runCode('Clean Memory', [item({})]);
out = runCode('Collect Candidates', feedItems([
  article('Five hour old story', 'https://ex.com/5h', 5),
  article('Startup A raises $50M', 'https://ex.com/a', 5), // now a used topic -> excluded
]));
cc = out[0].json;
check('found via 6h fallback', cc.found === true && cc.windowHours === 6, cc);
check('used topic still excluded in 6h window', cc.candidateCount === 1 && cc.candidates[0].link === 'https://ex.com/5h');

/* ---------------- Scenario 3: nothing at all ---------------- */
console.log('--- Scenario 3: no articles in 4h nor 6h');
runCode('Clean Memory', [item({})]);
out = runCode('Collect Candidates', feedItems([article('Way too old', 'https://ex.com/old2', 10)]));
cc = out[0].json;
check('found=false', cc.found === false);
check('reason mentions both windows', /4 hours/.test(cc.reason) && /6 hours/.test(cc.reason), cc.reason);

/* ---------------- Scenario 4: rejection loop, second article approved ---------------- */
console.log('--- Scenario 4: first pick rejected, second pick approved');
runCode('Clean Memory', [item({})]);
out = runCode('Collect Candidates', feedItems([
  article('Candidate one', 'https://ex.com/c1', 1),
  article('Candidate two', 'https://ex.com/c2', 2),
  article('Candidate three', 'https://ex.com/c3', 3),
]));
check('3 candidates', out[0].json.candidateCount === 3);
runCode('Select Article', [item({ output: { article: { title: 'Candidate one', link: 'https://ex.com/c1' } } })]);
// user pressed Reject -> Approved? false -> Handle Rejection
out = runCode('Handle Rejection', [item({ data: { approved: false } })]);
let hr = out[0].json;
check('retry=true after first rejection', hr.retry === true);
check('rejected link recorded', staticData.rejectedLinks.includes('https://ex.com/c1'));
check('rejected link removed from candidates', hr.candidates.every(c => c.link !== 'https://ex.com/c1'));
check('2 candidates remain', hr.candidateCount === 2);
// loop: picker runs again on remaining candidates; picks c2
out = runCode('Select Article', [item({ output: { article: { title: 'Candidate two', link: 'https://ex.com/c2' } } })]);
check('attempt=2 on retry', out[0].json.attempt === 2);
check('second selection is not the rejected one', out[0].json.link === 'https://ex.com/c2');
runCode('Format Post', [item({ output: { headline: 'H2', post: 'P2 #ai' } })]);
runCode('Update Memory', [item({})]);
check('approved second article recorded', staticData.usedTopics.some(t => t.title === 'Candidate two'));

/* ---------------- Scenario 5: hallucinated pick falls back safely ---------------- */
console.log('--- Scenario 5: picker hallucinates a link');
runCode('Clean Memory', [item({})]);
runCode('Collect Candidates', feedItems([
  article('Real story', 'https://ex.com/real', 3),
  article('Newest story', 'https://ex.com/newest', 1),
]));
out = runCode('Select Article', [item({ output: { article: { title: 'Invented story', link: 'https://invented.example.com/x' } } })]);
check('fallback to newest real candidate', out[0].json.link === 'https://ex.com/newest', out[0].json);
// title matches but link is broken
out = runCode('Select Article', [item({ output: { article: { title: 'real STORY  ', link: 'https://broken.example/x' } } })]);
check('fallback by title match', out[0].json.link === 'https://ex.com/real', out[0].json);
// legacy array shape { article: [...] } still works
out = runCode('Select Article', [item({ output: { article: [{ title: 'Real story', link: 'https://ex.com/real' }] } })]);
check('array-shaped output handled', out[0].json.link === 'https://ex.com/real');

/* ---------------- Scenario 6: extraction failure / short content -> rejection path ---------------- */
console.log('--- Scenario 6: jina fails or content too short');
runCode('Clean Memory', [item({})]);
runCode('Collect Candidates', feedItems([
  article('Paywalled story', 'https://ex.com/pay', 1),
  article('Good story', 'https://ex.com/good', 2),
]));
runCode('Select Article', [item({ output: { article: { title: 'Paywalled story', link: 'https://ex.com/pay' } } })]);
// jina error item goes straight to Handle Rejection via error output
out = runCode('Handle Rejection', [item({ error: 'jina timeout' })]);
check('extraction failure triggers retry with remaining candidate', out[0].json.retry === true && out[0].json.candidates[0].link === 'https://ex.com/good');
// short content path: Prepare Content computes length, Content OK? gate would route false
runCode('Select Article', [item({ output: { article: { title: 'Good story', link: 'https://ex.com/good' } } })]);
out = runCode('Prepareb Content'.replace('b',''), [item({ content: 'too short' })]);
check('short content produces contentLength < 200', out[0].json.contentLength < 200);
out = runCode('Handle Rejection', [item(out[0].json)]);
check('no candidates left -> retry=false', out[0].json.retry === false && /No candidate articles/.test(out[0].json.reason), out[0].json);

/* ---------------- Scenario 7: three rejections cap ---------------- */
console.log('--- Scenario 7: 3 rejections stop the run');
runCode('Clean Memory', [item({})]);
runCode('Collect Candidates', feedItems([
  article('R1', 'https://ex.com/r1', 1),
  article('R2', 'https://ex.com/r2', 1),
  article('R3', 'https://ex.com/r3', 1),
  article('R4', 'https://ex.com/r4', 1),
]));
for (const l of ['r1', 'r2', 'r3']) {
  runCode('Select Article', [item({ output: { article: { title: l.toUpperCase(), link: 'https://ex.com/' + l } } })]);
  out = runCode('Handle Rejection', [item({ data: { approved: false } })]);
}
check('after 3rd rejection retry=false', out[0].json.retry === false, out[0].json);
check('reason mentions 3 tries', /3 articles/.test(out[0].json.reason), out[0].json.reason);
check('candidate R4 still exists but run stopped (cap respected)', staticData.candidates.length === 1);

/* ---------------- Scenario 8: rejected links persist to the next run ---------------- */
console.log('--- Scenario 8: next run excludes previously rejected links');
runCode('Clean Memory', [item({})]);
out = runCode('Collect Candidates', feedItems([
  article('R1', 'https://ex.com/r1', 1),      // rejected in scenario 7
  article('Fresh story', 'https://ex.com/fresh', 1),
]));
cc = out[0].json;
check('previously rejected link excluded on next run', cc.candidates.every(c => c.link !== 'https://ex.com/r1'), cc.candidates);
check('fresh story available', cc.candidates.some(c => c.link === 'https://ex.com/fresh'));

/* ---------------- Scenario 9: all remaining articles already rejected/used ---------------- */
console.log('--- Scenario 9: feeds only contain rejected/used articles');
runCode('Clean Memory', [item({})]);
out = runCode('Collect Candidates', feedItems([
  article('R2', 'https://ex.com/r2', 1),
  article('Candidate two', 'https://ex.com/c2', 1), // published earlier -> used topic
]));
check('found=false when everything filtered', out[0].json.found === false);

/* ---------------- Scenario 10: memory caps ---------------- */
console.log('--- Scenario 10: memory stays bounded');
staticData.rejectedLinks = Array.from({ length: 150 }, (_, i) => 'https://x.com/' + i);
staticData.usedTopics = Array.from({ length: 80 }, (_, i) => ({ title: 'T' + i, ts: NOW }));
runCode('Clean Memory', [item({})]);
check('rejectedLinks capped at 100', staticData.rejectedLinks.length === 100);
check('usedTopics capped at 50', staticData.usedTopics.length === 50);

/* ---------------- Scenario 11: Select Article fallbacks (pinned/partial executions) ---------------- */
console.log('--- Scenario 11: Select Article survives empty static data');
// simulate: Collect Candidates was pinned, so static data was never written
for (const k of Object.keys(staticData)) delete staticData[k];
nodeData = { 'Collect Candidates': { found: true, candidates: [
  { title: 'Pinned story', link: 'https://ex.com/pinned', isoDate: h(1) },
] } };
out = runCode('Select Article', [item({ output: { article: { title: 'Pinned story', link: 'https://ex.com/pinned' } } })]);
check('fallback to Collect Candidates output', out[0].json.link === 'https://ex.com/pinned', out[0].json);
check('static data repopulated from fallback', staticData.candidates.length === 1);
// simulate: retry loop context, static data lost, Handle Rejection has the list
for (const k of Object.keys(staticData)) delete staticData[k];
nodeData = { 'Handle Rejection': { retry: true, candidates: [
  { title: 'Second try story', link: 'https://ex.com/second', isoDate: h(2) },
] } };
out = runCode('Select Article', [item({ output: { article: { title: 'Second try story', link: 'https://ex.com/second' } } })]);
check('fallback to Handle Rejection output', out[0].json.link === 'https://ex.com/second', out[0].json);
// simulate: no candidate source anywhere, but picker returned a valid-looking article
for (const k of Object.keys(staticData)) delete staticData[k];
nodeData = {};
out = runCode('Select Article', [item({ output: { article: { title: 'Lone pick', link: 'https://ex.com/lone' } } })]);
check('last resort trusts picker output instead of throwing', out[0].json.link === 'https://ex.com/lone', out[0].json);
// simulate: nothing at all -> must still throw with a helpful message
let threw = false;
try { runCode('Select Article', [item({ output: {} })]); } catch (e) { threw = /no candidate list/.test(e.message); }
check('throws helpful error only when truly nothing usable', threw);
nodeData = {};

console.log(failures === 0 ? '\nALL TESTS PASSED' : `\n${failures} TEST(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
