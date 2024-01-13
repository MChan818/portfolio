import { useContext, useEffect, useRef } from "react";
import FocusedList from "../FocusedList/FocusedList";
import Job from "../Job/Job";
import { JobList, JobListType } from "../Job/JobList";
import { AppContext } from "../Context/AppContext";
import useOnScreen from "../../hooks/IntersectionObserver";

const Experience = () => {
	const { handleActive } = useContext(AppContext);
	const ref = useRef<HTMLDivElement>(null);
	const { isIntersecting, id } = useOnScreen(ref);

	useEffect(() => {
		const handleContextActive = () => {
			if (id === "experience" && isIntersecting) {
				handleActive(1);
			}
		};
		handleContextActive();
	}, [isIntersecting, handleActive, id]);

	return (
		<section
			id="experience"
			ref={ref}
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="Work experience"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
					Experience
				</h2>
			</div>
			<FocusedList>
				{JobList.map((job: JobListType, index: number) => (
					<Job data={job} key={index} />
				))}
			</FocusedList>
		</section>
	);
};

export default Experience;
