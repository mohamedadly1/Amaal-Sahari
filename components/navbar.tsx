"use client"

import type React from "react"

import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { translations } from "@/lib/i18n"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import SocialMediaIcons from "./social-media-icons"

export default function Navbar() {
  const { locale, setLocale, dir } = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[locale]

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.contact, href: "/contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const sectionId = href.substring(2)
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setMobileMenuOpen(false)
      }
    }
  }

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#2F683E] text-[#FAFBF0] border-b border-[#2F683E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-10 sm:h-12 md:h-14 w-auto relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amaal%20Sahari%20Web%20Logo-JeTkcT88yuJW3ZTgu8RnID1sBhHFbs.png"
                  alt="Amaal Sahari Logo"
                  fill
                  className="object-contain"
                  loading="eager"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[#FAFBF0] hover:text-[#FAB076] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA8936] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop CTAs and Language Switcher */}
            <div className="hidden md:flex items-center gap-4">
              <SocialMediaIcons position="header" className="text-[#FAFBF0] border-r border-[#FAFBF0]/20 pr-4" />
              <Link href="/contact">
                <Button size="sm" className="bg-[#EA8936] hover:bg-[#FAB076] text-[#2F683E] font-semibold">
                  {t.nav.getQuote}
                </Button>
              </Link>
              <button
                onClick={() => setLocale(locale === "en" ? "ar" : "en")}
                className="ml-4 px-3 py-1 rounded-full border border-[#FAFBF0]/30 hover:bg-[#FAFBF0]/10 transition-colors text-[#FAFBF0]"
              >
                {locale === "en" ? "العربية" : "English"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setLocale(locale === "en" ? "ar" : "en")}
                className="px-2 py-1 text-sm rounded border border-[#FAFBF0]/30 text-[#FAFBF0]"
              >
                {locale === "en" ? "AR" : "EN"}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#FAFBF0]">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden bg-[#2F683E] border-t border-[#FAFBF0]/10 animate-in slide-in-from-${dir === "rtl" ? "right" : "left"}`}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-2 text-[#FAFBF0] hover:bg-[#3EB249]/20 rounded transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#FAFBF0]/10">
                <Link href="/contact" className="block">
                  <Button className="w-full bg-[#EA8936] hover:bg-[#FAB076] text-[#2F683E] font-semibold">
                    {t.nav.getQuote}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
