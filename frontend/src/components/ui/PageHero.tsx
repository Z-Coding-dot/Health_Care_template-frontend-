import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { useTranslation } from 'react-i18next';

export function PageHero({ title, description }: { title: string; description: string }) {
  const { t } = useTranslation();
  return <section className="bg-[var(--color-primary-dark)] py-14 text-white sm:py-20"><Container><nav className="mb-7 flex items-center gap-2 text-sm text-white/75" aria-label="Breadcrumb"><Link className="hover:text-white" to="/">{t('nav.home')}</Link><ChevronRight className="rtl:rotate-180" size={15} /><span className="text-white">{t(title)}</span></nav><h1 className="heading-2 max-w-3xl text-white">{t(title)}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">{t(description)}</p></Container></section>;
}
