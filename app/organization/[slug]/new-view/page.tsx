import { OrganizationView } from "@/components/organization/organization-view"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test-Yiyi Organization | Runtime Verification",
  description: "Organization dashboard for Test-Yiyi",
}

interface PageProps {
  params: {
    slug: string
  }
}

export default async function NewView({ params }: PageProps) {
  return (
    <div className="h-screen">
      <OrganizationView organizationSlug={params.slug} isTestOrg={params.slug === "test-yiyi"} />
    </div>
  )
}
