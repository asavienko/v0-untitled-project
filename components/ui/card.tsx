import type * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  glass?: boolean
  highlight?: boolean
  variant?: "default" | "elevated" | "bordered" | "gradient"
  spacing?: "compact" | "normal" | "relaxed"
}

export function Card({
  children,
  className,
  hover = false,
  glass = false,
  highlight = false,
  variant = "default",
  spacing = "normal",
  ...props
}: CardProps) {
  const variantClasses = {
    default: "bg-card border",
    elevated: "bg-card shadow-lg border-transparent",
    bordered: "bg-card/50 border-2",
    gradient: "bg-gradient-to-br from-card to-background border",
  }

  const spacingClasses = {
    compact: "p-4",
    normal: "p-6 md:p-8",
    relaxed: "p-8 md:p-10",
  }

  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300",
        variantClasses[variant],
        spacingClasses[spacing],
        hover && "card-hover",
        glass && "glass-effect",
        highlight && "card-highlight",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
