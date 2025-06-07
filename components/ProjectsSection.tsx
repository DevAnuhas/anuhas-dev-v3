"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	FadeInUp,
	StaggerContainer,
	StaggerItem,
} from "@/components/ui/motion-wrapper";
import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/data/index";

export default function ProjectsSection() {
	return (
		<section className="py-20 px-8">
			<div className="container max-w-6xl mx-auto">
				<FadeInUp className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						A small selection of{" "}
						<span className="text-primary">recent projects</span>
					</h2>
				</FadeInUp>

				<StaggerContainer className="grid md:grid-cols-2 gap-8 mb-12">
					{allProjects.slice(0, 4).map((project) => (
						<StaggerItem key={project.id}>
							<ProjectCard project={project} />
						</StaggerItem>
					))}
				</StaggerContainer>

				<FadeInUp delay={0.4} className="text-center">
					<Link href="/projects">
						<Button className="glossy-button">View All Projects</Button>
					</Link>
				</FadeInUp>
			</div>
		</section>
	);
}
