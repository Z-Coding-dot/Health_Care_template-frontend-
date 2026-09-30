import type { Doctor } from '@/data/doctors';
export interface DoctorsService { list(): Promise<Doctor[]>; get(id: string): Promise<Doctor | undefined>; }
