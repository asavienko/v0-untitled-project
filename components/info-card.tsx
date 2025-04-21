import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

interface InfoCardProps {
  icon: LucideIcon
  title: string
  content: string
  variant?: "default" | "primary" | "warning" | "success"
}

export function InfoCard({ icon: Icon, title, content, variant = "default" }: InfoCardProps) {
  const variantClasses = {
    default: "bg-accent/10 border-accent/20",
    primary: "bg-primary/10 border-primary/20",
    warning: "bg-amber-500/10 border-amber-500/20",
    success: "bg-green-500/10 border-green-500/20",
  }

  const iconClasses = {
    default: "text-accent",
    primary: "text-primary",
    warning: "text-amber-500",
    success: "text-green-500",
  }

  return (
    <Card className={`${variantClasses[variant]} p-6 border shadow-sm`}>
      <div className="flex items-start gap-3 mb-4">
        <Icon className={`h-5 w-5 ${iconClasses[variant]} mt-1 flex-shrink-0`} />
        <h3 className="text-lg font-display font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{content}</p>
    </Card>
  )
}
