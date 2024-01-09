import React from "react";
import NavListItem from "./NavListItem";

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
	const handleActive = (index: number) => {
		const currentSelectedElement = NavigationList.findIndex((e) => e.active === true);
		if (currentSelectedElement) {
			NavigationList[currentSelectedElement].active = false;
		} else {
			NavigationList.forEach((e) => (e.active = false));
		}
        NavigationList[index].active = true;
        console.log(NavigationList)
	};

	return (
		<nav className="nav hidden lg:block" aria-label="In-page navigation">
			<ul className="mt-16 w-max" key={1}>
				{NavigationList.map((list, index) => {
					return (
						<li key={list.id} onClick={() => handleActive(index)}>
							<NavListItem href={list.href} active={list.active} label={list.label} id={list.id} />
						</li>
					);
				})}
				{/* <li>
					<a className={"group flex items-center py-3 active"} href="#aboutMe">
						<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
						<span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
							About
						</span>
					</a>
				</li> */}
			</ul>
		</nav>
	);
};

export default Navbar;
