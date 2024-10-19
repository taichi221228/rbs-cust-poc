import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
// HACK: `@types/eslint-plugin-react-hooks` is not found
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
import reactHooksPlugin from "eslint-plugin-react-hooks";

/**
 * @package
 * @type {import("eslint").Linter.Config[]}
 */
export const reactConfigs = [
  // HACK: This is not type-compatible with `Config`.
  // @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
  reactPlugin.configs.flat.recommended,
  // HACK: This is not type-compatible with `Config`.
  // @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
  reactPlugin.configs.flat["jsx-runtime"],
  // HACK: `eslint-plugin-react-hooks` does not provide recommended rule sets. https://github.com/facebook/react/issues/28313
  {
    // HACK: This is not type-compatible with `Config`.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    plugins: { "react-hooks": reactHooksPlugin },
    // HACK: This is not type-compatible with `Config`.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  // HACK: This is not type-compatible with `Config`.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  jsxA11yPlugin.flatConfigs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    settings: {
      react: { version: "detect" },
      formComponents: ["Form"],
      linkComponents: [
        { name: "Link", linkAttribute: "to" },
        { name: "NavLink", linkAttribute: "to" },
      ],
      "import/resolver": { typescript: {} },
    },
  },
];
