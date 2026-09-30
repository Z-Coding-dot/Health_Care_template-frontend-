import { apiClient } from '@/api/client';
import { endpoints } from '@/api/endpoints';
import type { ContactRequest } from '@/api/types';
import type { ContactService } from './contact.service';
export const contactHttp: ContactService = { async send(input: ContactRequest) { return (await apiClient.post<{ received: boolean }>(endpoints.contact, input)).data; } };
