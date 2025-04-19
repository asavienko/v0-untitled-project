import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type React from "react"

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger"
  size?: "default" | "lg" | "xl"
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  withPulse?: boolean
  withArrow?: boolean
}

export function CTAButton({
  children,
  className,
  variant = "primary",
  size = "default",
  icon: Icon,
  iconPosition = "left",
  withPulse = false,
  withArrow = false,
  ...props
}: CTAButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:ring-2",
        "active:translate-y-0.5 active:shadow-none",
        {
          // Size variations
          "px-4 py-2 text-sm gap-1.5 sm:px-5 sm:py-2.5 sm:gap-2": size === "default",
          "px-5 py-2.5 text-sm gap-2 sm:px-6 sm:py-3 sm:text-base sm:gap-2.5": size === "lg",
          "px-6 py-3 text-base gap-2 sm:px-7 sm:py-4 sm:text-lg sm:gap-3": size === "xl",

          // Primary variant - vibrant, attention-grabbing
          "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-lg hover:shadow-primary-500/20 focus:ring-primary-500/50":
            variant === "primary",

          // Secondary variant - softer, complementary
          "bg-gradient-to-r from-secondary-600 to-secondary-700 text-white hover:shadow-lg hover:shadow-secondary-500/20 focus:ring-secondary-500/50":
            variant === "secondary",

          // Success variant - positive action
          "bg-gradient-to-r from-success-500 to-success-600 text-white hover:shadow-lg hover:shadow-success-500/20 focus:ring-success-500/50":
            variant === "success",

          // Danger variant - destructive action
          "bg-gradient-to-r from-error-500 to-error-600 text-white hover:shadow-lg hover:shadow-error-500/20 focus:ring-error-500/50":
            variant === "danger",
        },
        className,
      )}
      {...props}
    >
      {/* Pulse effect */}
      {withPulse && <span className="absolute inset-0 rounded-lg ring-2 ring-primary-500/30 animate-pulse"></span>}

      {/* Left icon */}
      {Icon && iconPosition === "left" && (
        <Icon
          size={size === "default" ? 16 : size === "lg" ? 18 : 20}
          className="transition-transform group-hover:scale-110 sm:text-base"
        />
      )}

      {/* Button text */}
      <span>{children}</span>

      {/* Right icon */}
      {Icon && iconPosition === "right" && (
        <Icon
          size={size === "default" ? 16 : size === "lg" ? 18 : 20}
          className="transition-transform group-hover:scale-110 sm:text-base"
        />
      )}

      {/* Arrow indicator */}
      {withArrow && (
        <svg
          className="ml-1 -mr-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      )}
    </button>
  )
}
