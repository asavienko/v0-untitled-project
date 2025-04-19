export function DangerZone() {
  return (
    <div className="border rounded-md p-4 border-red-200 bg-red-50">
      <h2 className="text-lg font-medium mb-4 text-red-800">Danger Zone</h2>
      <div className="space-y-4">
        <div className="border rounded p-3 border-red-200 bg-white">
          <div className="font-medium">Transfer Ownership</div>
          <div className="text-sm text-gray-500 mb-2">Transfer this organization to another user</div>
          <button className="border border-red-300 rounded p-2 text-sm text-red-700">Transfer Ownership</button>
        </div>

        <div className="border rounded p-3 border-red-200 bg-white">
          <div className="font-medium">Archive Organization</div>
          <div className="text-sm text-gray-500 mb-2">Archive this organization and all its data</div>
          <button className="border border-red-300 rounded p-2 text-sm text-red-700">Archive Organization</button>
        </div>

        <div className="border rounded p-3 border-red-200 bg-white">
          <div className="font-medium">Delete Organization</div>
          <div className="text-sm text-gray-500 mb-2">Permanently delete this organization and all its data</div>
          <button className="border border-red-300 rounded p-2 text-sm text-red-700">Delete Organization</button>
        </div>
      </div>
    </div>
  )
}
