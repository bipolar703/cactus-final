// Performance optimization utilities for Vercel deployment

/**
 * Preload critical resources for better performance
 */
export const preloadCriticalResources = () => {
  // Preload hero video
  const videoLink = document.createElement('link');
  videoLink.rel = 'preload';
  videoLink.as = 'video';
  videoLink.href = '/hero.mp4';
  videoLink.type = 'video/mp4';
  document.head.appendChild(videoLink);

  // Preload critical fonts
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap'
  ];

  fontLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
    
    // Also add the actual stylesheet
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = href;
    document.head.appendChild(styleLink);
  });
};

/**
 * Optimize images with lazy loading and WebP support
 */
export const optimizeImage = (src: string, alt: string, className?: string) => {
  const img = new Image();
  
  // Check WebP support
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  })();

  // Use WebP if supported and available
  if (supportsWebP && src.includes('.png')) {
    img.src = src.replace('.png', '.webp');
  } else if (supportsWebP && src.includes('.jpg')) {
    img.src = src.replace('.jpg', '.webp');
  } else {
    img.src = src;
  }

  img.alt = alt;
  img.loading = 'lazy';
  img.decoding = 'async';
  
  if (className) {
    img.className = className;
  }

  return img;
};

/**
 * Intersection Observer for performance-optimized animations
 */
export const createPerformantObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for scroll events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Prefetch route for better navigation performance
 */
export const prefetchRoute = (route: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

/**
 * Critical CSS inlining for above-the-fold content
 */
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    /* Critical CSS for above-the-fold content */
    body { margin: 0; font-family: 'Barlow', sans-serif; }
    .hero-section { min-height: 100vh; position: relative; }
    .loading-screen { position: fixed; inset: 0; z-index: 9999; }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};