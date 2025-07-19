import { CinematicHero } from '../cinematic-hero';

interface HeroSectionProps {
  onModalOpen: (modal: string) => void;
}

export function HeroSection() {
  return <CinematicHero />;
}
