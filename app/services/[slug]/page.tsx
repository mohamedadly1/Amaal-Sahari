"use client"

import { useParams } from "next/navigation"
import { useLocale } from "@/lib/locale-context"
import { servicesContent } from "@/lib/services-content"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug as string
  const { locale } = useLocale()

  const content = servicesContent[locale]?.[slug as keyof typeof content]

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-foreground-secondary mb-8">The service you're looking for doesn't exist.</p>
          <Button>Go Back Home</Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent-emerald/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{content.title}</h1>
            <p className="text-xl text-foreground-secondary max-w-3xl whitespace-pre-line">{content.overview}</p>
          </div>
        </section>

        {/* Service Delivery */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">{content.serviceDelivery.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.serviceDelivery.items.map((item, index) => (
                <div key={index} className="bg-background-secondary rounded-lg p-6 border border-border">
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 md:py-24 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">{content.coreServices.title}</h2>
            <div className="space-y-8">
              {content.coreServices.items.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-8 border border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex gap-3">
                        <span className="text-accent-emerald font-bold flex-shrink-0">•</span>
                        <span className="text-foreground-secondary">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today to discuss how we can support your facility needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent-emerald hover:bg-accent-emerald/90 text-white">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
