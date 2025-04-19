import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "UI Components | Runtime Verification",
  description: "UI component library for the Runtime Verification platform",
}

export default function UIComponentsPage() {
  const categories = [
    {
      title: "Design System",
      description: "Color palettes, spacing, and design tokens",
      href: "/ui/design-system",
      icon: "🎨",
    },
    {
      title: "Typography",
      description: "Headings, text styles, and typographic elements",
      href: "/ui/typography",
      icon: "📝",
    },
    {
      title: "Layouts",
      description: "Page layouts, grids, and structural components",
      href: "/ui/layouts",
      icon: "📐",
    },
    {
      title: "Forms",
      description: "Input fields, controls, and form patterns",
      href: "/ui/forms",
      icon: "📋",
    },
    {
      title: "Interactive",
      description: "Modals, tooltips, and interactive elements",
      href: "/ui/interactive",
      icon: "🔍",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader
        title="UI Components"
        description="A comprehensive library of UI components for building consistent interfaces"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {categories.map((category) => (
          <Link href={category.href} key={category.title} className="block group">
            <Card className="h-full transition-all hover:shadow-md group-hover:border-primary-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <div className="text-sm text-primary-600 group-hover:text-primary-700 flex items-center">
                  View components
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5" />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
