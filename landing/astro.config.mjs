import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import netlify from '@astrojs/netlify/static';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [tailwind(), alpinejs()]
});