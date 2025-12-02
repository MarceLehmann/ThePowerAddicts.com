import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface StickyMobileCTAProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gold';
  show?: boolean;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ 
  text, 
  href, 
  onClick, 
  variant = 'primary',
  show = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px down
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white',
    secondary: 'bg-gradient-to-r from-brand-blue-dark to-brand-purple text-white',
    gold: 'bg-gradient-to-r from-brand-gold to-yellow-500 text-white'
  };

  if (!show || !isVisible) return null;

  const buttonContent = (
    <button
      onClick={onClick}
      className={`w-full font-bold py-4 px-6 rounded-t-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 ${variantClasses[variant]}`}
    >
      {text}
    </button>
  );

  const linkContent = href ? (
    <Link 
      to={href}
      className={`block w-full font-bold py-4 px-6 rounded-t-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 ${variantClasses[variant]} text-center`}
    >
      {text}
    </Link>
  ) : null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-slide-up"
      style={{ 
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      {href ? linkContent : buttonContent}
    </div>
  );
};

export default StickyMobileCTA;
