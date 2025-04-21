"use client"

import { useState } from "react"
import {
  Menu,
  X,
  ChevronDown,
  User,
  LogOut,
  Key,
  Shield,
  Star,
  Plus,
  Home,
  Database,
  Users,
  Activity,
  FileText,
  BarChart3,
  Settings,
  Zap,
  Lock,
  DollarSign,
} from "lucide-react"
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
import { ReportsView } from "./reports/reports-view"

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
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null)

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

  // Toggle favorite status
  const toggleFavorite = (orgId: string) => {
    setOrganizations((orgs) => orgs.map((org) => (org.id === orgId ? { ...org, isFavorite: !org.isFavorite } : org)))
  }

  // Navigation items for mobile menu
  const navItems = [
    { id: "overview", label: "Overview", count: 0, icon: Home },
    { id: "vaults", label: "Vaults", count: organization.vaults || 0, icon: Database },
    { id: "members", label: "Members", count: organization.members || 0, icon: Users },
    { id: "activity", label: "Activity", count: 15, icon: Activity },
    { id: "reports", label: "Reports", count: 2, icon: FileText },
    { id: "analytics", label: "Analytics", count: 0, icon: BarChart3 },
    { id: "settings", label: "Settings", count: 0, icon: Settings },
    { id: "security", label: "Security", count: 3, icon: Lock },
    { id: "integrations", label: "Integrations", count: 0, icon: Zap },
  ]

  // Admin navigation items
  const adminNavItems = [
    { id: "admin-users", label: "Users", icon: Users },
    { id: "admin-organizations", label: "Organizations", icon: Database },
    { id: "admin-vaults", label: "Vaults", icon: Database },
    { id: "admin-caches", label: "Caches", icon: Database },
    { id: "admin-computes", label: "Computes", icon: BarChart3 },
    { id: "admin-credits", label: "Credits", icon: FileText },
  ]

  // Handle navigation item click
  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu after selection

    // Reset selected report when changing sections
    if (sectionId !== "reports") {
      setSelectedReportId(null)
    }
  }

  // Handle navigation from overview to reports
  const handleNavigate = (section: string, reportId?: string) => {
    onSectionChange(section)
    if (reportId) {
      setSelectedReportId(reportId)
    }
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
        return <OverviewView organization={organization} onNavigate={handleNavigate} />
      case "vaults":
        return <VaultsView organization={organization} />
      case "members":
        return <MembersView organization={organization} />
      case "activity":
        return <ActivityView organization={organization} />
      case "reports":
        return <ReportsView initialReportId={selectedReportId} />
      case "settings":
        return <SettingsView organization={organization} />
      case "analytics":
        return <AnalyticsView organization={organization} />
      case "security":
        return <SecurityView organization={organization} />
      case "integrations":
        return <IntegrationsView organization={organization} />
      default:
        return <OverviewView organization={organization} onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Header */}
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-4">
        {/* Left side - Empty space (menu button removed) */}
        <div className="w-8"></div>

        {/* Center - Organization title */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center">
            <h1 className="text-sm font-medium">{organization.name}</h1>
          </div>
        </div>

        {/* Right side - Empty space */}
        <div className="w-8"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{renderContent()}</main>

      {/* Mobile Bottom Navigation */}
      <nav className="sticky bottom-0 z-10 flex h-14 border-t bg-background overflow-x-auto" style={{ width: "100%" }}>
        {/* Menu Button (Left Side) */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="flex flex-none flex-col items-center justify-center h-full px-2 text-muted-foreground min-w-[60px]">
              <Menu className="h-5 w-5 mb-1" />
              <span className="text-xs whitespace-nowrap">Menu</span>
            </button>
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

              {/* Organization Selector - Added here */}
              <div className="px-4 py-3 border-b">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center justify-between gap-2 h-auto">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-xs font-medium text-primary">
                          {organization.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm">Switch Organization</span>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <div className="p-2">
                      <h3 className="mb-2 text-xs font-medium text-muted-foreground">Organizations</h3>
                      {organizations.map((org) => (
                        <DropdownMenuItem key={org.id} asChild>
                          <Link
                            href={`/organization/${org.slug}/new-view`}
                            className="flex items-center justify-between"
                          >
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

              {/* Mobile Menu Navigation */}
              <div className="flex-1 overflow-auto py-4">
                {/* Primary Navigation */}
                <div className="px-3 mb-6">
                  <p className="px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Navigation
                  </p>
                  <nav className="space-y-1.5">
                    {navItems.slice(0, 5).map((item) => (
                      <button
                        key={item.id}
                        className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm border ${
                          activeSection === item.id
                            ? "border-primary/50 text-primary"
                            : "border-transparent text-foreground hover:bg-muted/30"
                        }`}
                        onClick={() => handleNavClick(item.id)}
                      >
                        <item.icon
                          className={`h-4 w-4 ${activeSection === item.id ? "text-primary" : "text-muted-foreground"}`}
                        />
                        <span>{item.label}</span>
                        {item.count > 0 && (
                          <Badge variant="outline" className="ml-auto">
                            {item.count}
                          </Badge>
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Secondary Navigation */}
                <div className="px-3 mb-6">
                  <p className="px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Settings
                  </p>
                  <nav className="space-y-1.5">
                    {navItems.slice(5).map((item) => (
                      <button
                        key={item.id}
                        className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm border ${
                          activeSection === item.id
                            ? "border-primary/50 text-primary"
                            : "border-transparent text-foreground hover:bg-muted/30"
                        }`}
                        onClick={() => handleNavClick(item.id)}
                      >
                        <item.icon
                          className={`h-4 w-4 ${activeSection === item.id ? "text-primary" : "text-muted-foreground"}`}
                        />
                        <span>{item.label}</span>
                        {item.count > 0 && (
                          <Badge variant="outline" className="ml-auto">
                            {item.count}
                          </Badge>
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Admin Section */}
                {isAdmin && (
                  <div className="px-3 pt-4 border-t border-border/50 mx-3">
                    <p className="px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                      Admin
                    </p>
                    <nav className="space-y-1.5">
                      {adminNavItems.map((item) => (
                        <button
                          key={item.id}
                          className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm border border-transparent text-foreground hover:bg-muted/30"
                        >
                          <item.icon className="h-4 w-4 text-muted-foreground" />
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

        {/* General */}
        <button
          className={`flex flex-none flex-col items-center justify-center h-full px-2 min-w-[60px] ${
            activeSection === "overview" ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={() => handleNavClick("overview")}
        >
          <Home className="h-5 w-5 mb-1" />
          <span className="text-xs whitespace-nowrap">General</span>
        </button>

        {/* Reports */}
        <button
          className={`flex flex-none flex-col items-center justify-center h-full px-2 min-w-[60px] ${
            activeSection === "reports" ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={() => handleNavClick("reports")}
        >
          <FileText className="h-5 w-5 mb-1" />
          <span className="text-xs whitespace-nowrap">Reports</span>
        </button>

        {/* Vaults */}
        <button
          className={`flex flex-none flex-col items-center justify-center h-full px-2 min-w-[60px] ${
            activeSection === "vaults" ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={() => handleNavClick("vaults")}
        >
          <Database className="h-5 w-5 mb-1" />
          <span className="text-xs whitespace-nowrap">Vaults</span>
        </button>

        {/* Users */}
        <button
          className={`flex flex-none flex-col items-center justify-center h-full px-2 min-w-[60px] ${
            activeSection === "members" ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={() => handleNavClick("members")}
        >
          <Users className="h-5 w-5 mb-1" />
          <span className="text-xs whitespace-nowrap">Users</span>
        </button>

        {/* Compute */}
        <button
          className={`flex flex-none flex-col items-center justify-center h-full px-2 min-w-[60px] ${
            activeSection === "compute" ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={() => handleNavClick("compute")}
        >
          <BarChart3 className="h-5 w-5 mb-1" />
          <span className="text-xs whitespace-nowrap">Compute</span>
        </button>

        {/* Notifications */}
        <button
          className={`flex flex-none flex-col items-center justify-center h-full px-2 min-w-[60px] ${
            activeSection === "notifications" ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={() => handleNavClick("notifications")}
        >
          <Activity className="h-5 w-5 mb-1" />
          <span className="text-xs whitespace-nowrap">Notifications</span>
        </button>

        {/* Admin Items - Only shown if user is admin */}
        {isAdmin && (
          <>
            {/* Credits (ADMIN) */}
            <button
              className={`flex flex-none flex-col items-center justify-center h-full px-2 min-w-[60px] ${
                activeSection === "credits" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => handleNavClick("credits")}
            >
              <DollarSign className="h-5 w-5 mb-1" />
              <span className="text-xs whitespace-nowrap">Credits</span>
            </button>

            {/* Subscription (ADMIN) */}
            <button
              className={`flex flex-none flex-col items-center justify-center h-full px-2 min-w-[60px] ${
                activeSection === "subscription" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => handleNavClick("subscription")}
            >
              <Zap className="h-5 w-5 mb-1" />
              <span className="text-xs whitespace-nowrap">Subscription</span>
            </button>

            {/* Usage (ADMIN) */}
            <button
              className={`flex flex-none flex-col items-center justify-center h-full px-2 min-w-[60px] ${
                activeSection === "usage" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => handleNavClick("usage")}
            >
              <Activity className="h-5 w-5 mb-1" />
              <span className="text-xs whitespace-nowrap">Usage</span>
            </button>
          </>
        )}
      </nav>
    </div>
  )
}
