"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { EnhancedCard, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/enhanced-card"
import { EnhancedIcon } from "@/components/ui/enhanced-icon"
import { CTAButton } from "@/components/ui/cta-button"
import { Button } from "@/components/ui/button"
import { EnhancedBadge } from "@/components/ui/enhanced-badge"
import { SimpleTooltip } from "@/components/simple-tooltip"
import {
  User,
  Mail,
  Shield,
  Bell,
  Key,
  Globe,
  Trash2,
  AlertTriangle,
  Edit,
  Camera,
  LogOut,
  ChevronRight,
  Home,
  ExternalLink,
  Save,
} from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data
  const user = {
    name: "Alex Savienko",
    email: "asavienko@gmail.com",
    username: "asavienko",
    avatar: "/placeholder.svg?height=200&width=200",
    role: "Admin",
    twoFactorEnabled: true,
    lastLogin: "April 7, 2025 at 10:23 AM",
    loginLocation: "New York, USA",
    memberSince: "January 15, 2023",
  }

  const tabs = [
    { id: "profile", label: "Profile", icon: <User size={16} /> },
    { id: "security", label: "Security", icon: <Shield size={16} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={16} /> },
    { id: "api", label: "API Keys", icon: <Key size={16} /> },
    { id: "preferences", label: "Preferences", icon: <Globe size={16} /> },
  ]

  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b shadow-sm">
          {/* Breadcrumb */}
          <div className="px-6 py-2 border-b border-gray-100 flex items-center text-sm text-gray-500">
            <Link href="/app" className="hover:text-gray-700 flex items-center">
              <Home size={14} className="mr-1" />
              Home
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-gray-900 font-medium">Account Settings</span>
          </div>

          <div className="px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
              <p className="text-sm text-gray-500 mt-1">Manage your account preferences and settings</p>
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
        <div className="p-6 max-w-5xl mx-auto">
          {activeTab === "profile" && (
            <div className="space-y-6">
              {/* Profile Overview Card */}
              <EnhancedCard hover="lift" className="overflow-visible">
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                    <CardTitle>Personal Information</CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 text-primary border-primary/30 hover:bg-primary/5"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? <Save size={14} /> : <Edit size={14} />}
                      {isEditing ? "Save Changes" : "Edit Profile"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Profile Image */}
                    <div className="flex flex-col items-center">
                      <div className="relative group">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                          <img
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {isEditing && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                            <div className="bg-white p-2 rounded-full">
                              <Camera size={18} className="text-primary" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-3 text-center">
                        <h3 className="font-medium text-lg">{user.name}</h3>
                        <div className="flex items-center justify-center gap-2 mt-1">
                          <EnhancedBadge variant="primary" size="sm">
                            {user.role}
                          </EnhancedBadge>
                          <EnhancedBadge variant="secondary" size="sm">
                            Member since {user.memberSince}
                          </EnhancedBadge>
                        </div>
                      </div>
                    </div>

                    {/* Profile Details */}
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          {isEditing ? (
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                              defaultValue={user.name}
                            />
                          ) : (
                            <div className="px-3 py-2 bg-gray-50 rounded-md text-gray-800">{user.name}</div>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <div className="flex items-center gap-2">
                            {isEditing ? (
                              <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                defaultValue={user.email}
                              />
                            ) : (
                              <div className="px-3 py-2 bg-gray-50 rounded-md text-gray-800 flex-1">{user.email}</div>
                            )}
                            {!isEditing && (
                              <SimpleTooltip text="Change your email address" position="top">
                                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                                  <Mail size={14} />
                                </Button>
                              </SimpleTooltip>
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                          {isEditing ? (
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                              defaultValue={user.username}
                            />
                          ) : (
                            <div className="px-3 py-2 bg-gray-50 rounded-md text-gray-800">{user.username}</div>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                          <div className="px-3 py-2 bg-gray-50 rounded-md text-gray-800">{user.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </EnhancedCard>

              {/* Account Activity */}
              <EnhancedCard hover="lift">
                <CardHeader>
                  <CardTitle>Account Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <EnhancedIcon icon={Globe} variant="secondary" size="sm" />
                      <div>
                        <h4 className="font-medium">Last Login</h4>
                        <p className="text-sm text-gray-600">
                          {user.lastLogin} from {user.loginLocation}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <EnhancedIcon icon={Shield} variant={user.twoFactorEnabled ? "success" : "warning"} size="sm" />
                      <div>
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-600">
                          {user.twoFactorEnabled
                            ? "Enabled - Your account is secured with 2FA"
                            : "Disabled - Enable 2FA for better security"}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto text-xs">
                        {user.twoFactorEnabled ? "Manage" : "Enable"}
                      </Button>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <EnhancedIcon icon={Key} variant="secondary" size="sm" />
                      <div>
                        <h4 className="font-medium">Connected Sessions</h4>
                        <p className="text-sm text-gray-600">You have 2 active sessions across devices</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto text-xs">
                        View All
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </EnhancedCard>

              {/* Danger Zone */}
              <EnhancedCard hover="lift" className="border-rose-100">
                <CardHeader className="border-b border-rose-100">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={18} className="text-rose-500" />
                    <CardTitle className="text-rose-700">Danger Zone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-rose-50 rounded-lg border border-rose-100">
                    <div>
                      <h3 className="font-medium text-rose-700">Delete Account</h3>
                      <p className="text-sm text-rose-600 mt-1">
                        No longer want to use our service? You can delete your account here. This action is not
                        reversible. All information related to this account will be deleted permanently.
                      </p>
                    </div>
                    <Button variant="destructive" size="sm" className="gap-1.5 whitespace-nowrap">
                      <Trash2 size={14} />
                      Delete Account
                    </Button>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                    <div>
                      <h3 className="font-medium text-amber-700">Log Out of All Sessions</h3>
                      <p className="text-sm text-amber-600 mt-1">
                        This will log you out from all devices except the current one. Useful if you suspect
                        unauthorized access.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 whitespace-nowrap border-amber-300 text-amber-700 hover:bg-amber-100"
                    >
                      <LogOut size={14} />
                      Log Out Everywhere
                    </Button>
                  </div>
                </CardContent>
              </EnhancedCard>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <EnhancedCard hover="lift">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Password Section */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Password</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            placeholder="••••••••••••"
                          />
                        </div>
                        <div></div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            placeholder="••••••••••••"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            placeholder="••••••••••••"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button className="bg-primary hover:bg-primary/90">Update Password</Button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                        <div className="flex items-start gap-3">
                          <EnhancedIcon icon={Shield} variant="primary" size="md" />
                          <div>
                            <h4 className="font-medium">Enhance Your Account Security</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Two-factor authentication adds an extra layer of security to your account. In addition to
                              your password, you'll need a code from your phone to log in.
                            </p>
                            <div className="mt-3">
                              <CTAButton variant="primary" size="default" icon={Shield}>
                                {user.twoFactorEnabled ? "Manage 2FA Settings" : "Enable Two-Factor Authentication"}
                              </CTAButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium mb-4">Active Sessions</h3>
                      <div className="space-y-3">
                        <div className="p-4 border rounded-lg bg-gray-50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <EnhancedIcon icon={Globe} variant="success" size="sm" />
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium">Current Session</h4>
                                  <EnhancedBadge variant="success" size="sm">
                                    Active
                                  </EnhancedBadge>
                                </div>
                                <p className="text-sm text-gray-600">Chrome on Windows • New York, USA</p>
                                <p className="text-xs text-gray-500 mt-1">Started April 7, 2025 at 10:23 AM</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="text-xs">
                              This Device
                            </Button>
                          </div>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <EnhancedIcon icon={Globe} variant="secondary" size="sm" />
                              <div>
                                <h4 className="font-medium">Mobile App</h4>
                                <p className="text-sm text-gray-600">iPhone • San Francisco, USA</p>
                                <p className="text-xs text-gray-500 mt-1">Last active 2 days ago</p>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs text-rose-600 border-rose-200 hover:bg-rose-50"
                            >
                              Revoke
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </EnhancedCard>
            </div>
          )}

          {activeTab === "notifications" && (
            <EnhancedCard hover="lift">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium">Security Alerts</h4>
                          <p className="text-sm text-gray-600">
                            Receive emails for suspicious login attempts and security updates
                          </p>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id="security-alerts"
                            type="checkbox"
                            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            defaultChecked
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium">Product Updates</h4>
                          <p className="text-sm text-gray-600">Receive emails about new features and improvements</p>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id="product-updates"
                            type="checkbox"
                            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            defaultChecked
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium">Organization Invitations</h4>
                          <p className="text-sm text-gray-600">Receive emails when you're invited to an organization</p>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id="org-invites"
                            type="checkbox"
                            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            defaultChecked
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium">Marketing Emails</h4>
                          <p className="text-sm text-gray-600">Receive emails about promotions and newsletters</p>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id="marketing"
                            type="checkbox"
                            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium mb-4">In-App Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium">Vault Updates</h4>
                          <p className="text-sm text-gray-600">
                            Receive notifications when changes are made to your vaults
                          </p>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id="vault-updates"
                            type="checkbox"
                            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            defaultChecked
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium">Comments and Mentions</h4>
                          <p className="text-sm text-gray-600">
                            Receive notifications when someone mentions you or comments
                          </p>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id="comments"
                            type="checkbox"
                            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end border-t bg-gray-50">
                <Button className="bg-primary hover:bg-primary/90">Save Preferences</Button>
              </CardFooter>
            </EnhancedCard>
          )}

          {activeTab === "api" && (
            <EnhancedCard hover="lift">
              <CardHeader>
                <div className="flex justify-between items-center w-full">
                  <CardTitle>API Keys</CardTitle>
                  <Button className="bg-primary hover:bg-primary/90 gap-1.5">
                    <Key size={14} />
                    Generate New Key
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h3 className="font-medium">Using API Keys</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      API keys allow you to authenticate requests to the Runtime Verification API. Keep your API keys
                      secure and never share them in public repositories or client-side code.
                    </p>
                    <div className="mt-3">
                      <a
                        href="/docs/api"
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                      >
                        View API Documentation
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Your API Keys</h3>
                    <div className="space-y-3">
                      <div className="p-4 border rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Production Key</h4>
                              <EnhancedBadge variant="success" size="sm">
                                Active
                              </EnhancedBadge>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                                rv_prod_••••••••••••••••
                              </div>
                              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-copy"
                                >
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                </svg>
                              </Button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Created on March 15, 2025 • Last used 2 days ago
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="text-xs">
                              Regenerate
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs text-rose-600 border-rose-200 hover:bg-rose-50"
                            >
                              Revoke
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Development Key</h4>
                              <EnhancedBadge variant="success" size="sm">
                                Active
                              </EnhancedBadge>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                                rv_dev_••••••••••••••••
                              </div>
                              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-copy"
                                >
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                </svg>
                              </Button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Created on April 2, 2025 • Last used today</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="text-xs">
                              Regenerate
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs text-rose-600 border-rose-200 hover:bg-rose-50"
                            >
                              Revoke
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium mb-4">API Usage</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h4 className="font-medium">Current Billing Period</h4>
                          <p className="text-sm text-gray-600">April 1 - April 30, 2025</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-white rounded-lg border">
                            <div className="text-2xl font-bold text-primary">1,250</div>
                            <div className="text-xs text-gray-500">API Calls</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg border">
                            <div className="text-2xl font-bold text-emerald-600">25%</div>
                            <div className="text-xs text-gray-500">of Quota Used</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </EnhancedCard>
          )}

          {activeTab === "preferences" && (
            <EnhancedCard hover="lift">
              <CardHeader>
                <CardTitle>User Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Interface Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium">Theme</h4>
                          <p className="text-sm text-gray-600">Choose your preferred color theme</p>
                        </div>
                        <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                          <option>Light</option>
                          <option>Dark</option>
                          <option>System</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium">Compact Mode</h4>
                          <p className="text-sm text-gray-600">Display more content with reduced spacing</p>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id="compact-mode"
                            type="checkbox"
                            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium">Animations</h4>
                          <p className="text-sm text-gray-600">Enable or disable UI animations</p>
                        </div>
                        <div className="flex items-center h-5">
                          <input
                            id="animations"
                            type="checkbox"
                            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium mb-4">Regional Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                          <option>English (US)</option>
                          <option>English (UK)</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                          <option>Japanese</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                          <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                          <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                          <option>(GMT+00:00) UTC</option>
                          <option>(GMT+01:00) Central European Time</option>
                          <option>(GMT+09:00) Japan Standard Time</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date Format</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                          <option>MM/DD/YYYY</option>
                          <option>DD/MM/YYYY</option>
                          <option>YYYY-MM-DD</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time Format</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                          <option>12-hour (AM/PM)</option>
                          <option>24-hour</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end border-t bg-gray-50">
                <Button className="bg-primary hover:bg-primary/90">Save Preferences</Button>
              </CardFooter>
            </EnhancedCard>
          )}
        </div>
      </main>
    </div>
  )
}
