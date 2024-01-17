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
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
					Projects
				</h2>
			</div>
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
						img={project?.img}
					/>
				))}
			</FocusedList>
		</section>
	);
};

export default Projects;
