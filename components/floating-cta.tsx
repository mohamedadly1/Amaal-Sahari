"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {isOpen && (
          <>
            <a
              href="https://wa.me/201021454545"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-accent-emerald text-white rounded-full shadow-lg hover:bg-accent-emerald/90 transition-all animate-in slide-in-from-bottom"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all"
        >
          {isOpen ? <span className="text-2xl">×</span> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </>
  )
}
