import { defineConfig } from 'astro/config';

// En GitHub Actions estas variables las define el workflow (.github/workflows/deploy.yml).
// En local no hace falta configurar nada.
export default defineConfig({
  site: process.env.SITE_URL || 'https://usuario.github.io',
  base: process.env.BASE_PATH || '/',
});
