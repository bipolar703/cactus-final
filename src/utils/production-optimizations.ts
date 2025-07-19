// Production-specific optimizations and error handling

/**
 * Initialize production optimizations
 */
export const initializeProductionOptimizations = () => {
  if (import.meta.env.PROD) {
    // Disable console logs in production
    const originalLog = console.log;
    const originalWarn = console.warn;
    
    console.log = () => {};
    console.warn = () => {};
    
    // Keep error logging for debugging
    const originalError = console.error;
    console.error = (...args) => {
      // Only log critical errors
      originalError(...args);
    };
    
    // Global error handling
    window.addEventListener('error', (event) => {
      // Log critical errors only
      if (event.error && event.error.stack) {
        originalError('Critical error:', event.error.message);
      }
    });
    
    window.addEventListener('unhandledrejection', (event) => {
      originalError('Unhandled promise rejection:', event.reason);
    });
  }
};

/**
 * Performance monitoring for production
 */
export const initializePerformanceMonitoring = () => {
  if (import.meta.env.PROD && 'performance' in window) {
    // Monitor Core Web Vitals
    try {
      // LCP (Largest Contentful Paint)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        // Track LCP silently
      }).observe({ entryTypes: ['largest-contentful-paint'] });
      
      // FID (First Input Delay)
      new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Track FID silently
        });
      }).observe({ entryTypes: ['first-input'] });
      
      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });
      
    } catch (error) {
      // Performance monitoring not supported
    }
  }
};

/**
 * Resource optimization for production
 */
export const optimizeResources = () => {
  if (import.meta.env.PROD) {
    // Preload critical resources
    const criticalResources = [
      '/assets/Icon.png',
      '/assets/Logo.png'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = resource;
      document.head.appendChild(link);
    });
    
    // Enable resource hints
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];
    
    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      if (domain.includes('gstatic')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }
};

/**
 * Initialize all production optimizations
 */
export const initializeAllProductionOptimizations = () => {
  initializeProductionOptimizations();
  initializePerformanceMonitoring();
  optimizeResources();
};