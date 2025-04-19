export function TeamOverview() {
  const members = [
    { name: "John Doe", role: "Admin", status: "online" },
    { name: "Jane Smith", role: "Developer", status: "online" },
    { name: "Mike Johnson", role: "Auditor", status: "offline" },
    { name: "Sarah Williams", role: "Developer", status: "offline" },
  ]

  return (
    <div className="space-y-2">
      {members.map((member) => (
        <div key={member.name} className="border rounded p-2 flex items-center">
          <div className="w-8 h-8 rounded-full border flex items-center justify-center mr-3">
            {member.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="font-medium">{member.name}</div>
            <div className="text-xs text-gray-500">{member.role}</div>
          </div>
          <div className={`w-2 h-2 rounded-full ${member.status === "online" ? "bg-green-500" : "bg-gray-300"}`} />
        </div>
      ))}
      <button className="w-full border rounded p-2 text-sm mt-2">Manage Team</button>
    </div>
  )
}
