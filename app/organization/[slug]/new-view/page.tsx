import { OrganizationView } from "@/components/organization/organization-view"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test-Yiyi Organization | Runtime Verification",
  description: "Organization dashboard for Test-Yiyi",
}

export default function NewView({ params }: { params: { slug: string } }) {
  // Check if this is the specific test-yiyi organization
  const isTestYiyi = params.slug === "test-yiyi"

  return (
    <div className="h-screen">
      <OrganizationView organizationSlug={params.slug} isTestOrg={isTestYiyi} />
    </div>
  )
}
