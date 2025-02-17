import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className={`px-2 py-1 rounded ${i18n.language === 'fr' ? 'bg-amber-600 text-white' : 'bg-gray-200'}`}
      >
        FR
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-amber-600 text-white' : 'bg-gray-200'}`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('ar')}
        className={`px-2 py-1 rounded ${i18n.language === 'ar' ? 'bg-amber-600 text-white' : 'bg-gray-200'}`}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSelector; 