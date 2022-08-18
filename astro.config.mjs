import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
   output: 'server',
   adapter: netlify(),
   integrations: [prefetch()],
});
