"use client"

import { PlusCircle, Grid, List, Filter, Search } from "lucide-react"
import { useState } from "react"

interface Organization {
  name: string
  slug: string
  type: string
  members: number
  vaults: number
  createdAt: string
}

export function VaultsPanel({ organization }: { organization: Organization }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Generate mock vault data based on the organization's vault count
  const vaults = Array.from({ length: organization.vaults }, (_, i) => ({
    id: `vault-${i + 1}`,
    name: `Vault ${i + 1}`,
    description: `Description for Vault ${i + 1}`,
    status: i % 3 === 0 ? "active" : i % 3 === 1 ? "inactive" : "pending",
    lastUpdated: `${i + 1}h ago`,
    createdAt: `2023-${(i % 12) + 1}-${(i % 28) + 1}`,
  }))

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-lg border shadow-sm">
        <div>
          <h2 className="font-medium">Vaults</h2>
          <p className="text-sm text-gray-500">Manage your organization's vaults</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 text-white rounded-md py-2 px-4 text-sm font-medium flex items-center">
            <PlusCircle size={16} className="mr-2" />
            New Vault
          </button>
        </div>
      </div>

      {/* Filters and view toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-lg border shadow-sm">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search vaults..." className="w-full pl-10 pr-4 py-2 border rounded-md" />
        </div>
        <div className="flex items-center gap-2">
          <button className="border rounded-md p-2">
            <Filter size={16} />
          </button>
          <div className="flex border rounded-md overflow-hidden">
            <button
              className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : "bg-white"}`}
              onClick={() => setViewMode("grid")}
            >
              <Grid size={16} />
            </button>
            <button
              className={`p-2 ${viewMode === "list" ? "bg-gray-100" : "bg-white"}`}
              onClick={() => setViewMode("list")}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Vaults grid/list */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vaults.map((vault) => (
            <div key={vault.id} className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-blue-700">{vault.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{vault.name}</h3>
                    <p className="text-xs text-gray-500">Created: {vault.createdAt}</p>
                  </div>
                </div>
                <div
                  className={`text-xs px-2 py-1 rounded-full ${
                    vault.status === "active"
                      ? "bg-green-100 text-green-800"
                      : vault.status === "inactive"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {vault.status}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">{vault.description}</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t">
                <span className="text-xs text-gray-500">Updated {vault.lastUpdated}</span>
                <button className="text-xs text-blue-600">View Details</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vaults.map((vault) => (
                <tr key={vault.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-xs font-medium text-blue-700">{vault.name.charAt(0)}</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900">{vault.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        vault.status === "active"
                          ? "bg-green-100 text-green-800"
                          : vault.status === "inactive"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {vault.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vault.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vault.lastUpdated}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
