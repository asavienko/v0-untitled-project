export function PendingInvites() {
  // Mock data for pending invites
  const pendingInvites = [
    {
      id: 1,
      email: "alex@example.com",
      role: "Developer",
      sent: "2 days ago",
    },
    {
      id: 2,
      email: "taylor@example.com",
      role: "Auditor",
      sent: "1 week ago",
    },
  ]

  return (
    <div className="space-y-2">
      {pendingInvites.length > 0 ? (
        pendingInvites.map((invite) => (
          <div key={invite.id} className="border rounded p-3">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{invite.email}</div>
                <div className="text-xs text-gray-500">
                  Role: {invite.role} • Sent: {invite.sent}
                </div>
              </div>
              <button className="text-xs border rounded px-2">Cancel</button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500 py-4">No pending invites</div>
      )}
    </div>
  )
}
