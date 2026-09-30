import { ArrowUpRight, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/data/siteConfig';
import { ButtonLink } from './Button';
import { Container } from '@/components/layout/Container';

export function CTASection() {
  const { t } = useTranslation();
  return <section className="section"><Container><div className="flex flex-col justify-between gap-8 bg-[var(--color-primary-dark)] px-6 py-12 text-white sm:px-12 lg:flex-row lg:items-center lg:px-16"><div className="max-w-2xl"><p className="eyebrow text-white/75">{t('nav.contact')}</p><h2 className="heading-2 mt-3 text-white">{t('home.ctaTitle')}</h2><p className="mt-4 max-w-xl text-lg leading-8 text-white/90">{t('home.ctaDescription')}</p></div><div className="flex flex-wrap gap-3"><ButtonLink to="/appointment" variant="light">{t('common.bookAppointment')}<ArrowUpRight size={17} /></ButtonLink><a className="btn border border-white text-white hover:bg-white/10" href={`tel:${siteConfig.contact.phone}`}><PhoneCall size={17} />{t('common.callNow')}</a></div></div></Container></section>;
}
