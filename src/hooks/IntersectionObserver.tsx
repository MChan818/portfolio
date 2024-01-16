import { RefObject, useEffect, useMemo, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
	const [isIntersecting, setIntersecting] = useState<boolean>(false);
	const id: string | undefined = ref.current?.id;
	const options = { threshold: 0.85 };

	const observer = useMemo(
		() => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), options),
		[ref],
	);

	useEffect(() => {
		observer.observe(ref.current!);
		return () => observer.disconnect();
	}, []);

	return { isIntersecting, id };
}
