"use client"

import { useLocale } from "@/lib/locale-context"
import { translations } from "@/lib/i18n"
import Link from "next/link"

export default function Footer() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <footer className="bg-[#2F683E] text-[#FAFBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 py-8 border-b border-[#FAFBF0]/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-[#FAFBF0]/80">{locale === "ar" ? "المواقع المخدومة" : "Sites Served"}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10,000+</div>
              <p className="text-[#FAFBF0]/80">{locale === "ar" ? "الفحوصات الشهرية" : "Monthly Inspections"}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                2 {locale === "ar" ? "ساعة" : "hours"}
              </div>
              <p className="text-[#FAFBF0]/80">{locale === "ar" ? "متوسط وقت الاستجابة" : "Avg Response Time"}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
              <p className="text-[#FAFBF0]/80">{locale === "ar" ? "رضا العملاء" : "Client Satisfaction"}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm text-[#FAFBF0]/80">
              <li>
                <Link href="/about" className="hover:text-[#EA8936] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#EA8936] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#EA8936] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2 text-sm text-[#FAFBF0]/80">
              <li>
                <Link href="/services/housekeeping-janitorial" className="hover:text-[#EA8936] transition-colors">
                  Housekeeping
                </Link>
              </li>
              <li>
                <Link href="/services/hospitality-services" className="hover:text-[#EA8936] transition-colors">
                  Hospitality
                </Link>
              </li>
              <li>
                <Link href="/services/manned-security" className="hover:text-[#EA8936] transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t.footer.resources}</h3>
            <ul className="space-y-2 text-sm text-[#FAFBF0]/80">
              <li>
                <Link href="/faqs" className="hover:text-[#EA8936] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#EA8936] transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#EA8936] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-2 text-sm text-[#FAFBF0]/80">
              <li>
                Phone:{" "}
                <a href="tel:+201021454545" className="hover:text-[#EA8936] transition-colors">
                  +201021454545
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:info@softservices.com" className="hover:text-[#EA8936] transition-colors">
                  info@softservices.com
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/201021454545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EA8936] transition-colors"
                >
                  +201021454545
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FAFBF0]/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#FAFBF0]/60">
          <p>&copy; 2025 Amaal Sahari. {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#FAFBF0] transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-[#FAFBF0] transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
