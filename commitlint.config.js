/**
 * @private
 * @type {import('@commitlint/types').UserConfig}
 */
// HACK: Suppress TypeScript errors due to incompatibility between `eslint-plugin-import-access` and `tsc` when using `checkJS`.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"subject-case": [2, "always", "sentence-case"],
		"body-max-line-length": [2, "always", Number.POSITIVE_INFINITY],
	},
};
