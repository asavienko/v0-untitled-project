"use client"

import { useState } from "react"
import { MemberTable } from "./member-table"
import { InviteForm } from "./invite-form"
import { PendingInvites } from "./pending-invites"
import { useIsMobile } from "@/hooks/use-mobile"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter, MoreHorizontal } from "lucide-react"

export function MembersView() {
  const isMobile = useIsMobile()
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for members (same as in MemberTable)
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

  // Filter members based on search query
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="p-3 sm:p-4 space-y-4">
      <h1 className="text-2xl font-bold">Team Members</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <div className="flex items-center gap-2 w-full">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search members..."
                  className="pl-8 pr-4 py-2 w-full border rounded-md text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="h-9 w-9 flex-shrink-0">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {isMobile ? (
            // Mobile card view
            <div className="space-y-3">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <div key={member.id} className="border rounded-md p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-xs text-muted-foreground">{member.email}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                      <div>
                        <div className="text-xs text-muted-foreground">Role</div>
                        <div>
                          <Badge
                            variant="outline"
                            className={
                              member.role === "Admin"
                                ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                : member.role === "Auditor"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                            }
                          >
                            {member.role}
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-muted-foreground">Status</div>
                        <div>
                          <Badge
                            variant="outline"
                            className={
                              member.status === "active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                            }
                          >
                            {member.status}
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-muted-foreground">Joined</div>
                        <div>{member.joined}</div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">No members found</div>
              )}
            </div>
          ) : (
            // Desktop table view
            <MemberTable />
          )}
        </div>

        <div className="space-y-4">
          <div className="border rounded-md p-4">
            <h2 className="text-lg font-medium mb-4">Invite New Member</h2>
            <InviteForm />
          </div>

          <div className="border rounded-md p-4">
            <h2 className="text-lg font-medium mb-4">Pending Invites</h2>
            <PendingInvites />
          </div>
        </div>
      </div>
    </div>
  )
}
