export function OrgHeader({ name, type }: { name: string; type: string }) {
  return (
    <div className="border-b p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="border w-12 h-12 flex items-center justify-center rounded">
            {type === "github" ? "GH" : "ORG"}
          </div>
          <div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm">{type === "github" ? "GitHub Organization" : "User-managed Organization"}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded">Settings</button>
          <button className="border px-3 py-1 rounded">Invite</button>
          <button className="border px-3 py-1 rounded">+ New Vault</button>
        </div>
      </div>
    </div>
  )
}
