import { PlusCircle, ArrowUpRight } from "lucide-react"
import { MembersPanel } from "./members-panel"

interface Organization {
  name: string
  slug: string
  type: string
  members: number
  vaults: number
  createdAt: string
}

// Add a default value for the organization prop
export function OverviewPanel({
  organization = { name: "", slug: "", type: "", members: 0, vaults: 0, createdAt: "" },
}: { organization?: Organization }) {
  return (
    <div className="space-y-6">
      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Vaults", value: organization?.vaults ?? 0, change: "+2 this month" },
          { label: "Active Members", value: organization?.members ?? 0, change: "+3 this month" },
          { label: "Compute Usage", value: "64%", change: "12% less than last month" },
          { label: "Verification Rate", value: "98%", change: "2% higher than average" },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="text-sm text-gray-500">{stat.label}</div>
            <div className="text-2xl font-bold mt-1">{stat.value}</div>
            <div className="text-xs text-green-600 mt-1">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent activity */}
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Recent Activity</h2>
              <button className="text-sm text-blue-600 flex items-center">
                View all <ArrowUpRight size={14} className="ml-1" />
              </button>
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start p-2 hover:bg-gray-50 rounded-md">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-xs text-blue-700">U{item}</span>
                  </div>
                  <div>
                    <div className="text-sm">
                      <span className="font-medium">User {item}</span> updated vault settings
                    </div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent vaults */}
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Recent Vaults</h2>
              <button className="text-sm text-blue-600 flex items-center">
                View all <ArrowUpRight size={14} className="ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border rounded-md p-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-xs text-blue-700">V{item}</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Vault {item}</div>
                      <div className="text-xs text-gray-500">Last updated 3h ago</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - 1/3 width */}
        <div className="space-y-6">
          {/* Quick actions */}
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h2 className="font-medium mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white rounded-md py-2 px-4 text-sm font-medium flex items-center justify-center">
                <PlusCircle size={16} className="mr-2" />
                Create New Vault
              </button>
              <button className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm font-medium">
                Invite Team Member
              </button>
              <button className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm font-medium">
                Configure Settings
              </button>
            </div>
          </div>

          {/* Organization info */}
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h2 className="font-medium mb-4">Organization Info</h2>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500">Name</div>
                <div className="text-sm font-medium">{organization.name}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Type</div>
                <div className="text-sm font-medium">{organization.type}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Created</div>
                <div className="text-sm font-medium">{organization.createdAt}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Status</div>
                <div className="text-sm font-medium flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">Team Members</h2>
        <MembersPanel organization={organization} />
      </div>
    </div>
  )
}
