

import React from 'react';
import type { TeamMember } from '../types';
import { MvpLogo, RocketLaunchIcon, SearchIcon, ShieldCheckIcon, UsersIcon, GlobeAltIcon, LinkedInIcon, ClockIcon, CodeBracketIcon } from '../constants/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';
import EnhancedMeta from '../components/EnhancedMeta';
import OptimizedImage from '../components/OptimizedImage';
import StructuredData from '../components/StructuredData';
import { generateBreadcrumb } from '../constants/enhancedSchemas';
import { useLocation } from 'react-router-dom';

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
    const { ref, animationClasses } = useScrollAnimation();
    return <div ref={ref} className={`${className} ${animationClasses}`}>{children}</div>;
}

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const expertiseCards = t('about.expertise.cards');
  const teamMembers = t('about.team.members');
  const philosophyCards = t('about.philosophy.cards');
  const meta = t('about.meta');
  const personSchemas = t('schemas.persons');
  const breadcrumb = generateBreadcrumb(location.pathname);

  return (
    <>
      <EnhancedMeta 
        title={meta.title} 
        description={meta.description}
        keywords="Microsoft MVP, Power Platform Experten, ThePowerAddicts Team, Marcel Lehmann, Michael Roth, Power Platform Trainer DACH"
        ogImage="https://www.thepoweraddicts.com/og-image.jpg"
        ogType="profile"
      />
      <StructuredData id="breadcrumb-about" data={breadcrumb} />
      {personSchemas.map((schema: object, index: number) => (
        <StructuredData key={`person-${index}`} id={`person-schema-${index}`} data={schema} />
      ))}
      <div className="bg-brand-light-bg">
        {/* Hero Section */}
        <section className="bg-brand-light-blue py-24">
          <div className="container mx-auto px-6 text-center">
            <MvpLogo className="w-16 h-16 mx-auto text-brand-teal" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue-dark mt-4">{t('about.hero.title')}</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.hero.text')}
            </p>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark">{t('about.expertise.title')}</h2>
            </AnimatedSection>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertiseCards.map((card: {title: string; description: string}, index: number) => (
                <AnimatedSection key={card.title}>
                  <ExpertiseCard
                    icon={
                      index === 0 ? <RocketLaunchIcon className="w-8 h-8 text-brand-teal" /> :
                      index === 1 ? <SearchIcon className="w-8 h-8 text-brand-gold" /> :
                      index === 2 ? <ShieldCheckIcon className="w-8 h-8 text-brand-purple" /> :
                      <ClockIcon className="w-8 h-8 text-brand-green" />
                    }
                    title={card.title}
                    description={card.description}
                    borderColor={
                      index === 0 ? "border-brand-teal" :
                      index === 1 ? "border-brand-gold" :
                      index === 2 ? "border-brand-purple" :
                      "border-brand-green"
                    }
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-brand-light-blue py-24">
          <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark mb-12">{t('about.team.title')}</h2>
              </AnimatedSection>
              <div className="max-w-4xl mx-auto space-y-12">
                {teamMembers.map((member: any, index: number) => (
                  <AnimatedSection key={index}>
                    <TeamMemberCard member={member} />
                  </AnimatedSection>
                ))}
              </div>
          </div>
        </section>
        {/* Philosophy Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue-dark mb-12">{t('about.philosophy.title')}</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {philosophyCards.map((card: {title: string; description: string; example: string}) => (
                      <AnimatedSection key={card.title}>
                        <PhilosophyCard 
                            title={card.title}
                            description={card.description}
                            example={card.example}
                            exampleLabel={t('about.philosophy.example')}
                        />
                      </AnimatedSection>
                  ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const SocialLink: React.FC<{href: string; Icon: React.FC<{className?: string}>}> = ({href, Icon}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-teal transition-colors group">
        <div className="w-10 h-10 p-2 border-2 border-gray-200 rounded-full flex items-center justify-center group-hover:border-brand-teal/50 transition-colors">
            <Icon className="w-full h-full" />
        </div>
    </a>
);

type TeamMemberType = {
  name: string;
  specialty: string;
  bio: string;
  website: string;
  websiteUrl: string;
  blog?: string;
  blogUrl?: string;
  image: string;
  socials: {
    linkedin?: string;
  }
};

const TeamMemberCard: React.FC<{ member: TeamMemberType }> = ({ member }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 items-center">
    <div className="md:w-1/3 text-center flex-shrink-0">
      <OptimizedImage 
        src={member.image}
        alt={`${member.name} - Microsoft MVP für Power Platform, spezialisiert auf ${member.specialty}`}
        width={192}
        height={192}
        className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl mx-auto shadow-lg"
        objectFit="cover"
        priority={false}
      />
    </div>
    <div className="md:w-2/3 w-full">
      <p className="text-gray-500 font-semibold">{member.specialty}</p>
      <h3 className="text-3xl sm:text-4xl font-bold text-brand-blue-dark mt-1">{member.name}</h3>
      <div className="w-24 h-1 bg-brand-teal my-4"></div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-700">
            <GlobeAltIcon className="w-6 h-6 text-brand-teal flex-shrink-0" />
            <a href={member.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors break-all">
            {member.website}
            </a>
        </div>
        {member.blog && member.blogUrl && (
            <div className="flex items-center gap-3 text-gray-700">
                <CodeBracketIcon className="w-6 h-6 text-brand-purple flex-shrink-0" />
                <a href={member.blogUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors break-all">
                {member.blog}
                </a>
            </div>
        )}
      </div>
       <div className="flex items-center gap-4 mt-4">
        {member.socials.linkedin && <SocialLink href={member.socials.linkedin} Icon={LinkedInIcon} />}
      </div>
       <p className="text-gray-600 mt-6 text-base italic border-l-4 border-gray-200 pl-4">"{member.bio}"</p>
    </div>
  </div>
);


const ExpertiseCard: React.FC<{ icon: React.ReactNode; title: string; description: string; borderColor: string; }> = ({ icon, title, description, borderColor }) => (
    <div className={`bg-white p-6 rounded-lg shadow-lg border-t-4 ${borderColor} text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 will-change-transform`}>
        <div className="bg-brand-light-blue inline-block p-4 rounded-full">{icon}</div>
        <h3 className="text-xl font-bold text-brand-blue-dark mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
    </div>
);

const PhilosophyCard: React.FC<{ title: string; description: string; example: string; exampleLabel: string; }> = ({ title, description, example, exampleLabel }) => (
    <div className="bg-white p-6 rounded-lg h-full shadow-lg">
        <h3 className="text-xl font-bold text-brand-blue-dark">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
        <div className="mt-4 bg-brand-light-bg border-l-4 border-brand-teal p-3 rounded-r-md">
            <p className="text-sm font-semibold text-brand-blue-dark">{exampleLabel}</p>
            <p className="text-sm text-gray-600">{example}</p>
        </div>
    </div>
);

export default AboutPage;