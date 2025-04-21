import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ExpandableText } from "@/components/expandable-text"

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  shortDesc: string
  description: string
}

export function BenefitCard({ icon: Icon, title, shortDesc, description }: BenefitCardProps) {
  return (
    <Card className="h-full card-level-2" hover variant="bordered" spacing="relaxed">
      <div className="feature-icon-container">
        <div className="feature-icon">
          <Icon className="h-5 w-5" />
        </div>
        <div className="feature-icon-glow"></div>
      </div>

      <h3 className="tertiary-heading mb-2">{title}</h3>
      <p className="text-sm font-medium text-foreground/90">{shortDesc}</p>

      <ExpandableText>{description}</ExpandableText>
    </Card>
  )
}
