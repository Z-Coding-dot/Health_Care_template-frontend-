import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';
export default function NotFoundPage() { const { t } = useTranslation(); return <main className="flex min-h-screen items-center justify-center bg-[var(--color-surface)] p-6 text-center"><Container><p className="font-[var(--font-display)] text-7xl font-semibold text-[var(--color-primary)]">404</p><h1 className="heading-2 mt-5">{t('errors.notFoundTitle')}</h1><p className="mx-auto mt-4 max-w-md text-[var(--color-body)]">{t('errors.notFoundDescription')}</p><ButtonLink to="/" className="mt-8">{t('errors.returnHome')}</ButtonLink><Link to="/contact" className="ms-3 inline-flex items-center font-semibold text-[var(--color-primary-dark)]">{t('nav.contact')}</Link></Container></main>; }
