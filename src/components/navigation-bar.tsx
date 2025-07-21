import { useLanguage } from "@/hooks/use-language";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

export function NavigationBar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, toggleLanguage, isLoading } = useLanguage();

  // Check if we're on the home page
  const isHomePage = location === "/";

  const navLinks = [
    { label: { en: "Home", ar: "الرئيسية" }, href: "/" },
    { label: { en: "About", ar: "من نحن" }, href: "/about" },
    { label: { en: "Services", ar: "خدماتنا" }, href: "/services" },
    { label: { en: "Portfolio", ar: "أعمالنا" }, href: "/portfolio" },
    { label: { en: "Contact", ar: "تواصل معنا" }, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for background opacity
      setIsScrolled(currentScrollY > 100);

      // Always show navbar, but with different opacity in hero
      if (currentScrollY < 100) {
        setIsVisible(true); // Show with transparent background in hero
      }
      // Show when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide when scrolling down (but not in hero)
      else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.3 },
      }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
          : "bg-transparent backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <motion.img
            src="/assets/Icon.png"
            alt="Cactus Media Group"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            whileHover={{ rotate: 5 }}
          />
          <motion.span
            className={`hidden sm:block text-xl font-bold transition-colors duration-300 ${
              isScrolled || !isHomePage ? "text-jaded-green-700" : "text-white"
            } ${language === "ar" ? "font-arabic" : "font-barlow"}`}
            whileHover={{ scale: 1.05 }}
          >
            {language === "ar" ? "كاكتوس ميديا" : "Cactus Media"}
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-1 items-center flex-1 justify-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={link.href}
                className={`relative text-base font-medium px-4 py-2 rounded-xl transition-all duration-300 group ${
                  location === link.href
                    ? isScrolled || !isHomePage
                      ? "bg-jaded-green-100 text-jaded-green-800 shadow-md"
                      : "bg-[#3f7c6a] text-white shadow-md"
                    : isScrolled || !isHomePage
                      ? "text-gray-700 hover:bg-jaded-green-50 hover:text-jaded-green-700"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                } ${language === "ar" ? "font-arabic" : "font-barlow"}`}
              >
                {link.label[language]}
                {location === link.href && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-xl -z-10 ${
                      isScrolled || !isHomePage
                        ? "bg-jaded-green-100"
                        : "bg-[#3f7c6a]"
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Side - Desktop Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Desktop Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl font-medium text-sm transition-all duration-300 border ${
              isScrolled || !isHomePage
                ? "bg-white text-gray-800 border-gray-200 shadow-md hover:bg-jaded-green-50 hover:border-jaded-green-200"
                : "bg-white/20 text-white border-white/30 hover:bg-white/30 hover:border-white/50"
            } ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <Globe className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            <span
              className={`${language === "ar" ? "font-arabic" : "font-barlow"}`}
            >
              {language === "ar" ? "English" : "العربية"}
            </span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-xl hover:bg-jaded-green-50 focus:outline-none focus:ring-2 focus:ring-jaded-green-400 transition-colors duration-200"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isScrolled || !isHomePage
                        ? "text-jaded-green-700"
                        : "text-white"
                    }`}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isScrolled || !isHomePage
                        ? "text-jaded-green-700"
                        : "text-white"
                    }`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-slate-900 border-t border-gray-700 shadow-xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-lg font-medium px-4 py-3 rounded-xl transition-all duration-300 ${
                      location === link.href
                        ? "bg-jaded-green-600 text-white shadow-md"
                        : "text-white hover:bg-jaded-green-600/20 hover:text-jaded-green-400 active:bg-jaded-green-600/30"
                    } ${language === "ar" ? "font-arabic text-center" : "font-barlow text-left"}`}
                  >
                    {link.label[language]}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Language Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="pt-2"
              >
                <motion.button
                  onClick={toggleLanguage}
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-medium text-lg transition-all duration-300 border ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  } bg-gray-800 text-white border-gray-600 hover:bg-jaded-green-600/20 hover:text-jaded-green-400 hover:border-jaded-green-500`}
                >
                  <Globe
                    className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`}
                  />
                  <span
                    className={`${language === "ar" ? "font-arabic" : "font-barlow"}`}
                  >
                    {language === "ar" ? "English" : "العربية"}
                  </span>
                </motion.button>
              </motion.div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="pt-4 mt-4 border-t border-gray-700"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {language === "ar" ? "ابدأ مشروعك" : "Start Your Project"}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
