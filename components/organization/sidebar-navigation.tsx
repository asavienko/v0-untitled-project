"use client"

import { useState } from "react"
import { Home, Database, Users, Activity, Settings, ChevronLeft, ChevronRight, User } from "lucide-react"

interface SidebarNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
  organizationName: string
}

export function SidebarNavigation({ activeSection, onSectionChange, organizationName }: SidebarNavigationProps) {
  const [collapsed, setCollapsed] = useState(false)

  const navItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "vaults", label: "Vaults", icon: Database },
    { id: "members", label: "Members", icon: Users },
    { id: "activity", label: "Activity", icon: Activity },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className={`border-r flex flex-col h-full transition-all ${collapsed ? "w-16" : "w-64"}`}>
      {/* Organization Header */}
      <div className="border-b p-4 flex items-center justify-between">
        {!collapsed && <div className="truncate font-medium">{organizationName}</div>}
        <button onClick={() => setCollapsed(!collapsed)} className="p-1 border rounded-md ml-auto">
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-auto py-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center p-2 ${collapsed ? "justify-center" : "px-4"} ${
                  activeSection === item.id ? "border-l-4 border-gray-800 bg-gray-100" : ""
                }`}
              >
                <item.icon size={20} />
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* User Profile */}
      <div className="border-t p-4 flex items-center">
        <div className="w-8 h-8 rounded-full border flex items-center justify-center">
          <User size={16} />
        </div>
        {!collapsed && (
          <div className="ml-3 truncate">
            <div className="text-sm font-medium">User Name</div>
            <div className="text-xs text-gray-500">user@example.com</div>
          </div>
        )}
      </div>
    </div>
  )
}
