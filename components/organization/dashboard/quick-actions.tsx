export function QuickActions() {
  const actions = [
    { id: "create-vault", label: "Create new vault" },
    { id: "invite-members", label: "Invite team members" },
    { id: "connect-github", label: "Connect GitHub repository" },
    { id: "setup-webhook", label: "Set up webhook" },
  ]

  return (
    <div className="border rounded">
      <div className="border-b p-3">
        <h2 className="font-bold">Quick Actions</h2>
      </div>
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {actions.map((action) => (
          <button key={action.id} className="border p-2 rounded text-left">
            {action.label}
          </button>
        ))}
      </div>
    </div>
  )
}
