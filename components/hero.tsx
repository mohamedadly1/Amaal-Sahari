"use client"

import { useLocale } from "@/lib/locale-context"
import { translations } from "@/lib/i18n"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Hero() {
  const { locale } = useLocale()
  const t = translations[locale]
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const handleExploreServices = () => {
    const servicesElement = document.getElementById("services")
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleGetQuote = () => {
    // router.push("/contact")
  }

  return (
    <section ref={ref} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video_Generation_Based_on_Concept-BXqzVhY44Hicwtxk40zzShyS4UvRHY.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent-emerald font-semibold mb-4 uppercase tracking-wider text-sm md:text-base"
        >
          {locale === "ar" ? "خدماتنا المتميزة" : "OUR PREMIUM SERVICES"}
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight"
        >
          {locale === "ar" ? (
            <>
              <span className="text-background">نحن نقدم </span>
              <span className="text-accent-orange">حلولاً متكاملة</span>
            </>
          ) : (
            <>
              <span className="text-background">We Provide </span>
              <span className="text-accent-orange">Integrated Solutions</span>
            </>
          )}
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl mx-auto">
          {locale === "ar"
            ? "خدمات شاملة لتحسين بيئة عملك وراحة موظفيك"
            : "Comprehensive services to enhance your workplace environment and employee comfort"}
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={handleExploreServices}
            className="px-8 py-3 bg-accent-orange text-white font-semibold rounded-lg hover:bg-accent-orange/90 transition-colors"
          >
            {locale === "ar" ? "استكشف الخدمات" : "Explore Services"}
          </button>
          <button
            onClick={handleGetQuote}
            className="px-8 py-3 bg-background text-foreground font-semibold rounded-lg hover:bg-accent-orange hover:text-white transition-colors"
          >
            {locale === "ar" ? "احصل على عرض سعر" : "Get a Quote"}
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
