interface GeneralSettingsProps {
  organization: {
    name: string
    type: string
    description: string
    createdAt: string
  }
}

export function GeneralSettings({ organization }: GeneralSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="border rounded-md p-4">
        <h2 className="text-lg font-medium mb-4">Organization Information</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Organization Name</label>
            <input type="text" defaultValue={organization.name} className="w-full border rounded p-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Organization Type</label>
            <div className="border rounded p-2 bg-gray-50">{organization.type}</div>
            <div className="text-xs text-gray-500 mt-1">Organization type cannot be changed</div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea defaultValue={organization.description} className="w-full border rounded p-2 h-20"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Created At</label>
            <div className="border rounded p-2 bg-gray-50">{organization.createdAt}</div>
          </div>

          <button type="submit" className="border rounded p-2 bg-gray-100">
            Save Changes
          </button>
        </form>
      </div>

      <div className="border rounded-md p-4">
        <h2 className="text-lg font-medium mb-4">Notification Settings</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Email Notifications</div>
              <div className="text-sm text-gray-500">Receive email notifications for important events</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Slack Notifications</div>
              <div className="text-sm text-gray-500">Send notifications to a Slack channel</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Weekly Reports</div>
              <div className="text-sm text-gray-500">Receive weekly summary reports</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
