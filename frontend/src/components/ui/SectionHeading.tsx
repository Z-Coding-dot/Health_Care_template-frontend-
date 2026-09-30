import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/cn';

type SectionHeadingProps = { eyebrow?: string; title: string; description?: string; align?: 'start' | 'center'; className?: string };
export function SectionHeading({ eyebrow, title, description, align = 'start', className }: SectionHeadingProps) {
  const { t } = useTranslation();
  return <div className={cn(align === 'center' && 'mx-auto text-center', 'max-w-2xl', className)}>
    {eyebrow && <p className="eyebrow mb-3">{t(eyebrow, { defaultValue: eyebrow })}</p>}
    <h2 className="heading-2">{t(title, { defaultValue: title })}</h2>
    {description && <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{t(description, { defaultValue: description })}</p>}
  </div>;
}
