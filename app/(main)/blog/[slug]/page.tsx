import { BlogPostDetail } from "@/components/BlogPostDetail";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data";

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = blogPosts.find((post) => post.slug === slug);

	if (!post) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-background">
			<BlogPostDetail post={post} />
		</main>
	);
}

export async function generateStaticParams() {
	return Object.keys(blogPosts).map((slug) => ({
		slug,
	}));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = blogPosts.find((post) => post.slug === slug);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: `${post.title} | Anuhas Dissanayake`,
		description: post.excerpt,
		openGraph: {
			title: post.title,
			description: post.excerpt,
			images: [post.coverImage],
		},
	};
}
