import NavList from "./NavList";

export interface NavigationType {
	id: number;
	href: string;
	active: boolean;
	label: string;
}

const Navbar = () => {
	const NavigationList: NavigationType[] = [
		{
			id: 0,
			href: "aboutMe",
			active: true,
			label: "About",
		},
		{
			id: 1,
			href: "experience",
			active: false,
			label: "Experience",
		},
		{
			id: 2,
			href: "projects",
			active: false,
			label: "Projects",
		},
	];

	return (
		<nav className="nav hidden lg:block" aria-label="In-page navigation">
			<ul className="mt-16 w-max">
				<NavList array={NavigationList} />
			</ul>
		</nav>
	);
};

export default Navbar;
