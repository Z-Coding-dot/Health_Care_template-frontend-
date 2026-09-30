import { departments } from '@/data/departments';
import type { DepartmentsService } from './departments.service';
export const departmentsMock: DepartmentsService = { async list() { return departments; }, async get(id) { return departments.find((department) => department.id === id); } };
