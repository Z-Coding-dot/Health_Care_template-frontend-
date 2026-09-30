import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Service } from '@/data/services';

export function ServiceCard({ service }: { service: Service }) {
  const { t } = useTranslation();
  return <article className="group grid border-t border-[var(--color-border)] py-6 sm:grid-cols-[minmax(0,1fr)_12rem] sm:gap-6"><div><h3 className="text-xl font-semibold text-[var(--color-ink)]">{t(service.titleKey)}</h3><p className="mt-2 max-w-xl text-[var(--color-body)]">{t(service.descriptionKey)}</p><Link to={`/services/${service.id}`} className="link-underline mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]">{t('common.learnMore')}<ArrowUpRight size={16} /></Link></div><img src={service.image} alt="" width="480" height="320" loading="lazy" className="mt-5 hidden aspect-[3/2] w-full rounded-md object-cover transition duration-300 group-hover:scale-[1.03] sm:mt-0 sm:block" /></article>;
}
