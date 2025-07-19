// SEO and AI Search Engine Optimization utilities

/**
 * Generate structured data for better SEO and AI search engine understanding
 */
export const generateStructuredData = (type: 'website' | 'service' | 'portfolio' | 'contact', data: any) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type === 'website' ? 'Organization' : 'Service',
    "name": "Cactus Media Group",
    "url": "https://cactusmediajo.com",
    "logo": "https://cactusmediajo.com/assets/Logo.png",
    "description": "Premium digital solutions engineered for resilience and growth. We craft exceptional digital experiences that combine beauty with functionality.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JO",
      "addressLocality": "Amman"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+962-XX-XXX-XXXX",
      "contactType": "customer service",
      "email": "info@cactusmediajo.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/cactus-media-group",
      "https://www.instagram.com/cactusmediagroup",
      "https://www.facebook.com/cactusmediagroup"
    ]
  };

  switch (type) {
    case 'service':
      return {
        ...baseStructuredData,
        "@type": "Service",
        "serviceType": data.title,
        "description": data.description,
        "provider": {
          "@type": "Organization",
          "name": "Cactus Media Group"
        }
      };
    
    case 'portfolio':
      return {
        ...baseStructuredData,
        "@type": "CreativeWork",
        "name": data.title,
        "description": data.description,
        "creator": {
          "@type": "Organization",
          "name": "Cactus Media Group"
        }
      };
    
    default:
      return baseStructuredData;
  }
};

/**
 * Optimize meta tags for AI search engines and chatbots
 */
export const generateAIOptimizedMeta = (language: 'en' | 'ar', pageData: {
  title: string;
  description: string;
  keywords: string[];
  type: string;
}) => {
  const aiOptimizedDescription = language === 'ar' 
    ? `${pageData.description} | مجموعة كاكتوس الإعلامية - خبراء في ${pageData.keywords.slice(0, 3).join('، ')}. نقدم حلولاً رقمية مبتكرة ومتطورة.`
    : `${pageData.description} | Cactus Media Group - Experts in ${pageData.keywords.slice(0, 3).join(', ')}. We deliver innovative and cutting-edge digital solutions.`;

  return {
    title: pageData.title,
    description: aiOptimizedDescription,
    keywords: pageData.keywords.join(', '),
    'og:title': pageData.title,
    'og:description': aiOptimizedDescription,
    'og:type': pageData.type,
    'twitter:card': 'summary_large_image',
    'twitter:title': pageData.title,
    'twitter:description': aiOptimizedDescription,
    // AI-specific meta tags
    'ai:content-type': pageData.type,
    'ai:language': language,
    'ai:expertise': pageData.keywords.join(', '),
    'ai:company': 'Cactus Media Group',
    'ai:industry': 'Digital Marketing, Web Development, Design',
    'ai:location': 'Amman, Jordan'
  };
};

/**
 * Generate FAQ structured data for better AI understanding
 */
export const generateFAQStructuredData = (language: 'en' | 'ar') => {
  const faqData = language === 'ar' ? [
    {
      question: "ما هي خدمات مجموعة كاكتوس الإعلامية؟",
      answer: "نقدم خدمات شاملة تشمل تطوير المواقع، التصميم والهوية البصرية، التسويق الرقمي، إنشاء المحتوى، والتصوير الاحترافي."
    },
    {
      question: "كم تستغرق مدة تطوير الموقع؟",
      answer: "تختلف مدة التطوير حسب تعقيد المشروع، لكن معظم المواقع تستغرق من 2-8 أسابيع للإكمال."
    },
    {
      question: "هل تقدمون خدمات الصيانة والدعم؟",
      answer: "نعم، نقدم خدمات صيانة ودعم شاملة لضمان استمرار عمل موقعك بأفضل أداء."
    }
  ] : [
    {
      question: "What services does Cactus Media Group offer?",
      answer: "We offer comprehensive services including web development, branding & design, digital marketing, content creation, and professional photography."
    },
    {
      question: "How long does website development take?",
      answer: "Development time varies based on project complexity, but most websites take 2-8 weeks to complete."
    },
    {
      question: "Do you provide maintenance and support services?",
      answer: "Yes, we provide comprehensive maintenance and support services to ensure your website continues to perform at its best."
    }
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Inject structured data into page head
 */
export const injectStructuredData = (structuredData: any) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

/**
 * Generate sitemap data for better crawling
 */
export const generateSitemapData = () => {
  const baseUrl = 'https://cactusmediajo.com';
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/portfolio', priority: 0.8, changefreq: 'weekly' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly' },
    { url: '/services/web-development', priority: 0.8, changefreq: 'monthly' },
    { url: '/services/branding', priority: 0.8, changefreq: 'monthly' },
    { url: '/services/digital-marketing', priority: 0.8, changefreq: 'monthly' },
    { url: '/services/content-creation', priority: 0.8, changefreq: 'monthly' },
    { url: '/services/photography', priority: 0.8, changefreq: 'monthly' }
  ];

  return pages.map(page => ({
    ...page,
    url: `${baseUrl}${page.url}`,
    lastmod: new Date().toISOString()
  }));
};