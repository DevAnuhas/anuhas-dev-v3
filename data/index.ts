import { FaGithub, FaLinkedinIn, FaThreads } from "react-icons/fa6";
import { LuMail, LuMapPin } from "react-icons/lu";

export const socialLinks = [
	{
		href: "https://github.com/DevAnuhas",
		icon: FaGithub,
		label: "GitHub",
	},
	{
		href: "https://linkedin.com/in/profile-anuhas",
		icon: FaLinkedinIn,
		label: "LinkedIn",
	},
	{
		href: "https://www.threads.net/@im_anuhas",
		icon: FaThreads,
		label: "Threads",
	},
];

export const contactInfo = [
	{
		icon: LuMail,
		label: "Email",
		value: "contact@anuhas.dev",
		href: "mailto:contact@anuhas.dev",
	},
	{
		icon: LuMapPin,
		label: "Location",
		value: "Colombo, Sri Lanka",
		href: null,
	},
];

export const navItems = [
	{ href: "/", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export const gridItems = [
	{
		id: 1,
		title: "Discover my drive for AI and full-stack innovation",
		description: "Explore My Tech Journey!",
		className: "lg:col-span-3 md:col-span-6 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b1.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 2,
		title: "Tech enthusiast with a passion for development",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b2.svg",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "I'm open to global collaboration",
		description: "Connect Across Continents",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},

	{
		id: 5,
		title: "Peek into the setup where code comes to life",
		description: "Tour My Workspace!",
		className: "md:col-span-3 md:row-span-3 min-h-[35vh] lg:min-h-[60vh]",
		imgClassName:
			"w-full h-full md:!object-bottom md:[mask-image:linear-gradient(to_bottom,_black_65%,transparent)] [mask-image:linear-gradient(to_top,_black_35%,transparent)]",
		titleClassName: "justify-end",
		img: "/desk-setup.png",
		spareImg: "",
	},
	{
		id: 6,
		title: "Grab My CV Now!",
		description: "Reach me at contact@anuhas.dev",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName:
			"justify-center items-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const allProjects = [
	{
		id: 1,
		slug: "staygenius",
		title: "StayGenius",
		shortDescription:
			"AI-Powered Hotel Discovery Platform with intelligent recommendations and seamless booking experience.",
		thumbnail: "/placeholder.svg?height=300&width=500",
		techStack: ["Next.js", "TypeScript", "OpenAI", "MongoDB"],
		category: "AI/ML",
		githubUrl: "https://github.com/DevAnuhas/staygenius",
		liveUrl: "https://staygenius.vercel.app",
		featured: true,
	},
	{
		id: 2,
		slug: "travel-habarana",
		title: "Travel Habarana",
		shortDescription:
			"Safari Booking Application for managing safari and village tour bookings in Sri Lanka.",
		thumbnail: "/placeholder.svg?height=300&width=500",
		techStack: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
		category: "Full-Stack",
		githubUrl: "https://github.com/DevAnuhas/travel-habarana",
		liveUrl: undefined,
		featured: true,
	},
	{
		id: 3,
		slug: "portfolio-v2",
		title: "Portfolio Website v2",
		shortDescription:
			"Previous iteration of my portfolio built with React and styled-components.",
		thumbnail: "/placeholder.svg?height=300&width=500",
		techStack: ["React", "TypeScript", "TailwindCSS"],
		category: "Frontend",
		githubUrl: "https://github.com/DevAnuhas/portfolio-v2",
		liveUrl: undefined,
		featured: false,
	},
	{
		id: 4,
		slug: "task-manager",
		title: "Task Management System",
		shortDescription:
			"Full-stack task management application with team collaboration features.",
		thumbnail: "/placeholder.svg?height=300&width=500",
		techStack: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
		category: "Full-Stack",
		githubUrl: "https://github.com/DevAnuhas/task-manager",
		liveUrl: undefined,
		featured: false,
	},
	{
		id: 5,
		slug: "cloud-deployment-pipeline",
		title: "Cloud Deployment Pipeline",
		shortDescription:
			"Automated CI/CD pipeline for deploying containerized applications to cloud platforms.",
		thumbnail: "/placeholder.svg?height=300&width=500",
		techStack: ["Docker", "Kubernetes", "GitHub Actions", "AWS"],
		category: "DevOps",
		githubUrl: "https://github.com/DevAnuhas/cloud-deployment",
		liveUrl: undefined,
		featured: false,
	},
];

export const certifications = [
	{
		id: 1,
		title: "AI-Driven Fullstack Developer Professional Certification",
		provider: "STEM Link",
		completedDate: "May 2025",
		image:
			"https://res.cloudinary.com/travelhabarana/image/upload/v1749295147/STEM_Link_AIDF_Anuhas_cvo8lz.jpg",
		url: "https://stemlink.online/certificates/cmaid1grb0001wppcvfyokqzf",
	},
	{
		id: 2,
		title: "The Complete Full-Stack Web Development Bootcamp",
		provider: "Udemy",
		completedDate: "March 2025",
		image:
			"https://res.cloudinary.com/travelhabarana/image/upload/v1749295150/UC-55b7f71a-b6b7-4391-a284-1be857482c35_1_coqjrn.jpg",
		url: "https://ude.my/UC-55b7f71a-b6b7-4391-a284-1be857482c35",
	},
];

export const testimonials = [
	{
		quote:
			"Collaborating with Anuhas was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. His enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Anuhas is the ideal partner.",
		name: "John Doe",
		title: "Director of AlphaStream Technologies",
		img: null,
	},
	{
		quote:
			"Collaborating with Anuhas was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. His enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Anuhas is the ideal partner.",
		name: "John Doe",
		title: "Director of AlphaStream Technologies",
		img: null,
	},
];

export const education = [
	{
		id: 1,
		institution: "Cardiff Metropolitan University",
		degree: "BSc (Hons) in Software Engineering",
		duration: "2025 – 2026",
		startDate: "2025-05",
		endDate: "2026-12",
		description:
			"Pursuing a software engineering degree with focus on web development, data science, and artificial intelligence.",
		logo: "",
	},
	{
		id: 2,
		institution: "Achievers Internation Campus",
		degree: "Pearson HND in Software Engineering",
		duration: "2023 – 2024",
		startDate: "2023-06",
		endDate: "2024-11",
		description:
			"Completed the Pearson BTEC Higher National Diploma in Software Engineering.",
		logo: "",
	},
];

export const workExperience = [
	{
		id: 1,
		company: "Company Name",
		position: "Intern Software Engineer - Full-Stack",
		duration: "Jun 2025 – Present",
		startDate: "2025-06",
		endDate: "Present",
		description:
			"Developed AI-driven full-stack applications using Next.js, TypeScript, and modern web technologies. Specialized in creating scalable solutions with focus on user experience.",
		logo: "",
	},
	{
		id: 2,
		company: "Full-Stack Development",
		position: "Freelancer",
		duration: "2023 – Present",
		startDate: "2023",
		endDate: "Present",
		description:
			"Built custom web applications using Next.js, TypeScript, and modern web technologies for various clients. Delivered projects ranging from management platforms to booking systems.",
		logo: "",
	},
];
