import { OrganizationView } from "@/components/organization/organization-view"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test-Yiyi Organization | Runtime Verification",
  description: "Organization dashboard for Test-Yiyi",
}

export function NewView({ params }: { params: { slug: string } }) {
  // Check if this is the specific test-yiyi organization
  const isTestYiyi = params.slug === "test-yiyi"

  return (
    <div className="h-screen">
      <OrganizationView organizationSlug={params.slug} isTestOrg={isTestYiyi} />
    </div>
  )
}

// Update the root page to handle the case when no organization is specified

// Add a redirect to a default organization view
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Runtime Verification</h1>
        <p className="text-gray-600 mb-8">Please select an organization to continue</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
          <a
            href="/organization/test-yiyi/new-view"
            className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                T
              </div>
              <div>
                <h2 className="font-medium">Test-YiYi</h2>
                <div className="text-xs text-gray-500">GitHub Organization</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Test organization for YiYi's development and testing purposes.</p>
            <div className="text-sm text-blue-600">View organization →</div>
          </a>

          <a
            href="/organization/runtimeverification/new-view"
            className="p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-purple-100 flex items-center justify-center font-bold text-purple-600 mr-3">
                R
              </div>
              <div>
                <h2 className="font-medium">Runtime Verification</h2>
                <div className="text-xs text-gray-500">User-managed Organization</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Main organization for Runtime Verification projects and services.
            </p>
            <div className="text-sm text-blue-600">View organization →</div>
          </a>
        </div>
      </div>
    </div>
  )
}
