"use client"

import { useState, useEffect } from "react"
import {
  Database,
  Users,
  Settings,
  Shield,
  CreditCard,
  BarChart3,
  Activity,
  ChevronRight,
  Clock,
  MoreHorizontal,
  Github,
  Building2,
  Plus,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"
import { NeuCard, NeuCardHeader, NeuCardTitle, NeuCardContent } from "@/components/ui/neu-card"
import { NeuButton } from "@/components/ui/neu-button"
import { EnhancedBadge } from "@/components/ui/enhanced-badge"
import { EnhancedIcon } from "@/components/ui/enhanced-icon"
import { EnhancedEmptyState } from "@/components/ui/enhanced-empty-state"
import { SimpleTooltip } from "@/components/ui/simple-tooltip"

interface OrganizationViewProps {
  organizationSlug: string
}

export function OrganizationView({ organizationSlug }: OrganizationViewProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [animatedItems, setAnimatedItems] = useState(false)

  // Trigger animations after component mounts
  useEffect(() => {
    setAnimatedItems(true)
  }, [])

  // In a real app, you would fetch organization data based on the slug
  const organizationName = organizationSlug.startsWith("@")
    ? organizationSlug
    : organizationSlug === "test-yiyi"
      ? "@test-yiyi"
      : organizationSlug === "test-asavienko"
        ? "test-asavienko"
        : organizationSlug === "runtimeverification"
          ? "runtimeverification"
          : organizationSlug === "test"
            ? "@test"
            : organizationSlug

  // Mock data for the organization
  const isGithubOrg = organizationName.startsWith("@")
  const vaultCount = organizationName === "runtimeverification" ? 16 : organizationName === "@test-yiyi" ? 3 : 0
  const userCount = organizationName === "runtimeverification" ? 7 : organizationName === "@test-yiyi" ? 2 : 1

  const tabs = [
    { id: "overview", label: "Overview", icon: <Activity size={16} /> },
    { id: "vaults", label: "Vaults", icon: <Database size={16} /> },
    { id: "users", label: "Users", icon: <Users size={16} /> },
    { id: "compute", label: "Compute", icon: <BarChart3 size={16} /> },
    { id: "billing", label: "Billing", icon: <CreditCard size={16} /> },
    { id: "settings", label: "Settings", icon: <Settings size={16} /> },
  ]

  // Mock user data
  const users = [
    {
      id: "1",
      name: "asavienko",
      email: "asavienko@gmail.com",
      role: "admin",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActive: "2 hours ago",
    },
  ]

  // Mock activity data
  const activities = [
    { id: "1", user: "asavienko", action: "created vault", target: "Main Vault", time: "2 hours ago" },
    { id: "2", user: "asavienko", action: "updated settings", target: "Organization", time: "1 day ago" },
    { id: "3", user: "system", action: "performed maintenance", target: "All vaults", time: "3 days ago" },
  ]

  return (
    <div className="flex flex-col">
      {/* Organization header */}
      <div className="bg-white border-b shadow-sm">
        <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`p-3 sm:p-4 rounded-xl ${
                isGithubOrg
                  ? "bg-gradient-to-br from-gray-800 to-black text-white shadow-lg"
                  : "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 shadow-sm"
              }`}
            >
              {isGithubOrg ? <Github size={24} /> : <Building2 size={24} />}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900">{organizationName}</h1>
                {organizationName === "runtimeverification" && (
                  <EnhancedBadge variant="primary">
                    <Sparkles size={12} className="mr-1" /> Pro Plan
                  </EnhancedBadge>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {isGithubOrg ? "GitHub Organization" : "User-managed Organization"} • Created on April 7, 2025
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <NeuButton variant="default" size="sm" icon={Settings} iconPosition="left">
              Settings
            </NeuButton>
            <NeuButton variant="primary" icon={Plus} iconPosition="left">
              Create Vault
            </NeuButton>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 flex overflow-x-auto border-t border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-7xl mx-auto w-full">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Vaults",
                  value: vaultCount,
                  icon: <Database size={18} className="text-primary-600" />,
                  description: vaultCount > 0 ? "Last updated 2 hours ago" : "No vaults created yet",
                  delay: 0,
                },
                {
                  title: "Users",
                  value: userCount,
                  icon: <Users size={18} className="text-secondary-600" />,
                  description: userCount > 1 ? `+${userCount - 1} from last month` : "Just you for now",
                  delay: 100,
                },
                {
                  title: "Compute Credits",
                  value: "1,250",
                  icon: <BarChart3 size={18} className="text-success-600" />,
                  description: "750 credits remaining this month",
                  isPositive: true,
                  delay: 200,
                },
                {
                  title: "Subscription",
                  value: "Pro",
                  icon: <CreditCard size={18} className="text-primary-600" />,
                  description: "Renews on May 7, 2025",
                  delay: 300,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${animatedItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${stat.delay}ms` }}
                >
                  <NeuCard variant="elevated" hover={true} className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-500">{stat.title}</span>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-extrabold text-gray-900 my-2">{stat.value}</div>
                    <div
                      className={`text-xs flex items-center mt-2 ${stat.isPositive ? "text-success-600" : "text-gray-500"}`}
                    >
                      {stat.isPositive && (
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      )}
                      {stat.description}
                    </div>
                  </NeuCard>
                </div>
              ))}
            </div>

            {/* Main content area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Recent activity */}
                <NeuCard
                  variant="elevated"
                  hover={true}
                  className={`transition-all duration-500 ${animatedItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <NeuCardHeader>
                    <NeuCardTitle>Recent Activity</NeuCardTitle>
                    <NeuButton variant="ghost" size="sm" className="text-primary-600 text-xs">
                      View all
                    </NeuButton>
                  </NeuCardHeader>

                  <NeuCardContent className="divide-y">
                    {activities.length > 0 ? (
                      activities.map((activity, idx) => (
                        <div key={activity.id} className="py-3 hover:bg-gray-50/50 transition-colors cursor-pointer">
                          <div className="flex items-start gap-3">
                            <EnhancedIcon icon={Activity} variant="secondary" size="sm" />
                            <div>
                              <p className="text-sm">
                                <span className="font-bold">{activity.user}</span> {activity.action}{" "}
                                <span className="font-bold">{activity.target}</span>
                              </p>
                              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-8 text-center text-gray-500">No recent activity to display</div>
                    )}
                  </NeuCardContent>
                </NeuCard>

                {/* Vaults section */}
                <NeuCard
                  variant="elevated"
                  hover={true}
                  className={`transition-all duration-500 ${animatedItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <NeuCardHeader>
                    <div className="flex items-center justify-between w-full">
                      <NeuCardTitle>Vaults</NeuCardTitle>
                      <div className="flex items-center gap-2">
                        <SimpleTooltip text="Add a new vault" position="top">
                          <NeuButton variant="primary" size="sm" icon={Plus} iconPosition="left" className="text-xs">
                            Add Vault
                          </NeuButton>
                        </SimpleTooltip>
                        <NeuButton variant="ghost" size="sm" className="text-primary-600 text-xs">
                          View all
                        </NeuButton>
                      </div>
                    </div>
                  </NeuCardHeader>

                  {vaultCount > 0 ? (
                    <NeuCardContent className="divide-y">
                      {Array.from({ length: Math.min(3, vaultCount) }).map((_, index) => (
                        <div
                          key={index}
                          className="py-3 hover:bg-gray-50/50 cursor-pointer transition-all duration-300 hover:translate-x-1"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <EnhancedIcon icon={Database} variant="primary" size="sm" />
                              <div>
                                <h3 className="font-bold text-sm">Vault {index + 1}</h3>
                                <div className="text-xs text-gray-500">Created on April {index + 1}, 2025</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Clock size={12} />
                                {index === 0 ? "2h ago" : index === 1 ? "2d ago" : "1w ago"}
                              </div>
                              <button className="p-1.5 rounded-md hover:bg-gray-200/50 transition-colors">
                                <MoreHorizontal size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </NeuCardContent>
                  ) : (
                    <NeuCardContent>
                      <EnhancedEmptyState
                        icon={Database}
                        title="No vaults found"
                        description="Create your first vault to start using Runtime Verification."
                        action={{
                          label: "Create Vault",
                          onClick: () => console.log("Create vault clicked"),
                        }}
                        visual="illustration"
                      />
                    </NeuCardContent>
                  )}
                </NeuCard>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                {/* Users section */}
                <NeuCard
                  variant="elevated"
                  hover={true}
                  className={`transition-all duration-500 ${animatedItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <NeuCardHeader>
                    <NeuCardTitle>Users</NeuCardTitle>
                    <div className="flex items-center gap-2">
                      <NeuButton variant="ghost" size="sm" className="text-primary-600 text-xs">
                        View all
                      </NeuButton>
                      <NeuButton variant="primary" size="sm" icon={Plus} iconPosition="left" className="text-xs">
                        Add
                      </NeuButton>
                    </div>
                  </NeuCardHeader>

                  <NeuCardContent className="divide-y">
                    {users.map((user) => (
                      <div
                        key={user.id}
                        className="py-3 hover:bg-gray-50/50 cursor-pointer transition-all duration-300 hover:translate-x-1"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              className="h-9 w-9 rounded-full ring-2 ring-white shadow-sm"
                              src={user.avatar || "/placeholder.svg"}
                              alt=""
                            />
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-bold text-sm">{user.name}</h3>
                                <EnhancedBadge variant="success" size="sm">
                                  {user.role}
                                </EnhancedBadge>
                              </div>
                              <div className="text-xs text-gray-500">{user.email}</div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">{user.lastActive}</div>
                        </div>
                      </div>
                    ))}
                  </NeuCardContent>
                </NeuCard>

                {/* Quick actions */}
                <NeuCard
                  variant="elevated"
                  hover={true}
                  className={`transition-all duration-500 ${animatedItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <NeuCardHeader>
                    <NeuCardTitle>Quick Actions</NeuCardTitle>
                  </NeuCardHeader>

                  <NeuCardContent className="divide-y">
                    <button className="w-full py-3 text-left hover:bg-gray-50/50 flex items-center justify-between group transition-all duration-300 hover:translate-x-1">
                      <div className="flex items-center gap-3">
                        <EnhancedIcon icon={Shield} variant="primary" size="sm" />
                        <div className="text-sm font-bold">Manage permissions</div>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-transform"
                      />
                    </button>

                    <button className="w-full py-3 text-left hover:bg-gray-50/50 flex items-center justify-between group transition-all duration-300 hover:translate-x-1">
                      <div className="flex items-center gap-3">
                        <EnhancedIcon icon={CreditCard} variant="primary" size="sm" />
                        <div className="text-sm font-bold">Billing settings</div>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-transform"
                      />
                    </button>

                    <button className="w-full py-3 text-left hover:bg-gray-50/50 flex items-center justify-between group transition-all duration-300 hover:translate-x-1">
                      <div className="flex items-center gap-3">
                        <EnhancedIcon icon={Settings} variant="primary" size="sm" />
                        <div className="text-sm font-bold">Organization settings</div>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-transform"
                      />
                    </button>
                  </NeuCardContent>
                </NeuCard>

                {/* Help & resources */}
                <NeuCard
                  variant="convex"
                  hover={true}
                  className={`transition-all duration-500 ${animatedItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <NeuCardHeader>
                    <NeuCardTitle>Help & Resources</NeuCardTitle>
                  </NeuCardHeader>

                  <NeuCardContent>
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-lg p-4 mb-4">
                      <h3 className="text-sm font-extrabold text-primary-700 mb-1">Getting Started Guide</h3>
                      <p className="text-xs text-primary-600/80 mb-3">
                        Learn how to set up your organization and create your first vault.
                      </p>
                      <NeuButton
                        variant="default"
                        size="sm"
                        className="w-full justify-center gap-1 text-xs"
                        icon={ArrowUpRight}
                        iconPosition="right"
                      >
                        View Guide
                      </NeuButton>
                    </div>

                    <div className="text-xs text-gray-500">
                      <p className="mb-2">Need help? Contact support:</p>
                      <a
                        href="mailto:support@runtimeverification.com"
                        className="text-primary-600 hover:underline flex items-center gap-1 transition-all duration-300 hover:translate-x-1"
                      >
                        support@runtimeverification.com
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </NeuCardContent>
                </NeuCard>
              </div>
            </div>
          </div>
        )}

        {activeTab === "vaults" && (
          <div className="space-y-6">
            <NeuCard variant="elevated" hover={true}>
              <NeuCardHeader>
                <NeuCardTitle>Vaults</NeuCardTitle>
                <NeuButton variant="primary" size="sm" icon={Plus} iconPosition="left">
                  Create Vault
                </NeuButton>
              </NeuCardHeader>
              <NeuCardContent>
                {vaultCount > 0 ? (
                  <div className="divide-y">
                    {Array.from({ length: vaultCount }).map((_, index) => (
                      <div
                        key={index}
                        className="py-4 hover:bg-gray-50/50 cursor-pointer transition-all duration-300 hover:translate-x-1"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <EnhancedIcon icon={Database} variant="primary" size="sm" />
                            <div>
                              <h3 className="font-bold text-base">Vault {index + 1}</h3>
                              <div className="text-xs text-gray-500">Created on April {index + 1}, 2025</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Clock size={14} />
                              {index === 0 ? "2h ago" : index === 1 ? "2d ago" : "1w ago"}
                            </div>
                            <NeuButton variant="ghost" size="sm">
                              <MoreHorizontal size={16} />
                            </NeuButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <EnhancedEmptyState
                    icon={Database}
                    title="No vaults found"
                    description="Create your first vault to start using Runtime Verification."
                    action={{
                      label: "Create Vault",
                      onClick: () => console.log("Create vault clicked"),
                      isCTA: true,
                      icon: Plus,
                    }}
                    visual="illustration"
                  />
                )}
              </NeuCardContent>
            </NeuCard>
          </div>
        )}

        {activeTab === "users" && (
          <div className="space-y-6">
            <NeuCard variant="elevated" hover={true}>
              <NeuCardHeader>
                <NeuCardTitle>Organization Users</NeuCardTitle>
                <NeuButton variant="primary" size="sm" icon={Plus} iconPosition="left">
                  Add User
                </NeuButton>
              </NeuCardHeader>
              <NeuCardContent>
                <div className="divide-y">
                  {users.map((user) => (
                    <div key={user.id} className="py-4 hover:bg-gray-50/50 cursor-pointer transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                        <div className="flex items-center gap-4">
                          <img
                            className="h-10 w-10 rounded-full ring-2 ring-white shadow-sm"
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                          />
                          <div>
                            <h3 className="font-bold text-base">{user.name}</h3>
                            <div className="text-xs text-gray-500">{user.email}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-3">
                          <EnhancedBadge variant="primary" size="sm">
                            {user.role}
                          </EnhancedBadge>
                          <div className="text-xs text-gray-500">{user.lastActive}</div>
                          <NeuButton variant="ghost" size="sm">
                            <MoreHorizontal size={16} />
                          </NeuButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </NeuCardContent>
            </NeuCard>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {(activeTab === "compute" || activeTab === "billing" || activeTab === "settings") && (
          <div className="flex items-center justify-center p-12 bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Tab
              </h3>
              <p className="text-gray-500">This tab is under construction</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
