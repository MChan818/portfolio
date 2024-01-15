export interface JobListType {
	title: string;
	seniority?: string;
	position?: string;
	description: string;
	website?: string;
	start: string;
	end: string;
	tags: string[];
}

export const JobList: JobListType[] = [
	{
		title: "Frontend Developer | Docturno",
		seniority: "SSR",
		description:
			"Create high-quality, robust, scalable code for the main product. Maintain and refactor old projects into new, modern and more appealing products. Bring new ideas and implementing them, while helping others on their tasks.",
		website: "https://www.docturno.com",
		start: "Feb 2023",
		end: "Present",
		tags: [
			"ReactJS",
			"React Native",
			"CSS3",
			"TypeScript",
			"JavaScript",
			"Java",
			"AWS",
			"NodeJS",
			"ExpressJS",
			"Tailwind",
			"MUI",
		],
	},
	{
		title: "Frontend Developer | RTI Latina SRL",
		seniority: "JR",
		description:
			"Create hybrid apps for product prices and stock management that works on both Android and web with only 1 code base. Getting feedback from customers and the customer support team, to further develop the app.",
		website: "https://rtitec.com.ar/",
		start: "Apr 2021",
		end: "Sep 2023",
		tags: ["ReactJS", "CSS3", "TypeScript", "JavaScript", "Java", "Ionic", "Android"],
	},
];
