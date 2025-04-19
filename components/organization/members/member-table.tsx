export function MemberTable() {
  // Mock data for members
  const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      joined: "Jan 15, 2023",
      status: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Developer",
      joined: "Mar 22, 2023",
      status: "active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Auditor",
      joined: "Feb 10, 2023",
      status: "inactive",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      role: "Developer",
      joined: "Apr 5, 2023",
      status: "active",
    },
  ]

  return (
    <div className="border rounded-md overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Role</th>
            <th className="text-left p-3">Joined</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center mr-3">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-xs text-gray-500">{member.email}</div>
                  </div>
                </div>
              </td>
              <td className="p-3">{member.role}</td>
              <td className="p-3">{member.joined}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    member.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100"
                  }`}
                >
                  {member.status}
                </span>
              </td>
              <td className="p-3">
                <div className="flex space-x-2">
                  <button className="border rounded p-1 text-xs">Edit</button>
                  <button className="border rounded p-1 text-xs">Remove</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
