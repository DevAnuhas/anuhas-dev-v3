"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LuSearch } from "react-icons/lu";
import {
	FadeInUp,
	StaggerContainer,
	StaggerItem,
} from "@/components/ui/motion-wrapper";
import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/data/index";
import CTASection from "@/components/CTASection";

const categories = Array.from(new Set(allProjects.map((p) => p.category)));

export default function ProjectsPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const filteredProjects = allProjects.filter((project) => {
		const matchesSearch =
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			!selectedCategory || project.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	return (
		<main className="min-h-screen bg-background">
			<div className="pt-32 px-6 pb-20">
				<div className="container max-w-6xl mx-auto">
					<FadeInUp className="text-center mb-16">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							All Projects
						</h1>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							A comprehensive showcase of my development work, from AI-powered
							applications to full-stack web solutions.
						</p>
					</FadeInUp>

					{/* Search and Filter */}
					<FadeInUp className="mb-12">
						<div className="glass glass-hover rounded-xl p-6">
							<div className="flex flex-col md:flex-row gap-4 mb-6">
								<div className="relative flex-1">
									<LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
									<Input
										placeholder="Search projects..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className="pl-10 glass-dark border-0"
									/>
								</div>
							</div>

							<div className="space-y-3">
								<h3 className="text-sm font-medium text-muted-foreground">
									Filter by Category
								</h3>
								<div className="flex flex-wrap gap-2">
									<Badge
										variant={selectedCategory === null ? "default" : "outline"}
										className="cursor-pointer"
										onClick={() => setSelectedCategory(null)}
									>
										All
									</Badge>
									{categories.map((category) => (
										<Badge
											key={category}
											variant={
												selectedCategory === category ? "default" : "outline"
											}
											className="cursor-pointer"
											onClick={() =>
												setSelectedCategory(
													selectedCategory === category ? null : category
												)
											}
										>
											{category}
										</Badge>
									))}
								</div>
							</div>
						</div>
					</FadeInUp>

					{/* Projects Grid */}
					<TooltipProvider>
						<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredProjects.map((project) => (
								<StaggerItem key={project.id}>
									<ProjectCard project={project} />
								</StaggerItem>
							))}
						</StaggerContainer>
					</TooltipProvider>

					{filteredProjects.length === 0 && (
						<FadeInUp className="text-center py-16">
							<div className="glass glass-hover rounded-xl p-12">
								<h3 className="text-xl font-semibold mb-2">
									No projects found
								</h3>
								<p className="text-muted-foreground mb-6">
									Try adjusting your search terms or filters to find what
									you&apos;re looking for.
								</p>
								<Button
									onClick={() => {
										setSearchTerm("");
										setSelectedCategory(null);
									}}
									variant="outline"
								>
									Clear Filters
								</Button>
							</div>
						</FadeInUp>
					)}
				</div>
			</div>
			<CTASection />
		</main>
	);
}
