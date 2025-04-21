export function VaultsGridView() {
  // Mock data for vaults
  const vaults = [
    {
      id: 1,
      name: "Smart Contract Verification",
      description: "Verification for ERC20 token implementation",
      status: "active",
      type: "Smart Contract",
      lastRun: "2 hours ago",
      issuesFound: 2,
    },
    {
      id: 2,
      name: "Governance Protocol",
      description: "DAO governance protocol verification",
      status: "inactive",
      type: "Protocol",
      lastRun: "3 days ago",
      issuesFound: 0,
    },
    {
      id: 3,
      name: "Lending Platform",
      description: "DeFi lending platform verification",
      status: "active",
      type: "Smart Contract",
      lastRun: "1 day ago",
      issuesFound: 5,
    },
    {
      id: 4,
      name: "NFT Marketplace",
      description: "NFT trading platform verification",
      status: "active",
      type: "Smart Contract",
      lastRun: "12 hours ago",
      issuesFound: 1,
    },
    {
      id: 5,
      name: "Staking Contract",
      description: "Token staking implementation",
      status: "inactive",
      type: "Smart Contract",
      lastRun: "1 week ago",
      issuesFound: 0,
    },
    {
      id: 6,
      name: "Cross-chain Bridge",
      description: "Token bridge between chains",
      status: "active",
      type: "Protocol",
      lastRun: "5 hours ago",
      issuesFound: 3,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {vaults.map((vault) => (
        <div key={vault.id} className="border rounded-md p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium">{vault.name}</h3>
            <span
              className={`px-2 py-1 rounded text-xs ${
                vault.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100"
              }`}
            >
              {vault.status}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">{vault.description}</p>
          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex justify-between">
              <span>Type:</span>
              <span>{vault.type}</span>
            </div>
            <div className="flex justify-between">
              <span>Last run:</span>
              <span>{vault.lastRun}</span>
            </div>
            <div className="flex justify-between">
              <span>Issues found:</span>
              <span className={vault.issuesFound > 0 ? "text-red-600" : ""}>{vault.issuesFound}</span>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="border rounded p-1 text-xs flex-1">Run</button>
            <button className="border rounded p-1 text-xs flex-1">View</button>
            <button className="border rounded p-1 text-xs flex-1">Settings</button>
          </div>
        </div>
      ))}
    </div>
  )
}
