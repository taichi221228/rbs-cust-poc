import importPlugin from "eslint-plugin-import";

/** @type {import("eslint").Linter.FlatConfig[]} */
export const importConfigs = [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      "import/resolver": {
        node: { extensions: [".ts", ".tsx"] },
        typescript: { alwaysTryTypes: true },
      },
    },
    rules: {
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc" },
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          pathGroups: [
            { group: "builtin", pattern: "@remix-run/**" },
            { group: "builtin", pattern: "react?(-dom)/server" },
            { group: "internal", pattern: "~/**" },
            { group: "sibling", pattern: "./**" },
            { group: "parent", pattern: "../**" },
          ],
          pathGroupsExcludedImportTypes: [],
        },
      ],
    },
  },
];
