import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface EnhancedMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const EnhancedMeta: React.FC<EnhancedMetaProps> = ({ 
  title, 
  description, 
  keywords,
  ogImage = 'https://www.thepoweraddicts.com/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  noindex = false
}) => {
  const location = useLocation();
  // HashRouter erzeugt URLs wie https://domain/#/pfad – das berücksichtigen
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  const base = 'https://www.thepoweraddicts.com';
  const currentUrl = `${base}${hash || location.pathname}`;
  const canonical = canonicalUrl || currentUrl;

  useEffect(() => {
    // Document Title
    document.title = title;
    
    // Meta Description
    updateMetaTag('name', 'description', description);
    
    // Keywords (optional, weniger wichtig für moderne SEO)
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }
    
    // Robots
    updateMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // Open Graph
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:site_name', 'ThePowerAddicts');
    updateMetaTag('property', 'og:locale', 'de_DE');
    updateMetaTag('property', 'og:locale:alternate', 'de_CH');
    updateMetaTag('property', 'og:locale:alternate', 'de_AT');
    
    // Twitter Cards
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);
    updateMetaTag('name', 'twitter:site', '@ThePowerAddicts');
    
    // Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);
    
  }, [title, description, keywords, ogImage, ogType, currentUrl, canonical, noindex]);

  return null;
};

// Helper function to update or create meta tags
function updateMetaTag(attribute: string, attributeValue: string, content: string) {
  let tag = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, attributeValue);
    document.head.appendChild(tag);
  }
  
  tag.setAttribute('content', content);
}

export default EnhancedMeta;
