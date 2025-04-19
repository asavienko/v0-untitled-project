export function SummaryCard({
  title,
  value,
  description,
}: { title: string; value: string | number; description?: string }) {
  return (
    <div className="border rounded p-3">
      <div className="text-sm mb-1">{title}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      {description && <div className="text-xs">{description}</div>}
    </div>
  )
}
