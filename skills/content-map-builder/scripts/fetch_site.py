#!/usr/bin/env python3
"""Fetch the full body text of every existing URL for the content-map body-text check.

usage: fetch_site.py <run_folder> [--urls urls.txt] [--min-words 120] [--sleep 0.5]
Reads URLs from <run_folder>/audit_raw.json (pages[].url) unless --urls is given.
Writes <run_folder>/crawl/pages_full.json and prints a coverage summary.

Ladder per URL (stop at the first tier that yields real content):
  1. curl with a desktop browser UA (server-rendered sites, no bot wall)
  2. Jina Reader  https://r.jina.ai/<url>  (renders JavaScript; passes most soft bot walls; no key needed)
  3. Tavily Extract (if TAVILY_API_KEY is set)  — keyed extractor for harder walls
  4. BLOCKED — recorded, never guessed. Blocked pages are excluded from the phrase check and the
     count is reported in the plan tab; ask the client for CMS access or an export (onboarding §24.3).

Detection of a non-answer (any tier): HTTP status not 200; fewer than --min-words words of text;
challenge markers (Cloudflare "Just a moment", "Enable JavaScript and cookies", cf-chl, captcha,
"Access denied", "Attention Required", Jina "requiring CAPTCHA"); or a JS shell (huge HTML, tiny text).
"""
import json, re, sys, os, time, html, subprocess, pathlib

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
CHALLENGE = re.compile(r"just a moment|enable javascript and cookies|cf-chl|cf_chl|captcha|access denied|attention required|verify you are human|checking your browser|request blocked|403 forbidden", re.I)

def curl(url, timeout=25):
    r = subprocess.run(["curl", "-sL", "-m", str(timeout), "-A", UA, "-w", "\n__STATUS__%{http_code}", url], capture_output=True, text=True)
    body, _, status = r.stdout.rpartition("\n__STATUS__")
    return (int(status) if status.strip().isdigit() else 0), body

def html_to_text(h):
    h = re.sub(r"<script.*?</script>|<style.*?</style>|<noscript.*?</noscript>", " ", h, flags=re.S | re.I)
    heads = [(m.group(1).lower(), html.unescape(re.sub("<[^>]+>", "", m.group(2))).strip()) for m in re.finditer(r"<(h[1-6])[^>]*>(.*?)</\1>", h, re.S | re.I)]
    text = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", h))).strip()
    return text, heads

def md_to_text(md):
    heads = [("h" + str(len(m.group(1))), m.group(2).strip()) for m in re.finditer(r"^(#{1,6})\s+(.+)$", md, re.M)]
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", md); text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text, heads

def looks_blocked(status, raw, text, min_words):
    if status and status != 200: return f"http {status}"
    if CHALLENGE.search(raw[:5000]) or CHALLENGE.search(text[:2000]): return "challenge page"
    if len(text.split()) < min_words: return f"thin ({len(text.split())} words)"
    if len(raw) > 200000 and len(text.split()) < 200: return "js shell"
    return None

def tier_curl(url, min_words):
    status, raw = curl(url)
    text, heads = html_to_text(raw)
    why = looks_blocked(status, raw, text, min_words)
    return why, dict(method="curl", status=status, words=len(text.split()), headings=heads, text=text[:40000])

def tier_jina(url, min_words):
    status, raw = curl("https://r.jina.ai/" + url, timeout=60)
    if "Warning:" in raw[:600] and re.search("captcha|authorized", raw[:600], re.I): return "jina: captcha", dict(method="jina", status=status, words=0, headings=[], text="")
    body = raw.split("Markdown Content:", 1)[-1]
    text, heads = md_to_text(body)
    title = re.search(r"^Title:\s*(.+)$", raw, re.M)
    if title and not any(h[0] == "h1" for h in heads): heads.insert(0, ("h1", title.group(1).strip()))
    why = looks_blocked(status, raw, text, min_words)
    return why, dict(method="jina", status=status, words=len(text.split()), headings=heads, text=text[:40000])

def tier_tavily(url, min_words):
    key = os.environ.get("TAVILY_API_KEY")
    if not key: return "tavily: no key", None
    import urllib.request
    req = urllib.request.Request("https://api.tavily.com/extract", data=json.dumps({"urls": [url], "extract_depth": "advanced"}).encode(), headers={"Content-Type": "application/json", "Authorization": f"Bearer {key}"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r: d = json.load(r)
        res = (d.get("results") or [{}])[0]; text, heads = md_to_text(res.get("raw_content") or "")
        why = looks_blocked(200, text, text, min_words)
        return why, dict(method="tavily", status=200, words=len(text.split()), headings=heads, text=text[:40000])
    except Exception as e:
        return f"tavily: {e}", None

def fetch(url, min_words):
    tried = []
    for tier in (tier_curl, tier_jina, tier_tavily):
        why, res = tier(url, min_words)
        if res is not None and not why:
            res["tried"] = tried; return res
        tried.append(f"{tier.__name__[5:]}: {why}")
    return dict(method="BLOCKED", status=None, words=0, headings=[], text="", tried=tried)

def main():
    args = sys.argv[1:]
    if not args: print(__doc__); sys.exit(1)
    run = pathlib.Path(args[0]); min_words = 120; sleep = 0.5; urls = None
    if "--min-words" in args: min_words = int(args[args.index("--min-words") + 1])
    if "--sleep" in args: sleep = float(args[args.index("--sleep") + 1])
    if "--urls" in args: urls = [l.strip() for l in open(args[args.index("--urls") + 1]) if l.strip()]
    if urls is None:
        a = json.load(open(run / "audit_raw.json")); a = a[0] if isinstance(a, list) else a
        urls = [p["url"] for p in a["pages"]]
    (run / "crawl").mkdir(exist_ok=True)
    out = {}
    for u in urls:
        out[u] = fetch(u, min_words); time.sleep(sleep)
        print(f"{out[u]['method']:8} {out[u]['words']:>6}w  h:{len(out[u]['headings']):>2}  {u}" + (f"   tried: {'; '.join(out[u]['tried'])}" if out[u]['tried'] else ""))
    json.dump(out, open(run / "crawl" / "pages_full.json", "w"))
    blocked = [u for u, v in out.items() if v["method"] == "BLOCKED"]
    by = {}
    for v in out.values(): by[v["method"]] = by.get(v["method"], 0) + 1
    print(f"\nfetched {len(urls)} URLs: {by}")
    if blocked:
        print(f"BLOCKED {len(blocked)} — the phrase check is incomplete for these; ask the client for CMS access or a content export and say so in the plan tab:")
        for u in blocked: print("  ", u)
    json.dump({"fetched": len(urls), "by_method": by, "blocked": blocked}, open(run / "crawl" / "coverage.json", "w"), indent=1)

if __name__ == "__main__":
    main()
