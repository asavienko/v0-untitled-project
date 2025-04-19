import type { Metadata } from "next"
import { Palette, SwatchBookIcon as Swatch, Ruler, Grid, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Design System | UI Components",
  description: "Color palettes, spacing, and design tokens for the Runtime Verification platform",
}

export default function DesignSystemPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Design System</h1>
        <p className="text-muted-foreground text-lg">
          Explore and use our design system components including colors, spacing, and design tokens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Color Palette</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Consistent color schemes that define our brand identity and ensure accessibility.
          </p>
          <div className="grid grid-cols-4 gap-2">
            {["primary", "secondary", "accent", "destructive", "muted", "card", "popover", "border"].map((color) => (
              <div key={color} className="flex flex-col items-center">
                <div className={`h-8 w-8 rounded-md bg-${color}`} />
                <span className="text-xs mt-1">{color}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <Swatch className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Theme Tokens</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Design tokens that define our visual language across light and dark themes.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Background</span>
              <div className="h-6 w-12 bg-background rounded"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Foreground</span>
              <div className="h-6 w-12 bg-foreground rounded"></div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <Ruler className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Spacing</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Consistent spacing scales to create harmony in layouts and component design.
          </p>
          <div className="space-y-2">
            {[1, 2, 4, 6, 8].map((size) => (
              <div key={size} className="flex items-center gap-2">
                <div className={`h-6 w-${size} bg-primary/20 rounded`}></div>
                <span className="text-sm">{size} units</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <Grid className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Grid System</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Flexible grid systems for creating consistent and responsive layouts.
          </p>
          <div className="grid grid-cols-4 gap-2 h-20">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-primary/10 rounded"></div>
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-md">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Elevation</h2>
          </div>
          <p className="text-muted-foreground mb-4">Shadow and elevation system to create depth and hierarchy.</p>
          <div className="space-y-4">
            <div className="h-10 bg-card shadow rounded"></div>
            <div className="h-10 bg-card shadow-md rounded"></div>
            <div className="h-10 bg-card shadow-lg rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
