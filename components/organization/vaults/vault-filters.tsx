export function VaultFilters({ onFilterChange }: { onFilterChange: (filters: any) => void }) {
  return (
    <div className="border rounded p-4 mb-4">
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm mb-1">Status</label>
          <select className="border p-1 rounded w-full">
            <option>All</option>
            <option>Active</option>
            <option>Archived</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Sort By</label>
          <select className="border p-1 rounded w-full">
            <option>Last Updated</option>
            <option>Name</option>
            <option>Created Date</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Search</label>
          <input type="text" className="border p-1 rounded w-full" placeholder="Search vaults..." />
        </div>
        <div className="flex items-end">
          <button className="border px-3 py-1 rounded">Apply Filters</button>
        </div>
      </div>
    </div>
  )
}
