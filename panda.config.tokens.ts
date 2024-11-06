import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

/** @package */
export const tokens = defineTokens({
	fonts: { josefin: { value: '"Josefin Sans Variable"' } },
	colors: {
		gray: {
			50: { value: "hsl(233, 11%, 95%)" },
			200: { value: "hsl(233, 11%, 80%)" },
			350: { value: "hsl(233, 11%, 65%)" },
			500: { value: "hsl(233, 11%, 50%)" },
			650: { value: "hsl(233, 11%, 35%)" },
			800: { value: "hsl(233, 11%, 20%)" },
		},
	},
});

/** @package */
export const semanticTokens = defineSemanticTokens({
	fonts: {
		primary: { value: ["{fonts.josefin}", "{fonts.fallback}"] },
		fallback: {
			value: [
				'"Helvetica Neue"',
				"arial",
				'"Hiragino Kaku Gothic ProN"',
				'"Hiragino Sans"',
				"meiryo",
				"sans-serif",
			],
		},
	},
	fontSizes: {
		headline: { value: "{fontSizes.4xl}" },
	},
	colors: {
		primary: {
			DEFAULT: {
				value: { base: "{colors.gray.650}", _osDark: "{colors.gray.350}" },
			},
			alternative: {
				value: { base: "{colors.gray.50}", _osDark: "{colors.gray.800}" },
			},
		},
	},
	sizes: {
		content: { value: "540px" },
	},
});
