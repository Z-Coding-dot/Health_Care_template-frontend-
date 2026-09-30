import type { ContactRequest } from '@/api/types';
import type { ContactService } from './contact.service';
export const contactMock: ContactService = { async send(_input: ContactRequest) { await new Promise((resolve) => window.setTimeout(resolve, 350)); return { received: true }; } };
