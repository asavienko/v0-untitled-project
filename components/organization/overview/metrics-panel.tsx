export function MetricsPanel() {
  const metrics = [
    { label: "Total Vaults", value: "12", trend: "up", percent: "8%" },
    { label: "Active Users", value: "24", trend: "up", percent: "12%" },
    { label: "Verification Runs", value: "156", trend: "up", percent: "23%" },
    { label: "Issues Found", value: "7", trend: "down", percent: "5%" },
  ]

  return (
    <div className="border rounded-md p-4">
      <h2 className="text-lg font-medium mb-4">Key Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="border rounded p-2">
            <div className="text-sm text-gray-500">{metric.label}</div>
            <div className="text-xl font-bold">{metric.value}</div>
            <div className={`text-xs ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {metric.trend === "up" ? "↑" : "↓"} {metric.percent}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
