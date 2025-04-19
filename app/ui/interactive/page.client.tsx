"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SimpleTooltip } from "@/components/simple-tooltip"
import { TooltipDemo } from "@/components/tooltip-demo"
import {
  Info,
  AlertCircle,
  HelpCircle,
  X,
  ChevronDown,
  ChevronRight,
  PanelRight,
  Settings,
  Bell,
  User,
} from "lucide-react"

export function InteractiveComponentsClient() {
  return (
    <Tabs defaultValue="modals" className="w-full">
      <TabsList className="grid grid-cols-5 w-full max-w-4xl mb-8">
        <TabsTrigger value="modals">Modals</TabsTrigger>
        <TabsTrigger value="tooltips">Tooltips</TabsTrigger>
        <TabsTrigger value="popovers">Popovers</TabsTrigger>
        <TabsTrigger value="accordions">Accordions</TabsTrigger>
        <TabsTrigger value="drawers">Drawers</TabsTrigger>
      </TabsList>

      <TabsContent value="modals" className="space-y-8">
        <ModalSection />
      </TabsContent>

      <TabsContent value="tooltips" className="space-y-8">
        <TooltipSection />
      </TabsContent>

      <TabsContent value="popovers" className="space-y-8">
        <PopoverSection />
      </TabsContent>

      <TabsContent value="accordions" className="space-y-8">
        <AccordionSection />
      </TabsContent>

      <TabsContent value="drawers" className="space-y-8">
        <DrawerSection />
      </TabsContent>
    </Tabs>
  )
}

function ModalSection() {
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Modals & Dialogs</h2>
      <p className="text-gray-600 mb-6">
        Modals present content in a layer above the app, requiring user interaction before returning to the main
        content.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Modal</CardTitle>
            <CardDescription>Simple informational modal with a single action</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button onClick={() => setIsBasicModalOpen(true)}>Open Modal</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Confirmation Dialog</CardTitle>
            <CardDescription>Dialog that requires user confirmation</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button variant="secondary" onClick={() => setIsConfirmModalOpen(true)}>
              Open Dialog
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Form Modal</CardTitle>
            <CardDescription>Modal containing a form for user input</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button variant="outline" onClick={() => setIsFormModalOpen(true)}>
              Open Form
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Basic Modal */}
      {isBasicModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden animate-in zoom-in-95">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Information</h3>
              <button onClick={() => setIsBasicModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                This is a basic modal that provides information to the user. Modals should be used sparingly as they
                interrupt the user's workflow.
              </p>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-end">
              <Button onClick={() => setIsBasicModalOpen(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden animate-in zoom-in-95">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Confirm Action</h3>
              <button onClick={() => setIsConfirmModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Attention needed</h3>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>Are you sure you want to perform this action? This cannot be undone.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setIsConfirmModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => setIsConfirmModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden animate-in zoom-in-95">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Edit Profile</h3>
              <button onClick={() => setIsFormModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select
                    id="role"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  >
                    <option>User</option>
                    <option>Admin</option>
                    <option>Moderator</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setIsFormModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsFormModalOpen(false)}>Save Changes</Button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-50 p-6 rounded-lg mt-8">
        <h3 className="text-lg font-medium mb-3">Usage Guidelines</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Use modals sparingly as they interrupt the user's workflow</li>
          <li>Keep modal content concise and focused on a single task</li>
          <li>Always provide a clear way to dismiss the modal (close button, cancel button, clicking outside)</li>
          <li>Consider using non-modal alternatives for less critical interactions</li>
          <li>Ensure modals are accessible via keyboard navigation and screen readers</li>
        </ul>
      </div>
    </section>
  )
}

function TooltipSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Tooltips</h2>
      <p className="text-gray-600 mb-6">
        Tooltips provide additional context or information about an element when users hover over or focus on it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Tooltips</CardTitle>
            <CardDescription>Simple text tooltips in different positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              <SimpleTooltip text="Top tooltip" position="top">
                <Button variant="outline" size="sm">
                  Hover Me (Top)
                </Button>
              </SimpleTooltip>

              <SimpleTooltip text="Bottom tooltip with longer explanation" position="bottom">
                <Button variant="outline" size="sm">
                  Hover Me (Bottom)
                </Button>
              </SimpleTooltip>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Icon Tooltips</CardTitle>
            <CardDescription>Tooltips on icon buttons for additional context</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-4">
              <SimpleTooltip text="More information" position="top">
                <Button variant="ghost" size="icon">
                  <Info size={18} />
                  <span className="sr-only">Information</span>
                </Button>
              </SimpleTooltip>

              <SimpleTooltip text="Get help with this feature" position="top">
                <Button variant="ghost" size="icon">
                  <HelpCircle size={18} />
                  <span className="sr-only">Help</span>
                </Button>
              </SimpleTooltip>

              <SimpleTooltip text="Warning: This action has consequences" position="top">
                <Button variant="ghost" size="icon">
                  <AlertCircle size={18} />
                  <span className="sr-only">Warning</span>
                </Button>
              </SimpleTooltip>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Radix UI Tooltip</CardTitle>
          <CardDescription>Using Radix UI for more advanced tooltip functionality</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <TooltipDemo />
        </CardContent>
      </Card>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Usage Guidelines</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Use tooltips for supplementary information, not for essential content</li>
          <li>Keep tooltip content brief and to the point</li>
          <li>Ensure tooltips are accessible via keyboard navigation</li>
          <li>Position tooltips to avoid obscuring important content</li>
          <li>Use consistent tooltip styling throughout the application</li>
        </ul>
      </div>
    </section>
  )
}

function PopoverSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Popovers</h2>
      <p className="text-gray-600 mb-6">
        Popovers display additional content in a floating panel when triggered by a user action.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Popover</CardTitle>
            <CardDescription>Simple popover with text content</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="relative">
              <Button variant="outline" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-haspopup="true">
                Click for Popover
              </Button>

              {isOpen && (
                <div className="absolute z-10 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium text-gray-900">Popover Title</h3>
                      <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-500">
                        <X size={16} />
                        <span className="sr-only">Close</span>
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      This is a basic popover with some explanatory text. Popovers can contain various types of content.
                    </p>
                    <div className="mt-3">
                      <Button size="sm" onClick={() => setIsOpen(false)}>
                        Got it
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Popover</CardTitle>
            <CardDescription>Popover highlighting a feature with an image</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="relative inline-block text-left">
              <Button onClick={() => setIsOpen(!isOpen)}>Learn about this feature</Button>

              {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-72 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5">
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium text-gray-900">New Feature</h3>
                      <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-500">
                        <X size={16} />
                        <span className="sr-only">Close</span>
                      </button>
                    </div>
                    <div className="mt-2">
                      <div className="aspect-video bg-gray-100 rounded-md mb-2 flex items-center justify-center">
                        <img src="/abstract-geometric-harmony.png" alt="Feature illustration" className="rounded-md" />
                      </div>
                      <p className="text-sm text-gray-500">
                        This new feature helps you accomplish tasks more efficiently by streamlining the workflow.
                      </p>
                    </div>
                    <div className="mt-3 flex justify-between">
                      <button
                        className="text-sm text-primary-600 hover:text-primary-500"
                        onClick={() => setIsOpen(false)}
                      >
                        Learn more
                      </button>
                      <Button size="sm" onClick={() => setIsOpen(false)}>
                        Try it
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Usage Guidelines</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Use popovers for non-critical, supplementary information or actions</li>
          <li>Ensure popovers can be dismissed easily (clicking outside, escape key, close button)</li>
          <li>Position popovers to avoid obscuring important content</li>
          <li>Consider the trigger method carefully (click vs hover)</li>
          <li>Ensure popovers are accessible via keyboard navigation</li>
        </ul>
      </div>
    </section>
  )
}

function AccordionSection() {
  const [openItem, setOpenItem] = useState<string | null>("item-1")
  const [openItems, setOpenItems] = useState<string[]>(["multi-1"])

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  const toggleMultiItem = (id: string) => {
    setOpenItems(openItems.includes(id) ? openItems.filter((item) => item !== id) : [...openItems, id])
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Accordions & Disclosure Widgets</h2>
      <p className="text-gray-600 mb-6">
        Accordions and disclosure widgets allow users to show and hide content sections, helping to organize and
        declutter interfaces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Single Expand Accordion</CardTitle>
            <CardDescription>Only one section can be expanded at a time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md divide-y">
              {/* Item 1 */}
              <div className="border-b">
                <button
                  className="flex justify-between w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => toggleItem("item-1")}
                  aria-expanded={openItem === "item-1"}
                >
                  <span>What is Runtime Verification?</span>
                  {openItem === "item-1" ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openItem === "item-1" && (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    <p>
                      Runtime Verification is a technique that monitors the execution of a system to detect and report
                      violations of specified properties.
                    </p>
                  </div>
                )}
              </div>

              {/* Item 2 */}
              <div className="border-b">
                <button
                  className="flex justify-between w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => toggleItem("item-2")}
                  aria-expanded={openItem === "item-2"}
                >
                  <span>How does it differ from testing?</span>
                  {openItem === "item-2" ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openItem === "item-2" && (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    <p>
                      Unlike testing, which examines a system before deployment, runtime verification monitors the
                      system during execution in its actual environment, detecting issues that might not appear during
                      testing.
                    </p>
                  </div>
                )}
              </div>

              {/* Item 3 */}
              <div>
                <button
                  className="flex justify-between w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => toggleItem("item-3")}
                  aria-expanded={openItem === "item-3"}
                >
                  <span>What are the benefits?</span>
                  {openItem === "item-3" ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openItem === "item-3" && (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    <p>
                      Runtime verification provides early detection of errors, improved reliability, and can help
                      identify issues in complex systems that are difficult to test comprehensively before deployment.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Multi Expand Accordion</CardTitle>
            <CardDescription>Multiple sections can be expanded simultaneously</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md divide-y">
              {/* Item 1 */}
              <div className="border-b">
                <button
                  className="flex justify-between w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => toggleMultiItem("multi-1")}
                  aria-expanded={openItems.includes("multi-1")}
                >
                  <span>Getting Started</span>
                  {openItems.includes("multi-1") ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openItems.includes("multi-1") && (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    <p>
                      To get started with our platform, create an account and follow the onboarding process. You'll be
                      guided through setting up your first project.
                    </p>
                  </div>
                )}
              </div>

              {/* Item 2 */}
              <div className="border-b">
                <button
                  className="flex justify-between w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => toggleMultiItem("multi-2")}
                  aria-expanded={openItems.includes("multi-2")}
                >
                  <span>Configuration Options</span>
                  {openItems.includes("multi-2") ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openItems.includes("multi-2") && (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    <p>
                      Our platform offers various configuration options to customize the verification process according
                      to your specific needs and requirements.
                    </p>
                  </div>
                )}
              </div>

              {/* Item 3 */}
              <div>
                <button
                  className="flex justify-between w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => toggleMultiItem("multi-3")}
                  aria-expanded={openItems.includes("multi-3")}
                >
                  <span>Advanced Features</span>
                  {openItems.includes("multi-3") ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openItems.includes("multi-3") && (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    <p>
                      Once you're familiar with the basic functionality, explore our advanced features like custom rule
                      sets, integration with CI/CD pipelines, and detailed analytics.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Disclosure Widget</CardTitle>
          <CardDescription>Simple show/hide content mechanism</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md p-4">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">Project Settings</h3>
              <p className="text-sm text-gray-500">Configure your project settings and preferences.</p>
            </div>

            <div className="space-y-4">
              <div>
                <button
                  className="flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
                  onClick={() => toggleItem("disclosure-1")}
                  aria-expanded={openItem === "disclosure-1"}
                >
                  {openItem === "disclosure-1" ? (
                    <ChevronDown className="h-4 w-4 mr-1" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-1" />
                  )}
                  <span>Show Advanced Settings</span>
                </button>

                {openItem === "disclosure-1" && (
                  <div className="mt-2 pl-5 pr-0 border-l-2 border-gray-200">
                    <div className="space-y-3 text-sm">
                      <div>
                        <label className="block text-gray-700">Cache Duration</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                          <option>1 hour</option>
                          <option>6 hours</option>
                          <option>24 hours</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700">Debug Mode</label>
                        <div className="mt-1">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          />
                          <span className="ml-2">Enable debug logging</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  className="flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
                  onClick={() => toggleItem("disclosure-2")}
                  aria-expanded={openItem === "disclosure-2"}
                >
                  {openItem === "disclosure-2" ? (
                    <ChevronDown className="h-4 w-4 mr-1" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-1" />
                  )}
                  <span>Show API Configuration</span>
                </button>

                {openItem === "disclosure-2" && (
                  <div className="mt-2 pl-5 pr-0 border-l-2 border-gray-200">
                    <div className="space-y-3 text-sm">
                      <div>
                        <label className="block text-gray-700">API Key</label>
                        <input
                          type="password"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                          placeholder="Enter API key"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">Endpoint URL</label>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                          placeholder="https://api.example.com/v1"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Usage Guidelines</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Use accordions to organize related content into manageable sections</li>
          <li>Consider whether single or multi-expand is more appropriate for your content</li>
          <li>Provide clear, descriptive headers for each section</li>
          <li>Ensure accordions are accessible via keyboard navigation</li>
          <li>Use disclosure widgets for progressive disclosure of advanced options</li>
        </ul>
      </div>
    </section>
  )
}

function DrawerSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerPosition, setDrawerPosition] = useState<"right" | "left" | "bottom">("right")

  const openDrawer = (position: "right" | "left" | "bottom") => {
    setDrawerPosition(position)
    setIsDrawerOpen(true)
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Drawers & Side Panels</h2>
      <p className="text-gray-600 mb-6">
        Drawers slide in from the edge of the screen to reveal additional content or controls without navigating away
        from the current view.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Right Drawer</CardTitle>
            <CardDescription>Slides in from the right side</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button variant="outline" onClick={() => openDrawer("right")} className="flex items-center gap-2">
              <span>Open Right Drawer</span>
              <PanelRight size={16} />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Left Drawer</CardTitle>
            <CardDescription>Slides in from the left side</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button variant="outline" onClick={() => openDrawer("left")} className="flex items-center gap-2">
              <PanelRight size={16} className="rotate-180" />
              <span>Open Left Drawer</span>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bottom Drawer</CardTitle>
            <CardDescription>Slides up from the bottom</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button variant="outline" onClick={() => openDrawer("bottom")} className="flex items-center gap-2">
              <span>Open Bottom Drawer</span>
              <ChevronDown size={16} />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Drawer Implementation */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsDrawerOpen(false)}></div>

          {/* Drawer */}
          <div
            className={`
              fixed z-50 bg-white shadow-xl transition-transform duration-300 ease-in-out
              ${drawerPosition === "right" ? "top-0 right-0 bottom-0 w-80 translate-x-0" : ""}
              ${drawerPosition === "left" ? "top-0 left-0 bottom-0 w-80 translate-x-0" : ""}
              ${drawerPosition === "bottom" ? "left-0 right-0 bottom-0 h-96 translate-y-0 rounded-t-xl" : ""}
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-medium">
                {drawerPosition === "right" && "Right Drawer"}
                {drawerPosition === "left" && "Left Drawer"}
                {drawerPosition === "bottom" && "Bottom Drawer"}
              </h3>
              <button onClick={() => setIsDrawerOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
                <span className="sr-only">Close</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {drawerPosition === "right" && (
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-gray-900">Settings</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Settings size={18} className="text-gray-500" />
                        <span>Notifications</span>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell size={18} className="text-gray-500" />
                        <span>Sound Alerts</span>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User size={18} className="text-gray-500" />
                        <span>Profile Visibility</span>
                      </div>
                      <select className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                        <option>Public</option>
                        <option>Private</option>
                        <option>Friends Only</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {drawerPosition === "left" && (
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-gray-900">Navigation</h4>
                  <nav className="space-y-1">
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary-50 text-primary-700"
                    >
                      <svg
                        className="mr-3 h-6 w-6 text-primary-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <svg className="mr-3 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Team
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <svg className="mr-3 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                      Projects
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <svg className="mr-3 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Calendar
                    </a>
                  </nav>
                </div>
              )}

              {drawerPosition === "bottom" && (
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-gray-900">Quick Actions</h4>
                  <div className="grid grid-cols-4 gap-4">
                    <button className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <span className="mt-2 text-xs text-gray-500">New</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="mt-2 text-xs text-gray-500">Copy</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                        />
                      </svg>
                      <span className="mt-2 text-xs text-gray-500">Save</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      <span className="mt-2 text-xs text-gray-500">Delete</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
              <Button onClick={() => setIsDrawerOpen(false)} className="w-full">
                Close
              </Button>
            </div>
          </div>
        </>
      )}

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Usage Guidelines</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Use drawers for secondary content that doesn't need to be visible at all times</li>
          <li>Consider the appropriate position based on the content and user expectations</li>
          <li>Ensure drawers can be easily dismissed (close button, clicking outside)</li>
          <li>Provide clear visual cues for how to open and close the drawer</li>
          <li>Consider the impact on mobile devices and ensure responsive behavior</li>
        </ul>
      </div>
    </section>
  )
}
