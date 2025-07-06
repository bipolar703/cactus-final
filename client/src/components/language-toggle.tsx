import { Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleLanguage}
        className="glass-strong text-white px-3 py-2 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium text-xs hover-lift group"
      >
        <Globe className="inline w-3 h-3 mr-1 group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-semibold">{language.toUpperCase()}</span>
      </button>
    </div>
  );
}
