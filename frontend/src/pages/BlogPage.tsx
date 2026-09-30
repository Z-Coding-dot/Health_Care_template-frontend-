import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { BlogCard } from '@/components/ui/BlogCard';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  const { t } = useTranslation();
  const featured = blogPosts.find((post) => post.featured);
  return <><PageHero title="blog.title" description="blog.description" /><Section><Container>{featured && <article className="grid gap-8 border-b border-[var(--color-border)] pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"><img src={featured.image} alt="" width="1200" height="800" loading="eager" className="aspect-[3/2] w-full rounded-md object-cover" /><div><p className="eyebrow">{t('blog.featured')}</p><h2 className="heading-2 mt-3">{t(featured.titleKey)}</h2><p className="mt-5 text-lg text-[var(--color-body)]">{t(featured.excerptKey)}</p><Link to={`/blog/${featured.id}`} className="link-underline mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-primary-dark)]">{t('common.readMore')}<ArrowUpRight size={17} /></Link></div></article>}<div className="mt-14 grid gap-10 md:grid-cols-2">{blogPosts.filter((post) => post.id !== featured?.id).map((post) => <BlogCard key={post.id} post={post} />)}</div></Container></Section></>;
}
