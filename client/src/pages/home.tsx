import { useState, useRef, useEffect } from 'react';
import { LanguageToggle } from '@/components/language-toggle';
import { ModalOverlay } from '@/components/modal-overlay';
import { LoadingScreen } from '@/components/loading-screen';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { useResourcePreload } from '@/utils/cache-manager';
import { AboutModal } from '@/components/modals/about-modal';
import { ServicesModal } from '@/components/modals/services-modal';
import { PortfolioModal } from '@/components/modals/portfolio-modal';
import { ContactModal } from '@/components/modals/contact-modal';
import { motion, AnimatePresence } from 'framer-motion';

const sectionVideos = [
  { id: 'hero', src: '/assets/hero.mp4' },
  {
    id: 'about',
    src: 'https://videos.pexels.com/video-files/8011361/8011361-uhd_2560_1440_25fps.mp4',
  },
  {
    id: 'services',
    src: 'https://videos.pexels.com/video-files/4937841/4937841-uhd_2560_1440_25fps.mp4',
  },
  {
    id: 'portfolio',
    src: 'https://videos.pexels.com/video-files/6567142/6567142-uhd_2560_1440_25fps.mp4',
  },
  {
    id: 'contact',
    src: 'https://videos.pexels.com/video-files/8618988/8618988-uhd_2560_1440_30fps.mp4',
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
    '/assets/Logo-Whirte-Png_1751779171310.png',
    '/assets/Logo-Png_1751779171296.png',
    '/assets/Webpage-Banner_1751779171234.png',
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
      <div className="relative min-h-screen">
        {/* Animated Video Background for Active Section */}
        <AnimatePresence mode="wait">
          <motion.video
            key={activeSection}
            src={sectionVideos.find((v) => v.id === activeSection)?.src}
            autoPlay
            loop
            muted
            playsInline
            className="fixed inset-0 w-full h-full object-cover z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        {/* Language Toggle */}
        <LanguageToggle />
        {/* Main Sectioned Content */}
        <main className="relative z-10">
          <div ref={heroRef}>
            <HeroSection onModalOpen={setActiveModal} />
          </div>
          <div ref={aboutRef}>
            <AboutSection />
          </div>
          <div ref={servicesRef}>
            <ServicesSection />
          </div>
          <div ref={portfolioRef}>
            <PortfolioSection />
          </div>
          <div ref={contactRef}>
            <ContactSection />
          </div>
        </main>
        {/* Modal */}
        <ModalOverlay isOpen={!!activeModal} onClose={() => setActiveModal(null)}>
          {renderModalContent()}
        </ModalOverlay>
      </div>
    </>
  );
}
