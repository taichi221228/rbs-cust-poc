import eslint from "@eslint/js";
import createGitignoreConfig from "eslint-config-flat-gitignore";
import globals from "globals";
import { config as defineConfig, configs } from "typescript-eslint";

import { importConfigs } from "./eslint.config.import.js";
import { nodeConfigs } from "./eslint.config.node.js";
import { reactConfigs } from "./eslint.config.react.js";

const ignoreConfig = createGitignoreConfig();

const jsConfig = eslint.configs.recommended;

/** @type import("typescript-eslint").ConfigWithExtends[] */
const tsConfigs = [
  ...configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

/** @private */
// HACK: Suppress TypeScript errors due to incompatibility between `eslint-plugin-import-access` and `tsc` when using `checkJS`.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
export default defineConfig(
  ...tsConfigs,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
  jsConfig,
  ignoreConfig,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.commonjs },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  ...importConfigs,
  ...reactConfigs,
  ...nodeConfigs,
);
