import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LuCalendar, LuClock } from "react-icons/lu";

import { BlogPost } from "@/types";

function BlogCard({ post }: { post: BlogPost }) {
	return (
		<div className="glass glass-hover rounded-xl p-6 h-full flex flex-col">
			<div className="flex-1">
				<div className="flex items-center space-x-2 mb-4">
					<Badge variant="outline">{post.category}</Badge>
				</div>

				<h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors leading-tight">
					<Link href={`/blog/${post.slug}`}>{post.title}</Link>
				</h3>

				<p className="text-muted-foreground text-sm leading-relaxed mb-4">
					{post.excerpt}
				</p>

				<div className="flex flex-wrap gap-1 mb-4">
					{post.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
						>
							{tag}
						</span>
					))}
				</div>
			</div>

			<div className="flex items-center justify-between pt-4 border-t border-border">
				<div className="flex items-center space-x-3 text-xs text-muted-foreground">
					<div className="flex items-center space-x-1">
						<LuCalendar className="w-3 h-3" />
						<span>{new Date(post.publishedAt).toLocaleDateString()}</span>
					</div>
					<div className="flex items-center space-x-1">
						<LuClock className="w-3 h-3" />
						<span>{post.readTime}</span>
					</div>
				</div>

				<Link href={`/blog/${post.slug}`}>
					<Button variant="outline" size="lg">
						Read More
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default BlogCard;
