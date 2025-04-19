export function StatusPanel() {
  const services = [
    { name: "Verification Engine", status: "operational" },
    { name: "API Gateway", status: "operational" },
    { name: "Storage Service", status: "operational" },
    { name: "Authentication", status: "degraded" },
  ]

  return (
    <div className="border rounded-md p-4">
      <h2 className="text-lg font-medium mb-4">System Status</h2>
      <div className="space-y-2">
        {services.map((service) => (
          <div key={service.name} className="flex items-center justify-between border-b pb-2">
            <span>{service.name}</span>
            <span
              className={`px-2 py-1 rounded text-xs ${
                service.status === "operational"
                  ? "bg-green-100 text-green-800"
                  : service.status === "degraded"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {service.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
