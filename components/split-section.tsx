import type React from "react"
import { cn } from "@/lib/utils"

interface SplitSectionProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  verticalAlign?: "top" | "center" | "bottom"
  gap?: "small" | "medium" | "large"
}

export function SplitSection({
  children,
  className,
  reverse = false,
  verticalAlign = "center",
  gap = "medium",
}: SplitSectionProps) {
  const verticalAlignClasses = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
  }

  const gapClasses = {
    small: "gap-8",
    medium: "gap-12 lg:gap-16",
    large: "gap-16 lg:gap-24",
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2",
        gapClasses[gap],
        verticalAlignClasses[verticalAlign],
        reverse && "lg:flex-row-reverse",
        className,
      )}
    >
      {children}
    </div>
  )
}
