import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/ui/Hero';
import { QuickActions } from '@/components/ui/QuickActions';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { DoctorCard } from '@/components/ui/DoctorCard';
import { BlogCard } from '@/components/ui/BlogCard';
import { CTASection } from '@/components/ui/CTASection';
import { ButtonLink } from '@/components/ui/Button';
import { services } from '@/data/services';
import { doctors } from '@/data/doctors';
import { departments } from '@/data/departments';
import { testimonials } from '@/data/testimonials';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/data/siteConfig';

export default function HomePage() {
  const { t } = useTranslation();
  const quote = testimonials[0];
  return <>
    <Hero />
    <QuickActions />

    <Section><Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"><AnimatedWrapper><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85" alt="A clinician speaking with a patient" width="1400" height="933" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" /></AnimatedWrapper><AnimatedWrapper><div><p className="eyebrow">{t('home.aboutEyebrow')}</p><h2 className="heading-2 mt-3">{t('home.aboutTitle')}</h2><p className="prose-copy mt-5">{t('home.aboutDescription')}</p><div className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6"><div><strong className="block text-2xl font-semibold text-[var(--color-ink)]">{siteConfig.stats.patients}</strong><span className="mt-1 block text-sm text-[var(--color-muted)]">{t('home.statsPatients')}</span></div><div><strong className="block text-2xl font-semibold text-[var(--color-ink)]">{siteConfig.stats.specialists}</strong><span className="mt-1 block text-sm text-[var(--color-muted)]">{t('home.statsSpecialists')}</span></div><div><strong className="block text-2xl font-semibold text-[var(--color-ink)]">{siteConfig.stats.locations}</strong><span className="mt-1 block text-sm text-[var(--color-muted)]">{t('home.statsLocations')}</span></div></div><ButtonLink to="/about" variant="secondary" className="mt-8">{t('common.learnMore')}<ArrowUpRight size={17} /></ButtonLink></div></AnimatedWrapper></Container></Section>

    <Section tone="surface"><Container><SectionHeading eyebrow="home.servicesEyebrow" title="home.servicesTitle" description="home.servicesDescription" /><div className="mt-10 grid gap-x-12 md:grid-cols-2">{services.map((service, index) => <AnimatedWrapper key={service.id} delay={Math.min(index * 0.04, 0.2)}><ServiceCard service={service} /></AnimatedWrapper>)}</div><div className="mt-8"><ButtonLink to="/services" variant="secondary">{t('common.viewAll')}<ArrowUpRight size={17} /></ButtonLink></div></Container></Section>

    <Section><Container><SectionHeading eyebrow="home.departmentsTitle" title="home.departmentsTitle" /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">{departments.slice(0, 5).map((department, index) => <AnimatedWrapper key={department.id} className={index === 0 ? 'lg:col-span-6' : index === 1 ? 'lg:col-span-6' : 'lg:col-span-4'}><a href={`/doctors?department=${department.id}`} className="group relative block min-h-64 overflow-hidden rounded-md bg-[var(--color-primary-dark)]"><img src={department.image} alt="" width="1000" height="667" loading="lazy" className="absolute inset-0 size-full object-cover opacity-75 transition duration-300 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-[rgb(7_63_74_/_0.48)]" /><div className="relative flex min-h-64 flex-col justify-end p-6 text-white"><span className="text-sm font-medium text-white/80">{t('departments.careTeam')}</span><h3 className="mt-1 text-2xl font-semibold text-white">{t(department.titleKey)}</h3><span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">{t('common.learnMore')}<ArrowUpRight size={16} /></span></div></a></AnimatedWrapper>)}</div></Container></Section>

    <section className="bg-[var(--color-primary)] py-16 text-white sm:py-20"><Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="eyebrow text-white/75">{t('home.statsTitle')}</p><h2 className="heading-2 mt-3 text-white">{siteConfig.tagline}</h2></div><div className="grid grid-cols-3 gap-6 border-t border-white/25 pt-6 sm:gap-10"><div><strong className="block text-4xl font-semibold">{siteConfig.stats.patients}</strong><span className="mt-2 block text-sm text-white/80">{t('home.statsPatients')}</span></div><div><strong className="block text-4xl font-semibold">{siteConfig.stats.specialists}</strong><span className="mt-2 block text-sm text-white/80">{t('home.statsSpecialists')}</span></div><div><strong className="block text-4xl font-semibold">{siteConfig.stats.locations}</strong><span className="mt-2 block text-sm text-white/80">{t('home.statsLocations')}</span></div></div></Container></section>

    <Section><Container><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="home.doctorsTitle" title="home.doctorsTitle" /><ButtonLink to="/doctors" variant="secondary">{t('common.viewAll')}<ArrowUpRight size={17} /></ButtonLink></div><div className="mt-10 grid gap-6 overflow-x-auto sm:grid-cols-2 lg:grid-cols-4">{doctors.filter((doctor) => doctor.featured).map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}</div></Container></Section>

    <Section tone="surface"><Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><SectionHeading eyebrow="home.whyTitle" title="home.whyTitle" /><ol className="mt-8 grid gap-6">{['Clear explanations before decisions', 'Appointments that respect your schedule', 'One team for referrals and follow-up'].map((item, index) => <li key={item} className="flex gap-4 border-t border-[var(--color-border)] pt-5"><span className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-primary)]">0{index + 1}</span><div><h3 className="font-semibold text-[var(--color-ink)]">{item}</h3><p className="mt-1 text-[var(--color-body)]">Practical support from the first question to the next visit.</p></div></li>)}</ol></div><figure className="border-s-4 border-[var(--color-primary)] ps-7 sm:ps-10"><blockquote className="font-[var(--font-display)] text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl">“{t(quote.quoteKey)}”</blockquote><figcaption className="mt-7 flex items-center gap-4"><img src={quote.image} alt="" width="800" height="800" loading="lazy" className="size-14 rounded-full object-cover" /><div><p className="font-semibold text-[var(--color-ink)]">{t(quote.nameKey)}</p><p className="text-sm text-[var(--color-muted)]">{t(quote.detailKey)}</p></div></figcaption></figure></Container></Section>

    <Section><Container><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="home.blogTitle" title="home.blogTitle" /><ButtonLink to="/blog" variant="secondary">{t('common.viewAll')}<ArrowUpRight size={17} /></ButtonLink></div><div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]"><div>{blogPosts[0] && <BlogCard post={blogPosts[0]} />}</div><div className="grid gap-8">{blogPosts.slice(1).map((post) => <BlogCard key={post.id} post={post} />)}</div></div></Container></Section>
    <CTASection />
  </>;
}
