import { useHeadline } from "~/hooks/use-headline";

/** @package */
export function Header() {
	const headline = useHeadline();

	return (
		<header>
			<h1>{headline}</h1>
		</header>
	);
}
