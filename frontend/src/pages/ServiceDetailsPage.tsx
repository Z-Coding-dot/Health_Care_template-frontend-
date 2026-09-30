import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';
import { services } from '@/data/services';

export default function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const { t } = useTranslation();
  const service = services.find((item) => item.id === serviceId);
  if (!service) return <Navigate to="/services" replace />;
  return <><PageHero title={service.titleKey} description={service.descriptionKey} /><Section><Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start"><div><Link to="/services" className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]"><ArrowLeft size={16} className="rtl:rotate-180" />{t('common.viewAll')}</Link><h2 className="heading-2 mt-8">{t('services.title')}</h2><p className="mt-5 max-w-2xl text-lg text-[var(--color-body)]">{t(service.detailKey)}</p><ul className="mt-8 grid gap-4">{(t('services.detailPoints', { returnObjects: true }) as string[]).map((item) => <li key={item} className="flex items-center gap-3 font-semibold text-[var(--color-ink)]"><CheckCircle2 size={19} className="text-[var(--color-primary)]" />{item}</li>)}</ul></div><div><img src={service.image} alt="" width="1000" height="667" className="aspect-[3/2] w-full rounded-md object-cover" /><div className="mt-6 border-t border-[var(--color-border)] pt-6"><p className="text-sm font-semibold text-[var(--color-primary-dark)]">{t('common.bookAppointment')}</p><p className="mt-2 text-[var(--color-body)]">{t('services.detailCta')}</p><ButtonLink to="/appointment" className="mt-5">{t('common.bookAppointment')}</ButtonLink></div></div></Container></Section></>;
}
