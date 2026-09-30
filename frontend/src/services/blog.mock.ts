import { blogPosts } from '@/data/blog';
import type { BlogService } from './blog.service';
export const blogMock: BlogService = { async list() { return blogPosts; }, async get(id) { return blogPosts.find((post) => post.id === id); } };
