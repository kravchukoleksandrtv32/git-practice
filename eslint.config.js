const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    ignores: ["libs/**", "node_modules/**"]
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      eqeqeq: "error",
      "no-var": "error",
      "no-unused-vars": "error"
    }
  }
];
