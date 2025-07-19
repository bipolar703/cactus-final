import { useState, useEffect, useRef } from 'react';

// Advanced caching utilities for 2025 performance optimization

class CacheManager {
  private static instance: CacheManager;
  private cache = new Map<string, any>();
  private timestamps = new Map<string, number>();
  private readonly TTL = 300000; // 5 minutes

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  set(key: string, value: any, customTTL?: number): void {
    this.cache.set(key, value);
    this.timestamps.set(key, Date.now() + (customTTL || this.TTL));
  }

  get(key: string): any | null {
    const timestamp = this.timestamps.get(key);
    if (!timestamp || Date.now() > timestamp) {
      this.cache.delete(key);
      this.timestamps.delete(key);
      return null;
    }
    return this.cache.get(key);
  }

  clear(): void {
    this.cache.clear();
    this.timestamps.clear();
  }

  // Preload critical resources
  preloadAssets(urls: string[]): Promise<void[]> {
    return Promise.all(
      urls.map((url) => {
        return new Promise<void>((resolve, reject) => {
          if (this.get(url)) {
            resolve();
            return;
          }

          const link = document.createElement('link');
          link.rel = 'preload';
          // Only use valid 'as' values
          if (url.match(/\.(jpg|jpeg|png|webp|avif|svg)$/)) {
            link.as = 'image';
          } else if (url.endsWith('.css')) {
            link.as = 'style';
          } else if (url.endsWith('.js')) {
            link.as = 'script';
          } else if (url.endsWith('.woff2') || url.endsWith('.woff') || url.endsWith('.ttf') || url.endsWith('.eot')) {
            link.as = 'font';
            link.crossOrigin = 'anonymous';
          } else if (url.endsWith('.mp3') || url.endsWith('.wav') || url.endsWith('.ogg')) {
            link.as = 'audio';
          } else if (url.endsWith('.html')) {
            link.as = 'document';
          } else {
            // Fallback to fetch for unknown/unsupported types
            link.as = 'fetch';
            // Using fetch fallback for unsupported preload type
          }
          link.href = url;
          link.onload = () => {
            this.set(url, true, 600000); // 10 minutes for preloaded assets
            resolve();
          };
          link.onerror = reject;
          document.head.appendChild(link);
        });
      }),
    );
  }

  // Service Worker-like caching for video chunks
  async cacheVideoChunks(videoUrl: string): Promise<void> {
    if ('caches' in window) {
      try {
        const cache = await caches.open('video-cache-v1');
        await cache.add(videoUrl);
        this.set(`video-${videoUrl}`, true);
      } catch (error) {
        // Video caching not available
      }
    }
  }
}

export const cacheManager = CacheManager.getInstance();

// Resource preloading hook
export function useResourcePreload(resources: string[]) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    cacheManager
      .preloadAssets(resources)
      .then(() => {
        if (mounted) setIsLoaded(true);
      })
      .catch(() => {
        // Resource preloading failed, continuing without cache
      });

    return () => {
      mounted = false;
    };
  }, [resources]);

  return isLoaded;
}

// Intersection observer with caching
export function useOptimizedIntersection(threshold = 0.1, rootMargin = '50px') {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          setHasIntersected(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
}
