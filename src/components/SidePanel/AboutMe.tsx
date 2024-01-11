const AboutMe = () => {
	return (
		<section id="aboutMe" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
			</div>
			<div>
				<p className="mb-4">
					I've always been a tech kid, so I've grown surrounded by computers, gaming consoles, electronics, etc. That's why I always assumed
					my dream carreer was Electronic Engineering. It wasn't until de Covid-19 pandemic, after spending hours on the computer browsing
					the internet, that I realised my passion lied in programming and changed carreer to Software Engineering. Fast-foward to today,
					I've worked for 2 start-up companies, created 2 different products from scratch, and never stopped learning about the world of web
					development.
				</p>
				<p className="mb-4">
					{"My main focus these days lies in building new products and refactoring old projects at "}
					<a
						className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
						href="https://docturno.com/"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="advertising agency (opens in a new tab)"
					>
						Docturno
					</a>
					{" . "} When I'm not coding, I'm studying to get my Engineering degree at Universidad de Buenos Aires.
				</p>
				<p className="mb-4">
					In my free time, I like to play football tournaments, play the guitar and grind in League of Legends and CS:GO.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;
