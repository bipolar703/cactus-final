import { Switch, Route, useLocation } from 'wouter';
import { useEffect, Suspense, lazy } from 'react';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { NavigationBar } from '@/components/navigation-bar';
import { EnhancedFooter } from '@/components/enhanced-footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/hooks/use-language';
import { LoadingScreen } from '@/components/loading-screen';
import { useWebVitals } from '@/hooks/use-performance';

// Lazy load pages for better performance
const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));
const Services = lazy(() => import('@/pages/services'));
const ServiceDetail = lazy(() => import('@/pages/service-detail'));
const Portfolio = lazy(() => import('@/pages/portfolio'));
const Contact = lazy(() => import('@/pages/contact'));
const NotFound = lazy(() => import('@/pages/not-found'));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
    <div className="text-center p-8 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-gray-300 mb-6 text-sm">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-jaded-green-600 hover:bg-jaded-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  // Monitor Core Web Vitals in development
  useWebVitals();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="relative min-h-screen" data-scroll-container>
            <NavigationBar />
            <Toaster />
            <ScrollToTop />
            <Suspense fallback={<LoadingScreen />}>
              <Router />
            </Suspense>
            <EnhancedFooter />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
