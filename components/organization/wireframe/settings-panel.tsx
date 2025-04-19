"use client"

import { useState } from "react"

interface Organization {
  name: string
  slug: string
  type: string
  members: number
  vaults: number
  createdAt: string
}

export function SettingsPanel({ organization }: { organization: Organization }) {
  const [activeTab, setActiveTab] = useState("general")

  const tabs = [
    { id: "general", label: "General" },
    { id: "security", label: "Security" },
    { id: "billing", label: "Billing" },
    { id: "notifications", label: "Notifications" },
    { id: "integrations", label: "Integrations" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <h2 className="font-medium">Organization Settings</h2>
        <p className="text-sm text-gray-500">Manage your organization preferences</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4">
          {activeTab === "general" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md" defaultValue={organization.name} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Slug</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    example.com/org/
                  </span>
                  <input
                    type="text"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border focus:ring-blue-500 focus:border-blue-500"
                    defaultValue={organization.slug}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">This is the URL identifier for your organization.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                  defaultValue={organization.description}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                  <option value="personal">Personal</option>
                </select>
              </div>
              <div className="pt-4">
                <button className="bg-blue-600 text-white rounded-md py-2 px-4 text-sm font-medium">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div>
                    <p className="text-sm">Require 2FA for all organization members</p>
                    <p className="text-xs text-gray-500">Enhance security by requiring two-factor authentication</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" id="toggle" className="sr-only" />
                    <label
                      htmlFor="toggle"
                      className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    >
                      <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Session Management</h3>
                <div className="p-3 bg-gray-50 rounded-md">
                  <p className="text-sm">Force sign out of all sessions</p>
                  <p className="text-xs text-gray-500 mb-2">
                    This will sign out all users from all devices except your current session
                  </p>
                  <button className="bg-red-600 text-white rounded-md py-1.5 px-3 text-xs font-medium">
                    Sign Out All Sessions
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">API Access</h3>
                <div className="p-3 bg-gray-50 rounded-md">
                  <p className="text-sm">Manage API keys</p>
                  <p className="text-xs text-gray-500 mb-2">Create and manage API keys for programmatic access</p>
                  <button className="bg-blue-600 text-white rounded-md py-1.5 px-3 text-xs font-medium">
                    Manage API Keys
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-md">
                <h3 className="text-sm font-medium">Current Plan</h3>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-lg font-bold">Pro Plan</p>
                    <p className="text-xs text-gray-500">$49/month, billed monthly</p>
                  </div>
                  <button className="bg-blue-600 text-white rounded-md py-1.5 px-3 text-xs font-medium">
                    Upgrade Plan
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Payment Method</h3>
                <div className="p-3 border rounded-md flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-6 bg-gray-200 rounded mr-3"></div>
                    <div>
                      <p className="text-sm">Visa ending in 4242</p>
                      <p className="text-xs text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <button className="text-blue-600 text-xs font-medium">Update</button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Billing History</h3>
                <div className="border rounded-md overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Invoice
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[1, 2, 3].map((item) => (
                        <tr key={item}>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">Apr {item}, 2023</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">$49.00</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">
                            <span className="px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-800">Paid</span>
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-right">
                            <button className="text-blue-600 text-xs">Download</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Email Notifications</h3>
                <div className="space-y-2">
                  {["Security alerts", "Billing updates", "Team activity", "Vault updates"].map((item) => (
                    <div key={item} className="flex items-center justify-between p-2 border rounded-md">
                      <div className="text-sm">{item}</div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input type="checkbox" id={`toggle-${item}`} className="sr-only" defaultChecked />
                        <label
                          htmlFor={`toggle-${item}`}
                          className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        >
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform"></span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Notification Preferences</h3>
                <div className="p-3 bg-gray-50 rounded-md">
                  <div className="mb-3">
                    <label className="block text-sm mb-1">Notification Frequency</label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option>Immediately</option>
                      <option>Daily digest</option>
                      <option>Weekly digest</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Email Format</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="format" className="mr-2" defaultChecked />
                        <span className="text-sm">HTML</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="format" className="mr-2" />
                        <span className="text-sm">Plain text</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["GitHub", "Slack", "Jira", "Google Workspace"].map((integration) => (
                  <div key={integration} className="border rounded-md p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-md mr-3"></div>
                        <div>
                          <h3 className="text-sm font-medium">{integration}</h3>
                          <p className="text-xs text-gray-500">
                            {integration === "GitHub" || integration === "Slack" ? "Connected" : "Not connected"}
                          </p>
                        </div>
                      </div>
                      <button
                        className={`text-xs font-medium px-3 py-1.5 rounded-md ${
                          integration === "GitHub" || integration === "Slack"
                            ? "bg-gray-200 text-gray-800"
                            : "bg-blue-600 text-white"
                        }`}
                      >
                        {integration === "GitHub" || integration === "Slack" ? "Configure" : "Connect"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <button className="text-blue-600 text-sm font-medium flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Browse more integrations
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
