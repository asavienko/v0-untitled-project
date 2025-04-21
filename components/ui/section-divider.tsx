import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
  invert?: boolean
  height?: "small" | "medium" | "large"
}

export function SectionDivider({ className, invert = false, height = "medium" }: SectionDividerProps) {
  const heightClasses = {
    small: "h-16",
    medium: "h-24",
    large: "h-32",
  }

  return (
    <div className={cn("relative w-full overflow-hidden", heightClasses[height], className)}>
      <div
        className={cn(
          "absolute inset-0 w-full h-full",
          invert ? "bg-background dark:bg-muted" : "bg-muted dark:bg-background",
        )}
        style={{
          clipPath: invert ? "polygon(0 0, 100% 0, 100% 100%, 0 30%)" : "polygon(0 0, 100% 70%, 100% 100%, 0 100%)",
        }}
      />
    </div>
  )
}
