import { Card } from "@/components/ui/card"

interface Step {
  number: number
  title: string
  description: string
}

interface GettingStartedProps {
  steps: Step[]
}

export function GettingStarted({ steps }: GettingStartedProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step) => (
        <Card key={step.number} className="relative pt-12" hover>
          <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
            {step.number}
          </div>
          <h3 className="text-lg font-medium mb-2">{step.title}</h3>
          <p className="text-muted-foreground text-sm">{step.description}</p>
        </Card>
      ))}
    </div>
  )
}
