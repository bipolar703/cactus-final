import { memo, ReactNode, useEffect, useMemo, useState } from "react";
import { cacheManager } from "../utils/cache-manager";

interface PerformanceWrapperProps {
  children: ReactNode;
  className?: string;
  useGPU?: boolean;
}

// Memoized wrapper for performance optimization
export const PerformanceWrapper = memo(
  ({ children, className = "", useGPU = true }: PerformanceWrapperProps) => {
    const optimizedClassName = useMemo(() => {
      return `${className} ${useGPU ? "gpu-accelerated" : ""}`.trim();
    }, [className, useGPU]);

    return <div className={optimizedClassName}>{children}</div>;
  },
);

PerformanceWrapper.displayName = "PerformanceWrapper";

// Optimized image component with lazy loading
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

export const OptimizedImage = memo(
  ({
    src,
    alt,
    className = "",
    loading = "lazy",
    priority = false,
  }: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      if (priority) {
        cacheManager.preloadAssets([src]).catch(() => setError(true));
      }
    }, [src, priority]);

    return (
      <img
        src={src}
        alt={alt}
        className={`${className} gpu-accelerated transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading={priority ? "eager" : loading}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "1px 400px",
        }}
      />
    );
  },
);

OptimizedImage.displayName = "OptimizedImage";
