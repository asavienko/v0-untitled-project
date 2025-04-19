import { cn } from "@/lib/utils"
import type React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "success" | "warning" | "danger" | "neutral"
}

export function Badge({ variant = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "badge",
        {
          "badge-primary": variant === "primary",
          "badge-success": variant === "success",
          "badge-warning": variant === "warning",
          "badge-danger": variant === "danger",
          "badge-neutral": variant === "neutral",
        },
        className,
      )}
      {...props}
    />
  )
}
