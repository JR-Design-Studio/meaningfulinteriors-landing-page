// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.meaningfulinteriors.com',
  server: { port: 4322 },
  // Mismas URLs que el sitio actual en Squarespace (/about, sin barra final)
  trailingSlash: 'never',
  build: { format: 'file' },
  // Los botones del sitio original apuntan a /contact; la página real es /contactus
  redirects: { '/contact': '/contactus' },
  integrations: [sitemap({ filter: (page) => !/\/contact\/?$/.test(page) })],
  vite: { plugins: [tailwindcss()] },
});
