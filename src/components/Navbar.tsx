import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OrderModal from './OrderModal';

const LANGUAGES = [
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧'
  },
  {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦'
  }
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-indigo-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-8">
              <button 
                onClick={handleLogoClick}
                className="flex items-center focus:outline-none"
              >
                <span className="text-2xl font-extrabold text-[#FF4C4C]">
                  {t('navbar.brand.first')}
                </span>
                <span className="text-2xl font-extrabold ml-2 text-[#25D366]">
                  {t('navbar.brand.second')}
                </span>
              </button>

              {/* Sélecteur de langue avec dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                    />
                  </svg>
                </button>

                {isLangMenuOpen && (
                  <div className="absolute top-full mt-1 bg-white rounded-lg shadow-lg py-2 w-40 z-50">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-gray-100 ${
                          i18n.language === lang.code ? 'bg-amber-50' : ''
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Menu de navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-primary-600">
                {t('navbar.home')}
              </Link>
              <Link to="/menu" className="text-gray-500 hover:text-primary-600">
                {t('navbar.menu')}
              </Link>
              <Link to="/specialites" className="text-gray-500 hover:text-primary-600">
                {t('navbar.specialties')}
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-primary-600">
                {t('navbar.about')}
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-primary-600">
                {t('navbar.contact')}
              </Link>

              <Link 
                to="/menu"
                className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition-colors"
              >
                {t('navbar.order_now')}
              </Link>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="bg-primary-50 border-primary-500 text-primary-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                onClick={closeMenu}
              >
                {t('navbar.home')}
              </Link>
              <Link 
                to="/menu" 
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                onClick={closeMenu}
              >
                {t('navbar.menu')}
              </Link>
              <Link 
                to="/specialites" 
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                onClick={closeMenu}
              >
                {t('navbar.specialties')}
              </Link>
              <Link 
                to="/about" 
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                onClick={closeMenu}
              >
                {t('navbar.about')}
              </Link>
              <Link 
                to="/contact" 
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                onClick={closeMenu}
              >
                {t('navbar.contact')}
              </Link>
            </div>
          </div>
        )}
      </nav>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
