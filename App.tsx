

import React, { useEffect, useRef } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkshopDetailPage from './pages/WorkshopDetailPage';
import PowerAppsWorkshopDetailPage from './pages/PowerAppsWorkshopDetailPage';
import PowerAutomateWorkshopDetailPage from './pages/PowerAutomateWorkshopDetailPage';
import ConsultingPage from './pages/ConsultingPage';
import ContactPage from './pages/ContactPage';
import PartnerPage from './pages/PartnerPage';
import LegalPage from './pages/LegalPage';
import WorkshopModal from './components/WorkshopModal';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import StructuredData from './components/StructuredData';
import { useTranslation } from './hooks/useTranslation';

const SystemeIoModal: React.FC = () => {
    const { isModalOpen, hideModal, modalType, t } = useLanguage();
    const contentRef = useRef<HTMLDivElement>(null);

    // Only handle newsletter and partner modals (not workshop modals)
    if (!isModalOpen || !modalType || ['waitingListAdmin', 'waitingListAutomate', 'waitingListApps'].includes(modalType)) {
        return null;
    }

    useEffect(() => {
        if (isModalOpen && modalType && contentRef.current) {
            const embedCode = t(`systemeIo.${modalType}`);
            const container = contentRef.current;
            container.innerHTML = embedCode;

            const scripts = Array.from(container.getElementsByTagName('script'));
            // Fix: Explicitly type `oldScript` to resolve property access errors on `unknown` type.
            scripts.forEach((oldScript: HTMLScriptElement) => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                if (oldScript.src) {
                   newScript.src = oldScript.src;
                } else {
                   newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                }
                oldScript.parentNode?.replaceChild(newScript, oldScript);
            });
        }
    }, [isModalOpen, modalType, t]);

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
        onClick={hideModal}
        role="dialog"
        aria-modal="true"
      >
        <div 
          className="bg-white rounded-xl shadow-2xl w-full max-w-2xl relative transform transition-all animate-fade-in-up overflow-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
           <button 
            onClick={hideModal} 
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-800 transition-colors z-10 p-2 bg-white rounded-full"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <div ref={contentRef} className="p-2 sm:p-4" />
        </div>
      </div>
    );
};

const AppContent: React.FC = () => {
  const { t } = useTranslation();
  const org = t('schemas.organization');
  const website = t('schemas.website');
  const persons = t('schemas.persons');
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ueber-uns" element={<AboutPage />} />
            <Route path="/workshops/power-platform-admin-in-4-wochen" element={<WorkshopDetailPage />} />
            <Route path="/workshops/power-apps-profi-in-4-wochen" element={<PowerAppsWorkshopDetailPage />} />
            <Route path="/workshops/power-automate-profi-in-4-wochen" element={<PowerAutomateWorkshopDetailPage />} />
            <Route path="/unabhaengige-beratung" element={<ConsultingPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/rechtliches" element={<LegalPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
      {/* Globale Structured-Data: Organization, Website, Personen */}
      <StructuredData id="org-schema" data={org} />
      <StructuredData id="website-schema" data={website} />
      {Array.isArray(persons) && persons.map((p: any, idx: number) => (
        <StructuredData key={`person-${idx}`} id={`person-schema-${idx}`} data={p} />
      ))}
      <WorkshopModal />
      <SystemeIoModal />
    </HashRouter>
  );
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;