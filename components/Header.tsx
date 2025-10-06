import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import type { NavLink as NavLinkType } from '../types';
import { MvpLogo } from '../constants/icons';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const navLinks: NavLinkType[] = t('header.navLinks');

  const linkClass = "py-2 px-3 text-brand-blue-dark hover:text-brand-teal transition-colors duration-300 rounded-md text-sm font-medium";
  const activeLinkClass = "py-2 px-3 text-brand-teal font-semibold bg-brand-teal/10 rounded-md text-sm";

  return (
    <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200/80">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
            <img src="https://raw.githubusercontent.com/MarceLehmann/ThePowerAddicts.com/main/public/logo.png" alt="ThePowerAddicts Logo" className="h-14 w-auto" />
        </Link>
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <div className="flex items-center space-x-1 text-sm text-gray-500">
                <MvpLogo className="w-5 h-5 text-brand-blue-dark" />
                <span className="font-medium">{t('header.mvp')}</span>
            </div>
            <Link to="/kontakt" className="bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-bold py-2 px-5 rounded-full shadow-md hover:shadow-brand-glow transition-all duration-300 transform hover:scale-105">
                {t('header.contact')}
            </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-blue-dark focus:outline-none" aria-label={t('header.openMenu')}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/kontakt" onClick={() => setIsMenuOpen(false)} className="bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white text-center font-bold py-3 px-5 rounded-full hover:shadow-lg transition-all duration-300 mt-2">
                {t('header.contact')}
            </Link>
            <LanguageSwitcher isMobile={true} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
