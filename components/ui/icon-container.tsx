import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type React from "react"

interface IconContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  variant?: "primary" | "secondary" | "success"
  size?: "sm" | "md" | "lg"
}

export function IconContainer({
  icon: Icon,
  variant = "primary",
  size = "md",
  className,
  ...props
}: IconContainerProps) {
  return (
    <div
      className={cn(
        "icon-container",
        {
          "icon-container-primary": variant === "primary",
          "icon-container-secondary": variant === "secondary",
          "icon-container-success": variant === "success",
          "p-1.5": size === "sm",
          "p-2": size === "md",
          "p-3": size === "lg",
        },
        className,
      )}
      {...props}
    >
      <Icon size={size === "sm" ? 14 : size === "md" ? 18 : 24} />
    </div>
  )
}
