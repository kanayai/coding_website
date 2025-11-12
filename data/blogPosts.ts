export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  contentHtml: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [];

