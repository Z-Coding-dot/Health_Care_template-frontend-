import { ArrowUpRight, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { BlogPost } from '@/data/blog';

export function BlogCard({ post }: { post: BlogPost }) {
  const { t } = useTranslation();
  return <article className="group"><img src={post.image} alt="" width="1000" height="667" loading="lazy" className="aspect-[3/2] w-full rounded-md object-cover transition duration-300 group-hover:scale-[1.03]" /><div className="pt-4"><p className="text-sm text-[var(--color-muted)]">{new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(new Date(post.date))}</p><h3 className="mt-2 text-xl font-semibold leading-snug text-[var(--color-ink)]">{t(post.titleKey)}</h3><p className="mt-2 line-clamp-2 text-[var(--color-body)]">{t(post.excerptKey)}</p><div className="mt-4 flex items-center gap-4"><Link to={`/blog/${post.id}`} className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]">{t('common.readMore')}<ArrowUpRight size={16} /></Link><span className="inline-flex items-center gap-1 text-xs text-[var(--color-muted)]"><Clock3 size={13} />{post.readTime} {t('blog.minRead')}</span></div></div></article>;
}
