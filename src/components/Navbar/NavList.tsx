import { useContext } from "react";
import { NavigationType } from "./Navbar";
import NavListItem from "./NavListItem";
import { AppContext } from "../Context/AppContext";

interface PropType {
	array: NavigationType[];
}

const NavList = ({ array }: PropType) => {
	const { isActive, handleActive } = useContext(AppContext);

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
