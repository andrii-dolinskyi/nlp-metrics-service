const r = $('Parse Request').first().json;
const c = $('Page Contract').first().json;
const f = $input.first().json;
const base = r.siteRootUrl;
const url = base + r.slugPath;
// The app's own wording for the schema: original H1, core keyword and client name on non-English runs.
const h1 = r.h1Local || (r.original && r.original.h1) || r.h1;
const keyword = r.coreKeywordLocal || (r.original && r.original.coreKeyword) || r.coreKeyword;
const clientName = r.clientNameLocal || (r.original && r.original.clientName) || r.clientName;
const types = String(c.spec.schemaTypes).split('+').map(x => x.trim()).filter(Boolean);
const org = { '@type': 'Organization', name: clientName, url: base || undefined };
const langMap = { english: 'en', german: 'de', french: 'fr', spanish: 'es', italian: 'it', dutch: 'nl', polish: 'pl', portuguese: 'pt', ukrainian: 'uk', russian: 'ru', czech: 'cs', swedish: 'sv', danish: 'da', norwegian: 'nb', finnish: 'fi', greek: 'el', turkish: 'tr', arabic: 'ar', japanese: 'ja', korean: 'ko', chinese: 'zh', hungarian: 'hu', romanian: 'ro', bulgarian: 'bg', slovak: 'sk', slovenian: 'sl', croatian: 'hr', estonian: 'et', latvian: 'lv', lithuanian: 'lt', indonesian: 'id', vietnamese: 'vi', thai: 'th', hebrew: 'he', hindi: 'hi', afrikaans: 'af' };
const inLanguage = langMap[String(r.targetLanguage).toLowerCase()] || r.targetLanguage;
const today = new Date().toISOString().slice(0, 10);
const common = { '@context': 'https://schema.org', url, name: h1, headline: h1, description: f.metaDescription, inLanguage, dateModified: today };
// The author comes from the request (article settings in the app). For bio and profile pages the app sends the person the page is about as the author.
const personBlock = (p) => p && p.name ? { '@type': 'Person', name: p.name, jobTitle: p.jobTitle || undefined, url: p.url || undefined, sameAs: (p.sameAs && p.sameAs.length) ? p.sameAs : undefined, image: p.image || undefined, description: p.description || undefined } : null;
const author = personBlock(r.authorLocal || r.author) || { '@type': 'Organization', name: clientName };
const reviewer = personBlock(r.reviewerLocal || r.reviewer);
const steps = () => (f.finalPage.match(/^\d+\.\s+.+$/gm) || []).slice(0, 20);
const article = (type) => Object.assign({}, common, { '@type': type, publisher: org, author, datePublished: today, reviewedBy: reviewer || undefined });
const B = {
  Article: () => article('Article'),
  BlogPosting: () => article('BlogPosting'),
  NewsArticle: () => article('NewsArticle'),
  TechArticle: () => article('TechArticle'),
  Report: () => article('Report'),
  MedicalWebPage: () => Object.assign({}, common, { '@type': 'MedicalWebPage', publisher: org, author, reviewedBy: reviewer || undefined, lastReviewed: today }),
  WebPage: () => Object.assign({}, common, { '@type': 'WebPage', publisher: org }),
  WebSite: () => ({ '@context': 'https://schema.org', '@type': 'WebSite', name: clientName, url: base || url, publisher: org }),
  CollectionPage: () => Object.assign({}, common, { '@type': 'CollectionPage', publisher: org }),
  AboutPage: () => Object.assign({}, common, { '@type': 'AboutPage', mainEntity: org }),
  ContactPage: () => Object.assign({}, common, { '@type': 'ContactPage', mainEntity: org }),
  QAPage: () => Object.assign({}, common, { '@type': 'QAPage', publisher: org }),
  ProfilePage: () => Object.assign({}, common, { '@type': 'ProfilePage', mainEntity: author }),
  Person: () => personBlock(r.authorLocal || r.author) ? Object.assign({ '@context': 'https://schema.org' }, personBlock(r.authorLocal || r.author)) : null,
  Organization: () => Object.assign({ '@context': 'https://schema.org' }, org, { description: r.clientDescription || undefined }),
  Service: () => Object.assign({}, common, { '@type': 'Service', serviceType: keyword || h1, provider: org }),
  LegalService: () => Object.assign({}, common, { '@type': 'LegalService', name: clientName, serviceType: keyword || h1, url: base || url }),
  SoftwareApplication: () => Object.assign({}, common, { '@type': 'SoftwareApplication', applicationCategory: 'BusinessApplication', publisher: org }),
  WebApplication: () => Object.assign({}, common, { '@type': 'WebApplication', applicationCategory: 'BusinessApplication', publisher: org }),
  DefinedTerm: () => Object.assign({}, common, { '@type': 'DefinedTerm', termCode: keyword, inDefinedTermSet: base + '/glossary/' }),
  DefinedTermSet: () => ({ '@context': 'https://schema.org', '@type': 'DefinedTermSet', name: clientName, url: base + '/glossary/' }),
  HowTo: () => {
    let st = steps().map(s => ({ name: s.replace(/^\d+\.\s+/, '').replace(/[.:]\s*$/, '').slice(0, 120), text: s.replace(/^\d+\.\s+/, '') }));
    if (st.length < 2) {
      // The outline H2s are the steps: one HowToStep per supplied section, its first sentence as the text.
      const parts = f.finalPage.split(/^##\s+/m).slice(1);
      const n = (c.sections || []).length;
      st = parts.slice(0, n).map(p => { const lines = p.split('\n'); const name = (lines[0] || '').trim(); const body = lines.slice(1).join(' ').replace(/[#*|]/g, ' ').replace(/\[([^\]]+)\]\([^\)]*\)/g, '$1').replace(/\s+/g, ' ').trim(); const first = (body.match(/^[^.!?]+[.!?]/) || [body.slice(0, 200)])[0]; return { name, text: first.trim() }; }).filter(s => s.name && s.text);
    }
    return st.length >= 2 ? Object.assign({}, common, { '@type': 'HowTo', step: st.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) }) : null;
  },
  FAQPage: () => {
    let qa = (f.faq || []).slice();
    if (!qa.length && c.spec.typeId === 'faq_page') {
      // An FAQ page carries its questions as H3s in the body: each H3 with the prose under it until the next heading.
      const parts = f.finalPage.split(/^(?=#{1,3}\s)/m);
      parts.forEach(pt => { const m = pt.match(/^###\s+(.+)\n([\s\S]*)$/); if (m) { const a = m[2].replace(/[#*|]/g, ' ').replace(/\[([^\]]+)\]\([^\)]*\)/g, '$1').replace(/\s+/g, ' ').trim(); if (a) qa.push({ question: m[1].trim(), answer: a }); } });
    }
    return qa.length ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: qa.map(q => ({ '@type': 'Question', name: q.question, acceptedAnswer: { '@type': 'Answer', text: q.answer } })) } : null;
  },
  BreadcrumbList: () => { const segs = r.slugPath.split('/').filter(Boolean); return segs.length ? { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: segs.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.replace(/-/g, ' '), item: base + '/' + segs.slice(0, i + 1).join('/') + '/' })) } : null; }
};
const clean = o => { if (!o || typeof o !== 'object') return o; Object.keys(o).forEach(k => { if (o[k] === undefined || o[k] === null || o[k] === '') delete o[k]; else if (typeof o[k] === 'object') clean(o[k]); }); return o; };
const g = []; const warnings = [];
types.forEach(t => {
  const b = B[t];
  if (!b) { warnings.push('No builder for schema type ' + t + '. Add it to Build JSON-LD or drop it from the spec.'); return; }
  let block = null; try { block = b(); } catch (e) { block = null; }
  if (block) g.push(clean(block)); else warnings.push('Schema block ' + t + ' omitted because the page has no data for it.');
});
return [{ json: Object.assign({}, f, { jsonLd: g, schemaTypes: types, schemaWarnings: warnings, canonicalUrl: url }) }];
