import type { UserResponse } from '@/api/types';
export type LoginInput = { email: string; password: string };
export type RegisterInput = { name: string; email: string; password: string };
export interface AuthService { login(input: LoginInput): Promise<UserResponse>; register(input: RegisterInput): Promise<UserResponse>; logout(): Promise<void>; forgotPassword(email: string): Promise<void>; me(): Promise<UserResponse | null>; }
