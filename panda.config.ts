import { defineConfig } from "@pandacss/dev";

import { tokens, semanticTokens } from "./panda.config.tokens";

/** @private */
export default defineConfig({
	strictTokens: true,
	preflight: true,
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: { tokens, semanticTokens },
	outdir: "styled-system",
});
