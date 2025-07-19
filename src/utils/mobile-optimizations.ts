// Mobile-specific optimizations for better performance

/**
 * Optimize touch interactions for mobile devices
 */
export const optimizeTouchInteractions = () => {
  // Add touch-action CSS for better scroll performance
  const style = document.createElement('style');
  style.textContent = `
    /* Mobile touch optimizations */
    * {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
    }
    
    .touch-pan-x {
      touch-action: pan-x;
    }
    
    .touch-pan-y {
      touch-action: pan-y;
    }
    
    .touch-manipulation {
      touch-action: manipulation;
    }
    
    /* Smooth scrolling for mobile */
    html {
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
    }
    
    /* Optimize animations for mobile */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
    
    /* Mobile viewport optimizations */
    @media screen and (max-width: 768px) {
      .snap-x {
        scroll-snap-type: x mandatory;
      }
      
      .snap-start {
        scroll-snap-align: start;
      }
      
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    }
  `;
  document.head.appendChild(style);
};

/**
 * Optimize images for mobile devices
 */
export const optimizeImagesForMobile = () => {
  // Add intersection observer for lazy loading
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px'
  });

  // Observe all images with data-src
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
};

/**
 * Optimize video loading for mobile
 */
export const optimizeVideoForMobile = () => {
  const videos = document.querySelectorAll('video');
  
  videos.forEach((video) => {
    // Reduce quality on mobile connections
    if (navigator.connection && (navigator.connection as any).effectiveType) {
      const connectionType = (navigator.connection as any).effectiveType;
      
      if (connectionType === 'slow-2g' || connectionType === '2g') {
        video.style.display = 'none';
      } else if (connectionType === '3g') {
        video.setAttribute('preload', 'metadata');
      }
    }
    
    // Pause video when not in viewport
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Auto-play failed, which is expected on mobile
          });
        } else {
          video.pause();
        }
      });
    }, {
      threshold: 0.5
    });
    
    videoObserver.observe(video);
  });
};

/**
 * Optimize fonts for mobile devices
 */
export const optimizeFontsForMobile = () => {
  // Use font-display: swap for better performance
  const fontFaces = [
    {
      family: 'Barlow',
      url: 'https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap'
    },
    {
      family: 'Tajawal',
      url: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap'
    }
  ];

  fontFaces.forEach(({ family, url }) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    
    // Add fallback for font loading
    link.onerror = () => {
      console.warn(`Failed to load font: ${family}`);
    };
    
    document.head.appendChild(link);
  });
};

/**
 * Reduce animations on low-end devices
 */
export const optimizeAnimationsForMobile = () => {
  // Detect low-end devices
  const isLowEndDevice = () => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    
    // Check device memory (if available)
    if ('deviceMemory' in navigator && (navigator as any).deviceMemory < 4) {
      return true;
    }
    
    // Check hardware concurrency
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      return true;
    }
    
    return false;
  };

  if (isLowEndDevice()) {
    const style = document.createElement('style');
    style.textContent = `
      /* Reduce animations for low-end devices */
      *, *::before, *::after {
        animation-duration: 0.1s !important;
        transition-duration: 0.1s !important;
      }
      
      .motion-reduce {
        animation: none !important;
        transition: none !important;
      }
    `;
    document.head.appendChild(style);
    
    // Add class to body for conditional styling
    document.body.classList.add('motion-reduce');
  }
};

/**
 * Initialize all mobile optimizations
 */
export const initializeMobileOptimizations = () => {
  // Check if running on mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    optimizeTouchInteractions();
    optimizeImagesForMobile();
    optimizeVideoForMobile();
    optimizeFontsForMobile();
    optimizeAnimationsForMobile();
    
    // Add mobile class to body
    document.body.classList.add('mobile-device');
  }
  
  // Always optimize for touch devices
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
  }
};