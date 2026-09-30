import { apiClient } from '@/api/client';
import { endpoints } from '@/api/endpoints';
import type { AppointmentRequest } from '@/api/types';
import type { AppointmentResponse, AppointmentService } from './appointment.service';
export const appointmentHttp: AppointmentService = { async create(input: AppointmentRequest) { return (await apiClient.post<AppointmentResponse>(endpoints.appointments, input)).data; } };
