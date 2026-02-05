"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define content structure for editable sections
export interface SiteContent {
  hero: {
    videoUrl: string
    en: {
      tagline: string
      headline: string
      highlightedText: string
      subtitle: string
      ctaPrimary: string
      ctaSecondary: string
    }
    ar: {
      tagline: string
      headline: string
      highlightedText: string
      subtitle: string
      ctaPrimary: string
      ctaSecondary: string
    }
  }
  kpis: {
    items: Array<{
      id: string
      value: string
      en: { label: string }
      ar: { label: string }
    }>
  }
  testimonials: {
    items: Array<{
      id: string
      rating: number
      en: { quote: string; author: string; company: string }
      ar: { quote: string; author: string; company: string }
    }>
  }
  caseStudies: {
    items: Array<{
      id: string
      imageUrl: string
      en: { title: string; description: string; metrics: string }
      ar: { title: string; description: string; metrics: string }
    }>
  }
  contact: {
    email: string
    phone: string
    address: {
      en: string
      ar: string
    }
  }
}

// Default content pulled from the existing site
const defaultContent: SiteContent = {
  hero: {
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video_Generation_Based_on_Concept-BXqzVhY44Hicwtxk40zzShyS4UvRHY.mp4",
    en: {
      tagline: "OUR PREMIUM SERVICES",
      headline: "We Provide ",
      highlightedText: "Integrated Solutions",
      subtitle: "Comprehensive services to enhance your workplace environment and employee comfort",
      ctaPrimary: "Explore Services",
      ctaSecondary: "Get a Quote",
    },
    ar: {
      tagline: "خدماتنا المتميزة",
      headline: "نحن نقدم ",
      highlightedText: "حلولاً متكاملة",
      subtitle: "خدمات شاملة لتحسين بيئة عملك وراحة موظفيك",
      ctaPrimary: "استكشف الخدمات",
      ctaSecondary: "احصل على عرض سعر",
    },
  },
  kpis: {
    items: [
      { id: "1", value: "500+", en: { label: "Sites Served" }, ar: { label: "المواقع المخدومة" } },
      { id: "2", value: "10,000+", en: { label: "Monthly Inspections" }, ar: { label: "الفحوصات الشهرية" } },
      { id: "3", value: "2 hours", en: { label: "Avg Response Time" }, ar: { label: "متوسط وقت الاستجابة" } },
      { id: "4", value: "98%", en: { label: "Client Satisfaction" }, ar: { label: "رضا العملاء" } },
    ],
  },
  testimonials: {
    items: [
      {
        id: "1",
        rating: 5,
        en: {
          quote: "Exceptional service and professionalism. Our office has never looked better.",
          author: "Sarah Johnson",
          company: "Tech Innovations Inc.",
        },
        ar: {
          quote: "خدمة استثنائية واحترافية. لم يبدو مكتبنا أفضل من أي وقت مضى.",
          author: "سارة جونسون",
          company: "شركة الابتكارات التقنية",
        },
      },
      {
        id: "2",
        rating: 5,
        en: {
          quote: "Reliable, efficient, and truly care about our workspace. Highly recommended.",
          author: "Michael Chen",
          company: "Global Consulting Group",
        },
        ar: {
          quote: "موثوقة وفعالة وتهتم حقاً بمساحة عملنا. موصى به بشدة.",
          author: "مايكل تشن",
          company: "مجموعة الاستشارات العالمية",
        },
      },
      {
        id: "3",
        rating: 5,
        en: {
          quote: "Outstanding attention to detail and consistent quality. A true partner.",
          author: "Emma Rodriguez",
          company: "Premium Hospitality Co.",
        },
        ar: {
          quote: "اهتمام استثنائي بالتفاصيل وجودة متسقة. شريك حقيقي.",
          author: "إيما رودريغيز",
          company: "شركة الضيافة الممتازة",
        },
      },
    ],
  },
  caseStudies: {
    items: [
      {
        id: "1",
        imageUrl: "/placeholder.svg?height=400&width=600",
        en: {
          title: "Corporate Office Transformation",
          description: "Reduced cleaning complaints by 95% and improved employee satisfaction",
          metrics: "95% reduction in complaints",
        },
        ar: {
          title: "تحويل مكتب الشركة",
          description: "تقليل شكاوى التنظيف بنسبة 95% وتحسين رضا الموظفين",
          metrics: "تقليل 95% من الشكاوى",
        },
      },
      {
        id: "2",
        imageUrl: "/placeholder.svg?height=400&width=600",
        en: {
          title: "Hospitality Excellence",
          description: "Faster response times and improved guest experience ratings",
          metrics: "40% faster response time",
        },
        ar: {
          title: "تميز الضيافة",
          description: "أوقات استجابة أسرع وتحسين تقييمات تجربة الضيوف",
          metrics: "وقت استجابة أسرع بنسبة 40%",
        },
      },
      {
        id: "3",
        imageUrl: "/placeholder.svg?height=400&width=600",
        en: {
          title: "Facility Optimization",
          description: "Streamlined operations and cost savings through integrated services",
          metrics: "30% cost reduction",
        },
        ar: {
          title: "تحسين المرافق",
          description: "تبسيط العمليات وتوفير التكاليف من خلال الخدمات المتكاملة",
          metrics: "تقليل التكاليف بنسبة 30%",
        },
      },
    ],
  },
  contact: {
    email: "info@amaalsahari.com",
    phone: "+966 50 000 0000",
    address: {
      en: "Riyadh, Saudi Arabia",
      ar: "الرياض، المملكة العربية السعودية",
    },
  },
}

interface ContentContextType {
  content: SiteContent
  updateContent: (newContent: Partial<SiteContent>) => void
  updateHero: (hero: SiteContent["hero"]) => void
  updateKpis: (kpis: SiteContent["kpis"]) => void
  updateTestimonials: (testimonials: SiteContent["testimonials"]) => void
  updateCaseStudies: (caseStudies: SiteContent["caseStudies"]) => void
  updateContact: (contact: SiteContent["contact"]) => void
  resetToDefault: () => void
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

const STORAGE_KEY = "site_content"

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage on mount
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setContent({ ...defaultContent, ...parsed })
      } catch (e) {
        console.error("Failed to parse saved content:", e)
      }
    }
  }, [])

  const saveContent = (newContent: SiteContent) => {
    setContent(newContent)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent))
  }

  const updateContent = (newContent: Partial<SiteContent>) => {
    const updated = { ...content, ...newContent }
    saveContent(updated)
  }

  const updateHero = (hero: SiteContent["hero"]) => {
    saveContent({ ...content, hero })
  }

  const updateKpis = (kpis: SiteContent["kpis"]) => {
    saveContent({ ...content, kpis })
  }

  const updateTestimonials = (testimonials: SiteContent["testimonials"]) => {
    saveContent({ ...content, testimonials })
  }

  const updateCaseStudies = (caseStudies: SiteContent["caseStudies"]) => {
    saveContent({ ...content, caseStudies })
  }

  const updateContact = (contact: SiteContent["contact"]) => {
    saveContent({ ...content, contact })
  }

  const resetToDefault = () => {
    setContent(defaultContent)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <ContentContext.Provider
      value={{
        content,
        updateContent,
        updateHero,
        updateKpis,
        updateTestimonials,
        updateCaseStudies,
        updateContact,
        resetToDefault,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error("useContent must be used within ContentProvider")
  }
  return context
}
