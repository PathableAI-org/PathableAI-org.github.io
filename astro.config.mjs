// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Organization GitHub Pages site is served from the domain root.
// When a custom domain (e.g. engineering.pathableai.com) is approved,
// update `site` accordingly.
const SITE = 'https://pathableai-org.github.io';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
