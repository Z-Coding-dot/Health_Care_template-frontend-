/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18n, { languageDirections, type Language, supportedLanguages } from '@/i18n';

type LanguageContextValue = {
  language: Language;
  direction: 'ltr' | 'rtl';
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function normalizeLanguage(language: string | undefined): Language {
  return supportedLanguages.find((candidate) => candidate === language) ?? 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n: instance } = useTranslation();
  const [language, setLanguageState] = useState<Language>(normalizeLanguage(instance.language));

  useEffect(() => {
    const nextLanguage = normalizeLanguage(instance.language);
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
    document.documentElement.dir = languageDirections[nextLanguage];
  }, [instance.language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction: languageDirections[language],
      setLanguage: (nextLanguage) => {
        void i18n.changeLanguage(nextLanguage);
      },
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
