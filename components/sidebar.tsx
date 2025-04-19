"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Building2,
  ChevronDown,
  Database,
  FileText,
  Code,
  FileCode2,
  Users,
  Server,
  HardDrive,
  Award,
  Bug,
  Home,
  ChevronRight,
  LogOut,
  HelpCircle,
  Bell,
  Search,
  X,
} from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { SimpleTooltip } from "@/components/simple-tooltip"
import { UserAvatar } from "@/components/user-avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  onEmptyStateChange?: (isEmpty: boolean) => void
  onMobileClose?: () => void
}

export function Sidebar({ onEmptyStateChange, onMobileClose }: SidebarProps) {
  const pathname = usePathname()
  const [showEmptyState, setShowEmptyState] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    main: true,
    admin: false,
    tools: false,
  })

  const handleSwitchChange = (checked: boolean) => {
    setShowEmptyState(checked)
    if (onEmptyStateChange) {
      onEmptyStateChange(checked)
    }
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Check if a path is active (exact match or starts with for nested routes)
  const isActive = (path: string) => {
    if (path === "/app" && pathname === "/app") return true
    if (path !== "/app" && pathname.startsWith(path)) return true
    return false
  }

  // Check if a path is in the current section
  const isInSection = (path: string) => {
    if (path.startsWith("/organization") && pathname.startsWith("/organization")) return true
    if (path.startsWith("/admin") && pathname.startsWith("/admin")) return true
    return false
  }

  // Main navigation items
  const mainNavItems = [
    { icon: <Home size={18} />, label: "Home", href: "/app" },
    { icon: <Building2 size={18} />, label: "Organizations", href: "/app" },
    { icon: <Database size={18} />, label: "Vaults", href: "/vaults" },
  ]

  // Tools navigation items
  const toolsNavItems = [
    { icon: <FileText size={18} />, label: "Documentation", href: "/docs" },
    { icon: <Code size={18} />, label: "Proof Visualizer", href: "/visualizer" },
    { icon: <FileCode2 size={18} />, label: "XML Report Generator", href: "/report" },
  ]

  // Admin navigation items
  const adminNavItems = [
    { icon: <Users size={18} />, label: "Users", href: "/admin/users" },
    { icon: <Building2 size={18} />, label: "Organizations", href: "/admin/organizations" },
    { icon: <Database size={18} />, label: "Vaults", href: "/admin/vaults" },
    { icon: <Server size={18} />, label: "Caches", href: "/admin/caches" },
    { icon: <HardDrive size={18} />, label: "Computes", href: "/admin/computes" },
    { icon: <Award size={18} />, label: "Credits", href: "/admin/credits" },
  ]

  return (
    <div className="h-full bg-gradient-to-b from-primary-700 to-primary-900 text-white w-64 flex flex-col shadow-xl relative">
      {/* Mobile close button */}
      {onMobileClose && (
        <button
          className="absolute top-4 right-4 p-1 rounded-full bg-primary-600/50 text-white lg:hidden z-10"
          onClick={onMobileClose}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      )}

      {/* Logo and branding */}
      <div className="p-4 border-b border-primary-600/50 flex items-center justify-between">
        <Link href="/app" className="flex items-center gap-2 group">
          <div className="bg-white rounded-lg p-1.5 shadow-md group-hover:shadow-lg transition-all">
            <div className="w-7 h-7 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-md"></div>
              <div className="absolute inset-1 bg-white rounded-md flex items-center justify-center">
                <div className="w-3.5 h-3.5 bg-warning-400 rounded-full animate-pulse-subtle"></div>
              </div>
            </div>
          </div>
          <div className="font-medium">
            <div className="text-sm">runtime</div>
            <div className="text-sm">verification</div>
          </div>
        </Link>

        {/* Quick action buttons */}
        <div className="flex items-center gap-2">
          <SimpleTooltip text="Search" position="bottom">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-primary-600/50 rounded-full">
              <Search size={16} />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip text="Notifications" position="bottom">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-primary-600/50 rounded-full">
              <Bell size={16} />
            </Button>
          </SimpleTooltip>
        </div>
      </div>

      {/* User profile */}
      <div className="p-3 border-b border-primary-600/50">
        <Link
          href="/settings"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
        >
          <UserAvatar />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">Alex Savienko</div>
            <div className="text-xs text-primary-200 truncate">alex@example.com</div>
          </div>
          <SimpleTooltip text="Account Settings" position="right">
            <div className="flex items-center">
              <ChevronRight size={16} className="text-primary-300" />
            </div>
          </SimpleTooltip>
        </Link>
      </div>

      {/* Main navigation - scrollable */}
      <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
        {/* Main section */}
        <div className="mb-2">
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-primary-200 hover:bg-primary-600/50"
            onClick={() => toggleSection("main")}
          >
            <span>Main Navigation</span>
            <ChevronDown size={16} className={`transition-transform ${expandedSections.main ? "rotate-180" : ""}`} />
          </button>

          {expandedSections.main && (
            <ul className="mt-1">
              {mainNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "nav-link",
                      isActive(item.href) ? "nav-link-active" : "nav-link-inactive",
                      isInSection(item.href) && !isActive(item.href) && "bg-primary-800/50",
                    )}
                    onClick={onMobileClose}
                  >
                    <span className="flex items-center justify-center w-6">{item.icon}</span>
                    <span>{item.label}</span>

                    {/* Active indicator */}
                    {isActive(item.href) && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tools section */}
        <div className="mb-2">
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-primary-200 hover:bg-primary-600/50"
            onClick={() => toggleSection("tools")}
          >
            <span>Tools</span>
            <ChevronDown size={16} className={`transition-transform ${expandedSections.tools ? "rotate-180" : ""}`} />
          </button>

          {expandedSections.tools && (
            <ul className="mt-1">
              {toolsNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn("nav-link", isActive(item.href) ? "nav-link-active" : "nav-link-inactive")}
                    onClick={onMobileClose}
                  >
                    <span className="flex items-center justify-center w-6">{item.icon}</span>
                    <span>{item.label}</span>

                    {/* Active indicator */}
                    {isActive(item.href) && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Admin section */}
        <div className="mb-2">
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-primary-200 hover:bg-primary-600/50"
            onClick={() => toggleSection("admin")}
          >
            <span>Admin</span>
            <ChevronDown size={16} className={`transition-transform ${expandedSections.admin ? "rotate-180" : ""}`} />
          </button>

          {expandedSections.admin && (
            <ul className="mt-1">
              {adminNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn("nav-link", isActive(item.href) ? "nav-link-active" : "nav-link-inactive")}
                    onClick={onMobileClose}
                  >
                    <span className="flex items-center justify-center w-6">{item.icon}</span>
                    <span>{item.label}</span>

                    {/* Active indicator */}
                    {isActive(item.href) && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Footer actions */}
      <div className="border-t border-primary-600/50">
        {/* Debug mode toggle */}
        <div className="p-3 border-b border-primary-600/50">
          <SimpleTooltip text="Toggle empty state for debugging" position="top">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-primary-600/50 transition-colors">
              <Bug size={16} />
              <Label htmlFor="debug-mode" className="text-sm cursor-pointer flex-1">
                Debug Mode
              </Label>
              <Switch id="debug-mode" checked={showEmptyState} onCheckedChange={handleSwitchChange} />
            </div>
          </SimpleTooltip>
        </div>

        {/* Help and logout */}
        <div className="p-3 flex flex-col gap-1">
          <Link
            href="/help"
            className="flex items-center gap-3 px-2 py-1.5 text-sm rounded-md hover:bg-primary-600/50 transition-colors"
            onClick={onMobileClose}
          >
            <HelpCircle size={16} />
            <span>Help & Support</span>
          </Link>
          <Link
            href="/logout"
            className="flex items-center gap-3 px-2 py-1.5 text-sm rounded-md hover:bg-primary-600/50 transition-colors"
            onClick={onMobileClose}
          >
            <LogOut size={16} />
            <span>Log out</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
