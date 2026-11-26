// Writes the site's pages from content.mjs:  node src/build.mjs
//
//   index.html, tr/index.html                         studio home (games, team, contact)
//   <slug>/index.html, tr/<slug>/index.html            one page per game, with its legal links
//   404.html
//
// The games' legal pages (<slug>/privacy/) are written by each game's own repository and left alone here.
// No dependencies: plain Node.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { products, studio, text } from './content.mjs';

const ORIGIN = 'https://karaman.dev';
const BASE = '/tovrix-studio/';
const ROOT = join(import.meta.dirname, '..');
const YEAR = 2026;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// The mark: a tower of three blocks inside an orbit ring. Uses currentColor, so it follows the theme.
const MARK = `<svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><ellipse cx="16" cy="17" rx="14" ry="6.5" fill="none" stroke="currentColor" stroke-width="2" opacity=".45" transform="rotate(-18 16 17)"/><rect x="11" y="20" width="10" height="6" rx="1.5" fill="currentColor"/><rect x="13" y="13" width="8" height="6" rx="1.5" fill="currentColor" opacity=".8"/><rect x="11.5" y="6" width="7" height="6" rx="1.5" fill="currentColor" opacity=".6"/></svg>`;

// path of a page relative to the site root, e.g. '' / 'tr/' / 'orbit-stackers/' / 'tr/orbit-stackers/'
function page({ t, path, otherPath, title, description, body }) {
  const up = '../'.repeat(path.split('/').filter(Boolean).length);
  const home = `${up}${t.lang === 'tr' ? 'tr/' : ''}`;
  const enPath = t.lang === 'en' ? path : otherPath;
  const trPath = t.lang === 'tr' ? path : otherPath;
  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${ORIGIN}${BASE}${path}">
<link rel="alternate" hreflang="en" href="${ORIGIN}${BASE}${enPath}">
<link rel="alternate" hreflang="tr" href="${ORIGIN}${BASE}${trPath}">
<link rel="icon" href="${up}assets/mark.svg" type="image/svg+xml">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<link rel="stylesheet" href="${up}assets/site.css">
</head>
<body>
<header class="top"><div class="wrap">
<a class="brand" href="${home}">${MARK}<span>${esc(studio.name)}</span></a>
<nav>
<a href="${home}#games">${esc(t.games)}</a>
<a href="${home}#team">${esc(t.team)}</a>
<a href="${home}#contact">${esc(t.contact)}</a>
<a class="lang" href="${up}${otherPath}" hreflang="${t.other}" lang="${t.other}">${esc(t.otherLabel)}</a>
</nav>
</div></header>
<main>
${body}
</main>
<footer class="bottom"><div class="wrap">
<span>© ${YEAR} ${esc(studio.name)}</span>
<span>${esc(studio.address)}</span>
<a href="mailto:${studio.email}">${studio.email}</a>
</div></footer>
</body>
</html>
`;
}

function homePage(lang) {
  const t = text[lang];
  const pre = lang === 'tr' ? 'tr/' : '';
  const up = lang === 'tr' ? '../' : '';
  const games = products
    .map((p) => {
      const c = p[lang];
      return `<a class="game" href="${p.slug}/">
<img src="${up}${p.icon}" alt="" width="88" height="88" loading="lazy">
<div><h3>${esc(p.name)}</h3><p>${esc(c.short)}</p><span class="chip">${esc(c.status)}</span>
<span class="more">${esc(t.seeGame)} →</span></div>
</a>`;
    })
    .join('\n');
  const team = studio.team
    .map(
      (m) => `<li class="person"><span class="avatar" aria-hidden="true">${esc(m.initials)}</span>
<div><h3>${esc(m.name)}</h3><a href="${m.linkedin}" rel="noopener">LinkedIn</a></div></li>`,
    )
    .join('\n');
  const body = `<section class="hero"><div class="wrap">
<h1>${esc(t.tagline)}</h1>
<p class="lead">${esc(t.intro)}</p>
</div></section>
<section id="games"><div class="wrap">
<h2>${esc(t.games)}</h2>
<div class="games">
${games}
</div>
</div></section>
<section id="team"><div class="wrap">
<h2>${esc(t.team)}</h2>
<p class="muted">${esc(t.teamIntro)}</p>
<ul class="team">
${team}
</ul>
</div></section>
<section id="contact"><div class="wrap">
<h2>${esc(t.contact)}</h2>
<p class="muted">${esc(t.contactIntro)}</p>
<p class="contact"><a href="mailto:${studio.email}">${studio.email}</a><br>${esc(studio.name)}, ${esc(studio.address)}</p>
</div></section>`;
  write(`${pre}index.html`, page({ t, path: pre, otherPath: lang === 'tr' ? '' : 'tr/', title: `${studio.name}: ${t.tagline}`, description: t.intro, body }));
}

function productPage(p, lang) {
  const t = text[lang];
  const c = p[lang];
  const pre = lang === 'tr' ? 'tr/' : '';
  const path = `${pre}${p.slug}/`;
  const up = '../'.repeat(path.split('/').filter(Boolean).length);
  const privacy = `${up}${p.privacy}`;
  const features = c.features
    .map(([h, items]) => `<div class="feature"><h3>${esc(h)}</h3><ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`)
    .join('\n');
  const shots = p.screenshots.map((s) => `<img src="${up}${s}" alt="" width="270" height="480" loading="lazy">`).join('\n');
  const body = `<div class="wrap">
<p class="crumb"><a href="${up}${pre}#games">← ${esc(t.back)}</a></p>
<section class="product-head">
<img class="app-icon" src="${up}${p.icon}" alt="" width="112" height="112">
<div><h1>${esc(p.name)}</h1><p class="lead">${esc(c.short)}</p><span class="chip">${esc(c.status)}</span></div>
</section>
<img class="feature-graphic" src="${up}${p.feature}" alt="${esc(p.name)}" width="1024" height="500">
<section><h2>${esc(c.lead)}</h2><p>${esc(c.body)}</p></section>
<section class="features">
${features}
</section>
<section><h2>${esc(t.screenshots)}</h2>
<div class="shots">
${shots}
</div></section>
<section id="legal" class="legal"><h2>${esc(t.legal)}</h2>
<ul>
<li><a href="${privacy}">${esc(t.privacy)}</a></li>
<li><a href="${privacy}#deleting-your-account">${esc(t.deletion)}</a></li>
</ul>
${t.legalNote ? `<p class="muted">${esc(t.legalNote)}</p>` : ''}
</section>
</div>`;
  const otherPath = `${lang === 'tr' ? '' : 'tr/'}${p.slug}/`;
  write(`${path}index.html`, page({ t, path, otherPath, title: `${p.name} · ${studio.name}`, description: c.short, body }));
}

function notFound() {
  const t = text.en;
  // GitHub Pages serves this file at any missing path, so its links are absolute
  const html = page({
    t,
    path: '',
    otherPath: 'tr/',
    title: `404 · ${studio.name}`,
    description: t.notFound,
    body: `<section class="hero"><div class="wrap"><h1>404</h1><p class="lead">${esc(t.notFound)} / ${esc(text.tr.notFound)}</p>
<p><a href="${BASE}">${esc(t.home)}</a> · <a href="${BASE}tr/">${esc(text.tr.home)}</a></p></div></section>`,
  })
    .replace(/(href|src)="(?!https?:|mailto:|#|\/)([^"]*)"/g, (_, a, v) => `${a}="${BASE}${v}"`);
  write('404.html', html);
}

function write(rel, html) {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`wrote ${rel}`);
}

for (const lang of ['en', 'tr']) {
  homePage(lang);
  for (const p of products) productPage(p, lang);
}
notFound();
