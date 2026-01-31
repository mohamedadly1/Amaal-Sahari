"use client"
import { useState, useRef, useEffect } from "react"
import { useLocale } from "@/lib/locale-context"
import { translations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import ScrollFade from "./scroll-fade"
import Link from "next/link"
import Image from "next/image"

const serviceImages: Record<string, string> = {
  "housekeeping-janitorial": "/images/housekeeping-janitorial.png",
  "hospitality-services": "/images/hospitality-services.png",
  "landscaping-plants": "/images/landscaping-plants.png",
  "pest-control": "/images/pest-control-outdoor.png",
  "facade-cleaning": "/images/facade-cleaning.png",
  "waste-management": "/images/waste-management.png",
  "manned-security": "/images/manned-security.png",
}

const serviceSlugMap: Record<string, string> = {
  "Housekeeping & Janitorial": "housekeeping-janitorial",
  "Hospitality Services": "hospitality-services",
  "Landscaping & Plants": "landscaping-plants",
  "Pest Control": "pest-control",
  "Façade Cleaning": "facade-cleaning",
  "Waste Management": "waste-management",
  "Manned Security": "manned-security",
}

export default function ServicesCarousel() {
  const { locale } = useLocale()
  const t = translations[locale].sections.services
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (!isAutoPlay) return

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % t.items.length)
    }, 5000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlay, t.items.length])

  const handlePrev = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + t.items.length) % t.items.length)
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % t.items.length)
  }

  const handleMouseEnter = () => setIsAutoPlay(false)
  const handleMouseLeave = () => setIsAutoPlay(true)

  const visibleServices = [
    t.items[(currentIndex - 1 + t.items.length) % t.items.length],
    t.items[currentIndex],
    t.items[(currentIndex + 1) % t.items.length],
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FAFBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFade>
          <div className="text-center mb-16">
            <p className="text-[#EA8936] font-semibold mb-2 uppercase tracking-wider">
              {locale === "ar" ? "خدماتنا" : "OUR SERVICES"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F683E] mb-4">{t.title}</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </ScrollFade>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-[#FAFBF0] rounded-full p-3 hover:bg-[#EA8936] transition-colors"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 text-[#2F683E]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-[#FAFBF0] rounded-full p-3 hover:bg-[#EA8936] transition-colors"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 text-[#2F683E]" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            {visibleServices.map((service, idx) => {
              const isCenter = idx === 1
              const slug = serviceSlugMap[service.title] || service.title.toLowerCase().replace(/\s+/g, "-")
              const imageUrl = serviceImages[slug] || "/images/landscaping-plants.png"

              return (
                <ScrollFade key={`${currentIndex}-${idx}`}>
                  <div
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                      isCenter
                        ? "md:scale-105 md:shadow-2xl ring-2 ring-[#EA8936]"
                        : "opacity-60 md:opacity-100 md:scale-95"
                    }`}
                  >
                    <div className="relative h-96 md:h-[500px] w-full overflow-hidden group">
                      <Image
                        src={imageUrl || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <p className="text-[#EA8936] font-semibold text-sm uppercase tracking-wider mb-2">
                          {locale === "ar" ? "الخدمات" : "SERVICES"}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{service.title}</h3>
                        <p className="text-white mb-4 line-clamp-2">{service.description}</p>

                        <Link href={`/services/${slug}`}>
                          <Button className="bg-[#EA8936] hover:bg-[#EA8936]/90 text-white w-fit font-semibold">
                            {locale === "ar" ? "عرض الخدمة" : "View Service"}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollFade>
              )
            })}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {t.items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlay(false)
                  setCurrentIndex(idx)
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-[#EA8936] w-8" : "bg-[#2F683E]/40 w-2 hover:bg-[#2F683E]/60"
                }`}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
