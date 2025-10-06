import React from 'react';
import { Link } from 'react-router-dom';
import { CertificateIcon, CheckCircleIcon } from '../constants/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import Meta from '../components/Meta';
import StructuredData from '../components/StructuredData';

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
    const { ref, animationClasses } = useScrollAnimation();
    return <div ref={ref} className={`${className} ${animationClasses}`}>{children}</div>;
}

interface Workshop {
    id: string;
    modalId: string;
    title: string;
    subtitle: string;
    description: string;
    status: 'waiting-list' | 'available' | 'full';
    priceNormal: number;
    priceEarlyBird?: number;
    currency: string;
    ctaText: string;
    features: string[];
}

const workshopLinks: Record<string, { detailLink: string; }> = {
    'power-platform-admin': {
        detailLink: '/workshops/power-platform-admin-in-4-wochen',
    },
    'power-automate-pro': {
        detailLink: '#',
    },
    'power-apps-pro': {
        detailLink: '#',
    }
}

const WorkshopsPage: React.FC = () => {
    const { t } = useTranslation();
    const workshops: Workshop[] = t('workshops.list');
    const meta = t('workshops.meta');
    const courseListSchema = t('schemas.courseList');

  return (
    <>
      <Meta title={meta.title} description={meta.description} />
      <StructuredData id="course-list-schema" data={courseListSchema} />
      <div className="bg-brand-light-bg">
        {/* Hero Section */}
        <section className="bg-brand-light-blue py-24 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue-dark">{t('workshops.hero.title')}</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('workshops.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Available Workshops */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark mb-12">{t('workshops.available')}</h2>
            </AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                {workshops.map((workshop, index) => (
                    <AnimatedSection key={workshop.id}>
                        <WorkshopCard 
                            workshop={workshop} 
                            isFeatured={index === 0}
                        />
                    </AnimatedSection>
                ))}
            </div>
          </div>
        </section>
        
        {/* Certification Section */}
        <section className="py-24 bg-brand-light-blue">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/2">
                      <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">{t('workshops.certification.title')}</h2>
                      <p className="mt-4 text-gray-600 leading-relaxed">{t('workshops.certification.text')}</p>
                      <ul className="mt-6 space-y-3">
                        {t('workshops.certification.features').map((feature: string) => (
                          <li key={feature} className="flex items-start gap-3"><CheckCircleIcon className="w-6 h-6 text-brand-green flex-shrink-0" />{feature}</li>
                        ))}
                      </ul>
                  </div>
                  <div className="lg:w-1/2 w-full">
                      <div className="bg-white p-6 rounded-lg shadow-2xl transform lg:rotate-3 border-2 border-brand-gold transition-transform hover:rotate-0 hover:scale-105 will-change-transform">
                          <p className="text-sm font-bold text-brand-teal tracking-widest uppercase">{t('workshops.certification.certTitle')}</p>
                          <h4 className="text-3xl font-extrabold text-brand-blue-dark mt-4">ThePowerAddicts</h4>
                           <div className="mt-8 border-t pt-4 flex justify-between items-center">
                              <div>
                                  <p className="text-xs text-gray-500">{t('workshops.certification.certExpert')}</p>
                                  <p className="text-xs text-gray-500">{t('workshops.certification.certIssuedBy')}</p>
                              </div>
                              <CertificateIcon className="w-16 h-16 text-brand-gold" />
                          </div>
                      </div>
                  </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

interface StatusBadgeProps {
    status: Workshop['status'];
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const { t } = useTranslation();
    const statusMap = {
        'waiting-list': { text: t('workshops.status.waiting-list'), className: 'bg-yellow-100 text-yellow-800' },
        'available': { text: t('workshops.status.available'), className: 'bg-green-100 text-green-800' },
        'full': { text: t('workshops.status.full'), className: 'bg-red-100 text-red-800' },
    };
    const currentStatus = statusMap[status];
    return <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase ${currentStatus.className}`}>{currentStatus.text}</span>;
}

interface WorkshopCardProps {
    workshop: Workshop;
    isFeatured: boolean;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop, isFeatured }) => {
    const { t } = useTranslation();
    const { showModal } = useLanguage();
    const linkConfig = workshopLinks[workshop.id as keyof typeof workshopLinks];

    const CtaButton = () => {
        switch (workshop.status) {
            case 'waiting-list':
                return <button onClick={() => showModal(workshop.modalId as any)} className="w-full bg-gradient-to-r from-brand-gold to-yellow-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">{workshop.ctaText}</button>;
            case 'available':
                return <button onClick={() => showModal(workshop.modalId as any)} className="block text-center w-full bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">{workshop.ctaText}</button>;
            case 'full':
                 return <button className="w-full bg-gray-300 text-gray-600 font-bold py-3 px-6 rounded-full cursor-not-allowed" disabled>{t('workshops.status.full')}</button>;
            default:
                return null;
        }
    };
    
    return (
        <div className={`bg-white rounded-2xl shadow-lg border-2 h-full flex flex-col ${isFeatured ? 'border-brand-teal transform lg:scale-105 shadow-2xl' : 'border-gray-200'} transition-all duration-300 hover:shadow-xl`}>
            <div className="p-8 flex-grow">
                <StatusBadge status={workshop.status} />
                <h3 className="text-2xl font-extrabold text-brand-blue-dark mt-2">{workshop.title}</h3>
                <p className="text-gray-600">{workshop.subtitle}</p>
                <p className="mt-4 text-gray-700 text-sm">{workshop.description}</p>
                 <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {workshop.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-brand-green flex-shrink-0" /> {feature}</div>
                    ))}
                </div>
            </div>
            <div className="p-8 pt-6 border-t bg-gray-50/70 rounded-b-xl mt-auto">
                 <div className="flex justify-between items-baseline mb-6">
                    <div>
                        {workshop.priceEarlyBird && (
                           <p className="text-sm text-green-600 font-bold">{t('workshops.earlyBird')}: {workshop.priceEarlyBird} {workshop.currency}</p>
                        )}
                         <p className={`${workshop.priceEarlyBird ? 'text-sm text-gray-500 line-through' : 'text-2xl font-bold text-brand-blue-dark'}`}>
                           {t('workshops.regularPrice')}: {workshop.priceNormal} {workshop.currency}
                         </p>
                    </div>
                     <Link to={linkConfig?.detailLink || '#'} className="text-sm font-semibold text-brand-teal hover:underline flex-shrink-0 ml-4">{t('workshops.details')}</Link>
                 </div>
                 <CtaButton />
            </div>
        </div>
    );
};


export default WorkshopsPage;