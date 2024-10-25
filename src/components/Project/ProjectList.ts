import RTI from "../../assets/rti.png";
import Docturno from "../../assets/docturno_dashboard2.png";
import MaxCapital from "../../assets/maxcapital.png";

import config from "../../assets/priceChecker/config.png";
import home from "../../assets/priceChecker/home.png";
import menu from "../../assets/priceChecker/menu.png";
import product from "../../assets/priceChecker/product.png";
import updater from "../../assets/priceChecker/updater.png";
import notFound from "../../assets/priceChecker/notFound.png";

import DClogin from "../../assets/dataCollector/login.png";
import DChome from "../../assets/dataCollector/home.png";
import DCallProducts from "../../assets/dataCollector/allProducts.png";
import DCdocs from "../../assets/dataCollector/documents.png";
import DChistory from "../../assets/dataCollector/history.png";
import DClang from "../../assets/dataCollector/language.png";
import DCprinters from "../../assets/dataCollector/printers.png";
import DCproducts from "../../assets/dataCollector/product.png";
import DCprodSearch from "../../assets/dataCollector/productSearch.png";

export type ProjectListType = {
	thumbnail?: string;
	title: string;
	subtitle?: string;
	description: string;
	description2?: string;
	tags?: string[];
	href?: string;
	img?: string[];
};

export const ProjectList: ProjectListType[] = [
	{
		title: "Max Capital",
		subtitle: "Max Capital",
		thumbnail: MaxCapital,
		description:
			"Max Capital offers services in the areas of Sales & Trading, Capital Markets and Wealth Management, for institutional, corporate, and retail clients, based on a core principle: putting our client's interests first.",
		tags: ["ReactJS", "NextJS", "NextUI", "Tailwind", "Java", "Springboot", "GitLab"],
		href: "https://www.max.capital/",
	},
	{
		title: "Docturno",
		subtitle: "Docturno",
		thumbnail: Docturno,
		description:
			"Docturno is a website, where you can find health professionals and schedule appointments instantly in a fast and simple way.",
		tags: ["ReactJS", "NodeJS", "Tailwind", "AWS"],
		href: "https://www.docturno.com",
	},
	{
		title: "Data Collector App",
		subtitle: "RTI Latina SRL",
		thumbnail: RTI,
		description:
			"Hybrid ionic app that lets you do everything a data collector does, and more. Manage prices, print labels, scan barcodes, etc.",
		description2:
			"This app is mainly used on android devices. It's adapted so it can be used with phones and devices that specializes in this area (for example, an android device that has a built-in scanner, or printer. One of the main features, is the fact that it can print with ESCpos and ZPL/CPL, making it compatible with most thermal printers out there in the market. Another interesting features is the camera barcode scanner that scans EAN-13, CODE128, etc. It has it's own built-in store, so updates are very easy to install. But if I had to choose the most facinating hidden feature, is the fact that it uses UDP connections to connect to its local backend service. (It runs locally because the main product and database are PC local).",
		tags: ["ReactJS", "Ionic", "Android", "Java", "GitHub"],
		img: [
			DClogin,
			DChome,
			DCallProducts,
			DCdocs,
			DChistory,
			DClang,
			DCprinters,
			DCproducts,
			DCprodSearch,
		],
	},
	{
		title: "Price Checker App",
		subtitle: "RTI Latina SRL",
		thumbnail: RTI,
		description:
			"Hybrid ionic app that lets you check the product's information, by scanning its barcode.",
		description2:
			"This app is mainly used on low-end android devices with medium to big screens. It's main use is to show a product's information by scanning it. It has it's own build-in store, so everytime there's an update, the user is able to update it by pressing only one button. Ads are also part of this product. By setting a gif in the backend, its displayed on the app everytime it goes on standby (configurable in the app).",
		tags: ["ReactJS", "Ionic", "Android", "Java", "GitHub"],
		img: [config, home, menu, product, updater, notFound],
	},
];
