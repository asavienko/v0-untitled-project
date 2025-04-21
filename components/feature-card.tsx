import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  highlight?: boolean
  variant?: "default" | "bordered" | "elevated" | "gradient"
  spacing?: "compact" | "normal" | "relaxed"
  importance?: "primary" | "secondary" | "tertiary"
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  highlight = false,
  variant = "default",
  spacing = "normal",
  importance = "secondary",
}: FeatureCardProps) {
  const importanceClasses = {
    primary: "border-primary/30 bg-primary/5 shadow-md",
    secondary: "",
    tertiary: "border-muted bg-card/50",
  }

  const titleClasses = {
    primary: "text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors",
    secondary: "text-lg font-display font-semibold mb-4 group-hover:text-primary transition-colors",
    tertiary: "text-base font-display font-medium mb-3 group-hover:text-primary transition-colors",
  }

  const descriptionClasses = {
    primary: "text-muted-foreground text-base leading-relaxed",
    secondary: "text-muted-foreground text-sm leading-relaxed",
    tertiary: "text-muted-foreground/80 text-sm leading-relaxed",
  }

  const iconClasses = {
    primary: "h-16 w-16",
    secondary: "h-14 w-14",
    tertiary: "h-12 w-12",
  }

  return (
    <Card
      className={cn("h-full group", importanceClasses[importance], className)}
      hover
      highlight={highlight || importance === "primary"}
      variant={variant}
      spacing={spacing}
    >
      <div className="feature-icon-container">
        <div
          className={cn(
            "feature-icon group-hover:scale-110 transition-transform duration-300",
            iconClasses[importance],
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="feature-icon-glow"></div>
      </div>
      <h3 className={titleClasses[importance]}>{title}</h3>
      <p className={descriptionClasses[importance]}>{description}</p>
    </Card>
  )
}
