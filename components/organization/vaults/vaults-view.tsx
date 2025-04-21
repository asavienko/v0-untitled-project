"use client"

import { useState } from "react"
import { VaultsGridView } from "./vaults-grid-view"
import { VaultsListView } from "./vaults-list-view"
import { Search, Filter, X } from "lucide-react"

export function VaultsView() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 max-w-full overflow-hidden">
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

      {/* Mobile Search and Filter Toggle */}
      <div className="sm:hidden flex items-center gap-2 w-full">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search vaults..."
            className="w-full border rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          />
        </div>
        <button
          className={`flex items-center justify-center p-2 border rounded-md ${showFilters ? "bg-gray-100" : ""}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-5 w-5" />
        </button>
      </div>

      {/* Filters - Collapsible on Mobile */}
      <div className={`border rounded-md p-4 ${showFilters ? "block" : "hidden"} sm:block`}>
        <div className="flex justify-between items-center mb-3 sm:hidden">
          <h3 className="font-medium">Filters</h3>
          <button onClick={() => setShowFilters(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <label className="text-sm font-medium">Status:</label>
            <select className="border rounded-md p-2 w-full sm:w-auto">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <label className="text-sm font-medium">Type:</label>
            <select className="border rounded-md p-2 w-full sm:w-auto">
              <option>All</option>
              <option>Smart Contract</option>
              <option>Protocol</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <label className="text-sm font-medium">Sort:</label>
            <select className="border rounded-md p-2 w-full sm:w-auto">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Name (A-Z)</option>
            </select>
          </div>

          {/* Desktop Search - Hidden on Mobile */}
          <div className="hidden sm:block flex-1"></div>
          <div className="relative hidden sm:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search vaults..."
              className="w-64 border rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      {viewMode === "grid" ? <VaultsGridView /> : <VaultsListView />}
    </div>
  )
}
