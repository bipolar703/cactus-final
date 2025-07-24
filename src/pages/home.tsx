import { ClientShowcase } from "@/components/client-showcase";
import { EnhancedModalSystem } from "@/components/enhanced-modal-system";
import { LoadingScreen } from "@/components/loading-screen";
import { ModernHeroSection } from "@/components/modern-hero-section";
import { ModernAboutSection } from "@/components/sections/modern-about-section";
import { ModernContactSection } from "@/components/sections/modern-contact-section";
import { ModernPortfolioSection } from "@/components/sections/modern-portfolio-section";
import { ModernServicesSection } from "@/components/sections/modern-services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { motion } from "@motionone/react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  // Section refs for intersection tracking
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

// All legacy animation logic removed for @motionone/react compatibility

  // Intersection Observer logic
  useEffect(() => {
    const sectionMap = [
      { id: "hero", ref: heroRef },
      { id: "about", ref: aboutRef },
      { id: "services", ref: servicesRef },
      { id: "portfolio", ref: portfolioRef },
      { id: "contact", ref: contactRef },
    ];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "hero";
      for (const { id, ref } of sectionMap) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.4 &&
            rect.bottom > window.innerHeight * 0.4
          ) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Loading screen will handle its own timing and resource preloading
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Fallback in case loading screen doesn't complete

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  const getSectionBackground = (section: string) => {
    switch (section) {
      case "about":
        return "bg-gradient-to-br from-jaded-green-950/90 via-jaded-green-900/80 to-slate-900/85 cinematic-gradient";
      case "services":
        return "bg-gradient-to-br from-slate-900/85 via-jaded-green-950/75 to-jaded-green-900/80 cinematic-gradient";
      case "portfolio":
        return "bg-gradient-to-br from-jaded-green-900/80 via-slate-900/85 to-jaded-green-950/90 cinematic-gradient";
      case "contact":
        return "bg-gradient-to-br from-slate-900/90 via-jaded-green-900/75 to-jaded-green-950/85 cinematic-gradient";
      default:
        return "bg-slate-900/90";
    }
  };

  return (
    <>
      {/* Only render LoadingScreen if it returns a valid React node */}
      {typeof LoadingScreen === 'function' ? (
        <LoadingScreen
          isVisible={isLoading}
          onComplete={() => setIsLoading(false)}
        />
      ) : null}
      <EnhancedModalSystem />
      <div className="relative min-h-screen bg-slate-900">
        {/* Background Gradients for Non-Hero Sections */}
        <div className="fixed inset-0 z-0">
            {activeSection !== "hero" && (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className={`absolute inset-0 ${getSectionBackground(activeSection)}`}
              />
            )}
          {/* AnimatePresence removed for @motionone/react migration */}
        </div>
        {/* Main Sectioned Content - Centered Layout */}
        <main className="relative z-10 w-full max-w-none mx-auto">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
          >
            <ModernHeroSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="-mt-1"
          >
            <ProcessSection />
          </motion.div>

          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <ModernServicesSection />
          </motion.div>
          <motion.div
            ref={portfolioRef}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <ModernPortfolioSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <ClientShowcase />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="-mt-1"
            ref={aboutRef}
          >
            <ModernAboutSection />
          </motion.div>

          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <ModernContactSection />
          </motion.div>
        </main>
      </div>
    </>
  );
}
