export function QuickAccess() {
  const actions = [
    { label: "Create Vault", icon: "+" },
    { label: "Invite Member", icon: "+" },
    { label: "Run Verification", icon: "▶" },
    { label: "View Reports", icon: "📊" },
  ]

  return (
    <div className="border rounded-md p-4">
      <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => (
          <button key={action.label} className="border rounded p-2 text-sm flex items-center justify-center">
            <span className="mr-1">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  )
}
