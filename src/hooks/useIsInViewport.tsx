import { useEffect, useMemo, useState } from "react";

export const useIsInViewport = (ref: any) => {
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.75,
	};

	const observer = useMemo(
		() =>
			new IntersectionObserver(
				([entry]) => setIsIntersecting(entry.isIntersecting),
				options
			),
		[]
	);

	useEffect(() => {
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, observer]);

	return isIntersecting;
};
