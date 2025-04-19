import LayoutsPageClient from "./page.client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Layouts | UI Components",
  description: "Page layouts, grids, and responsive patterns for the Runtime Verification platform",
}

export default function LayoutsPage() {
  return <LayoutsPageClient />
}
