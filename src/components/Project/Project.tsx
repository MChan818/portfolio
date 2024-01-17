import FocusedListItem from "../FocusedList/FocusedListItem";
import { ProjectListType } from "./ProjectList";

import noImgFound from "../../assets/noImg.png";
import Tag from "../Tag/Tag";
import { useState } from "react";
import ImageModal from "../Modals/ImageModal";

const Project = (data: ProjectListType) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpenModal = () => {
		if (open === false) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		setOpen((open) => !open);
	};
	return (
		<>
			<a
				href={data.href}
				target="_blank"
				onClick={() => {
					handleOpenModal();
				}}
			>
				<FocusedListItem
					className={
						"w-full flex p-4 mt-2 hover: transition-all rounded-md cursor-pointer lg:group-hover:bg-[#222]/50"
					}
				>
					<>
						<div className="w-1/3 h-full">
							<img
								src={data.thumbnail || noImgFound}
								alt="Project thumbnail"
								width={200}
								height={48}
								className="rounded border-2 border-orange-300/10 transition object-scale-down group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
								loading="lazy"
								decoding="async"
							/>
						</div>
						<div className="w-2/3 h-full px-4">
							<h4 className="font-medium text-slate-200 hover:text-orange-300 focus-visible:text-orange-300  group/link text-base">
								{data.title}
							</h4>
							<p className="text-slate-500">{data.subtitle}</p>
							<p className="mt-2 text-sm leading-normal">{data.description}</p>
							<ul className="mt-2 flex flex-row flex-wrap">
								{data.tags?.map((string: string) => (
									<li className="mr-1.5 mt-2" key={string}>
										<Tag title={string} />
									</li>
								))}
							</ul>
						</div>
					</>
				</FocusedListItem>
			</a>
			{data.img ? (
				<ImageModal
					open={open}
					onClick={() => {
						handleOpenModal();
					}}
					images={data.img}
					title={data.title}
					description={data.description}
					description2={data.description2}
					disclaimer={
						data.title.includes("App")
							? "This app is sold under RTI LATINA SRL, so it's not on Play Store."
							: ""
					}
				/>
			) : (
				<></>
			)}
		</>
	);
};

export default Project;
