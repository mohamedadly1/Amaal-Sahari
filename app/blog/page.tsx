"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import { ArrowRight, Calendar, User } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const { locale } = useLocale()

  const posts = [
    {
      id: 1,
      title: locale === "ar" ? "أهمية النظافة في مكان العمل" : "The Importance of Cleanliness in the Workplace",
      excerpt:
        locale === "ar"
          ? "تعرف على كيفية تحسين بيئة العمل من خلال الحفاظ على معايير النظافة العالية."
          : "Learn how to improve your workplace environment by maintaining high cleanliness standards.",
      date: "2025-01-15",
      author: locale === "ar" ? "أحمد محمد" : "Ahmed Mohamed",
      category: locale === "ar" ? "النظافة" : "Cleanliness",
      image: "/images/office-cleaning.png",
    },
    {
      id: 2,
      title: locale === "ar" ? "استراتيجيات إدارة النفايات المستدامة" : "Sustainable Waste Management Strategies",
      excerpt:
        locale === "ar"
          ? "استكشف أفضل الممارسات لإدارة النفايات بطريقة صديقة للبيئة وفعالة."
          : "Explore best practices for managing waste in an eco-friendly and cost-effective manner.",
      date: "2025-01-10",
      author: locale === "ar" ? "فاطمة علي" : "Fatima Ali",
      category: locale === "ar" ? "البيئة" : "Environment",
      image: "/images/recycling-waste-management.png",
    },
    {
      id: 3,
      title: locale === "ar" ? "الأمن والسلامة في المرافق التجارية" : "Security and Safety in Commercial Facilities",
      excerpt:
        locale === "ar"
          ? "نصائح مهمة لتحسين الأمن والسلامة في مرافقك التجارية."
          : "Important tips for enhancing security and safety in your commercial facilities.",
      date: "2025-01-05",
      author: locale === "ar" ? "محمود أحمد" : "Mahmoud Ahmed",
      category: locale === "ar" ? "الأمن" : "Security",
      image: "/images/security-professional.png",
    },
    {
      id: 4,
      title: locale === "ar" ? "الخدمات الفندقية ذات الجودة العالية" : "High-Quality Hospitality Services",
      excerpt:
        locale === "ar"
          ? "كيفية توفير خدمات فندقية متميزة لضيوفك وموظفيك."
          : "How to provide exceptional hospitality services to your guests and employees.",
      date: "2024-12-28",
      author: locale === "ar" ? "ليلى محمود" : "Layla Mahmoud",
      category: locale === "ar" ? "الخدمات الفندقية" : "Hospitality",
      image: "/images/business-meeting.png",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent-emerald/50 text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{locale === "ar" ? "مدونتنا" : "Our Blog"}</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {locale === "ar"
                ? "اقرأ أحدث المقالات والأفكار حول الخدمات المتميزة والممارسات الفضلى."
                : "Read the latest articles and insights on premium services and best practices."}
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{post.title}</h3>
                    <p className="text-foreground-secondary mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-foreground-secondary mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US")}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white">
                      {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
