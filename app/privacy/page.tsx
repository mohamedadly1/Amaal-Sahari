"use client"

import { useLocale } from "@/lib/locale-context"
import { translations } from "@/lib/i18n"

export default function PrivacyPolicy() {
  const { locale } = useLocale()
  const t = translations[locale]

  const isArabic = locale === "ar"

  return (
    <main className="min-h-screen bg-[#FAFBF0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2F683E] to-[#1a3a24] text-[#FAFBF0] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>
          <p className="text-lg text-[#FAFBF0]/80">
            {isArabic ? "آخر تحديث: نوفمبر 2025" : "Last Updated: November 2025"}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`space-y-8 ${isArabic ? "text-right" : "text-left"}`}>
          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">{isArabic ? "1. مقدمة" : "1. Introduction"}</h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "في شركة Amaal Sahari، نحن ملتزمون بحماية خصوصيتك. تشرح سياسة الخصوصية هذه كيف نجمع ونستخدم ونحمي معلوماتك الشخصية."
                : "At Amaal Sahari, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "2. المعلومات التي نجمعها" : "2. Information We Collect"}
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#EA8936] font-bold">•</span>
                <span>
                  {isArabic
                    ? "معلومات التواصل: الاسم والبريد الإلكتروني ورقم الهاتف"
                    : "Contact Information: Name, email address, and phone number"}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#EA8936] font-bold">•</span>
                <span>
                  {isArabic
                    ? "معلومات الشركة: اسم الشركة والموقع والعنوان"
                    : "Company Information: Company name, location, and address"}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#EA8936] font-bold">•</span>
                <span>
                  {isArabic
                    ? "معلومات الاستخدام: بيانات حول كيفية استخدامك لموقعنا"
                    : "Usage Information: Data about how you use our website"}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "3. كيف نستخدم معلوماتك" : "3. How We Use Your Information"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              {isArabic ? "نستخدم المعلومات التي نجمعها لـ:" : "We use the information we collect to:"}
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• {isArabic ? "توفير وتحسين خدماتنا" : "Provide and improve our services"}</li>
              <li>• {isArabic ? "التواصل معك بشأن طلباتك" : "Communicate with you about your requests"}</li>
              <li>• {isArabic ? "إرسال التحديثات والعروض الخاصة" : "Send updates and special offers"}</li>
              <li>• {isArabic ? "الامتثال للقوانين والأنظمة" : "Comply with legal obligations"}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "4. حماية البيانات" : "4. Data Protection"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "نطبق تدابير أمان صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به والكشف والتعديل والتدمير."
                : "We implement strict security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "5. ملفات تعريف الارتباط" : "5. Cookies"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك."
                : "Our website uses cookies to improve your experience. You can control cookie settings through your browser."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">{isArabic ? "6. حقوقك" : "6. Your Rights"}</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              {isArabic ? "لديك الحق في:" : "You have the right to:"}
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• {isArabic ? "الوصول إلى بيانات شخصيتك" : "Access your personal data"}</li>
              <li>• {isArabic ? "طلب حذف بيانات شخصيتك" : "Request deletion of your personal data"}</li>
              <li>• {isArabic ? "تصحيح المعلومات غير الدقيقة" : "Correct inaccurate information"}</li>
              <li>• {isArabic ? "الاعتراض على معالجة بيانات شخصيتك" : "Object to the processing of your data"}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">{isArabic ? "7. الاتصال بنا" : "7. Contact Us"}</h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:"
                : "If you have any questions about this Privacy Policy, please contact us:"}
            </p>
            <div className="mt-4 p-4 bg-[#2F683E]/10 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@amaalsahari.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +201021454545
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
