import type { LucideIcon } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  highlight?: boolean
  variant?: "default" | "bordered" | "elevated" | "gradient"
}

interface FeatureGridProps {
  features: Feature[]
  className?: string
  spacing?: "compact" | "standard" | "wide"
}

export function FeatureGrid({ features, className, spacing = "standard" }: FeatureGridProps) {
  const spacingClasses = {
    compact: "gap-4 md:gap-6",
    standard: "gap-6 md:gap-8 lg:gap-10",
    wide: "gap-8 md:gap-10 lg:gap-12",
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${spacingClasses[spacing]} ${className}`}>
      {features.map((feature, index) => {
        // Create a staggered layout by adding margin-top to specific cards
        const staggeredClass =
          index === 1 ? "md:mt-16" : index === 3 ? "md:mt-16 lg:mt-0" : index === 5 ? "md:mt-0 lg:mt-16" : ""

        return (
          <div key={index} className={staggeredClass}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
              variant={feature.variant || "default"}
            />
          </div>
        )
      })}
    </div>
  )
}
