

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import Meta from '../components/Meta';
import StructuredData from '../components/StructuredData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string, id?: string}> = ({ children, className, id }) => {
    const { ref, animationClasses } = useScrollAnimation();
    return <section ref={ref} id={id} className={`${className} ${animationClasses}`}>{children}</section>;
}

const LegalPage: React.FC = () => {
  const { t } = useTranslation();
  const meta = t('legal.meta');
  const orgSchema = t('schemas.organization');

  return (
    <>
      <Meta title={meta.title} description={meta.description} />
      <StructuredData id="organization-schema" data={orgSchema} />
      <div className="bg-brand-light-bg">
        {/* Hero Section */}
        <section className="bg-brand-light-blue py-24 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue-dark">{t('legal.hero.title')}</h1>
          </div>
        </section>

        {/* Content Section */}
        <div className="py-24">
            <div className="container mx-auto px-6 max-w-4xl space-y-16">
                
                <AnimatedSection id="impressum">
                    <h2 className="text-3xl font-bold text-brand-blue-dark border-b pb-4 mb-6">{t('legal.imprint.title')}</h2>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        {t('legal.imprint.content').map((line: string, index: number) => (
                            <p key={index} className="text-lg text-gray-700">{line}</p>
                        ))}
                    </div>
                </AnimatedSection>
                
                <AnimatedSection id="datenschutz">
                    <h2 className="text-3xl font-bold text-brand-blue-dark border-b pb-4 mb-6">{t('legal.privacy.title')}</h2>
                    <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none" dangerouslySetInnerHTML={{ __html: t('legal.privacy.content') }}>
                    </div>
                </AnimatedSection>

                <AnimatedSection id="agb">
                    <h2 className="text-3xl font-bold text-brand-blue-dark border-b pb-4 mb-6">{t('legal.terms.title')}</h2>
                    <div className="bg-white p-8 rounded-lg shadow-md prose max-w-none" dangerouslySetInnerHTML={{ __html: t('legal.terms.content') }}>
                    </div>
                </AnimatedSection>

            </div>
        </div>

      </div>
    </>
  );
};

export default LegalPage;