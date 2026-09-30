import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import { heroSlides } from '@/data/heroSlides';
import { ButtonLink } from './Button';
import { Container } from '@/components/layout/Container';

export function Hero() {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const slide = heroSlides[activeIndex];

  const next = () => setActiveIndex((index) => (index + 1) % heroSlides.length);
  const previous = () => setActiveIndex((index) => (index - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    if (reducedMotion || paused) return undefined;
    const timer = window.setInterval(next, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  useEffect(() => {
    const onVisibilityChange = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const nextKey = direction === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    const previousKey = direction === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
    if (event.key === nextKey) { event.preventDefault(); next(); }
    if (event.key === previousKey) { event.preventDefault(); previous(); }
  };

  const isInteractiveTarget = (target: EventTarget | null) => target instanceof HTMLElement && Boolean(target.closest('button, a, select, input, textarea'));

  return <section dir={direction} className="hero-slider relative overflow-hidden bg-[var(--color-primary-dark)] text-white" aria-roledescription="carousel" aria-label={t('home.heroLabel')} tabIndex={0} onKeyDown={handleKeyDown} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} onPointerDown={(event) => { if (isInteractiveTarget(event.target)) return; startX.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerUp={(event) => { if (isInteractiveTarget(event.target)) { startX.current = null; return; } if (startX.current !== null && Math.abs(event.clientX - startX.current) > 48) { const forward = direction === 'rtl' ? event.clientX > startX.current : event.clientX < startX.current; if (forward) next(); else previous(); } startX.current = null; }} onPointerCancel={() => { startX.current = null; }}>
    <AnimatePresence mode="wait">
      <motion.img key={slide.id} src={slide.image} alt={slide.alt} width="2200" height="1467" loading={activeIndex === 0 ? 'eager' : 'lazy'} initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 size-full object-cover" />
    </AnimatePresence>
    <div className="absolute inset-0" style={{ background: direction === 'rtl' ? 'linear-gradient(270deg, rgba(7,63,74,.96) 0%, rgba(7,63,74,.78) 42%, rgba(7,63,74,.18) 78%, rgba(7,63,74,0) 100%)' : 'linear-gradient(90deg, rgba(7,63,74,.96) 0%, rgba(7,63,74,.78) 42%, rgba(7,63,74,.18) 78%, rgba(7,63,74,0) 100%)' }} />
    <Container className="relative z-10 flex min-h-[min(85vh,760px)] items-center pb-24 pt-20"><AnimatePresence mode="wait"><motion.div key={slide.id} initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }} transition={{ duration: reducedMotion ? 0.2 : 0.4, ease: [0.22, 1, 0.36, 1] }} className={`w-full min-w-0 max-w-2xl ${direction === 'rtl' ? 'text-right' : 'text-left'}`}><h1 className="heading-1 max-w-xl text-white">{t(slide.titleKey)}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-white/90">{t(slide.subtitleKey)}</p><div className="mt-8 flex flex-wrap gap-3"><ButtonLink className="w-full sm:w-auto" to="/appointment">{t(slide.primaryLabelKey)}<ArrowRight size={17} className="rtl:rotate-180" /></ButtonLink><ButtonLink className="w-full sm:w-auto" to="/doctors" variant="light">{t(slide.secondaryLabelKey)}</ButtonLink></div></motion.div></AnimatePresence></Container>
    <div className="absolute inset-x-0 bottom-0 z-10"><Container className="flex items-center justify-between gap-4 pb-6"><div className="flex items-center gap-2">{heroSlides.map((item, index) => <button key={item.id} type="button" aria-label={t('home.goToSlide', { number: index + 1 })} aria-current={activeIndex === index} className="hero-dot" onPointerDown={(event) => event.stopPropagation()} onClick={() => setActiveIndex(index)}><span className={activeIndex === index ? 'hero-dot-active' : ''} /></button>)}</div><div className="flex items-center gap-2"><button type="button" aria-label={t('home.previousSlide')} className="hero-arrow" onPointerDown={(event) => event.stopPropagation()} onClick={previous}><ArrowLeft size={18} className="rtl:rotate-180" /></button><button type="button" aria-label={t('home.nextSlide')} className="hero-arrow" onPointerDown={(event) => event.stopPropagation()} onClick={next}><ArrowRight size={18} className="rtl:rotate-180" /></button></div></Container><div className="hero-progress" key={activeIndex} data-paused={paused || reducedMotion} /></div>
  </section>;
}
