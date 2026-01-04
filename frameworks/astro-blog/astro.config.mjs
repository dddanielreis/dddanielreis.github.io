import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dddanielreis.github.io',
  integrations: [react(), sitemap()],
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },
});
