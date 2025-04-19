"use client"

import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { OrganizationSkeleton } from "@/components/organization-skeleton"
import { useIsMobile } from "@/hooks/use-mobile"

export default function SkeletonOrganizationPage({ params }: { params: { slug: string } }) {
  const isMobile = useIsMobile()

  return (
    <div className="flex h-full">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile navigation */}
      {isMobile && <MobileNavigation />}

      <main className="flex-1 overflow-y-auto bg-gray-50">
        {/* Breadcrumb skeleton */}
        <div className="bg-white border-b px-6 py-2 flex items-center gap-2">
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>

        {/* Organization skeleton */}
        <OrganizationSkeleton organizationSlug={params.slug} />
      </main>
    </div>
  )
}
