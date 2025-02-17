import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OrderModal from './OrderModal';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-indigo-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center" onClick={closeMenu}>
                <span className="text-2xl font-extrabold text-[#FF4C4C]">{t('navbar.brand.first')}</span>
                <span className="text-2xl font-extrabold ml-2 text-[#25D366]">{t('navbar.brand.second')}</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600"
                >
                  {t('navbar.home')}
                </Link>
                <Link
                  to="/menu"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600"
                >
                  {t('navbar.menu')}
                </Link>
                <Link
                  to="/specialites"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600"
                >
                  {t('navbar.specialties')}
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600"
                >
                  {t('navbar.about')}
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600"
                >
                  {t('navbar.contact')}
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-4">
              <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg shadow-sm">
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    i18n.language === 'fr' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    i18n.language === 'en' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage('ar')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    i18n.language === 'ar' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  عربي
                </button>
              </div>

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

              <div className="flex justify-center space-x-2 py-2 border-t border-gray-200">
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    i18n.language === 'fr' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    i18n.language === 'en' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage('ar')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    i18n.language === 'ar' 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  عربي
                </button>
              </div>
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
