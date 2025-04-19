export function ResourceUsage({ resources }: { resources: Array<{ name: string; used: number; total: number }> }) {
  return (
    <div className="border rounded">
      <div className="border-b p-3">
        <h2 className="font-bold">Resource Usage</h2>
      </div>
      <div className="p-3 space-y-4">
        {resources.map((resource) => (
          <div key={resource.name}>
            <div className="flex justify-between mb-1">
              <div>{resource.name}</div>
              <div className="text-sm">
                {resource.used} / {resource.total}
              </div>
            </div>
            <div className="w-full h-4 border rounded overflow-hidden">
              <div className="h-full border-r" style={{ width: `${(resource.used / resource.total) * 100}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
