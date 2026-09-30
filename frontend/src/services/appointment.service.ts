import type { AppointmentRequest } from '@/api/types';
export type AppointmentResponse = { id: string; status: 'requested' | 'confirmed' };
export interface AppointmentService { create(input: AppointmentRequest): Promise<AppointmentResponse>; }
