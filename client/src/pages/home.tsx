import { useState, useEffect } from 'react';
import { LanguageToggle } from '@/components/language-toggle';
import { ModalOverlay } from '@/components/modal-overlay';
import { LoadingScreen } from '@/components/loading-screen';
import { VideoSlideshow } from '@/components/video-slideshow';
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

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Preload critical assets
  const criticalAssets = [
    '/assets/Logo-Whirte-Png_1751779171310.png',
    '/assets/Logo-Png_1751779171296.png',
    '/assets/Webpage-Banner_1751779171234.png'
  ];
  const assetsLoaded = useResourcePreload(criticalAssets);

  // Close modal when clicking outside
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (assetsLoaded) {
        setIsLoading(false);
      }
    }, 3000);

    // Fallback to ensure loading screen doesn't stay forever
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
      <LoadingScreen 
        isVisible={isLoading} 
        onComplete={() => setIsLoading(false)} 
      />
      
      <div className="relative min-h-screen">
        {/* Cinematic Video Slideshow Background */}
        <VideoSlideshow />
        
        {/* Language Toggle */}
        <LanguageToggle />
        
        {/* Main Sectioned Content */}
        <main className="relative z-10">
          <HeroSection onModalOpen={setActiveModal} />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <ContactSection />
        </main>

        {/* Modal */}
      <ModalOverlay
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
      >
        {renderModalContent()}
      </ModalOverlay>
    </div>
    </>
  );
}
