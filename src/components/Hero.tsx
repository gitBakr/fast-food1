import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { isRTL } from '../i18n';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRtl = isRTL(i18n.language);

  return (
    <div className="relative bg-white overflow-hidden w-full">
      <div className="w-full">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Image */}
          <div className="relative w-full">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full"
              src="https://images.unsplash.com/photo-1509722747041-616f39b57569"
              alt="Sandwich artisanal"
            />
          </div>

          {/* Contenu texte */}
          <div className={`relative z-10 py-12 px-4 sm:px-6 lg:px-8 ${
            isRtl ? 'text-right' : 'text-left'
          }`}>
            <main className="mt-10 mx-auto sm:mt-12 md:mt-16 lg:mt-20">
              <div>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  {t('hero.title')}
                </h1>
                <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {t('hero.subtitle')}
                </p>
                <div className={`mt-5 sm:mt-8 flex ${
                  isRtl ? 'flex-row-reverse' : 'flex-row'
                } sm:justify-center lg:justify-start gap-4`}>
                  <Link
                    to="/menu"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
                  >
                    {t('hero.order_button')}
                  </Link>
                  <Link
                    to="/menu"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-700 bg-amber-100 hover:bg-amber-200 md:py-4 md:text-lg md:px-10"
                  >
                    {t('hero.discover_button')}
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Section des caractéristiques */}
      <div className="bg-gray-50 py-12 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('hero.features.fresh.title')}
              </h3>
              <p className="text-gray-500">
                {t('hero.features.fresh.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('hero.features.quick.title')}
              </h3>
              <p className="text-gray-500">
                {t('hero.features.quick.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('hero.features.delivery.title')}
              </h3>
              <p className="text-gray-500">
                {t('hero.features.delivery.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
