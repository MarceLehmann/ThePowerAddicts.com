import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WorkshopModal: React.FC = () => {
    const { isModalOpen, hideModal, modalType, language } = useLanguage();
    
    if (!isModalOpen || !modalType) return null;

    // Map modal types to workshop URLs
    const workshopUrls: Record<string, { de: string; en: string }> = {
        waitingListAdmin: {
            de: 'https://workshop.thepoweraddicts.com/powerplatformadmin_de1',
            en: 'https://workshop.thepoweraddicts.com/powerplatformadmin_en'
        },
        waitingListAutomate: {
            de: 'https://workshop.thepoweraddicts.com/powerautomatemaker_de',
            en: 'https://workshop.thepoweraddicts.com/powerautomatemaker_en'
        },
        waitingListApps: {
            de: 'https://workshop.thepoweraddicts.com/powerappsmaker_de',
            en: 'https://workshop.thepoweraddicts.com/powerappsmaker_en'
        },
        partner: {
            de: 'https://workshop.thepoweraddicts.com/werde-partner',
            en: 'https://workshop.thepoweraddicts.com/become-a-partner'
        }
    };

    // Get the appropriate URL based on modal type and language
    const iframeUrl = workshopUrls[modalType]?.[language];

    // If no workshop URL (e.g., newsletter or partner modals), return null
    if (!iframeUrl) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
            onClick={hideModal}
            role="dialog"
            aria-modal="true"
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] relative transform transition-all animate-fade-in-up flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={hideModal} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10 p-2 bg-white rounded-full shadow-lg"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                {/* iFrame Container */}
                <div className="flex-1 overflow-hidden rounded-xl">
                    <iframe
                        src={iframeUrl}
                        className="w-full h-full border-0"
                        title="Workshop Anmeldung"
                        loading="eager"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                </div>
            </div>
        </div>
    );
};

export default WorkshopModal;
