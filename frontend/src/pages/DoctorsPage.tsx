import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { DoctorCard } from '@/components/ui/DoctorCard';
import { doctors } from '@/data/doctors';
import { departments } from '@/data/departments';
import { useDebounce } from '@/hooks/useDebounce';

export default function DoctorsPage() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('all');
  const debounced = useDebounce(query);
  const filtered = useMemo(() => doctors.filter((doctor) => (department === 'all' || doctor.departmentId === department) && `${doctor.name} ${t(doctor.roleKey)}`.toLowerCase().includes(debounced.toLowerCase())), [debounced, department, t]);
  return <><PageHero title="doctors.title" description="doctors.description" /><Section><Container className="grid gap-10 lg:grid-cols-[16rem_1fr]"><aside className="self-start lg:sticky lg:top-32"><p className="text-sm font-semibold text-[var(--color-ink)]">{t('doctors.filter')}</p><label className="relative mt-3 block"><span className="sr-only">{t('doctors.searchPlaceholder')}</span><Search className="absolute start-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" size={17} /><input className="input ps-10" placeholder={t('doctors.searchPlaceholder')} value={query} onChange={(event) => setQuery(event.target.value)} /></label><label className="mt-4 block"><span className="mb-2 block text-sm font-semibold text-[var(--color-ink)]">{t('departments.careTeam')}</span><select className="input" value={department} onChange={(event) => setDepartment(event.target.value)}><option value="all">{t('doctors.allDepartments')}</option>{departments.map((item) => <option key={item.id} value={item.id}>{t(item.titleKey)}</option>)}</select></label></aside><div>{filtered.length ? <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">{filtered.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}</div> : <p className="py-20 text-center text-[var(--color-muted)]">{t('doctors.noResults')}</p>}</div></Container></Section></>;
}
