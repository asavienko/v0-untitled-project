import { PlusCircle, Search, MoreHorizontal } from "lucide-react"

interface Organization {
  name: string
  slug: string
  type: string
  members: number
  vaults: number
  createdAt: string
}

// Update the MembersPanel component to handle undefined organization prop

// Add default values to the destructured organization prop
export function MembersPanel({
  organization = { name: "", slug: "", type: "", members: 0, vaults: 0, createdAt: "" },
}: { organization?: Organization }) {
  // Generate mock member data based on the organization's member count
  // Use optional chaining and nullish coalescing to safely access organization.members
  const memberCount = organization?.members ?? 0
  const members = Array.from({ length: memberCount }, (_, i) => ({
    id: `member-${i + 1}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i === 0 ? "Admin" : i % 3 === 0 ? "Owner" : "Member",
    status: i % 4 === 0 ? "Invited" : "Active",
    joinedAt: `2023-${(i % 12) + 1}-${(i % 28) + 1}`,
    lastActive: i === 0 ? "Now" : `${i}h ago`,
  }))

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-lg border shadow-sm">
        <div>
          <h2 className="font-medium">Team Members</h2>
          <p className="text-sm text-gray-500">Manage your organization's team</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 text-white rounded-md py-2 px-4 text-sm font-medium flex items-center">
            <PlusCircle size={16} className="mr-2" />
            Invite Member
          </button>
        </div>
      </div>

      {/* Search and filters */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search members..." className="w-full pl-10 pr-4 py-2 border rounded-md" />
        </div>
      </div>

      {/* Members list */}
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Active
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-xs font-medium text-blue-700">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      member.role === "Admin"
                        ? "bg-purple-100 text-purple-800"
                        : member.role === "Owner"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {member.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      member.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.lastActive}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pending invitations */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <h3 className="font-medium mb-4">Pending Invitations</h3>
        <div className="space-y-3">
          {[1, 2].map((item) => (
            <div key={item} className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <div className="text-sm font-medium">invited-user{item}@example.com</div>
                <div className="text-xs text-gray-500">Invited 2 days ago</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs text-blue-600">Resend</button>
                <button className="text-xs text-red-600">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
