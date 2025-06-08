"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	TooltipProvider,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	LuExternalLink,
	LuGithub,
	LuCalendar,
	LuArrowLeft,
} from "react-icons/lu";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiSharp,
	SiReact,
	SiNextdotjs,
	SiReactrouter,
	SiReacthookform,
	SiZod,
	SiTailwindcss,
	SiShadcnui,
	SiMui,
	SiFramer,
	SiLucide,
	SiRedux,
	SiClerk,
	SiNodedotjs,
	SiExpress,
	SiMysql,
	SiPostgresql,
	SiMongodb,
	SiFirebase,
	SiCloudinary,
	SiFigma,
	SiOpenai,
	SiLangchain,
	SiGoogleanalytics,
	SiDocker,
	SiKubernetes,
	SiPrisma,
	SiHackthebox,
} from "react-icons/si";
import {
	FadeInUp,
	SlideInLeft,
	SlideInRight,
} from "@/components/ui/motion-wrapper";
import { NotionRenderer } from "./NotionRenderer";

import type { Project } from "@/types";

interface ProjectDetailProps {
	project: Project;
}

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
	HTML5: SiHtml5,
	CSS3: SiCss3,
	JavaScript: SiJavascript,
	TypeScript: SiTypescript,
	"C#": SiSharp,
	React: SiReact,
	"Next.js": SiNextdotjs,
	"React Router": SiReactrouter,
	"React Hook Form": SiReacthookform,
	Zod: SiZod,
	TailwindCSS: SiTailwindcss,
	"Shadcn UI": SiShadcnui,
	"Material UI": SiMui,
	"Framer Motion": SiFramer,
	Lucide: SiLucide,
	Redux: SiRedux,
	Clerk: SiClerk,
	NodeJS: SiNodedotjs,
	ExpressJS: SiExpress,
	MySQL: SiMysql,
	PostgreSQL: SiPostgresql,
	MongoDB: SiMongodb,
	Firebase: SiFirebase,
	Cloudinary: SiCloudinary,
	Figma: SiFigma,
	OpenAI: SiOpenai,
	LangChain: SiLangchain,
	"Google Analytics": SiGoogleanalytics,
	Docker: SiDocker,
	Kubernetes: SiKubernetes,
	Prisma: SiPrisma,
};

export function ProjectDetail({ project }: ProjectDetailProps) {
	const completedDate = new Date(
		project.completedDate || ""
	).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<TooltipProvider>
			<div className="pt-32 px-6 pb-20">
				<div className="container max-w-4xl mx-auto">
					{/* Back Button */}
					<FadeInUp>
						<Link
							href="/projects"
							className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
						>
							<LuArrowLeft className="w-4 h-4 mr-2" />
							Back to Projects
						</Link>
					</FadeInUp>

					{/* Hero Section */}
					<div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
						<SlideInLeft>
							<div className="space-y-6">
								<div className="space-y-4">
									<h1 className="text-4xl md:text-5xl leading-tight font-bold">
										{project.title}
									</h1>
									<p className="text-xl text-muted-foreground leading-relaxed">
										{project.shortDescription}
									</p>
								</div>

								<div className="flex items-center space-x-4 text-sm text-muted-foreground">
									<div className="flex items-center space-x-2">
										<LuCalendar className="w-4 h-4" />
										<span>Completed {completedDate}</span>
									</div>
								</div>

								<div className="flex space-x-4">
									<Tooltip>
										<TooltipTrigger asChild>
											<Link
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button variant="glossy">
													<LuGithub className="w-4 h-4 mr-2" />
													View Code
												</Button>
											</Link>
										</TooltipTrigger>
										<TooltipContent>View source code on GitHub</TooltipContent>
									</Tooltip>

									{project.liveUrl && (
										<Tooltip>
											<TooltipTrigger asChild>
												<Link
													href={project.liveUrl}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Button className="glossy-button">
														<LuExternalLink className="w-4 h-4 mr-2" />
														Live Demo
													</Button>
												</Link>
											</TooltipTrigger>
											<TooltipContent>Visit the live project</TooltipContent>
										</Tooltip>
									)}
								</div>
							</div>
						</SlideInLeft>

						<SlideInRight>
							<div className="glass glass-hover rounded-xl overflow-hidden">
								<Image
									src={project.thumbnail || "/placeholder.svg"}
									alt={project.title}
									width={400}
									height={300}
									className="w-full h-auto aspect-[4/3] object-cover"
								/>
							</div>
						</SlideInRight>
					</div>

					{/* Tech Stack */}
					<FadeInUp className="mb-16">
						<div className="glass glass-hover rounded-xl p-8">
							<h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
							<div className="flex flex-wrap gap-4">
								{project.techStack.map((tech) => {
									const Icon = techIcons[tech] || SiHackthebox;
									return (
										<Badge
											key={tech}
											variant="secondary"
											className="glass-dark rounded-full px-4 py-2 text-sm flex items-center space-x-2"
										>
											<Icon className="w-4 h-4" />
											<span>{tech}</span>
										</Badge>
									);
								})}
							</div>
						</div>
					</FadeInUp>

					{/* Features */}
					{project.features && (
						<FadeInUp className="mb-16">
							<div className="glass glass-hover rounded-xl p-8">
								<h2 className="text-2xl font-semibold mb-6">Key Features</h2>
								<div className="grid md:grid-cols-2 gap-4">
									{project.features.map((feature, index) => (
										<div
											key={index}
											className="flex items-start space-x-3 p-4 glass-dark rounded-lg"
										>
											<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
											<p className="text-muted-foreground leading-relaxed">
												{feature}
											</p>
										</div>
									))}
								</div>
							</div>
						</FadeInUp>
					)}

					{/* Project Overview (Notion) */}
					<FadeInUp className="mb-16">
						<div className="glass glass-hover rounded-xl p-8">
							<h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
							<NotionRenderer notionPageId={`project-${project.slug}`} />
						</div>
					</FadeInUp>

					{/* Call to Action */}
					<FadeInUp>
						<div className="glass glass-hover rounded-xl p-8 text-center">
							<h2 className="text-2xl font-semibold mb-4">
								Interested in Similar Work?
							</h2>
							<p className="text-muted-foreground mb-6 leading-relaxed">
								I&apos;m always excited to work on challenging projects that
								push the boundaries of web development. Let&apos;s discuss how I
								can help bring your ideas to life.
							</p>
							<div className="flex justify-center space-x-4">
								<Link href="/contact">
									<Button className="glossy-button">Get In Touch</Button>
								</Link>
								<Link href="/projects">
									<Button variant="outline" className="glossy-button">
										View More Projects
									</Button>
								</Link>
							</div>
						</div>
					</FadeInUp>
				</div>
			</div>
		</TooltipProvider>
	);
}
