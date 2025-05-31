export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  category?: string;
  readTime: number;
  content?: string;
  tags?: string[];
}