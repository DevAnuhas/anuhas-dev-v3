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

export interface BlogPost {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	publishedAt: string;
	content: string;
	tags: string[];
	category: string;
	readTime: string;
	featured: boolean;
	notionPageId: string;
	coverImage: string;
	author: {
		name: string;
		avatar: string;
	};
}
