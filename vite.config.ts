import { defineConfig } from "vite";
import resolveTsconfigPlugin from "vite-tsconfig-paths";
import { vitePlugin as resolveRemixPlugin } from "@remix-run/dev";
import resolveHonoPlugin from "hono-remix-adapter/vite";

declare module "@remix-run/node" {
	interface Future {
		v3_singleFetch: true;
	}
}

/** @private */
export default defineConfig({
	plugins: [
		resolveRemixPlugin({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
				v3_singleFetch: true,
				v3_lazyRouteDiscovery: true,
			},
		}),
		resolveHonoPlugin({ entry: "server.ts" }),
		resolveTsconfigPlugin(),
	],
});
