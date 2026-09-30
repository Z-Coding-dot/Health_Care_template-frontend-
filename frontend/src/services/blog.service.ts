import type { BlogPost } from '@/data/blog';
export interface BlogService { list(): Promise<BlogPost[]>; get(id: string): Promise<BlogPost | undefined>; }
