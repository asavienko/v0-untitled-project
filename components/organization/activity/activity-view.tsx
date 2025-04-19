"use client"

import { useState } from "react"

export function ActivityView() {
  const [filter, setFilter] = useState("all")

  // Mock data for activities
  const activities = [
    {
      id: 1,
      user: "John Doe",
      action: "created a new vault",
      target: "Smart Contract Verification",
      time: "2 hours ago",
      type: "vault",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "invited",
      target: "alex@example.com",
      time: "5 hours ago",
      type: "member",
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "ran verification on",
      target: "TokenContract.sol",
      time: "Yesterday",
      type: "verification",
    },
    {
      id: 4,
      user: "Sarah Williams",
      action: "commented on",
      target: "Issue #42",
      time: "2 days ago",
      type: "issue",
    },
    {
      id: 5,
      user: "John Doe",
      action: "updated settings for",
      target: "Governance Protocol",
      time: "3 days ago",
      type: "vault",
    },
    {
      id: 6,
      user: "System",
      action: "detected issue in",
      target: "Lending Platform",
      time: "4 days ago",
      type: "issue",
    },
    {
      id: 7,
      user: "Jane Smith",
      action: "removed",
      target: "david@example.com",
      time: "1 week ago",
      type: "member",
    },
    {
      id: 8,
      user: "Mike Johnson",
      action: "created report for",
      target: "NFT Marketplace",
      time: "1 week ago",
      type: "verification",
    },
  ]

  const filteredActivities = filter === "all" ? activities : activities.filter((activity) => activity.type === filter)

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Activity Log</h1>

        <div className="flex items-center space-x-2">
          <span className="text-sm">Filter:</span>
          <select className="border rounded p-1" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Activity</option>
            <option value="vault">Vaults</option>
            <option value="member">Members</option>
            <option value="verification">Verifications</option>
            <option value="issue">Issues</option>
          </select>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <div className="space-y-4">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="flex border-b pb-4">
              <div className="mr-4 relative">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center">
                  {activity.user === "System" ? "S" : activity.user.charAt(0)}
                </div>
                {activity.id < activities.length && (
                  <div className="absolute top-8 bottom-0 left-4 w-0.5 -ml-px bg-gray-200" />
                )}
              </div>
              <div className="flex-1">
                <div className="text-sm">
                  <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                  <span className="font-medium">{activity.target}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                <div className="mt-2 text-sm">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      activity.type === "issue"
                        ? "bg-red-100 text-red-800"
                        : activity.type === "verification"
                          ? "bg-blue-100 text-blue-800"
                          : activity.type === "vault"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100"
                    }`}
                  >
                    {activity.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
