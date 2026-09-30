import type { Service } from '@/data/services';
export interface ServicesService { list(): Promise<Service[]>; get(id: string): Promise<Service | undefined>; }
