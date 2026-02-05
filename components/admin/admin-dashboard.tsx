"use client"

import { useState } from "react"
import { useAdmin } from "@/lib/admin-context"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  LogOut,
  Home,
  BarChart3,
  MessageSquare,
  Briefcase,
  Phone,
  Settings,
  RotateCcw,
  Wrench,
  Info,
  FileText,
  Users,
  HelpCircle,
  Layout
} from "lucide-react"
import HeroEditor from "./editors/hero-editor"
import KpisEditor from "./editors/kpis-editor"
import TestimonialsEditor from "./editors/testimonials-editor"
import CaseStudiesEditor from "./editors/case-studies-editor"
import ContactEditor from "./editors/contact-editor"
import ServicesEditor from "./editors/services-editor"
import ValueHighlightsEditor from "./editors/value-highlights-editor"
import WhyChooseUsEditor from "./editors/why-choose-us-editor"
import AboutEditor from "./editors/about-editor"
import BlogEditor from "./editors/blog-editor"
import CareersEditor from "./editors/careers-editor"
import FAQsEditor from "./editors/faqs-editor"
import FooterContactEditor from "./editors/footer-editor"
import { useContent } from "@/lib/content-context"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function AdminDashboard() {
  const { logout } = useAdmin()
  const { resetToDefault } = useContent()
  const [activeTab, setActiveTab] = useState("hero")

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Amaal Sahari Admin</h1>
              <p className="text-xs text-muted-foreground">Content Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset to Default
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Reset all content?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will reset all content to the default values. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={resetToDefault}>Reset</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button variant="outline" size="sm" asChild>
              <a href="/" target="_blank" rel="noopener noreferrer">
                View Site
              </a>
            </Button>
            <Button variant="destructive" size="sm" onClick={logout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
<Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
  <ScrollArea className="w-full whitespace-nowrap rounded-md border">
    <TabsList className="inline-flex w-max p-1">
      <TabsTrigger value="hero" className="flex items-center gap-2">
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">Hero</span>
      </TabsTrigger>
      <TabsTrigger value="services" className="flex items-center gap-2">
        <Wrench className="w-4 h-4" />
        <span className="hidden sm:inline">Services</span>
      </TabsTrigger>
      <TabsTrigger value="kpis" className="flex items-center gap-2">
        <BarChart3 className="w-4 h-4" />
        <span className="hidden sm:inline">KPIs</span>
      </TabsTrigger>
      <TabsTrigger value="testimonials" className="flex items-center gap-2">
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">Testimonials</span>
      </TabsTrigger>
      <TabsTrigger value="case-studies" className="flex items-center gap-2">
        <Briefcase className="w-4 h-4" />
        <span className="hidden sm:inline">Case Studies</span>
      </TabsTrigger>
      <TabsTrigger value="about" className="flex items-center gap-2">
        <Info className="w-4 h-4" />
        <span className="hidden sm:inline">About</span>
      </TabsTrigger>
      <TabsTrigger value="blog" className="flex items-center gap-2">
        <FileText className="w-4 h-4" />
        <span className="hidden sm:inline">Blog</span>
      </TabsTrigger>
      <TabsTrigger value="careers" className="flex items-center gap-2">
        <Users className="w-4 h-4" />
        <span className="hidden sm:inline">Careers</span>
      </TabsTrigger>
      <TabsTrigger value="faqs" className="flex items-center gap-2">
        <HelpCircle className="w-4 h-4" />
        <span className="hidden sm:inline">FAQs</span>
      </TabsTrigger>
      <TabsTrigger value="contact" className="flex items-center gap-2">
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Contact</span>
      </TabsTrigger>
      <TabsTrigger value="footer" className="flex items-center gap-2">
        <Layout className="w-4 h-4" />
        <span className="hidden sm:inline">Footer</span>
      </TabsTrigger>
    </TabsList>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>

  <TabsContent value="hero" className="space-y-4">
    <HeroEditor />
  </TabsContent>

  <TabsContent value="services" className="space-y-4">
    <ServicesEditor />
  </TabsContent>

  <TabsContent value="kpis" className="space-y-4">
    <KpisEditor />
  </TabsContent>

  <TabsContent value="testimonials" className="space-y-4">
    <TestimonialsEditor />
  </TabsContent>

  <TabsContent value="case-studies" className="space-y-4">
    <CaseStudiesEditor />
  </TabsContent>

  <TabsContent value="about" className="space-y-4">
    <AboutEditor />
  </TabsContent>

  <TabsContent value="blog" className="space-y-4">
    <BlogEditor />
  </TabsContent>

  <TabsContent value="careers" className="space-y-4">
    <CareersEditor />
  </TabsContent>

  <TabsContent value="faqs" className="space-y-4">
    <FAQsEditor />
  </TabsContent>

  <TabsContent value="contact" className="space-y-4">
    <ContactEditor />
  </TabsContent>

  <TabsContent value="footer" className="space-y-4">
    <FooterContactEditor />
  </TabsContent>
</Tabs>
      </main>
    </div>
  )
}
