"use client"

import { MemberTable } from "./member-table"
import { InviteForm } from "./invite-form"
import { PendingInvites } from "./pending-invites"

export function MembersView() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Team Members</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="border rounded-md p-4">
            <h2 className="text-lg font-medium mb-4">Members</h2>
            <MemberTable />
          </div>
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
