"use client"

export function OrgTabs({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "vaults", label: "Vaults" },
    { id: "members", label: "Members" },
    { id: "activity", label: "Activity" },
    { id: "settings", label: "Settings" },
  ]

  return (
    <div className="border-b flex overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 ${activeTab === tab.id ? "border-b-2" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
