"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { NeuButton } from "@/components/ui/neu-button"
import { NeuCard, NeuCardHeader, NeuCardTitle, NeuCardContent } from "@/components/ui/neu-card"
import {
  Database,
  Home,
  Plus,
  Users,
  Settings,
  Shield,
  CreditCard,
  BarChart3,
  Activity,
  ChevronRight,
  Download,
  Share2,
  MoreHorizontal,
  Github,
  Building2,
  Clock,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { EnhancedBadge } from "@/components/ui/enhanced-badge"
import { EnhancedIcon } from "@/components/ui/enhanced-icon"
import { EnhancedEmptyState } from "@/components/ui/enhanced-empty-state"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { SimpleTooltip } from "@/components/ui/simple-tooltip"

export default function NeuOrganizationPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [animatedItems, setAnimatedItems] = useState(false)
  const [showEmptyState, setShowEmptyState] = useState(false)
  const isMobile = useIsMobile()

  // Trigger animations after component mounts
  useEffect(() => {
    setAnimatedItems(true)
  }, [])

  // In a real app, you would fetch organization data based on the slug
  const organizationName = params.slug.startsWith("@")
    ? params.slug
    : params.slug === "test-yiyi"
      ? "@test-yiyi"
      : params.slug === "test-asavienko"
        ? "test-asavienko"
        : params.slug === "runtimeverification"
          ? "runtimeverification"
          : params.slug === "test"
            ? "@test"
            : params.slug

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
    <div className="flex h-full">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar onEmptyStateChange={setShowEmptyState} />
      </div>

      {/* Mobile navigation */}
      {isMobile && <MobileNavigation onEmptyStateChange={setShowEmptyState} />}

      <main className="flex-1 overflow-y-auto bg-[hsl(var(--neu-bg))]">
        {/* Organization header */}
        <div className="bg-gradient-to-r from-white to-gray-50 border-b">
          {/* Breadcrumb */}
          <div className="px-4 sm:px-6 py-2 border-b border-gray-100 flex items-center text-sm text-gray-500 overflow-x-auto mt-14 lg:mt-0">
            <Link href="/app" className="hover:text-gray-700 flex items-center whitespace-nowrap">
              <Home size={14} className="mr-1" />
              Home
            </Link>
            <ChevronRight size={14} className="mx-2 flex-shrink-0" />
            <span className="text-gray-900 font-medium truncate">{organizationName}</span>
          </div>

          {/* Organization header content */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div
                className={`p-3 sm:p-4 rounded-xl ${
                  isGithubOrg
                    ? "bg-gradient-to-br from-gray-800 to-black text-white shadow-lg animate-pulse-glow"
                    : "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 shadow-sm animate-pulse-glow"
                }`}
              >
                {isGithubOrg ? <Github size={24} /> : <Building2 size={24} />}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 text-bold-shadow">
                    {organizationName}
                  </h1>
                  {organizationName === "runtimeverification" && (
                    <EnhancedBadge variant="primary" className="animate-pulse-glow">
                      <Sparkles size={12} className="mr-1" /> Pro Plan
                    </EnhancedBadge>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {isGithubOrg ? "GitHub Organization" : "User-managed Organization"} • Created on April 7, 2025
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <NeuButton variant="default" size="sm" icon={Share2} iconPosition="left" className="text-xs sm:text-sm">
                Share
              </NeuButton>
              <NeuButton variant="default" size="sm" icon={Download} iconPosition="left" className="text-xs sm:text-sm">
                Export
              </NeuButton>
              <NeuButton
                variant="primary"
                icon={Plus}
                iconPosition="left"
                className="animate-soft-bounce text-xs sm:text-sm"
              >
                Create Vault
              </NeuButton>
            </div>
          </div>

          {/* Tabs - optimized for mobile with better touch targets and visual indicators */}
          <div className="relative border-t border-gray-100">
            {/* Fade indicators for horizontal scrolling */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 md:hidden"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 md:hidden"></div>
            
            <div className="px-4 sm:px-6 flex overflow-x-auto scrollbar-hide py-1 relative">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={cn(
                    "px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium whitespace-nowrap flex items-center gap-1.5 sm:gap-2 transition-all duration-300 min-w-[4.5rem] sm:min-w-0 justify-center sm:justify-start touch-manipulation",
                    activeTab === tab.id
                      ? "text-primary-600 border-b-2 border-primary-600 relative"
                      : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300",
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="flex items-center justify-center w-5 h-5">{tab.icon}</span>
                  <span>{tab.label}</span>
                  {/* Active indicator dot for mobile */}
                  {activeTab === tab.id && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-600 md:hidden"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

        {/* Content */}
        <div className="p-4 sm:p-6 pb-20 lg:pb-6">
          {/* Content sections remain the same as before */}
          {/* ... */}

          {/* I'm keeping the existing content sections from the previous implementation */}
          {activeTab === "overview" && (
            <div className="space-y-4 sm:space-y-6">
              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                    <NeuCard variant="elevated" hover={true} className="p-3 sm:p-5 card-3d">
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-500">{stat.title}</span>
                        {stat.icon}
                      </div>
                      <div className="text-xl sm:text-3xl font-extrabold text-gray-900 my-1 sm:my-2 text-bold-shadow">
                        {stat.value}
                      </div>
                      <div
                        className={`text-xs flex items-center mt-1 sm:mt-2 ${stat.isPositive ? "text-success-600" : "text-gray-500"}`}
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Left column */}
                <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                  {/* Recent activity */}
                  <NeuCard
                    variant="elevated"
                    hover={true}
                    className={`transition-all duration-500 ${animatedItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  >
                    <NeuCardHeader>
                      <NeuCardTitle className="text-bold-shadow">Recent Activity</NeuCardTitle>
                      <NeuButton variant="ghost" size="sm" className="text-primary-600 text-xs">
                        View all
                      </NeuButton>
                    </NeuCardHeader>

                    <NeuCardContent className="divide-y">
                      {activities.length > 0 ? (
                        activities.map((activity, idx) => (
                          <div
                            key={activity.id}
                            className="py-3 hover:bg-gray-50/50 transition-colors cursor-pointer"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div className="flex items-start gap-2 sm:gap-3">
                              <EnhancedIcon
                                icon={Activity}
                                variant="secondary"
                                size="sm"
                                className="animate-pulse-glow"
                              />
                              <div>
                                <p className="text-xs sm:text-sm">
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
                        <NeuCardTitle className="text-bold-shadow">Vaults</NeuCardTitle>
                        <div className="flex items-center gap-2">
                          <div className="relative group">
                            <SimpleTooltip text="Connect a vault to access and verify repositories from this GitHub organization" position="top">
                              <NeuButton variant="primary" size="sm" icon={Plus} iconPosition="left" className="text-xs">
                                Add a new vault
                              </NeuButton>
                            </SimpleTooltip>
                            <div className="absolute right-0 top-full mt-1 bg-gray-800 text-white rounded-md p-3 shadow-lg z-10 w-48 hidden group-hover:block">
                              <p className="text-xs mb-2">Add a new vault</p>
                              <div className="flex flex-col gap-2">
                                <Button className="bg-blue-600 hover:bg-blue-700 w-full text-sm">Connect Vault</Button>
                                <Button className="bg-blue-600 hover:bg-blue-700 w-full text-sm">Create Vault</Button>
                              </div>
                            </div>
                          </div>
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
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <EnhancedIcon
                                  icon={Database}
                                  variant="primary"
                                  size="sm"
                                  className="animate-pulse-glow"
                                />
                                <div>
                                  <h3 className="font-bold text-xs sm:text-sm">Vault {index + 1}</h3>
                                  <div className="text-xs text-gray-500">Created on April {index + 1}, 2025</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 sm:gap-3">
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
                <div className="space-y-4 sm:space-y-6">
                  {/* Users section */}
                  <NeuCard
                    variant="elevated"
                    hover={true}
                    className={`transition-all duration-500 ${animatedItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    <NeuCardHeader>
                      <NeuCardTitle className="text-bold-shadow">Users</NeuCardTitle>
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
                            <div className="flex items-center gap-2 sm:gap-3">
                              <img
                                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white shadow-sm animate-pulse-glow"
                                src={user.avatar || "/placeholder.svg"}
                                alt=""
                              />
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h3 className="font-bold text-xs sm:text-sm">{user.name}</h3>
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
                      <NeuCardTitle className="text-bold-shadow">Quick Actions</NeuCardTitle>
                    </NeuCardHeader>

                    <NeuCardContent className="divide-y">
                      <button className="w-full py-3 text-left hover:bg-gray-50/50 flex items-center justify-between group transition-all duration-300 hover:translate-x-1">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <EnhancedIcon
                            icon={Shield}
                            variant="primary"
                            size="sm"
                            className="group-hover:animate-pulse-glow"
                          />
                          <div className="text-xs sm:text-sm font-bold">Manage permissions</div>
                        </div>
                        <ChevronRight
                          size={16}
                          className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-transform"
                        />
                      </button>

                      <button className="w-full py-3 text-left hover:bg-gray-50/50 flex items-center justify-between group transition-all duration-300 hover:translate-x-1">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <EnhancedIcon
                            icon={CreditCard}
                            variant="primary"
                            size="sm"
                            className="group-hover:animate-pulse-glow"
                          />
                          <div className="text-xs sm:text-sm font-bold">Billing settings</div>
                        </div>
                        <ChevronRight
                          size={16}
                          className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-transform"
                        />
                      </button>

                      <button className="w-full py-3 text-left hover:bg-gray-50/50 flex items-center justify-between group transition-all duration-300 hover:translate-x-1">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <EnhancedIcon
                            icon={Settings}
                            variant="primary"
                            size="sm"
                            className="group-hover:animate-pulse-glow"
                          />
                          <div className="text-xs sm:text-sm font-bold">Organization settings</div>
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
                      <NeuCardTitle className="text-bold-shadow">Help & Resources</NeuCardTitle>
                    </NeuCardHeader>

                    <NeuCardContent>
                      <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 animate-float">
                        <h3 className="text-xs sm:text-sm font-extrabold text-primary-700 mb-1">
                          Getting Started Guide
                        </h3>
                        <p className="text-xs text-primary-600/80 mb-2 sm:mb-3">
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
            <div className="space-y-4 sm:space-y-6">
              <NeuCard variant="elevated" hover={true}>
                <NeuCardHeader>
                  <NeuCardTitle className="text-bold-shadow">Vaults</NeuCardTitle>
                  <NeuButton variant="primary" size="sm" icon={Plus} iconPosition="left" className="text-xs">
                    Create Vault
                  </NeuButton>
                </NeuCardHeader>
                <NeuCardContent>
                  {vaultCount > 0 ? (
                    <div className="divide-y">
                      {Array.from({ length: vaultCount }).map((_, index) => (
                        <div
                          key={index}
                          className="py-3 sm:py-4 hover:bg-gray-50/50 cursor-pointer transition-all duration-300 hover:translate-x-1"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <EnhancedIcon
                                icon={Database}
                                variant="primary"
                                size="sm"
                                className="animate-pulse-glow"
                              />
                              <div>
                                <h3 className="font-bold text-xs sm:text-base">Vault {index + 1}</h3>
                                <div className="text-xs text-gray-500">Created on April {index + 1}, 2025</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-4">
                              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
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
            <div className="space-y-4 sm:space-y-6">
              <NeuCard variant="elevated" hover={true}>
                <NeuCardHeader>
                  <NeuCardTitle className="text-bold-shadow">Organization Users</NeuCardTitle>
                  <NeuButton variant="primary" size="sm" icon={Plus} iconPosition="left" className="text-xs">
                    Add User
                  </NeuButton>
                </NeuCardHeader>
                <NeuCardContent>
                  <div className="divide-y">
                    {users.map((user) => (
                      <div
                        key={user.id}
                        className="py-3 sm:py-4 hover:bg-gray-50/50 cursor-pointer transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <img
                              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white shadow-sm"
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                            />
                            <div>
                              <h3 className="font-bold text-xs sm:text-base">{user.name}</h3>
                              <div className="text-xs text-gray-500">{user.email}</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
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

          {activeTab === "compute" && (
            <div className="space-y-4 sm:space-y-6">
              <NeuCard variant="elevated" hover={true}>
                <NeuCardHeader>
                  <NeuCardTitle className="text-bold-shadow">Compute Resources</NeuCardTitle>
                </NeuCardHeader>
                <NeuCardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6">
                    <NeuCard variant="flat" className="p-3 sm:p-4">
                      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1">Total Credits</div>
                      <div className="text-xl sm:text-3xl font-extrabold text-gray-900 mb-1 sm:mb-2">1,250</div>
                      <div className="text-xs text-success-600 flex items-center">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        250 more than last month
                      </div>
                    </NeuCard>

                    <NeuCard variant="flat" className="p-3 sm:p-4">
                      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1">Used Credits</div>
                      <div className="text-xl sm:text-3xl font-extrabold text-gray-900 mb-1 sm:mb-2">500</div>
                      <div className="text-xs text-gray-500">This billing period</div>
                    </NeuCard>

                    <NeuCard variant="flat" className="p-3 sm:p-4">
                      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1">Remaining Credits</div>
                      <div className="text-xl sm:text-3xl font-extrabold text-gray-900 mb-1 sm:mb-2">750</div>
                      <div className="text-xs text-gray-500">Resets on May 7, 2025</div>
                    </NeuCard>
                  </div>

                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                    <h3 className="text-xs sm:text-sm font-bold text-primary-700 mb-1 sm:mb-2">Need More Compute?</h3>
                    <p className="text-xs text-primary-600 mb-2 sm:mb-3">
                      Upgrade your plan or purchase additional compute credits to increase your verification capacity.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <NeuButton variant="primary" size="sm" className="text-xs">
                        Upgrade Plan
                      </NeuButton>
                      <NeuButton variant="default" size="sm" className="text-xs">
                        Buy Credits
                      </NeuButton>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-bold-shadow">
                    Compute Usage History
                  </h3>
                  <div className="neu-elevated p-3 sm:p-4 rounded-xl">
                    <ChartContainer
                      config={{
                        credits: {
                          label: "Compute Credits",
                          color: "hsl(var(--primary))",
                        },
                        tasks: {
                          label: "Verification Tasks",
                          color: "hsl(var(--secondary))",
                        },
                      }}
                      className="h-48 sm:h-64"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { month: "Jan", credits: 320, tasks: 5 },
                            { month: "Feb", credits: 450, tasks: 7 },
                            { month: "Mar", credits: 380, tasks: 6 },
                            { month: "Apr", credits: 520, tasks: 9 },
                            { month: "May", credits: 410, tasks: 8 },
                            { month: "Jun", credits: 490, tasks: 8 },
                          ]}
                          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                          <XAxis dataKey="month" className="text-xs" />
                          <YAxis className="text-xs" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar
                            dataKey="credits"
                            fill="var(--color-credits)"
                            radius={[4, 4, 0, 0]}
                            className="animate-pulse-glow"
                          />
                          <Bar dataKey="tasks" fill="var(--color-tasks)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 text-center">
                      Monthly compute usage for the last 6 months
                    </div>
                  </div>
                </NeuCardContent>
              </NeuCard>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-4 sm:space-y-6">
              <NeuCard variant="elevated" hover={true}>
                <NeuCardHeader>
                  <NeuCardTitle className="text-bold-shadow">Billing & Subscription</NeuCardTitle>
                </NeuCardHeader>
                <NeuCardContent>
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-primary-700">Pro Plan</h3>
                        <p className="text-xs sm:text-sm text-primary-600">Your subscription renews on May 7, 2025</p>
                      </div>
                      <EnhancedBadge variant="success" size="lg">
                        Active
                      </EnhancedBadge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Plan Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-success-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Unlimited organizations</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-success-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Up to 20 vaults</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-success-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>1,500 compute credits per month</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs sm:text-sm">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-success-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Priority support</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Payment Information</h3>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                        <div className="p-2 bg-gray-100 rounded">
                          <CreditCard size={18} className="text-gray-700" />
                        </div>
                        <div>
                          <div className="font-medium text-xs sm:text-sm">Visa ending in 4242</div>
                          <div className="text-xs text-gray-500">Expires 12/2025</div>
                        </div>
                        <NeuButton variant="ghost" size="sm" className="ml-auto text-xs">
                          Update
                        </NeuButton>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Billing History</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 bg-gray-50 p-2 sm:p-3 border-b text-xs sm:text-sm font-medium text-gray-500">
                      <div>Date</div>
                      <div>Description</div>
                      <div>Amount</div>
                      <div>Status</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-4 p-2 sm:p-3 text-xs sm:text-sm">
                        <div>Apr 7</div>
                        <div>Pro Plan</div>
                        <div>$49.00</div>
                        <div>
                          <EnhancedBadge variant="success" size="sm">
                            Paid
                          </EnhancedBadge>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 p-2 sm:p-3 text-xs sm:text-sm">
                        <div>Mar 7</div>
                        <div>Pro Plan</div>
                        <div>$49.00</div>
                        <div>
                          <EnhancedBadge variant="success" size="sm">
                            Paid
                          </EnhancedBadge>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 p-2 sm:p-3 text-xs sm:text-sm">
                        <div>Feb 7</div>
                        <div>Pro Plan</div>
                        <div>$49.00</div>
                        <div>
                          <EnhancedBadge variant="success" size="sm">
                            Paid
                          </EnhancedBadge>
                        </div>
                      </div>
                    </div>
                  </div>
                </NeuCardContent>
              </NeuCard>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-4 sm:space-y-6">
              <NeuCard variant="elevated" hover={true}>
                <NeuCardHeader>
                  <NeuCardTitle className="text-bold-shadow">Organization Settings</NeuCardTitle>
                </NeuCardHeader>
                <NeuCardContent>
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">General Information</h3>
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Organization Name
                          </label>
                          <input
                            type="text"
                            className="neu-input w-full px-3 py-2 text-sm"
                            defaultValue={organizationName}
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Organization Type
                          </label>
                          <div className="neu-input w-full px-3 py-2 text-xs sm:text-sm text-gray-700">
                            {isGithubOrg ? "GitHub Organization" : "User-managed Organization"}
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Description</label>
                          <textarea
                            className="neu-input w-full px-3 py-2 h-20 sm:h-24 text-sm"
                            placeholder="Enter organization description..."
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4 sm:pt-6">
                      <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Security & Access</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-xs sm:text-sm">Private Organization</h4>
                            <p className="text-xs text-gray-500">
                              When enabled, only invited members can access this organization
                            </p>
                          </div>
                          <div className="flex items-center h-5">
                            <input
                              id="private-org"
                              type="checkbox"
                              className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                              defaultChecked
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-xs sm:text-sm">Two-Factor Authentication</h4>
                            <p className="text-xs text-gray-500">
                              Require all members to use two-factor authentication
                            </p>
                          </div>
                          <div className="flex items-center h-5">
                            <input
                              id="require-2fa"
                              type="checkbox"
                              className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4 sm:pt-6">
                      <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Danger Zone</h3>
                      <div className="bg-error-50 border border-error-200 rounded-lg p-3 sm:p-4">
                        <h4 className="font-medium text-error-700 text-xs sm:text-sm">Delete Organization</h4>
                        <p className="text-xs text-error-600 mt-1 mb-2 sm:mb-3">
                          Once you delete an organization, there is no going back. Please be certain.
                        </p>
                        <NeuButton variant="danger" size="sm" className="text-xs">
                          Delete Organization
                        </NeuButton>
                      </div>
                    </div>
                  </div>
                </NeuCardContent>
              </NeuCard>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
