export function VaultsListView() {
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
    <div className="border rounded-md overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Type</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Last Run</th>
            <th className="text-left p-3">Issues</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vaults.map((vault) => (
            <tr key={vault.id} className="border-b">
              <td className="p-3">
                <div className="font-medium">{vault.name}</div>
                <div className="text-xs text-gray-500">{vault.description}</div>
              </td>
              <td className="p-3">{vault.type}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    vault.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100"
                  }`}
                >
                  {vault.status}
                </span>
              </td>
              <td className="p-3">{vault.lastRun}</td>
              <td className="p-3">
                <span className={vault.issuesFound > 0 ? "text-red-600" : ""}>{vault.issuesFound}</span>
              </td>
              <td className="p-3">
                <div className="flex space-x-2">
                  <button className="border rounded p-1 text-xs">Run</button>
                  <button className="border rounded p-1 text-xs">View</button>
                  <button className="border rounded p-1 text-xs">⋯</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
