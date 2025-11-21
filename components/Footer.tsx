import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { LinkedInIcon } from '../constants/icons';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { showModal } = useLanguage();
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
             <img src="/logo.png" alt="ThePowerAddicts Logo" className="h-16 w-auto -ml-4 mb-2 filter brightness-0 invert" />
            <p className="text-gray-400 text-sm max-w-xs">{t('footer.slogan')}</p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold tracking-wider uppercase text-gray-300">{t('footer.nav')}</h4>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><Link to="/ueber-uns" className="hover:text-brand-teal transition-colors">{t('footer.navLinks.about')}</Link></li>
              <li><a href="/#all-workshops" className="hover:text-brand-teal transition-colors">{t('footer.navLinks.workshops')}</a></li>
              <li><Link to="/unabhaengige-beratung" className="hover:text-brand-teal transition-colors">{t('footer.navLinks.consulting')}</Link></li>
              <li><a href="/#erfolgsgeschichten" className="hover:text-brand-teal transition-colors">{t('footer.navLinks.success')}</a></li>
              <li><Link to="/partner" className="hover:text-brand-teal transition-colors">{t('footer.navLinks.partner')}</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold tracking-wider uppercase text-gray-300">{t('footer.legal')}</h4>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><Link to="/rechtliches#impressum" className="hover:text-brand-teal transition-colors">{t('footer.legalLinks.imprint')}</Link></li>
              <li><Link to="/rechtliches#datenschutz" className="hover:text-brand-teal transition-colors">{t('footer.legalLinks.privacy')}</Link></li>
              <li><Link to="/rechtliches#agb" className="hover:text-brand-teal transition-colors">{t('footer.legalLinks.terms')}</Link></li>
            </ul>
          </div>
           <div className="md:col-span-2">
            <h4 className="font-semibold tracking-wider uppercase text-gray-300">{t('footer.socials.title')}</h4>
            <div className="mt-4">
               <a href={t('footer.socials.companyLinkedInUrl')} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-teal transition-colors inline-block">
                <LinkedInIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold tracking-wider uppercase text-gray-300">{t('footer.newsletter')}</h4>
            <p className="mt-4 text-gray-400 text-sm">{t('footer.newsletterText')}</p>
            <div className="mt-4">
              <button 
                onClick={() => showModal('newsletter')}
                className="w-full bg-brand-teal text-white font-bold px-4 py-3 rounded-md hover:bg-brand-teal-dark transition-colors flex items-center justify-center"
              >
                {t('footer.submit')}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;