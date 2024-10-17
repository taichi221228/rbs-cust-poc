import eslint from "@eslint/js";
import createGitignoreConfig from "eslint-config-flat-gitignore";
import globals from "globals";
import { config as defineConfig, configs } from "typescript-eslint";

import { importConfigs } from "./eslint.config.import.js";
import { nodeConfigs } from "./eslint.config.node.js";
import { reactConfigs } from "./eslint.config.react.js";

export default defineConfig(
  ...configs.recommended,
  eslint.configs.recommended,
  createGitignoreConfig(),
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.commonjs },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
    ignores: ["!**/.server", "!**/.client"],
  },
  ...importConfigs,
  ...reactConfigs,
  ...nodeConfigs,
);
