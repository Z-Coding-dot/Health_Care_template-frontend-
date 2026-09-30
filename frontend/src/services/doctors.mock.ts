import { doctors } from '@/data/doctors';
import { getCached, setCached } from './cache';
import type { DoctorsService } from './doctors.service';
export const doctorsMock: DoctorsService = { async list() { const cached = getCached<Awaited<ReturnType<DoctorsService['list']>>>('doctors'); if (cached) return cached; return setCached('doctors', doctors); }, async get(id) { return (await doctorsMock.list()).find((doctor) => doctor.id === id); } };
