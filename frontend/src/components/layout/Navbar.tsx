import { AlertCircle, Clock3, HeartPulse, Menu, PhoneCall, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { navigation } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setMobileMenuOpen } from '@/redux/slices/uiSlice';
import { ButtonLink } from '@/components/ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/utils/cn';

export function Navbar() {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.mobileMenuOpen);
  const closeMenu = () => dispatch(setMobileMenuOpen(false));

  return <header dir={direction} className="sticky top-0 z-40 bg-white">
    <div className="relative z-50 border-b border-[var(--color-border)] bg-[var(--color-primary-dark)] text-sm text-white">
      <div className="container-app flex min-h-9 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1"><a className="inline-flex items-center gap-2" href={`tel:${siteConfig.contact.phone}`}><PhoneCall size={14} />{siteConfig.contact.phone}</a><a className="inline-flex items-center gap-2 text-white/90" href={`tel:${siteConfig.contact.emergency}`}><AlertCircle size={14} />{t('contact.emergencyTitle')} {siteConfig.contact.emergency}</a><span className="hidden items-center gap-2 text-white/80 sm:inline-flex"><Clock3 size={14} />{siteConfig.contact.hours}</span></div>
        <LanguageSwitcher inverse />
      </div>
    </div>
    <div className="relative z-10 border-b border-[var(--color-border)] bg-white">
      <div className="container-app flex min-h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={closeMenu}><span className="flex size-10 items-center justify-center rounded-md bg-[var(--color-primary)] text-white"><HeartPulse size={21} /></span><span className="text-lg font-semibold tracking-[-0.01em] text-[var(--color-ink)]">{siteConfig.shortName}</span></Link>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">{navigation.map((item) => <NavLink key={item.href} to={item.href} className={({ isActive }) => cn('link-underline text-[0.95rem] font-medium text-[var(--color-body)]', isActive && 'font-semibold text-[var(--color-primary-dark)]')}>{t(`nav.${item.key}`)}</NavLink>)}</nav>
        <div className="hidden items-center gap-4 lg:flex"><Link to="/login" className="text-sm font-semibold text-[var(--color-primary-dark)]">{t('nav.login')}</Link><ButtonLink to="/appointment" size="sm">{t('common.bookAppointment')}</ButtonLink></div>
        <button type="button" aria-label={open ? t('common.closeMenu') : t('common.openMenu')} className="ms-auto shrink-0 rounded-md border border-[var(--color-border)] p-2.5 text-[var(--color-ink)] xl:hidden" onClick={() => dispatch(setMobileMenuOpen(!open))}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-[var(--color-border)] bg-white px-4 py-4 xl:hidden"><nav className="container-app flex flex-col gap-1" aria-label="Mobile navigation">{navigation.map((item) => <NavLink key={item.href} to={item.href} onClick={closeMenu} className={({ isActive }) => cn('rounded-md px-3 py-2.5 font-medium text-[var(--color-body)]', isActive && 'bg-[var(--color-surface)] font-semibold text-[var(--color-primary-dark)]')}>{t(`nav.${item.key}`)}</NavLink>)}<div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4"><Link to="/login" onClick={closeMenu} className="text-sm font-semibold text-[var(--color-primary-dark)]">{t('nav.login')}</Link><a href={`tel:${siteConfig.contact.phone}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]"><PhoneCall size={16} />{siteConfig.contact.phone}</a></div></nav></div>}
    </div>
  </header>;
}
