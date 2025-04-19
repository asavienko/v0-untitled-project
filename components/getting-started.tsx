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
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step) => (
        <div key={step.number} className="relative">
          <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            {step.number}
          </div>
          <div className="rounded-lg border bg-card p-6 pt-10">
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
