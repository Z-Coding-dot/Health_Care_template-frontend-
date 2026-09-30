import { apiClient } from '@/api/client';
import { endpoints } from '@/api/endpoints';
import type { Department } from '@/data/departments';
import type { DepartmentsService } from './departments.service';
export const departmentsHttp: DepartmentsService = { async list() { return (await apiClient.get<Department[]>(endpoints.departments)).data; }, async get(id) { return (await apiClient.get<Department>(`${endpoints.departments}/${id}`)).data; } };
