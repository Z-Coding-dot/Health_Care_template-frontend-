import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import faAF from './locales/fa-AF.json';
import ps from './locales/ps.json';

export const supportedLanguages = ['en', 'fa-AF', 'ps'] as const;
export type Language = (typeof supportedLanguages)[number];

export const languageLabels: Record<Language, string> = {
  en: 'English',
  'fa-AF': 'دری',
  ps: 'پښتو',
};

export const languageDirections: Record<Language, 'ltr' | 'rtl'> = {
  en: 'ltr',
  'fa-AF': 'rtl',
  ps: 'rtl',
};

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      'fa-AF': { translation: faAF },
      ps: { translation: ps },
    },
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    interpolation: { escapeValue: false },
    detection: { order: ['querystring', 'localStorage', 'navigator'], caches: ['localStorage'] },
  });

export default i18n;
