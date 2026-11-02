// @ts-check
import { defineConfig } from 'astro/config';

// Objava na GitHub Pages: https://elenastankovic.github.io/claude-demo-es
// Ako se repozitorij preimenuje ili dobije vlastitu domenu, promijenite site i base.
export default defineConfig({
  site: 'https://elenastankovic.github.io',
  base: '/claude-demo-es',
  build: {
    format: 'file',
  },
});
