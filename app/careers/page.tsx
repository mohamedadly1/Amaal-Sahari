"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import { useContent } from "@/lib/content-context"
import { ArrowRight, Mail, MapPin, Briefcase } from "lucide-react"

export default function CareersPage() {
  const { locale } = useLocale()
  const { content } = useContent()
  const isArabic = locale === "ar"

  const positions = content.careers.positions.map((position) => ({
    title: isArabic ? position.ar.title : position.en.title,
    department: isArabic ? position.ar.department : position.en.department,
    location: isArabic ? position.ar.location : position.en.location,
    description: isArabic ? position.ar.description : position.en.description,
  }))

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent-emerald/50 text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {locale === "ar" ? "انضم إلى فريقنا" : "Join Our Team"}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {locale === "ar"
                ? "نحن نبحث عن مواهب متميزة للانضمام إلى فريقنا المتنامي والمساهمة في نجاحنا."
                : "We're looking for talented individuals to join our growing team and contribute to our success."}
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">
              {locale === "ar" ? "الوظائف المتاحة" : "Open Positions"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Briefcase className="w-8 h-8 text-accent-orange" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{position.title}</h3>
                  <div className="space-y-2 mb-4 text-sm text-foreground-secondary">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{position.department}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </p>
                  </div>
                  <p className="text-foreground-secondary mb-6">{position.description}</p>
                  <Button className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white">
                    {locale === "ar" ? "تقديم طلب" : "Apply Now"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              {locale === "ar" ? "لم تجد الوظيفة المناسبة؟" : "Don't See Your Position?"}
            </h2>
            <p className="text-xl text-foreground-secondary mb-8">
              {locale === "ar"
                ? "أرسل لنا سيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة."
                : "Send us your resume and we'll reach out when a suitable opportunity arises."}
            </p>
            <a href="mailto:careers@amaalsahari.com">
              <Button className="bg-accent-orange hover:bg-accent-orange/90 text-white">
                <Mail className="mr-2 w-5 h-5" />
                {locale === "ar" ? "أرسل سيرتك الذاتية" : "Send Your Resume"}
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
