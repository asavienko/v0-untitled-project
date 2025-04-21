import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  className?: string
  gradient?: boolean
  centered?: boolean
  megaText?: string
  align?: "left" | "center" | "right"
  titleSize?: "default" | "large" | "huge"
  importance?: "primary" | "secondary" | "tertiary"
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  gradient = false,
  centered = true,
  megaText,
  align = "center",
  titleSize = "default",
  importance = "primary",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  const titleClasses = {
    default: "section-title",
    large: "text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight",
    huge: "text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tighter",
  }

  const importanceClasses = {
    primary: "text-foreground",
    secondary: "text-foreground/90",
    tertiary: "text-foreground/80",
  }

  const badgeVariant = importance === "primary" ? "highlight" : importance === "secondary" ? "primary" : "default"

  return (
    <div className={cn("space-y-6 relative", centered && "flex flex-col", alignClasses[align], className)}>
      {megaText && <div className="mega-text left-0 right-0 text-center">{megaText}</div>}
      {badge && (
        <Badge variant={badgeVariant} size="lg" className="mb-2">
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          titleClasses[titleSize],
          importanceClasses[importance],
          gradient && (importance === "primary" ? "gradient-text" : "text-foreground/90"),
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "section-description",
            align === "left" && "ml-0",
            importance === "primary" ? "text-muted-foreground" : "text-muted-foreground/80",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
