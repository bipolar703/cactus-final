import { useLanguage } from "@/hooks/use-language";
import { usePerformantIntersection } from "@/hooks/use-performance";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState, useEffect } from "react";

export function ModernContactSection() {
  const { language } = useLanguage();
  const { ref, observe } = usePerformantIntersection();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const disconnect = observe((entries) => {
      setIsIntersecting(entries[0]?.isIntersecting ?? false);
    });
    return disconnect;
  }, [observe]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (res.ok) {
          alert(
            language === "ar"
              ? "تم إرسال رسالتك بنجاح!"
              : "Your message has been sent!",
          );
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          const data = await res.json();
          alert(
            (language === "ar"
              ? "حدث خطأ أثناء الإرسال: "
              : "Error sending message: ") + (data.error || ""),
          );
        }
      })
      .catch(() => {
        alert(
          language === "ar"
            ? "تعذر الاتصال بالخادم."
            : "Could not connect to server.",
        );
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact-section"
      ref={ref}
      className="py-16 sm:py-24 px-6 sm:px-8 mobile-section relative"
    >
      {/* Minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 60 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-0.5 bg-jaded-green-600 mx-auto mb-8"
          />

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 ${
              language === "ar"
                ? "font-arabic leading-tight"
                : "font-barlow leading-tight"
            }`}
          >
            {language === "ar" ? "ابدأ مشروعك" : "Start Your Project"}
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-center ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {language === "ar"
              ? "دعنا نحول فكرتك إلى واقع رقمي متميز. تواصل معنا اليوم لبدء رحلتك"
              : "Let us transform your idea into exceptional digital reality. Contact us today to start your journey"}
          </p>
        </motion.div>

        {/* Contact Form - Single Centered Column */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={
            isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
          }
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium text-gray-700 ${
                    language === "ar" ? "font-arabic text-center" : ""
                  }`}
                >
                  {language === "ar" ? "الاسم" : "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-jaded-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                    language === "ar" ? "text-center font-arabic" : ""
                  }`}
                  placeholder={
                    language === "ar" ? "اسمك الكامل" : "Your full name"
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium text-gray-700 ${
                    language === "ar" ? "font-arabic text-center" : ""
                  }`}
                >
                  {language === "ar" ? "البريد الإلكتروني" : "Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-jaded-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                    language === "ar" ? "text-center font-arabic" : ""
                  }`}
                  placeholder={
                    language === "ar"
                      ? "بريدك الإلكتروني"
                      : "Your email address"
                  }
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className={`block text-sm font-medium text-gray-700 ${
                  language === "ar" ? "font-arabic text-center" : ""
                }`}
              >
                {language === "ar" ? "الموضوع" : "Subject"}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-jaded-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                  language === "ar" ? "text-center font-arabic" : ""
                }`}
                placeholder={
                  language === "ar" ? "موضوع رسالتك" : "Subject of your message"
                }
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className={`block text-sm font-medium text-gray-700 ${
                  language === "ar" ? "font-arabic text-center" : ""
                }`}
              >
                {language === "ar" ? "الرسالة" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-jaded-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none ${
                  language === "ar" ? "text-center font-arabic" : ""
                }`}
                placeholder={
                  language === "ar"
                    ? "اكتب رسالتك هنا..."
                    : "Write your message here..."
                }
                required
              />
            </div>

            {/* Submit Button - Only element with vibrant accent color */}
            <motion.div
              className="text-center pt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="bg-jaded-green-600 hover:bg-jaded-green-700 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto group"
              >
                <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                {language === "ar" ? "إرسال الرسالة" : "Send Message"}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
