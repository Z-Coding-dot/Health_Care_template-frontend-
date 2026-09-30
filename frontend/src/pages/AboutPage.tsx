import { useTranslation } from 'react-i18next';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { doctors } from '@/data/doctors';

export default function AboutPage() {
  const { t } = useTranslation();
  return <><PageHero title="about.title" description="about.description" /><Section><Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="eyebrow">{t('about.missionTitle')}</p><h2 className="heading-2 mt-3">{t('about.mission')}</h2></div><div className="grid gap-6 text-lg leading-8 text-[var(--color-body)]"><p>{t('about.vision')}</p><p>{t('about.story')}</p></div></Container></Section><Section tone="surface"><Container><SectionHeading eyebrow="about.historyTitle" title="about.historyTitle" /><div className="mt-12 grid gap-10 border-s-[1px] border-[var(--color-primary)] ps-7 sm:ps-10">{(['2012', '2018', 'Today'] as const).map((year) => [year, t(`about.timeline.${year}`), t(`about.timeline.${year}Description`)]).map(([year, , description]) => <div key={year} className="relative"><span className="absolute -start-[2rem] top-1 size-3 rounded-full bg-[var(--color-primary)] sm:-start-[2.55rem]" /><p className="text-sm font-semibold text-[var(--color-primary-dark)]">{year}</p><p className="mt-2 max-w-xl text-xl font-medium text-[var(--color-ink)]">{description}</p></div>)}</div></Container></Section><Section><Container><SectionHeading eyebrow="about.teamTitle" title="about.teamTitle" /><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{doctors.slice(0, 4).map((doctor) => <div key={doctor.id}><img src={doctor.image} alt={doctor.name} width="800" height="1000" loading="lazy" className="aspect-[4/5] w-full rounded-md object-cover" /><h3 className="mt-4 text-lg font-semibold text-[var(--color-ink)]">{doctor.name}</h3><p className="text-sm text-[var(--color-muted)]">{t(doctor.roleKey)}</p></div>)}</div></Container></Section></>;
}
