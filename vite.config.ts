import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitePlugin as remix } from "@remix-run/dev";
import serverAdapter from "hono-remix-adapter/vite";

declare module "@remix-run/node" {
	interface Future {
		v3_singleFetch: true;
	}
}

/** @private */
export default defineConfig({
	plugins: [
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
				v3_singleFetch: true,
				v3_lazyRouteDiscovery: true,
			},
		}),
		serverAdapter({ entry: "server.ts" }),
		tsconfigPaths(),
	],
});
