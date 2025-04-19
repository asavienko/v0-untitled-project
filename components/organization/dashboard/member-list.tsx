export function MemberList({ members }: { members: Array<{ id: string; name: string; role: string; email: string }> }) {
  return (
    <div className="border rounded">
      <div className="border-b p-3 flex justify-between items-center">
        <h2 className="font-bold">Members</h2>
        <button className="border px-2 py-1 rounded text-sm">Manage</button>
      </div>
      <div>
        {members.map((member) => (
          <div key={member.id} className="border-b p-3 flex justify-between items-center">
            <div>
              <div className="font-medium">{member.name}</div>
              <div className="text-xs">{member.email}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="border px-2 py-0.5 rounded-full text-xs">{member.role}</span>
              <button className="border px-2 py-1 rounded text-sm">...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
