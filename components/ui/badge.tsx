import type * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "outline" | "primary" | "secondary" | "accent" | "highlight"
  size?: "sm" | "md" | "lg"
}

export function Badge({ children, className, variant = "default", size = "md", ...props }: BadgeProps) {
  const variantClasses = {
    default: "bg-muted text-muted-foreground",
    outline: "border border-border bg-transparent",
    primary: "bg-primary/15 text-primary border border-primary/10",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    highlight: "bg-primary/20 text-primary font-semibold border border-primary/20",
  }

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-xs",
    lg: "px-3 py-1 text-sm",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-accent tracking-wide",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
