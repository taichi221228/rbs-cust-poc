import { Outlet } from "@remix-run/react";

import { css } from "styled-system/css";

import { Header } from "./_/header";

/** @private */
export default function _() {
	return (
		<main className={css({ inlineSize: "content", marginInline: "auto" })}>
			<Header />
			<Outlet />
		</main>
	);
}
