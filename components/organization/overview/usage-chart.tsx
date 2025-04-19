export function UsageChart() {
  const resources = [
    { name: "Compute", used: 65, total: 100 },
    { name: "Storage", used: 42, total: 100 },
    { name: "API Calls", used: 87, total: 100 },
    { name: "Verification Credits", used: 23, total: 100 },
  ]

  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <div key={resource.name} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{resource.name}</span>
            <span>
              {resource.used}/{resource.total} units
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-gray-600 h-2.5 rounded-full"
              style={{ width: `${(resource.used / resource.total) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}
