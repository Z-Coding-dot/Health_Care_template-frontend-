import { apiClient } from '@/api/client';
import { endpoints } from '@/api/endpoints';
import type { Doctor } from '@/data/doctors';
import type { DoctorsService } from './doctors.service';
export const doctorsHttp: DoctorsService = { async list() { return (await apiClient.get<Doctor[]>(endpoints.doctors)).data; }, async get(id) { return (await apiClient.get<Doctor>(`${endpoints.doctors}/${id}`)).data; } };
