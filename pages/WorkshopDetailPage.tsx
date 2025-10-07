

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, CodeBracketIcon, UsersIcon, ClipboardDocumentListIcon } from '../constants/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import EnhancedMeta from '../components/EnhancedMeta';
import StructuredData from '../components/StructuredData';

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
    const { ref, animationClasses } = useScrollAnimation();
    return <div ref={ref} className={`${className} ${animationClasses}`}>{children}</div>;
}

const HeroListItem: React.FC<{children: React.ReactNode;}> = ({ children }) => (
    <li className="flex items-start gap-3 justify-center">
        <CheckCircleIcon className="w-7 h-7 text-brand-green flex-shrink-0" />
        <span>{children}</span>
    </li>
);

const ListItem: React.FC<{children: React.ReactNode;}> = ({ children }) => (
    <li className="flex items-start gap-3">
        <CheckCircleIcon className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
        <span>{children}</span>
    </li>
);

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
            <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-brand-blue-dark">{question}</h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="p-6 pt-0 border-t">
                        <p className="text-gray-700">{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CurriculumWeek: React.FC<{ week: number; title: string; topics: string[]; }> = ({ week, title, topics }) => (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 will-change-transform border-t-4 border-brand-teal h-full flex flex-col">
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-brand-teal text-white font-bold text-2xl rounded-full flex-shrink-0">{week}</div>
            <div>
                <h3 className="text-xl font-bold text-brand-blue-dark">{title}</h3>
            </div>
        </div>
        <ul className="mt-4 space-y-2 flex-grow">
            {topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span>{topic}</span>
                </li>
            ))}
        </ul>
    </div>
);

const DeliverableCard: React.FC<{ icon: React.ReactNode; title: string; items: string[] }> = ({ icon, title, items }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
        <div className="flex items-center gap-3">
            {icon}
            <h3 className="text-lg font-bold text-brand-blue-dark">{title}</h3>
        </div>
        <ul className="mt-4 space-y-2 text-gray-700 flex-grow">
            {items.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
            ))}
        </ul>
    </div>
);


const WorkshopDetailPage: React.FC = () => {
    const { t } = useTranslation();
    const { showModal } = useLanguage();

    const curriculumWeeks = t('workshopDetail.curriculum.weeks');
    const deliverablesCards = t('workshopDetail.deliverables.cards');
    const faqItems = t('workshopDetail.faq.items');
    const meta = t('workshopDetail.meta');
    const courseSchema = t('schemas.courseDetail');
    const faqSchema = t('schemas.faq');
    const breadcrumbSchema = t('schemas.breadcrumb');

    return (
        <>
            <EnhancedMeta 
                title={meta.title} 
                description={meta.description}
                keywords="Power Platform Admin, Power Platform Administration, Power Platform Governance, Power Platform Sicherheit, Power Platform CoE, Power Platform Tenant Management, Power Platform DLP"
                ogImage="https://thepoweraddicts.com/logo.png"
            />
            <StructuredData id="course-detail-schema" data={courseSchema} />
            <StructuredData id="faq-schema" data={faqSchema} />
            <StructuredData id="breadcrumb-schema" data={breadcrumbSchema} />
            <div className="bg-brand-light-bg">
                {/* Sub-navigation breadcrumb */}
                <div className="bg-brand-light-bg border-b">
                    <div className="container mx-auto px-6 py-2 text-sm text-gray-500">
                        <Link to="/workshops" className="hover:text-brand-teal">Workshops</Link>
                        <span className="mx-2">/</span>
                        <span>{t('workshopDetail.nav')}</span>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-brand-blue-dark text-white py-24 text-center">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold">{t('workshopDetail.title')}</h1>
                        <ul className="mt-6 max-w-4xl mx-auto space-y-3 text-lg text-gray-300">
                            {t('workshopDetail.heroList').map((item: string, index: number) => (
                                <HeroListItem key={index}>{item}</HeroListItem>
                            ))}
                        </ul>
                        <div className="mt-10">
                            <button onClick={() => showModal('waitingListAdmin')} className="bg-gradient-to-r from-brand-gold to-yellow-500 text-brand-blue-dark font-bold text-xl py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block">
                                {t('workshopDetail.cta')}
                            </button>
                        </div>
                    </div>
                </section>
                
                {/* Curriculum Section */}
                <section className="py-24 gear-bg">
                    <div className="container mx-auto px-6">
                        <AnimatedSection className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">{t('workshopDetail.curriculum.title')}</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">{t('workshopDetail.curriculum.subtitle')}</p>
                        </AnimatedSection>
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {curriculumWeeks.map((week: {title: string; topics: string[]}, index: number) => (
                                <AnimatedSection key={index}>
                                    <CurriculumWeek week={index + 1} title={week.title} topics={week.topics} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Deliverables Section */}
                <section className="py-24 bg-brand-light-blue">
                    <div className="container mx-auto px-6">
                        <AnimatedSection className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">{t('workshopDetail.deliverables.title')}</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">{t('workshopDetail.deliverables.subtitle')}</p>
                        </AnimatedSection>
                        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <AnimatedSection>
                                <DeliverableCard 
                                    icon={<CodeBracketIcon className="w-8 h-8 text-brand-teal" />}
                                    title={deliverablesCards[0].title} 
                                    items={deliverablesCards[0].items} 
                                />
                            </AnimatedSection>
                            <AnimatedSection>
                                <DeliverableCard 
                                    icon={<ClipboardDocumentListIcon className="w-8 h-8 text-brand-purple" />}
                                    title={deliverablesCards[1].title} 
                                    items={deliverablesCards[1].items} 
                                />
                            </AnimatedSection>
                            <AnimatedSection>
                                <DeliverableCard 
                                    icon={<UsersIcon className="w-8 h-8 text-brand-gold" />}
                                    title={deliverablesCards[2].title} 
                                    items={deliverablesCards[2].items} 
                                />
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Target Audience & Format Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <AnimatedSection>
                                <h2 className="text-3xl font-bold text-brand-blue-dark">{t('workshopDetail.audience.title')}</h2>
                                <ul className="mt-6 space-y-4 text-gray-700">
                                    {t('workshopDetail.audience.items').map((item: string, index: number) => (
                                        <ListItem key={index}>{item}</ListItem>
                                    ))}
                                </ul>
                            </AnimatedSection>
                            <AnimatedSection>
                                <h2 className="text-3xl font-bold text-brand-blue-dark">{t('workshopDetail.format.title')}</h2>
                                <p className="mt-6 text-gray-700" dangerouslySetInnerHTML={{ __html: t('workshopDetail.format.text') }}></p>
                                <div className="mt-6 bg-brand-light-blue p-4 rounded-lg border-l-4 border-brand-teal">
                                    <p className="text-brand-blue-dark" dangerouslySetInnerHTML={{ __html: t('workshopDetail.format.note') }}></p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
                
                {/* FAQ Section */}
                <section className="py-24 bg-brand-light-blue">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <AnimatedSection className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">{t('workshopDetail.faq.title')}</h2>
                        </AnimatedSection>
                        <div className="mt-12 space-y-4">
                            {faqItems.map((item: {question: string; answer: string}, index: number) => (
                                <AnimatedSection key={index}>
                                    <FaqItem question={item.question} answer={item.answer} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24">
                    <div className="container mx-auto px-6 text-center">
                        <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue-dark">{t('workshopDetail.finalCta.title')}</h2>
                        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed">{t('workshopDetail.finalCta.subtitle')}</p>
                        <div className="mt-8">
                            <button onClick={() => showModal('waitingListAdmin')} className="bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-bold text-xl py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-brand-glow inline-block">
                                {t('workshopDetail.cta')}
                            </button>
                        </div>
                        </AnimatedSection>
                    </div>
                </section>

            </div>
        </>
    );
};

export default WorkshopDetailPage;