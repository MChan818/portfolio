import { useContext, useEffect, useRef } from "react";
import useOnScreen from "../../hooks/IntersectionObserver";
import { AppContext } from "../Context/AppContext";

const AboutMe = () => {
	const { handleActive } = useContext(AppContext);
	const ref = useRef<HTMLDivElement>(null);
	const { isIntersecting, id } = useOnScreen(ref);

	useEffect(() => {
		const handleContextActive = () => {
			if (id === "aboutMe" && isIntersecting) {
				handleActive(0);
			}
		};
		handleContextActive();
	}, [isIntersecting, handleActive, id]);

	return (
		<section
			id="aboutMe"
			ref={ref}
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
					About
				</h2>
			</div>
			<div>
				<p className="mb-4">
					Hi there! My name is Maximiliano Chan. I've always been a tech kid, surrounded
					by computers, gaming consoles, electronics, etc. So growing up, it was always a
					no-brainer to go for an Engineering carreer. At first, Electronics Engineering
					was my go-to choice, but soon realised that it was a mistake. My true passion
					lied in software, where I can always discover new technologies to play with.
					Fast-foward to today, I've worked for 2 start-up companies, having created 2 new
					products from scratch, and always enjoyed the process of doing so.
				</p>
				<p className="mb-4">
					{"My main focus these days lies in building new products at "}
					<a
						className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
						href="https://docturno.com/"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="advertising agency (opens in a new tab)"
					>
						Docturno
					</a>
					{". "} When I'm not coding, I'm studying to get my Engineering degree at
					Universidad de Buenos Aires.
				</p>
				<p className="mb-4">
					In my free time, it's not like I'm always coding (Like right now doing this
					Portfolio). I like playing football tournaments, playing the guitar and enjoy
					some grinding in League of Legends or CS:GO.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;
