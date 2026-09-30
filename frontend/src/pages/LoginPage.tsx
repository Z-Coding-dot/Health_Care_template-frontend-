import { useState } from 'react';
import { Eye, EyeOff, HeartPulse } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { useAppDispatch } from '@/redux/hooks';
import { authSucceeded } from '@/redux/slices/authSlice';

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  return <main className="grid min-h-screen lg:grid-cols-2"><div className="relative hidden min-h-screen bg-cover bg-center lg:block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85')" }}><div className="absolute inset-0 bg-[rgb(7_63_74_/_0.82)] p-12 text-white"><Link to="/" className="flex items-center gap-3 text-lg font-semibold"><span className="flex size-10 items-center justify-center rounded-md bg-white/15"><HeartPulse /></span>{siteConfig.shortName}</Link><div className="absolute inset-x-12 bottom-16"><p className="eyebrow text-white/75">{siteConfig.name}</p><h1 className="mt-4 max-w-lg font-[var(--font-display)] text-5xl font-semibold leading-tight text-white">{t('auth.signInDescription')}</h1><p className="mt-5 max-w-md text-white/85">{siteConfig.tagline}</p></div></div></div><div className="flex items-center justify-center p-6 sm:p-12"><div className="w-full max-w-md"><Link to="/" className="text-xl font-semibold text-[var(--color-ink)] lg:hidden">{siteConfig.shortName}</Link><h1 className="heading-2 mt-8">{t('auth.welcomeBack')}</h1><p className="mt-3 text-[var(--color-body)]">{t('auth.signInDescription')}</p><form className="mt-8 grid gap-5" onSubmit={(event) => { event.preventDefault(); setLoading(true); window.setTimeout(() => { dispatch(authSucceeded({ name: 'Carewell Patient', role: 'patient' })); navigate('/'); }, 500); }}><label className="grid gap-2 text-sm font-semibold"><span>{t('common.email')}</span><input className="input" type="email" required /></label><label className="grid gap-2 text-sm font-semibold"><span>{t('auth.password')}</span><div className="relative"><input className="input pe-12" type={show ? 'text' : 'password'} required /><button type="button" aria-label="Toggle password" className="absolute end-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" onClick={() => setShow(!show)}>{show ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></label><div className="flex justify-end"><Link to="/forgot-password" className="text-sm font-semibold text-[var(--color-primary-dark)]">{t('auth.forgotPassword')}</Link></div><Button disabled={loading} type="submit">{loading ? t('common.loading') : t('auth.signIn')}</Button></form><p className="mt-7 text-center text-sm text-[var(--color-muted)]">{t('auth.noAccount')} <Link to="/signup" className="font-semibold text-[var(--color-primary-dark)]">{t('auth.signUp')}</Link></p></div></div></main>;
}
