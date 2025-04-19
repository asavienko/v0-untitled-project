"use client"

import { useEffect, useState } from "react"
import type React from "react"
import { TRANSITIONS, ANIMATIONS } from "@/constants/ui-constants"
import { X } from "lucide-react"

interface ModalLayoutProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export function ModalLayout({ isOpen, onClose, title, subtitle, children, footer }: ModalLayoutProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 sm:p-0"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 ${TRANSITIONS.DEFAULT}`} onClick={onClose}></div>

      {/* Modal */}
      <div
        className={`relative w-full max-w-lg transform rounded-xl bg-white shadow-2xl ${TRANSITIONS.DEFAULT} ${
          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Close button */}
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <X size={20} />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-0">
          <h2 className={`text-2xl font-bold text-gray-900 ${ANIMATIONS.SLIDE_UP}`} id="modal-title">
            {title}
          </h2>
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>

        {/* Content */}
        <div className="px-6 py-4">{children}</div>

        {/* Footer */}
        {footer && <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 rounded-b-xl">{footer}</div>}
      </div>
    </div>
  )
}
