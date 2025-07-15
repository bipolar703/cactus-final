import { ReactNode } from 'react';
import { useLanguage } from '@/hooks/use-language';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  const { language } = useLanguage();

  return (
    <div 
      className={`${language === 'ar' ? 'arabic-section dubai-arabic' : ''} ${className}`}
      data-scroll-container
    >
      {children}
    </div>
  );
}