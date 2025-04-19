export function VaultCard({ vault }: { vault: any }) {
  return (
    <div className="border rounded">
      <div className="border-b p-3">
        <h3 className="font-bold">{vault.name}</h3>
      </div>
      <div className="p-3">
        <div className="mb-2">
          <div className="text-sm">Status</div>
          <div className="flex items-center">
            <span className="mr-2">●</span>
            <span>{vault.status}</span>
          </div>
        </div>
        <div className="mb-2">
          <div className="text-sm">Last Updated</div>
          <div>{vault.lastUpdated}</div>
        </div>
        <div className="mb-2">
          <div className="text-sm">Storage</div>
          <div className="w-full h-2 border rounded-full overflow-hidden">
            <div className="h-full" style={{ width: `${vault.storageUsed}%` }}></div>
          </div>
        </div>
      </div>
      <div className="border-t p-3 flex justify-between">
        <button className="border rounded px-2 py-1 text-sm">Open</button>
        <button className="border rounded px-2 py-1 text-sm">Settings</button>
      </div>
    </div>
  )
}
