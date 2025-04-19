"use client"

import { useState } from "react"
import { Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VaultCreationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VaultCreationModal({ isOpen, onClose }: VaultCreationModalProps) {
  const [step, setStep] = useState<"choose" | "github" | "public" | "manual">("choose")
  const [repoUrl, setRepoUrl] = useState("")
  const [vaultName, setVaultName] = useState("")
  const [repositories, setRepositories] = useState<Array<{ id: string; name: string; fullName: string }>>([])
  const [selectedRepo, setSelectedRepo] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const fetchRepositories = () => {
    setIsLoading(true)
    // In a real app, this would be an API call to fetch repositories from the GitHub app
    // For now, we'll simulate it with a timeout and mock data
    setTimeout(() => {
      setRepositories([
        { id: "1", name: "repo-1", fullName: "organization/repo-1" },
        { id: "2", name: "repo-2", fullName: "organization/repo-2" },
        { id: "3", name: "repo-3", fullName: "organization/repo-3" },
        { id: "4", name: "repo-4", fullName: "organization/repo-4" },
      ])
      setIsLoading(false)
      setStep("github")
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 sm:p-0">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative w-full max-w-lg transform rounded-xl bg-white shadow-2xl transition-all">
        {/* Close button */}
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <X size={20} />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-0">
          <h2 className="text-2xl font-bold text-gray-900" id="modal-title">
            {step === "choose"
              ? "Create a New Vault"
              : step === "github"
                ? "Connect GitHub Repository"
                : step === "public"
                  ? "Connect Public Repository"
                  : "Create Manual Vault"}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {step === "choose"
              ? "Choose how you want to create your vault"
              : step === "github"
                ? "Connect to a GitHub repository"
                : step === "public"
                  ? "Connect to any public GitHub repository"
                  : "Create a vault manually"}
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          {step === "choose" && (
            <div className="space-y-4">
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800 mb-1">Which option should I choose?</h3>
                <p className="text-xs text-blue-700">
                  Choose the first option if you've installed the GitHub App and want to select from your available
                  repositories. Choose the second option if you want to connect to any public GitHub repository that you
                  don't own.
                </p>
              </div>

              <button
                className="w-full rounded-lg border-2 border-gray-200 p-4 text-left hover:border-primary/50 hover:shadow-md transition-all"
                onClick={fetchRepositories}
              >
                <div className="flex items-center gap-3 mb-2 justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-black text-white shadow-md">
                      <Github size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Connect GitHub Repository</h3>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        GitHub App Integration
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Private Repos
                    </div>
                    <div className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Public Repos
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  Select from repositories available through your GitHub App integration.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Best for:</strong> Your own repositories or organizations where you've installed the GitHub
                  App.
                </p>
              </button>

              <button
                className="w-full rounded-lg border-2 border-gray-200 p-4 text-left hover:border-primary/50 hover:shadow-md transition-all"
                onClick={() => setStep("public")}
              >
                <div className="flex items-center gap-3 mb-2 justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-md">
                      <div className="relative">
                        <Github size={20} />
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Connect Public Repository</h3>
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        Manual URL Entry
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Public Repos
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  Connect to any public GitHub repository by entering its URL.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Best for:</strong> Public repositories that you don't own or aren't part of your GitHub App
                  integration.
                </p>
              </button>
            </div>
          )}

          {step === "github" && (
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <p className="mt-2 text-sm text-gray-600">Loading repositories...</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative flex-grow">
                      <input
                        type="text"
                        placeholder="Search repositories..."
                        className="w-full px-3 py-2 pl-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="flex items-center gap-1"
                      onClick={fetchRepositories}
                      disabled={isLoading}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={isLoading ? "animate-spin" : ""}
                      >
                        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path>
                      </svg>
                      <span>Refresh</span>
                    </Button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select a GitHub Repository</label>
                    <div className="max-h-60 overflow-y-auto border border-gray-300 rounded-md">
                      {repositories.length > 0 ? (
                        <div className="divide-y divide-gray-200">
                          {repositories
                            .filter(
                              (repo) =>
                                repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                repo.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
                            )
                            .map((repo) => (
                              <div
                                key={repo.id}
                                className={`p-3 cursor-pointer hover:bg-gray-50 ${selectedRepo === repo.id ? "bg-primary-50 border-l-4 border-primary" : ""}`}
                                onClick={() => setSelectedRepo(repo.id)}
                              >
                                <div className="flex items-center">
                                  <Github size={16} className="text-gray-500 mr-2" />
                                  <div>
                                    <p className="font-medium text-sm">{repo.name}</p>
                                    <p className="text-xs text-gray-500">{repo.fullName}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <div className="p-4 text-center text-sm text-gray-500">
                          No repositories found. Make sure you've installed the GitHub app and have access to
                          repositories.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={() => setStep("choose")}>
                      Back
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90" disabled={!selectedRepo} onClick={onClose}>
                      Create Vault
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}

          {step === "public" && (
            <div className="space-y-4">
              <div>
                <label htmlFor="repoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Public GitHub Repository URL
                </label>
                <input
                  type="text"
                  id="repoUrl"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="https://github.com/username/repository"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Enter the full URL of any public GitHub repository you want to connect.
                </p>
              </div>

              <div>
                <label htmlFor="publicVaultName" className="block text-sm font-medium text-gray-700 mb-1">
                  Vault Name
                </label>
                <input
                  type="text"
                  id="publicVaultName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="My Vault"
                  value={vaultName}
                  onChange={(e) => setVaultName(e.target.value)}
                />
                <p className="mt-1 text-xs text-gray-500">Enter a name for your new vault.</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Repository examples:</h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <code className="rounded bg-gray-100 px-2 py-1">https://github.com/organization/repository</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <code className="rounded bg-gray-100 px-2 py-1">https://github.com/username/project</code>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep("choose")}>
                  Back
                </Button>
                <Button className="bg-primary hover:bg-primary/90" disabled={!repoUrl || !vaultName} onClick={onClose}>
                  Create Vault
                </Button>
              </div>
            </div>
          )}

          {step === "manual" && (
            <div className="space-y-4">
              <div>
                <label htmlFor="vaultName" className="block text-sm font-medium text-gray-700 mb-1">
                  Vault Name
                </label>
                <input
                  type="text"
                  id="vaultName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="My Vault"
                  value={vaultName}
                  onChange={(e) => setVaultName(e.target.value)}
                />
                <p className="mt-1 text-xs text-gray-500">Enter a name for your new vault.</p>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep("choose")}>
                  Back
                </Button>
                <Button className="bg-primary hover:bg-primary/90" disabled={!vaultName} onClick={onClose}>
                  Create Vault
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
