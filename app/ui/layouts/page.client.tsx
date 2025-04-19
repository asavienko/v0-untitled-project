"use client"

import {
  Layout,
  Columns,
  Rows,
  LayoutGrid,
  PanelLeft,
  PanelLeftClose,
  Menu,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  LayoutDashboard,
  LayoutList,
  Maximize,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

export default function LayoutsPageClient() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Layouts</h1>
        <p className="text-muted-foreground text-lg">
          Explore different page layouts, grid systems, and responsive patterns for building consistent interfaces.
        </p>
      </div>

      <Tabs defaultValue="basic" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="basic">Basic Layouts</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Layouts</TabsTrigger>
          <TabsTrigger value="navigation">Navigation Patterns</TabsTrigger>
          <TabsTrigger value="responsive">Responsive Techniques</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Columns className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Column Layouts</h2>
              </div>
              <p className="text-muted-foreground mb-4">Multi-column layouts for organizing content side by side.</p>
              <div className="grid grid-cols-2 gap-4 h-40">
                <div className="bg-primary/10 rounded p-4 flex items-center justify-center">
                  <span className="text-sm font-medium">Column 1</span>
                </div>
                <div className="bg-primary/10 rounded p-4 flex items-center justify-center">
                  <span className="text-sm font-medium">Column 2</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Rows className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Row Layouts</h2>
              </div>
              <p className="text-muted-foreground mb-4">Stacked row layouts for sequential content presentation.</p>
              <div className="space-y-4 h-40">
                <div className="bg-primary/10 rounded p-4 flex items-center justify-center">
                  <span className="text-sm font-medium">Row 1</span>
                </div>
                <div className="bg-primary/10 rounded p-4 flex items-center justify-center">
                  <span className="text-sm font-medium">Row 2</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <LayoutGrid className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Grid Layouts</h2>
              </div>
              <p className="text-muted-foreground mb-4">Flexible grid systems for complex content organization.</p>
              <div className="grid grid-cols-3 gap-2 h-40">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="bg-primary/10 rounded flex items-center justify-center">
                    <span className="text-xs font-medium">{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <PanelLeft className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Sidebar Layouts</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Layouts with sidebars for navigation and contextual information.
              </p>
              <div className="flex gap-2 h-40">
                <div className="w-1/4 bg-primary/10 rounded p-2 flex items-center justify-center">
                  <span className="text-xs font-medium">Sidebar</span>
                </div>
                <div className="flex-1 bg-primary/5 rounded p-2 flex items-center justify-center">
                  <span className="text-xs font-medium">Main Content</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="advanced">
          <div className="space-y-8">
            <div className="border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <PanelLeftClose className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Collapsible Sidebar</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                A sidebar that can be collapsed to provide more space for the main content.
              </p>

              <CollapsibleSidebarDemo />
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <LayoutDashboard className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Dashboard Layout</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                A flexible dashboard layout with resizable panels and drag-and-drop capabilities.
              </p>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted p-3 border-b flex items-center justify-between">
                  <div className="font-medium">Dashboard</div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <LayoutGrid className="h-4 w-4 mr-2" />
                      Customize
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="border rounded-lg p-4 bg-card h-32 flex flex-col">
                        <div className="text-sm font-medium mb-2">Panel {i + 1}</div>
                        <div className="flex-1 flex items-center justify-center bg-muted/50 rounded">
                          <span className="text-xs text-muted-foreground">Drag to resize</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Maximize className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Expandable Panels</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Panels that can be expanded to show more content or collapsed to save space.
              </p>

              <ExpandablePanelsDemo />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="navigation">
          <div className="space-y-8">
            <div className="border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Menu className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Navigation Patterns</h2>
              </div>
              <p className="text-muted-foreground mb-4">Different navigation patterns for web applications.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted p-3 border-b font-medium">Top Navigation</div>
                  <div className="p-4">
                    <div className="border-b pb-3 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-8 w-8 bg-primary/20 rounded-md"></div>
                        <div className="flex gap-4">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div
                              key={i}
                              className={`text-sm ${i === 0 ? "font-medium text-primary" : "text-muted-foreground"}`}
                            >
                              Nav Item {i + 1}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-muted rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-40 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Content Area</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted p-3 border-b font-medium">Side Navigation</div>
                  <div className="p-4">
                    <div className="flex h-40">
                      <div className="w-1/4 border-r pr-3">
                        <div className="mb-4 flex items-center gap-2">
                          <div className="h-6 w-6 bg-primary/20 rounded-md"></div>
                          <div className="text-sm font-medium">App Name</div>
                        </div>
                        <div className="space-y-2">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <div
                              key={i}
                              className={`text-sm p-2 rounded ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}
                            >
                              Nav Item {i + 1}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 pl-4 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Content Area</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted p-3 border-b font-medium">Bottom Navigation (Mobile)</div>
                  <div className="p-4">
                    <div className="flex flex-col h-40">
                      <div className="flex-1 flex items-center justify-center border-b mb-3">
                        <span className="text-sm text-muted-foreground">Content Area</span>
                      </div>
                      <div className="flex items-center justify-around py-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div className="h-6 w-6 bg-primary/20 rounded-md mb-1"></div>
                            <div className={`text-xs ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                              Tab {i + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted p-3 border-b font-medium">Breadcrumb Navigation</div>
                  <div className="p-4">
                    <div className="flex flex-col h-40">
                      <div className="flex items-center gap-2 text-sm mb-4">
                        <span className="text-muted-foreground">Home</span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">Section</span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                        <span className="font-medium">Current Page</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center border rounded">
                        <span className="text-sm text-muted-foreground">Content Area</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <LayoutList className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Multi-level Navigation</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Navigation patterns for complex applications with multiple levels of hierarchy.
              </p>

              <MultiLevelNavigationDemo />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="responsive">
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-md">
                <Layout className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">Responsive Patterns</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Patterns for creating layouts that adapt to different screen sizes.
            </p>
            <div className="space-y-6">
              <div className="p-4 border rounded">
                <h3 className="font-medium mb-2">Stack to Grid</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Elements stack vertically on mobile and form a grid on larger screens.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="bg-primary/10 h-20 rounded flex items-center justify-center">
                      <span className="text-sm">Item {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border rounded">
                <h3 className="font-medium mb-2">Sidebar Collapse</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Sidebar collapses to a menu button on mobile screens.
                </p>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="md:w-1/4 bg-primary/10 h-20 rounded flex items-center justify-center">
                    <span className="text-sm">Sidebar</span>
                  </div>
                  <div className="flex-1 bg-primary/5 h-20 rounded flex items-center justify-center">
                    <span className="text-sm">Content</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded">
                <h3 className="font-medium mb-2">Column Reordering</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Change the order of columns based on screen size for optimal content hierarchy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="bg-primary/10 h-20 rounded flex items-center justify-center order-2 md:order-1">
                    <span className="text-sm">First on desktop</span>
                  </div>
                  <div className="bg-primary/20 h-20 rounded flex items-center justify-center order-1 md:order-2">
                    <span className="text-sm">First on mobile</span>
                  </div>
                  <div className="bg-primary/10 h-20 rounded flex items-center justify-center order-3">
                    <span className="text-sm">Third on both</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded">
                <h3 className="font-medium mb-2">Content Priority</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Show/hide content based on screen size to prioritize important information.
                </p>
                <div className="border rounded p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Dashboard Overview</h4>
                    <div className="hidden md:flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Export
                      </Button>
                      <Button variant="outline" size="sm">
                        Share
                      </Button>
                      <Button size="sm">Create New</Button>
                    </div>
                    <Button variant="outline" size="icon" className="md:hidden">
                      <Menu className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="bg-primary/10 h-16 rounded flex items-center justify-center">
                      <span className="text-sm">Primary Content</span>
                    </div>
                    <div className="bg-primary/10 h-16 rounded hidden md:flex items-center justify-center">
                      <span className="text-sm">Secondary (Desktop Only)</span>
                    </div>
                    <div className="bg-primary/10 h-16 rounded hidden md:flex items-center justify-center">
                      <span className="text-sm">Tertiary (Desktop Only)</span>
                    </div>
                  </div>
                  <div className="mt-4 md:hidden">
                    <Button variant="outline" size="sm" className="w-full">
                      Show More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Interactive component demos
function CollapsibleSidebarDemo() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex h-64">
        <div className={`border-r bg-card transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}>
          <div className="p-3 border-b flex items-center justify-between">
            {!isCollapsed && <div className="font-medium">Navigation</div>}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={isCollapsed ? "w-full" : ""}
            >
              {isCollapsed ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            </Button>
          </div>
          <div className="p-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-2 rounded-md ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}
              >
                <div className="h-5 w-5 bg-primary/20 rounded-md flex-shrink-0"></div>
                {!isCollapsed && <span className="text-sm">Menu Item {i + 1}</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-4 bg-muted/30 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Main Content Area</p>
            <Button variant="outline" size="sm" onClick={() => setIsCollapsed(!isCollapsed)}>
              {isCollapsed ? "Expand" : "Collapse"} Sidebar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExpandablePanelsDemo() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <Collapsible key={i} className="border rounded-lg overflow-hidden">
          <CollapsibleTrigger asChild>
            <div className="bg-muted p-3 flex items-center justify-between cursor-pointer hover:bg-muted/80">
              <div className="font-medium">Expandable Panel {i + 1}</div>
              <ChevronDown className="h-4 w-4" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-4 border-t">
              <p className="text-sm text-muted-foreground mb-3">
                This is the expandable content for panel {i + 1}. You can click the header to toggle visibility.
              </p>
              <div className="bg-muted/30 h-20 rounded-md flex items-center justify-center">
                <span className="text-sm">Panel Content</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}

function MultiLevelNavigationDemo() {
  const [activeSection, setActiveSection] = useState("section1")
  const [expandedSections, setExpandedSections] = useState({ section1: true, section2: false, section3: false })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex h-80">
        <div className="w-64 border-r bg-card overflow-y-auto">
          <div className="p-3 border-b">
            <div className="font-medium">Multi-level Navigation</div>
          </div>
          <div className="p-2">
            {/* Section 1 */}
            <div className="mb-1">
              <div
                className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-muted"
                onClick={() => toggleSection("section1")}
              >
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-primary/20 rounded-md"></div>
                  <span className="text-sm font-medium">Section 1</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expandedSections.section1 ? "rotate-180" : ""}`}
                />
              </div>
              {expandedSections.section1 && (
                <div className="ml-6 mt-1 space-y-1 border-l pl-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 p-2 rounded-md text-sm cursor-pointer ${activeSection === `section1-${i}` ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}
                      onClick={() => setActiveSection(`section1-${i}`)}
                    >
                      Subsection 1.{i + 1}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Section 2 */}
            <div className="mb-1">
              <div
                className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-muted"
                onClick={() => toggleSection("section2")}
              >
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-primary/20 rounded-md"></div>
                  <span className="text-sm font-medium">Section 2</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expandedSections.section2 ? "rotate-180" : ""}`}
                />
              </div>
              {expandedSections.section2 && (
                <div className="ml-6 mt-1 space-y-1 border-l pl-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 p-2 rounded-md text-sm cursor-pointer ${activeSection === `section2-${i}` ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}
                      onClick={() => setActiveSection(`section2-${i}`)}
                    >
                      Subsection 2.{i + 1}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Section 3 */}
            <div>
              <div
                className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-muted"
                onClick={() => toggleSection("section3")}
              >
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-primary/20 rounded-md"></div>
                  <span className="text-sm font-medium">Section 3</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expandedSections.section3 ? "rotate-180" : ""}`}
                />
              </div>
              {expandedSections.section3 && (
                <div className="ml-6 mt-1 space-y-1 border-l pl-2">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 p-2 rounded-md text-sm cursor-pointer ${activeSection === `section3-${i}` ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}
                      onClick={() => setActiveSection(`section3-${i}`)}
                    >
                      Subsection 3.{i + 1}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 bg-muted/30 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-sm font-medium text-primary mb-2">
              {activeSection}
            </div>
            <p className="text-sm text-muted-foreground">Content for the selected navigation item would appear here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
