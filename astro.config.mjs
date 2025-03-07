import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://chasnelson1990.github.io/fjelltopp-astro",
  integrations: [tailwind()],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
        prefixDefaultLocale: false
    }
  }
});
