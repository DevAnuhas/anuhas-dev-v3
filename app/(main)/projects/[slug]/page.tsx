import { ProjectDetail } from "@/components/ProjectDetail";
import { notFound } from "next/navigation";
import { allProjects } from "@/data";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-background">
			<ProjectDetail project={project} />
		</main>
	);
}

export async function generateStaticParams() {
	return allProjects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		return {
			title: "Project Not Found",
		};
	}

	return {
		title: `${project.title}`,
		description: project.shortDescription,
		openGraph: {
			title: project.title,
			description: project.shortDescription,
			images: [project.thumbnail],
		},
		robots: {
			index: false,
			follow: true,
		},
	};
}
