// FIXME: FIXME: There is a known bug in the pnpm environment. https://github.com/chakra-ui/eslint-plugin-panda/issues/170
// TODO: Type definition is not found.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
import pandaPlugin from "@pandacss/eslint-plugin";

/**
 * @package
 * @type {import("eslint").Linter.Config[]}
 */
export const pandaConfigs = [
	{
		// XXX: This is not type-compatible with `Config`.
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		plugins: { "@pandacss": pandaPlugin },
		// XXX: This is not type-compatible with `Config`.
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
		rules: pandaPlugin.configs.recommended.rules,
	},
];
