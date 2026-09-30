import { lazy, Suspense, type ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { useAppSelector } from '@/redux/hooks';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const ServiceDetailsPage = lazy(() => import('@/pages/ServiceDetailsPage'));
const DepartmentsPage = lazy(() => import('@/pages/DepartmentsPage'));
const DoctorsPage = lazy(() => import('@/pages/DoctorsPage'));
const DoctorProfilePage = lazy(() => import('@/pages/DoctorProfilePage'));
const AppointmentPage = lazy(() => import('@/pages/AppointmentPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogDetailsPage = lazy(() => import('@/pages/BlogDetailsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const SignupPage = lazy(() => import('@/pages/SignupPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPasswordPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function LoadingScreen() {
  return <div className="flex min-h-screen items-center justify-center bg-[var(--color-surface)]"><div className="size-8 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-primary)]" aria-label="Loading" /></div>;
}

function ProtectedRoute({ children }: { children: ReactNode }) {
  const status = useAppSelector((state) => state.auth.status);
  return status === 'authenticated' ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/services/:serviceId"
              element={<ServiceDetailsPage />}
            />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:doctorId" element={<DoctorProfilePage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <AppointmentPage />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
