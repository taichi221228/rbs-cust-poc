import { useLocation } from "@remix-run/react";

export const useHeadline = () => {
	const location = useLocation();
	const [head] = location.pathname.split("/").filter(Boolean);

	return (head ?? "TOP").toUpperCase();
};
