import { workflow, node, trigger, sticky, expr } from '@n8n/workflow-sdk';

const uiTrigger = trigger({
  type: 'n8n-nodes-base.webhook',
  version: 2.1,
  config: {
    name: 'Checker UI Request',
    parameters: { httpMethod: 'GET', path: 'ai-visibility', responseMode: 'responseNode' },
    position: [240, 180]
  },
  output: [{ query: {}, headers: {} }]
});

const serveUi = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: {
    name: 'Serve Checker UI',
    parameters: {
      respondWith: 'text',
      responseBody: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Snoika AI Visibility Score</title>
<style>
:root{--bg:#0b0f1a;--card:#131a2b;--card2:#0f1524;--line:#232d45;--txt:#e8ecf5;--mut:#8b96ad;--acc:#6d8dff;--acc2:#9f6dff;--ok:#22c55e;--warn:#f59e0b;--bad:#ef4444}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--txt);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,sans-serif;line-height:1.5}
.wrap{max-width:880px;margin:0 auto;padding:40px 20px 80px}
.badge{display:inline-block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--acc);border:1px solid var(--line);border-radius:99px;padding:4px 12px;margin-bottom:16px}
h1{font-size:34px;font-weight:800;background:linear-gradient(90deg,var(--acc),var(--acc2));-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:10px}
.tag{color:var(--mut);max-width:640px;margin-bottom:28px}
.frm{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}
.frm input{flex:1;min-width:260px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 16px;color:var(--txt);font-size:15px;outline:none}
.frm input:focus{border-color:var(--acc)}
.frm button{background:linear-gradient(90deg,var(--acc),var(--acc2));border:0;border-radius:12px;padding:14px 22px;color:#fff;font-size:15px;font-weight:700;cursor:pointer}
.frm button:disabled{opacity:.5;cursor:wait}
.hint{font-size:12px;color:var(--mut);margin-bottom:30px}
#status{display:none;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px;color:var(--mut);margin-bottom:20px}
.spin{display:inline-block;width:14px;height:14px;border:2px solid var(--acc);border-top-color:transparent;border-radius:50%;margin-right:10px;vertical-align:-2px;animation:sp 0.8s linear infinite}
@keyframes sp{to{transform:rotate(360deg)}}
#error{display:none;background:#2a1420;border:1px solid #5b2333;border-radius:14px;padding:16px;color:#ff9db0;margin-bottom:20px}
#result{display:none}
.scorecard{display:flex;gap:28px;align-items:center;flex-wrap:wrap;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px;margin-bottom:16px}
.ring{position:relative;width:150px;height:150px;flex:0 0 auto}
.ring svg{transform:rotate(-90deg)}
.ring .num{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.ring .num b{font-size:40px;font-weight:800}
.ring .num span{font-size:12px;color:var(--mut)}
.sc-info{flex:1;min-width:220px}
.gradechip{display:inline-block;font-weight:800;font-size:14px;border-radius:8px;padding:4px 12px;margin-bottom:8px}
.verdict{font-size:20px;font-weight:700;margin-bottom:8px}
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chip{font-size:12px;color:var(--mut);background:var(--card2);border:1px solid var(--line);border-radius:99px;padding:4px 10px}
.toolbar{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px 18px;margin-bottom:16px}
.toolbar .iss{font-size:14px;color:var(--mut)}
.toolbar .iss b{color:var(--warn)}
.cpy{background:var(--card2);border:1px solid var(--line);border-radius:10px;color:var(--txt);padding:9px 14px;font-size:13px;cursor:pointer}
.cpy:hover{border-color:var(--acc)}
.cat{background:var(--card);border:1px solid var(--line);border-radius:14px;margin-bottom:12px;overflow:hidden}
.cat-h{display:flex;justify-content:space-between;align-items:center;padding:16px 18px;cursor:pointer;user-select:none}
.cat-h h3{font-size:16px}
.cat-h .pts{font-size:14px;color:var(--mut)}
.cat-h .pts b{color:var(--txt)}
.bar{height:5px;background:var(--card2)}
.bar i{display:block;height:100%;border-radius:0 3px 3px 0}
.cat-b{display:none;border-top:1px solid var(--line)}
.cat.open .cat-b{display:block}
.chk{display:flex;gap:12px;padding:14px 18px;border-bottom:1px solid var(--line)}
.chk:last-child{border-bottom:0}
.dot{width:10px;height:10px;border-radius:50%;margin-top:6px;flex:0 0 auto}
.chk .bd{flex:1}
.chk .lb{font-weight:600;font-size:14px;margin-bottom:2px}
.chk .cm{font-size:13px;color:var(--mut)}
.chk .pt{font-size:13px;color:var(--mut);white-space:nowrap;font-variant-numeric:tabular-nums}
.fixbtn{margin-top:8px;display:inline-block;background:transparent;border:1px dashed var(--line);color:var(--acc);border-radius:8px;padding:5px 10px;font-size:12px;cursor:pointer}
.sev{font-size:11px;font-weight:700;border-radius:6px;padding:2px 8px;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap}
.sev.clean{background:#0e2b1c;color:var(--ok)}
.sev.notable{background:#2e2410;color:var(--warn)}
.sev.heavy{background:#2e1216;color:var(--bad)}
.diag{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:10px;padding:14px 18px}
.dcard{background:var(--card2);border:1px solid var(--line);border-radius:10px;padding:12px}
.dcard .dv{font-size:18px;font-weight:800}
.dcard .dl{font-size:12px;color:var(--acc);margin-bottom:2px}
.dcard .dc{font-size:12px;color:var(--mut)}
.subhead{padding:14px 18px 4px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut)}
.cta{background:linear-gradient(135deg,#182042,#1c1436);border:1px solid #2c3a68;border-radius:16px;padding:24px;margin-top:24px}
.cta h3{margin-bottom:6px}
.cta p{color:var(--mut);font-size:14px;margin-bottom:14px}
.cta a{display:inline-block;background:linear-gradient(90deg,var(--acc),var(--acc2));color:#fff;text-decoration:none;font-weight:700;border-radius:10px;padding:11px 20px;font-size:14px}
.foot{margin-top:36px;font-size:12px;color:var(--mut);text-align:center}
</style>
</head>
<body>
<div class="wrap">
  <div class="badge">Free tool by Snoika</div>
  <h1>AI Visibility Score</h1>
  <p class="tag">Paste any URL and get a 40-signal audit of how likely the page is to be cited by ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; including an AI-writing fingerprint scan no other checker runs.</p>
  <form class="frm" id="frm">
    <input id="url" type="text" placeholder="https://yoursite.com/blog/your-article" autocomplete="off">
    <button id="go" type="submit">Score my page</button>
  </form>
  <div class="hint">Runs ~40 deterministic checks. No signup. Usually finishes in under 10 seconds.</div>
  <div id="status"><span class="spin"></span><span id="stext">Fetching page&hellip;</span></div>
  <div id="error"></div>
  <div id="result"></div>
  <div class="foot">Built by <a href="https://snoika.com" style="color:var(--acc)">Snoika</a> &mdash; AI marketing that gets you cited.</div>
</div>
<script>
var API = '/webhook/ai-visibility-check';
var STEPS = ['Fetching page HTML\u2026','Extracting the article\u2026','Reading structured data\u2026','Checking AI crawler access\u2026','Scanning for AI-writing patterns\u2026','Scoring 40+ signals\u2026'];
var stepTimer = null;
function h(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function el(id){return document.getElementById(id);}
function statusColor(st){return st==='pass'?'var(--ok)':(st==='warn'?'var(--warn)':'var(--bad)');}
function gradeColor(g){if(g==='A+'||g==='A')return['#0e2b1c','var(--ok)'];if(g==='B')return['#12283a','#38bdf8'];if(g==='C')return['#2e2410','var(--warn)'];return['#2e1216','var(--bad)'];}
function ringColor(s){return s>=80?'#22c55e':(s>=70?'#38bdf8':(s>=55?'#f59e0b':'#ef4444'));}
function copyTxt(btn,txt){
  var done=function(){var o=btn.textContent;btn.textContent='Copied \u2713';setTimeout(function(){btn.textContent=o;},1600);};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,function(){fallbackCopy(txt);done();});}
  else{fallbackCopy(txt);done();}
}
function fallbackCopy(txt){var t=document.createElement('textarea');t.value=txt;document.body.appendChild(t);t.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(t);}
function renderCheck(c){
  var fix='';
  if(c.fixPrompt&&c.status!=='pass'){fix='<button class="fixbtn" data-fix="'+h(c.fixPrompt)+'">Copy fix prompt</button>';}
  return '<div class="chk"><span class="dot" style="background:'+statusColor(c.status)+'"></span><div class="bd"><div class="lb">'+h(c.label)+'</div><div class="cm">'+h(c.comment)+'</div>'+fix+'</div><span class="pt">'+c.points+'/'+c.max+'</span></div>';
}
function renderPattern(p){
  var cls=p.status==='clean'?'clean':(p.status==='notable'?'notable':'heavy');
  return '<div class="chk"><span class="dot" style="background:'+(cls==='clean'?'var(--ok)':(cls==='notable'?'var(--warn)':'var(--bad)'))+'"></span><div class="bd"><div class="lb">'+h(p.label)+'</div><div class="cm">'+h(p.comment)+'</div></div><span class="sev '+cls+'">'+cls+'</span></div>';
}
function renderDiag(d){
  return '<div class="dcard"><div class="dl">'+h(d.label)+'</div><div class="dv">'+h(d.value)+'</div><div class="dc">'+h(d.comment)+'</div></div>';
}
function render(r){
  var gc=gradeColor(r.grade);
  var circ=2*Math.PI*62;
  var off=circ*(1-r.totalScore/100);
  var html='';
  html+='<div class="scorecard"><div class="ring"><svg width="150" height="150"><circle cx="75" cy="75" r="62" fill="none" stroke="var(--card2)" stroke-width="12"></circle><circle cx="75" cy="75" r="62" fill="none" stroke="'+ringColor(r.totalScore)+'" stroke-width="12" stroke-linecap="round" stroke-dasharray="'+circ+'" stroke-dashoffset="'+off+'"></circle></svg><div class="num"><b>'+r.totalScore+'</b><span>/ 100</span></div></div>';
  html+='<div class="sc-info"><span class="gradechip" style="background:'+gc[0]+';color:'+gc[1]+'">Grade '+h(r.grade)+'</span><div class="verdict">'+h(r.verdict)+'</div><div class="chips"><span class="chip">'+r.meta.wordCount+' words analyzed</span><span class="chip">Article via '+h(r.meta.articleSource)+'</span><span class="chip">Page fetch: '+h(r.meta.pageFetch||'direct')+'</span><span class="chip">HTML '+r.meta.htmlKB+' KB</span><span class="chip">HTTP '+r.meta.pageStatus+'</span></div></div></div>';
  html+='<div class="toolbar"><span class="iss"><b>'+r.issuesCount+' issues</b> &bull; +'+r.pointsAvailable+' pts available</span><button class="cpy" id="fixall">Copy Fix-All Prompt</button></div>';
  for(var i=0;i<r.categories.length;i++){
    var cat=r.categories[i];
    var pct=cat.max>0?Math.round(cat.score/cat.max*100):0;
    var barc=pct>=80?'var(--ok)':(pct>=50?'var(--warn)':'var(--bad)');
    html+='<div class="cat'+(i<2?' open':'')+'"><div class="cat-h"><h3>'+h(cat.name)+'</h3><span class="pts"><b>'+cat.score+'</b> / '+cat.max+'</span></div><div class="bar"><i style="width:'+pct+'%;background:'+barc+'"></i></div><div class="cat-b">';
    if(cat.id==='voice'){
      html+='<div class="subhead">AI-writing fingerprints (16 detectors)</div>';
      for(var p=0;p<cat.patterns.length;p++){html+=renderPattern(cat.patterns[p]);}
      html+='<div class="subhead">Writing diagnostics</div><div class="diag">';
      for(var d=0;d<cat.diagnostics.length;d++){html+=renderDiag(cat.diagnostics[d]);}
      html+='</div>';
      if(cat.fixPrompt){html+='<div style="padding:0 18px 16px"><button class="fixbtn" data-fix="'+h(cat.fixPrompt)+'">Copy humanize prompt</button></div>';}
    } else {
      for(var c=0;c<cat.checks.length;c++){html+=renderCheck(cat.checks[c]);}
    }
    html+='</div></div>';
  }
  html+='<div class="cta"><h3>Too many AI fingerprints on your content?</h3><p>This scan is exactly how AI engines and readers spot machine-written pages. Snoika produces and rehabilitates content that reads human and gets cited by ChatGPT, Perplexity and Google AI Overviews.</p><a href="https://snoika.com" target="_blank" rel="noopener">Talk to Snoika &rarr;</a></div>';
  el('result').innerHTML=html;
  el('result').style.display='block';
  var heads=el('result').querySelectorAll('.cat-h');
  for(var k=0;k<heads.length;k++){heads[k].addEventListener('click',function(){this.parentNode.classList.toggle('open');});}
  var fixes=el('result').querySelectorAll('[data-fix]');
  for(var f=0;f<fixes.length;f++){fixes[f].addEventListener('click',function(){copyTxt(this,this.getAttribute('data-fix'));});}
  var fa=el('fixall');
  if(fa){fa.addEventListener('click',function(){copyTxt(this,r.fixAllPrompt||'');});}
}
el('frm').addEventListener('submit',function(ev){
  ev.preventDefault();
  var v=el('url').value.trim();
  if(!v){return;}
  el('error').style.display='none';
  el('result').style.display='none';
  el('go').disabled=true;
  el('status').style.display='block';
  var si=0;el('stext').textContent=STEPS[0];
  stepTimer=setInterval(function(){si=(si+1)%STEPS.length;el('stext').textContent=STEPS[si];},1600);
  fetch(API+'?url='+encodeURIComponent(v),{method:'POST'})
    .then(function(res){return res.json();})
    .then(function(data){
      clearInterval(stepTimer);el('status').style.display='none';el('go').disabled=false;
      if(!data||data.ok===false){el('error').textContent=(data&&data.error)?data.error:'Something went wrong. Try again.';el('error').style.display='block';return;}
      render(data);
    })
    .catch(function(){
      clearInterval(stepTimer);el('status').style.display='none';el('go').disabled=false;
      el('error').textContent='Could not reach the scoring service. Try again in a moment.';el('error').style.display='block';
    });
});
</script>
</body>
</html>`,
      options: { responseHeaders: { entries: [{ name: 'Content-Type', value: 'text/html; charset=utf-8' }] } }
    },
    position: [540, 180]
  }
});

const apiTrigger = trigger({
  type: 'n8n-nodes-base.webhook',
  version: 2.1,
  config: {
    name: 'Score API Request',
    parameters: { httpMethod: 'POST', path: 'ai-visibility-check', responseMode: 'responseNode' },
    position: [240, 520]
  },
  output: [{ query: { url: 'https://example.com/blog/post' }, body: {}, headers: {} }]
});

const normalizeUrl = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Normalize URL',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `var inp = $input.first().json;
var q = inp.query || {};
var b = inp.body || {};
var raw = String(q.url || b.url || '').trim();
if (!raw) { return [{ json: { error: 'Missing url parameter. Pass ?url=https://... ' } }]; }
if (!/^https?:\\/\\//i.test(raw)) { raw = 'https://' + raw; }
var m = raw.match(/^(https?):\\/\\/([^\\/?#]+)([\\s\\S]*)$/i);
if (!m) { return [{ json: { error: 'That does not look like a valid URL.' } }]; }
var hostPort = m[2];
var host = hostPort.replace(/:\\d+$/, '').toLowerCase();
var privateHost = host === 'localhost' || host.slice(-6) === '.local' || host.slice(-9) === '.internal' || /^127\\./.test(host) || /^10\\./.test(host) || /^192\\.168\\./.test(host) || /^169\\.254\\./.test(host) || /^172\\.(1[6-9]|2[0-9]|3[01])\\./.test(host) || host === '0.0.0.0' || host.charAt(0) === '[';
if (privateHost) { return [{ json: { error: 'Private and internal addresses are not allowed.' } }]; }
if (!/^[a-z0-9.-]+$/.test(host) || host.indexOf('.') === -1) { return [{ json: { error: 'That does not look like a valid URL.' } }]; }
var origin = m[1].toLowerCase() + '://' + hostPort;
return [{ json: { url: raw, origin: origin, host: host } }];`
    },
    position: [500, 520]
  },
  output: [{ url: 'https://example.com/blog/post', origin: 'https://example.com', host: 'example.com' }]
});

const fetchPage = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch Page HTML',
    parameters: {
      method: 'GET',
      url: expr('{{ $json.url }}'),
      sendHeaders: true,
      headerParameters: { parameters: [
        { name: 'User-Agent', value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' },
        { name: 'Accept', value: 'text/html,application/xhtml+xml' },
        { name: 'Accept-Language', value: 'en' }
      ] },
      options: {
        timeout: 9000,
        redirect: { redirect: { followRedirects: true, maxRedirects: 8 } },
        response: { response: { fullResponse: true, neverError: true, responseFormat: 'text', outputPropertyName: 'body' } }
      }
    },
    onError: 'continueRegularOutput',
    position: [760, 520]
  },
  output: [{ body: '<html>...</html>', headers: { 'content-type': 'text/html' }, statusCode: 200 }]
});

const fetchArticle = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch Article Markdown',
    parameters: {
      method: 'GET',
      url: expr("https://r.jina.ai/{{ $('Normalize URL').first().json.url }}"),
      sendHeaders: true,
      headerParameters: { parameters: [{ name: 'X-Return-Format', value: 'markdown' }] },
      options: {
        timeout: 10000,
        response: { response: { fullResponse: true, neverError: true, responseFormat: 'text', outputPropertyName: 'data' } }
      }
    },
    onError: 'continueRegularOutput',
    position: [1600, 520]
  },
  output: [{ data: '# Article title\n\nMarkdown content...', statusCode: 200, headers: {} }]
});

const fetchLlms = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch llms.txt',
    parameters: {
      method: 'GET',
      url: expr("{{ $('Normalize URL').first().json.origin }}/llms.txt"),
      options: {
        timeout: 4000,
        redirect: { redirect: { followRedirects: true, maxRedirects: 4 } },
        response: { response: { fullResponse: true, neverError: true, responseFormat: 'text', outputPropertyName: 'body' } }
      }
    },
    onError: 'continueRegularOutput',
    position: [1820, 520]
  },
  output: [{ body: '# llms.txt', statusCode: 200, headers: {} }]
});

const fetchRobots = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch robots.txt',
    parameters: {
      method: 'GET',
      url: expr("{{ $('Normalize URL').first().json.origin }}/robots.txt"),
      options: {
        timeout: 4000,
        redirect: { redirect: { followRedirects: true, maxRedirects: 4 } },
        response: { response: { fullResponse: true, neverError: true, responseFormat: 'text', outputPropertyName: 'body' } }
      }
    },
    onError: 'continueRegularOutput',
    position: [2040, 520]
  },
  output: [{ body: 'User-agent: *\nAllow: /', statusCode: 200, headers: {} }]
});

const assessFetch = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Assess Page Fetch',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `var j = $input.first().json;
var body = typeof j.body === 'string' ? j.body : '';
var sc = j.statusCode || 0;
var challenge = /_cf_chl|cf-browser-verification|challenge-platform|<title>[^<]*(just a moment|attention required|access denied|verifying you are human)[^<]*<\\/title>/i.test(body.slice(0, 6000));
var blocked = !body || sc >= 400 || body.length < 1500 || challenge;
return [{ json: { blocked: blocked, statusCode: sc } }];`
    },
    position: [980, 520]
  },
  output: [{ blocked: false, statusCode: 200 }]
});

const originBlocked = node({
  type: 'n8n-nodes-base.if',
  version: 2.3,
  config: {
    name: 'Origin Blocked?',
    parameters: {
      conditions: {
        options: { caseSensitive: true, typeValidation: 'loose' },
        combinator: 'and',
        conditions: [{ id: 'blocked-check', leftValue: expr('{{ $json.blocked }}'), rightValue: true, operator: { type: 'boolean', operation: 'true' } }]
      },
      looseTypeValidation: true
    },
    position: [1180, 520]
  }
});

const fetchPageJina = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch Page via Jina',
    parameters: {
      method: 'GET',
      url: expr("https://r.jina.ai/{{ $('Normalize URL').first().json.url }}"),
      sendHeaders: true,
      headerParameters: { parameters: [{ name: 'X-Return-Format', value: 'html' }] },
      options: {
        timeout: 15000,
        response: { response: { fullResponse: true, neverError: true, responseFormat: 'text', outputPropertyName: 'body' } }
      }
    },
    onError: 'continueRegularOutput',
    position: [1380, 660]
  },
  output: [{ body: '<html>rendered DOM...</html>', statusCode: 200, headers: {} }]
});

const scoreEngine = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Score Engine',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `var nu = $('Normalize URL').first().json;
if (nu.error) { return [{ json: { ok: false, error: nu.error } }]; }

function grab(name) { try { return $(name).first().json || {}; } catch (e) { return {}; } }
var pageRes = grab('Fetch Page HTML');
var jinaRes = grab('Fetch Article Markdown');
var llmsRes = grab('Fetch llms.txt');
var robotsRes = grab('Fetch robots.txt');

var html = (typeof pageRes.body === 'string') ? pageRes.body : '';
var pageStatus = pageRes.statusCode || 0;
var jinaStatus = jinaRes.statusCode || 0;
var jinaRaw = (typeof jinaRes.data === 'string') ? jinaRes.data : (typeof jinaRes.body === 'string' ? jinaRes.body : '');
if (jinaStatus && jinaStatus !== 200) { jinaRaw = ''; }

var proxyRes = grab('Fetch Page via Jina');
var proxyHtml = (proxyRes.statusCode === 200 && typeof proxyRes.body === 'string') ? proxyRes.body : '';
function looksBlocked(h) { return !h || h.length < 1500 || /_cf_chl|cf-browser-verification|challenge-platform|<title>[^<]*(just a moment|attention required|access denied|verifying you are human)[^<]*<\\/title>/i.test(h.slice(0, 6000)); }
var fetchMode = 'direct';
if ((looksBlocked(html) || pageStatus >= 400) && proxyHtml.length > 1500) {
  html = proxyHtml;
  fetchMode = 'rendered (Jina proxy)';
}

if ((!html || html.length < 300) && jinaRaw.length < 300) {
  return [{ json: { ok: false, error: 'Could not fetch the page (HTTP ' + (pageStatus || 'no response') + '). The site blocks automated access (Cloudflare or similar) and the rendered-proxy fallback also failed.' } }];
}

var BT = String.fromCharCode(96);
function esc(s) { return s.replace(/[.*+?^$(){}|[\\]\\\\]/g, '\\\\$&'); }
function cnt(re, s) { var m = s.match(re); return m ? m.length : 0; }
function decode(s) {
  return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&#8217;/g, "'").replace(/&#8216;/g, "'").replace(/&nbsp;/g, ' ').replace(/&mdash;/g, '\\u2014').replace(/&ndash;/g, '\\u2013').replace(/&rsquo;/g, "'").replace(/&lsquo;/g, "'").replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"');
}
function fill(t, d) { return t.replace(/\\{(\\w+)\\}/g, function (mm, k) { return d[k] !== undefined ? String(d[k]) : ''; }); }
function r1(x) { return Math.round(x * 10) / 10; }
function r2(x) { return Math.round(x * 100) / 100; }

var htmlNoScript = html.replace(/<script[\\s\\S]*?<\\/script>/gi, ' ').replace(/<style[\\s\\S]*?<\\/style>/gi, ' ').replace(/<noscript[\\s\\S]*?<\\/noscript>/gi, ' ').replace(/<svg[\\s\\S]*?<\\/svg>/gi, ' ').replace(/<!--[\\s\\S]*?-->/g, ' ');
var htmlText = decode(htmlNoScript.replace(/<[^>]+>/g, ' ')).replace(/\\s+/g, ' ').trim();
var htmlWords = htmlText ? htmlText.split(' ').length : 0;
var htmlKB = Math.round(html.length / 1024);

var headings = [];
var hre = /<h([1-6])\\b[^>]*>([\\s\\S]*?)<\\/h\\1>/gi;
var hm;
while ((hm = hre.exec(htmlNoScript)) !== null) {
  var htext = decode(hm[2].replace(/<[^>]+>/g, ' ')).replace(/\\s+/g, ' ').trim();
  if (htext) { headings.push({ level: parseInt(hm[1], 10), text: htext }); }
}
var h1c = headings.filter(function (x) { return x.level === 1; }).length;
var h2c = headings.filter(function (x) { return x.level === 2; }).length;
var h3c = headings.filter(function (x) { return x.level === 3; }).length;

var ldTypes = {};
var ldNodes = [];
var ldBlocks = 0;
var ldre = /<script[^>]*type=["']application\\/ld\\+json["'][^>]*>([\\s\\S]*?)<\\/script>/gi;
function collectLd(n) {
  if (!n) { return; }
  if (Array.isArray(n)) { n.forEach(collectLd); return; }
  if (typeof n === 'object') {
    ldNodes.push(n);
    var t = n['@type'];
    if (t) { (Array.isArray(t) ? t : [t]).forEach(function (x) { if (typeof x === 'string') { ldTypes[x.toLowerCase()] = 1; } }); }
    Object.keys(n).forEach(function (k) { var v = n[k]; if (v && typeof v === 'object') { collectLd(v); } });
  }
}
var lm;
while ((lm = ldre.exec(html)) !== null) {
  ldBlocks++;
  try { collectLd(JSON.parse(lm[1].trim())); } catch (e) {}
}
function hasType(t) { return !!ldTypes[t.toLowerCase()]; }
var typeList = Object.keys(ldTypes).map(function (t) { return t.charAt(0).toUpperCase() + t.slice(1); });

var articleNode = null;
for (var ai = 0; ai < ldNodes.length; ai++) {
  var tt = ldNodes[ai]['@type'];
  var ts = Array.isArray(tt) ? tt : [tt];
  if (ts.some(function (x) { return typeof x === 'string' && /article/i.test(x); })) { articleNode = ldNodes[ai]; break; }
}
function metaContent(attr, val) {
  var tag = html.match(new RegExp('<meta[^>]*' + attr + '=["' + "'" + ']' + esc(val) + '["' + "'" + '][^>]*>', 'i'));
  if (!tag) { return ''; }
  var c = tag[0].match(/content=["']([^"']*)["']/i);
  return c ? c[1] : '';
}
var titleTag = decode(((html.match(/<title[^>]*>([\\s\\S]*?)<\\/title>/i) || [])[1] || '')).replace(/\\s+/g, ' ').trim();
var metaDesc = metaContent('name', 'description') || metaContent('property', 'og:description');
var hasCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);
var langAttr = (html.match(/<html[^>]*\\slang=["']?([a-zA-Z-]+)/i) || [])[1] || '';
var modifiedMeta = metaContent('property', 'article:modified_time') || metaContent('name', 'last-modified');
var dateModified = (articleNode && (articleNode.dateModified || articleNode.dateUpdated)) || modifiedMeta || '';
if (!dateModified) { for (var di = 0; di < ldNodes.length; di++) { if (ldNodes[di].dateModified) { dateModified = ldNodes[di].dateModified; break; } } }
var ldAuthorName = '';
if (articleNode && articleNode.author) {
  var an = articleNode.author;
  if (Array.isArray(an)) { an = an[0]; }
  if (typeof an === 'string') { ldAuthorName = an; }
  else if (an && an.name) { ldAuthorName = an.name; }
}
if (!ldAuthorName) { for (var pi = 0; pi < ldNodes.length; pi++) { var pt = ldNodes[pi]['@type']; if (pt && String(pt).toLowerCase() === 'person' && ldNodes[pi].name) { ldAuthorName = ldNodes[pi].name; break; } } }

var AUTH_PATTERNS = [/\\.gov(\\.[a-z]{2})?$/, /\\.edu(\\.[a-z]{2})?$/, /(^|\\.)wikipedia\\.org$/, /(^|\\.)arxiv\\.org$/, /(^|\\.)nih\\.gov$/, /(^|\\.)nature\\.com$/, /(^|\\.)sciencedirect\\.com$/, /(^|\\.)springer\\.com$/, /(^|\\.)ieee\\.org$/, /(^|\\.)doi\\.org$/, /(^|\\.)pubmed\\./, /(^|\\.)statista\\.com$/, /(^|\\.)pewresearch\\.org$/, /(^|\\.)reuters\\.com$/, /(^|\\.)apnews\\.com$/, /(^|\\.)nytimes\\.com$/, /(^|\\.)wsj\\.com$/, /(^|\\.)ft\\.com$/, /(^|\\.)bbc\\.(com|co\\.uk)$/, /(^|\\.)forbes\\.com$/, /(^|\\.)hbr\\.org$/, /(^|\\.)mckinsey\\.com$/, /(^|\\.)gartner\\.com$/, /(^|\\.)who\\.int$/, /(^|\\.)oecd\\.org$/, /(^|\\.)worldbank\\.org$/, /(^|\\.)un\\.org$/, /(^|\\.)europa\\.eu$/];
var extLinks = 0;
var authHosts = {};
var lre = /<a\\b[^>]*href=["']([^"']+)["']/gi;
var am;
while ((am = lre.exec(htmlNoScript)) !== null) {
  var href = am[1];
  if (!/^https?:\\/\\//i.test(href)) { continue; }
  var hhm = href.match(/^https?:\\/\\/([^\\/?#]+)/i);
  if (!hhm) { continue; }
  var lh = hhm[1].replace(/:\\d+$/, '').toLowerCase();
  if (lh === nu.host || lh === 'www.' + nu.host || nu.host === 'www.' + lh) { continue; }
  extLinks++;
  for (var ap = 0; ap < AUTH_PATTERNS.length; ap++) { if (AUTH_PATTERNS[ap].test(lh)) { authHosts[lh] = 1; break; } }
}
var authCount = Object.keys(authHosts).length;

var bylineHtml = /rel=["']author["']/i.test(html) || /class=["'][^"']*\\b(author|byline)\\b[^"']*["']/i.test(html) || !!metaContent('name', 'author');

var article = jinaRaw;
var mci = article.indexOf('Markdown Content:');
if (mci > -1 && mci < 500) { article = article.slice(mci + 17); }
var articleSource = 'Jina Reader';
if (article.replace(/\\s+/g, ' ').trim().length < 200) {
  articleSource = 'HTML fallback';
  var scope = htmlNoScript;
  var artMatch = html.match(/<article[\\s\\S]*?<\\/article>/i) || html.match(/<main[\\s\\S]*?<\\/main>/i);
  if (artMatch) { scope = artMatch[0].replace(/<script[\\s\\S]*?<\\/script>/gi, ' ').replace(/<style[\\s\\S]*?<\\/style>/gi, ' '); }
  article = scope
    .replace(/<h1\\b[^>]*>/gi, '\\n# ').replace(/<h2\\b[^>]*>/gi, '\\n## ').replace(/<h3\\b[^>]*>/gi, '\\n### ').replace(/<h4\\b[^>]*>/gi, '\\n#### ')
    .replace(/<\\/h[1-6]>/gi, '\\n').replace(/<li\\b[^>]*>/gi, '\\n- ').replace(/<\\/(p|div|section|tr)>/gi, '\\n\\n').replace(/<br[^>]*>/gi, '\\n')
    .replace(/<[^>]+>/g, ' ');
  article = decode(article).split('\\n').map(function (l) { return l.replace(/[ \\t]+/g, ' ').trim(); }).join('\\n').replace(/\\n{3,}/g, '\\n\\n');
} else {
  article = decode(article);
}

var fenceRe = new RegExp(BT + BT + BT + '[\\\\s\\\\S]*?' + BT + BT + BT, 'g');
var inlineCodeRe = new RegExp(BT + '[^' + BT + ']*' + BT, 'g');
var textForPatterns = article
  .replace(fenceRe, ' ')
  .replace(inlineCodeRe, ' ')
  .replace(/!\\[[^\\]]*\\]\\([^)]*\\)/g, ' ')
  .replace(/\\[([^\\]]+)\\]\\([^)]*\\)/g, '$1')
  .replace(/^#{1,6}[^\\n]*$/gm, ' ')
  .replace(/^\\s*[|][^\\n]*$/gm, ' ')
  .replace(/^[\\s]*[-*+]\\s+/gm, '')
  .replace(/[*_>]+/g, '')
  .replace(/[’‘]/g, "'")
  .replace(/[ \\t]+/g, ' ');

var textLower = textForPatterns.toLowerCase();
var sentences = textForPatterns.replace(/\\s+/g, ' ').split(/[.!?]+(?:\\s+|$)/g).filter(function (s) { return s && s.trim().length > 5; });
var sentenceCount = sentences.length || 1;
var corpus = textLower.replace(/[.,;:!?(){}\\[\\]"'\\u2014\\u2013]/g, ' ').replace(/\\s+/g, ' ').trim();
var wordsArray = corpus.split(' ').filter(function (w) { return /^[a-z]{2,}$/.test(w); });
var totalWords = wordsArray.length;
var per1kDiv = Math.max(totalWords, 1) / 1000;

if (totalWords < 80) {
  return [{ json: { ok: false, error: 'Only ' + totalWords + ' words of article text could be extracted \\u2014 not enough to score. The page may be behind JavaScript or a paywall.' } }];
}

var mdSections = [];
var secRe = /\\n##\\s+([^\\n]+)\\n([\\s\\S]*?)(?=\\n##\\s|$)/g;
var sm;
var mdForSections = '\\n' + article;
while ((sm = secRe.exec(mdForSections)) !== null) {
  var body = sm[2].trim();
  var wc = body ? body.replace(/\\s+/g, ' ').split(' ').length : 0;
  var firstPara = (body.split(/\\n\\s*\\n/)[0] || '').replace(/\\s+/g, ' ').trim();
  mdSections.push({ title: sm[1].trim(), words: wc, firstPara: firstPara });
}
var mdH2 = (article.match(/^##\\s+/gm) || []).length;
var mdH3 = (article.match(/^###\\s+/gm) || []).length;
var effH1 = h1c;
var effH2 = h2c || mdH2;
var effH3 = h3c || mdH3;
var subHeadTexts = headings.filter(function (x) { return x.level === 2 || x.level === 3; }).map(function (x) { return x.text; });
if (subHeadTexts.length === 0) { subHeadTexts = mdSections.map(function (s) { return s.title; }); }

var mdListItems = (article.match(/^\\s*([-*+]|\\d+\\.)\\s+\\S/gm) || []).length;
var mdTableRows = (article.match(/^\\s*\\|.*\\|\\s*$/gm) || []).length;
var htmlTables = cnt(/<table\\b/gi, html);
var htmlLis = cnt(/<li\\b/gi, html);
var effLis = (articleSource === 'Jina Reader') ? mdListItems : Math.max(htmlLis, mdListItems);

var statCount = cnt(/\\d+(?:\\.\\d+)?\\s?%/g, textForPatterns)
  + cnt(/[$\\u20AC\\u00A3\\u00A5]\\s?\\d[\\d,]*(?:\\.\\d+)?/g, textForPatterns)
  + cnt(/\\b\\d{1,3}(?:,\\d{3})+\\b/g, textForPatterns)
  + cnt(/\\b\\d+(?:\\.\\d+)?x\\b/gi, textForPatterns)
  + cnt(/\\b\\d+(?:\\.\\d+)?\\s(?:percent|million|billion|trillion)\\b/gi, textForPatterns)
  + cnt(/\\b\\d+\\s(?:out of|in)\\s\\d+\\b/gi, textForPatterns);
var statPer200 = r2(statCount / (totalWords / 200));

var quoteSignals = cnt(/according to [A-Z][a-zA-Z]+/g, textForPatterns)
  + cnt(/["\\u201C][^"\\u201D]{30,300}["\\u201D],?\\s*(?:said|says|explains|explained|notes|noted|argues|argued)/g, textForPatterns)
  + cnt(/\\b(?:said|says|explains|notes|argues)\\s+[A-Z][a-z]+\\s+[A-Z][a-z]+/g, textForPatterns)
  + cnt(/["\\u201D]\\s*[\\u2014\\u2013-]\\s*[A-Z][a-z]+/g, textForPatterns);

var now = new Date();
var curYear = now.getFullYear();
var mentionsCurYear = textForPatterns.indexOf(String(curYear)) > -1 || titleTag.indexOf(String(curYear)) > -1;
var mentionsPrevYear = textForPatterns.indexOf(String(curYear - 1)) > -1 || titleTag.indexOf(String(curYear - 1)) > -1;
var monthsAgo = -1;
if (dateModified) {
  var dmTs = Date.parse(dateModified);
  if (!isNaN(dmTs)) { monthsAgo = Math.max(0, Math.floor((now.getTime() - dmTs) / (30.44 * 86400000))); }
}
var tsMatch = htmlText.match(/\\b(?:last\\s+)?(?:updated|modified|reviewed)\\b[^.|]{0,40}?\\b(?:january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|oct|nov|dec)[a-z]*\\.?\\s+\\d{1,2}?,?\\s*\\d{4}/i) || htmlText.match(/\\bas of\\s+(?:january|february|march|april|may|june|july|august|september|october|november|december)\\s+\\d{4}/i) || htmlText.match(/\\b(?:last\\s+)?(?:updated|modified|reviewed)\\b[:\\s]{1,3}\\d{1,2}[\\/.\\-]\\d{1,2}[\\/.\\-]\\d{2,4}/i);

var robotsTxt = (robotsRes.statusCode === 200 && typeof robotsRes.body === 'string' && robotsRes.body.trim().charAt(0) !== '<') ? robotsRes.body : '';
var robotsFound = !!robotsTxt;
var AI_BOTS = [['GPTBot', 'gptbot'], ['OAI-SearchBot', 'oai-searchbot'], ['ChatGPT-User', 'chatgpt-user'], ['PerplexityBot', 'perplexitybot'], ['ClaudeBot', 'claudebot'], ['Anthropic-AI', 'anthropic-ai'], ['Google-Extended', 'google-extended'], ['CCBot', 'ccbot'], ['Bingbot', 'bingbot'], ['Amazonbot', 'amazonbot'], ['Meta-ExternalAgent', 'meta-externalagent']];
var groups = [];
if (robotsTxt) {
  var curGroup = null;
  var lastWasAgent = false;
  robotsTxt.split(/\\r?\\n/).forEach(function (line) {
    var cIdx = line.indexOf('#');
    if (cIdx > -1) { line = line.slice(0, cIdx); }
    line = line.trim();
    if (!line) { return; }
    var kv = line.match(/^([a-zA-Z-]+)\\s*:\\s*(.*)$/);
    if (!kv) { return; }
    var key = kv[1].toLowerCase();
    var val = kv[2].trim();
    if (key === 'user-agent') {
      if (!lastWasAgent) { curGroup = { agents: [], rules: [] }; groups.push(curGroup); }
      if (curGroup) { curGroup.agents.push(val.toLowerCase()); }
      lastWasAgent = true;
    } else {
      lastWasAgent = false;
      if ((key === 'disallow' || key === 'allow') && curGroup) { curGroup.rules.push({ allow: key === 'allow', path: val }); }
    }
  });
}
function botBlocked(botToken) {
  var specific = null;
  var wildcard = null;
  groups.forEach(function (g) {
    g.agents.forEach(function (a) {
      if (a === '*') { wildcard = wildcard || g; }
      else if (botToken.indexOf(a) > -1 || a.indexOf(botToken) > -1) { specific = specific || g; }
    });
  });
  var g = specific || wildcard;
  if (!g) { return false; }
  var blockAll = g.rules.some(function (rl) { return !rl.allow && rl.path === '/'; });
  var allowAll = g.rules.some(function (rl) { return rl.allow && (rl.path === '/' || rl.path === ''); });
  return blockAll && !allowAll;
}
var blockedBots = [];
if (robotsFound) { AI_BOTS.forEach(function (bpair) { if (botBlocked(bpair[1])) { blockedBots.push(bpair[0]); } }); }

var llmsOk = llmsRes.statusCode === 200 && typeof llmsRes.body === 'string' && llmsRes.body.trim().length > 20 && llmsRes.body.trim().charAt(0) !== '<';

var categories = [
  { id: 'answer', name: 'Answer Architecture', max: 25, score: 0, checks: [] },
  { id: 'machine', name: 'Machine-Readable Signals', max: 15, score: 0, checks: [] },
  { id: 'evidence', name: 'Evidence & Trust', max: 20, score: 0, checks: [] },
  { id: 'access', name: 'AI Crawler Access', max: 15, score: 0, checks: [] },
  { id: 'recency', name: 'Recency Signals', max: 10, score: 0, checks: [] },
  { id: 'voice', name: 'Human Voice', max: 15, score: 0, checks: [], patterns: [], diagnostics: [] }
];
function cat(id) { for (var i = 0; i < categories.length; i++) { if (categories[i].id === id) { return categories[i]; } } }
function addCheck(catId, id, label, points, max, comment, fixPrompt) {
  points = Math.max(0, Math.min(max, Math.round(points)));
  var status = points >= max ? 'pass' : (points > 0 ? 'warn' : 'fail');
  var c = cat(catId);
  c.score += points;
  c.checks.push({ id: id, label: label, points: points, max: max, status: status, comment: comment, fixPrompt: status === 'pass' ? undefined : fixPrompt });
}

var skeletonPts = 0;
var skeletonNotes = [];
if (effH1 === 1) { skeletonPts += 2; } else { skeletonNotes.push(effH1 === 0 ? 'no H1 found' : effH1 + ' H1 tags (should be exactly 1)'); }
if (effH2 >= 3) { skeletonPts += 2; } else { skeletonNotes.push('only ' + effH2 + ' H2 sections (aim for 3+)'); }
var skips = 0;
var prevLevel = 0;
headings.forEach(function (hh) { if (prevLevel > 0 && hh.level > prevLevel + 1) { skips++; } prevLevel = hh.level; });
if (headings.length === 0 || skips === 0) { skeletonPts += 1; } else { skeletonNotes.push(skips + ' heading level skips'); }
addCheck('answer', 'headingSkeleton', 'Heading skeleton (H1\\u2192H2\\u2192H3)', skeletonPts, 5,
  skeletonPts === 5 ? 'Found ' + effH1 + ' H1, ' + effH2 + ' H2, ' + effH3 + ' H3. Clean outline \\u2014 retrieval systems chunk this page correctly.' : 'Found ' + effH1 + ' H1, ' + effH2 + ' H2, ' + effH3 + ' H3. Problems: ' + skeletonNotes.join('; ') + '.',
  'Restructure headings: exactly one H1, at least 3 H2 sections, H3 only nested under H2, no level skips.');

var qHeads = subHeadTexts.filter(function (t) { return /\\?\\s*$/.test(t) || /^(how|what|why|when|where|which|who|can|should|is|are|do|does|will)\\b/i.test(t); }).length;
var qPct = subHeadTexts.length ? Math.round(qHeads / subHeadTexts.length * 100) : 0;
addCheck('answer', 'questionHeadings', 'Question-phrased subheadings', qPct >= 25 ? 3 : (qPct >= 10 ? 2 : (qHeads > 0 ? 1 : 0)), 3,
  qHeads + ' of ' + subHeadTexts.length + ' subheadings (' + qPct + '%) are phrased as questions. ' + (qPct >= 25 ? 'Strong match with how people query AI assistants.' : 'AI answers map best to headings that mirror real questions \\u2014 target 25%+.'),
  'Rephrase at least a quarter of H2/H3 headings as natural questions users would ask an AI assistant.');

var listPts = (htmlTables > 0 || mdTableRows >= 3) ? 2 : 0;
listPts += effLis >= 5 ? 2 : (effLis > 0 ? 1 : 0);
addCheck('answer', 'liftableBlocks', 'Liftable blocks (tables & lists)', listPts, 4,
  (htmlTables > 0 || mdTableRows >= 3 ? 'Table \\u2713' : 'No tables') + ' \\u00B7 ' + effLis + ' list items. ' + (listPts >= 4 ? 'AI engines quote tables and lists verbatim \\u2014 good.' : 'Tables and bullet lists are the most-extracted blocks in AI answers.'),
  'Add at least one comparison table and one 5+ item bulleted list summarizing key facts.');

var secWords = mdSections.map(function (s) { return s.words; }).filter(function (w) { return w > 0; });
var avgSec = secWords.length ? Math.round(secWords.reduce(function (a, b) { return a + b; }, 0) / secWords.length) : 0;
var secPts = 0;
if (avgSec >= 75 && avgSec <= 300) { secPts = 4; } else if ((avgSec >= 40 && avgSec < 75) || (avgSec > 300 && avgSec <= 450)) { secPts = 2; } else if (avgSec > 0) { secPts = 1; }
addCheck('answer', 'passageSizing', 'Passage sizing (75\\u2013300 words/section)', secPts, 4,
  secWords.length ? 'Average ' + avgSec + ' words across ' + secWords.length + ' sections. ' + (secPts === 4 ? 'Ideal for passage-level retrieval.' : (avgSec < 75 ? 'Sections are thin \\u2014 too little context per chunk.' : 'Sections are walls of text \\u2014 they exceed typical retrieval chunks.')) : 'No H2 sections detected to measure.',
  'Resize sections so each H2 block carries 75\\u2013300 words: split walls of text, merge stubs.');

var directSecs = mdSections.filter(function (s) {
  if (!s.firstPara || s.firstPara.indexOf('![') === 0) { return false; }
  var fw = s.firstPara.split(' ').length;
  if (fw < 8 || fw > 65) { return false; }
  return !/^(in today|when it comes|before we|let's|as we|in this section|now that)/i.test(s.firstPara);
}).length;
var directShare = mdSections.length ? directSecs / mdSections.length : 0;
addCheck('answer', 'answerFirstOpeners', 'Answer-first section openers', directShare >= 0.7 ? 5 : (directShare >= 0.4 ? 3 : (directSecs > 0 ? 1 : 0)), 5,
  mdSections.length ? directSecs + ' of ' + mdSections.length + ' sections open with a compact direct answer (\\u226465 words). ' + (directShare >= 0.7 ? 'Engines can quote your openers as-is.' : 'AI engines prefer sections that answer first, then elaborate.') : 'No sections detected to evaluate.',
  'Open every H2 section with a 1\\u20132 sentence direct answer (under 50 words) before any buildup.');

var faqHeading = subHeadTexts.some(function (t) { return /faq|frequently asked|common questions|q\\s*&\\s*a/i.test(t); });
addCheck('answer', 'qaCoverage', 'Q&A coverage (FAQ block)', hasType('FAQPage') ? 4 : (faqHeading ? 2 : 0), 4,
  hasType('FAQPage') ? 'FAQPage schema detected \\u2014 pages with FAQ markup get cited roughly 2.7\\u00D7 more often.' : (faqHeading ? 'FAQ section found in headings, but no FAQPage schema to make it machine-readable.' : 'No FAQ section or FAQPage schema found.'),
  'Add an FAQ section with 5+ real user questions and mark it up with FAQPage JSON-LD.');

addCheck('machine', 'structuredCore', 'Structured data present', ldBlocks > 0 && typeList.length > 0 ? 3 : (ldBlocks > 0 ? 1 : 0), 3,
  ldBlocks > 0 ? ldBlocks + ' JSON-LD block(s): ' + (typeList.slice(0, 6).join(', ') || 'unparseable') + '.' : 'No JSON-LD structured data \\u2014 the page is invisible to entity-based retrieval.',
  'Add JSON-LD structured data: at minimum Article + Organization with sameAs links.');

var artPts = (articleNode ? 2 : 0) + (dateModified ? 1 : 0) + ((ldAuthorName || (articleNode && articleNode.author)) ? 1 : 0);
addCheck('machine', 'articleIdentity', 'Article schema with date & author', artPts, 4,
  articleNode ? 'Article schema \\u2713' + (dateModified ? ' \\u00B7 dateModified \\u2713' : ' \\u00B7 dateModified missing') + (ldAuthorName ? ' \\u00B7 author: ' + ldAuthorName : ' \\u00B7 author missing') : 'No Article/BlogPosting schema found.',
  'Add Article JSON-LD with headline, author (Person), datePublished and dateModified.');

addCheck('machine', 'qaSchema', 'Q&A / HowTo schema', hasType('FAQPage') ? 3 : ((hasType('HowTo') || hasType('QAPage')) ? 2 : 0), 3,
  hasType('FAQPage') ? 'FAQPage schema \\u2713' : (hasType('HowTo') ? 'HowTo schema \\u2713 (add FAQPage for full points)' : (hasType('QAPage') ? 'QAPage schema \\u2713' : 'No FAQPage, QAPage or HowTo schema.')),
  'Add FAQPage (or HowTo) JSON-LD that mirrors visible Q&A content on the page.');

var entPts = (hasType('Person') ? 1 : 0) + (hasType('Organization') ? 1 : 0);
if (entPts === 2) { entPts = 3; }
addCheck('machine', 'entityAnchors', 'Entity anchors (Person / Organization)', entPts, 3,
  entPts >= 3 ? 'Person \\u2713 and Organization \\u2713 \\u2014 both entity types anchored.' : (hasType('Person') ? 'Person \\u2713, Organization missing.' : (hasType('Organization') ? 'Organization \\u2713, Person missing.' : 'No Person or Organization schema \\u2014 no entity for AI to attribute.')),
  'Add Person schema for the author and Organization schema for the brand, both with sameAs profile links.');

addCheck('machine', 'wayfindingSchema', 'Wayfinding schema (Breadcrumb / ItemList)', (hasType('BreadcrumbList') ? 1 : 0) + (hasType('ItemList') ? 1 : 0), 2,
  (hasType('BreadcrumbList') ? 'BreadcrumbList \\u2713 ' : 'BreadcrumbList missing ') + '\\u00B7 ' + (hasType('ItemList') ? 'ItemList \\u2713' : 'ItemList missing'),
  'Add BreadcrumbList JSON-LD; for listicles also add ItemList naming each item.');

addCheck('evidence', 'numbersDensity', 'Hard numbers density', statPer200 >= 1 ? 5 : (statPer200 >= 0.5 ? 3 : (statCount > 0 ? 1 : 0)), 5,
  statCount + ' statistics in ' + totalWords + ' words (' + statPer200 + ' per 200 words). ' + (statPer200 >= 1 ? 'Princeton GEO research: statistics lift AI visibility ~41%.' : 'Target \\u22651 stat per 200 words \\u2014 numbers are what AI answers quote.'),
  'Weave one concrete statistic (with source) into every 150\\u2013200 words of copy.');

addCheck('evidence', 'primarySources', 'Primary-source citations', authCount >= 3 ? 5 : (authCount === 2 ? 3 : (authCount === 1 ? 2 : 0)), 5,
  authCount + ' authoritative outbound domains of ' + extLinks + ' external links' + (authCount ? ' (' + Object.keys(authHosts).slice(0, 3).join(', ') + ')' : '') + '. ' + (authCount >= 3 ? 'Strong trust graph.' : 'Linking .gov/.edu/journals/major press lifts visibility 30\\u201340%.'),
  'Cite at least 3 primary sources: .gov, .edu, peer-reviewed journals, Wikipedia or major publications.');

addCheck('evidence', 'expertVoices', 'Expert voices & quotes', quoteSignals >= 2 ? 3 : (quoteSignals === 1 ? 1 : 0), 3,
  quoteSignals >= 2 ? quoteSignals + ' attributed quotes/expert references found. Quotation adds ~28% visibility (Princeton GEO).' : (quoteSignals === 1 ? 'Only 1 attributed quote found \\u2014 add one or two more named experts.' : 'No expert quotes or named attributions detected.'),
  'Add 2\\u20133 quotes from named experts with title and affiliation, in quotation marks with attribution.');

var authorPts = (bylineHtml ? 2 : 0) + (ldAuthorName ? 2 : 0);
addCheck('evidence', 'namedAuthor', 'Named author & byline', authorPts, 4,
  authorPts === 4 ? 'Visible byline \\u2713 and author schema (' + ldAuthorName + ') \\u2713.' : (bylineHtml ? 'Visible byline found, but no author in schema.' : (ldAuthorName ? 'Author in schema (' + ldAuthorName + '), but no visible byline markup.' : 'No byline or author schema \\u2014 anonymous content earns less trust.')),
  'Add a visible author byline with credentials, matched by Person author markup in Article schema.');

addCheck('evidence', 'topicDepth', 'Topic depth (word count)', totalWords >= 2000 ? 3 : (totalWords >= 1200 ? 2 : (totalWords >= 600 ? 1 : 0)), 3,
  totalWords + ' words. ' + (totalWords >= 2000 ? 'Strong topical depth.' : (totalWords >= 1200 ? 'Decent depth \\u2014 2,000+ words correlates with more citations.' : 'Thin coverage \\u2014 AI engines prefer comprehensive pages.')),
  'Expand the article to 1,500\\u20132,000+ words of substantive, non-padded coverage.');

var botPts;
var botComment;
if (!robotsFound) {
  botPts = 4;
  botComment = 'No robots.txt found \\u2014 crawlers default to full access, but an explicit file is safer.';
} else if (blockedBots.length === 0) {
  botPts = 5;
  botComment = 'robots.txt allows all ' + AI_BOTS.length + ' AI crawlers checked (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot\\u2026).';
} else if (blockedBots.length <= 2) {
  botPts = 2;
  botComment = 'Blocked: ' + blockedBots.join(', ') + '. Every blocked crawler is an AI engine that cannot cite you.';
} else {
  botPts = 0;
  botComment = blockedBots.length + ' AI crawlers blocked (' + blockedBots.join(', ') + ') \\u2014 this page is invisible to those engines regardless of content quality.';
}
addCheck('access', 'botDoorPolicy', 'AI crawler door policy (robots.txt)', botPts, 5, botComment,
  'Update robots.txt to allow GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot and Bingbot.');

addCheck('access', 'llmsManifest', 'llms.txt manifest', llmsOk ? 2 : 0, 2,
  llmsOk ? 'llms.txt found at the domain root.' : 'No llms.txt \\u2014 an emerging standard that hands AI crawlers a curated content map.',
  'Publish /llms.txt at the domain root: a short markdown index of your most important pages.');

addCheck('access', 'payloadWeight', 'Payload weight', htmlKB < 1024 ? 3 : (htmlKB < 2048 ? 1 : 0), 3,
  'HTML is ' + (htmlKB >= 1024 ? r2(htmlKB / 1024) + ' MB' : htmlKB + ' KB') + (fetchMode === 'direct' ? '' : ' (rendered DOM size \\u2014 origin blocked direct fetching)') + '. ' + (htmlKB < 1024 ? 'Under the 1 MB crawl-budget target.' : 'Over 1 MB \\u2014 AI crawlers truncate or skip heavy pages.'),
  'Cut HTML under 1 MB: defer non-critical scripts, remove inline SVG bloat, lazy-load embeds.');

if (fetchMode === 'direct') {
  var ssrOk = htmlWords >= 250 && (totalWords === 0 || htmlWords >= totalWords * 0.5);
  addCheck('access', 'serverRenderedText', 'Server-rendered article text', ssrOk ? 3 : (htmlWords >= 100 ? 1 : 0), 3,
    htmlWords + ' words visible in raw HTML vs ' + totalWords + ' words extracted. ' + (ssrOk ? 'Content is server-rendered \\u2014 crawlable without JavaScript.' : 'Most content appears only after JavaScript runs \\u2014 many AI crawlers never see it.'),
    'Server-render (SSR/SSG) the article body \\u2014 most AI crawlers do not execute JavaScript.');
} else {
  addCheck('access', 'serverRenderedText', 'Server-rendered article text', 2, 3,
    'Origin blocked direct fetching (HTTP ' + pageStatus + '), so content was measured on a browser-rendered copy \\u2014 raw server-side rendering could not be verified. Note: a hard bot wall can also block AI crawlers themselves.',
    'Allow reputable crawlers through the bot protection (Cloudflare: verified-bots allowlist) and server-render the article body.');
}

var hygienePts = (titleTag.length >= 15 && titleTag.length <= 70 ? 0.5 : 0) + (metaDesc ? 0.5 : 0) + (hasCanonical ? 0.5 : 0) + (langAttr ? 0.5 : 0);
addCheck('access', 'metaHygiene', 'Meta hygiene', Math.round(hygienePts), 2,
  'Title ' + (titleTag ? titleTag.length + ' chars' : 'missing') + ' \\u00B7 description ' + (metaDesc ? '\\u2713' : '\\u2717') + ' \\u00B7 canonical ' + (hasCanonical ? '\\u2713' : '\\u2717') + ' \\u00B7 lang ' + (langAttr ? '"' + langAttr + '"' : '\\u2717'),
  'Fix the basics: 15\\u201370 char title, meta description, canonical link, html lang attribute.');

addCheck('recency', 'freshModified', 'Fresh dateModified', monthsAgo === -1 ? 0 : (monthsAgo <= 3 ? 4 : (monthsAgo <= 12 ? 3 : (monthsAgo <= 24 ? 1 : 0))), 4,
  monthsAgo === -1 ? 'No dateModified in schema or meta tags \\u2014 engines cannot verify freshness.' : 'Updated ' + monthsAgo + ' month(s) ago per structured data. ' + (monthsAgo <= 12 ? 'Within the 12-month citation sweet spot.' : 'Stale \\u2014 most cited pages are updated within 12 months.'),
  'Refresh the content and update dateModified in Article schema (and article:modified_time meta).');

addCheck('recency', 'visibleTimestamp', 'Visible "last updated" stamp', tsMatch ? 3 : 0, 3,
  tsMatch ? 'Found: "' + tsMatch[0].trim().slice(0, 60) + '"' : 'No visible update timestamp \\u2014 both readers and engines look for one near the top.',
  'Display a visible "Last updated: [Month Year]" line near the top of the article.');

addCheck('recency', 'currentYearAnchor', 'Current-year anchor', mentionsCurYear ? 3 : (mentionsPrevYear ? 2 : 0), 3,
  mentionsCurYear ? String(curYear) + ' referenced in the content \\u2014 signals up-to-date coverage.' : (mentionsPrevYear ? 'Only ' + (curYear - 1) + ' referenced \\u2014 bump key mentions to ' + curYear + '.' : 'No recent year referenced anywhere in the copy.'),
  'Reference ' + curYear + ' naturally in the title, headings or body where the content is current.');

var wordFreq = {};
wordsArray.forEach(function (w) { wordFreq[w] = (wordFreq[w] || 0) + 1; });
var uniqueWords = Object.keys(wordFreq);
var ttr = uniqueWords.length / totalWords;
var hapax = uniqueWords.filter(function (w) { return wordFreq[w] === 1; }).length;
var hapaxRatio = hapax / totalWords;

var sentLengths = sentences.map(function (s) { return s.trim().split(/\\s+/).length; });
var avgSentLen = sentLengths.reduce(function (a, b) { return a + b; }, 0) / sentLengths.length;
var sentVariance = sentLengths.reduce(function (a, b) { return a + Math.pow(b - avgSentLen, 2); }, 0) / sentLengths.length;
var burstiness = Math.sqrt(sentVariance);

var paragraphs = textForPatterns.split(/\\n\\s*\\n/).map(function (p) { return p.trim(); }).filter(function (p) { return p.length > 20; });
var paraLengths = paragraphs.map(function (p) { return p.split(/\\s+/).length; });
var avgParaLen = paraLengths.length ? paraLengths.reduce(function (a, b) { return a + b; }, 0) / paraLengths.length : 0;

var bigrams = {};
for (var bi = 0; bi < wordsArray.length - 1; bi++) { var bg = wordsArray[bi] + ' ' + wordsArray[bi + 1]; bigrams[bg] = (bigrams[bg] || 0) + 1; }
var repeatedBigrams = Object.keys(bigrams).filter(function (k) { return bigrams[k] > 2; }).length;
var trigrams = {};
for (var ti = 0; ti < wordsArray.length - 2; ti++) { var tg = wordsArray[ti] + ' ' + wordsArray[ti + 1] + ' ' + wordsArray[ti + 2]; trigrams[tg] = (trigrams[tg] || 0) + 1; }
var TRI_STOP = {};
'the a an of to in for on with and or but is are was were be been this that these those it its as at by from your you we our their there what how why can will more most other some any all not no one two how into over about'.split(' ').forEach(function (w) { TRI_STOP[w] = 1; });
var repTriKeys = Object.keys(trigrams).filter(function (k) { return trigrams[k] > 2 && k.split(' ').some(function (w) { return w.length >= 5 && !TRI_STOP[w]; }); });
var topTri = repTriKeys.sort(function (a, b) { return trigrams[b] - trigrams[a]; })[0] || '';

var firstWords = sentences.map(function (s) { return (s.trim().split(/\\s+/)[0] || '').toLowerCase().replace(/[^a-z']/g, ''); });
var fwUniq = {};
firstWords.forEach(function (w) { fwUniq[w] = 1; });
var openerVariety = firstWords.length ? Object.keys(fwUniq).length / firstWords.length : 0;
var AI_OPENERS = ['the', 'this', 'these', 'it', 'in', 'when', 'as', 'for', 'by'];
var aiOpenerPct = firstWords.length ? Math.round(firstWords.filter(function (w) { return AI_OPENERS.indexOf(w) > -1; }).length / firstWords.length * 100) : 0;

var connContrast = 0;
['however', 'although', 'though', 'nevertheless', 'nonetheless', 'on the other hand', 'in contrast', 'conversely', 'whereas'].forEach(function (t) { connContrast += cnt(new RegExp('\\\\b' + esc(t) + '\\\\b', 'gi'), textLower); });
var connCause = 0;
['because', 'since', 'therefore', 'thus', 'consequently', 'as a result', 'hence'].forEach(function (t) { connCause += cnt(new RegExp('\\\\b' + esc(t) + '\\\\b', 'gi'), textLower); });

var NOM_SUFFIX = ['tion', 'sion', 'ment', 'ness', 'ity', 'ance', 'ence'];
var nomCount = wordsArray.filter(function (w) { return w.length > 6 && NOM_SUFFIX.some(function (sx) { return w.slice(-sx.length) === sx; }); }).length;
var nomRatio = nomCount / totalWords;

var SUBORD = ['because', 'although', 'though', 'even though', 'while', 'whereas', 'since', 'unless', 'until', 'before', 'after', 'when', 'whenever', 'if', 'whether', 'so that', 'once', 'now that', 'rather than', 'as long as', 'as soon as', 'even if', 'in case'];
var clausesPer = sentences.map(function (sent) {
  var cl = 1;
  var sl = sent.toLowerCase();
  for (var ci = 0; ci < SUBORD.length; ci++) { if (new RegExp('\\\\b' + esc(SUBORD[ci]) + '\\\\b').test(sl)) { cl++; break; } }
  if (/\\b(who|whom|whose|which|that)\\b/.test(sl)) { cl++; }
  cl += cnt(/,\\s+(?:and|but|or|nor|so|yet)\\s+/gi, sent);
  return cl;
});
var singleClausePct = Math.round(clausesPer.filter(function (c) { return c === 1; }).length / sentenceCount * 100);
var complexPct = Math.round(clausesPer.filter(function (c) { return c >= 2; }).length / sentenceCount * 100);

var PRESENT = ['is', 'are', 'has', 'have', 'do', 'does', 'know', 'think', 'see', 'say', 'make', 'get', 'go', 'take', 'use', 'find', 'give', 'need', 'seem', 'help', 'work', 'include', 'create', 'provide', 'allow', 'require', 'improve', 'increase', 'reduce', 'ensure', 'learn', 'follow', 'check', 'measure', 'track', 'analyze', 'optimize'];
var PAST = ['was', 'were', 'had', 'did', 'got', 'went', 'came', 'took', 'made', 'said', 'gave', 'found', 'used', 'saw', 'created', 'provided', 'allowed', 'required', 'improved', 'increased', 'reduced', 'learned', 'followed', 'checked', 'measured', 'tracked', 'analyzed', 'showed', 'worked'];
var presC = 0, pastC = 0;
wordsArray.forEach(function (w) { if (PRESENT.indexOf(w) > -1) { presC++; } else if (PAST.indexOf(w) > -1) { pastC++; } });
var futC = cnt(/\\b(?:will|shall|going to)\\b/gi, textLower);
var totVerbs = Math.max(presC + pastC + futC, 1);
var tensePct = Math.round(Math.max(presC, pastC, futC) / totVerbs * 100);

function pcList(list) {
  var total = 0;
  var found = {};
  list.forEach(function (p) {
    var re = new RegExp('\\\\b' + esc(p).replace(/\\s+/g, '\\\\s+') + '\\\\b', 'gi');
    var c = cnt(re, textLower);
    if (c > 0) { total += c; found[p] = c; }
  });
  return { n: total, found: found };
}
function topFound(found, k) {
  return Object.keys(found).sort(function (a, b) { return found[b] - found[a]; }).slice(0, k).map(function (w) { return '"' + w + '"'; }).join(', ');
}
var patterns = [];
var idxNum = 0, idxDen = 0;
function addPattern(id, label, count, rate, t1, t2, weight, comments, data) {
  var sev = rate <= t1 ? 0 : (rate <= t2 ? 1 : 2);
  idxNum += weight * sev;
  idxDen += weight * 2;
  var st = sev === 0 ? 'clean' : (sev === 1 ? 'notable' : 'heavy');
  data = data || {};
  data.n = count;
  data.rate = r1(rate);
  patterns.push({ id: id, label: label, count: count, per1k: r1(rate), status: st, comment: fill(comments[sev], data) });
  return sev;
}

var npCount = cnt(/\\b(?:not just|not only|not merely|not simply|isn't just|isn't about|isn't merely|it's not about|more than just)\\b/gi, textLower);
addPattern('negativeParallelisms', 'Negative parallelisms', npCount, npCount / per1kDiv, 0.3, 1.0, 1.5, [
  'No "not just X \\u2014 it\\u2019s Y" constructions. Reads like a person wrote it.',
  '{n} negative-parallelism constructions ({rate}/1k words). One or two is natural; LLMs lean on this move.',
  '{n} "not just X, it\\u2019s Y" constructions ({rate}/1k words) \\u2014 a top-3 LLM fingerprint. Rewrite as direct statements.'
]);

var tnCount = cnt(/,\\s*not\\s+[a-z][^.!?\\n]{0,50}[.!?]/g, textLower) + cnt(/\\s[\\u2014\\u2013-]\\s*not\\s+[^.!?\\n]{0,50}[.!?]/g, textLower);
addPattern('tailingNegations', 'Tailing negations', tnCount, tnCount / per1kDiv, 0.3, 1.0, 1, [
  'No trailing ", not X" corrections \\u2014 sentences commit to their point.',
  '{n} sentences end on a ", not X" correction ({rate}/1k words). Sparse use is fine.',
  '{n} trailing negations ({rate}/1k words) \\u2014 the "X, not Y" sentence-ender is a strong AI tell. State the positive claim only.'
]);

var aiVocab = pcList(['delve', 'delves', 'delving', 'tapestry', 'pivotal', 'foster', 'fostering', 'robust', 'vibrant', 'testament', 'underscore', 'underscores', 'underscoring', 'embark', 'embarking', 'unleash', 'unlock the', 'harness the', 'holistic', 'synergy', 'paradigm', 'transformative', 'groundbreaking', 'meticulously', 'intricate', 'myriad', 'plethora', 'beacon', 'bustling', 'ever-evolving', 'ever-changing', 'digital landscape', 'crucial role', 'deep dive', 'dive into', 'in essence', 'moreover', 'furthermore', 'leverage', 'leveraging']);
addPattern('aiVocabulary', 'AI-flag vocabulary', aiVocab.n, aiVocab.n / per1kDiv, 1.5, 4, 2, [
  '{n} AI-flag words in {words} words \\u2014 vocabulary looks human.',
  '{n} AI-flag words ({top}) at {rate}/1k words. Human web copy averages ~1/1k \\u2014 trim the worst offenders.',
  '{n} AI-flag words ({top}) at {rate}/1k words \\u2014 3\\u00D7+ the human baseline. Swap for plain, specific verbs.'
], { top: topFound(aiVocab.found, 3), words: totalWords });

var triadCount = cnt(/\\b[a-z]+, [a-z]+, and [a-z]+\\b/g, textLower);
addPattern('threeRule', 'Rule-of-three triads', triadCount, triadCount / per1kDiv, 1.5, 3.5, 1, [
  '{n} "X, Y, and Z" triads ({rate}/1k words) \\u2014 normal range.',
  '{n} three-part lists ({rate}/1k words). LLMs default to threes \\u2014 vary with 2- and 4-item lists.',
  '{n} triads ({rate}/1k words) \\u2014 rhythmic three-part lists dominate the prose. Break the pattern.'
]);

var signpost = pcList(["it's important to note", 'it is important to note', "it's worth noting", 'it is worth noting', 'worth mentioning', 'keep in mind', "let's dive", "let's explore", "let's take a look", 'in this article', 'in this guide', 'in this post', 'in conclusion', 'in summary', 'to sum up', 'when it comes to', 'in the world of', "in today's", 'at the end of the day', 'without further ado', 'first and foremost', 'as mentioned earlier', "as we've seen", "now that we've", 'before we dive']);
addPattern('signpostingFiller', 'Signposting filler', signpost.n, signpost.n / per1kDiv, 0.8, 2, 1.5, [
  'No filler signposts ("it\\u2019s important to note", "in conclusion"\\u2026). Every sentence earns its place.',
  '{n} filler signposts ({top}) \\u2014 {rate}/1k words. Cut them; they add zero information.',
  '{n} filler signposts ({top}) at {rate}/1k words \\u2014 classic AI padding. Delete every one; the text loses nothing.'
], { top: topFound(signpost.found, 3) });

var vague = pcList(['experts say', 'experts agree', 'experts believe', 'studies show', 'studies suggest', 'research shows', 'research suggests', 'research indicates', 'many believe', 'some argue', 'some say', 'it is widely', 'widely regarded', 'widely considered', 'industry leaders', 'professionals agree', 'scientists say', 'evidence suggests', 'data shows', 'reports indicate']);
addPattern('vagueAttributions', 'Vague attributions', vague.n, vague.n / per1kDiv, 0.4, 1.2, 1, [
  'No unsourced "experts say / studies show" claims.',
  '{n} vague attributions ({top}) \\u2014 {rate}/1k words. Name the study or the expert, with a link.',
  '{n} unsourced claims ({top}) at {rate}/1k words \\u2014 AI engines treat these as empty. Replace each with a named, linked source.'
], { top: topFound(vague.found, 3) });

var youCount = cnt(/\\byou\\b|\\byour\\b|\\byou're\\b|\\byours\\b/g, textLower);
var youRate = youCount / per1kDiv;
addPattern('addressPerspectiveLock', 'Second-person lock', youCount, youRate, 20, 40, 0.5, [
  '"You/your" density {rate}/1k words \\u2014 balanced address.',
  '"You/your" appears {n} times ({rate}/1k words) \\u2014 leaning on direct address. Mix in named examples and first-person experience.',
  'Locked in second person: {n} "you/your" ({rate}/1k words). Relentless "you" is an AI-brief fingerprint \\u2014 vary the perspective.'
]);

var copula = pcList(['serves as', 'acts as', 'functions as', 'stands as', 'represents a', 'boasts', 'epitomizes', 'embodies', 'showcases', 'exemplifies', 'is home to', 'is renowned for']);
addPattern('copulaSubstitutes', 'Copula substitutes', copula.n, copula.n / per1kDiv, 0.8, 2, 1, [
  'Plain "is/are" doing its job \\u2014 no dressed-up copulas.',
  '{n} dressed-up "is" substitutes ({top}) \\u2014 {rate}/1k words. "Serves as" is never better than "is".',
  '{n} copula substitutes ({top}) at {rate}/1k words \\u2014 textbook AI elevation. Change them all back to "is/are/has".'
], { top: topFound(copula.found, 3) });

var intens = pcList(['very', 'truly', 'incredibly', 'extremely', 'remarkably', 'exceptionally', 'significantly', 'highly', 'absolutely', 'genuinely', 'undeniably', 'undoubtedly', 'certainly', 'definitely', 'profoundly', 'immensely']);
addPattern('intensifiers', 'Empty intensifiers', intens.n, intens.n / per1kDiv, 3, 7, 1, [
  '{n} intensifiers in {words} words \\u2014 restrained, credible tone.',
  '{n} intensifiers ({top}) at {rate}/1k words. Each one weakens the claim it decorates \\u2014 replace with data.',
  '{n} intensifiers ({top}) at {rate}/1k words \\u2014 the copy is shouting. Cut them and let numbers do the emphasis.'
], { top: topFound(intens.found, 3), words: totalWords });

var ingOpeners = sentences.filter(function (s) { var fw = (s.trim().split(/\\s+/)[0] || '').toLowerCase(); return fw.length > 5 && /^[a-z]+ing$/.test(fw); }).length;
var ingPct = Math.round(ingOpeners / sentenceCount * 100);
addPattern('ingPileups', 'Participial pile-ups', ingOpeners, ingPct, 8, 18, 1, [
  '{n} sentences open with an "-ing" phrase ({rate}% of sentences) \\u2014 healthy variety.',
  '{n} sentences ({rate}%) open with "-ing" participial phrases ("Ensuring\\u2026", "Leveraging\\u2026"). AI drafts stack these \\u2014 rewrite half as subject-first sentences.',
  '{n} sentences ({rate}%) open with "-ing" phrases \\u2014 a monotone AI cadence. Rewrite them subject-first.'
]);

var sigInf = pcList(['plays a vital role', 'plays a crucial role', 'plays a key role', 'plays an important role', 'is essential for', 'is crucial for', 'is critical for', 'cannot be overstated', 'is a cornerstone', 'stands as a testament', 'testament to', 'vital importance', 'paramount', 'instrumental in', 'integral part', 'cornerstone of', 'at the heart of']);
addPattern('significanceInflation', 'Significance inflation', sigInf.n, sigInf.n / per1kDiv, 0.5, 1.5, 1.5, [
  'No unearned importance claims \\u2014 significance is shown, not asserted.',
  '{n} importance-inflation phrases ({top}) \\u2014 {rate}/1k words. Prove importance with a number instead.',
  '{n} inflation phrases ({top}) at {rate}/1k words \\u2014 "plays a vital role" is AI\\u2019s favorite empty claim. Replace each with evidence.'
], { top: topFound(sigInf.found, 2) });

var hedges = pcList(['often', 'typically', 'generally', 'usually', 'potentially', 'arguably', 'tends to', 'tend to', 'can help', 'may help', 'might help', 'could help', 'in many cases', 'in some cases', 'to some extent', 'relatively', 'somewhat']);
addPattern('hedging', 'Hedging', hedges.n, hedges.n / per1kDiv, 4, 9, 1, [
  '{n} hedges in {words} words \\u2014 the text commits to its claims.',
  '{n} hedges ({top}) at {rate}/1k words. Some caution is fine; this much reads as machine risk-aversion.',
  '{n} hedges ({top}) at {rate}/1k words \\u2014 nearly every claim is softened. Commit, or cite data that lets you commit.'
], { top: topFound(hedges.found, 3), words: totalWords });

var semiCount = cnt(/;/g, textForPatterns);
addPattern('semicolons', 'Semicolon rate', semiCount, semiCount / per1kDiv, 1.5, 4, 0.5, [
  '{n} semicolons ({rate}/1k words) \\u2014 normal for web copy.',
  '{n} semicolons ({rate}/1k words). Human web writing averages under 1/1k \\u2014 swap most for periods.',
  '{n} semicolons ({rate}/1k words) \\u2014 well above human web baseline; a known LLM habit. Use full stops.'
]);

var dashCount = cnt(/[\\u2014\\u2013]/g, textForPatterns);
addPattern('emDashes', 'Em-dash rate', dashCount, dashCount / per1kDiv, 3, 7, 1, [
  '{n} em/en dashes ({rate}/1k words) \\u2014 within human range.',
  '{n} em/en dashes ({rate}/1k words). Above ~3/1k starts reading as ChatGPT house style.',
  '{n} em/en dashes ({rate}/1k words) \\u2014 signature LLM punctuation density. Replace most with commas or periods.'
]);

var salesy = pcList(['cutting-edge', 'revolutionary', 'revolutionize', 'supercharge', 'skyrocket', 'effortless', 'effortlessly', 'seamless', 'seamlessly', 'best-in-class', 'world-class', 'next-level', 'must-have', 'game-changer', 'game-changing', 'unrivaled', 'unparalleled', 'state-of-the-art', 'turbocharge', 'empower your', 'transform your', 'elevate your', 'boost your']);
addPattern('salesyLanguage', 'Salesy language', salesy.n, salesy.n / per1kDiv, 1, 2.5, 1, [
  'No hype vocabulary \\u2014 the copy sells with substance.',
  '{n} hype terms ({top}) at {rate}/1k words. AI engines systematically prefer neutral, informational tone.',
  '{n} hype terms ({top}) at {rate}/1k words \\u2014 reads as promo copy. Engines rarely cite pages that sound like ads.'
], { top: topFound(salesy.found, 3) });

var repTriRate = repTriKeys.length / per1kDiv;
addPattern('repeatedArguments', 'Repeated arguments', repTriKeys.length, repTriRate, 4, 10, 1, [
  '{n} repeated 3-word phrases \\u2014 each point is made once.',
  '{n} three-word phrases repeat ({top}\\u00D7 for the worst). Repetition signals template writing \\u2014 consolidate duplicate points.',
  '{n} repeated 3-word phrases (worst: "{tri}" \\u00D7{top}) \\u2014 the article circles the same arguments. Merge and cut.'
], { top: topTri ? trigrams[topTri] : 0, tri: topTri });

var voiceIdx = idxDen > 0 ? idxNum / idxDen : 0;
var voiceScore = Math.round(15 * (1 - voiceIdx));
var heavyPatterns = patterns.filter(function (p) { return p.status === 'heavy'; });
var notablePatterns = patterns.filter(function (p) { return p.status === 'notable'; });
var vc = cat('voice');
vc.score = voiceScore;
vc.patterns = patterns;
vc.summary = heavyPatterns.length === 0 && notablePatterns.length <= 2
  ? 'Human-sounding: ' + patterns.filter(function (p) { return p.status === 'clean'; }).length + ' of 16 detectors clean. AI engines and readers both reward this.'
  : heavyPatterns.length + ' heavy and ' + notablePatterns.length + ' notable AI-writing fingerprints detected across 16 detectors.';
if (heavyPatterns.length > 0 || notablePatterns.length > 2) {
  vc.fixPrompt = 'Rewrite the article to remove AI-writing patterns while preserving all facts and structure. Specifically fix: ' + heavyPatterns.concat(notablePatterns).map(function (p) { return p.label.toLowerCase() + ' (' + p.count + ' found)'; }).join(', ') + '. Vary sentence length (target std deviation above 6), avoid "not just X, it\\u2019s Y" framings, replace vague attributions with named sources, and cut filler signposts.';
}

function dg(label, value, comment) { vc.diagnostics.push({ label: label, value: value, comment: comment }); }
dg('Sentence burstiness', r1(burstiness), burstiness < 4 ? 'Very uniform rhythm \\u2014 AI-typical. Human writing lands \\u03C3 6\\u20139.' : (burstiness < 6 ? 'Moderate variation \\u2014 slightly mechanical. Humans average \\u03C3 6\\u20139.' : 'Naturally varied sentence lengths \\u2014 human-typical.'));
dg('Avg sentence length', r1(avgSentLen) + ' words', avgSentLen > 25 ? 'Long \\u2014 hard to extract into answers. Aim for 15\\u201320.' : (avgSentLen < 10 ? 'Choppy \\u2014 may read as thin.' : 'In the 10\\u201325 word extraction sweet spot.'));
dg('Opener variety', Math.round(openerVariety * 100) + '%', openerVariety < 0.4 ? 'Sentences keep starting the same way \\u2014 an AI monotone marker.' : (openerVariety < 0.6 ? 'Fair variety; ' + aiOpenerPct + '% start with generic openers (the/this/it\\u2026).' : 'Strong variety in sentence starts.'));
dg('Generic openers', aiOpenerPct + '%', aiOpenerPct > 60 ? 'Over 60% of sentences start with the/this/it/in\\u2026 \\u2014 AI-typical.' : (aiOpenerPct > 45 ? 'Somewhat generic sentence starts.' : 'Healthy mix of sentence starts.'));
dg('Lexical diversity (TTR)', r2(ttr), ttr < 0.3 ? 'Low \\u2014 vocabulary loops on itself.' : (ttr < 0.45 ? 'Mid-range diversity, typical for long-form.' : 'Rich vocabulary for this length.'));
dg('One-use words (hapax)', Math.round(hapaxRatio * 100) + '%', hapaxRatio < 0.15 ? 'Few single-use words \\u2014 repetitive lexicon.' : (hapaxRatio < 0.3 ? 'Normal share of one-off words.' : 'High share of unique words \\u2014 human-typical breadth.'));
dg('Avg paragraph length', Math.round(avgParaLen) + ' words', avgParaLen > 120 ? 'Dense paragraphs \\u2014 split for scannability.' : (avgParaLen < 25 ? 'Fragmented \\u2014 consider merging some.' : 'Comfortable paragraph sizing.'));
dg('Clause mix', singleClausePct + '% simple / ' + complexPct + '% complex', singleClausePct > 75 ? 'Mostly single-clause sentences \\u2014 staccato, AI-listicle feel.' : (complexPct > 75 ? 'Almost everything is multi-clause \\u2014 dense to parse.' : 'Balanced simple/complex mix \\u2014 human-typical.'));
dg('Tense consistency', tensePct + '%', tensePct < 60 ? 'Tense drifts between sentences \\u2014 tighten to one dominant tense.' : 'Dominant tense held \\u2014 consistent narration.');
dg('Contrast connectives', connContrast + ' \\u00B7 causal: ' + connCause, connContrast + connCause === 0 ? 'No however/because-type connectives \\u2014 argumentation may feel flat.' : (connContrast / Math.max(totalWords, 1) * 1000 > 6 ? 'Heavy "however/although" load \\u2014 an AI balancing tic.' : 'Normal connective usage.'));
dg('Nominalization', Math.round(nomRatio * 1000) / 10 + '%', nomRatio > 0.12 ? 'Abstract noun-heavy ("-tion/-ment") \\u2014 verbs are stronger.' : 'Concrete verb-led style.');
dg('Repeated phrases', repeatedBigrams + ' bigrams / ' + repTriKeys.length + ' trigrams', repTriKeys.length > totalWords / 250 ? 'Noticeable phrase recycling' + (topTri ? ' (worst: "' + topTri + '")' : '') + '.' : 'Low phrase recycling.');

var totalScore = 0;
categories.forEach(function (c) { totalScore += c.score; });
totalScore = Math.max(0, Math.min(100, totalScore));
var grade, verdict;
if (totalScore >= 90) { grade = 'A+'; verdict = 'Exceptional \\u2014 built to be cited by AI engines'; }
else if (totalScore >= 80) { grade = 'A'; verdict = 'Strong AI visibility'; }
else if (totalScore >= 70) { grade = 'B'; verdict = 'Good foundation, clear wins available'; }
else if (totalScore >= 55) { grade = 'C'; verdict = 'Mixed signals \\u2014 AI engines will often skip this page'; }
else if (totalScore >= 40) { grade = 'D'; verdict = 'Weak \\u2014 mostly invisible to AI search'; }
else { grade = 'F'; verdict = 'Needs a rebuild to earn AI citations'; }

var failing = [];
categories.forEach(function (c) {
  (c.checks || []).forEach(function (ch) { if (ch.status !== 'pass' && ch.fixPrompt) { failing.push(ch.fixPrompt); } });
});
if (vc.fixPrompt) { failing.push(vc.fixPrompt); }
var issuesCount = failing.length;
var pointsAvailable = 100 - totalScore;
var fixAllPrompt = 'You are an expert GEO/AEO editor. Improve the page at ' + nu.url + ' for AI search visibility (ChatGPT, Perplexity, Google AI Overviews). Keep the core message, brand voice and facts. Apply every fix below:\\n' + failing.map(function (f, i) { return (i + 1) + '. ' + f; }).join('\\n');

return [{ json: {
  ok: true,
  tool: 'Snoika AI Visibility Score',
  url: nu.url,
  analyzedAt: now.toISOString(),
  totalScore: totalScore,
  grade: grade,
  verdict: verdict,
  issuesCount: issuesCount,
  pointsAvailable: pointsAvailable,
  fixAllPrompt: fixAllPrompt,
  meta: { wordCount: totalWords, articleSource: articleSource, pageFetch: fetchMode, htmlKB: htmlKB, pageStatus: pageStatus, headings: { h1: effH1, h2: effH2, h3: effH3 }, schemaTypes: typeList, blockedBots: blockedBots },
  categories: categories
} }];`
    },
    position: [2260, 520]
  },
  output: [{ ok: true, totalScore: 83, grade: 'A', verdict: 'Strong AI visibility', categories: [] }]
});

const apiRespond = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: {
    name: 'Send JSON Result',
    parameters: {
      respondWith: 'firstIncomingItem',
      options: { responseHeaders: { entries: [{ name: 'Access-Control-Allow-Origin', value: '*' }] } }
    },
    position: [2480, 520]
  }
});

const notes = sticky('## AI Visibility Score (GEO/AEO checker)\n\n**UI page:** GET /webhook/ai-visibility\n**API:** POST /webhook/ai-visibility-check?url=...\n\nArticle text is extracted via Jina Reader (r.jina.ai, keyless). To raise Jina rate limits, add your Jina API key as a Header Auth credential (Authorization: Bearer ...) on the "Fetch Article Markdown" node.\n\nScoring: 6 categories / 100 pts — Answer Architecture 25, Machine-Readable Signals 15, Evidence & Trust 20, AI Crawler Access 15, Recency 10, Human Voice 15 (16 AI-writing detectors + 12 diagnostics).', [], { color: 4 });

export default workflow('TmUOmIhnBh17MiCh', 'GEO Checker — AI Visibility Score')
  .add(notes)
  .add(uiTrigger)
  .to(serveUi)
  .add(apiTrigger)
  .to(normalizeUrl)
  .to(fetchPage)
  .to(assessFetch)
  .to(originBlocked
    .onTrue(fetchPageJina.to(fetchArticle))
    .onFalse(fetchArticle))
  .add(fetchArticle)
  .to(fetchLlms)
  .to(fetchRobots)
  .to(scoreEngine)
  .to(apiRespond);
