"use client"

import { useLocale } from "@/lib/locale-context"
import { translations } from "@/lib/i18n"
import { useContent } from "@/lib/content-context"
import { Star } from "lucide-react"
import ScrollFade from "./scroll-fade"
import Image from "next/image"

export default function Testimonials() {
  const { locale } = useLocale()
  const t = translations[locale].sections.testimonials
  const { content } = useContent()

  const avatars = ["/images/sarah-johnson.png", "/images/michael-chen.png", "/images/emma-rodriguez.png"]

  // Use content from context for dynamic testimonials
  const testimonialItems = content.testimonials.items.map((item, index) => ({
    quote: item[locale].quote,
    author: item[locale].author,
    company: item[locale].company,
    rating: item.rating,
    avatar: avatars[index] || "/placeholder.svg",
  }))

  return (
    <section className="py-16 md:py-24 bg-[#FAFBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFade>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F683E] mb-12 text-center">{t.title}</h2>
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialItems.map((testimonial, index) => (
            <ScrollFade key={index} delay={index * 100}>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-[#EA8936]/20 hover:shadow-md transition-all hover:border-[#EA8936] group">
                <div className="flex gap-1 mb-4 justify-center">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#EA8936] text-[#EA8936] group-hover:scale-110 transition-transform"
                    />
                  ))}
                </div>
                <p className="text-black mb-6 italic text-center">{`"${testimonial.quote}"`}</p>
                <div className="flex items-center gap-3 justify-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2F683E]">{testimonial.author}</p>
                    <p className="text-sm text-black">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}
