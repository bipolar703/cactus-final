import { useCallback, useEffect, useRef, useState } from "react";
import { usePerformantIntersection } from "@/hooks/use-performance";

type IntersectionCallback = (entries: IntersectionObserverEntry[]) => void;

/**
 * A hook that provides optimized intersection observation with caching
 * to prevent unnecessary re-renders and improve performance.
 */
export const useOptimizedIntersection = (
  options?: IntersectionObserverInit,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { ref, observe } = usePerformantIntersection({
    threshold: 0.1,
    rootMargin: "0px",
    ...options,
  });

  // Memoize the callback to prevent unnecessary re-renders
  const handleIntersection = useCallback<IntersectionCallback>((entries) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  }, []);

  // Set up the intersection observer
  useEffect(() => {
    const disconnect = observe(handleIntersection);
    return () => {
      if (disconnect) disconnect();
    };
  }, [observe, handleIntersection]);

  return {
    ref,
    isIntersecting,
  };
};

/**
 * Simple in-memory cache implementation
 */
class SimpleCache<T> {
  private cache: Record<string, { data: T; timestamp: number }> = {};
  private defaultTTL: number;

  constructor(defaultTTL: number = 5 * 60 * 1000) {
    this.defaultTTL = defaultTTL;
  }

  set(key: string, data: T, ttl: number = this.defaultTTL) {
    this.cache[key] = {
      data,
      timestamp: Date.now() + ttl,
    };
  }

  get(key: string): T | null {
    const item = this.cache[key];
    if (!item) return null;

    if (Date.now() > item.timestamp) {
      delete this.cache[key];
      return null;
    }

    return item.data;
  }

  delete(key: string) {
    delete this.cache[key];
  }

  clear() {
    this.cache = {};
  }
}

export const cache = new SimpleCache();
