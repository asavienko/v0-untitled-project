import { cn } from "@/lib/utils"
import type React from "react"

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  actions?: React.ReactNode
  footer?: React.ReactNode
  noPadding?: boolean
  isLoading?: boolean
}

export function CardContainer({
  title,
  description,
  actions,
  footer,
  noPadding = false,
  isLoading = false,
  children,
  className,
  ...props
}: CardContainerProps) {
  return (
    <div
      className={cn("bg-white rounded-lg border shadow-sm overflow-hidden transition-all duration-200", className)}
      {...props}
    >
      {(title || actions) && (
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <div>
            {title && <h3 className="font-medium">{title}</h3>}
            {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}

      <div className={cn(noPadding ? "" : "p-4", isLoading ? "animate-pulse" : "")}>
        {isLoading ? (
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        ) : (
          children
        )}
      </div>

      {footer && <div className="px-4 py-3 border-t bg-gray-50">{footer}</div>}
    </div>
  )
}
