import { apiClient } from '@/api/client';
import { endpoints } from '@/api/endpoints';
import type { Service } from '@/data/services';
import type { ServicesService } from './services.service';
export const servicesHttp: ServicesService = { async list() { return (await apiClient.get<Service[]>(endpoints.services)).data; }, async get(id) { return (await apiClient.get<Service>(`${endpoints.services}/${id}`)).data; } };
