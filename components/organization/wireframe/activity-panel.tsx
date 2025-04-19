import { Search, Filter, Calendar } from "lucide-react"

interface Organization {
  name: string
  slug: string
  type: string
  members: number
  vaults: number
  createdAt: string
}

export function ActivityPanel({ organization }: { organization: Organization }) {
  // Generate mock activity data
  const activities = Array.from({ length: 10 }, (_, i) => ({
    id: `activity-${i + 1}`,
    user: `User ${(i % 5) + 1}`,
    action: i % 3 === 0 ? "created" : i % 3 === 1 ? "updated" : "deleted",
    target: i % 2 === 0 ? `Vault ${(i % 3) + 1}` : "settings",
    timestamp: new Date(Date.now() - i * 3600000).toISOString(),
    timeAgo: i === 0 ? "Just now" : i === 1 ? "1 hour ago" : `${i} hours ago`,
  }))

  return (
    <div className="space-y-6">
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-lg border shadow-sm">
        <div>
          <h2 className="font-medium">Activity Log</h2>
          <p className="text-sm text-gray-500">Track all actions in your organization</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="border rounded-md p-2">
            <Calendar size={16} />
          </button>
          <button className="border rounded-md p-2">
            <Filter size={16} />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search activity..." className="w-full pl-10 pr-4 py-2 border rounded-md" />
        </div>
      </div>

      {/* Activity timeline */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={activity.id} className="relative pl-10">
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-1.5 w-3 h-3 rounded-full transform -translate-x-1.5 ${
                    activity.action === "created"
                      ? "bg-green-500"
                      : activity.action === "updated"
                        ? "bg-blue-500"
                        : "bg-red-500"
                  }`}
                ></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <div className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-gray-600">{activity.action}</span>{" "}
                      <span className="font-medium">{activity.target}</span>
                    </div>
                    <div className="text-xs text-gray-500">{activity.timeAgo}</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 sm:mt-0">
                    {new Date(activity.timestamp).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Load more button */}
      <div className="flex justify-center">
        <button className="bg-white border rounded-md py-2 px-4 text-sm font-medium text-gray-600 hover:bg-gray-50">
          Load More
        </button>
      </div>
    </div>
  )
}
