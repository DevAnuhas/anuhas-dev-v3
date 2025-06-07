"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LuCalendar, LuClock, LuSearch, LuArrowRight } from "react-icons/lu";
import {
	FadeInUp,
	StaggerContainer,
	StaggerItem,
} from "@/components/ui/motion-wrapper";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/data/index";

const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

export default function BlogPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const filteredPosts = blogPosts.filter((post) => {
		const matchesSearch =
			post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			!selectedCategory || post.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const featuredPost = blogPosts.find((post) => post.featured);
	const regularPosts = filteredPosts.filter((post) => !post.featured);

	return (
		<main className="min-h-screen bg-background">
			<div className="pt-32 px-6 pb-20">
				<div className="container max-w-6xl mx-auto">
					<FadeInUp className="text-center mb-16">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Thoughts on development, technology, and innovation. Sharing
							insights from my journey as a full-stack developer.
						</p>
					</FadeInUp>

					{/* Featured Post */}
					{featuredPost && (
						<FadeInUp delay={0.2} className="mb-16">
							<div className="glass glass-hover rounded-xl overflow-hidden">
								<div className="p-8">
									<div className="flex items-center space-x-2 mb-4">
										<Badge className="bg-primary text-primary-foreground">
											Featured
										</Badge>
										<Badge variant="outline">{featuredPost.category}</Badge>
									</div>

									<h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
										<Link href={`/blog/${featuredPost.slug}`}>
											{featuredPost.title}
										</Link>
									</h2>

									<p className="text-muted-foreground text-lg leading-relaxed mb-6">
										{featuredPost.excerpt}
									</p>

									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-4 text-sm text-muted-foreground">
											<div className="flex items-center space-x-1">
												<LuCalendar className="w-4 h-4" />
												<span>
													{new Date(
														featuredPost.publishedAt
													).toLocaleDateString()}
												</span>
											</div>
											<div className="flex items-center space-x-1">
												<LuClock className="w-4 h-4" />
												<span>{featuredPost.readTime}</span>
											</div>
										</div>

										<Link href={`/blog/${featuredPost.slug}`}>
											<motion.div
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<Button>
													Read More
													<LuArrowRight className="w-4 h-4 ml-2" />
												</Button>
											</motion.div>
										</Link>
									</div>
								</div>
							</div>
						</FadeInUp>
					)}

					{/* Search and Filter */}
					<FadeInUp delay={0.3} className="mb-12">
						<div className="glass glass-hover rounded-xl p-6">
							<div className="flex flex-col md:flex-row gap-4 mb-6">
								<div className="relative flex-1">
									<LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
									<Input
										placeholder="Search blog posts..."
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
									<div>
										<Badge
											variant={
												selectedCategory === null ? "default" : "outline"
											}
											className="cursor-pointer"
											onClick={() => setSelectedCategory(null)}
										>
											All
										</Badge>
									</div>
									{categories.map((category) => (
										<div key={category}>
											<Badge
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
										</div>
									))}
								</div>
							</div>
						</div>
					</FadeInUp>

					{/* Blog Posts Grid */}
					<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{regularPosts.map((post) => (
							<StaggerItem key={post.id}>
								<BlogCard post={post} />
							</StaggerItem>
						))}
					</StaggerContainer>

					{filteredPosts.length === 0 && (
						<FadeInUp delay={0.4} className="text-center py-16">
							<div className="glass glass-hover rounded-xl p-12">
								<h3 className="text-xl font-semibold mb-2">
									No blog posts found
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

					{/* Coming Soon Notice */}
					<FadeInUp delay={0.5} className="mt-16">
						<div className="glass glass-hover rounded-xl p-8 text-center">
							<h3 className="text-xl font-semibold mb-4">
								More Content Coming Soon
							</h3>
							<p className="text-muted-foreground mb-6">
								I&apos;m actively working on new blog posts covering advanced
								topics in web development, AI integration, and modern
								development practices.
							</p>
							<Link href="/contact">
								<Button variant="outline" className="glossy-button">
									Subscribe for Updates
								</Button>
							</Link>
						</div>
					</FadeInUp>
				</div>
			</div>
			<CTASection />
		</main>
	);
}
