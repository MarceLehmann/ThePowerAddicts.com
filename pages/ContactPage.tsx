

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';
import EnhancedMeta from '../components/EnhancedMeta';

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
    const { ref, animationClasses } = useScrollAnimation();
    return <div ref={ref} className={`${className} ${animationClasses}`}>{children}</div>;
}

const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    const infoBoxes = t('contact.info');
    const subjects = t('contact.form.subjects');
    const meta = t('contact.meta');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(t('contact.alert'));
        e.currentTarget.reset();
    };

    return (
        <>
            <EnhancedMeta 
                title={meta.title} 
                description={meta.description}
                keywords="Power Platform Kontakt, Power Platform Beratung Anfrage, Power Platform Workshop Anfrage, Power Platform Schulung buchen"
                ogImage="https://thepoweraddicts.com/logo.png"
            />
            <div className="bg-brand-light-bg">
                {/* Hero Section */}
                <section className="bg-brand-light-blue py-24 text-center">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue-dark">{t('contact.hero.title')}</h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            {t('contact.hero.subtitle')}
                        </p>
                    </div>
                </section>
                
                {/* Contact Form and Info Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-5 gap-12">
                            {/* Form */}
                            <AnimatedSection className="lg:col-span-3">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-brand-blue-dark mb-6">{t('contact.form.title')}</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <FormInput label={t('contact.form.name')} name="name" type="text" />
                                        <FormInput label={t('contact.form.email')} name="email" type="email" />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.subject')}</label>
                                        <select id="subject" name="subject" required className="w-full px-4 py-3 bg-brand-light-bg border border-gray-300 rounded-lg focus:ring-brand-teal focus:border-brand-teal">
                                            {subjects.map((subject: string) => (
                                                <option key={subject}>{subject}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</label>
                                        <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 bg-brand-light-bg border border-gray-300 rounded-lg focus:ring-brand-teal focus:border-brand-teal"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-brand-glow">
                                            {t('contact.form.submit')}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            </AnimatedSection>
                            
                            {/* Info */}
                            <AnimatedSection className="lg:col-span-2">
                            <div className="space-y-8">
                                {infoBoxes.map((box: any) => (
                                    <InfoBox
                                        key={box.title}
                                        title={box.title}
                                        description={box.description}
                                        email={box.email}
                                    />
                                ))}
                            </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

const FormInput: React.FC<{ label: string; name: string; type: string }> = ({ label, name, type }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type={type} id={name} name={name} required className="w-full px-4 py-3 bg-brand-light-bg border border-gray-300 rounded-lg focus:ring-brand-teal focus:border-brand-teal" />
    </div>
);

const InfoBox: React.FC<{title: string; description: string; email: string}> = ({title, description, email}) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-teal">
      <h3 className="text-xl font-bold text-brand-blue-dark">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href={`mailto:${email}`} className="text-brand-teal font-semibold text-lg hover:underline mt-2 inline-block">{email}</a>
  </div>
);

export default ContactPage;