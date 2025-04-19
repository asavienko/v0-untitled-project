export function NotificationCenter() {
  const notifications = [
    { id: "1", type: "info", message: "Your trial ends in 7 days", time: "2 hours ago" },
    { id: "2", type: "warning", message: "Vault 'Main' is approaching storage limit", time: "1 day ago" },
  ]

  return (
    <div className="border rounded">
      <div className="border-b p-3 flex justify-between items-center">
        <h2 className="font-bold">Notifications</h2>
        <button className="border px-2 py-1 rounded text-sm">Mark all read</button>
      </div>
      <div>
        {notifications.map((notification) => (
          <div key={notification.id} className="border-b p-3">
            <div className="flex justify-between mb-1">
              <div>{notification.message}</div>
              <div className="border px-2 rounded-full text-xs">{notification.type}</div>
            </div>
            <div className="text-xs">{notification.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
