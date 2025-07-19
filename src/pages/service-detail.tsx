import { services } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { ArrowLeft, Award, CheckCircle, Star, Users, Zap } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function ServiceDetailPage() {
  const [, params] = useRoute("/services/:slug");
  const { language } = useLanguage();

  const service = services.find((s) => s.slug === params?.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-jaded-green-50">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {language === "ar" ? "الخدمة غير موجودة" : "Service not found"}
          </h1>
          <Link
            href="/services"
            className="text-jaded-green-600 hover:text-jaded-green-700 font-semibold"
          >
            {language === "ar" ? "العودة للخدمات" : "Back to Services"}
          </Link>
        </div>
      </div>
    );
  }

  // SEO and meta data
  const pageTitle = service.meta[language].title;
  const pageDescription = service.meta[language].description;

  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={service.features[language].join(", ")} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`/services/${service.slug}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-jaded-green-50">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-jaded-green-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold-100/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-jaded-green-600 hover:text-jaded-green-700 font-semibold transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                {language === "ar" ? "العودة للخدمات" : "Back to Services"}
              </Link>
            </motion.div>

            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-jaded-green-100 to-jaded-green-50 rounded-3xl flex items-center justify-center mb-6">
                    <img
                      src={service.icon}
                      alt={service.title[language]}
                      className="w-16 h-16"
                    />
                  </div>
                </div>

                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-jaded-green-800 to-gray-900 bg-clip-text text-transparent ${
                    language === "ar" ? "font-arabic" : "font-barlow"
                  }`}
                >
                  {service.title[language]}
                </h1>

                <p
                  className={`text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {service.desc[language]}
                </p>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                  >
                    <span
                      className={
                        language === "ar" ? "font-arabic" : "font-barlow"
                      }
                    >
                      {language === "ar" ? "احصل على عرض سعر" : "Get a Quote"}
                    </span>
                    <Zap className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100/50">
                  <h3
                    className={`text-2xl font-bold mb-6 text-gray-900 ${
                      language === "ar"
                        ? "font-arabic text-center"
                        : "font-barlow"
                    }`}
                  >
                    {language === "ar" ? "ما نقدمه لك" : "What We Deliver"}
                  </h3>

                  <div className="space-y-4">
                    {service.features[language].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        className={`flex items-center gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}
                      >
                        <div className="w-8 h-8 bg-jaded-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-jaded-green-600" />
                        </div>
                        <span
                          className={`text-gray-700 font-medium ${language === "ar" ? "font-arabic" : ""}`}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Detailed Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-20"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-gray-100/50">
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 ${
                    language === "ar" ? "font-arabic" : "font-barlow"
                  }`}
                >
                  {language === "ar" ? "تفاصيل الخدمة" : "Service Details"}
                </h2>

                <p
                  className={`text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {service.details[language]}
                </p>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-20"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Users,
                    number: "100+",
                    label: language === "ar" ? "عميل راضٍ" : "Happy Clients",
                  },
                  {
                    icon: Award,
                    number: "50+",
                    label:
                      language === "ar" ? "مشروع مكتمل" : "Projects Completed",
                  },
                  {
                    icon: Star,
                    number: "5.0",
                    label:
                      language === "ar" ? "تقييم العملاء" : "Client Rating",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 text-center shadow-xl border border-gray-100/50"
                  >
                    <div className="w-16 h-16 bg-jaded-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-jaded-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div
                      className={`text-gray-600 font-medium ${language === "ar" ? "font-arabic" : ""}`}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 rounded-3xl p-12 text-white shadow-2xl">
                <h3
                  className={`text-3xl md:text-4xl font-bold mb-6 ${
                    language === "ar" ? "font-arabic" : "font-barlow"
                  }`}
                >
                  {language === "ar" ? "جاهز للبدء؟" : "Ready to Get Started?"}
                </h3>
                <p
                  className={`text-xl mb-8 opacity-90 max-w-2xl mx-auto ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {language === "ar"
                    ? "دعنا نناقش مشروعك ونحوله إلى واقع رقمي مذهل"
                    : "Let's discuss your project and turn it into stunning digital reality"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-jaded-green-600 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {language === "ar" ? "تواصل معنا" : "Contact Us"}
                    </motion.button>
                  </Link>
                  <Link href="/portfolio">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                    >
                      {language === "ar" ? "شاهد أعمالنا" : "View Our Work"}
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
