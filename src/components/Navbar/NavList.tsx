import { useState } from "react";
import { NavigationType } from "./Navbar";
import NavListItem from "./NavListItem";

interface PropType {
	array: NavigationType[];
}

const NavList = ({ array }: PropType) => {
	const [isActive, setIsActive] = useState<number>(0);

	const handleActive = (index: number) => {
		if (typeof index !== "number") return;
		setIsActive(index);
	};

	return array.map((list: NavigationType, index) => {
		const active: boolean = index === isActive ? true : false;
		return (
			<li
				key={list.id}
				onClick={() => {
					handleActive(index);
				}}
			>
				<NavListItem href={list.href} active={active} label={list.label} id={list.id} />
			</li>
		);
	});
};

export default NavList;
