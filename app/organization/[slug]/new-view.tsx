"use client"

import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { OrganizationView } from "@/components/organization/organization-view"
import { useIsMobile } from "@/hooks/use-mobile"

export default function NewOrganizationPage({ params }: { params: { slug: string } }) {
  const isMobile = useIsMobile()

  return (
    <div className="flex h-full">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile navigation */}
      {isMobile && <MobileNavigation />}

      <main className="flex-1 overflow-hidden bg-white">
        {/* Breadcrumb */}
        <div className="bg-white border-b px-6 py-2 flex items-center gap-2">
          <a href="/app" className="text-sm">
            Home
          </a>
          <span className="text-sm">/</span>
          <span className="text-sm font-medium">{params.slug}</span>
        </div>

        {/* Organization view */}
        <div className="h-[calc(100%-40px)]">
          <OrganizationView organizationSlug={params.slug} />
        </div>
      </main>
    </div>
  )
}
