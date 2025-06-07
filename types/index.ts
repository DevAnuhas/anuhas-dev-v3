export interface Project {
	title: string;
	slug: string;
	thumbnail?: string;
	shortDescription: string;
	techStack: string[];
	featured?: boolean;
	githubUrl: string;
	liveUrl?: string;
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
