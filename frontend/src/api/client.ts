import axios, { AxiosError, type AxiosRequestConfig } from 'axios';
import { store } from '@/redux/store';
import { signedOut } from '@/redux/slices/authSlice';
import type { ApiError } from './types';

type RetryConfig = AxiosRequestConfig & { __retryCount?: number };
export const apiClient = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL || '/', timeout: 15000, withCredentials: true, headers: { 'Content-Type': 'application/json' } });

apiClient.interceptors.request.use((config) => config);
apiClient.interceptors.response.use((response) => response, async (error: AxiosError<ApiError>) => {
  const config = error.config as RetryConfig | undefined;
  if (error.response?.status === 401) {
    store.dispatch(signedOut());
    if (window.location.pathname !== '/login') window.location.assign('/login');
  }
  if (config?.method?.toLowerCase() === 'get' && !error.response && (config.__retryCount ?? 0) < 2) {
    config.__retryCount = (config.__retryCount ?? 0) + 1;
    await new Promise((resolve) => window.setTimeout(resolve, 250 * config.__retryCount!));
    return apiClient(config);
  }
  const normalized: ApiError = error.response?.data ?? { code: 'NETWORK_ERROR', message: error.message || 'Request failed' };
  return Promise.reject(normalized);
});
