import { cn } from "@/lib/utils"
import React from "react"

type NeuCardVariant = "flat" | "elevated" | "pressed" | "convex" | "concave"

interface NeuCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: NeuCardVariant
  hover?: boolean
  interactive?: boolean
  size?: "sm" | "md" | "lg"
}

const NeuCard = React.forwardRef<HTMLDivElement, NeuCardProps>(
  ({ className, variant = "elevated", hover = false, interactive = false, size = "md", children, ...props }, ref) => {
    const baseClasses =
      size === "sm"
        ? "p-2 sm:p-3 rounded-xl transition-all duration-200"
        : size === "lg"
          ? "p-4 sm:p-5 md:p-6 rounded-xl transition-all duration-200"
          : "p-3 sm:p-4 md:p-5 rounded-xl transition-all duration-200"

    const variantClasses = {
      flat: "neu-flat",
      elevated: "neu-elevated",
      pressed: "neu-pressed",
      convex: "neu-convex",
      concave: "neu-concave",
    }

    const hoverClasses = hover
      ? variant === "elevated"
        ? "hover:shadow-[8px_8px_16px_hsl(var(--neu-shadow-dark)),_-8px_-8px_16px_hsl(var(--neu-shadow-light))] hover:translate-y-[-2px]"
        : variant === "flat"
          ? "hover:neu-elevated-sm"
          : "hover:opacity-90"
      : ""

    const interactiveClasses = interactive ? "cursor-pointer active:scale-98 active:opacity-90" : ""

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], hoverClasses, interactiveClasses, className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)
NeuCard.displayName = "NeuCard"

interface NeuCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  separator?: boolean
}

const NeuCardHeader = ({ className, separator = true, children, ...props }: NeuCardHeaderProps) => (
  <div
    className={cn(
      "flex flex-col sm:flex-row sm:items-center justify-between pb-2 sm:pb-3 md:pb-4",
      separator && "border-b border-gray-100",
      className,
    )}
    {...props}
  >
    {children}
  </div>
)

const NeuCardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-lg font-semibold text-gray-800", className)} {...props} />
)

const NeuCardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-500", className)} {...props} />
)

const NeuCardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("py-2 sm:py-3 md:py-4", className)} {...props} />
)

const NeuCardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("pt-4 mt-auto border-t border-gray-100", className)} {...props} />
)

export { NeuCard, NeuCardHeader, NeuCardTitle, NeuCardDescription, NeuCardContent, NeuCardFooter }
