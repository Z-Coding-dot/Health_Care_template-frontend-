import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

const variants: Record<string, Variants> = {
  fadeUp: { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
};

export function AnimatedWrapper({ children, className, variant = 'fadeUp', delay = 0 }: { children: ReactNode; className?: string; variant?: keyof typeof variants; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return <motion.div className={cn(className)} variants={variants[variant]} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: reducedMotion ? 0.2 : 0.4, delay: reducedMotion ? 0 : Math.min(delay, 0.06), ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
