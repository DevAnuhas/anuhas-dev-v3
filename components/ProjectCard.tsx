import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
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
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LuExternalLink, LuGithub } from "react-icons/lu";

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

interface Project {
	title: string;
	slug: string;
	thumbnail?: string;
	shortDescription: string;
	techStack: string[];
	featured?: boolean;
	githubUrl: string;
	liveUrl?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="glass glass-hover rounded-xl overflow-hidden group h-full flex flex-col">
			<div className="relative overflow-hidden">
				<Image
					src={project.thumbnail || "/placeholder.svg"}
					alt={project.title}
					width={500}
					height={300}
					className="w-full h-48 object-cover"
				/>
				<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
				{project.featured && (
					<div className="absolute top-4 left-4">
						<Badge className="bg-primary text-primary-foreground">
							Featured
						</Badge>
					</div>
				)}
			</div>

			<div className="p-6 space-y-4 flex-1 flex flex-col">
				<div className="flex-1">
					<h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
						<Link href={`/projects/${project.slug}`}>{project.title}</Link>
					</h3>
					<p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
						{project.shortDescription}
					</p>

					<div className="flex flex-wrap gap-1 mb-4">
						{project.techStack.slice(0, 3).map((tech, index) => {
							const Icon = techIcons[tech] || SiHackthebox;
							return (
								<Tooltip key={index}>
									<TooltipTrigger asChild>
										<div className="glass-dark p-2 rounded-full">
											<Icon className="w-4 h-4" />
										</div>
									</TooltipTrigger>
									<TooltipContent>{tech}</TooltipContent>
								</Tooltip>
							);
						})}
						{project.techStack.length > 3 && (
							<div className="glass-dark p-2 rounded-full flex items-center justify-center">
								<span className="text-xs w-4 h-4">
									+{project.techStack.length - 3}
								</span>
							</div>
						)}
					</div>
				</div>

				<div className="flex items-center justify-between pt-4 border-t border-border">
					<Link href={`/projects/${project.slug}`}>
						<Button variant="outline" size="lg">
							View Details
						</Button>
					</Link>

					<div className="flex space-x-2">
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="glass glass-hover p-2 rounded-full block"
								>
									<LuGithub className="w-4 h-4" />
								</Link>
							</TooltipTrigger>
							<TooltipContent>View GitHub Repo</TooltipContent>
						</Tooltip>

						{project.liveUrl && (
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="glass glass-hover p-2 rounded-full block"
									>
										<LuExternalLink className="w-4 h-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>View Live Demo</TooltipContent>
							</Tooltip>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
