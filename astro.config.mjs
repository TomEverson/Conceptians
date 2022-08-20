import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

export default defineConfig({
   output: 'server',
   adapter: netlify(),
   integrations: [prefetch(),react(),svelte()],
});
