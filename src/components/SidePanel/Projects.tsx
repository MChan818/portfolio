import { useContext, useEffect, useRef } from "react";
import useOnScreen from "../../hooks/IntersectionObserver";
import { AppContext } from "../Context/AppContext";
import FocusedList from "../FocusedList/FocusedList";
import Project from "../Project/Project";

import { ProjectList, ProjectListType } from "../Project/ProjectList";

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
				{ProjectList.map((project: ProjectListType, index: number) => (
					<Project
						title={project.title}
						subtitle={project?.subtitle}
						thumbnail={project?.thumbnail}
						description={project.description}
						description2={project?.description2}
						tags={project?.tags}
						href={project?.href}
						key={index}
					/>
				))}
			</FocusedList>
		</section>
	);
};

export default Projects;
