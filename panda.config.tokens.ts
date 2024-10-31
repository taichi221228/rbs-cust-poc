import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

/** @package */
export const tokens = defineTokens({
	fonts: { josefin: { value: '"Josefin Sans Variable"' } },
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
});
