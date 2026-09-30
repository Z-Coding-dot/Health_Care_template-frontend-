import { services } from '@/data/services';
import type { ServicesService } from './services.service';
export const servicesMock: ServicesService = { async list() { return services; }, async get(id) { return services.find((service) => service.id === id); } };
