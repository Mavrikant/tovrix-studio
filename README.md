# Tovrix Studio website

The website of Tovrix Studio at https://karaman.dev/tovrix-studio/: the studio, its team, its games with their
download links and legal pages, and the brand. English at the root, Turkish under `tr/`. Built with
[Astro](https://astro.build); `.github/workflows/deploy.yml` builds it, checks every internal link and publishes
it to GitHub Pages on each push to `main`.

**This repository is public.** Nothing secret goes in here: no keys, tokens, tester lists or account ids.

```bash
npm ci
npm run dev        # http://localhost:4321/tovrix-studio/
npm run build      # dist/
npm run check      # every internal link in dist/ resolves
```

- `src/data/site.ts`: every text, the team, the brand colours and files, and the games. Add a game there to give
  it a page in both languages.
- `src/components/`, `src/layouts/Layout.astro`, `src/styles/global.css`: the pages and the look.
- `public/brand/`: the logo files (SVG and PNG), the favicon and the social preview image.
- `public/<game>/privacy/`: a game's legal pages. They are written by that game's own repository and not edited
  here. For Orbit Stackers: `npx tsx tools/privacy-page.ts <this clone>` in its repository. They use
  `public/assets/site.css`. Each legal page's address is named in the stores and in the app: never move one
  without updating those.

Google Analytics (`GA_ID` in `src/data/site.ts`, the same property as karaman.dev) loads only after the visitor
allows it in the cookie banner; `src/components/SitePrivacy.astro` says what it collects. Change both together.
