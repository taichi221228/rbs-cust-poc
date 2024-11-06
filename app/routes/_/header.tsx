import { css } from "styled-system/css";

import { useHeadline } from "~/hooks/use-headline";

/** @package */
export function Header() {
	const headline = useHeadline();

	return (
		<header>
			<h1 className={css({ fontSize: "headline" })}>{headline}</h1>
		</header>
	);
}
