import type { AppointmentRequest } from '@/api/types';
import type { AppointmentService } from './appointment.service';
export const appointmentMock: AppointmentService = { async create(_input: AppointmentRequest) { await new Promise((resolve) => window.setTimeout(resolve, 500)); return { id: `mock-${Date.now()}`, status: 'requested' }; } };
