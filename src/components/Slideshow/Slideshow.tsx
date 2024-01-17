import React from "react";

const delay = 4000;

interface PropType {
	images: string[];
	largeImage?: boolean;
}

const Slideshow = (data: PropType) => {
	const [index, setIndex] = React.useState<number>(0);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const timeoutRef = React.useRef<any>(null);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) => (prevIndex === data.images.length - 1 ? 0 : prevIndex + 1)),
			delay,
		);

		return () => {
			resetTimeout();
		};
	}, [index, data.images]);

	return (
		<div className={`mx-0 my-auto overflow-hidden ${data.largeImage ? "lg:max-w-sm" : "lg:max-w-lg"}`}>
			<div
				className="whitespace-nowrap ease-in-out duration-1000"
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{data.images.map((image, index) => (
					<img
						src={image}
						alt="No image found"
						className="inline-block w-full rounded-sm"
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Slideshow;
