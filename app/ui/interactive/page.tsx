import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { InteractiveComponentsClient } from "./page.client"

export const metadata: Metadata = {
  title: "Interactive Components | UI Library",
  description: "Interactive UI components including modals, tooltips, popovers, and more",
}

export default function InteractiveComponentsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader
        title="Interactive Components"
        description="Interactive UI components that respond to user actions and provide enhanced functionality"
      />

      <InteractiveComponentsClient />
    </div>
  )
}
