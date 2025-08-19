import { useEffect } from 'react';

interface MetaData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
}

export const useMeta = (metaData: MetaData) => {
  useEffect(() => {
    const defaultMeta = {
      title: 'Guide Kiween - Plateforme de gestion d\'entreprise',
      description: 'Guides et tutoriels pour utiliser efficacement la plateforme Kiween de gestion d\'entreprise.',
      keywords: 'kiween, guide, tutoriel, gestion entreprise, business',
      image: '/placeholder.svg',
      url: window.location.href,
      type: 'website',
      siteName: 'Guide Kiween',
      locale: 'fr_FR'
    };

    const meta = { ...defaultMeta, ...metaData };

    // Update document title
    if (meta.title) {
      document.title = meta.title;
    }

    // Helper function to update or create meta tag
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Update standard meta tags
    if (meta.description) {
      updateMetaTag('description', meta.description);
    }
    if (meta.keywords) {
      updateMetaTag('keywords', meta.keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', meta.title || defaultMeta.title, true);
    updateMetaTag('og:description', meta.description || defaultMeta.description, true);
    updateMetaTag('og:image', meta.image || defaultMeta.image, true);
    updateMetaTag('og:url', meta.url || defaultMeta.url, true);
    updateMetaTag('og:type', meta.type || defaultMeta.type, true);
    updateMetaTag('og:site_name', meta.siteName || defaultMeta.siteName, true);
    updateMetaTag('og:locale', meta.locale || defaultMeta.locale, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', meta.title || defaultMeta.title);
    updateMetaTag('twitter:description', meta.description || defaultMeta.description);
    updateMetaTag('twitter:image', meta.image || defaultMeta.image);

    // Update canonical link
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalElement) {
      canonicalElement.href = meta.url || defaultMeta.url;
    } else {
      canonicalElement = document.createElement('link');
      canonicalElement.rel = 'canonical';
      canonicalElement.href = meta.url || defaultMeta.url;
      document.head.appendChild(canonicalElement);
    }

  }, [metaData]);
};