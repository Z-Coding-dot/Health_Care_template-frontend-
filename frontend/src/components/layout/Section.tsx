import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

type SectionProps = HTMLAttributes<HTMLElement> & { tone?: 'default' | 'surface' | 'dark' };
export function Section({ className, tone = 'default', ...props }: SectionProps) {
  return <section className={cn('section', tone === 'surface' && 'bg-[var(--color-surface)]', tone === 'dark' && 'bg-[var(--color-primary-dark)] text-white', className)} {...props} />;
}
