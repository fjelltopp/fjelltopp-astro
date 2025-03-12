import { defineConfig } from "astro/config";
import astroBrokenLinksChecker from "astro-broken-link-checker";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://chasnelson1990.github.io/",
  base: "fjelltopp-astro",

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    astroBrokenLinksChecker({
      logFilePath: "broken-links.log",
      checkExternalLinks: false, // Optional: check external links (currently, caching to disk is not supported, and it is slow )
    }),
  ],
});
