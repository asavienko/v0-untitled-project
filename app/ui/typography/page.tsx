import type { Metadata } from "next"
import { Type, TextCursorInput, AlignLeft, Baseline, Heading } from "lucide-react"

export const metadata: Metadata = {
  title: "Typography | UI Components",
  description: "Text styles, headings, and font combinations for the Runtime Verification platform",
}

export default function TypographyPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Typography</h1>
        <p className="text-muted-foreground text-lg">
          Explore text styles, headings, and font combinations that define our visual communication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <Heading className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Headings</h2>
          </div>
          <p className="text-muted-foreground mb-4">Heading styles for different levels of information hierarchy.</p>
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <p className="text-xs text-muted-foreground">4xl / Bold</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Heading 2</h2>
              <p className="text-xs text-muted-foreground">3xl / Semibold</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Heading 3</h3>
              <p className="text-xs text-muted-foreground">2xl / Semibold</p>
            </div>
            <div>
              <h4 className="text-xl font-medium">Heading 4</h4>
              <p className="text-xs text-muted-foreground">xl / Medium</p>
            </div>
            <div>
              <h5 className="text-lg font-medium">Heading 5</h5>
              <p className="text-xs text-muted-foreground">lg / Medium</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <AlignLeft className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Body Text</h2>
          </div>
          <p className="text-muted-foreground mb-4">Text styles for paragraphs and general content.</p>
          <div className="space-y-4">
            <div>
              <p className="text-lg">Large Body Text</p>
              <p className="text-xs text-muted-foreground">lg / Regular</p>
            </div>
            <div>
              <p className="text-base">Default Body Text</p>
              <p className="text-xs text-muted-foreground">base / Regular</p>
            </div>
            <div>
              <p className="text-sm">Small Body Text</p>
              <p className="text-xs text-muted-foreground">sm / Regular</p>
            </div>
            <div>
              <p className="text-xs">Extra Small Text</p>
              <p className="text-xs text-muted-foreground">xs / Regular</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <TextCursorInput className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Font Weights</h2>
          </div>
          <p className="text-muted-foreground mb-4">Different font weights for emphasis and hierarchy.</p>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-bold">Bold Text (700)</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Semibold Text (600)</p>
            </div>
            <div>
              <p className="text-lg font-medium">Medium Text (500)</p>
            </div>
            <div>
              <p className="text-lg font-normal">Regular Text (400)</p>
            </div>
            <div>
              <p className="text-lg font-light">Light Text (300)</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <Baseline className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Line Heights</h2>
          </div>
          <p className="text-muted-foreground mb-4">Different line heights for readability and layout.</p>
          <div className="space-y-6">
            <div>
              <p className="text-base leading-tight">
                Tight line height (1.25) - This text has a tight line height which is useful for headings and short text
                blocks where space is at a premium.
              </p>
              <p className="text-xs text-muted-foreground mt-1">leading-tight</p>
            </div>
            <div>
              <p className="text-base leading-normal">
                Normal line height (1.5) - This text has a normal line height which is good for general reading and most
                body text. It provides a balanced spacing between lines.
              </p>
              <p className="text-xs text-muted-foreground mt-1">leading-normal</p>
            </div>
            <div>
              <p className="text-base leading-relaxed">
                Relaxed line height (1.75) - This text has a relaxed line height which improves readability for longer
                paragraphs and content-heavy sections.
              </p>
              <p className="text-xs text-muted-foreground mt-1">leading-relaxed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 p-2 rounded-md">
            <Type className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">Typography Combinations</h2>
        </div>
        <p className="text-muted-foreground mb-6">Examples of typography combinations for common UI patterns.</p>

        <div className="space-y-8">
          <div className="p-4 border rounded">
            <h3 className="text-lg font-semibold mb-1">Card Title</h3>
            <p className="text-sm text-muted-foreground mb-4">Card subtitle or supporting text</p>
            <p className="text-sm mb-4">
              This is an example of a typical card layout with a title, subtitle, and body text. The typography
              hierarchy helps users scan and understand the content quickly.
            </p>
            <button className="text-sm text-primary font-medium">Action Link</button>
          </div>

          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold mb-4">Section Header</h3>
            <div className="space-y-3">
              <p className="text-base">
                Main content text that explains the section in detail. This would typically include multiple paragraphs
                of information related to the section header.
              </p>
              <p className="text-base">
                Secondary paragraph that continues the explanation with additional details and context for the user.
              </p>
            </div>
          </div>

          <div className="p-4 border rounded">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Form Label</h3>
            <div className="h-10 bg-input rounded border px-3 flex items-center">
              <span className="text-sm">Input text example</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Helper text that provides additional context</p>
          </div>
        </div>
      </div>
    </div>
  )
}
