import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "NR Solutions Admin",
      "image": "https://nr-solutions-admin.fr/logo-gold.png",
      "description": "Assistante administrative et financière indépendante à Biarritz. Accompagnement des TPE et artisans du Pays Basque et Sud Landes en gestion administrative, comptabilité et RH.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Arbonne",
        "addressLocality": "Arbonne",
        "postalCode": "64210",
        "addressCountry": "FR",
        "addressRegion": "Nouvelle-Aquitaine"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.4297,
        "longitude": -1.5594
      },
      "url": "https://nr-solutions-admin.fr",
      "telephone": "+33650974076",
      "email": "nr.solutionsadm@gmail.com",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 43.4297,
          "longitude": -1.5594
        },
        "geoRadius": "25000"
      },
      "founder": {
        "@type": "Person",
        "name": "Roxane",
        "jobTitle": "Assistante Administrative et Financière",
        "description": "Expérience en comptabilité dans le secteur automobile et moto, et 2 ans en cabinet comptable avec gestion de 30 entreprises tous secteurs."
      },
      "serviceType": [
        "Gestion Administrative",
        "Gestion Financière",
        "Comptabilité",
        "Gestion RH",
        "Communication",
        "Organisation"
      ],
      "knowsAbout": [
        "Comptabilité TPE",
        "Gestion administrative",
        "Gestion financière",
        "Secrétariat",
        "Ressources humaines"
      ]
    };

    // Remove existing structured data script if any
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}

