import { cn } from "@/lib/utils"

interface DecorativeDotsProps {
  className?: string
  variant?: "primary" | "secondary" | "muted"
}

export function DecorativeDots({ className, variant = "primary" }: DecorativeDotsProps) {
  const variantClasses = {
    primary: "text-primary/20",
    secondary: "text-secondary/40",
    muted: "text-muted-foreground/20",
  }

  return (
    <div className={cn("absolute pointer-events-none", variantClasses[variant], className)}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          {Array.from({ length: 10 }).map((_, rowIndex) =>
            Array.from({ length: 10 }).map((_, colIndex) => (
              <circle
                key={`${rowIndex}-${colIndex}`}
                cx={rowIndex * 10 + 5}
                cy={colIndex * 10 + 5}
                r="1.5"
                fill="currentColor"
              />
            )),
          )}
        </g>
      </svg>
    </div>
  )
}
