"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Database,
  Users,
  Activity,
  Settings,
  Search,
  Bell,
  HelpCircle,
  Menu,
  X,
  ChevronRight,
} from "lucide-react"
import { OverviewPanel } from "./wireframe/overview-panel"
import { VaultsPanel } from "./wireframe/vaults-panel"
import { MembersPanel } from "./wireframe/members-panel"
import { ActivityPanel } from "./wireframe/activity-panel"
import { SettingsPanel } from "./wireframe/settings-panel"

interface OrganizationWireframeProps {
  organizationSlug: string
}

export function OrganizationWireframe({ organizationSlug = "" }: OrganizationWireframeProps) {
  const [activeSection, setActiveSection] = useState("overview")
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  // Mock organization data
  const organization = {
    name: organizationSlug || "Default Organization",
    slug: organizationSlug,
    type: "Enterprise",
    members: 12,
    vaults: 8,
    createdAt: "2023-01-15",
  }

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "vaults", label: "Vaults", icon: Database },
    { id: "members", label: "Members", icon: Users },
    { id: "activity", label: "Activity", icon: Activity },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="p-2 rounded-md bg-white shadow-md">
          {mobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-20 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out
        ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0
      `}
      >
        {/* Organization header */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center font-bold text-gray-600">
              {organization.name.charAt(0)}
            </div>
            <div>
              <h2 className="font-medium truncate">{organization.name}</h2>
              <div className="text-xs text-gray-500">{organization.type}</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileSidebarOpen(false)
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left
                    ${
                      activeSection === item.id
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }
                  `}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                  {activeSection === item.id && <ChevronRight size={16} className="ml-auto" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User tools */}
        <div className="p-4 border-t">
          <div className="relative mb-3">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border rounded-md w-full" />
          </div>
          <div className="flex justify-around mb-3">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Bell size={18} />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <HelpCircle size={18} />
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xs font-medium">U</span>
            </div>
          </div>
        </div>

        {/* Organization stats */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
          <div className="grid grid-cols-2 gap-2 text-center text-xs">
            <div className="p-2 bg-white rounded-md border">
              <div className="font-medium">{organization.members}</div>
              <div className="text-gray-500">Members</div>
            </div>
            <div className="p-2 bg-white rounded-md border">
              <div className="font-medium">{organization.vaults}</div>
              <div className="text-gray-500">Vaults</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Content area */}
        <main className="flex-1 overflow-auto p-6">
          {activeSection === "overview" && <OverviewPanel organization={organization} />}
          {activeSection === "vaults" && <VaultsPanel organization={organization} />}
          {activeSection === "members" && <MembersPanel organization={organization} />}
          {activeSection === "activity" && <ActivityPanel organization={organization} />}
          {activeSection === "settings" && <SettingsPanel organization={organization} />}
        </main>
      </div>
    </div>
  )
}
