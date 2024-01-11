import Tag from "../Tag/Tag";
import { JobListType } from "../SidePanel/JobList";

interface PropType {
	data: JobListType;
}

const Job = ({ data }: PropType) => {
	return (
		<a href={data.website} target="_blank">
			<div className="group pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
				<div className="lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
					<li className="w-full flex p-4 mt-2 hover: transition-all rounded-md lg:group-hover:bg-[#222]/50">
						<div className="w-1/3 z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
							{data.start} - {data.end}
						</div>
						<div className="w-2/3 h-full">
							<h4 className="font-medium text-slate-200 hover:text-orange-300 focus-visible:text-orange-300  group/link text-base">
								{data.title}
							</h4>
							<p className="text-slate-500">{data.seniority}</p>
							<p className="mt-2 text-sm leading-normal">{data.description}</p>
							<ul className="mt-2 flex flex-row flex-wrap">
								{data.tags.map((string: string) => (
									<li className="mr-1.5 mt-2" key={string}>
										<Tag title={string} />
									</li>
								))}
							</ul>
						</div>
					</li>
				</div>
			</div>
		</a>
	);
};

export default Job;
