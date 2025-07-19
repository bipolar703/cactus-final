import { useState, useRef, useEffect } from 'react';
import { ScrollAwareLanguageToggle } from '@/components/scroll-aware-language-toggle';
import { EnhancedModalSystem } from '@/components/enhanced-modal-system';
import { LoadingScreen } from '@/components/loading-screen';
import { EnhancedHeroSection } from '@/components/enhanced-hero-section';
import { ModernAboutSection } from '@/components/sections/modern-about-section';
import { ModernServicesSection } from '@/components/sections/modern-services-section';
import { ModernPortfolioSection } from '@/components/sections/modern-portfolio-section';
import { ModernContactSection } from '@/components/sections/modern-contact-section';
import { ClientShowcase } from '@/components/client-showcase';
import { useResourcePreload } from '@/utils/cache-manager';
import { EnhancedFooter } from '@/components/enhanced-footer';
import { motion, AnimatePresence } from 'framer-motion';

const sectionVideos = [
  { id: 'hero', src: '/hero.mp4' },
  {
    id: 'about',
    src: '/hero.mp4', // Using local hero.mp4 file from public directory
  },
  {
    id: 'services',
    src: '/hero.mp4', // Using local hero.mp4 file from public directory
  },
  {
    id: 'portfolio',
    src: '/hero.mp4', // Using local hero.mp4 file from public directory
  },
  {
    id: 'contact',
    src: '/hero.mp4', // Using local hero.mp4 file from public directory
  },
];

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Section refs for intersection tracking
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Preload critical assets
  const criticalAssets = [
    '/hero.mp4',
  ];
  const assetsLoaded = useResourcePreload(criticalAssets);

  // Intersection Observer logic
  useEffect(() => {
    const sectionMap = [
      { id: 'hero', ref: heroRef },
      { id: 'about', ref: aboutRef },
      { id: 'services', ref: servicesRef },
      { id: 'portfolio', ref: portfolioRef },
      { id: 'contact', ref: contactRef },
    ];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = 'hero';
      for (const { id, ref } of sectionMap) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.4) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (assetsLoaded) {
        setIsLoading(false);
      }
    }, 3000);
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [assetsLoaded]);

  const getSectionBackground = (section: string) => {
    switch (section) {
      case 'about':
        return 'bg-gradient-to-br from-jaded-green-950/90 via-jaded-green-900/80 to-slate-900/85 cinematic-gradient';
      case 'services':
        return 'bg-gradient-to-br from-slate-900/85 via-jaded-green-950/75 to-jaded-green-900/80 cinematic-gradient';
      case 'portfolio':
        return 'bg-gradient-to-br from-jaded-green-900/80 via-slate-900/85 to-jaded-green-950/90 cinematic-gradient';
      case 'contact':
        return 'bg-gradient-to-br from-slate-900/90 via-jaded-green-900/75 to-jaded-green-950/85 cinematic-gradient';
      default:
        return 'bg-slate-900/90';
    }
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return <AboutModal />;
      case 'services':
        return <ServicesModal />;
      case 'portfolio':
        return <PortfolioModal />;
      case 'contact':
        return <ContactModal />;
      default:
        return null;
    }
  };

  return (
    <>
      <LoadingScreen isVisible={isLoading} onComplete={() => setIsLoading(false)} />
      <div className="relative min-h-screen bg-slate-900">
        {/* Background Gradients for Non-Hero Sections */}
        <div className="fixed inset-0 z-0">
          <AnimatePresence mode="wait">
            {activeSection !== 'hero' && (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute inset-0 ${getSectionBackground(activeSection)}`}
              />
            )}
          </AnimatePresence>
        </div>
        {/* Language Toggle */}
        <ScrollAwareLanguageToggle />
        {/* Main Sectioned Content */}
        <main className="relative z-10">
          <motion.div 
            ref={heroRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <EnhancedHeroSection onModalOpen={setActiveModal} />
          </motion.div>
          <motion.div 
            ref={aboutRef}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="-mt-1"
          >
            <ModernAboutSection />
          </motion.div>
          <motion.div 
            ref={servicesRef}
            initial={{ opacity: 0, y: 60, rotateY: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ModernServicesSection />
          </motion.div>
          <motion.div 
            ref={portfolioRef}
            initial={{ opacity: 0, y: 60, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ModernPortfolioSection onViewPortfolio={() => setActiveModal('portfolio')} />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ClientShowcase />
          </motion.div>
          <motion.div 
            ref={contactRef}
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ModernContactSection />
          </motion.div>
          
          {/* Enhanced Footer */}
          <EnhancedFooter />
        </main>
        {/* Modal */}
        <EnhancedModalSystem
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          activeModal={activeModal}
          onModalChange={setActiveModal}
        />
      </div>
    </>
  );
}
