# Tovrix Studio website

The website of Tovrix Studio, served by GitHub Pages at https://karaman.dev/tovrix-studio/
(English at the root, Turkish under `tr/`).

- `src/content.mjs`: every text on the site, the team and the games. Add a game there to give it a page.
- `src/build.mjs`: writes the pages (`index.html`, `tr/index.html`, `<game>/index.html`,
  `tr/<game>/index.html`, `404.html`). Run `node src/build.mjs` after a change and commit the output.
- `assets/`: the stylesheet, the studio mark and each game's icon, feature graphic and screenshots.
- `<game>/privacy/`: a game's legal pages. They are written by that game's own repository and not edited here.
  For Orbit Stackers: `npx tsx tools/privacy-page.ts <this clone>` in its repository, from `docs/PRIVACY_POLICY.md`.

Each legal page's address is named in the stores and in the app, so never move one without updating those.
