"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LuClock, LuCalendar, LuArrowLeft, LuShare2 } from "react-icons/lu";
import { FadeInUp, SlideInLeft } from "@/components/ui/motion-wrapper";
import { NotionRenderer } from "@/components/NotionRenderer";

import type { BlogPost } from "@/types";

interface BlogPostDetailProps {
	post: BlogPost;
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
	const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const sharePost = () => {
		if (navigator.share) {
			navigator
				.share({
					title: post?.title,
					text: "Check out this post on AnuhasDev!",
					url: window.location.href,
				})
				.catch((err) => {
					console.error("Error sharing:", err);
				});
		} else {
			// Fallback for browsers that don’t support navigator.share
			navigator.clipboard.writeText(window.location.href);
		}
	};

	return (
		<div className="pt-32 px-6 pb-20">
			<div className="container max-w-4xl mx-auto">
				{/* Back Button */}
				<FadeInUp>
					<Link
						href="/blog"
						className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
					>
						<LuArrowLeft className="w-4 h-4 mr-2" />
						Back to Blog
					</Link>
				</FadeInUp>

				{/* Post Header */}
				<SlideInLeft className="mb-8">
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<Badge>{post.category}</Badge>
						</div>
						<h1 className="text-4xl md:text-5xl leading-tight font-bold">
							{post.title}
						</h1>
						<p className="text-xl text-muted-foreground leading-relaxed">
							{post.excerpt}
						</p>

						<div className="flex items-center justify-between pt-4">
							<div className="flex items-center space-x-4">
								<div className="flex items-center space-x-2">
									<Image
										src={post.author.avatar || "/profile.svg"}
										alt={post.author.name}
										width={40}
										height={40}
										className="rounded-full"
									/>
									<span className="text-sm">{post.author.name}</span>
								</div>
							</div>

							<div className="flex items-center space-x-4 text-sm text-muted-foreground">
								<div className="flex items-center space-x-1">
									<LuCalendar className="w-4 h-4" />
									<span>{publishedDate}</span>
								</div>
								<div className="flex items-center space-x-1">
									<LuClock className="w-4 h-4" />
									<span>{post.readTime}</span>
								</div>
							</div>
						</div>
					</div>
				</SlideInLeft>

				{/* Cover Image */}
				<FadeInUp className="mb-12">
					<div className="glass glass-hover rounded-xl overflow-hidden">
						<Image
							src={post.coverImage || "/placeholder.svg"}
							alt={post.title}
							width={1200}
							height={600}
							className="w-full h-auto aspect-[16/9] object-cover"
							priority
						/>
					</div>
				</FadeInUp>

				{/* Post Content */}
				<FadeInUp className="mb-12">
					<div className="glass glass-hover rounded-xl p-8">
						<NotionRenderer notionPageId={post.notionPageId} />
					</div>
				</FadeInUp>

				{/* Tags */}
				<FadeInUp className="mb-12">
					<div className="flex flex-wrap gap-2">
						{post.tags.map((tag) => (
							<Badge key={tag} variant="outline">
								{tag}
							</Badge>
						))}
					</div>
				</FadeInUp>

				{/* Share and Navigation */}
				<FadeInUp>
					<div className="glass glass-hover rounded-xl p-8">
						<div className="flex flex-col md:flex-row items-center justify-between gap-4">
							<Button
								variant="outline"
								className="glossy-button"
								onClick={sharePost}
							>
								<LuShare2 className="w-4 h-4 mr-2" />
								Share Article
							</Button>

							<div className="flex space-x-4">
								<Link href="/blog">
									<Button variant="outline" className="glossy-button">
										More Articles
									</Button>
								</Link>
								<Link href="/contact">
									<Button className="glossy-button">Get In Touch</Button>
								</Link>
							</div>
						</div>
					</div>
				</FadeInUp>
			</div>
		</div>
	);
}
