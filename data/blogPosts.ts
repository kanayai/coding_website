export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  contentHtml: string;
  codeSnippet?: {
    code: string;
    language: 'r' | 'python';
  };
  tags?: string[];
}

export const blogPosts: BlogPost[] = [];

