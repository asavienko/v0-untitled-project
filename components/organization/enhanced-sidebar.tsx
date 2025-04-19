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
  Palette,
  Layout,
  Type,
  SlidersHorizontal,
  Layers,
  PanelLeft,
  Boxes,
  Component,
  Sparkles,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
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
  SidebarMenuBadge,
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

  // UI/UX components navigation items
  const uiComponentsItems = [
    {
      id: "ui-design-system",
      label: "Design System",
      icon: Palette,
      href: "/ui/design-system",
    },
    {
      id: "ui-layouts",
      label: "Layouts",
      icon: Layout,
      href: "/ui/layouts",
    },
    {
      id: "ui-typography",
      label: "Typography",
      icon: Type,
      href: "/ui/typography",
    },
    {
      id: "ui-forms",
      label: "Forms",
      icon: SlidersHorizontal,
      href: "/ui/forms",
    },
    {
      id: "ui-components",
      label: "Components",
      icon: Component,
      href: "/ui/components",
    },
    {
      id: "ui-patterns",
      label: "UI Patterns",
      icon: Layers,
      href: "/ui/patterns",
    },
    {
      id: "ui-navigation",
      label: "Navigation",
      icon: PanelLeft,
      href: "/ui/navigation",
    },
    {
      id: "ui-wireframes",
      label: "Wireframes",
      icon: Boxes,
      href: "/ui/wireframes",
    },
    {
      id: "ui-experiments",
      label: "Experiments",
      icon: Sparkles,
      href: "/ui/experiments",
    },
    {
      id: "ui-inspiration",
      label: "Inspiration",
      icon: Lightbulb,
      href: "/ui/inspiration",
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
    <Sidebar variant="floating" className="border-r border-border transition-all duration-300">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-3">
          {isLoading ? (
            <div className="flex items-center gap-2 w-full">
              <Skeleton className="h-6 w-6 rounded-md" />
              {!isCollapsed && <Skeleton className="h-4 w-24" />}
              <Skeleton className="h-6 w-6 ml-auto" />
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 outline-none">
                  <div className="relative flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
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
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent"
            aria-label="Toggle sidebar"
            title={state === "expanded" ? "Collapse sidebar" : "Expand sidebar"}
          >
            {state === "expanded" ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </SidebarTrigger>
        </div>
        <SidebarSeparator />
        <div className="p-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <SidebarInput type="search" placeholder="Search..." className="pl-8" />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
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
                    <SidebarMenuItem key={item.id} className={isCollapsed ? "justify-center" : ""}>
                      <SidebarMenuButton
                        onClick={() => handleNavClick(item.id)}
                        isActive={isSectionActive(item.id)}
                        tooltip={item.label}
                      >
                        <item.icon className={`h-4 w-4 ${isCollapsed ? "mx-auto" : ""}`} />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                      {item.count > 0 && <SidebarMenuBadge>{item.count}</SidebarMenuBadge>}
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
                      <SidebarMenuItem key={item.id} className={isCollapsed ? "justify-center" : ""}>
                        <Link
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          className={cn(
                            "flex items-center justify-between w-full px-2 py-1.5 rounded-md text-sm",
                            isPathActive(item.href) ? "bg-accent text-accent-foreground" : "hover:bg-accent/50",
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className={`h-4 w-4 ${isCollapsed ? "mx-auto" : ""}`} />
                            {!isCollapsed && <span>{item.label}</span>}
                          </div>
                          {item.external && !isCollapsed && (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-muted-foreground"
                            >
                              <path
                                d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3H6.5C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          )}
                        </Link>
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
                    <SidebarMenuItem key={item.id} className={isCollapsed ? "justify-center" : ""}>
                      <SidebarMenuButton
                        onClick={() => handleNavClick(item.id)}
                        isActive={isSectionActive(item.id)}
                        tooltip={item.label}
                      >
                        <item.icon className={`h-4 w-4 ${isCollapsed ? "mx-auto" : ""}`} />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                      {item.count > 0 && (
                        <SidebarMenuBadge className="bg-primary text-primary-foreground">{item.count}</SidebarMenuBadge>
                      )}
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
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center justify-between w-full px-2 py-1.5 rounded-md text-sm",
                              isPathActive(item.href) ? "bg-accent text-accent-foreground" : "hover:bg-accent/50",
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <item.icon className="h-4 w-4" />
                              <span>{item.label}</span>
                            </div>
                          </Link>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />
                <SidebarGroup>
                  <SidebarGroupLabel>UI/UX Components</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="flex items-center justify-between w-full px-2 py-1.5 rounded-md text-sm hover:bg-accent/50">
                            <div className="flex items-center gap-2">
                              <Component className="h-4 w-4" />
                              <span>UI Components</span>
                            </div>
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-72 p-2">
                          <div className="grid gap-1">
                            {uiComponentsItems.map((item) => (
                              <DropdownMenuItem key={item.id} asChild className="p-0">
                                <Link
                                  href={item.href}
                                  className="flex flex-col w-full px-2 py-2 rounded-md hover:bg-accent"
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                                      <item.icon className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-medium">{item.label}</span>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1 pl-10">
                                    {item.id === "ui-design-system" && "Color palettes, spacing, and design tokens"}
                                    {item.id === "ui-layouts" && "Page layouts, grids, and responsive patterns"}
                                    {item.id === "ui-typography" && "Text styles, headings, and font combinations"}
                                    {item.id === "ui-forms" && "Input fields, validation, and form layouts"}
                                    {item.id === "ui-components" && "Buttons, cards, modals, and other UI elements"}
                                    {item.id === "ui-patterns" && "Common interaction patterns and solutions"}
                                    {item.id === "ui-navigation" && "Menus, breadcrumbs, and navigation structures"}
                                    {item.id === "ui-wireframes" && "Low-fidelity mockups and prototyping tools"}
                                    {item.id === "ui-experiments" && "Testing ground for new UI ideas and concepts"}
                                    {item.id === "ui-inspiration" && "Design references and examples gallery"}
                                  </p>
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
              <SidebarMenuButton className="justify-between">
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
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail className="bg-background border-r border-border" />
    </Sidebar>
  )
}
