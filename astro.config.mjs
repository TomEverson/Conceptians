import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import prefetch from '@astrojs/prefetch';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
   output: 'server',
   adapter: cloudflare(),
   integrations: [prefetch(),svelte(),tailwind(
      {
         config: { path: './tailwind.config.js' },
       }
   )],
});
