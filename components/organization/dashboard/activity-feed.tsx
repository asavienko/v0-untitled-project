export function ActivityFeed({
  activities,
}: { activities: Array<{ id: string; user: string; action: string; target: string; time: string }> }) {
  return (
    <div className="border rounded">
      <div className="border-b p-3">
        <h2 className="font-bold">Recent Activity</h2>
      </div>
      <div>
        {activities.map((activity) => (
          <div key={activity.id} className="border-b p-3">
            <div className="flex gap-2 mb-1">
              <div className="border w-8 h-8 rounded-full flex items-center justify-center text-xs">
                {activity.user.charAt(0).toUpperCase()}
              </div>
              <div>
                <div>
                  <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                  <span className="font-medium">{activity.target}</span>
                </div>
                <div className="text-xs">{activity.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
