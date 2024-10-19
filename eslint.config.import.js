/* HACK: `@types/eslint-plugin-import` is not found
 * @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment */
import importPlugin from "eslint-plugin-import";
import importAccessPlugin from "eslint-plugin-import-access/flat-config";

/**
 * @package
 * @type {import("eslint").Linter.Config[]}
 */
export const importConfigs = [
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  importPlugin.flatConfigs.recommended,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
  {
    plugins: { "import-access": importAccessPlugin },
    rules: {
      "import-access/jsdoc": [
        "error",
        {
          indexLoophole: true,
          filenameLoophole: true,
          defaultImportability: "public",
          treatSelfReferenceAs: "external",
        },
      ],
    },
  },
];
