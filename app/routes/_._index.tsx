import type { MetaFunction } from "@remix-run/node";

/** @private */
export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

/** @private */
export default function Route() {
	return <h1>Top Page</h1>;
}
