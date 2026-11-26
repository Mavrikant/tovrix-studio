// Checks the built site (dist/): every link and image inside the site points at a file that exists.
// Run after `npm run build`. External links are not fetched.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const BASE = '/tovrix-studio/';
const pages = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && pages.push(p); });
walk(DIST);
const bad = [];
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  for (const [, url] of html.matchAll(/(?:href|src)="([^"#?]+)[^"]*"/g)) {
    let path = url;
    if (/^(https?:|mailto:|data:)/.test(url)) continue;
    if (!url.startsWith('/')) path = new URL(url, `http://x${BASE}${file.slice(DIST.length + 1)}`).pathname;
    if (!path.startsWith(BASE)) { bad.push(`${file}: ${url} (outside ${BASE})`); continue; }
    let target = join(DIST, decodeURIComponent(path.slice(BASE.length)));
    if (existsSync(target) && statSync(target).isDirectory()) target = join(target, 'index.html');
    if (!existsSync(target)) bad.push(`${file}: ${url}`);
  }
}
if (bad.length) { console.error(`broken links:\n${bad.join('\n')}`); process.exit(1); }
console.log(`${pages.length} pages, every internal link resolves`);
