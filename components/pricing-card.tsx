import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PricingFeature {
  text: string
  description?: string
}

interface PricingCardProps {
  title: string
  description: string
  price: string
  period?: string
  features: PricingFeature[]
  buttonText: string
  popular?: boolean
  className?: string
  importance?: "primary" | "secondary" | "tertiary"
}

export function PricingCard({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  popular = false,
  className,
  importance = "secondary",
}: PricingCardProps) {
  const importanceClasses = {
    primary: "border-primary/30 bg-primary/5 shadow-lg",
    secondary: "",
    tertiary: "border-muted bg-card/50",
  }

  const priceClasses = {
    primary: "text-5xl font-display font-bold mb-5 flex items-end",
    secondary: "text-4xl font-display font-bold mb-5 flex items-end",
    tertiary: "text-3xl font-display font-bold mb-4 flex items-end",
  }

  const titleClasses = {
    primary: "text-2xl font-display font-semibold",
    secondary: "text-xl font-display font-semibold",
    tertiary: "text-lg font-display font-medium",
  }

  const buttonVariant =
    importance === "primary" || popular ? "highlight" : importance === "secondary" ? "default" : "secondary"
  const buttonSize = importance === "primary" || popular ? "lg" : "default"

  return (
    <Card
      className={cn(
        "h-full flex flex-col relative",
        popular ? "card-popular" : "",
        importanceClasses[importance],
        className,
      )}
      hover
      highlight={popular || importance === "primary"}
      variant={popular || importance === "primary" ? "elevated" : "default"}
      spacing={importance === "primary" ? "relaxed" : "normal"}
    >
      {popular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-0.5 text-xs font-accent font-medium text-primary-foreground shadow-md">
          Popular
        </div>
      )}
      <div className="mb-5">
        <h3 className={titleClasses[importance]}>{title}</h3>
        <p className={cn("text-muted-foreground mt-1", importance === "primary" ? "text-sm" : "text-xs")}>
          {description}
        </p>
      </div>
      <div className={priceClasses[importance]}>
        {price}
        {period && (
          <span
            className={cn(
              "text-sm font-normal text-muted-foreground ml-1 font-sans",
              importance === "tertiary" && "text-xs",
            )}
          >
            /{period}
          </span>
        )}
      </div>
      <div className="p-4 bg-muted/30 rounded-lg border border-border/30 mb-6 flex-1">
        <h4 className="text-sm font-medium mb-3">What's included:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check
                className={cn("text-primary flex-shrink-0 mt-0.5", importance === "primary" ? "h-5 w-5" : "h-4 w-4")}
              />
              <div>
                <span className={cn(importance === "primary" ? "text-sm font-medium" : "text-xs font-medium")}>
                  {feature.text}
                </span>
                {feature.description && <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className={cn(
          "w-full font-accent",
          popular ? "shadow-md" : "bg-secondary text-foreground hover:bg-secondary/80",
        )}
        variant={buttonVariant}
        size={buttonSize}
      >
        {buttonText}
      </Button>
    </Card>
  )
}
