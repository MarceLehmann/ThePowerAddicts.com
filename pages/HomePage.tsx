

import React from 'react';
import { Link } from 'react-router-dom';
import type { Stat } from '../types';
import { GraduationCapIcon, SearchIcon, CheckCircleIcon, UsersIcon, ClockIcon, ShieldCheckIcon, CertificateIcon, CodeBracketIcon, RocketLaunchIcon } from '../constants/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import Meta from '../components/Meta';
import StructuredData from '../components/StructuredData';

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-extrabold text-brand-teal">{stat.value}</p>
        <p className="text-sm lg:text-base text-gray-600 mt-1">{stat.label}</p>
    </div>
);

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string, id?: string}> = ({ children, className, id }) => {
    const { ref, animationClasses } = useScrollAnimation();
    return <section ref={ref} id={id} className={`${className} ${animationClasses}`}>{children}</section>;
}

const HomeWorkshopCard: React.FC<{ workshop: { id: string; modalId: string; title: string; description: string; cta: string; detailLink: string; } }> = ({ workshop }) => {
    const { showModal } = useLanguage();
    const { t } = useTranslation();
    
    const icons: Record<string, React.ReactNode> = {
        admin: <ShieldCheckIcon className="w-8 h-8 text-brand-teal" />,
        automate: <RocketLaunchIcon className="w-8 h-8 text-brand-purple" />,
        apps: <CodeBracketIcon className="w-8 h-8 text-brand-gold" />,
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-teal transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 will-change-transform flex flex-col h-full">
            <div className="flex items-center gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-full">{icons[workshop.id]}</div>
                <h3 className="text-2xl font-bold text-brand-blue-dark">{workshop.title}</h3>
            </div>
            <p className="mt-4 text-gray-600 flex-grow">{workshop.description}</p>
            <div className="mt-8 flex flex-col gap-3">
                <button 
                    onClick={() => showModal(workshop.modalId as any)} 
                    className="w-full bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-brand-glow"
                >
                    {workshop.cta}
                </button>
                <Link 
                    to={workshop.detailLink} 
                    className="text-center text-sm font-semibold text-brand-teal hover:underline"
                >
                    {t('workshops.details')}
                </Link>
            </div>
        </div>
    );
};


const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const heroStats: Stat[] = t('home.hero.stats');
  const expertisePathsData = t('home.expertisePaths');
  const meta = t('home.meta');
  const orgSchema = t('schemas.organization');
  const websiteSchema = t('schemas.website');


  return (
    <>
      <Meta title={meta.title} description={meta.description} />
      <StructuredData id="organization-schema" data={orgSchema} />
      <StructuredData id="website-schema" data={websiteSchema} />
      <div className="bg-brand-light-bg">
        {/* Hero Section */}
        <section className="relative overflow-hidden gear-bg">
          <div className="container mx-auto px-6 pt-20 pb-28 text-center">
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
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/workshops" className="w-full sm:w-auto bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-brand-glow">
                {t('home.hero.ctaWorkshops')}
              </Link>
              <Link to="/unabhaengige-beratung" className="w-full sm:w-auto bg-white text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-300">
                {t('home.hero.ctaConsulting')}
              </Link>
            </div>
          </div>
        </section>

        {/* Expertise Paths Section */}
        <AnimatedSection className="py-24" id="expertise">
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
      </div>
    </>
  );
};

export default HomePage;