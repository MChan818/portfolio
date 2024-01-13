import React, { useContext, useEffect, useRef } from "react";
import useOnScreen from "../../hooks/IntersectionObserver";
import { AppContext } from "../Context/AppContext";
import FocusedList from "../FocusedList/FocusedList";
import FocusedListItem from "../FocusedList/FocusedListItem";

const Projects = () => {
	const { handleActive } = useContext(AppContext);
	const ref = useRef<HTMLDivElement>(null);
	const { isIntersecting, id } = useOnScreen(ref);

	useEffect(() => {
		const handleContextActive = () => {
			if (id === "projects" && isIntersecting) {
				handleActive(2);
			}
		};
		handleContextActive();
	}, [isIntersecting, handleActive, id]);

	return (
		<section id="projects" ref={ref}>
			<FocusedList>
				<FocusedListItem className="w-full flex p-4 mt-2 hover: transition-all rounded-md lg:group-hover:bg-[#222]/50">
					<div>aloha</div>
				</FocusedListItem>
				<FocusedListItem className="w-full flex p-4 mt-2 hover: transition-all rounded-md lg:group-hover:bg-[#222]/50">
					<div>hola</div>
				</FocusedListItem>
			</FocusedList>
		</section>
	);
};

export default Projects;
