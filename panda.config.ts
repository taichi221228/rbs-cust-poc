import { defineConfig } from "@pandacss/dev";

import { tokens, semanticTokens } from "./panda.config.tokens";

/** @private */
export default defineConfig({
	jsxFramework: "react",
	strictTokens: true,
	preflight: true,
	presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],
	include: ["app/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: { tokens, semanticTokens },
	outdir: "app/registries/styled-system",
});
