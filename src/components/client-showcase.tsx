import { clientLogos } from "@/data/clients";
import { useLanguage } from "@/hooks/use-language";
import { usePerformantIntersection } from "@/hooks/use-performance";
import { useState, useEffect, useRef } from "react";
import { motion } from "@motionone/react";

interface StatItem {
  number: string;
  label: string;
  icon: "star" | "quote";
}

export function ClientShowcase() {
  const { language } = useLanguage();
  const { ref, observe } = usePerformantIntersection({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }) as {
    ref: React.RefObject<HTMLDivElement>;
    observe: (callback: IntersectionObserverCallback) => () => void;
  };
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      setIsIntersecting(entries[0]?.isIntersecting ?? false);
    };

    const cleanup = observe(handleIntersection);

    // Return cleanup function if observe returned one
    if (cleanup) {
      return cleanup;
    }

    // Fallback cleanup if observe didn't return one
    return () => {};
  }, [observe]);

  return (
    <div
      ref={ref}
      className="py-16 md:py-24 px-6 sm:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-jaded-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={isIntersecting ? { width: "100px" } : { width: "0%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-0.5 bg-jaded-green-600 mx-auto mb-8"
          />
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 ${
              language === "ar"
                ? "font-arabic leading-tight arabic-heading"
                : "font-barlow leading-tight"
            }`}
          >
            {language === "ar"
              ? "عملاؤنا المميزون"
              : "Our Distinguished Clients"}
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${
              language === "ar"
                ? "font-arabic text-center arabic-body"
                : "font-barlow"
            }`}
          >
            {language === "ar"
              ? "نفخر بثقة العلامات التجارية الرائدة في المنطقة وشراكتنا الناجحة معها"
              : "We are proud of the trust from leading regional brands and our successful partnerships with them"}
          </p>
        </motion.div>

        {/* Enhanced Client Logos Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16 relative"
        >
          {/* Automatic + Manual Scroll Container */}
          <div className="relative overflow-hidden">
            {/* First Row - Moving Right with Manual Scroll */}
            <div className="relative group mb-8">
              <motion.div
                animate={{ x: [0, -50] }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                }}
                className="flex gap-6 sm:gap-8 whitespace-nowrap overflow-x-auto scrollbar-hide touch-pan-x"
                style={{ width: "calc(200% + 3rem)" }}
              >
                {[...clientLogos.slice(0, 7), ...clientLogos.slice(0, 7)].map(
                  (client, index) => (
                    <div
                      key={`row1-${index}`}
                      className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#3f7c6a]/30 h-18 sm:h-22 flex items-center justify-center min-w-[160px] sm:min-w-[180px] group/card cursor-pointer flex-shrink-0"
                    >
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-8 sm:max-h-10 max-w-[100px] sm:max-w-[120px] w-full object-contain grayscale group-hover/card:grayscale-0 transition-all duration-200 opacity-70 group-hover/card:opacity-100"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/120x40/e5e7eb/6b7280?text=${encodeURIComponent(client.name)}`;
                          }}
                        />
                        <span
                          className={`text-xs text-gray-600 group-hover/card:text-jaded-green-600 transition-colors duration-200 text-center font-medium mt-1 ${
                            language === "ar" ? "font-arabic" : "font-barlow"
                          }`}
                        >
                          {client.name}
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </motion.div>
            </div>

            {/* Second Row - Moving Left with Manual Scroll */}
            <div className="relative group">
              <motion.div
                animate={{ x: [-50, 0] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                }}
                className="flex gap-6 sm:gap-8 whitespace-nowrap overflow-x-auto scrollbar-hide touch-pan-x"
                style={{ width: "calc(200% + 3rem)" }}
              >
                {[...clientLogos.slice(7), ...clientLogos.slice(7)].map(
                  (client, index) => (
                    <div
                      key={`row2-${index}`}
                      className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#3f7c6a]/30 h-18 sm:h-22 flex items-center justify-center min-w-[160px] sm:min-w-[180px] group/card cursor-pointer flex-shrink-0"
                    >
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-8 sm:max-h-10 max-w-[100px] sm:max-w-[120px] w-full object-contain grayscale group-hover/card:grayscale-0 transition-all duration-200 opacity-70 group-hover/card:opacity-100"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/120x40/e5e7eb/6b7280?text=${encodeURIComponent(client.name)}`;
                          }}
                        />
                        <span
                          className={`text-xs text-gray-600 group-hover/card:text-jaded-green-600 transition-colors duration-200 text-center font-medium mt-1 ${
                            language === "ar" ? "font-arabic" : "font-barlow"
                          }`}
                        >
                          {client.name}
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p
            className={`text-lg text-gray-600 mb-6 ${
              language === "ar" ? "font-arabic" : "font-barlow"
            }`}
          >
            {language === "ar"
              ? "انضم إلى قائمة عملائنا المميزين واكتشف الفرق"
              : "Join our distinguished client list and discover the difference"}
          </p>

          <button className="bg-[#3f7c6a] hover:bg-[#3f7c6a]/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-barlow">
            {language === "ar"
              ? "ابدأ مشروعك معنا"
              : "Start Your Project With Us"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
