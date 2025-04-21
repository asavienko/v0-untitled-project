import type React from "react"
import { cn } from "@/lib/utils"

interface ModernCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  gradient?: boolean
  hover?: boolean
  highlight?: boolean
  variant?: "default" | "floating" | "glow" | "accent"
  spacing?: "compact" | "normal" | "relaxed"
}

export function ModernCard({
  children,
  className,
  gradient = false,
  hover = true,
  highlight = false,
  variant = "default",
  spacing = "normal",
  ...props
}: ModernCardProps) {
  const variantClasses = {
    default: "bg-card border",
    floating: "bg-card border shadow-xl",
    glow: "bg-card border shadow-glow",
    accent: "bg-card border-2 border-primary/30",
  }

  const spacingClasses = {
    compact: "p-4",
    normal: "p-6 md:p-8",
    relaxed: "p-8 md:p-10",
  }

  return (
    <div
      className={cn(
        "rounded-xl relative transition-all duration-300",
        variantClasses[variant],
        spacingClasses[spacing],
        hover && "hover:-translate-y-1 hover:shadow-lg",
        gradient && "gradient-border",
        highlight && "card-highlight",
        className,
      )}
      {...props}
    >
      {gradient ? (
        <div className="p-4 relative z-10">{children}</div>
      ) : (
        <>
          {highlight && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-50" />
          )}
          <div className="relative z-10">{children}</div>
        </>
      )}
    </div>
  )
}
