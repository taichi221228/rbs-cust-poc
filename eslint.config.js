import eslint from "@eslint/js";
import createGitignoreConfig from "eslint-config-flat-gitignore";
import globals from "globals";
import { config as defineConfig, configs } from "typescript-eslint";

import { importConfigs } from "./eslint.config.import.js";
import { nodeConfigs } from "./eslint.config.node.js";
import { pandaConfigs } from "./eslint.config.panda.js";
import { reactConfigs } from "./eslint.config.react.js";

const ignoreConfig = createGitignoreConfig();

/** @type import("eslint").Linter.Config */
const jsConfig = {
	...eslint.configs.recommended,
	rules: { "no-unused-vars": ["error", { argsIgnorePattern: "^_" }] },
};

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
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_" },
			],
		},
	},
];

/** @type import("eslint").Linter.Config */
const basicConfig = {
	languageOptions: {
		globals: { ...globals.browser, ...globals.commonjs },
		ecmaVersion: "latest",
		sourceType: "module",
		parserOptions: { ecmaFeatures: { jsx: true } },
	},
};

/** @private */
// HACK: Suppress TypeScript errors due to incompatibility between `eslint-plugin-import-access` and `tsc` when using `checkJS`.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
export default defineConfig(
	ignoreConfig,
	jsConfig,
	...tsConfigs,
	basicConfig,
	...importConfigs,
	...nodeConfigs,
	...reactConfigs,
	...pandaConfigs,
);
