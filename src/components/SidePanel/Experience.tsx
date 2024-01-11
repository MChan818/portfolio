import Job from "../Job/Job";
import { JobList, JobListType } from "./JobList";

const Experience = () => {
	return (
		<div id="experience">
			<ul className="group/list">
				{JobList.map((job: JobListType, index: number) => (
					<Job data={job} key={index} />
				))}
			</ul>
		</div>
	);
};

export default Experience;
