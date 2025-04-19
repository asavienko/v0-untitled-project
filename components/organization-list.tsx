"use client"

import { useState } from "react"
import {
  Database,
  Github,
  Building2,
  MoreHorizontal,
  Users,
  Clock,
  Star,
  Search,
  Filter,
  Plus,
  Rocket,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SimpleTooltip } from "@/components/simple-tooltip"
import { OnboardingModal } from "./onboarding-modal"
import { EnhancedEmptyState } from "@/components/ui/enhanced-empty-state"
import { EnhancedCard, CardContent } from "@/components/ui/enhanced-card"

type Organization = {
  id: string
  name: string
  vaultCount: number
  userCount: number
  href: string
  type?: "github" | "manual"
  lastActive?: string
  isStarred?: boolean
}

interface OrganizationListProps {
  organizations: Organization[]
}

export function OrganizationList({ organizations }: OrganizationListProps) {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filterType, setFilterType] = useState<"all" | "github" | "manual">("all")

  // Add some additional data to organizations
  const enhancedOrgs = organizations.map((org) => ({
    ...org,
    type: org.name.startsWith("@") ? "github" : org.name === "runtimeverification" ? "github" : "manual",
    lastActive:
      org.name === "runtimeverification" ? "2 hours ago" : org.name === "@test-yiyi" ? "1 day ago" : "1 week ago",
    isStarred: org.name === "runtimeverification",
  }))

  // Filter organizations based on search and filters
  const filteredOrgs = enhancedOrgs.filter((org) => {
    const matchesSearch = searchQuery === "" || org.name.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = filterType === "all" || org.type === filterType

    return matchesSearch && matchesType
  })

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* Mobile-optimized header section */}
      <div className="mb-4 sm:mb-8 pt-2 sm:pt-0">
        <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Organizations</h1>
            <p className="text-sm sm:text-base text-gray-500 mt-1">Manage your verification organizations</p>
          </div>

          {organizations.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <SimpleTooltip text="Create a user managed organization that is not linked to a GitHub organization.">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 gap-2 shadow-sm py-2 h-auto">
                  <Plus size={16} />
                  <span>Create Organization</span>
                </Button>
              </SimpleTooltip>

              <SimpleTooltip text="Install the GitHub App to link your GitHub organizations to KaaS.">
                <Button variant="outline" className="w-full sm:w-auto gap-2 border-gray-300 py-2 h-auto">
                  <Github size={16} />
                  <span>Install GitHub App</span>
                </Button>
              </SimpleTooltip>
            </div>
          )}
        </div>

        {organizations.length > 0 && (
          <EnhancedCard>
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col gap-4">
                {/* Search bar */}
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search organizations..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Filter and view controls */}
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`gap-2 flex-grow sm:flex-grow-0 ${showFilters ? "bg-primary/10 border-primary/30 text-primary" : ""}`}
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter size={16} />
                    Filters
                    {filterType !== "all" && (
                      <span className="bg-primary/20 text-primary text-xs px-1.5 py-0.5 rounded-full">1</span>
                    )}
                  </Button>

                  <div className="flex items-center border-l pl-2 ml-auto">
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "bg-primary hover:bg-primary/90 h-8 w-8" : "h-8 w-8"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-grid"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="14" rx="1" />
                        <rect width="7" height="7" x="3" y="14" rx="1" />
                      </svg>
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" ? "bg-primary hover:bg-primary/90 h-8 w-8" : "h-8 w-8"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-list"
                      >
                        <line x1="8" x2="21" y1="6" y2="6" />
                        <line x1="8" x2="21" y1="12" y2="12" />
                        <line x1="8" x2="21" y1="18" y2="18" />
                        <line x1="3" x2="3.01" y1="6" y2="6" />
                        <line x1="3" x2="3.01" y1="12" y2="12" />
                        <line x1="3" x2="3.01" y1="18" y2="18" />
                      </svg>
                    </Button>
                  </div>

                  <SimpleTooltip text="Refresh the list of organizations" position="top">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-refresh-cw"
                      >
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                        <path d="M21 3v5h-5" />
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                        <path d="M3 21v-5h5" />
                      </svg>
                    </Button>
                  </SimpleTooltip>
                </div>
              </div>

              {/* Filter options */}
              {showFilters && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex-grow sm:flex-grow-0 ${filterType === "all" ? "bg-primary/10 border-primary/30 text-primary" : ""}`}
                      onClick={() => setFilterType("all")}
                    >
                      All Organizations
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex-grow sm:flex-grow-0 ${filterType === "github" ? "bg-primary/10 border-primary/30 text-primary" : ""}`}
                      onClick={() => setFilterType("github")}
                    >
                      <Github size={14} className="mr-1" />
                      GitHub Organizations
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex-grow sm:flex-grow-0 ${filterType === "manual" ? "bg-primary/10 border-primary/30 text-primary" : ""}`}
                      onClick={() => setFilterType("manual")}
                    >
                      <Building2 size={14} className="mr-1" />
                      User-managed Organizations
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </EnhancedCard>
        )}
      </div>

      {/* Results count */}
      {organizations.length > 0 && (
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            Showing {filteredOrgs.length} of {organizations.length} organizations
            {searchQuery && <span> matching "{searchQuery}"</span>}
            {filterType !== "all" && <span> filtered by {filterType}</span>}
          </div>

          {(searchQuery || filterType !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchQuery("")
                setFilterType("all")
              }}
              className="text-primary hover:text-primary/80"
            >
              Clear filters
            </Button>
          )}
        </div>
      )}

      {/* Organization list */}
      {organizations.length > 0 ? (
        filteredOrgs.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {filteredOrgs.map((org) => (
                <a
                  key={org.id}
                  href={org.href}
                  className="flex flex-col border rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white group"
                >
                  <div className="bg-gray-50 p-3 sm:p-4 flex items-center justify-between border-b">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          org.type === "github"
                            ? "bg-gradient-to-br from-gray-800 to-black text-white shadow-sm"
                            : "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 shadow-sm"
                        }`}
                      >
                        {org.type === "github" ? <Github size={18} /> : <Building2 size={18} />}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm sm:text-base">{org.name}</h3>
                        <div className="text-xs text-gray-500">
                          {org.type === "github" ? "GitHub Organization" : "User-managed Organization"}
                        </div>
                      </div>
                    </div>
                    {org.isStarred && <Star size={16} className="text-yellow-500 fill-yellow-500" />}
                  </div>

                  <div className="p-3 sm:p-4 flex-1">
                    <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                        <Database size={14} />
                        <span>
                          {org.vaultCount} Vault{org.vaultCount !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                        <Users size={14} />
                        <span>
                          {org.userCount} User{org.userCount !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 text-gray-600 col-span-2">
                        <Clock size={14} />
                        <span>Active {org.lastActive}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-2 sm:p-3 border-t flex justify-end">
                    <button className="p-1 rounded-md hover:bg-gray-200 transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredOrgs.map((org) => (
                <a
                  key={org.id}
                  href={org.href}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 border rounded-xl hover:bg-gray-50 transition-colors bg-white"
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <div
                      className={`p-2 rounded-lg ${
                        org.type === "github"
                          ? "bg-gradient-to-br from-gray-800 to-black text-white shadow-sm"
                          : "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 shadow-sm"
                      }`}
                    >
                      {org.type === "github" ? <Github size={18} /> : <Building2 size={18} />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{org.name}</h3>
                        {org.isStarred && <Star size={14} className="text-yellow-500 fill-yellow-500" />}
                      </div>
                      <div className="text-xs text-gray-500">
                        {org.type === "github" ? "GitHub Organization" : "User-managed Organization"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 text-xs sm:text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Database size={14} />
                      <span>{org.vaultCount}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users size={14} />
                      <span>{org.userCount}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock size={14} />
                      <span className="hidden sm:inline">{org.lastActive}</span>
                      <span className="sm:hidden">
                        {org.lastActive.includes("hour")
                          ? "Today"
                          : org.lastActive.includes("day")
                            ? "Recent"
                            : "Older"}
                      </span>
                    </div>
                    <button className="p-1 rounded-md hover:bg-gray-200 transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </a>
              ))}
            </div>
          )
        ) : (
          <EnhancedEmptyState
            icon={Search}
            title="No organizations found"
            description="No organizations match your current search and filter criteria. Try adjusting your filters or create a new organization."
            action={{
              label: "Create Organization",
              onClick: () => console.log("Create organization clicked"),
              isCTA: true,
              icon: Plus,
              iconPosition: "left",
            }}
            secondaryAction={{
              label: "Clear filters",
              onClick: () => {
                setSearchQuery("")
                setFilterType("all")
              },
            }}
          />
        )
      ) : (
        <div className="mt-6 sm:mt-12">
          <EnhancedEmptyState
            icon={Rocket}
            title="Welcome to Runtime Verification"
            description="Get started by creating an organization or connecting your GitHub account to access your existing organizations."
            action={{
              label: "Get Started",
              onClick: () => setIsOnboardingOpen(true),
              isCTA: true,
              variant: "primary",
              size: "lg",
              icon: ArrowRight,
              iconPosition: "right",
              withPulse: true,
              withArrow: true,
            }}
            visual="illustration"
          />
        </div>
      )}

      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
    </div>
  )
}
