"use client"

import { useLocale } from "@/lib/locale-context"
import { translations } from "@/lib/i18n"

export default function TermsOfService() {
  const { locale } = useLocale()
  const t = translations[locale]

  const isArabic = locale === "ar"

  return (
    <main className="min-h-screen bg-[#FAFBF0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2F683E] to-[#1a3a24] text-[#FAFBF0] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {isArabic ? "شروط الخدمة" : "Terms of Service"}
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
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "1. قبول الشروط" : "1. Acceptance of Terms"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "باستخدام موقع Amaal Sahari، فإنك توافق على الامتثال لهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام موقعنا."
                : "By using the Amaal Sahari website, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "2. الاستخدام المسموح به" : "2. Permitted Use"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              {isArabic
                ? "أنت توافق على استخدام موقعنا فقط للأغراض القانونية وبطريقة لا تنتهك حقوق الآخرين."
                : "You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others."}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {isArabic ? "يحظر على وجه التحديد:" : "Specifically prohibited:"}
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 mt-3">
              <li>• {isArabic ? "الأنشطة غير القانونية" : "Illegal activities"}</li>
              <li>• {isArabic ? "الإزعاج أو التحرش" : "Harassment or abuse"}</li>
              <li>• {isArabic ? "نشر محتوى ضار" : "Publishing harmful content"}</li>
              <li>• {isArabic ? "محاولات الاختراق" : "Hacking attempts"}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "3. الملكية الفكرية" : "3. Intellectual Property"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "جميع المحتوى على موقعنا، بما في ذلك النصوص والصور والشعارات، محمي بحقوق الملكية الفكرية. لا يمكنك استخدام هذا المحتوى دون إذن صريح."
                : "All content on our website, including text, images, and logos, is protected by intellectual property rights. You cannot use this content without explicit permission."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "4. تقديم الخدمات" : "4. Service Delivery"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "نحن نلتزم بتقديم خدمات عالية الجودة. ومع ذلك، لا نضمن أن الخدمات ستكون خالية من الأخطاء أو الانقطاعات."
                : "We are committed to providing high-quality services. However, we do not guarantee that services will be error-free or uninterrupted."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "5. تحديد المسؤولية" : "5. Limitation of Liability"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "في أي حال من الأحوال، لن تكون Amaal Sahari مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية."
                : "In no event shall Amaal Sahari be liable for any indirect, incidental, special, or consequential damages."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "6. تعديل الشروط" : "6. Modification of Terms"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية."
                : "We reserve the right to modify these terms at any time. You will be notified of any material changes."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">
              {isArabic ? "7. القانون الحاكم" : "7. Governing Law"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "تخضع هذه الشروط للقوانين المصرية. أي نزاع ينشأ من هذه الشروط يجب أن يُحل في المحاكم المصرية."
                : "These terms are governed by Egyptian law. Any disputes arising from these terms shall be resolved in Egyptian courts."}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2F683E] mb-4">{isArabic ? "8. الاتصال بنا" : "8. Contact Us"}</h2>
            <p className="text-gray-700 leading-relaxed">
              {isArabic
                ? "إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:"
                : "If you have any questions about these Terms of Service, please contact us:"}
            </p>
            <div className="mt-4 p-4 bg-[#2F683E]/10 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@amaalsahari.com
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
