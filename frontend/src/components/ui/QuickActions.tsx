import { ArrowUpRight, Building2, CalendarDays, PhoneCall, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/data/siteConfig';

export function QuickActions() {
  const { t } = useTranslation();
  const actions = [
    { href: '/appointment', label: t('home.quickActions.appointment'), Icon: CalendarDays },
    { href: '/doctors', label: t('home.quickActions.doctor'), Icon: Stethoscope },
    { href: '/departments', label: t('home.quickActions.departments'), Icon: Building2 },
  ];
  return <section className="bg-white py-5"><div className="container-app grid overflow-hidden rounded-md border border-[var(--color-border)] sm:grid-cols-4">{actions.map(({ href, label, Icon }) => <Link key={href} to={href} className="group flex min-h-20 items-center justify-between gap-3 border-b border-[var(--color-border)] px-5 py-4 transition hover:bg-[var(--color-surface)] sm:border-b-0 sm:border-e"><span className="flex items-center gap-3 font-semibold text-[var(--color-ink)]"><Icon size={20} className="text-[var(--color-primary)]" />{label}</span><ArrowUpRight size={17} className="text-[var(--color-muted)] transition group-hover:translate-x-1" /></Link>)}<a href={`tel:${siteConfig.contact.emergency}`} className="group flex min-h-20 items-center justify-between gap-3 px-5 py-4 transition hover:bg-[var(--color-surface)]"><span className="flex items-center gap-3 font-semibold text-[var(--color-ink)]"><PhoneCall size={20} className="text-[var(--color-accent)]" />{t('home.quickActions.emergency')}</span><span className="text-sm font-semibold text-[var(--color-primary-dark)]">{siteConfig.contact.emergency}</span></a></div></section>;
}
