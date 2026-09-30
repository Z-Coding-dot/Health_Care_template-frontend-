import type { UserResponse } from '@/api/types';
import type { AuthService, LoginInput, RegisterInput } from './auth.service';
const wait = () => new Promise((resolve) => window.setTimeout(resolve, 350));
const mockUser: UserResponse = { name: 'Carewell Patient', role: 'patient' };
export const authMock: AuthService = { async login(_input: LoginInput) { await wait(); return mockUser; }, async register(input: RegisterInput) { await wait(); return { name: input.name, role: 'patient' }; }, async logout() { await wait(); }, async forgotPassword(_email) { await wait(); }, async me() { await wait(); return null; } };
