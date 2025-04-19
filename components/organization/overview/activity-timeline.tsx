export function ActivityTimeline() {
  const activities = [
    {
      user: "John Doe",
      action: "created a new vault",
      target: "Contract Verification",
      time: "2 hours ago",
    },
    {
      user: "Jane Smith",
      action: "invited",
      target: "alex@example.com",
      time: "5 hours ago",
    },
    {
      user: "Mike Johnson",
      action: "ran verification on",
      target: "TokenContract.sol",
      time: "Yesterday",
    },
    {
      user: "Sarah Williams",
      action: "commented on",
      target: "Issue #42",
      time: "2 days ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex">
          <div className="mr-4 relative">
            <div className="w-8 h-8 rounded-full border flex items-center justify-center">
              {activity.user.charAt(0)}
            </div>
            {index < activities.length - 1 && (
              <div className="absolute top-8 bottom-0 left-4 w-0.5 -ml-px bg-gray-200" />
            )}
          </div>
          <div className="flex-1">
            <div className="text-sm">
              <span className="font-medium">{activity.user}</span> {activity.action}{" "}
              <span className="font-medium">{activity.target}</span>
            </div>
            <div className="text-xs text-gray-500">{activity.time}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
