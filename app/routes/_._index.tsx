import {
	type LoaderFunction,
	type MetaFunction,
	redirect,
} from "@remix-run/node";

/** @private */
export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

/** @private */
export const loader: LoaderFunction = () => {
	return redirect("/todo");
};
