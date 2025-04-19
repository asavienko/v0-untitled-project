export function VaultGrid({
  vaults,
}: { vaults: Array<{ id: string; name: string; status: string; lastUpdated: string }> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Create Vault Card */}
      <div className="border rounded p-4 flex flex-col items-center justify-center h-48">
        <div className="border rounded-full w-12 h-12 flex items-center justify-center mb-2">+</div>
        <div className="font-medium">Create New Vault</div>
        <div className="text-xs mb-4">Set up a new verification environment</div>
        <button className="border px-3 py-1 rounded">Create Vault</button>
      </div>

      {/* Vault Cards */}
      {vaults.map((vault) => (
        <div key={vault.id} className="border rounded p-4 h-48 flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="font-bold">{vault.name}</div>
            <div className="border px-2 rounded-full text-xs">{vault.status}</div>
          </div>
          <div className="text-xs mb-2">Last updated: {vault.lastUpdated}</div>
          <div className="border-t my-2"></div>
          <div className="flex justify-between mt-auto">
            <button className="border px-3 py-1 rounded text-sm">Open</button>
            <div className="flex gap-2">
              <button className="border px-2 py-1 rounded text-sm">Settings</button>
              <button className="border px-2 py-1 rounded text-sm">...</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
