"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Database,
  Users,
  Activity,
  Settings,
  Search,
  ChevronDown,
  Plus,
  BarChart3,
  Shield,
  Zap,
  Star,
  FolderIcon,
  BookOpen,
  FileIcon,
  FolderKeyIcon,
  ComputerIcon,
  DollarSign,
  Eye,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  LogOut,
  Key,
  FileText,
  type LucideIcon,
} from "lucide-react"
import { UserAvatar } from "@/components/user-avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"

interface EnhancedSidebarProps {
  organizationSlug: string
  activeSection: string
  onSectionChange: (section: string) => void
  isAdmin?: boolean
  isLoggedIn?: boolean
  isLoading?: boolean
}

interface NavItem {
  id: string
  label: string
  icon: LucideIcon
  href?: string
  count?: number
  external?: boolean
  requireLogin?: boolean
}

export function EnhancedSidebar({
  organizationSlug,
  activeSection,
  onSectionChange,
  isAdmin = false,
  isLoggedIn = true,
  isLoading = false,
}: EnhancedSidebarProps) {
  const pathname = usePathname()
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  // Mock organizations data - with test-yiyi as the first one if it matches
  const [organizations, setOrganizations] = useState([
    ...(organizationSlug === "test-yiyi" || organizationSlug === "@test-yiyi"
      ? [{ id: "0", name: "Test YiYi", slug: "test-yiyi", isFavorite: true }]
      : []),
    {
      id: "1",
      name: "Runtime Verification",
      slug: "runtime-verification",
      isFavorite: organizationSlug !== "test-yiyi",
    },
    { id: "2", name: "Acme Corp", slug: "acme-corp", isFavorite: false },
    { id: "3", name: "Startup Inc", slug: "startup-inc", isFavorite: false },
    { id: "4", name: "Tech Solutions", slug: "tech-solutions", isFavorite: false },
  ])

  // Update the currentOrg finding logic to handle undefined organizationSlug
  // Find current organization from the slug with proper null checks
  const currentOrg = !organizationSlug
    ? organizations[0]
    : organizations.find(
        (org) => org.slug === organizationSlug || (organizationSlug === "@test-yiyi" && org.slug === "test-yiyi"),
      ) || organizations[0]

  // Toggle favorite status
  const toggleFavorite = (orgId: string) => {
    setOrganizations((orgs) => orgs.map((org) => (org.id === orgId ? { ...org, isFavorite: !org.isFavorite } : org)))
  }

  // Format organization name for display with null check
  const displayName = !organizationSlug
    ? ""
    : organizationSlug.startsWith("@")
      ? organizationSlug.substring(1)
      : organizationSlug

  // Notification count - more for test-yiyi with null check
  const [notificationCount, setNotificationCount] = useState(organizationSlug === "test-yiyi" ? 5 : 2)

  // Update the primaryNavItems to handle undefined organizationSlug
  const primaryNavItems = [
    { id: "overview", label: "Overview", icon: Home, count: 0 },
    { id: "vaults", label: "Vaults", icon: Database, count: organizationSlug === "test-yiyi" ? 8 : 12 },
    { id: "members", label: "Members", icon: Users, count: organizationSlug === "test-yiyi" ? 3 : 8 },
    { id: "activity", label: "Activity", icon: Activity, count: organizationSlug === "test-yiyi" ? 15 : 24 },
    { id: "reports", label: "Reports", icon: FileText, count: organizationSlug === "test-yiyi" ? 2 : 5 },
    { id: "analytics", label: "Analytics", icon: BarChart3, count: 0 },
  ]

  // Update the settingsNavItems to handle undefined organizationSlug
  const settingsNavItems = [
    { id: "settings", label: "General", icon: Settings, count: 0 },
    { id: "security", label: "Security", icon: Shield, count: organizationSlug === "test-yiyi" ? 3 : 2 },
    { id: "integrations", label: "Integrations", icon: Zap, count: 0 },
  ]

  // Tools navigation items
  const toolsNavItems = [
    {
      id: "documentation",
      label: "Documentation",
      icon: BookOpen,
      href: "/docs",
      external: true,
      requireLogin: false,
    },
    {
      id: "visualizer",
      label: "Local Proof Visualizer",
      icon: Eye,
      href: "/visualizer",
      requireLogin: false,
    },
    {
      id: "xml-report",
      label: "Generate XML Report",
      icon: FileIcon,
      href: "/xml-report",
      requireLogin: false,
    },
  ]

  // Admin navigation items
  const adminNavItems = [
    {
      id: "admin-users",
      label: "Users",
      icon: Users,
      href: "/admin/users",
      isAdmin: true,
    },
    {
      id: "admin-organizations",
      label: "Organizations",
      icon: FolderIcon,
      href: "/admin/organizations",
      isAdmin: true,
    },
    {
      id: "admin-vaults",
      label: "Vaults",
      icon: Database,
      href: "/admin/vaults",
      isAdmin: true,
    },
    {
      id: "admin-caches",
      label: "Caches",
      icon: FolderKeyIcon,
      href: "/admin/caches",
      isAdmin: true,
    },
    {
      id: "admin-computes",
      label: "Computes",
      icon: ComputerIcon,
      href: "/admin/computes",
      isAdmin: true,
    },
    {
      id: "admin-credits",
      label: "Credits",
      icon: DollarSign,
      href: "/admin/credits",
      isAdmin: true,
    },
  ]
  // Handle navigation item click
  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId)
  }

  // Check if a section is active
  const isSectionActive = (sectionId: string) => {
    return activeSection === sectionId
  }

  // Check if a path is active
  const isPathActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar variant="floating" className="border-r border-border">
      <SidebarHeader>
        <div className={cn("flex items-center gap-2 py-3", isCollapsed ? "px-1" : "px-2")}>
          {isLoading ? (
            <div className="flex items-center gap-2 w-full">
              <Skeleton className="h-6 w-6 rounded-md" />
              {!isCollapsed && <Skeleton className="h-4 w-24" />}
              <Skeleton className="h-6 w-6 ml-auto" />
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn("flex items-center gap-2 outline-none", isCollapsed ? "w-10 justify-center" : "w-full")}
                >
                  <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    {currentOrg.name.charAt(0).toUpperCase()}
                    {currentOrg.isFavorite && (
                      <Star className="absolute -top-1 -right-1 h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
                    )}
                  </div>
                  {!isCollapsed && (
                    <div className="flex items-center gap-1 max-w-[160px]">
                      <div className="flex items-center overflow-hidden">
                        <span className="text-xs font-medium truncate" title={currentOrg.name}>
                          {currentOrg.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground ml-1 flex-shrink-0">(Org)</span>
                      </div>
                      <ChevronDown className="h-3 w-3 text-muted-foreground flex-shrink-0 ml-1" />
                    </div>
                  )}
                </button>
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
          )}
          <SidebarTrigger
            className={cn(
              "flex h-8 items-center justify-center rounded-md hover:bg-accent",
              isCollapsed ? "w-10" : "w-8 ml-auto",
            )}
            aria-label="Toggle sidebar"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </SidebarTrigger>
        </div>
        <SidebarSeparator />
        <div className={cn("transition-all duration-200", isCollapsed ? "p-1" : "p-2")}>
          {!isCollapsed ? (
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <SidebarInput type="search" placeholder="Search..." className="pl-8" />
            </div>
          ) : (
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Search" className="h-8 w-8 p-0">
                <Search className="h-4 w-4" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="overflow-x-hidden">
        {isLoading ? (
          // Loading skeleton for sidebar content
          <>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <SidebarMenuItem key={i}>
                      <div className="flex items-center gap-2 px-2 py-1.5">
                        <Skeleton className="h-4 w-4" />
                        {!isCollapsed && <Skeleton className="h-4 w-20" />}
                      </div>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Tools</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {[1, 2, 3].map((i) => (
                    <SidebarMenuItem key={i}>
                      <div className="flex items-center gap-2 px-2 py-1.5">
                        <Skeleton className="h-4 w-4" />
                        {!isCollapsed && <Skeleton className="h-4 w-24" />}
                      </div>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        ) : (
          <>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {primaryNavItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => handleNavClick(item.id)}
                        isActive={isSectionActive(item.id)}
                        tooltip={item.label}
                        className="relative"
                      >
                        <div className="flex items-center gap-2 w-full">
                          <div className="relative">
                            <item.icon className="h-4 w-4 shrink-0" />
                            {item.count > 0 && isCollapsed && (
                              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                                {item.count}
                              </span>
                            )}
                          </div>
                          <span className="truncate">{item.label}</span>
                          {item.count > 0 && !isCollapsed && (
                            <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary/10 px-1.5 text-xs font-medium text-primary">
                              {item.count}
                            </span>
                          )}
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Tools</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {toolsNavItems
                    .filter((item) => !item.requireLogin || isLoggedIn)
                    .map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton asChild isActive={isPathActive(item.href)} tooltip={item.label}>
                          <Link
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            className="flex items-center gap-2 w-full"
                          >
                            <item.icon className="h-4 w-4 shrink-0" />
                            <span className="truncate">{item.label}</span>
                            {item.external && (
                              <ExternalLink className="h-3 w-3 shrink-0 ml-auto text-muted-foreground" />
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {settingsNavItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => handleNavClick(item.id)}
                        isActive={isSectionActive(item.id)}
                        tooltip={item.label}
                        className="relative"
                      >
                        <div className="flex items-center gap-2 w-full">
                          <div className="relative">
                            <item.icon className="h-4 w-4 shrink-0" />
                            {item.count > 0 && isCollapsed && (
                              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                                {item.count}
                              </span>
                            )}
                          </div>
                          <span className="truncate">{item.label}</span>
                          {item.count > 0 && !isCollapsed && (
                            <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary/10 px-1.5 text-xs font-medium text-primary">
                              {item.count}
                            </span>
                          )}
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {isAdmin && (
              <>
                <SidebarSeparator />
                <SidebarGroup>
                  <SidebarGroupLabel>Admin</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {adminNavItems.map((item) => (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton
                            asChild
                            isActive={isPathActive(item.href)}
                            tooltip={{ children: item.label }}
                          >
                            <Link href={item.href} className="flex items-center gap-2 w-full">
                              <item.icon className="h-4 w-4 shrink-0" />
                              <span className="truncate">{item.label}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </>
            )}
          </>
        )}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {isLoading ? (
              <div className="flex items-center justify-between gap-2 px-2 py-1.5">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  {!isCollapsed && (
                    <div className="flex flex-col gap-1">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  )}
                </div>
                {!isCollapsed && <Skeleton className="h-4 w-4" />}
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="justify-between w-full">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2">
                        <UserAvatar className="h-6 w-6" />
                        {!isCollapsed && (
                          <div className="flex flex-col items-start">
                            <span className="text-sm">YiYi</span>
                            <span className="text-xs text-muted-foreground">yiyi@example.com</span>
                          </div>
                        )}
                      </div>
                      {!isCollapsed && <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                    </div>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="top" className="w-56">
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
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
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
