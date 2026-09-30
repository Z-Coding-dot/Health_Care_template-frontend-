import type { ContactRequest } from '@/api/types';
export interface ContactService { send(input: ContactRequest): Promise<{ received: boolean }>; }
