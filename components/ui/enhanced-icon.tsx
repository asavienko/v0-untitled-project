import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"
import type React from "react"

const iconContainerVariants = cva("flex items-center justify-center rounded-lg transition-all duration-200", {
  variants: {
    variant: {
      default: "bg-gray-100 text-gray-700",
      primary: "bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600",
      secondary: "bg-gradient-to-br from-secondary-50 to-secondary-100 text-secondary-700",
      success: "bg-gradient-to-br from-success-50 to-success-100 text-success-700",
      warning: "bg-gradient-to-br from-warning-50 to-warning-100 text-warning-700",
      danger: "bg-gradient-to-br from-error-50 to-error-100 text-error-700",
      info: "bg-gradient-to-br from-info-50 to-info-100 text-info-700",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    },
    size: {
      sm: "p-1.5",
      md: "p-2.5",
      lg: "p-3.5",
    },
    shadow: {
      none: "",
      sm: "shadow-sm",
      md: "shadow",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shadow: "sm",
  },
})

interface EnhancedIconProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof iconContainerVariants> {
  icon: LucideIcon
}

function EnhancedIcon({ className, variant, size, shadow, icon: Icon, ...props }: EnhancedIconProps) {
  return (
    <div
      className={cn(iconContainerVariants({ variant, size, shadow }), "transition-all duration-2000", className)}
      {...props}
    >
      <Icon
        size={size === "sm" ? 16 : size === "md" ? 20 : 24}
        className="transition-transform duration-2000 group-hover:scale-110"
      />
    </div>
  )
}

export { EnhancedIcon, iconContainerVariants }
