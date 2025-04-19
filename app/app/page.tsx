"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { OrganizationList } from "@/components/organization-list"
import { useIsMobile } from "@/hooks/use-mobile"
import { NeuButton } from "@/components/ui/neu-button"
import { VaultCreationModal } from "@/components/vault-creation-modal"
import { Plus } from "lucide-react"

export default function AppPage() {
  const [showEmptyState, setShowEmptyState] = useState(false)
  const [isVaultModalOpen, setIsVaultModalOpen] = useState(false)
  const isMobile = useIsMobile()

  // Sample data with href properties
  const organizations = [
    { id: "1", name: "@test-yiyi", vaultCount: 3, userCount: 2, href: "/organization/test-yiyi" },
    { id: "2", name: "test-asavienko", vaultCount: 1, userCount: 1, href: "/organization/test-asavienko" },
    { id: "3", name: "runtimeverification", vaultCount: 16, userCount: 7, href: "/organization/runtimeverification" },
    { id: "4", name: "@test", vaultCount: 1, userCount: 1, href: "/organization/test" },
  ]

  return (
    <div className="flex h-full">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar onEmptyStateChange={setShowEmptyState} />
      </div>

      {/* Mobile navigation */}
      {isMobile && <MobileNavigation onEmptyStateChange={setShowEmptyState} />}

      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        {/* Add Create Vault button */}
        <div className="max-w-5xl mx-auto mb-6 flex justify-end">
          <NeuButton variant="primary" icon={Plus} onClick={() => setIsVaultModalOpen(true)}>
            Create Vault
          </NeuButton>
        </div>

        <OrganizationList organizations={showEmptyState ? [] : organizations} />
      </main>

      {/* Chat button - only show on desktop or adjust position on mobile */}
      <div className="fixed bottom-20 right-4 lg:bottom-4">
        <div className="bg-blue-600 text-white p-2 rounded-md shadow-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-square"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
      </div>

      {/* Vault Creation Modal */}
      <VaultCreationModal isOpen={isVaultModalOpen} onClose={() => setIsVaultModalOpen(false)} />
    </div>
  )
}
