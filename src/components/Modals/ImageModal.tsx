import Slideshow from "../Slideshow/Slideshow";

interface PropType {
	images: string[];
	open: boolean;
	onClick: () => void;
	title: string;
	description: string;
	description2?: string;
	disclaimer?: string;
}

const ImageModal = (data: PropType) => {
	return data.open ? (
		<div className="w-screen h-screen bg-black/85 z-50 fixed top-0 left-0">
			<div
				className="fixed top-5 right-5 z-51 text-white/50 text-2xl cursor-pointer hover:text-white"
				onClick={data.onClick}
			>
				╳
			</div>
			<div className="w-full h-full flex flex-col items-center overflow-auto lg:flex-row">
				<div className="w-2/3 h-full flex justify-center items-center lg:w-1/2">
					<Slideshow images={data.images} largeImage={data.title === "Data Collector App" ?? false}/>
				</div>
				<div className="w-full h-full px-8 lg:py-36 lg:w-1/2">
					<h2 className="mt-3 text-lg font-medium text-slate-200 sm:text-3xl">
						{data.title}
					</h2>
					<p className="mt-2 mr-4">{data.disclaimer}</p>
					<p className="mt-2 mr-4">{data.description}</p>
					<p className="mt-2 mr-4">{data.description2}</p>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};

export default ImageModal;
