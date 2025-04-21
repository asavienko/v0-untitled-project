"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Filter, Search, Plus, ArrowUpDown, LayoutGrid, List, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

// Sample list of reports
const recentReports = [
  {
    id: "rep-001",
    name: "CounterTest Report",
    date: "April 17, 2025",
    status: "Passed",
    tests: 2,
    failures: 0,
    errors: 0,
    vault: "Smart Contract Verification",
    author: "YiYi",
  },
  {
    id: "rep-002",
    name: "TokenContract Report",
    date: "April 15, 2025",
    status: "Failed",
    tests: 5,
    failures: 2,
    errors: 0,
    vault: "Token Implementation",
    author: "Alex",
  },
  {
    id: "rep-003",
    name: "StakingContract Report",
    date: "April 10, 2025",
    status: "Passed",
    tests: 8,
    failures: 0,
    errors: 0,
    vault: "DeFi Platform",
    author: "System",
  },
  {
    id: "rep-004",
    name: "GovernanceTest Report",
    date: "April 5, 2025",
    status: "Warning",
    tests: 4,
    failures: 0,
    errors: 1,
    vault: "DAO Governance",
    author: "YiYi",
  },
  {
    id: "rep-005",
    name: "NFT Marketplace Report",
    date: "April 3, 2025",
    status: "Passed",
    tests: 12,
    failures: 0,
    errors: 0,
    vault: "NFT Platform",
    author: "Alex",
  },
  {
    id: "rep-006",
    name: "Bridge Contract Report",
    date: "March 28, 2025",
    status: "Failed",
    tests: 7,
    failures: 3,
    errors: 1,
    vault: "Cross-chain Bridge",
    author: "System",
  },
]

interface ReportsListViewProps {
  onSelectReport: (reportId: string) => void
}

export function ReportsListView({ onSelectReport }: ReportsListViewProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"date" | "name" | "status">("date")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"table" | "card">("table")
  const [showFilters, setShowFilters] = useState(false)

  const isMobile = useIsMobile()

  // Set initial view mode based on screen size
  useEffect(() => {
    if (isMobile) {
      setViewMode("card")
    }
  }, [isMobile])

  // Filter reports based on search query and status filter
  const filteredReports = recentReports
    .filter(
      (report) =>
        report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.vault.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.author.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((report) => statusFilter === "all" || report.status.toLowerCase() === statusFilter.toLowerCase())

  // Sort reports based on sort criteria
  const sortedReports = [...filteredReports].sort((a, b) => {
    if (sortBy === "date") {
      // Simple date comparison (in a real app, use proper date objects)
      return sortDirection === "asc" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
    } else if (sortBy === "name") {
      return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    } else if (sortBy === "status") {
      return sortDirection === "asc" ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status)
    }
    return 0
  })

  // Toggle sort direction and update sort criteria
  const handleSort = (criteria: "date" | "name" | "status") => {
    if (sortBy === criteria) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortBy(criteria)
      setSortDirection("desc") // Default to descending when changing criteria
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Test Reports</h1>

        <div className="flex space-x-2">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={viewMode === "table" ? "bg-muted" : ""}
              onClick={() => setViewMode("table")}
            >
              <List className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Table</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={viewMode === "card" ? "bg-muted" : ""}
              onClick={() => setViewMode("card")}
            >
              <LayoutGrid className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Cards</span>
            </Button>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Report
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mt-1 mb-4">
        {sortedReports.length} {sortedReports.length === 1 ? "report" : "reports"} found
      </p>

      {/* Mobile Search and Filter Toggle */}
      <div className="sm:hidden flex items-center gap-2 w-full mb-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search reports..."
            className="w-full border rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
      <div className={`border rounded-md p-4 mb-6 ${showFilters ? "block" : "hidden"} sm:block`}>
        <div className="flex justify-between items-center mb-3 sm:hidden">
          <h3 className="font-medium">Filters</h3>
          <button onClick={() => setShowFilters(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <label className="text-sm font-medium">Status:</label>
            <select
              className="border rounded-md p-2 w-full sm:w-auto"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="passed">Passed</option>
              <option value="failed">Failed</option>
              <option value="warning">Warning</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <label className="text-sm font-medium">Sort By:</label>
            <select
              className="border rounded-md p-2 w-full sm:w-auto"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "date" | "name" | "status")}
            >
              <option value="date">Date</option>
              <option value="name">Name</option>
              <option value="status">Status</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <label className="text-sm font-medium">Order:</label>
            <select
              className="border rounded-md p-2 w-full sm:w-auto"
              value={sortDirection}
              onChange={(e) => setSortDirection(e.target.value as "asc" | "desc")}
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
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
              placeholder="Search reports..."
              className="w-64 border rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Reports Table */}
      {viewMode === "table" ? (
        <div className="overflow-auto">
          <div className="border rounded-md overflow-hidden min-w-full">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 text-sm font-medium">
                    <button className="flex items-center gap-1" onClick={() => handleSort("name")}>
                      Report Name
                      {sortBy === "name" && <ArrowUpDown className="h-3 w-3" />}
                    </button>
                  </th>
                  <th className="text-left p-3 text-sm font-medium hidden md:table-cell">Vault</th>
                  <th className="text-left p-3 text-sm font-medium">
                    <button className="flex items-center gap-1" onClick={() => handleSort("date")}>
                      Date
                      {sortBy === "date" && <ArrowUpDown className="h-3 w-3" />}
                    </button>
                  </th>
                  <th className="text-left p-3 text-sm font-medium">
                    <button className="flex items-center gap-1" onClick={() => handleSort("status")}>
                      Status
                      {sortBy === "status" && <ArrowUpDown className="h-3 w-3" />}
                    </button>
                  </th>
                  <th className="text-left p-3 text-sm font-medium hidden sm:table-cell">Tests</th>
                  <th className="text-left p-3 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedReports.map((report) => (
                  <tr key={report.id} className="border-t hover:bg-muted/50">
                    <td className="p-3 text-sm">
                      <div className="font-medium">{report.name}</div>
                      <div className="text-xs text-muted-foreground">By {report.author}</div>
                      <div className="text-xs text-muted-foreground md:hidden mt-1">{report.vault}</div>
                    </td>
                    <td className="p-3 text-sm hidden md:table-cell">{report.vault}</td>
                    <td className="p-3 text-sm whitespace-nowrap">{report.date}</td>
                    <td className="p-3 text-sm">
                      <Badge
                        variant={
                          report.status === "Passed"
                            ? "outline"
                            : report.status === "Failed"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {report.status}
                      </Badge>
                    </td>
                    <td className="p-3 text-sm hidden sm:table-cell">
                      <div className="whitespace-nowrap">
                        {report.tests} tests, {report.failures} failures, {report.errors} errors
                      </div>
                    </td>
                    <td className="p-3 text-sm">
                      <Button variant="outline" size="sm" onClick={() => onSelectReport(report.id)}>
                        <FileText className="h-3.5 w-3.5 mr-1" />
                        <span className="hidden sm:inline">View</span>
                      </Button>
                    </td>
                  </tr>
                ))}
                {sortedReports.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-muted-foreground">
                      No reports found matching your search criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedReports.map((report) => (
            <div
              key={report.id}
              className="border rounded-md p-4 hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={() => onSelectReport(report.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium">{report.name}</div>
                <Badge
                  variant={
                    report.status === "Passed" ? "outline" : report.status === "Failed" ? "destructive" : "secondary"
                  }
                >
                  {report.status}
                </Badge>
              </div>

              <div className="text-xs text-muted-foreground mb-3">By {report.author}</div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vault:</span>
                  <span className="font-medium truncate ml-2 text-right">{report.vault}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{report.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tests:</span>
                  <span>
                    {report.tests} tests, {report.failures} failures
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectReport(report.id)
                  }}
                >
                  <FileText className="h-3.5 w-3.5 mr-1" />
                  View Report
                </Button>
              </div>
            </div>
          ))}

          {sortedReports.length === 0 && (
            <div className="col-span-full p-8 text-center text-muted-foreground">
              No reports found matching your search criteria
            </div>
          )}
        </div>
      )}
    </div>
  )
}
