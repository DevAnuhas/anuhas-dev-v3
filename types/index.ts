export interface Project {
	title: string;
	slug: string;
	thumbnail?: string;
	shortDescription: string;
	features?: string[];
	techStack: string[];
	githubUrl: string;
	liveUrl?: string;
	completedDate?: string;
	featured?: boolean;
}

export interface Post {
	id: number;
	slug: string;
	title: string;
	content: string;
	excerpt: string;
	tags: string[];
	category: string;
	publishedAt: string;
	readTime: string;
	featured: boolean;
}
