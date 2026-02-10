"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import ValueHighlights from "@/components/value-highlights"
import ServicesCarousel from "@/components/services-carousel"
import WhyChooseUs from "@/components/why-choose-us"
import CaseStudies from "@/components/case-studies"
import Testimonials from "@/components/testimonials"
import ServicesVideoSection from "@/components/services-video-section"
import KPIs from "@/components/kpis"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="about">
          <ValueHighlights />
        </div>
        <ServicesVideoSection />
        <KPIs />
        <ServicesCarousel />
        <div id="projects">
          <WhyChooseUs />
          <CaseStudies />
        </div>
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
