import { z } from 'zod';

export const userSchema = z.object({ name: z.string(), role: z.enum(['patient', 'staff']) });
export const appointmentRequestSchema = z.object({ department: z.string(), doctor: z.string(), date: z.string(), time: z.string(), name: z.string(), email: z.string().email(), phone: z.string(), reason: z.string() });
export const contactRequestSchema = z.object({ name: z.string(), email: z.string().email(), message: z.string() });
export type UserResponse = z.infer<typeof userSchema>;
export type AppointmentRequest = z.infer<typeof appointmentRequestSchema>;
export type ContactRequest = z.infer<typeof contactRequestSchema>;
export type ApiError = { code: string; message: string; details?: Record<string, string[]> };
export type ApiResponse<T> = { data: T; message?: string };
