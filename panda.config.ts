import { defineConfig } from "@pandacss/dev";

import { tokens, semanticTokens } from "./panda.config.tokens";

/** @private */
export default defineConfig({
	strictTokens: true,
	preflight: true,
	include: ["app/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: { tokens, semanticTokens },
	outdir: "app/styled-system",
});
