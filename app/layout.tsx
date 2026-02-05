import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import { LocaleProvider } from "@/lib/locale-context"
import { ContentProvider } from "@/lib/content-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-arabic" })

export const metadata: Metadata = {
  title: "Amaal Sahari - Professional Soft Services",
  description:
    "Premium soft services including housekeeping, hospitality, landscaping, pest control, and security solutions",
  generator: "v0.app",
  openGraph: {
    title: "Amaal Sahari - Professional Soft Services",
    description: "Premium soft services for modern workplaces",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2F683E" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased`}>
        <LocaleProvider>
          <ContentProvider>{children}</ContentProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
