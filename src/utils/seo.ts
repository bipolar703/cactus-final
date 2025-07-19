// SEO optimization utilities

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  language?: 'en' | 'ar';
}

/**
 * Update document head with SEO metadata
 */
export const updateSEO = (data: SEOData) => {
  // Update title
  document.title = data.title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  };

  // Basic meta tags
  updateMetaTag('description', data.description);
  if (data.keywords) {
    updateMetaTag('keywords', data.keywords);
  }

  // Open Graph tags
  updateMetaTag('og:title', data.title, true);
  updateMetaTag('og:description', data.description, true);
  updateMetaTag('og:type', 'website', true);
  
  if (data.ogImage) {
    updateMetaTag('og:image', data.ogImage, true);
  }
  
  if (data.ogUrl) {
    updateMetaTag('og:url', data.ogUrl, true);
  }

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', data.title);
  updateMetaTag('twitter:description', data.description);
  
  if (data.ogImage) {
    updateMetaTag('twitter:image', data.ogImage);
  }

  // Language and canonical
  if (data.language) {
    document.documentElement.lang = data.language;
    document.documentElement.dir = data.language === 'ar' ? 'rtl' : 'ltr';
  }

  if (data.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = data.canonical;
  }
};

/**
 * Default SEO data for the website
 */
export const defaultSEO: SEOData = {
  title: 'Cactus Media Group - Premium Digital Solutions',
  description: 'In a world full of flowers, be a cactus! Premium digital solutions including web development, branding, digital marketing, and comprehensive business growth strategies.',
  keywords: 'web development, digital marketing, branding, design, Jordan, Saudi Arabia, premium digital solutions, cactus media group',
  ogImage: '/assets/Webpage-Banner.png',
  ogUrl: 'https://cactusmediagroup.com',
  canonical: 'https://cactusmediagroup.com',
  language: 'en'
};

/**
 * SEO data for Arabic version
 */
export const arabicSEO: SEOData = {
  title: 'مجموعة كاكتوس الإعلامية - حلول رقمية متميزة',
  description: 'في عالم مليء بالورود، كن صبارة! حلول رقمية متميزة تشمل تطوير المواقع، العلامة التجارية، التسويق الرقمي، واستراتيجيات النمو الشاملة للأعمال.',
  keywords: 'تطوير المواقع, التسويق الرقمي, العلامة التجارية, التصميم, الأردن, السعودية, حلول رقمية متميزة, مجموعة كاكتوس الإعلامية',
  ogImage: '/assets/Webpage-Banner.png',
  ogUrl: 'https://cactusmediagroup.com',
  canonical: 'https://cactusmediagroup.com',
  language: 'ar'
};

/**
 * Generate structured data for the website
 */
export const generateStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cactus Media Group",
    "alternateName": "مجموعة كاكتوس الإعلامية",
    "url": "https://cactusmediagroup.com",
    "logo": "https://cactusmediagroup.com/assets/Logo.png",
    "description": "Premium digital solutions company specializing in web development, branding, and digital marketing",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JO",
      "addressRegion": "Amman"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@cactusmediagroup.com"
    },
    "sameAs": [
      "https://facebook.com/cactusmediajo",
      "https://instagram.com/cactusmediajo",
      "https://www.linkedin.com/company/cactusmediajo"
    ],
    "services": [
      "Web Development",
      "Digital Marketing",
      "Branding & Design",
      "Social Media Management",
      "SEO Services",
      "Content Creation"
    ]
  };

  // Add or update structured data script
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(structuredData);
};