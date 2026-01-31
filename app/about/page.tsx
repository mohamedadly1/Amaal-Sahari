"use client"

import { LocaleProvider } from "@/lib/locale-context"
import { useLocale } from "@/lib/locale-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, Zap, Users, Target, Heart, Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

function AboutPageContent() {
  const { locale } = useLocale()
  const isArabic = locale === "ar"
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const visionContent = {
    en: {
      title: "Our Vision",
      description:
        "To be the leading provider of integrated facility management solutions that transform workplaces into thriving ecosystems where employees flourish and businesses excel.",
      points: [
        "Create sustainable, healthy work environments",
        "Drive innovation in facility management",
        "Build lasting partnerships with our clients",
        "Empower our team to deliver excellence",
      ],
    },
    ar: {
      title: "رؤيتنا",
      description:
        "أن نكون المزود الرائد لحلول إدارة المرافق المتكاملة التي تحول أماكن العمل إلى نظم بيئية مزدهرة حيث يزدهر الموظفون وتتفوق الشركات.",
      points: [
        "إنشاء بيئات عمل مستدامة وصحية",
        "تحفيز الابتكار في إدارة المرافق",
        "بناء شراكات دائمة مع عملائنا",
        "تمكين فريقنا لتحقيق التميز",
      ],
    },
  }

  const missionContent = {
    en: {
      title: "Our Mission",
      description:
        "To deliver comprehensive, innovative facility management services that enhance productivity, comfort, and brand value while maintaining the highest standards of sustainability and employee wellbeing.",
      points: [
        "Deliver exceptional customer service",
        "Maintain highest safety and quality standards",
        "Promote environmental sustainability",
        "Foster a culture of continuous improvement",
      ],
    },
    ar: {
      title: "مهمتنا",
      description:
        "تقديم خدمات إدارة مرافق شاملة ومبتكرة تعزز الإنتاجية والراحة والقيمة التجارية مع الحفاظ على أعلى معايير الاستدامة وصحة الموظفين.",
      points: [
        "تقديم خدمة عملاء استثنائية",
        "الحفاظ على أعلى معايير السلامة والجودة",
        "تعزيز الاستدامة البيئية",
        "غرس ثقافة التحسين المستمر",
      ],
    },
  }

  const coreValues = {
    en: [
      {
        icon: Heart,
        title: "Care",
        description: "We genuinely care about our clients, employees, and the environment",
      },
      { icon: Zap, title: "Excellence", description: "We strive for excellence in everything we do" },
      { icon: Users, title: "Teamwork", description: "We believe in the power of collaboration and teamwork" },
      {
        icon: Globe,
        title: "Sustainability",
        description: "We are committed to sustainable and eco-friendly practices",
      },
    ],
    ar: [
      { icon: Heart, title: "الرعاية", description: "نهتم براعاية عملائنا وموظفينا والبيئة" },
      { icon: Zap, title: "التميز", description: "نسعى للتميز في كل ما نقوم به" },
      { icon: Users, title: "العمل الجماعي", description: "نؤمن بقوة التعاون والعمل الجماعي" },
      { icon: Globe, title: "الاستدامة", description: "نلتزم بالممارسات المستدامة والصديقة للبيئة" },
    ],
  }

  const vision = visionContent[isArabic ? "ar" : "en"]
  const mission = missionContent[isArabic ? "ar" : "en"]
  const values = coreValues[isArabic ? "ar" : "en"]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20 md:py-32 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {isArabic ? "عن أمال الصحاري" : "About Amaal Sahari"}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                {isArabic
                  ? "خدمات شاملة لإدارة المرافق توفر بيئات عمل متكاملة تعزز الإنتاجية والراحة"
                  : "Comprehensive facility management services providing integrated workplace solutions that enhance productivity and comfort"}
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} transition-all duration-1000`}>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-accent" />
                  <span className="text-accent font-semibold text-lg">{vision.title}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{vision.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{vision.description}</p>
                <ul className="space-y-4">
                  {vision.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-gray-700 group-hover:text-primary transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`${isVisible ? "animate-fade-in" : "opacity-0"} relative h-96 transition-all duration-1000 delay-200`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
                <Image
                  src="/images/vision-innovation.png"
                  alt="Vision - Innovation and Partnerships"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-background to-background/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className={`${isVisible ? "animate-fade-in" : "opacity-0"} relative h-96 transition-all duration-1000 delay-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl"></div>
                <Image
                  src="/images/mission-excellence.png"
                  alt="Mission - Excellence and Sustainability"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              <div
                className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} transition-all duration-1000 delay-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                  <span className="text-accent font-semibold text-lg">{mission.title}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{mission.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{mission.description}</p>
                <ul className="space-y-4">
                  {mission.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-gray-700 group-hover:text-primary transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 md:py-28 bg-background" ref={sectionRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {isArabic ? "قيمنا الأساسية" : "Our Core Values"}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {isArabic
                  ? "المبادئ التي توجه كل قرار وإجراء نتخذه"
                  : "The principles that guide every decision and action we take"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className={`group bg-white rounded-xl p-8 border border-border hover:shadow-xl transition-all duration-500 ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300">
                        <Icon className="w-8 h-8 text-accent group-hover:scale-125 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function AboutPage() {
  return (
    <LocaleProvider>
      <AboutPageContent />
    </LocaleProvider>
  )
}
