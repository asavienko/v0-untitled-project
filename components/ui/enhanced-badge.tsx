import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type React from "react"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset transition-colors",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-gray-800 ring-gray-500/20",
        primary: "bg-primary-50 text-primary-700 ring-primary-500/30",
        secondary: "bg-secondary-50 text-secondary-700 ring-secondary-500/30",
        success: "bg-success-50 text-success-700 ring-success-600/20",
        warning: "bg-warning-50 text-warning-800 ring-warning-600/20",
        danger: "bg-error-50 text-error-700 ring-error-600/20",
        info: "bg-info-50 text-info-700 ring-info-600/20",
        outline: "bg-transparent text-gray-800 ring-gray-500/20",
      },
      size: {
        default: "text-xs px-2.5 py-0.5",
        sm: "text-[10px] px-2 py-0.5",
        lg: "text-sm px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface EnhancedBadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function EnhancedBadge({ className, variant, size, ...props }: EnhancedBadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { EnhancedBadge, badgeVariants }
