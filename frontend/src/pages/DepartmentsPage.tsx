import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { departments } from '@/data/departments';

export default function DepartmentsPage() {
  const { t } = useTranslation();
  return <><PageHero title="departments.title" description="departments.description" /><Section><Container className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{departments.map((department) => <article key={department.id} className="group"><img src={department.image} alt="" width="1000" height="667" loading="lazy" className="aspect-[3/2] w-full rounded-md object-cover transition duration-300 group-hover:scale-[1.03]" /><div className="border-b border-[var(--color-border)] pb-5 pt-5"><p className="text-sm font-medium text-[var(--color-muted)]">{t('departments.careTeam')}</p><h2 className="mt-1 text-2xl font-semibold text-[var(--color-ink)]">{t(department.titleKey)}</h2><p className="mt-3 text-[var(--color-body)]">{t(department.descriptionKey)}</p><Link to={`/doctors?department=${department.id}`} className="link-underline mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]">{t('common.learnMore')}<ArrowUpRight size={16} /></Link></div></article>)}</Container></Section></>;
}
