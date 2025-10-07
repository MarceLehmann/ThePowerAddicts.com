

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircleIcon } from '../constants/icons';
import EnhancedMeta from '../components/EnhancedMeta';

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
    const { ref, animationClasses } = useScrollAnimation();
    return <div ref={ref} className={`${className} ${animationClasses}`}>{children}</div>;
}

const PartnerPage: React.FC = () => {
    const { t } = useTranslation();
    const { showModal } = useLanguage();
    const processSteps = t('partner.process.steps');
    const benefits = t('partner.benefits.items');
    const meta = t('partner.meta');

    return (
        <>
            <EnhancedMeta 
                title={meta.title} 
                description={meta.description}
                keywords="Power Platform Partnerschaft, Power Platform Zusammenarbeit, Power Platform Kooperation, Power Platform Business Partner, Power Platform Empfehlungsprogramm"
                ogImage="https://thepoweraddicts.com/logo.png"
            />
            <div className="bg-brand-light-bg">
                {/* Hero Section */}
                <section className="bg-brand-blue-dark text-white py-24">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold">{t('partner.hero.title')}</h1>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: t('partner.hero.subtitle') }}></p>
                    </div>
                </section>

                {/* How it works Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark">{t('partner.process.title')}</h2>
                        </AnimatedSection>
                        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center relative">
                            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 hidden md:block" aria-hidden="true"></div>
                            {processSteps.map((step: any, index: number) => (
                                <AnimatedSection key={step.title}><ProcessStep number={`${index + 1}`} title={step.title} description={step.description} /></AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-brand-light-blue">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark">{t('partner.benefits.title')}</h2>
                        </AnimatedSection>
                        <div className="mt-12 grid md:grid-cols-2 gap-8">
                            {benefits.map((benefit: any) => (
                                <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Signup Form Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark mb-4">{t('partner.form.title')}</h2>
                             <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed">{t('partner.form.subtitle')}</p>
                            <div className="mt-8">
                                <button 
                                    onClick={() => showModal('partner')}
                                    className="w-full max-w-xs mx-auto bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-brand-glow"
                                >
                                    {t('partner.form.submit')}
                                </button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
};

const ProcessStep: React.FC<{number: string; title: string; description: string}> = ({number, title, description}) => (
    <div className="relative bg-brand-light-bg">
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-brand-teal text-white font-bold text-2xl rounded-full border-4 border-brand-light-bg shadow-md">
            {number}
        </div>
        <h3 className="text-xl font-bold text-brand-blue-dark mt-4">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
    </div>
);

const BenefitCard: React.FC<{title: string; description: string}> = ({title, description}) => (
    <div className="flex items-start gap-4">
        <CheckCircleIcon className="w-8 h-8 text-brand-green flex-shrink-0 mt-1" />
        <div>
            <h3 className="text-xl font-bold text-brand-blue-dark">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
        </div>
    </div>
);

export default PartnerPage;