export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <div className="border rounded-md p-4">
        <h2 className="text-lg font-medium mb-4">Access Control</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Two-Factor Authentication</div>
              <div className="text-sm text-gray-500">Require 2FA for all organization members</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">IP Restrictions</div>
              <div className="text-sm text-gray-500">Limit access to specific IP addresses</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Single Sign-On</div>
              <div className="text-sm text-gray-500">Enable SSO with your identity provider</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <h2 className="text-lg font-medium mb-4">API Keys</h2>
        <div className="space-y-4">
          <div className="border rounded p-3 flex justify-between items-center">
            <div>
              <div className="font-medium">Production API Key</div>
              <div className="text-xs text-gray-500">Created: Jan 15, 2023</div>
            </div>
            <div className="flex space-x-2">
              <button className="border rounded p-1 text-xs">Rotate</button>
              <button className="border rounded p-1 text-xs">Revoke</button>
            </div>
          </div>

          <div className="border rounded p-3 flex justify-between items-center">
            <div>
              <div className="font-medium">Development API Key</div>
              <div className="text-xs text-gray-500">Created: Mar 22, 2023</div>
            </div>
            <div className="flex space-x-2">
              <button className="border rounded p-1 text-xs">Rotate</button>
              <button className="border rounded p-1 text-xs">Revoke</button>
            </div>
          </div>

          <button className="border rounded p-2 text-sm">+ Generate New API Key</button>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <h2 className="text-lg font-medium mb-4">Audit Log</h2>
        <div className="space-y-2">
          <div className="border rounded p-3">
            <div className="font-medium">Security Audit Log</div>
            <div className="text-sm text-gray-500">View a log of all security-related events</div>
          </div>

          <button className="border rounded p-2 text-sm">View Audit Log</button>
        </div>
      </div>
    </div>
  )
}
