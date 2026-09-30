import { ArrowLeft, CalendarDays, CheckCircle2 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';
import { doctors } from '@/data/doctors';

export default function DoctorProfilePage() {
  const { doctorId } = useParams();
  const { t } = useTranslation();
  const doctor = doctors.find((item) => item.id === doctorId);
  if (!doctor) return <Navigate to="/doctors" replace />;
  return <><PageHero title={doctor.name} description={doctor.roleKey} /><Section><Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"><div><img src={doctor.image} alt={doctor.name} width="800" height="1000" className="aspect-[4/5] w-full max-w-md rounded-md object-cover" /><ButtonLink to="/appointment" size="lg" className="mt-5 w-full max-w-md"><CalendarDays size={18} />{t('common.bookAppointment')}</ButtonLink></div><div><Link to="/doctors" className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]"><ArrowLeft size={16} className="rtl:rotate-180" />{t('common.viewAll')}</Link><h2 className="heading-2 mt-8">{t('doctors.profileTitle', { name: doctor.name })}</h2><p className="mt-5 max-w-2xl text-lg text-[var(--color-body)]">{t('doctors.profileDescription', { name: doctor.name })}</p><div className="mt-8 grid gap-5 border-y border-[var(--color-border)] py-6 sm:grid-cols-2"><div><p className="text-sm text-[var(--color-muted)]">{t('doctors.experienceLabel')}</p><p className="mt-1 text-xl font-semibold text-[var(--color-ink)]">{doctor.experience} {t('doctors.yearsExperience')}</p></div><div><p className="text-sm text-[var(--color-muted)]">{t('doctors.languagesLabel')}</p><p className="mt-1 text-xl font-semibold text-[var(--color-ink)]">{doctor.languages.join(' · ')}</p></div></div><ul className="mt-8 grid gap-4">{(t('doctors.profilePoints', { returnObjects: true }) as string[]).map((item) => <li key={item} className="flex items-center gap-3 font-semibold text-[var(--color-ink)]"><CheckCircle2 size={19} className="text-[var(--color-primary)]" />{item}</li>)}</ul></div></Container></Section></>;
}
