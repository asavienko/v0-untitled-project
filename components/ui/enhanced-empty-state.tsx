"use client"

import { Button } from "@/components/ui/button"
import { CTAButton } from "@/components/ui/cta-button"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type React from "react"

interface EnhancedEmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
    variant?: "primary" | "secondary" | "success" | "danger"
    size?: "default" | "lg" | "xl"
    icon?: LucideIcon
    withPulse?: boolean
    withArrow?: boolean
    isCTA?: boolean
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  visual?: "icon" | "illustration"
}

export function EnhancedEmptyState({
  icon: Icon,
  title,
  description,
  action,
  secondaryAction,
  visual = "icon",
  className,
  ...props
}: EnhancedEmptyStateProps) {
  return (
    <div className={cn("empty-state px-4 py-6 sm:py-10", className)} {...props}>
      {visual === "icon" ? (
        <div className="empty-state-icon">
          <Icon size={24} className="text-gray-400" />
        </div>
      ) : (
        <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6 relative animate-float flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-70 blur-xl"></div>
          <div className="relative bg-white rounded-full p-4 sm:p-6 shadow-sm border border-gray-100 flex items-center justify-center">
            <Icon size={36} className="text-primary-600 sm:hidden" />
            <Icon size={48} className="text-primary-600 hidden sm:block" />
          </div>
        </div>
      )}
      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">{title}</h3>
      <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">{description}</p>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
        {secondaryAction && (
          <Button variant="outline" onClick={secondaryAction.onClick} className="w-full sm:w-auto">
            {secondaryAction.label}
          </Button>
        )}
        {action &&
          (action.isCTA ? (
            <CTAButton
              variant={action.variant || "primary"}
              size={action.size || "default"}
              icon={action.icon}
              withPulse={action.withPulse}
              withArrow={action.withArrow}
              onClick={action.onClick}
              className="w-full sm:w-auto"
            >
              {action.label}
            </CTAButton>
          ) : (
            <Button
              className={cn(
                "w-full sm:w-auto",
                action.variant !== "secondary" && action.variant !== "danger"
                  ? "bg-primary-600 hover:bg-primary-700 text-white shadow-sm"
                  : "",
              )}
              variant={
                action.variant === "secondary" ? "outline" : action.variant === "danger" ? "destructive" : "default"
              }
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
      </div>
    </div>
  )
}
