import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

import { translations } from "@/lib/translations";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [isLoading, setIsLoading] = useState(false);

  const toggleLanguage = () => {
    if (isLoading) return; // Prevent multiple clicks during loading

    const newLang = language === "en" ? "ar" : "en";
    setIsLoading(true);

    // Add loading class to body
    document.body.classList.add("language-switching");

    // Smooth transition with loading delay
    document.documentElement.style.transition = "all 0.3s cubic-bezier(0.42, 0, 0.58, 1)";

    setTimeout(() => {
      setLanguage(newLang);

      // Update HTML attributes with smooth transition
      document.documentElement.setAttribute("lang", newLang);
      document.documentElement.setAttribute(
        "dir",
        newLang === "ar" ? "rtl" : "ltr",
      );

      // Apply Tajawal-style Arabic font
      if (newLang === "ar") {
        document.body.classList.add("font-arabic", "tajawal-arabic");
        document.body.classList.remove("font-sans");
      } else {
        document.body.classList.remove("font-arabic", "tajawal-arabic");
        document.body.classList.add("font-sans");
      }

      // Reset transition and loading state
      setTimeout(() => {
        document.documentElement.style.transition = "";
        document.body.classList.remove("language-switching");
        setIsLoading(false);
      }, 300);
    }, 150);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr",
    );
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t, isLoading }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
