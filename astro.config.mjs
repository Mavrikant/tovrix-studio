import { defineConfig } from 'astro/config';

// Served by GitHub Pages under karaman.dev/tovrix-studio/ (the repository's name is the path).
export default defineConfig({
  site: 'https://karaman.dev',
  base: '/tovrix-studio/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
