import Navbar from "./Navbar/Navbar";

const MainInfo = () => {
	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
			<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Maximiliano Chan</h1>
			<h4 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Frontend Developer at Docturno</h4>
			<p className="mt-4 max-w-xs leading-normal">I build modern, excellent products for web and mobile.</p>
			<Navbar/>
		</header>
	);
};

export default MainInfo;
