"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import { useState } from "react"
import { ChevronDown, HelpCircle, Zap, Users, Lock } from "lucide-react"

export default function FAQsPage() {
  const { locale } = useLocale()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: locale === "ar" ? "ما هي خدمات التنظيف المتوفرة؟" : "What cleaning services do you offer?",
      answer:
        locale === "ar"
          ? "نقدم مجموعة شاملة من خدمات التنظيف بما في ذلك التنظيف اليومي، والتنظيف العميق، وتنظيف النوافذ والواجهات، وإدارة المنطقة الخارجية."
          : "We offer comprehensive cleaning services including daily cleaning, deep cleaning, window and facade cleaning, and outdoor area management.",
    },
    {
      question: locale === "ar" ? "هل توفرون خدمات الأمن؟" : "Do you provide security services?",
      answer:
        locale === "ar"
          ? "نعم، نوفر خدمات الأمن المسلح وغير المسلح، ومراقبة المنطقة، والدوريات الأمنية لضمان سلامة مرفقك."
          : "Yes, we provide armed and unarmed security services, area surveillance, and security patrols to ensure your facility's safety.",
    },
    {
      question: locale === "ar" ? "هل يمكن تخصيص الخدمات حسب احتياجاتي؟" : "Can services be customized to our needs?",
      answer:
        locale === "ar"
          ? "بالتأكيد، نتفهم أن كل عميل له احتياجات فريدة. نقدم حلولاً مخصصة مصممة خصيصاً لتلبية متطلبات عملك."
          : "Absolutely, we understand that each client has unique needs. We offer customized solutions tailored to your specific business requirements.",
    },
    {
      question: locale === "ar" ? "ما هي ساعات عمل الخدمة؟" : "What are your service hours?",
      answer:
        locale === "ar"
          ? "نحن نعمل على مدار 24 ساعة، 7 أيام في الأسبوع. يمكنك الاتصال بنا في أي وقت للحصول على الدعم الفوري والخدمات الطارئة."
          : "We operate 24/7. You can reach us anytime for immediate support and emergency services.",
    },
    {
      question: locale === "ar" ? "كيف يمكنني الحصول على عرض سعر؟" : "How can I get a quote?",
      answer:
        locale === "ar"
          ? "يمكنك الاتصال بنا عبر الهاتف أو البريد الإلكتروني أو ملء نموذج على موقعنا. سيقوم فريقنا بالاستجابة في غضون 24 ساعة."
          : "You can contact us via phone or email, or fill out a form on our website. Our team will respond within 24 hours.",
    },
    {
      question: locale === "ar" ? "هل توفرون ضمانات على جودة الخدمة؟" : "Do you provide guarantees on service quality?",
      answer:
        locale === "ar"
          ? "نعم، نلتزم بمعايير جودة عالية. إذا لم تكن راضياً عن الخدمة، سنعمل على تصحيح الموقف فوراً بدون رسوم إضافية."
          : "Yes, we maintain high quality standards. If you're unsatisfied with any service, we'll correct it immediately at no additional cost.",
    },
    {
      question: locale === "ar" ? "ما هي أسعار الخدمة؟" : "What are your service prices?",
      answer:
        locale === "ar"
          ? "الأسعار تعتمد على نوع الخدمة، حجم المرفق، والمتطلبات المحددة. نقدم عروض تنافسية مع أفضل قيمة مقابل المال."
          : "Pricing depends on service type, facility size, and specific requirements. We offer competitive rates with excellent value for money.",
    },
    {
      question: locale === "ar" ? "هل يمكنني الاستفسار عن خدمة معينة؟" : "Can I inquire about a specific service?",
      answer:
        locale === "ar"
          ? "بالتأكيد، يمكنك الاستفسار عن أي خدمة من خلال قسم الاتصال. فريقنا المتخصص سيجيب على جميع أسئلتك بالتفصيل."
          : "Of course, you can inquire about any service through our contact section. Our specialized team will answer all your questions in detail.",
    },
  ]

  const features = [
    {
      icon: HelpCircle,
      title: locale === "ar" ? "دعم سريع" : "Quick Support",
      description: locale === "ar" ? "احصل على إجابات فوراً" : "Get instant answers",
    },
    {
      icon: Zap,
      title: locale === "ar" ? "حلول فعالة" : "Efficient Solutions",
      description: locale === "ar" ? "حلول موثوقة وسريعة" : "Reliable and fast solutions",
    },
    {
      icon: Users,
      title: locale === "ar" ? "فريق متخصص" : "Expert Team",
      description: locale === "ar" ? "متخصصون في الخدمات" : "Service specialists",
    },
    {
      icon: Lock,
      title: locale === "ar" ? "ضمان الرضا" : "Satisfaction Guarantee",
      description: locale === "ar" ? "100% مضمونة" : "100% guaranteed",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-accent-emerald text-white py-24 md:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block mb-6 p-4 bg-white/10 rounded-full">
                <HelpCircle className="w-12 h-12" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-pretty">
                {locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
                {locale === "ar"
                  ? "ابحث عن إجابات شاملة لجميع أسئلتك حول خدماتنا المتميزة."
                  : "Find comprehensive answers to all your questions about our premium services."}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="text-center p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <Icon className="w-10 h-10 text-accent-orange mx-auto mb-3" />
                    <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-foreground-secondary">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl border border-border overflow-hidden hover:border-accent-orange transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary/2 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-orange transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-accent-orange flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-8 py-6 bg-gradient-to-r from-primary/5 to-accent-emerald/5 border-t border-border">
                      <p className="text-foreground-secondary leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 md:py-24 bg-gradient-to-r from-primary to-accent-emerald">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-pretty">
              {locale === "ar" ? "لم تجد إجابتك؟" : "Didn't Find Your Answer?"}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {locale === "ar"
                ? "فريقنا الماهر جاهز للمساعدة. تواصل معنا الآن للحصول على استشارة متخصصة."
                : "Our expert team is ready to help. Contact us now for specialized consultation."}
            </p>
            <a href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg">
                {locale === "ar" ? "اتصل بنا الآن" : "Contact Us Now"}
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
