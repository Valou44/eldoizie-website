// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.eltaxidoizie.fr', // TODO : domaine définitif (aussi dans src/data/site.ts et public/robots.txt)
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  },

  // Pages en noindex exclues du sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/credits-photos') })]
});