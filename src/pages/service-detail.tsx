import { services } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Zap } from "lucide-react";
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
      <meta property="og:url" content={`https://cactusmediajo.com/services/${service.slug}`} />
      <meta property="og:image" content={`https://cactusmediajo.com${service.icon}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`https://cactusmediajo.com${service.icon}`} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Cactus Media Group" />
      <link rel="canonical" href={`https://cactusmediajo.com/services/${service.slug}`} />

      <main className="min-h-screen bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#3f7c6a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#3f7c6a]/3 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="w-24 h-24 bg-[#3f7c6a] rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                    <img
                      src={service.icon}
                      alt={service.title[language]}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>

                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#3f7c6a] ${
                    language === "ar" ? "font-arabic" : "font-barlow"
                  }`}
                >
                  {service.title[language]}
                </h1>

                <p
                  className={`text-xl md:text-2xl text-[#3f7c6a] mb-8 leading-relaxed ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {service.desc[language]}
                </p>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#3f7c6a] hover:bg-[#3f7c6a]/90 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
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
                <div className="bg-[#3f7c6a] rounded-3xl p-8 shadow-2xl">
                  <h3
                    className={`text-2xl font-bold mb-6 text-white ${
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
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-[#3f7c6a]" />
                        </div>
                        <span
                          className={`text-white font-medium ${language === "ar" ? "font-arabic" : ""}`}
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
              <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-8 text-center text-[#3f7c6a] ${
                    language === "ar" ? "font-arabic" : "font-barlow"
                  }`}
                >
                  {language === "ar" ? "تفاصيل الخدمة" : "Service Overview"}
                </h2>

                <p
                  className={`text-lg md:text-xl text-[#3f7c6a] leading-relaxed text-center max-w-4xl mx-auto ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {service.details[language]}
                </p>
              </div>
            </motion.div>

            {/* Benefits Section */}
            {service.benefits && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <h2
                    className={`text-3xl md:text-4xl font-bold mb-6 text-[#3f7c6a] ${
                      language === "ar" ? "font-arabic" : "font-barlow"
                    }`}
                  >
                    {language === "ar" ? "الفوائد الرئيسية" : "Key Benefits"}
                  </h2>
                  <p
                    className={`text-lg text-gray-600 max-w-2xl mx-auto ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {language === "ar"
                      ? "اكتشف كيف يمكن لخدماتنا أن تحول أعمالك وتحقق نتائج استثنائية"
                      : "Discover how our services can transform your business and deliver exceptional results"}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.benefits[language].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="bg-[#3f7c6a] rounded-2xl p-6 text-white hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-[#3f7c6a]" />
                        </div>
                        <p
                          className={`text-white leading-relaxed ${
                            language === "ar" ? "font-arabic" : ""
                          }`}
                        >
                          {benefit}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Process Section */}
            {service.process && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <h2
                    className={`text-3xl md:text-4xl font-bold mb-6 text-[#3f7c6a] ${
                      language === "ar" ? "font-arabic" : "font-barlow"
                    }`}
                  >
                    {language === "ar" ? "عمليتنا" : "Our Process"}
                  </h2>
                  <p
                    className={`text-lg text-gray-600 max-w-2xl mx-auto ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {language === "ar"
                      ? "نهج منظم ومثبت لضمان نجاح مشروعك من البداية إلى النهاية"
                      : "A structured, proven approach to ensure your project's success from start to finish"}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.process[language].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-[#3f7c6a] rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <h3
                          className={`text-lg font-bold text-[#3f7c6a] ${
                            language === "ar" ? "font-arabic" : "font-barlow"
                          }`}
                        >
                          {step.step}
                        </h3>
                      </div>
                      <p
                        className={`text-gray-600 leading-relaxed ${
                          language === "ar" ? "font-arabic" : ""
                        }`}
                      >
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}


            {/* Custom CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-[#3f7c6a] rounded-3xl p-12 text-white shadow-2xl">
                <h3
                  className={`text-3xl md:text-4xl font-bold mb-6 ${
                    language === "ar" ? "font-arabic" : "font-barlow"
                  }`}
                >
                  {language === "ar" 
                    ? `جاهز لبدء مشروع ${service.title[language]}؟` 
                    : `Ready to Start Your ${service.title[language]} Project?`}
                </h3>
                <p
                  className={`text-xl mb-8 opacity-90 max-w-2xl mx-auto ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {language === "ar"
                    ? `دعنا نناقش احتياجاتك في ${service.title[language]} ونحولها إلى حلول رقمية متميزة`
                    : `Let's discuss your ${service.title[language]} needs and transform them into exceptional digital solutions`}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={`/contact?service=${service.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-[#3f7c6a] font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {language === "ar" ? "احصل على استشارة مجانية" : "Get Free Consultation"}
                    </motion.button>
                  </Link>
                  <Link href="/portfolio">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                    >
                      {language === "ar" ? "شاهد أعمالنا السابقة" : "View Previous Work"}
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
