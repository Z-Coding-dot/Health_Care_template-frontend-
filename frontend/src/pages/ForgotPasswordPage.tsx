import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function ForgotPasswordPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  return <main className="flex min-h-screen items-center justify-center bg-[var(--color-surface)] p-6"><Card className="w-full max-w-md p-7 sm:p-10"><Link to="/" className="text-xl font-semibold text-[var(--color-ink)]">Carewell</Link><h1 className="heading-2 mt-10">{t('auth.resetTitle')}</h1><p className="mt-3 text-[var(--color-body)]">{t('auth.resetDescription')}</p>{sent ? <p className="mt-7 border-s-4 border-[var(--color-primary)] bg-white p-4 text-sm font-semibold text-[var(--color-primary-dark)]">{t('common.success')}</p> : <form className="mt-7 grid gap-5" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label className="grid gap-2 text-sm font-semibold"><span>{t('common.email')}</span><input className="input" type="email" required /></label><Button type="submit">{t('common.submit')}</Button></form>}<Link to="/login" className="mt-7 block text-center text-sm font-semibold text-[var(--color-primary-dark)]">{t('auth.signIn')}</Link></Card></main>;
}
