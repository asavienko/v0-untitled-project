import { SummaryCard } from "./summary-card"
import { VaultList } from "./vault-list"
import { MemberList } from "./member-list"
import { ActivityFeed } from "./activity-feed"
import { ResourceUsage } from "./resource-usage"
import { IntegrationList } from "./integration-list"
import { QuickActions } from "./quick-actions"
import { NotificationCenter } from "./notification-center"

export function DashboardView({ organizationSlug }: { organizationSlug: string }) {
  // Mock data
  const vaults = [
    { id: "1", name: "Main Vault", lastUpdated: "2 hours ago" },
    { id: "2", name: "Development Vault", lastUpdated: "1 day ago" },
    { id: "3", name: "Testing Vault", lastUpdated: "3 days ago" },
  ]

  const members = [
    { id: "1", name: "Alex Johnson", role: "Admin", email: "alex@example.com" },
    { id: "2", name: "Sarah Miller", role: "Member", email: "sarah@example.com" },
  ]

  const activities = [
    { id: "1", user: "Alex", action: "created vault", target: "Main Vault", time: "2 hours ago" },
    { id: "2", user: "Sarah", action: "updated settings for", target: "Development Vault", time: "1 day ago" },
    { id: "3", user: "System", action: "performed maintenance on", target: "All vaults", time: "3 days ago" },
  ]

  const resources = [
    { name: "Storage", used: 15, total: 100 },
    { name: "Compute Credits", used: 450, total: 1000 },
    { name: "API Calls", used: 8750, total: 10000 },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="Total Vaults" value={vaults.length} description="Last created 2 hours ago" />
        <SummaryCard title="Team Members" value={members.length} description="2 active this week" />
        <SummaryCard title="Storage Used" value="15%" description="85 GB available" />
        <SummaryCard title="Verification Runs" value="24" description="This month" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <VaultList vaults={vaults} />
          <ActivityFeed activities={activities} />
          <ResourceUsage resources={resources} />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <NotificationCenter />
          <MemberList members={members} />
          <QuickActions />
          <IntegrationList />
        </div>
      </div>
    </div>
  )
}
