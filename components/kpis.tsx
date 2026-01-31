"use client"

import { useLocale } from "@/lib/locale-context"
import { translations } from "@/lib/i18n"
import AnimatedCounter from "./animated-counter"
import ScrollFade from "./scroll-fade"

export default function KPIs() {
  const { locale } = useLocale()
  const t = translations[locale].sections.kpis

  return (
    <section className="py-16 md:py-24 bg-[#2F683E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFade>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">{t.title}</h2>
        </ScrollFade>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.items.map((kpi, index) => (
            <ScrollFade key={index} delay={index * 100}>
              <AnimatedCounter value={kpi.value} label={kpi.label} />
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}
