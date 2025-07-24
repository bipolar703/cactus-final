import { EnhancedFooter } from "@/components/enhanced-footer";
import { LoadingScreen } from "@/components/loading-screen";
import { NavigationBar } from "@/components/navigation-bar";
import { PageTransition } from "@/components/page-transition";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/use-language";
import { useWebVitals } from "@/hooks/use-performance";
import { QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch, useLocation } from "wouter";
import { ErrorFallback } from "./components/error-fallback";
import { queryClient } from "./lib/queryClient";

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const Services = lazy(() => import("@/pages/services"));
const ServiceDetail = lazy(() => import("@/pages/service-detail"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const Contact = lazy(() => import("@/pages/contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function App() {
  // Monitor Core Web Vitals in development
  useWebVitals();

  // Set browser title for Vercel deployment
  useEffect(() => {
    document.title = "Cactus Media Group";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="relative min-h-screen" data-scroll-container>
            <NavigationBar />
            <Toaster />
            <ScrollToTop />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingScreen />}>
                <Router />
              </Suspense>
            </ErrorBoundary>
            <EnhancedFooter />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
