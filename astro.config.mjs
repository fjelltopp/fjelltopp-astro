import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://www.fjelltopp.org",
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
        prefixDefaultLocale: false
    }
  }
});
