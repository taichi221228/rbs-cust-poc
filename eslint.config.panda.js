// TODO: Type definition is not found.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
import pandaPlugin from "@pandacss/eslint-plugin";

/**
 * @package
 * @type {import("eslint").Linter.Config[]}
 */
export const pandaConfigs = [
	{
		// WARNING: This is not type-compatible with `Config`.
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		plugins: { "@pandacss": pandaPlugin },
		// WARNING: This is not type-compatible with `Config`.
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
		rules: pandaPlugin.configs.recommended.rules,
	},
];
