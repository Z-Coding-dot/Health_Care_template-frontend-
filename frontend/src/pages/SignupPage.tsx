import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { useAppDispatch } from '@/redux/hooks';
import { authSucceeded } from '@/redux/slices/authSlice';

export default function SignupPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return <main className="grid min-h-screen lg:grid-cols-2"><div className="relative hidden min-h-screen bg-cover bg-center lg:block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=85')" }}><div className="absolute inset-0 bg-[rgb(7_63_74_/_0.82)] p-12 text-white"><Link to="/" className="text-xl font-semibold text-white">{siteConfig.shortName}</Link><div className="absolute inset-x-12 bottom-16"><p className="eyebrow text-white/75">{siteConfig.name}</p><h1 className="mt-4 max-w-lg font-[var(--font-display)] text-5xl font-semibold leading-tight text-white">{t('auth.createAccount')}</h1><p className="mt-5 max-w-md text-white/85">{siteConfig.tagline}</p></div></div></div><div className="flex items-center justify-center p-6 sm:p-12"><div className="w-full max-w-md"><Link to="/" className="text-xl font-semibold text-[var(--color-ink)] lg:hidden">{siteConfig.shortName}</Link><h1 className="heading-2 mt-8">{t('auth.createAccount')}</h1><p className="mt-3 text-[var(--color-body)]">{t('auth.signUpDescription')}</p><form className="mt-8 grid gap-5" onSubmit={(event) => { event.preventDefault(); dispatch(authSucceeded({ name: 'New Carewell Patient', role: 'patient' })); navigate('/'); }}><label className="grid gap-2 text-sm font-semibold"><span>{t('common.name')}</span><input className="input" required /></label><label className="grid gap-2 text-sm font-semibold"><span>{t('common.email')}</span><input className="input" type="email" required /></label><label className="grid gap-2 text-sm font-semibold"><span>{t('auth.password')}</span><input className="input" type="password" required /></label><Button type="submit">{t('auth.signUp')}</Button></form><p className="mt-7 text-center text-sm text-[var(--color-muted)]">{t('auth.hasAccount')} <Link to="/login" className="font-semibold text-[var(--color-primary-dark)]">{t('auth.signIn')}</Link></p></div></div></main>;
}
