import { useLanguage } from "@/hooks/use-language";
import { motion } from "motion/react";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function Contact() {
  const { language } = useLanguage();

  const pageTitle =
    language === "ar"
      ? "تواصل معنا | مجموعة كاكتوس الإعلامية"
      : "Contact Us | Cactus Media Group";
  const pageDescription =
    language === "ar"
      ? "تواصل مع فريق الخبراء لدينا لمناقشة مشروعك القادم. نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي مذهل."
      : "Get in touch with our expert team to discuss your next project. We're here to help transform your ideas into stunning digital reality.";

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content={
          language === "ar"
            ? "تواصل, استشارة, مشروع رقمي, خدمات تقنية, تطوير مواقع"
            : "contact, consultation, digital project, tech services, web development"
        }
      />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/contact" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-jaded-green-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-jaded-green-100/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gold-100/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-jaded-green-50/10 to-gold-50/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 pt-32 pb-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-jaded-green-800 to-gray-900 bg-clip-text text-transparent ${
                  language === "ar" ? "font-arabic" : "font-barlow"
                }`}
              >
                {language === "ar" ? "تواصل معنا" : "Contact Us"}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {language === "ar"
                  ? "دعنا نناقش مشروعك القادم ونحوله إلى واقع رقمي استثنائي"
                  : "Let's discuss your next project and turn it into exceptional digital reality"}
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <ContactInfo />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
