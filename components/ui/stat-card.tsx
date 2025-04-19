import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type React from "react"

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  icon?: LucideIcon
  trend?: {
    value: string | number
    direction: "up" | "down" | "neutral"
    label?: string
  }
  footer?: React.ReactNode
  variant?: "default" | "primary" | "success" | "warning" | "danger"
}

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  footer,
  variant = "default",
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "stat-card group",
        {
          "border-primary/20 bg-primary/5": variant === "primary",
          "border-emerald-200 bg-emerald-50/50": variant === "success",
          "border-amber-200 bg-amber-50/50": variant === "warning",
          "border-rose-200 bg-rose-50/50": variant === "danger",
        },
        className,
      )}
      {...props}
    >
      <div className="stat-label">
        <span>{title}</span>
        {Icon && (
          <Icon
            size={18}
            className={cn("transition-transform group-hover:scale-110", {
              "text-primary": variant === "primary",
              "text-emerald-600": variant === "success",
              "text-amber-600": variant === "warning",
              "text-rose-600": variant === "danger",
              "text-gray-500": variant === "default",
            })}
          />
        )}
      </div>
      <div
        className={cn("stat-value", {
          "text-primary": variant === "primary",
          "text-emerald-700": variant === "success",
          "text-amber-700": variant === "warning",
          "text-rose-700": variant === "danger",
        })}
      >
        {value}
      </div>
      {trend && (
        <div
          className={cn("stat-trend", {
            "stat-trend-up": trend.direction === "up",
            "stat-trend-down": trend.direction === "down",
            "text-gray-500": trend.direction === "neutral",
          })}
        >
          {trend.direction === "up" && (
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          )}
          {trend.direction === "down" && (
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
          <span>
            {trend.value} {trend.label}
          </span>
        </div>
      )}
      {footer && <div className="mt-3 pt-3 border-t border-gray-200/50">{footer}</div>}
    </div>
  )
}
