"use client"

import { useState, useEffect } from "react"
import { useContent } from "@/lib/content-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Save, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NavbarEditor() {
  const [navbarConfig, setNavbarConfig] = useState({
    logo: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amaal%20Sahari%20Web%20Logo-JeTkcT88yuJW3ZTgu8RnID1sBhHFbs.png",
      alt: "Amaal Sahari Logo",
      height: 48,
    },
    colors: {
      background: "#2F683E",
      text: "#FAFBF0",
      hover: "#FAB076",
      accent: "#EA8936",
    },
    navigation: {
      en: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/#services" },
        { label: "Projects", href: "/#projects" },
        { label: "Contact", href: "/contact" },
      ],
      ar: [
        { label: "الرئيسية", href: "/" },
        { label: "من نحن", href: "/about" },
        { label: "خدماتنا", href: "/#services" },
        { label: "مشاريعنا", href: "/#projects" },
        { label: "تواصل معنا", href: "/contact" },
      ],
    },
    cta: {
      en: "Get a Quote",
      ar: "احصل على عرض",
    },
  })

  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    localStorage.setItem("navbarConfig", JSON.stringify(navbarConfig))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Navigation Bar Editor</h2>
          <p className="text-muted-foreground">Control navbar appearance and navigation links</p>
        </div>
        <Button onClick={handleSave} className="gap-2">
          <Save className="w-4 h-4" />
          {saved ? "Saved!" : "Save Changes"}
        </Button>
      </div>

      <Alert>
        <AlertCircle className="w-4 h-4" />
        <AlertDescription>
          Changes to navbar configuration will affect the site&apos;s main navigation. Preview before deploying.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="links-en">Links (EN)</TabsTrigger>
          <TabsTrigger value="links-ar">Links (AR)</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Logo Settings</CardTitle>
              <CardDescription>Configure the navbar logo image and size</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="logo-url">Logo Image URL</Label>
                <Input
                  id="logo-url"
                  value={navbarConfig.logo.url}
                  onChange={(e) =>
                    setNavbarConfig({
                      ...navbarConfig,
                      logo: { ...navbarConfig.logo, url: e.target.value },
                    })
                  }
                  placeholder="https://..."
                />
              </div>
              <div>
                <Label htmlFor="logo-alt">Logo Alt Text</Label>
                <Input
                  id="logo-alt"
                  value={navbarConfig.logo.alt}
                  onChange={(e) =>
                    setNavbarConfig({
                      ...navbarConfig,
                      logo: { ...navbarConfig.logo, alt: e.target.value },
                    })
                  }
                  placeholder="Logo description"
                />
              </div>
              <div>
                <Label htmlFor="logo-height">Logo Height (px)</Label>
                <Input
                  id="logo-height"
                  type="number"
                  value={navbarConfig.logo.height}
                  onChange={(e) =>
                    setNavbarConfig({
                      ...navbarConfig,
                      logo: { ...navbarConfig.logo, height: parseInt(e.target.value) },
                    })
                  }
                  min="32"
                  max="128"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Call-to-Action Button</CardTitle>
              <CardDescription>Text shown on the "Get a Quote" button</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="cta-en">English</Label>
                <Input
                  id="cta-en"
                  value={navbarConfig.cta.en}
                  onChange={(e) =>
                    setNavbarConfig({
                      ...navbarConfig,
                      cta: { ...navbarConfig.cta, en: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="cta-ar">Arabic</Label>
                <Input
                  id="cta-ar"
                  value={navbarConfig.cta.ar}
                  onChange={(e) =>
                    setNavbarConfig({
                      ...navbarConfig,
                      cta: { ...navbarConfig.cta, ar: e.target.value },
                    })
                  }
                  dir="rtl"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Colors */}
        <TabsContent value="colors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Color Scheme</CardTitle>
              <CardDescription>Customize navbar colors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bg-color">Background Color</Label>
                  <div className="flex gap-2">
                    <input
                      id="bg-color"
                      type="color"
                      value={navbarConfig.colors.background}
                      onChange={(e) =>
                        setNavbarConfig({
                          ...navbarConfig,
                          colors: { ...navbarConfig.colors, background: e.target.value },
                        })
                      }
                      className="w-16 h-10 rounded cursor-pointer"
                    />
                    <Input
                      value={navbarConfig.colors.background}
                      onChange={(e) =>
                        setNavbarConfig({
                          ...navbarConfig,
                          colors: { ...navbarConfig.colors, background: e.target.value },
                        })
                      }
                      placeholder="#000000"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="text-color">Text Color</Label>
                  <div className="flex gap-2">
                    <input
                      id="text-color"
                      type="color"
                      value={navbarConfig.colors.text}
                      onChange={(e) =>
                        setNavbarConfig({
                          ...navbarConfig,
                          colors: { ...navbarConfig.colors, text: e.target.value },
                        })
                      }
                      className="w-16 h-10 rounded cursor-pointer"
                    />
                    <Input
                      value={navbarConfig.colors.text}
                      onChange={(e) =>
                        setNavbarConfig({
                          ...navbarConfig,
                          colors: { ...navbarConfig.colors, text: e.target.value },
                        })
                      }
                      placeholder="#FFFFFF"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="hover-color">Hover Color</Label>
                  <div className="flex gap-2">
                    <input
                      id="hover-color"
                      type="color"
                      value={navbarConfig.colors.hover}
                      onChange={(e) =>
                        setNavbarConfig({
                          ...navbarConfig,
                          colors: { ...navbarConfig.colors, hover: e.target.value },
                        })
                      }
                      className="w-16 h-10 rounded cursor-pointer"
                    />
                    <Input
                      value={navbarConfig.colors.hover}
                      onChange={(e) =>
                        setNavbarConfig({
                          ...navbarConfig,
                          colors: { ...navbarConfig.colors, hover: e.target.value },
                        })
                      }
                      placeholder="#FFA500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="accent-color">Accent Color</Label>
                  <div className="flex gap-2">
                    <input
                      id="accent-color"
                      type="color"
                      value={navbarConfig.colors.accent}
                      onChange={(e) =>
                        setNavbarConfig({
                          ...navbarConfig,
                          colors: { ...navbarConfig.colors, accent: e.target.value },
                        })
                      }
                      className="w-16 h-10 rounded cursor-pointer"
                    />
                    <Input
                      value={navbarConfig.colors.accent}
                      onChange={(e) =>
                        setNavbarConfig({
                          ...navbarConfig,
                          colors: { ...navbarConfig.colors, accent: e.target.value },
                        })
                      }
                      placeholder="#FF6B6B"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* English Links */}
        <TabsContent value="links-en" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Navigation Links (English)</CardTitle>
              <CardDescription>Manage English navigation menu items</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {navbarConfig.navigation.en.map((link, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-4 border-b pb-4">
                  <div>
                    <Label>Label</Label>
                    <Input
                      value={link.label}
                      onChange={(e) => {
                        const newNav = [...navbarConfig.navigation.en]
                        newNav[idx].label = e.target.value
                        setNavbarConfig({
                          ...navbarConfig,
                          navigation: { ...navbarConfig.navigation, en: newNav },
                        })
                      }}
                    />
                  </div>
                  <div>
                    <Label>URL</Label>
                    <Input
                      value={link.href}
                      onChange={(e) => {
                        const newNav = [...navbarConfig.navigation.en]
                        newNav[idx].href = e.target.value
                        setNavbarConfig({
                          ...navbarConfig,
                          navigation: { ...navbarConfig.navigation, en: newNav },
                        })
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Arabic Links */}
        <TabsContent value="links-ar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Navigation Links (Arabic)</CardTitle>
              <CardDescription>Manage Arabic navigation menu items</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {navbarConfig.navigation.ar.map((link, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-4 border-b pb-4">
                  <div>
                    <Label>Label</Label>
                    <Input
                      value={link.label}
                      onChange={(e) => {
                        const newNav = [...navbarConfig.navigation.ar]
                        newNav[idx].label = e.target.value
                        setNavbarConfig({
                          ...navbarConfig,
                          navigation: { ...navbarConfig.navigation, ar: newNav },
                        })
                      }}
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <Label>URL</Label>
                    <Input
                      value={link.href}
                      onChange={(e) => {
                        const newNav = [...navbarConfig.navigation.ar]
                        newNav[idx].href = e.target.value
                        setNavbarConfig({
                          ...navbarConfig,
                          navigation: { ...navbarConfig.navigation, ar: newNav },
                        })
                      }}
                      dir="rtl"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
