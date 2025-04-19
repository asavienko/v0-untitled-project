export function RecentVaults() {
  const vaults = [
    { name: "Smart Contract Verification", lastActive: "2 hours ago", status: "active" },
    { name: "Token Implementation", lastActive: "1 day ago", status: "active" },
    { name: "Governance Protocol", lastActive: "3 days ago", status: "inactive" },
  ]

  return (
    <div className="space-y-2">
      {vaults.map((vault) => (
        <div key={vault.name} className="border rounded p-3 flex justify-between items-center">
          <div>
            <div className="font-medium">{vault.name}</div>
            <div className="text-xs text-gray-500">Last active: {vault.lastActive}</div>
          </div>
          <div
            className={`px-2 py-1 rounded text-xs ${
              vault.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100"
            }`}
          >
            {vault.status}
          </div>
        </div>
      ))}
      <button className="w-full border rounded p-2 text-sm mt-2">View All Vaults</button>
    </div>
  )
}
