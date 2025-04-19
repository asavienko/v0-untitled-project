import { cn } from "@/lib/utils"
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva("bg-white rounded-xl border transition-all duration-200 overflow-hidden", {
  variants: {
    variant: {
      default: "border-gray-200 shadow-sm",
      elevated: "border-gray-200 shadow-md",
      outline: "border-gray-300",
      ghost: "border-transparent shadow-none",
    },
    hover: {
      default: "hover:shadow-md hover:border-gray-300",
      lift: "hover:shadow-lg hover:translate-y-[-2px]",
      highlight: "hover:border-primary/30 hover:shadow-md",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
    hover: "default",
  },
})

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  actions?: React.ReactNode
}

const CardHeader = ({ className, actions, children, ...props }: CardHeaderProps) => (
  <div className={cn("flex items-center justify-between px-5 py-4 border-b border-gray-100", className)} {...props}>
    <div className="font-medium">{children}</div>
    {actions && <div className="flex items-center gap-2">{actions}</div>}
  </div>
)

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
)

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-500 mt-1", className)} {...props} />
)

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-5 py-4", className)} {...props} />
)

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-5 py-3 bg-gray-50 border-t border-gray-100", className)} {...props} />
)

export interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, variant, hover, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, hover }), className)} {...props} />
  ),
)
EnhancedCard.displayName = "EnhancedCard"

export { EnhancedCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
