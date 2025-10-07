

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';
import EnhancedMeta from '../components/EnhancedMeta';

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
    const { ref, animationClasses } = useScrollAnimation();
    return <div ref={ref} className={`${className} ${animationClasses}`}>{children}</div>;
}

const SuccessStoriesPage: React.FC = () => {
    const { t } = useTranslation();
    const metrics = t('success.metrics.items');
    const meta = t('success.meta');

    return (
        <>
            <EnhancedMeta 
                title={meta.title} 
                description={meta.description}
                keywords="Power Platform Erfolgsgeschichten, Power Platform Referenzen, Power Platform Case Studies, Power Platform ROI, Power Platform Transformation"
                ogImage="https://thepoweraddicts.com/logo.png"
            />
            <div className="bg-brand-light-bg">
                {/* Hero Section */}
                <section className="bg-brand-light-blue py-24 text-center">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue-dark">{t('success.hero.title')}</h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t('success.hero.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Metrics Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark">{t('success.metrics.title')}</h2>
                            <p className="text-center mt-2 text-gray-500 text-sm">{t('success.metrics.subtitle')}</p>
                        </AnimatedSection>
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {metrics.map((metric: any) => (
                                <AnimatedSection key={metric.label}><MetricItem value={metric.value} label={metric.label} description={metric.description} /></AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Potential Section */}
                <section className="py-24 bg-brand-light-blue">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                            <div className="relative bg-gradient-to-r from-brand-blue-dark to-brand-teal text-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
                                <svg className="absolute top-8 left-8 w-16 h-16 text-white/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M9.33,12.42,7.18,10.27,4.83,16.85,11.41,19.2l2.15-2.15L9.33,12.42ZM22.67,12.42,20.52,10.27,18.17,16.85,24.75,19.2l2.15-2.15L22.67,12.42Z" />
                                </svg>
                                <div className="relative text-center">
                                    <h2 className="text-2xl md:text-3xl font-bold">{t('success.potential.title')}</h2>
                                    <p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('success.potential.text')}}></p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
};

const MetricItem: React.FC<{value: string; label: string; description: string}> = ({value, label, description}) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-teal text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 will-change-transform">
        <p className="text-5xl font-extrabold text-brand-teal">{value}</p>
        <h3 className="text-xl font-bold text-brand-blue-dark mt-2">{label}</h3>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
    </div>
);

export default SuccessStoriesPage;