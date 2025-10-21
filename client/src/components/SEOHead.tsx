import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEOHead({
  title = "NR Solutions Admin - Assistante Administrative et Financière à Biarritz",
  description = "Roxane, assistante administrative et financière indépendante à Biarritz. Accompagnement des TPE et artisans du Pays Basque et Sud Landes. Gestion administrative, comptabilité, RH.",
  keywords = "assistante administrative Biarritz, gestion financière Pays Basque, comptabilité TPE, assistante indépendante Arbonne, gestion administrative Sud Landes, aide administrative artisans, secrétariat externalisé Biarritz",
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

