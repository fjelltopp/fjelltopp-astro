import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://chasnelson1990.github.io/",
  base: "fjelltopp-astro",

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
        prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});