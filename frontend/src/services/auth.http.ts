import { apiClient } from '@/api/client';
import { endpoints } from '@/api/endpoints';
import { userSchema, type UserResponse } from '@/api/types';
import type { AuthService, LoginInput, RegisterInput } from './auth.service';
export const authHttp: AuthService = { async login(input: LoginInput) { return userSchema.parse((await apiClient.post(endpoints.auth.login, input)).data); }, async register(input: RegisterInput) { return userSchema.parse((await apiClient.post(endpoints.auth.register, input)).data); }, async logout() { await apiClient.post(endpoints.auth.logout); }, async forgotPassword(email: string) { await apiClient.post(endpoints.auth.forgotPassword, { email }); }, async me(): Promise<UserResponse | null> { try { return userSchema.parse((await apiClient.get(endpoints.auth.me)).data); } catch { return null; } } };
