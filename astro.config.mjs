// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: remplacer par le nom de domaine définitif une fois réservé.
export const SITE_URL = 'https://www.amandine-barlatier.fr';

// Déploiement actuel : GitHub Pages (dépôt « evidence ») → https://alexisbarlatier.github.io/evidence/
// Le site est servi sous un sous-chemin, d'où `base`. Tous les liens passent par
// `import.meta.env.BASE_URL`, donc le passage au domaine définitif = remettre
// `site: SITE_URL` et supprimer la ligne `base`, rien d'autre.
const GH_PAGES_SITE = 'https://alexisbarlatier.github.io';
const GH_PAGES_BASE = '/evidence';

export default defineConfig({
  site: GH_PAGES_SITE,
  base: GH_PAGES_BASE,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
