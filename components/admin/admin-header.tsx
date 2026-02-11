"use client"

import { useAdmin } from "@/lib/admin-context"
import { Button } from "@/components/ui/button"
import { LogOut, RotateCcw, Home } from "lucide-react"
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
import Link from "next/link"

export default function AdminHeader() {
  const { logout } = useAdmin()
  const { resetToDefault } = useContent()

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            AS
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">Amaal Sahari Admin</h1>
            <p className="text-xs text-muted-foreground">Content Management System</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reset all content?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will reset all content to default values. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={resetToDefault} className="bg-destructive">
                  Reset
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Button variant="outline" size="sm" asChild>
            <a href="/" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Home className="w-4 h-4" />
              View Site
            </a>
          </Button>

          <Button variant="destructive" size="sm" onClick={logout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
