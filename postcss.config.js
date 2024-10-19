/**
 * @private
 * @type {import("postcss-load-config").Config}
 */
/* HACK: Suppress TypeScript errors due to incompatibility between `eslint-plugin-import-access` and `tsc` when using `checkJS`.
 * @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment */
export default {
  plugins: {
    "@pandacss/dev/postcss": {},
  },
};
