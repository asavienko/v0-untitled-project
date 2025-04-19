"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Building2, Database, Menu, X, ChevronRight, LogOut, HelpCircle, User, Search, Bell } from "lucide-react"
import { cn } from "@/lib/utils"
import { UserAvatar } from "@/components/user-avatar"

interface MobileNavigationProps {
  onEmptyStateChange?: (isEmpty: boolean) => void
}

export function MobileNavigation({ onEmptyStateChange }: MobileNavigationProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showEmptyState, setShowEmptyState] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const toggleEmptyState = () => {
    const newState = !showEmptyState
    setShowEmptyState(newState)
    if (onEmptyStateChange) {
      onEmptyStateChange(newState)
    }
  }

  // Check if a path is active
  const isActive = (path: string) => {
    if (path === "/app" && pathname === "/app") return true
    if (path !== "/app" && pathname.startsWith(path)) return true
    return false
  }

  // Primary navigation items
  const primaryNavItems = [
    { icon: <Home size={20} />, label: "Home", href: "/app" },
    { icon: <Building2 size={20} />, label: "Organizations", href: "/app" },
    { icon: <Database size={20} />, label: "Vaults", href: "/vaults" },
    { icon: <User size={20} />, label: "Account", href: "/settings" },
  ]

  // Bottom tab navigation items (simplified for mobile)
  const bottomNavItems = [
    { icon: <Home size={20} />, label: "Home", href: "/app" },
    { icon: <Building2 size={20} />, label: "Orgs", href: "/app" },
    { icon: <Database size={20} />, label: "Vaults", href: "/vaults" },
    { icon: <Menu size={20} />, label: "Menu", onClick: toggleSidebar },
  ]

  return (
    <>
      {/* Top app bar for mobile */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-primary-700 text-white z-30 lg:hidden flex items-center justify-between px-4 shadow-md">
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-primary-600" aria-label="Menu">
          <Menu size={24} />
        </button>

        <Link href="/app" className="flex items-center gap-2">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-md"></div>
              <div className="absolute inset-1 bg-white rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-warning-400 rounded-full animate-pulse-subtle"></div>
              </div>
            </div>
          </div>
          <span className="font-medium text-sm">Runtime Verification</span>
        </Link>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-primary-600" aria-label="Notifications">
            <Bell size={20} />
          </button>
          <Link href="/settings">
            <UserAvatar />
          </Link>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={closeSidebar}
      ></div>

      {/* Mobile sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[85%] max-w-[300px] bg-gradient-to-b from-primary-700 to-primary-900 text-white z-50 lg:hidden transition-transform duration-300 ease-in-out transform shadow-xl",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="p-4 border-b border-primary-600/50 flex items-center justify-between">
            <Link href="/app" className="flex items-center gap-2" onClick={closeSidebar}>
              <div className="bg-white rounded-lg p-1.5 shadow-md">
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

            <button onClick={closeSidebar} className="p-2 rounded-full hover:bg-primary-600/50" aria-label="Close menu">
              <X size={20} />
            </button>
          </div>

          {/* User profile */}
          <div className="p-4 border-b border-primary-600/50">
            <Link
              href="/settings"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={closeSidebar}
            >
              <UserAvatar />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">Alex Savienko</div>
                <div className="text-xs text-primary-200 truncate">alex@example.com</div>
              </div>
              <ChevronRight size={16} className="text-primary-300" />
            </Link>
          </div>

          {/* Search bar */}
          <div className="p-4 border-b border-primary-600/50">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-primary-300" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-primary-800/50 border border-primary-600/50 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <div className="p-2">
              <div className="mb-2 px-3 py-2 text-xs font-semibold text-primary-200 uppercase tracking-wider">
                Main Navigation
              </div>
              <ul className="space-y-1">
                {primaryNavItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors",
                        isActive(item.href)
                          ? "bg-primary-600 text-white font-medium"
                          : "text-white/90 hover:bg-white/10",
                      )}
                      onClick={closeSidebar}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {isActive(item.href) && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-2 mt-2">
              <div className="mb-2 px-3 py-2 text-xs font-semibold text-primary-200 uppercase tracking-wider">
                Debug Options
              </div>
              <div className="px-3 py-3 flex items-center justify-between rounded-lg hover:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-primary-600/50 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bug"
                    >
                      <path d="M8 2a6 6 0 0 1 12 0v10a8 8 0 0 1-16 0V2z" />
                      <path d="M19 2a2 2 0 0 0-2 2" />
                      <path d="M5 2a2 2 0 0 1 2 2" />
                      <path d="M19 18a2 2 0 0 1-2 2" />
                      <path d="M5 18a2 2 0 0 0 2 2" />
                      <path d="M2 12h20" />
                      <path d="M2 4h20" />
                      <path d="M2 20h20" />
                    </svg>
                  </div>
                  <span>Empty State</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={showEmptyState}
                    onChange={toggleEmptyState}
                  />
                  <div className="w-9 h-5 bg-gray-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="p-4 border-t border-primary-600/50">
            <div className="space-y-2">
              <Link
                href="/help"
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={closeSidebar}
              >
                <HelpCircle size={20} />
                <span>Help & Support</span>
              </Link>
              <Link
                href="/logout"
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={closeSidebar}
              >
                <LogOut size={20} />
                <span>Log out</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tab navigation for mobile */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around z-30 lg:hidden">
        {bottomNavItems.map((item, index) => (
          <div key={index} className="flex-1 h-full">
            {item.onClick ? (
              <button
                onClick={item.onClick}
                className={cn(
                  "w-full h-full flex flex-col items-center justify-center gap-1",
                  item.label === "Menu" && isSidebarOpen ? "text-primary-600" : "text-gray-600",
                )}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </button>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "w-full h-full flex flex-col items-center justify-center gap-1",
                  isActive(item.href) ? "text-primary-600" : "text-gray-600",
                )}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Spacer for fixed elements */}
      <div className="h-14 lg:hidden"></div>
      <div className="h-16 lg:hidden"></div>
    </>
  )
}
