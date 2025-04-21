import { Check } from "lucide-react"

interface UseCaseContentProps {
  title: string
  description: string
  keyPoints: string[]
  examples?: string[]
}

export function UseCaseContent({ title, description, keyPoints, examples }: UseCaseContentProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="secondary-heading">{title}</h3>

      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mb-2">
        <p className="secondary-text">{description}</p>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-base mb-2">Key Benefits:</h4>

        <ul className="space-y-3">
          {keyPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="secondary-text">{point}</span>
            </li>
          ))}
        </ul>

        {examples && examples.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border/30">
            <h4 className="font-medium text-sm mb-2">Examples:</h4>
            <div className="grid gap-2">
              {examples.map((example, index) => (
                <div key={index} className="p-2 bg-muted/30 rounded border border-border/20 text-sm">
                  {example}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
