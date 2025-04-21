import { cn } from "@/lib/utils"

interface DecorativeShapesProps {
  className?: string
  variant?: "primary" | "secondary" | "muted"
}

export function DecorativeShapes({ className, variant = "primary" }: DecorativeShapesProps) {
  const variantClasses = {
    primary: "text-primary/20",
    secondary: "text-secondary/40",
    muted: "text-muted-foreground/20",
  }

  return (
    <div className={cn("absolute pointer-events-none", variantClasses[variant], className)}>
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
        <rect x="220" y="60" width="120" height="120" rx="20" stroke="currentColor" strokeWidth="2" />
        <path
          d="M100 250L150 350H50L100 250Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M280 220C280 220 320 260 320 300C320 340 280 380 240 380C200 380 160 340 160 300C160 260 200 220 240 220"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
