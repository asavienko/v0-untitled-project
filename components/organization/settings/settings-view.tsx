"use client"

import { useState } from "react"
import { GeneralSettings } from "./general-settings"
import { SecuritySettings } from "./security-settings"
import { DangerZone } from "./danger-zone"

interface SettingsViewProps {
  organization: {
    name: string
    type: string
    description: string
    createdAt: string
  }
}

export function SettingsView({ organization }: SettingsViewProps) {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Organization Settings</h1>

      <div className="flex border-b">
        <button
          className={`px-4 py-2 ${activeTab === "general" ? "border-b-2 border-gray-800" : ""}`}
          onClick={() => setActiveTab("general")}
        >
          General
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "security" ? "border-b-2 border-gray-800" : ""}`}
          onClick={() => setActiveTab("security")}
        >
          Security
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "danger" ? "border-b-2 border-gray-800" : ""}`}
          onClick={() => setActiveTab("danger")}
        >
          Danger Zone
        </button>
      </div>

      <div>
        {activeTab === "general" && <GeneralSettings organization={organization} />}
        {activeTab === "security" && <SecuritySettings />}
        {activeTab === "danger" && <DangerZone />}
      </div>
    </div>
  )
}
