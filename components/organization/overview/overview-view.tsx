"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Database,
  Activity,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MembersPanel } from "../wireframe/members-panel"
import { ReportsHighlight } from "./reports-highlight"

interface OverviewViewProps {
  organization?: {
    name: string
    type: string
    description: string
    createdAt: string
    members?: number
    vaults?: number
    isVerified?: boolean
  }
  onNavigate?: (section: string, reportId?: string) => void
}

export function OverviewView({ organization, onNavigate }: OverviewViewProps) {
  const [activeTab, setActiveTab] = useState("metrics")

  // Check if this is test-yiyi
  const isTestYiyi = organization?.name === "@test-yiyi"

  // Handle navigation to reports section
  const handleViewAllReports = () => {
    if (onNavigate) {
      onNavigate("reports")
    }
  }

  // Handle navigation to a specific report
  const handleViewReport = (reportId: string) => {
    if (onNavigate) {
      onNavigate("reports", reportId)
    }
  }

  // Mock metrics data
  const metrics = [
    {
      title: "Total Vaults",
      value: organization?.vaults || 24,
      change: isTestYiyi ? 12.5 : 8.2,
      icon: Database,
      trend: "up",
    },
    {
      title: "Team Members",
      value: organization?.members || 12,
      change: isTestYiyi ? 20 : 4.5,
      icon: Users,
      trend: "up",
    },
    {
      title: "Activity",
      value: isTestYiyi ? "156" : "342",
      change: isTestYiyi ? -5.2 : 12.3,
      icon: Activity,
      trend: isTestYiyi ? "down" : "up",
    },
    {
      title: "Uptime",
      value: "99.9%",
      change: 0.1,
      icon: Clock,
      trend: "up",
    },
  ]

  // Mock activity data
  const activities = [
    {
      id: "1",
      user: "YiYi",
      action: "created a new vault",
      target: "Project Alpha",
      time: "10 minutes ago",
      avatar: "/abstract-letter-y.png",
    },
    {
      id: "2",
      user: "Alex",
      action: "updated security settings",
      target: "",
      time: "2 hours ago",
      avatar: "/letter-a-abstract.png",
    },
    {
      id: "3",
      user: "System",
      action: "performed automatic backup",
      target: "All vaults",
      time: "Yesterday at 2:30 PM",
      avatar: "/abstract-s-design.png",
    },
    {
      id: "4",
      user: "YiYi",
      action: "invited",
      target: "john@example.com",
      time: "2 days ago",
      avatar: "/abstract-letter-y.png",
    },
    {
      id: "5",
      user: "System",
      action: "detected security vulnerability",
      target: "CVE-2023-1234",
      time: "3 days ago",
      avatar: "/abstract-s-design.png",
    },
  ]

  // Mock system status
  const systemStatus = [
    {
      service: "API",
      status: "operational",
      uptime: "99.99%",
      icon: CheckCircle2,
      color: "text-green-500",
    },
    {
      service: "Authentication",
      status: "operational",
      uptime: "99.95%",
      icon: CheckCircle2,
      color: "text-green-500",
    },
    {
      service: "Storage",
      status: "degraded",
      uptime: "98.72%",
      icon: AlertCircle,
      color: "text-yellow-500",
    },
    {
      service: "Compute",
      status: "operational",
      uptime: "99.87%",
      icon: CheckCircle2,
      color: "text-green-500",
    },
    {
      service: "Database",
      status: "operational",
      uptime: "99.91%",
      icon: CheckCircle2,
      color: "text-green-500",
    },
  ]

  // Mock recent vaults
  const recentVaults = [
    {
      id: "1",
      name: "Project Alpha",
      description: "Main development vault",
      updatedAt: "10 minutes ago",
      status: "active",
    },
    {
      id: "2",
      name: "CI/CD Pipeline",
      description: "Continuous integration vault",
      updatedAt: "2 hours ago",
      status: "active",
    },
    {
      id: "3",
      name: "Legacy System",
      description: "Maintenance vault for legacy code",
      updatedAt: "Yesterday",
      status: "inactive",
    },
  ]

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Organization Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {organization?.name}
            {organization?.isVerified && (
              <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                Verified
              </Badge>
            )}
          </h1>
          <p className="text-muted-foreground">{organization?.description}</p>
          <p className="text-sm text-muted-foreground mt-1">Created on {organization?.createdAt}</p>
        </div>
      </div>

      {/* Tabs for different overview sections */}
      <Tabs defaultValue="metrics" value={activeTab} className="w-full" onValueChange={setActiveTab}>
        {/* Desktop tabs (hidden on mobile) */}
        <div className="hidden md:block border-b mb-6">
          <TabsList className="bg-transparent p-0 h-auto flex w-full justify-start">
            <TabsTrigger
              value="metrics"
              className="flex items-center gap-1.5 px-4 py-2 h-10 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-foreground"
            >
              <Database className="h-4 w-4" />
              <span>Metrics</span>
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="flex items-center gap-1.5 px-4 py-2 h-10 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-foreground"
            >
              <Activity className="h-4 w-4" />
              <span>Recent Activity</span>
            </TabsTrigger>
            <TabsTrigger
              value="status"
              className="flex items-center gap-1.5 px-4 py-2 h-10 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-foreground"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>System Status</span>
            </TabsTrigger>
            <TabsTrigger
              value="team"
              className="flex items-center gap-1.5 px-4 py-2 h-10 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-foreground"
            >
              <Users className="h-4 w-4" />
              <span>Team</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Mobile tabs (visible only on mobile) */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {activeTab === "metrics" && <Database className="h-5 w-5 mr-2 text-primary" />}
              {activeTab === "activity" && <Activity className="h-5 w-5 mr-2 text-primary" />}
              {activeTab === "status" && <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />}
              {activeTab === "team" && <Users className="h-5 w-5 mr-2 text-primary" />}
              <h2 className="text-lg font-semibold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            </div>
            <select
              value={activeTab}
              onChange={(e) => {
                setActiveTab(e.target.value)
                // Force TabsContent to update by explicitly setting the value
                const tabsElement = document.querySelector('[role="tablist"]')
                if (tabsElement) {
                  const tabButton = tabsElement.querySelector(`[data-state="inactive"][data-value="${e.target.value}"]`)
                  if (tabButton) {
                    ;(tabButton as HTMLButtonElement).click()
                  }
                }
              }}
              className="bg-transparent border rounded-md px-2 py-1 text-sm"
            >
              <option value="metrics">Metrics</option>
              <option value="activity">Recent Activity</option>
              <option value="status">System Status</option>
              <option value="team">Team</option>
            </select>
          </div>

          {/* Visual indicator for active tab */}
          <div className="grid grid-cols-4 gap-1 mb-6">
            <div
              className={`h-1 rounded-full transition-colors duration-300 ${activeTab === "metrics" ? "bg-primary" : "bg-gray-200"}`}
            ></div>
            <div
              className={`h-1 rounded-full transition-colors duration-300 ${activeTab === "activity" ? "bg-primary" : "bg-gray-200"}`}
            ></div>
            <div
              className={`h-1 rounded-full transition-colors duration-300 ${activeTab === "status" ? "bg-primary" : "bg-gray-200"}`}
            ></div>
            <div
              className={`h-1 rounded-full transition-colors duration-300 ${activeTab === "team" ? "bg-primary" : "bg-gray-200"}`}
            ></div>
          </div>
        </div>

        {/* Metrics Tab */}
        <TabsContent value="metrics" className="space-y-4 animate-in fade-in-50 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <metric.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div
                    className={`flex items-center text-xs mt-1 ${
                      metric.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {metric.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(metric.change)}% from last month
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Recent Vaults */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Recent Vaults</CardTitle>
                <CardDescription>Your recently updated vaults</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentVaults.map((vault) => (
                    <div
                      key={vault.id}
                      className="flex items-start justify-between border-b pb-3 last:border-0 last:pb-0"
                    >
                      <div>
                        <h3 className="font-medium">{vault.name}</h3>
                        <p className="text-sm text-muted-foreground">{vault.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">Updated {vault.updatedAt}</p>
                      </div>
                      <Badge variant={vault.status === "active" ? "default" : "secondary"}>{vault.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="ml-auto">
                  View All Vaults <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" /> Create New Vault
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" /> Invite Team Member
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="h-4 w-4 mr-2" /> View Audit Logs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="h-4 w-4 mr-2" /> Manage Vaults
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Reports Highlight Section */}
          <ReportsHighlight onViewAllReports={handleViewAllReports} onViewReport={handleViewReport} />
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="animate-in fade-in-50 duration-300">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions in your organization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 border-b pb-3 last:border-0 last:pb-0">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <img
                        src={activity.avatar || "/placeholder.svg"}
                        alt={activity.user}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                        {activity.target && <span className="font-medium"> {activity.target}</span>}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="ml-auto">
                View All Activity <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* System Status Tab */}
        <TabsContent value="status" className="animate-in fade-in-50 duration-300">
          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Current status of all services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemStatus.map((service, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <service.icon className={`h-5 w-5 ${service.color}`} />
                      <div>
                        <h3 className="font-medium">{service.service}</h3>
                        <p className="text-xs text-muted-foreground">Uptime: {service.uptime}</p>
                      </div>
                    </div>
                    <Badge
                      variant={service.status === "operational" ? "outline" : "secondary"}
                      className={service.color}
                    >
                      {service.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="animate-in fade-in-50 duration-300">
          <MembersPanel />
        </TabsContent>
      </Tabs>
    </div>
  )
}
