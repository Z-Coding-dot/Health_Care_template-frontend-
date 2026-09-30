export const endpoints = {
  auth: { login: '/auth/login', register: '/auth/register', logout: '/auth/logout', forgotPassword: '/auth/forgot-password', me: '/auth/me' },
  appointments: '/appointments',
  contact: '/contact',
  doctors: '/doctors',
  services: '/services',
  departments: '/departments',
  blog: '/blog',
} as const;
