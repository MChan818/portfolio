import RTI from "../../assets/rti.png";
import Docturno from "../../assets/docturno_dashboard2.png";

export type ProjectListType = {
	thumbnail?: string;
	title: string;
	subtitle?: string;
	description: string;
	description2?: string;
	tags?: string[];
	href?: string;
};

export const ProjectList: ProjectListType[] = [
	{
		title: "Docturno's Patient's dashboard",
		subtitle: "Docturno",
		thumbnail: Docturno,
		description:
			"Docturno is a website, where you can find health professionals and schedule appointments instantly in a fast and simple way.",
		tags: ["ReactJS", "AWS", "NodeJS", "Tailwind"],
		href: "https://www.docturno.com",
	},
	{
		title: "Data Collector App",
		subtitle: "RTI LATINA SRL",
		thumbnail: RTI,
		description:
			"Hybrid ionic app that lets you do everything a data collector does, and more. Manage prices, print labels, scan barcodes, etc.",
		description2:
			"Privacy Agreement. If you want to know more about this app, feel free to contact me.",
		tags: ["ReactJS", "Ionic", "Android", "Java"],
	},
	{
		title: "Price Checker App",
		subtitle: "RTI LATINA SRL",
		thumbnail: RTI,
		description:
			"Hybrid ionic app that lets you check the product's information, by scanning its barcode.",
		description2:
			"Privacy Agreement. If you want to know more about this app, feel free to contact me.",
		tags: ["ReactJS", "Ionic", "Android", "Java"],
	},
];
