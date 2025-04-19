"use client"

import { useState } from "react"
import { VaultsGridView } from "./vaults-grid-view"
import { VaultsListView } from "./vaults-list-view"

export function VaultsView() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vaults</h1>

        <div className="flex space-x-2">
          <button
            className={`border rounded p-2 ${viewMode === "grid" ? "bg-gray-100" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </button>
          <button
            className={`border rounded p-2 ${viewMode === "list" ? "bg-gray-100" : ""}`}
            onClick={() => setViewMode("list")}
          >
            List
          </button>
          <button className="border rounded p-2 ml-4">+ New Vault</button>
        </div>
      </div>

      {/* Filters */}
      <div className="border rounded-md p-4 flex flex-wrap gap-2">
        <div className="flex items-center">
          <span className="mr-2">Status:</span>
          <select className="border rounded p-1">
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="flex items-center">
          <span className="mr-2">Type:</span>
          <select className="border rounded p-1">
            <option>All</option>
            <option>Smart Contract</option>
            <option>Protocol</option>
          </select>
        </div>

        <div className="flex items-center">
          <span className="mr-2">Sort:</span>
          <select className="border rounded p-1">
            <option>Newest</option>
            <option>Oldest</option>
            <option>Name (A-Z)</option>
          </select>
        </div>

        <div className="flex-1"></div>

        <div className="flex items-center">
          <input type="text" placeholder="Search vaults..." className="border rounded p-1" />
        </div>
      </div>

      {/* Content */}
      {viewMode === "grid" ? <VaultsGridView /> : <VaultsListView />}
    </div>
  )
}
