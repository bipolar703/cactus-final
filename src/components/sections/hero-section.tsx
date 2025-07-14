import { CinematicHero } from '../cinematic-hero';

interface HeroSectionProps {
  onModalOpen: (modal: string) => void;
}

export function HeroSection({ onModalOpen }: HeroSectionProps) {
  return <CinematicHero onModalOpen={onModalOpen} />;
}
