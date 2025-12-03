

import React from 'react';
import { Link } from 'react-router-dom';
import type { Stat } from '../types';
import { GraduationCapIcon, SearchIcon, CheckCircleIcon, UsersIcon, ClockIcon, ShieldCheckIcon, CertificateIcon, CodeBracketIcon, RocketLaunchIcon, MvpLogo } from '../constants/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../hooks/useCurrency';
import EnhancedMeta from '../components/EnhancedMeta';
import StructuredData from '../components/StructuredData';
import { enhancedSchemas } from '../constants/enhancedSchemas';

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-extrabold text-brand-teal">{stat.value}</p>
        <p className="text-sm lg:text-base text-gray-600 mt-1">{stat.label}</p>
    </div>
);

interface CourseDate {
  id: string;
  startDate: string;
  endDate: string;
  displayDate: string;
  time: string;
  status: 'available' | 'limited' | 'waitlist' | 'full';
  spotsLeft?: number;
  featured?: boolean;
}

const CourseDateCard: React.FC<{ 
  date: CourseDate; 
  format: any;
  statusLabels: any;
  labels: any;
  onRegister: () => void;
  formatPrice: (price: number) => string;
}> = ({ date, format, statusLabels, labels, onRegister, formatPrice }) => {
  const statusColors = {
    available: 'bg-green-100 text-green-800 border-green-200',
    limited: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    waitlist: 'bg-brand-teal/10 text-brand-teal border-brand-teal/30',
    full: 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${date.featured ? 'border-brand-teal ring-2 ring-brand-teal/20' : 'border-gray-200'}`}>
      {date.featured && (
        <div className="mb-3">
          <span className="inline-block bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Beliebt</span>
        </div>
      )}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-brand-blue-dark">{format.tagline}</h3>
          <p className="text-sm text-gray-600 mt-1">{date.displayDate}</p>
          <p className="text-sm text-gray-500 mt-1">{date.time}</p>
          <p className="text-xs text-gray-500 mt-1">{format.format}</p>
        </div>
      </div>
      
      {/* Status Badge nur wenn available/limited */}
      {(date.status === 'available' || date.status === 'limited') && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${
          date.status === 'available' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-yellow-100 text-yellow-800 border-yellow-200'
        }`}>
          <div className={`w-2 h-2 rounded-full ${date.status === 'available' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
          {statusLabels[date.status]}
          {date.spotsLeft && ` • ${date.spotsLeft} ${labels.spotsLeft}`}
        </div>
      )}
      
      <div className="border-t pt-4 mt-4">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            {format.earlyBirdPrice && date.status === 'waitlist' && (
              <p className="text-sm text-green-600 font-bold">{labels.earlyBird}: {formatPrice(format.earlyBirdPrice)}</p>
            )}
            <p className={`${format.earlyBirdPrice && date.status === 'waitlist' ? 'text-sm text-gray-500 line-through' : 'text-2xl font-bold text-brand-blue-dark'}`}>
              {formatPrice(format.price)}
            </p>
            <p className="text-xs text-gray-500">{labels.perPerson}</p>
          </div>
        </div>
        <button 
          onClick={onRegister}
          disabled={date.status === 'full'}
          className={`w-full font-bold py-3 px-6 rounded-full transition-all ${
            date.status === 'full' 
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
              : 'bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white hover:scale-105 hover:shadow-lg'
          }`}
        >
          {date.status === 'full' ? statusLabels.full : date.status === 'waitlist' ? labels.registerWaitlist : labels.register}
        </button>
      </div>
    </div>
  );
};

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string, id?: string}> = ({ children, className, id }) => {
    const { ref, animationClasses } = useScrollAnimation();
    return <section ref={ref} id={id} className={`${className} ${animationClasses}`}>{children}</section>;
}

const HomeWorkshopCard: React.FC<{ workshop: any; isFeatured: boolean; formatPrice: (price: number) => string }> = ({ workshop, isFeatured, formatPrice }) => {
    const { showModal } = useLanguage();
    const { t } = useTranslation();

    const StatusBadge = () => {
      const statusMap = {
        'waiting-list': { text: t('workshops.status.waiting-list'), className: 'bg-yellow-100 text-yellow-800' },
        'available': { text: t('workshops.status.available'), className: 'bg-green-100 text-green-800' },
        'full': { text: t('workshops.status.full'), className: 'bg-red-100 text-red-800' },
      };
      const currentStatus = statusMap[workshop.status as keyof typeof statusMap];
      return <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase ${currentStatus.className}`}>{currentStatus.text}</span>;
    };

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
                <StatusBadge />
                <h3 className="text-2xl font-extrabold text-brand-blue-dark mt-2">{workshop.title}</h3>
                <p className="text-gray-600">{workshop.subtitle}</p>
                <p className="mt-4 text-gray-700 text-sm">{workshop.description}</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {workshop.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-brand-green flex-shrink-0" /> 
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-8 pt-6 border-t bg-gray-50/70 rounded-b-xl mt-auto">
                <div className="flex justify-between items-baseline mb-6">
                    <div>
                        {workshop.priceEarlyBird && (
                           <p className="text-sm text-green-600 font-bold">{t('workshops.earlyBird')}: {formatPrice(workshop.priceEarlyBird)}</p>
                        )}
                        <p className={`${workshop.priceEarlyBird ? 'text-sm text-gray-500 line-through' : 'text-2xl font-bold text-brand-blue-dark'}`}>
                           {t('workshops.regularPrice')}: {formatPrice(workshop.priceNormal)}
                        </p>
                    </div>
                    <Link to={workshop.detailLink || "/workshops/power-platform-admin-in-4-wochen"} className="text-sm font-semibold text-brand-teal hover:underline flex-shrink-0 ml-4">{t('workshops.details')}</Link>
                </div>
                <CtaButton />
            </div>
        </div>
    );
};


const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { showModal } = useLanguage();
  const { formatPrice, currency } = useCurrency();
  const heroStats: Stat[] = t('home.hero.stats');
  const expertisePathsData = t('home.expertisePaths');
  const upcomingCourses = t('home.upcomingCourses');
  const workshops = t('workshops.list');
  const meta = t('home.meta');
  const orgSchema = t('schemas.organization');
  const websiteSchema = t('schemas.website');

  // Generate Event Schema for each course date
  const eventSchemas = upcomingCourses.formats.flatMap((format: any) => 
    format.dates.map((date: any) => ({
      '@context': 'https://schema.org',
      '@type': 'EducationEvent',
      name: `${format.name}: ${format.tagline}`,
      description: `${format.duration} Online-Kurs via Microsoft Teams`,
      startDate: date.startDate,
      endDate: date.endDate,
      eventStatus: date.status === 'full' ? 'https://schema.org/EventSoldOut' : 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      location: {
        '@type': 'VirtualLocation',
        url: 'https://www.thepoweraddicts.com'
      },
      organizer: {
        '@type': 'Organization',
        name: 'ThePowerAddicts',
        url: 'https://www.thepoweraddicts.com'
      },
      offers: {
        '@type': 'Offer',
        price: format.earlyBirdPrice || format.price,
        priceCurrency: currency,
        availability: date.status === 'full' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
        validFrom: new Date().toISOString().split('T')[0]
      }
    }))
  );

  return (
    <>
      <EnhancedMeta 
        title={meta.title} 
        description={meta.description}
        keywords="Power Platform Schulung DACH, Power Platform Beratung Schweiz, Microsoft MVP, Power Apps Kurs, Power Automate Workshop Deutschland, Power Platform Admin Österreich, Power Platform Training, Microsoft Power Platform DACH"
        ogImage="https://www.thepoweraddicts.com/og-image.jpg"
        ogType="website"
      />
      <StructuredData id="organization-schema" data={orgSchema} />
      <StructuredData id="website-schema" data={websiteSchema} />
      {eventSchemas.map((schema: any, idx: number) => (
        <StructuredData key={`event-${idx}`} id={`event-schema-${idx}`} data={schema} />
      ))}
      <StructuredData id="local-business" data={enhancedSchemas.localBusiness} />
      <StructuredData id="professional-service" data={enhancedSchemas.professionalService} />
      <div className="bg-brand-light-bg">
        {/* Hero Section */}
        <section className="relative overflow-hidden gear-bg">
          <div className="container mx-auto px-6 pt-20 pb-16 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <MvpLogo className="w-12 h-12 text-brand-teal animate-pulse" />
              <span className="text-brand-teal font-bold text-lg">Microsoft MVP Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue-dark leading-tight">
              {t('home.hero.title1')} <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-brand-purple">{t('home.hero.title2')}</span>
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-8 max-w-lg mx-auto">
                {heroStats.map(stat => <StatCard key={stat.label} stat={stat} />)}
            </div>
          </div>
        </section>

        {/* Upcoming Courses Section */}
        <AnimatedSection className="py-24 bg-white" id="termine">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark">{upcomingCourses.title}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto text-center">{upcomingCourses.subtitle}</p>
            
            {/* Intensivprogramme Banner & Cards */}
            {(() => {
              const intensivFormats = upcomingCourses.formats.filter((f: any) => f.type === 'intensiv');
              if (intensivFormats.length > 0) {
                return (
                  <div className="mt-12">
                    {/* Banner nur mit generischen Infos */}
                    <div className="bg-brand-light-blue p-6 rounded-xl mb-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-brand-blue-dark">Intensiv-Programme</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500 font-semibold">Dauer</p>
                            <p className="text-brand-blue-dark font-bold">4 Wochen</p>
                          </div>
                          <div>
                            <p className="text-gray-500 font-semibold">Teilnehmer</p>
                            <p className="text-brand-blue-dark font-bold">Max. 12 Personen</p>
                          </div>
                          <div>
                            <p className="text-gray-500 font-semibold">Format</p>
                            <p className="text-brand-blue-dark font-bold">Online per Microsoft Teams</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 3 Intensivprogramme nebeneinander */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {intensivFormats.map((format: any, formatIdx: number) => {
                        const date = format.dates[0];
                        return (
                          <AnimatedSection key={formatIdx}>
                            <CourseDateCard 
                              date={date}
                              format={format}
                              statusLabels={upcomingCourses.statusLabels}
                              labels={upcomingCourses}
                              formatPrice={formatPrice}
                              onRegister={() => {
                                if (format.tagline.includes('Admin')) {
                                  showModal('waitingListAdmin');
                                } else if (format.tagline.includes('Power Apps')) {
                                  showModal('waitingListApps');
                                } else if (format.tagline.includes('Power Automate')) {
                                  showModal('waitingListAutomate');
                                }
                              }}
                            />
                          </AnimatedSection>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return null;
            })()}

            {/* Crashkurs Bereich */}
            {(() => {
              const schnellFormats = upcomingCourses.formats.filter((f: any) => f.type === 'schnelleinstieg' || f.type === 'fortgeschritten');
              if (schnellFormats.length > 0) {
                return (
                  <div className="mt-16">
                    {/* Schnelleinstieg & Fortgeschritten Banner */}
                    <div className="bg-brand-gold/10 p-6 rounded-xl mb-6 border-2 border-brand-gold/30">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-brand-blue-dark">Schnelleinstieg & Fortgeschritten</h3>
                        <p className="text-gray-600 mt-2">Kompakte 2-Abend-Kurse für schnelles Lernen</p>
                      </div>
                      
                      {/* Info */}
                      <div className="text-center text-sm text-gray-600 mb-4">
                        <p>Perfekt für den Einstieg oder zur Vertiefung deiner Power Platform Skills</p>
                      </div>
                    </div>
                    
                    {/* Kurz-Kurs Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {schnellFormats.map((format: any, formatIdx: number) => {
                        const date = format.dates[0];
                        return (
                          <AnimatedSection key={formatIdx}>
                            <CourseDateCard 
                              date={date}
                              format={format}
                              statusLabels={upcomingCourses.statusLabels}
                              labels={upcomingCourses}
                              formatPrice={formatPrice}
                              onRegister={() => showModal('waitingListAdmin')}
                            />
                          </AnimatedSection>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return null;
            })()}

            {/* Custom Training CTA */}
            <AnimatedSection className="mt-16">
              <div className="bg-gradient-to-r from-brand-blue-dark to-brand-purple p-8 rounded-2xl text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold">{expertisePathsData.customTraining.title}</h3>
                <p className="mt-3 text-gray-100 max-w-2xl mx-auto">{expertisePathsData.customTraining.description}</p>
                <Link 
                  to="/kontakt"
                  className="inline-block mt-6 bg-white text-brand-blue-dark font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  {expertisePathsData.customTraining.cta}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Beratung CTA */}
        <AnimatedSection className="py-24 bg-brand-light-blue">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 will-change-transform max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 bg-brand-gold/10 p-4 rounded-full">
                  <SearchIcon className="w-10 h-10 text-brand-gold" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-bold text-brand-blue-dark">{expertisePathsData.consulting.title}</h3>
                  <p className="mt-2 text-gray-600">{expertisePathsData.consulting.description}</p>
                </div>
                <div className="flex-shrink-0 mt-4 md:mt-0">
                  <Link to="/unabhaengige-beratung" className="inline-block bg-brand-blue-dark text-white font-bold py-3 px-8 rounded-full hover:bg-brand-blue-dark/80 transition-colors transform hover:scale-105">
                    {expertisePathsData.consulting.cta}
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Success Stories Section */}
        <AnimatedSection className="py-24 bg-white" id="erfolgsgeschichten">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark">{t('success.metrics.title')}</h2>
              <p className="text-center mt-2 text-gray-500 text-sm">{t('success.metrics.subtitle')}</p>
            </AnimatedSection>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {t('success.metrics.items').map((metric: any) => (
                <AnimatedSection key={metric.label}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-teal text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 will-change-transform">
                    <p className="text-5xl font-extrabold text-brand-teal">{metric.value}</p>
                    <h3 className="text-xl font-bold text-brand-blue-dark mt-2">{metric.label}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{metric.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection className="mt-16">
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
        </AnimatedSection>

        {/* Certification Section */}
        <AnimatedSection className="py-24 bg-brand-light-blue">
          <div className="container mx-auto px-6">
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
          </div>
        </AnimatedSection>

        {/* Weiterlesen / Interne Verlinkung */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-dark text-center">Weiterlesen</h2>
            <p className="mt-2 text-center text-gray-600">Mehr zu unseren Intensiv-Programmen</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Link to="/workshops/power-platform-admin-in-4-wochen" className="block bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-brand-blue-dark">Power Platform Admin</h3>
                <p className="text-gray-600 mt-2">Werde in 4 Wochen zum zertifizierten Power Platform Administrator.</p>
              </Link>
              <Link to="/workshops/power-apps-profi-in-4-wochen" className="block bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-brand-blue-dark">Power Apps Profi</h3>
                <p className="text-gray-600 mt-2">Entwickle professionelle Canvas & Model-Driven Apps in 4 Wochen.</p>
              </Link>
              <Link to="/workshops/power-automate-profi-in-4-wochen" className="block bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-brand-blue-dark">Power Automate Profi</h3>
                <p className="text-gray-600 mt-2">Meistere komplexe Automatisierungen und API-Integrationen in 4 Wochen.</p>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default HomePage;