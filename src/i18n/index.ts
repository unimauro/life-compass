import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import zh from './locales/zh.json';
import ko from './locales/ko.json';
import ru from './locales/ru.json';
import ja from './locales/ja.json';
import fr from './locales/fr.json';
import lt from './locales/lt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      zh: { translation: zh },
      ko: { translation: ko },
      ru: { translation: ru },
      ja: { translation: ja },
      fr: { translation: fr },
      lt: { translation: lt },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'zh', 'ko', 'ru', 'ja', 'fr', 'lt'],
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
