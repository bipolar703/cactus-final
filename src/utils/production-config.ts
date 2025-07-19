// Production configuration and environment setup

export const PRODUCTION_CONFIG = {
  // API Configuration
  API_BASE_URL: import.meta.env.PROD ? 'https://cactusmediagroup.com' : 'http://localhost:5173',
  
  // Performance Settings
  CACHE_DURATION: {
    STATIC_ASSETS: 31536000, // 1 year
    API_RESPONSES: 300, // 5 minutes
    IMAGES: 86400, // 1 day
  },
  
  // Feature Flags
  FEATURES: {
    ANALYTICS: import.meta.env.PROD,
    SERVICE_WORKER: import.meta.env.PROD,
    ERROR_REPORTING: import.meta.env.PROD,
    PERFORMANCE_MONITORING: true,
  },
  
  // SEO Configuration
  SEO: {
    SITE_NAME: 'Cactus Media Group',
    SITE_URL: 'https://cactusmediagroup.com',
    DEFAULT_IMAGE: '/assets/Webpage-Banner.png',
    TWITTER_HANDLE: '@cactusmediajo',
  },
  
  // Social Media Links
  SOCIAL_LINKS: {
    FACEBOOK: 'https://facebook.com/cactusmediajo',
    INSTAGRAM: 'https://instagram.com/cactusmediajo',
    LINKEDIN: 'https://www.linkedin.com/company/cactusmediajo',
  },
  
  // Contact Information
  CONTACT: {
    EMAIL: 'info@cactusmediagroup.com',
    PHONE: '+962 6 123 4567',
    ADDRESS: 'Amman, Jordan',
  },
  
  // Performance Thresholds
  PERFORMANCE: {
    LCP_THRESHOLD: 2500, // Largest Contentful Paint
    FID_THRESHOLD: 100,  // First Input Delay
    CLS_THRESHOLD: 0.1,  // Cumulative Layout Shift
  },
};

/**
 * Get environment-specific configuration
 */
export const getConfig = () => {
  return {
    ...PRODUCTION_CONFIG,
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
    version: import.meta.env.VITE_APP_VERSION || '2.0.0',
  };
};

/**
 * Initialize production environment
 */
export const initializeProductionEnvironment = () => {
  const config = getConfig();
  
  if (config.isProduction) {
    // Remove console logs in production
    console.log = () => {};
    console.warn = () => {};
    console.info = () => {};
    
    // Keep error logging
    const originalError = console.error;
    console.error = (...args) => {
      // Log to external service in production
      originalError(...args);
    };
    
    // Set up global error handling
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
    });
    
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    });
  }
  
  return config;
};

/**
 * Performance monitoring utilities
 */
export const performanceMonitor = {
  // Mark performance milestones
  mark: (name: string) => {
    if ('performance' in window && performance.mark) {
      performance.mark(name);
    }
  },
  
  // Measure performance between marks
  measure: (name: string, startMark: string, endMark?: string) => {
    if ('performance' in window && performance.measure) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name)[0];
        return measure.duration;
      } catch (error) {
        console.warn('Performance measurement failed:', error);
        return 0;
      }
    }
    return 0;
  },
  
  // Get navigation timing
  getNavigationTiming: () => {
    if ('performance' in window && performance.getEntriesByType) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstByte: navigation.responseStart - navigation.requestStart,
      };
    }
    return null;
  },
};

/**
 * Resource hints for better performance
 */
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) {
      link.crossOrigin = hint.crossorigin;
    }
    document.head.appendChild(link);
  });
};