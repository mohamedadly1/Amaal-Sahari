"use client"

import type React from "react"
import { AdminProvider } from "@/lib/admin-context"
import { ContentProvider } from "@/lib/content-context"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <ContentProvider>
        <div className="min-h-screen bg-muted/30">
          {children}
        </div>
      </ContentProvider>
    </AdminProvider>
  )
}
