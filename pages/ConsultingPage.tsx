

import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, ShieldCheckIcon, CheckCircleIcon } from '../constants/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';
import EnhancedMeta from '../components/EnhancedMeta';
import StructuredData from '../components/StructuredData';

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
    const { ref, animationClasses } = useScrollAnimation();
    return <div ref={ref} className={`${className} ${animationClasses}`}>{children}</div>;
}

const ConsultingPage: React.FC = () => {
    const { t } = useTranslation();
    const services = t('consulting.services');
    const processSteps = t('consulting.process.steps');
    const meta = t('consulting.meta');
    const serviceSchema = t('schemas.services');
    
    return (
        <>
            <EnhancedMeta 
                title={meta.title} 
                description={meta.description}
                keywords="Power Platform Beratung, Microsoft Power Platform Consulting, MVP Beratung, Power Platform Strategie, Power Platform Architektur, Power Platform Best Practices, Power Platform Consulting Deutschland, Power Platform Consulting Schweiz, Power Platform Beratung Österreich"
                ogImage="https://thepoweraddicts.com/logo.png"
            />
            {serviceSchema.map((schema: object, index: number) => (
              <StructuredData key={`service-${index}`} id={`service-schema-${index}`} data={schema} />
            ))}
            <div className="bg-brand-light-bg">
                {/* Hero Section */}
                <section className="bg-brand-blue-dark text-white py-24">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold">{t('consulting.hero.title')}</h1>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {t('consulting.hero.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {services.map((service: any, index: number) => (
                                <AnimatedSection key={service.title}>
                                    <ServiceCard
                                        icon={
                                            index === 0 ? <SearchIcon className="w-10 h-10 text-brand-teal" /> :
                                            index === 1 ? <CheckCircleIcon className="w-10 h-10 text-brand-green" /> :
                                            <ShieldCheckIcon className="w-10 h-10 text-brand-purple" />
                                        }
                                        borderColor={
                                            index === 0 ? "border-brand-teal" :
                                            index === 1 ? "border-brand-green" :
                                            "border-brand-purple"
                                        }
                                        title={service.title}
                                        duration={service.duration}
                                        description={service.description}
                                        deliverables={service.deliverables}
                                        deliverablesTitle={t('consulting.deliverablesTitle')}
                                    />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Process Section */}
                <section className="bg-brand-light-blue py-24">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark">{t('consulting.process.title')}</h2>
                        </AnimatedSection>
                        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center relative">
                            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 hidden md:block" aria-hidden="true"></div>
                            {processSteps.map((step: any, index: number) => (
                                <AnimatedSection key={step.title}>
                                    <ProcessStep number={`${index + 1}`} title={step.title} description={step.description} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6 text-center">
                        <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue-dark">{t('consulting.cta.title')}</h2>
                        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed">{t('consulting.cta.subtitle')}</p>
                        <div className="mt-8">
                            <Link to="/kontakt" className="bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-bold text-xl py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-brand-glow inline-block">
                                {t('consulting.cta.button')}
                            </Link>
                        </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
};

interface ServiceCardProps { icon: React.ReactNode; title: string; duration: string; description: string; deliverables: string[]; borderColor: string; deliverablesTitle: string; }
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, duration, description, deliverables, borderColor, deliverablesTitle }) => (
    <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${borderColor} flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 will-change-transform`}>
        <div className="flex justify-between items-start">
            {icon}
            <span className="bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">{duration}</span>
        </div>
        <h3 className="text-2xl font-bold text-brand-blue-dark mt-4">{title}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{description}</p>
        <div className="mt-6 pt-4 border-t">
            <h4 className="font-semibold text-brand-blue-dark">{deliverablesTitle}</h4>
            <ul className="mt-2 space-y-2 text-sm">
                {deliverables.map(item => (
                    <li key={item} className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const ProcessStep: React.FC<{number: string; title: string; description: string}> = ({number, title, description}) => (
    <div className="relative bg-brand-light-blue">
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-brand-teal text-white font-bold text-2xl rounded-full border-4 border-brand-light-blue shadow-md">
            {number}
        </div>
        <h3 className="text-xl font-bold text-brand-blue-dark mt-4">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
    </div>
);

export default ConsultingPage;