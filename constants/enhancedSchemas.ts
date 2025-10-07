// Erweiterte Schema.org Definitionen für besseres SEO

export const enhancedSchemas = {
  // LocalBusiness Schema (wichtig für lokale Suche DACH)
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.thepoweraddicts.com/#localbusiness",
    "name": "ThePowerAddicts",
    "description": "Power Platform Schulungen und Beratung von Microsoft MVPs im DACH-Raum",
    "image": "https://www.thepoweraddicts.com/logo.png",
    "url": "https://www.thepoweraddicts.com",
    "telephone": "+41-44-123-4567", // TODO: Echte Telefonnummer einfügen
    "email": "info@thepoweraddicts.com",
    "priceRange": "CHF 1500 - CHF 3500",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Im Feldacher 16",
      "addressLocality": "Fehraltorf",
      "postalCode": "8320",
      "addressRegion": "ZH",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.3769", // TODO: Exakte Koordinaten prüfen
      "longitude": "8.7550"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Schweiz"
      },
      {
        "@type": "Country",
        "name": "Deutschland"
      },
      {
        "@type": "Country",
        "name": "Österreich"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/100255788/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  },

  // ProfessionalService Schema
  professionalService: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.thepoweraddicts.com/#service",
    "name": "Power Platform Schulungen & Beratung",
    "description": "Intensive 4-Wochen Power Platform Workshops und unabhängige MVP-Beratung für Unternehmen im DACH-Raum",
    "provider": {
      "@type": "Organization",
      "name": "ThePowerAddicts",
      "sameAs": "https://www.thepoweraddicts.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": ["CH", "DE", "AT"]
    },
    "serviceType": "IT Training & Consulting",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Power Platform Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Platform Admin Workshop",
            "description": "4-Wochen Intensiv-Workshop zum zertifizierten Power Platform Administrator"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Automate Profi Workshop",
            "description": "4-Wochen Workshop für fortgeschrittene Power Automate Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Apps Profi Workshop",
            "description": "4-Wochen Workshop für professionelle Power Apps Entwicklung"
          }
        }
      ]
    }
  },

  // Breadcrumb Schema (für jede Seite individuell)
  breadcrumbWorkshops: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.thepoweraddicts.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Workshops",
        "item": "https://www.thepoweraddicts.com/#/workshops"
      }
    ]
  },

  // FAQ Schema (beispiel für Workshop-Seite)
  faqPowerPlatformAdmin: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie lange dauert der Power Platform Admin Workshop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Workshop dauert 4 Wochen mit 3 Live-Sessions pro Woche à 90 Minuten. Inklusive Selbststudium beträgt der Zeitaufwand ca. 8-10 Stunden pro Woche."
        }
      },
      {
        "@type": "Question",
        "name": "Benötige ich Vorkenntnisse für den Power Platform Admin Workshop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grundlegende IT-Kenntnisse und Microsoft 365 Erfahrung werden empfohlen. Programmierkenntnisse sind nicht erforderlich."
        }
      },
      {
        "@type": "Question",
        "name": "Ist der Workshop remote oder vor Ort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Workshop findet 100% remote statt, sodass Sie von überall in der DACH-Region teilnehmen können. Alle Sessions werden aufgezeichnet."
        }
      },
      {
        "@type": "Question",
        "name": "Erhalte ich ein Zertifikat nach Abschluss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Sie erhalten nach erfolgreichem Abschluss ein anerkanntes Zertifikat von ThePowerAddicts, unterzeichnet von Microsoft MVPs."
        }
      }
    ]
  },

  // Review/Rating Schema (wenn Sie Testimonials haben)
  reviewExample: {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": "Power Platform Admin Workshop"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Max Mustermann"
    },
    "reviewBody": "Hervorragender Workshop! In 4 Wochen vom Anfänger zum zertifizierten Admin. Die MVPs vermitteln praxisnahes Wissen, das man sofort anwenden kann."
  }
};

// Helper für dynamische Breadcrumbs
export function generateBreadcrumb(path: string): object {
  const pathParts = path.split('/').filter(Boolean);
  
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.thepoweraddicts.com/"
      }
    ]
  };

  pathParts.forEach((part, index) => {
    const name = part.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    breadcrumbList.itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": `https://www.thepoweraddicts.com/#/${pathParts.slice(0, index + 1).join('/')}`
    });
  });

  return breadcrumbList;
}
