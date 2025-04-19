"use client"

import { useState, useEffect } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { EnhancedSidebar } from "./enhanced-sidebar"
import { MobileOrganizationView } from "./mobile-organization-view"
import { OverviewView } from "./overview/overview-view"
import { VaultsView } from "./vaults/vaults-view"
import { MembersView } from "./members/members-view"
import { ActivityView } from "./activity/activity-view"
import { SettingsView } from "./settings/settings-view"
import { AnalyticsView } from "./analytics/analytics-view"
import { SecurityView } from "./security/security-view"
import { IntegrationsView } from "./integrations/integrations-view"
import { ReportsView } from "./reports/reports-view"
import { useIsMobile } from "@/hooks/use-mobile"

interface OrganizationViewProps {
  organizationSlug: string
  isTestOrg: boolean
}

export function OrganizationView({ organizationSlug, isTestOrg }: OrganizationViewProps) {
  const [activeSection, setActiveSection] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useIsMobile()

  // Safely check if organizationSlug starts with @ by providing a default empty string if undefined
  const organizationName = !organizationSlug
    ? ""
    : organizationSlug.startsWith("@")
      ? organizationSlug
      : organizationSlug === "test-yiyi"
        ? "@test-yiyi"
        : organizationSlug === "test-asavienko"
          ? "test-asavienko"
          : organizationSlug === "runtimeverification"
            ? "runtimeverification"
            : organizationSlug === "test"
              ? "@test"
              : organizationSlug

  // Safely check if organizationName starts with @
  const isGithubOrg = organizationName && organizationName.startsWith("@")
  const orgType = isGithubOrg ? "github" : "manual"

  // Mock organization data - enhanced for test-yiyi
  const organization = {
    name: organizationName,
    type: isGithubOrg ? "GitHub Organization" : "User-managed Organization",
    description: isTestOrg
      ? "Test organization for YiYi's development and testing purposes."
      : "This is a sample organization description.",
    createdAt: isTestOrg ? "January 15, 2024" : "April 7, 2023",
    members: isTestOrg ? 5 : 12,
    vaults: isTestOrg ? 8 : 24,
    isVerified: isTestOrg,
  }

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Render mobile view for small screens
  if (isMobile) {
    return (
      <MobileOrganizationView
        organization={organization}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isLoading={isLoading}
        isAdmin={isTestOrg}
      />
    )
  }

  // Render desktop view with sidebar
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-full">
        {/* Enhanced Sidebar Navigation */}
        <EnhancedSidebar
          organizationSlug={organizationName}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isAdmin={isTestOrg} // Give admin rights to test-yiyi
          isLoggedIn={true}
          isLoading={isLoading}
        />

        {/* Main Content - The SidebarInset will automatically adjust based on sidebar state */}
        <SidebarInset className="flex-1 bg-background">
          <div className="h-full overflow-auto">
            {isLoading ? (
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                  <p className="text-sm text-muted-foreground">Loading organization data...</p>
                </div>
              </div>
            ) : (
              <>
                {activeSection === "overview" && <OverviewView organization={organization} />}
                {activeSection === "vaults" && <VaultsView organization={organization} />}
                {activeSection === "members" && <MembersView organization={organization} />}
                {activeSection === "activity" && <ActivityView organization={organization} />}
                {activeSection === "reports" && <ReportsView />}
                {activeSection === "settings" && <SettingsView organization={organization} />}
                {activeSection === "analytics" && <AnalyticsView organization={organization} />}
                {activeSection === "security" && <SecurityView organization={organization} />}
                {activeSection === "integrations" && <IntegrationsView organization={organization} />}
              </>
            )}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
