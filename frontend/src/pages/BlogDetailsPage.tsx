import { ArrowLeft, Clock3 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '@/data/blog';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
export default function BlogDetailsPage() { const { postId } = useParams(); const { t } = useTranslation(); const post = blogPosts.find((item) => item.id === postId); if (!post) return <Navigate to="/blog" replace />; return <><PageHero title={post.titleKey} description={post.excerptKey} /><Section><Container className="max-w-3xl"><Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary-dark)]"><ArrowLeft size={16} />{t('common.viewAll')}</Link><div className="mt-8 flex items-center gap-2 text-sm text-[var(--color-muted)]"><Clock3 size={15} />{post.readTime} {t('blog.minRead')}</div><div className="mt-8 space-y-5 text-lg leading-9 text-[var(--color-muted)]"><p>Good health is rarely one dramatic decision. It is built through small, repeatable steps that fit the life you actually have.</p><p>Start with one question you have been putting off, one appointment that would bring clarity, or one habit that helps you feel more like yourself. Your care team can help turn that first step into a plan.</p><p>When you have clear information and a partner to guide you, progress becomes easier to notice and easier to sustain.</p></div></Container></Section></>; }
