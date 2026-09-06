import vue from "eslint-plugin-vue";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  ...vue.configs["flat/recommended"],
  prettier,
  {
    files: ["**/*.vue", "**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      }
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off"
    }
  }
];