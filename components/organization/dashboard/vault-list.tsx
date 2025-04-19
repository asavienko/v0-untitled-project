export function VaultList({ vaults }: { vaults: Array<{ id: string; name: string; lastUpdated: string }> }) {
  return (
    <div className="border rounded">
      <div className="border-b p-3 flex justify-between items-center">
        <h2 className="font-bold">Vaults</h2>
        <button className="border px-2 py-1 rounded text-sm">View All</button>
      </div>
      <div>
        {vaults.length > 0 ? (
          vaults.map((vault) => (
            <div key={vault.id} className="border-b p-3 flex justify-between items-center">
              <div>
                <div className="font-medium">{vault.name}</div>
                <div className="text-xs">Last updated: {vault.lastUpdated}</div>
              </div>
              <div className="flex gap-2">
                <button className="border px-2 py-1 rounded text-sm">Open</button>
                <button className="border px-2 py-1 rounded text-sm">...</button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center">
            <div className="mb-2">No vaults found</div>
            <button className="border px-3 py-1 rounded">Create Vault</button>
          </div>
        )}
      </div>
    </div>
  )
}
