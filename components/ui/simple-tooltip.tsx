"\"use client"

import type React from "react"
import { useState } from "react"

interface SimpleTooltipProps {
  text: string
  children: React.ReactNode
  position?: "top" | "bottom"
}

export function SimpleTooltip({ text, children, position = "bottom" }: SimpleTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        {children}
      </div>

      {isVisible && (
        <div
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-[#2d3748] rounded-md shadow-md whitespace-nowrap ${
            position === "top" ? "bottom-full mb-2" : "top-full mt-2"
          } left-1/2 transform -translate-x-1/2`}
        >
          {text}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#2d3748] rotate-45 ${
              position === "top" ? "bottom-[-4px]" : "top-[-4px]"
            }`}
          />
        </div>
      )}
    </div>
  )
}
