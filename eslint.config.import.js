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
            "index",
            "parent",
            "sibling",
          ],
          "newlines-between": "always",
          pathGroups: [
            {
              group: "builtin",
              pattern: "@remix-run/**",
              position: "after",
            },
            {
              group: "external",
              pattern: "react?(-*){,/**}",
              position: "before",
            },
            {
              group: "external",
              pattern: "styled-system/**",
              position: "before",
            },
            { group: "index", pattern: "~/**" },
            { group: "parent", pattern: "../**" },
            { group: "sibling", pattern: "./**" },
          ],
          distinctGroup: false,
          pathGroupsExcludedImportTypes: [],
        },
      ],
    },
  },
];
