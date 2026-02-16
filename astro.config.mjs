import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://noahmancino.com',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
