import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English', flag: '\u{1F1FA}\u{1F1F8}' },
  { code: 'es', label: 'Espa\u00f1ol', flag: '\u{1F1EA}\u{1F1F8}' },
  { code: 'zh', label: '\u4e2d\u6587', flag: '\u{1F1E8}\u{1F1F3}' },
  { code: 'ko', label: '\ud55c\uad6d\uc5b4', flag: '\u{1F1F0}\u{1F1F7}' },
  { code: 'ru', label: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439', flag: '\u{1F1F7}\u{1F1FA}' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      value={i18n.language?.substring(0, 2) || 'en'}
      onChange={handleChange}
      className="px-3 py-2 rounded-xl border border-border bg-card text-foreground text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
      aria-label="Select language"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.flag} {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
