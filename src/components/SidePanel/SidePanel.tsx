import AboutMe from "./AboutMe";
import Experience from "./Experience";
const SidePanel = () => {
	return (
		<div className="pt-24 lg:w-1/2 lg:py-24">
			<AboutMe />
			<Experience />
		</div>
	);
};

export default SidePanel;
