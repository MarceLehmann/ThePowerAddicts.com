import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSwitcher: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => {
  const { language, setLanguage } = useTranslation();

  const handleSetLanguage = (lang: 'de' | 'en') => {
    setLanguage(lang);
  };

  const baseClasses = "font-bold transition-colors duration-200 uppercase text-sm";
  const activeClasses = "text-brand-teal";
  const inactiveClasses = "text-gray-500 hover:text-brand-teal-dark";
  
  const mobileClasses = "py-2 px-3 text-brand-blue-dark hover:text-brand-teal transition-colors duration-300 rounded-md text-sm font-medium w-full text-left";
  const mobileActiveClasses = "py-2 px-3 text-brand-teal font-semibold bg-brand-teal/10 rounded-md text-sm w-full text-left";

  if (isMobile) {
      return (
        <div className="flex items-center justify-around pt-4 border-t mt-4">
             <button 
                onClick={() => handleSetLanguage('de')}
                className={`${language === 'de' ? mobileActiveClasses : mobileClasses}`}
                aria-pressed={language === 'de'}
            >
                Deutsch
            </button>
             <button 
                onClick={() => handleSetLanguage('en')}
                className={`${language === 'en' ? mobileActiveClasses : mobileClasses}`}
                aria-pressed={language === 'en'}
            >
                English
            </button>
        </div>
      )
  }

  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => handleSetLanguage('de')}
        className={`${baseClasses} ${language === 'de' ? activeClasses : inactiveClasses}`}
        aria-pressed={language === 'de'}
      >
        DE
      </button>
      <span className="text-gray-300">|</span>
      <button 
        onClick={() => handleSetLanguage('en')}
        className={`${baseClasses} ${language === 'en' ? activeClasses : inactiveClasses}`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
