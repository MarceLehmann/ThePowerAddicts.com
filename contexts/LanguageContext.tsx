import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { de } from '../locales/de';
import { en } from '../locales/en';

const translations = { de, en };

type Language = 'de' | 'en';
type ModalType = 'newsletter' | 'waitingListAdmin' | 'waitingListAutomate' | 'waitingListApps' | 'partner' | null;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => any;
  showModal: (type: ModalType) => void;
  hideModal: () => void;
  modalType: ModalType;
  isModalOpen: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to get nested values from an object using a dot-notation string
const getNestedValue = (obj: any, key: string): any => {
  return key.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    return (savedLanguage as Language) || 'de';
  });
  const [modalType, setModalType] = useState<ModalType>(null);

  const showModal = (type: ModalType) => setModalType(type);
  const hideModal = () => setModalType(null);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): any => {
    const translationSet = translations[language] || translations.de;
    const value = getNestedValue(translationSet, key);
    if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, showModal, hideModal, modalType, isModalOpen: modalType !== null }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};