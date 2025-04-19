"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, User, LogOut, Key, Shield, Bell, Star, Plus } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/user-avatar"
import { OverviewView } from "./overview/overview-view"
import { VaultsView } from "./vaults/vaults-view"
import { MembersView } from "./members/members-view"
import { ActivityView } from "./activity/activity-view"
import { SettingsView } from "./settings/settings-view"
import { AnalyticsView } from "./analytics/analytics-view"
import { SecurityView } from "./security/security-view"
import { IntegrationsView } from "./integrations/integrations-view"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface MobileOrganizationViewProps {
  organization: {
    name: string
    type: string
    description: string
    createdAt: string
    members?: number
    vaults?: number
    isVerified?: boolean
  }
  activeSection: string
  onSectionChange: (section: string) => void
  isLoading: boolean
  isAdmin?: boolean
}

export function MobileOrganizationView({
  organization,
  activeSection,
  onSectionChange,
  isLoading,
  isAdmin = false,
}: MobileOrganizationViewProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Add this new state for organizations
  const [organizations, setOrganizations] = useState([
    ...(organization.name === "@test-yiyi" || organization.name === "test-yiyi"
      ? [{ id: "0", name: "Test YiYi", slug: "test-yiyi", isFavorite: true }]
      : []),
    {
      id: "1",
      name: "Runtime Verification",
      slug: "runtime-verification",
      isFavorite: organization.name !== "@test-yiyi" && organization.name !== "test-yiyi",
    },
    { id: "2", name: "Acme Corp", slug: "acme-corp", isFavorite: false },
    { id: "3", name: "Startup Inc", slug: "startup-inc", isFavorite: false },
    { id: "4", name: "Tech Solutions", slug: "tech-solutions", isFavorite: false },
  ])

  // Navigation items for mobile menu
  const navItems = [
    { id: "overview", label: "Overview", count: 0 },
    { id: "vaults", label: "Vaults", count: organization.vaults || 0 },
    { id: "members", label: "Members", count: organization.members || 0 },
    { id: "activity", label: "Activity", count: 15 },
    { id: "analytics", label: "Analytics", count: 0 },
    { id: "settings", label: "Settings", count: 0 },
    { id: "security", label: "Security", count: 3 },
    { id: "integrations", label: "Integrations", count: 0 },
  ]

  // Toggle favorite status
  const toggleFavorite = (orgId: string) => {
    setOrganizations((orgs) => orgs.map((org) => (org.id === orgId ? { ...org, isFavorite: !org.isFavorite } : org)))
  }

  // Admin navigation items
  const adminNavItems = [
    { id: "admin-users", label: "Users" },
    { id: "admin-organizations", label: "Organizations" },
    { id: "admin-vaults", label: "Vaults" },
    { id: "admin-caches", label: "Caches" },
    { id: "admin-computes", label: "Computes" },
    { id: "admin-credits", label: "Credits" },
  ]

  // Handle navigation item click
  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu after selection
  }

  // Render the active section content
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex h-full w-full items-center justify-center p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="text-sm text-muted-foreground">Loading organization data...</p>
          </div>
        </div>
      )
    }

    switch (activeSection) {
      case "overview":
        return <OverviewView organization={organization} />
      case "vaults":
        return <VaultsView organization={organization} />
      case "members":
        return <MembersView organization={organization} />
      case "activity":
        return <ActivityView organization={organization} />
      case "settings":
        return <SettingsView organization={organization} />
      case "analytics":
        return <AnalyticsView organization={organization} />
      case "security":
        return <SecurityView organization={organization} />
      case "integrations":
        return <IntegrationsView organization={organization} />
      default:
        return <OverviewView organization={organization} />
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Header */}
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-4">
        {/* Left side - Menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] max-w-[300px] p-0" closeButton={false}>
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      {organization.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h2 className="text-sm font-medium">{organization.name}</h2>
                      <p className="text-xs text-muted-foreground">{organization.type}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Menu Navigation */}
                <div className="flex-1 overflow-auto py-2">
                  <div className="px-2 py-1">
                    <p className="px-3 text-xs font-medium text-muted-foreground">Navigation</p>
                    <nav className="mt-2 space-y-1">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm ${
                            activeSection === item.id
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-muted"
                          }`}
                          onClick={() => handleNavClick(item.id)}
                        >
                          <span>{item.label}</span>
                          {item.count > 0 && (
                            <Badge
                              variant={activeSection === item.id ? "outline" : "secondary"}
                              className={activeSection === item.id ? "bg-primary-foreground text-primary" : ""}
                            >
                              {item.count}
                            </Badge>
                          )}
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Admin Section */}
                  {isAdmin && (
                    <div className="mt-4 border-t px-2 py-3">
                      <p className="px-3 text-xs font-medium text-muted-foreground">Admin</p>
                      <nav className="mt-2 space-y-1">
                        {adminNavItems.map((item) => (
                          <button
                            key={item.id}
                            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                          >
                            <span>{item.label}</span>
                          </button>
                        ))}
                      </nav>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Footer */}
                <div className="border-t p-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start px-2">
                        <div className="flex items-center gap-2">
                          <UserAvatar className="h-8 w-8" />
                          <div className="flex flex-col items-start">
                            <span className="text-sm">YiYi</span>
                            <span className="text-xs text-muted-foreground">yiyi@example.com</span>
                          </div>
                          <ChevronDown className="ml-auto h-4 w-4" />
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Shield className="mr-2 h-4 w-4" />
                        <span>Admin Token</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Key className="mr-2 h-4 w-4" />
                        <span>Access Token</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </Button>

        {/* Center - Organization dropdown */}
        <div className="flex-1 flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 p-0 h-auto">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  {organization.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h1 className="text-sm font-medium">{organization.name}</h1>
                  <p className="text-xs text-muted-foreground">{organization.type}</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <div className="p-2">
                <h3 className="mb-2 text-xs font-medium text-muted-foreground">Organizations</h3>
                {organizations.map((org) => (
                  <DropdownMenuItem key={org.id} asChild>
                    <Link href={`/organization/${org.slug}/new-view`} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-xs font-medium text-primary">
                          {org.name.charAt(0).toUpperCase()}
                        </div>
                        <span>{org.name}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleFavorite(org.id)
                        }}
                        className="text-muted-foreground hover:text-yellow-400"
                      >
                        <Star className={`h-4 w-4 ${org.isFavorite ? "fill-yellow-400 text-yellow-400" : ""}`} />
                      </button>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex w-full items-center gap-2 text-sm">
                  <Plus className="h-4 w-4" />
                  <span>Create Organization</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right side - Notification and user buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserAvatar className="h-8 w-8" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Shield className="mr-2 h-4 w-4" />
                <span>Admin Token</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Key className="mr-2 h-4 w-4" />
                <span>Access Token</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Mobile Section Title */}
      <div className="border-b bg-background px-4 py-3">
        <h2 className="text-lg font-semibold capitalize">{activeSection}</h2>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{renderContent()}</main>

      {/* Mobile Bottom Navigation */}
      <nav className="sticky bottom-0 z-10 flex h-14 items-center justify-around border-t bg-background">
        <button
          className={`flex flex-1 flex-col items-center justify-center h-full ${
            activeSection === "overview" ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={() => handleNavClick("overview")}
        >
          <span className="text-xs">Overview</span>
        </button>
        <button
          className={`flex flex-1 flex-col items-center justify-center h-full ${
            activeSection === "vaults" ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={() => handleNavClick("vaults")}
        >
          <span className="text-xs">Vaults</span>
        </button>
        <button
          className={`flex flex-1 flex-col items-center justify-center h-full ${
            activeSection === "members" ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={() => handleNavClick("members")}
        >
          <span className="text-xs">Members</span>
        </button>
        <button
          className={`flex flex-1 flex-col items-center justify-center h-full ${
            activeSection === "activity" ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={() => handleNavClick("activity")}
        >
          <span className="text-xs">Activity</span>
        </button>
      </nav>
    </div>
  )
}
