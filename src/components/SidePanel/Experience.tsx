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
		<section id="experience" ref={ref}>
			<FocusedList>
				{JobList.map((job: JobListType, index: number) => (
					<Job data={job} key={index} />
				))}
			</FocusedList>
		</section>
	);
};

export default Experience;
