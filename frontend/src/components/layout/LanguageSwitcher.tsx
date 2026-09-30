import { Check, ChevronDown, Languages } from 'lucide-react';
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { languageLabels, supportedLanguages, type Language } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageSwitcher({ inverse = false }: { inverse?: boolean }) {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useEffect(() => {
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer);
  }, []);

  const chooseLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(true);
    }
  };

  return <div ref={rootRef} className={`language-switcher ${inverse ? 'language-switcher-inverse' : ''}`}>
    <Languages size={16} aria-hidden="true" />
    <span className="sr-only">{t('common.language')}</span>
    <button type="button" className="language-switcher-trigger" aria-haspopup="listbox" aria-expanded={open} aria-controls={listboxId} onClick={() => setOpen((value) => !value)} onKeyDown={handleKeyDown}>
      <span>{languageLabels[language]}</span>
      <ChevronDown className={open ? 'language-switcher-chevron language-switcher-chevron-open' : 'language-switcher-chevron'} size={15} aria-hidden="true" />
    </button>
    {open && <div id={listboxId} className="language-switcher-menu" role="listbox" aria-label={t('common.language')}>
      {supportedLanguages.map((item) => <button type="button" role="option" aria-selected={language === item} className="language-switcher-option" key={item} onClick={() => chooseLanguage(item)}>{language === item ? <Check size={15} aria-hidden="true" /> : <span className="size-[15px]" aria-hidden="true" />}{languageLabels[item]}</button>)}
    </div>}
  </div>;
}

