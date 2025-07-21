import { services } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const { language } = useLanguage();

  // SEO and meta data
  const pageTitle =
    language === "ar"
      ? "خدماتنا المتخصصة | مجموعة كاكتوس الإعلامية"
      : "Our Specialized Services | Cactus Media Group";
  const pageDescription =
    language === "ar"
      ? "خدمات رقمية متكاملة من تطوير المواقع إلى التسويق الرقمي والتصميم. حلول مبتكرة مصممة خصيصاً لنمو أعمالك وتحقيق أهدافك الرقمية."
      : "Comprehensive digital services from web development to digital marketing and design. Innovative solutions crafted specifically for your business growth and digital goals.";

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content={
          language === "ar"
            ? "تطوير مواقع, تصميم, تسويق رقمي, هوية بصرية, محتوى رقمي, تصوير احترافي"
            : "web development, design, digital marketing, branding, content creation, professional photography"
        }
      />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/services" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-jaded-green-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-jaded-green-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-jaded-green-50/20 to-gold-50/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-6 sm:px-8">
          {/* Header Section */}
          <div className="max-w-7xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-jaded-green-800 to-gray-900 bg-clip-text text-transparent ${
                language === "ar" ? "font-arabic" : "font-barlow"
              }`}
            >
              {language === "ar"
                ? "خدماتنا المتخصصة"
                : "Our Specialized Services"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {language === "ar"
                ? "نقدم مجموعة شاملة من الخدمات الرقمية المبتكرة المصممة خصيصاً لتحقيق أهدافك التجارية وتعزيز حضورك الرقمي"
                : "We offer a comprehensive suite of innovative digital services crafted specifically to achieve your business goals and enhance your digital presence"}
            </motion.p>
          </div>

          {/* Core Services Section */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * idx,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div
                    className={`relative rounded-3xl p-8 shadow-xl border transition-all duration-500 h-full flex flex-col ${service.label === "latest" ? "bg-jaded-green-700 text-white border-jaded-green-400/40 hover:shadow-2xl" : "bg-white/80 backdrop-blur-xl border-gray-100/50 hover:shadow-2xl hover:border-jaded-green-200/50"}`}
                  >
                    {/* Latest Badge for AI & Automations */}
                    {service.label === "latest" && (
                      <span className="absolute top-4 left-4 bg-white text-[#3f7c6a] text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10">
                        {language === "ar" ? "الأحدث" : "LATEST"}
                      </span>
                    )}
                    {/* Service Icon */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ring-4 ring-jaded-green-500/30 ${service.label === "latest" ? "bg-white" : "bg-gradient-to-br from-jaded-green-100 to-jaded-green-50"}`}
                      >
                        {service.label === "latest" ? (
                          <img
                            src="/assets/animated/services/ai.gif"
                            alt={service.title[language]}
                            className="w-full h-full object-contain rounded-2xl"
                          />
                        ) : (
                          <img
                            src={service.icon}
                            alt={service.title[language]}
                            className="w-full h-full object-contain rounded-2xl"
                          />
                        )}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col">
                      <h2
                        className={`text-2xl font-bold mb-4 ${service.label === "latest" ? "text-white group-hover:text-gold-400" : "text-gray-900 group-hover:text-jaded-green-800"} transition-colors duration-300 ${language === "ar" ? "font-arabic text-center" : "font-barlow text-center"}`}
                      >
                        {service.title[language]}
                      </h2>
                      <p
                        className={`mb-6 leading-relaxed flex-1 ${service.label === "latest" ? "text-white/90" : "text-gray-600"} ${language === "ar" ? "font-arabic text-center" : "text-center"}`}
                      >
                        {service.desc[language]}
                      </p>
                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {service.features[language].map((feature, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-3 text-sm ${service.label === "latest" ? "text-white/80" : "text-gray-700"} ${language === "ar" ? "flex-row-reverse" : ""}`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full flex-shrink-0 ${service.label === "latest" ? "bg-white" : "bg-jaded-green-500"}`}
                            />
                            <span
                              className={language === "ar" ? "font-arabic" : ""}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      {/* CTA Button */}
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-auto group/btn"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group-hover/btn:from-jaded-green-700 group-hover/btn:to-jaded-green-600 ${service.label === "latest" ? "bg-white text-jaded-green-600" : "bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 text-white"}`}
                        >
                          <span
                            className={
                              language === "ar" ? "font-arabic" : "font-barlow"
                            }
                          >
                            {language === "ar" ? "اكتشف المزيد" : "Learn More"}
                          </span>
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mt-20"
          >
            <div className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 rounded-3xl p-12 text-white shadow-2xl">
              <h3
                className={`text-3xl md:text-4xl font-bold mb-6 ${
                  language === "ar" ? "font-arabic" : "font-barlow"
                }`}
              >
                {language === "ar"
                  ? "جاهز لبدء مشروعك؟"
                  : "Ready to Start Your Project?"}
              </h3>
              <p
                className={`text-xl mb-8 opacity-90 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {language === "ar"
                  ? "دعنا نساعدك في تحويل أفكارك إلى واقع رقمي مذهل"
                  : "Let us help you transform your ideas into stunning digital reality"}
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-jaded-green-600 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {language === "ar" ? "تواصل معنا الآن" : "Contact Us Now"}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
