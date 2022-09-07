import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import prefetch from '@astrojs/prefetch';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
   output: 'server',
   adapter: netlify(),
   integrations: [prefetch(),svelte(),tailwind(
      {
         config: { path: './tailwind.config.js' },
       }
   )],
});
