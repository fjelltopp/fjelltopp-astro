import eslintPluginAstro from "eslint-plugin-astro";
import ts from "typescript-eslint";

export default ts.config(
  ts.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-strict"],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
);
