import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export const nodeConfigs = [
  {
    files: ["eslint.config*.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];
