

import React from 'react';
import { Link } from 'react-router-dom';
import type { Stat } from '../types';
import { GraduationCapIcon, SearchIcon, CheckCircleIcon, UsersIcon, ClockIcon, ShieldCheckIcon, CertificateIcon, CodeBracketIcon, RocketLaunchIcon } from '../constants/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
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
}> = ({ date, format, statusLabels, labels, onRegister }) => {
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
              <p className="text-sm text-green-600 font-bold">Fr\u00fchbucher: CHF {format.earlyBirdPrice}.-</p>
            )}
            <p className={`${format.earlyBirdPrice && date.status === 'waitlist' ? 'text-sm text-gray-500 line-through' : 'text-2xl font-bold text-brand-blue-dark'}`}>
              CHF {format.price}.-
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

const HomeWorkshopCard: React.FC<{ workshop: any }> = ({ workshop }) => {
    const { showModal } = useLanguage();
    const { t } = useTranslation();
    
    const icons: Record<string, React.ReactNode> = {
        admin: <ShieldCheckIcon className="w-8 h-8 text-brand-teal" />,
        automate: <RocketLaunchIcon className="w-8 h-8 text-brand-purple" />,
        apps: <CodeBracketIcon className="w-8 h-8 text-brand-gold" />,
    }

    const StatusBadge = () => {
      const statusMap = {
        'waitlist': { text: 'Warteliste', className: 'bg-yellow-100 text-yellow-800' },
        'available': { text: 'Verfügbar', className: 'bg-green-100 text-green-800' },
        'full': { text: 'Ausgebucht', className: 'bg-red-100 text-red-800' },
      };
      const currentStatus = statusMap[workshop.status as keyof typeof statusMap];
      return <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase ${currentStatus.className}`}>{currentStatus.text}</span>;
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
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
                           <p className="text-sm text-green-600 font-bold">Frühbucher: {workshop.priceEarlyBird} {workshop.currency}</p>
                        )}
                        <p className={`${workshop.priceEarlyBird ? 'text-sm text-gray-500 line-through' : 'text-2xl font-bold text-brand-blue-dark'}`}>
                           Normalpreis: {workshop.priceNormal} {workshop.currency}
                        </p>
                    </div>
                    <Link to={workshop.detailLink} className="text-sm font-semibold text-brand-teal hover:underline flex-shrink-0 ml-4">Details</Link>
                </div>
                <button 
                    onClick={() => showModal(workshop.modalId)}
                    className="w-full bg-gradient-to-r from-brand-gold to-yellow-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                    {workshop.cta}
                </button>
            </div>
        </div>
    );
};


const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { showModal } = useLanguage();
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
        priceCurrency: 'CHF',
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
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue-dark leading-tight">
              {t('home.hero.title1')} <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-brand-purple">{t('home.hero.title2')}</span>
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </h2>
            
            {/* Next Course Highlight */}
            <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-2xl mx-auto border-2 border-brand-teal">
              <p className="text-sm font-semibold text-brand-teal uppercase tracking-wide">{t('home.hero.nextCourse')}</p>
              <p className="text-2xl md:text-3xl font-bold text-brand-blue-dark mt-2">{t('home.hero.courseDate')}</p>
              <p className="text-gray-600 mt-1">{t('home.hero.courseDetails')}</p>
              <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
                <button 
                  onClick={() => showModal('waitingListAdmin')}
                  className="w-full sm:w-auto bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-brand-glow"
                >
                  {t('home.hero.ctaWorkshops')}
                </button>
                <a 
                  href="#all-workshops" 
                  className="w-full sm:w-auto text-brand-teal font-semibold hover:underline"
                >
                  {t('home.hero.ctaAllDates')}
                </a>
              </div>
            </div>

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
            
            {upcomingCourses.formats.map((format: any, formatIdx: number) => (
              <div key={formatIdx} className="mt-12">
                <div className="bg-brand-light-blue p-6 rounded-xl mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-blue-dark">{format.name}</h3>
                      <p className="text-gray-600 mt-1">{format.tagline}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 font-semibold">Dauer</p>
                        <p className="text-brand-blue-dark font-bold">{format.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-semibold">Teilnehmer</p>
                        <p className="text-brand-blue-dark font-bold">{format.participants}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-semibold">Format</p>
                        <p className="text-brand-blue-dark font-bold">{format.format}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-semibold">Zeitplan</p>
                        <p className="text-brand-blue-dark font-bold">{format.schedule}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {format.dates.map((date: CourseDate, dateIdx: number) => (
                    <AnimatedSection key={dateIdx}>
                      <CourseDateCard 
                        date={date}
                        format={format}
                        statusLabels={upcomingCourses.statusLabels}
                        labels={upcomingCourses}
                        onRegister={() => {
                          // Route to correct modal based on format type and tagline
                          if (format.tagline.includes('Admin')) {
                            showModal('waitingListAdmin');
                          } else if (format.tagline.includes('Power Apps')) {
                            showModal('waitingListApps');
                          } else if (format.tagline.includes('Power Automate')) {
                            showModal('waitingListAutomate');
                          } else {
                            // Crashkurs - use admin modal as fallback
                            showModal('waitingListAdmin');
                          }
                        }}
                      />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))}

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

        {/* Expertise Paths Section */}
        <AnimatedSection className="py-24 bg-brand-light-blue" id="expertise">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark">{expertisePathsData.title}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto text-center">{expertisePathsData.subtitle}</p>

            <div className="mt-12 grid lg:grid-cols-3 gap-8 items-stretch">
              {expertisePathsData.workshops.map((workshop: any, index: number) => (
                <AnimatedSection key={index}>
                  <HomeWorkshopCard workshop={workshop} />
                </AnimatedSection>
              ))}
            </div>

            <div className="my-16 flex items-center justify-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 font-bold uppercase">{t('or')}</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

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

        {/* Alle Workshops Section */}
        <AnimatedSection className="py-24" id="all-workshops">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark mb-12">{t('workshops.available')}</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                {workshops.map((workshop, index) => (
                    <AnimatedSection key={workshop.id}>
                        <HomeWorkshopCard 
                            workshop={workshop} 
                            isFeatured={index === 0}
                        />
                    </AnimatedSection>
                ))}
            </div>
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
            <p className="mt-2 text-center text-gray-600">Mehr zu Beratung und vertiefenden Inhalten</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Link to="/unabhaengige-beratung" className="block bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-brand-blue-dark">Unabhängige Power Platform Beratung</h3>
                <p className="text-gray-600 mt-2">Audit, Zweitmeinung oder Governance‑Check – objektive MVP‑Expertise.</p>
              </Link>
              <Link to="/workshops/power-platform-admin-in-4-wochen" className="block bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-brand-blue-dark">Power Platform Admin – Kursdetails</h3>
                <p className="text-gray-600 mt-2">Alle Inhalte, Wochenplan und Zertifizierung im Überblick.</p>
              </Link>
              <Link to="/erfolgsgeschichten" className="block bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-100 transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-brand-blue-dark">Erfolgsgeschichten</h3>
                <p className="text-gray-600 mt-2">Lerne unsere Absolvent:innen und ihren Weg zum Erfolg kennen.</p>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default HomePage;