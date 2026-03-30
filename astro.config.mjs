import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  integrations: [
    react(),
    keystatic(),
    markdoc({
      options: {
        allowHTML: true,
      },
    }),
  ],

  adapter: vercel(),
});
