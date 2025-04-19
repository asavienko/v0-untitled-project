export function IntegrationList() {
  const integrations = [
    { id: "github", name: "GitHub", status: "Connected" },
    { id: "slack", name: "Slack", status: "Not connected" },
    { id: "jira", name: "Jira", status: "Not connected" },
  ]

  return (
    <div className="border rounded">
      <div className="border-b p-3">
        <h2 className="font-bold">Integrations</h2>
      </div>
      <div>
        {integrations.map((integration) => (
          <div key={integration.id} className="border-b p-3 flex justify-between items-center">
            <div>
              <div className="font-medium">{integration.name}</div>
              <div className="text-xs">{integration.status}</div>
            </div>
            <button className="border px-2 py-1 rounded text-sm">
              {integration.status === "Connected" ? "Configure" : "Connect"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
