import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEOHead({
  title = "Assistante Administrative Indépendante à Arbonne – Services Externalisés pour Biarritz, Bayonne & Côte Basque",
  description = "Assistante administrative indépendante à Arbonne, Biarritz et Pays Basque. Services administratifs externalisés, renfort d'équipe et support comptable pour TPE, PME et artisans. Intervention en solo ou en complément de votre équipe existante.",
  keywords = "assistante administrative indépendante Arbonne, assistante freelance Biarritz, renfort administratif, support équipe comptable, complément service administratif, renfort équipe existante, services administratifs Bayonne, gestion administrative Côte Basque, aide administrative Pays Basque, secrétariat indépendant Anglet, assistante PME, assistante artisan, externalisation administrative, assistante administrative Bidart, assistante administrative Guéthary, assistante administrative Saint-Jean-de-Luz, gestion administrative externalisée, télésecrétariat professionnel Biarritz",
  ogImage = "/banner.png"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Roxane - NR Solutions Admin');
    updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:locale', 'fr_FR', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Geo tags for local SEO
    updateMetaTag('geo.region', 'FR-64');
    updateMetaTag('geo.placename', 'Arbonne');
    updateMetaTag('geo.position', '43.4297;-1.5594');
    updateMetaTag('ICBM', '43.4297, -1.5594');

  }, [title, description, keywords, ogImage]);

  return null;
}

