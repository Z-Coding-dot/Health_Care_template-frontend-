import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Doctor } from '@/data/doctors';

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const { t } = useTranslation();
  return <article className="group min-w-[16rem] border-b border-[var(--color-border)] pb-5"><img src={doctor.image} alt={doctor.name} width="800" height="1000" loading="lazy" className="aspect-[4/5] w-full rounded-md object-cover transition duration-300 group-hover:scale-[1.03]" /><div className="pt-4"><h3 className="text-lg font-semibold text-[var(--color-ink)]">{doctor.name}</h3><p className="mt-1 text-sm text-[var(--color-muted)]">{t(doctor.roleKey)}</p><Link to={`/doctors/${doctor.id}`} className="link-underline mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]">{t('doctors.viewProfile')}<ArrowUpRight size={15} /></Link></div></article>;
}
