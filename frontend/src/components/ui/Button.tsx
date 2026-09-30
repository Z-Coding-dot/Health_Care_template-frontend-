import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'light';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: 'sm' | 'md' | 'lg' };

const styles: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'border border-[var(--color-border)] bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface)]',
  light: 'border border-white bg-white text-[var(--color-primary-dark)] hover:bg-white/90',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant = 'primary', size = 'md', ...props }, ref) {
  return <button ref={ref} className={cn('btn', styles[variant], size === 'sm' && 'min-h-9 px-4 text-sm', size === 'lg' && 'min-h-13 px-7 text-base', className)} {...props} />;
});

type ButtonLinkProps = LinkProps & { variant?: ButtonVariant; size?: 'sm' | 'md' | 'lg'; className?: string };
export function ButtonLink({ className, variant = 'primary', size = 'md', ...props }: ButtonLinkProps) {
  return <Link className={cn('btn', styles[variant], size === 'sm' && 'min-h-9 px-4 text-sm', size === 'lg' && 'min-h-13 px-7 text-base', className)} {...props} />;
}
