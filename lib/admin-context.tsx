"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Embedded admin credentials (in production, use environment variables)
const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "amaal2024"

interface AdminContextType {
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if already logged in from session
    const session = sessionStorage.getItem("admin_session")
    if (session === "authenticated") {
      setIsAuthenticated(true)
    }
  }, [])

  const login = (username: string, password: string): boolean => {
    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()
    
    if (trimmedUsername === ADMIN_USERNAME && trimmedPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem("admin_session", "authenticated")
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("admin_session")
  }

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider")
  }
  return context
}
