// Vercel-specific optimizations for 2025

/**
 * Enable Vercel Analytics and Speed Insights
 */
export const initializeVercelAnalytics = async () => {
  if (import.meta.env.PROD) {
    try {
      // Only import Speed Insights for analytics
      const { injectSpeedInsights } = await import('@vercel/speed-insights');
      injectSpeedInsights();
    } catch (error) {
      console.warn('Vercel Speed Insights not available:', error);
    }
  }
};

/**
 * Optimize images for Vercel deployment
 */
export const optimizeImageForVercel = (src: string, width?: number, quality = 75) => {
  if (import.meta.env.PROD && src.startsWith('/')) {
    // Use Vercel Image Optimization
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    params.set('q', quality.toString());
    
    return `/_vercel/image?url=${encodeURIComponent(src)}&${params.toString()}`;
  }
  return src;
};

/**
 * Preload critical routes for better navigation
 */
export const preloadCriticalRoutes = () => {
  const routes = ['/'];
  
  routes.forEach(route => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    document.head.appendChild(link);
  });
};

/**
 * Enable service worker for caching
 */
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
    } catch (error) {
      console.warn('Service Worker registration failed:', error);
    }
  }
};

/**
 * Optimize fonts loading for Vercel
 */
export const optimizeFontsLoading = () => {
  // Preconnect to Google Fonts
  const preconnectLinks = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  preconnectLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = href;
    if (href.includes('gstatic')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
  
  // Load fonts with display=swap for better performance
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap'
  ];
  
  fontLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  });
};

/**
 * Critical CSS injection for above-the-fold content
 */
export const injectCriticalCSS = () => {
  const criticalCSS = `
    /* Critical CSS for immediate rendering */
    *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
    html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}
    body{margin:0;line-height:inherit;font-family:'Barlow',sans-serif}
    .min-h-screen{min-height:100vh}
    .fixed{position:fixed}
    .inset-0{top:0;right:0;bottom:0;left:0}
    .z-\\[9999\\]{z-index:9999}
    .flex{display:flex}
    .items-center{align-items:center}
    .justify-center{justify-content:center}
    .bg-slate-900{background-color:rgb(15 23 42)}
    .text-white{color:rgb(255 255 255)}
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

/**
 * Initialize all Vercel optimizations
 */
export const initializeVercelOptimizations = async () => {
  // Inject critical CSS immediately
  injectCriticalCSS();
  
  // Optimize fonts loading
  optimizeFontsLoading();
  
  // Preload critical routes
  preloadCriticalRoutes();
  
  // Initialize analytics (async)
  initializeVercelAnalytics();
  
  // Register service worker (async)
  registerServiceWorker();
};
