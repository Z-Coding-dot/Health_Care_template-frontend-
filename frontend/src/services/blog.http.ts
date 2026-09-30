import { apiClient } from '@/api/client';
import { endpoints } from '@/api/endpoints';
import type { BlogPost } from '@/data/blog';
import type { BlogService } from './blog.service';
export const blogHttp: BlogService = { async list() { return (await apiClient.get<BlogPost[]>(endpoints.blog)).data; }, async get(id) { return (await apiClient.get<BlogPost>(`${endpoints.blog}/${id}`)).data; } };
