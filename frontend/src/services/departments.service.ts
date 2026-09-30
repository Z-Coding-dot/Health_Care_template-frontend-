import type { Department } from '@/data/departments';
export interface DepartmentsService { list(): Promise<Department[]>; get(id: string): Promise<Department | undefined>; }
