import { useEffect, useCallback, useRef } from 'react';
import { debounce, throttle } from '../utils/performance';

/**
 * Hook for performance-optimized scroll handling
 */
export const useOptimizedScroll = (callback: () => void, delay = 16) => {
  const throttledCallback = useCallback(throttle(callback, delay), [callback, delay]);

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback, { passive: true });
    return () => window.removeEventListener('scroll', throttledCallback);
  }, [throttledCallback]);
};

/**
 * Hook for performance-optimized resize handling
 */
export const useOptimizedResize = (callback: () => void, delay = 250) => {
  const debouncedCallback = useCallback(debounce(callback, delay), [callback, delay]);

  useEffect(() => {
    window.addEventListener('resize', debouncedCallback, { passive: true });
    return () => window.removeEventListener('resize', debouncedCallback);
  }, [debouncedCallback]);
};

/**
 * Hook for intersection observer with performance optimizations
 */
export const usePerformantIntersection = (
  options?: IntersectionObserverInit
) => {
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback((callback: IntersectionObserverCallback) => {
    if (!ref.current) return;

    const defaultOptions: IntersectionObserverInit = {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    };

    observerRef.current = new IntersectionObserver(callback, defaultOptions);
    observerRef.current.observe(ref.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { ref, observe };
};

/**
 * Hook for preloading critical resources
 */
export const usePreloadResources = (resources: string[]) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      
      if (resource.endsWith('.mp4')) {
        link.as = 'video';
        link.type = 'video/mp4';
      } else if (resource.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
        link.as = 'image';
      } else if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (resource.endsWith('.js')) {
        link.as = 'script';
      }
      
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [resources]);
};

/**
 * Hook for monitoring Core Web Vitals
 */
export const useWebVitals = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry && import.meta.env.DEV) {
        console.log('LCP:', lastEntry.startTime);
      }
    });

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (import.meta.env.DEV) {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      });
    });

    // Monitor Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      if (import.meta.env.DEV && clsValue > 0) {
        console.log('CLS:', clsValue);
      }
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance observer not supported:', error);
    }

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);
};