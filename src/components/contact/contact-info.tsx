import { useLanguage } from "@/hooks/use-language";

export function ContactInfo() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Contact Info Card */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100/50">
        <h3
          className={`text-2xl font-bold mb-6 text-gray-900 ${language === "ar" ? "font-arabic text-center" : "font-barlow"}`}
        >
          {language === "ar" ? "معلومات التواصل" : "Contact Information"}
        </h3>

        <div className="space-y-6">
          <div
            className={`flex items-center gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}
          >
            <div className="w-12 h-12 bg-jaded-green-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-jaded-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p
                className={`font-semibold text-gray-900 ${language === "ar" ? "font-arabic" : ""}`}
              >
                {language === "ar" ? "البريد الإلكتروني" : "Email"}
              </p>
              <a
                href="mailto:info@cactusmediajo.com"
                className="text-jaded-green-600 hover:text-jaded-green-700 transition-colors"
              >
                info@cactusmediajo.com
              </a>
            </div>
          </div>

          <div
            className={`flex items-center gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}
          >
            <div className="w-12 h-12 bg-jaded-green-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-jaded-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p
                className={`font-semibold text-gray-900 ${language === "ar" ? "font-arabic" : ""}`}
              >
                {language === "ar" ? "الموقع" : "Location"}
              </p>
              <p className="text-gray-600">
                {language === "ar" ? "عمان، الأردن" : "Amman, Jordan"}
              </p>
            </div>
          </div>

          <div
            className={`flex items-center gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}
          >
            <div className="w-12 h-12 bg-jaded-green-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-jaded-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p
                className={`font-semibold text-gray-900 ${language === "ar" ? "font-arabic" : ""}`}
              >
                {language === "ar" ? "ساعات العمل" : "Business Hours"}
              </p>
              <p className="text-gray-600">
                {language === "ar"
                  ? "الأحد - الخميس: 9:00 - 18:00"
                  : "Sun - Thu: 9:00 AM - 6:00 PM"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Response Promise */}
      <div className="bg-gradient-to-r from-jaded-green-600 to-jaded-green-500 rounded-3xl p-8 text-white">
        <h4
          className={`text-xl font-bold mb-4 ${language === "ar" ? "font-arabic text-center" : "font-barlow"}`}
        >
          {language === "ar"
            ? "استجابة سريعة مضمونة"
            : "Quick Response Guaranteed"}
        </h4>
        <p
          className={`opacity-90 ${language === "ar" ? "font-arabic text-center" : ""}`}
        >
          {language === "ar"
            ? "نلتزم بالرد على جميع الاستفسارات خلال 24 ساعة أو أقل"
            : "We commit to responding to all inquiries within 24 hours or less"}
        </p>
      </div>
    </div>
  );
}
