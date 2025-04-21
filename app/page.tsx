"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Code,
  Database,
  FileText,
  Lock,
  Server,
  Shield,
  Zap,
  ChevronDown,
  ChevronUp,
  Info,
  AlertCircle,
  Clock,
  Rocket,
  Users,
  Layers,
  Key,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { Testimonial } from "@/components/testimonial"
import { FAQ } from "@/components/faq"
import { SectionHeader } from "@/components/section-header"
import { Card } from "@/components/ui/card"
import { PricingCard } from "@/components/pricing-card"
import { Badge } from "@/components/ui/badge"
import { DecorativeShapes } from "@/components/ui/decorative-shapes"
import { SectionDivider } from "@/components/ui/section-divider"
import { SplitSection } from "@/components/split-section"
import { CSS3DVisualization } from "@/components/css-3d-visualization"
import { AdvancedTerminal } from "@/components/advanced-terminal"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ExpandableText } from "@/components/expandable-text"
import { InfoCard } from "@/components/info-card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function LandingPage() {
  const faqItems = [
    {
      question: "What is formal verification?",
      answer:
        "Formal verification uses mathematical methods to prove the correctness of a system against specifications. Unlike testing which checks specific scenarios, formal verification proves your code meets specifications under all possible conditions.",
    },
    {
      question: "Do I need to know K Framework to use KaaS?",
      answer:
        "No, you don't need to be a K Framework expert. Our platform abstracts away much of the complexity, and our documentation, CLI tools, and support team will help you get started without deep K Framework knowledge.",
    },
    {
      question: "How does KaaS compare to traditional testing?",
      answer:
        "Traditional testing checks specific scenarios and can miss edge cases. KaaS uses formal verification to mathematically prove properties about your code under all possible conditions. This is especially valuable for smart contracts and critical systems.",
    },
    {
      question: "Can I integrate KaaS with my CI/CD pipeline?",
      answer:
        "Yes, KaaS offers official GitHub Actions and APIs that make it easy to integrate formal verification into your CI/CD pipeline. This allows you to automatically verify your code on every pull request or commit.",
    },
    {
      question: "What kind of performance improvements can I expect?",
      answer:
        "KaaS can dramatically reduce verification times through proof caching and specialized hardware. Users typically see 10-100x speedups compared to running K Framework locally, with some complex proofs going from hours to minutes.",
    },
    {
      question: "Is my code secure when using KaaS?",
      answer:
        "Yes, KaaS uses secure vaults with role-based access control (RBAC) to ensure your code and proofs remain private. Each project gets its own isolated environment with industry-standard security practices.",
    },
  ]

  const gettingStartedSteps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create your KaaS account and set up your organization and team members.",
    },
    {
      number: 2,
      title: "Create a Vault",
      description: "Set up a secure vault for your project with appropriate access controls.",
    },
    {
      number: 3,
      title: "Connect Your Code",
      description: "Use our CLI or GitHub integration to connect your codebase to KaaS.",
    },
  ]

  const features = [
    {
      icon: Server,
      title: "Remote Compute",
      shortDesc: "Dedicated proof servers",
      description: "Dedicated proof servers optimized for symbolic execution and formal verification workloads.",
      highlight: true,
      variant: "gradient",
      importance: "primary",
    },
    {
      icon: Database,
      title: "Proof Caching",
      shortDesc: "Store & reuse proofs",
      description: "Store every KCFG with tagging, diffing, and downloading capabilities for past runs.",
      variant: "default",
      importance: "secondary",
    },
    {
      icon: Lock,
      title: "Secure Vaults",
      shortDesc: "Private & isolated",
      description: "Per-project vaults with RBAC and unique access tokens for maximum security and isolation.",
      variant: "bordered",
      importance: "secondary",
    },
    {
      icon: Code,
      title: "CI/DevOps Integration",
      shortDesc: "Automate verification",
      description: "Official GitHub Action for seamless integration with your development workflow.",
      variant: "default",
      importance: "secondary",
    },
    {
      icon: Shield,
      title: "Immutable Proof Archives",
      shortDesc: "Complete history",
      description: "Maintain a complete history of verification results with proof-level versioning and diffing.",
      highlight: true,
      variant: "elevated",
      importance: "primary",
    },
    {
      icon: Zap,
      title: "Elastic Performance",
      shortDesc: "Optimized hardware",
      description: "HPC back-end with specialized hardware optimized for symbolic execution and formal verification.",
      variant: "bordered",
      importance: "secondary",
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      shortDesc: "Hours → Minutes",
      description: "Proof caching avoids recomputation, saving hours of CPU/GPU time on redundant verification tasks.",
    },
    {
      icon: Rocket,
      title: "Boost Performance",
      shortDesc: "10-100x faster",
      description: "Specialized hardware optimized for symbolic execution without capital investment.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      shortDesc: "Work together",
      description: "Team dashboards, tagging, and vault-scoped tokens enable seamless collaboration.",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      shortDesc: "Isolated & secure",
      description: "Per-vault sandboxing and private storage ensure your code and proofs remain secure.",
    },
    {
      icon: Layers,
      title: "No Semantics Drift",
      shortDesc: "Always current",
      description: "Built by K creators—ensuring perfect alignment with latest K Framework developments.",
    },
    {
      icon: Key,
      title: "No Lock-In",
      shortDesc: "Open source",
      description: "Open-source tool-chain; users can run the same Kontrol locally if needed.",
    },
  ]

  // State for expandable sections
  const [expandedSections, setExpandedSections] = useState({
    whatIsK: false,
    whyMatters: false,
    challenges: false,
    solutions: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <TooltipProvider>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-lg font-display font-bold">KaaS</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#what-is-k" className="text-sm font-accent hover:text-primary transition-colors">
                What is K?
              </Link>
              <Link href="#features" className="text-sm font-accent hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#benefits" className="text-sm font-accent hover:text-primary transition-colors">
                Benefits
              </Link>
              <Link href="#pricing" className="text-sm font-accent hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#use-cases" className="text-sm font-accent hover:text-primary transition-colors">
                Use Cases
              </Link>
              <Link href="#testimonials" className="text-sm font-accent hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="#faq" className="text-sm font-accent hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="hidden md:flex items-center gap-4">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="font-accent">
                    Log In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="font-accent">
                    Get Started
                  </Button>
                </Link>
              </div>
              <MobileNav />
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-24 md:py-32 lg:py-40 subtle-gradient relative overflow-hidden">
            <div className="mega-text left-0 right-0 text-center">KAAS</div>
            <DecorativeShapes className="top-20 right-0 opacity-20" />
            <DecorativeShapes className="bottom-0 left-0 opacity-10" variant="secondary" />

            <div className="container max-w-6xl relative z-10">
              <div className="hero-grid">
                <div className="flex flex-col justify-center space-y-8 staggered-reveal">
                  <div className="space-y-6">
                    <Badge variant="highlight" size="lg">
                      Formal Verification Made Simple
                    </Badge>
                    <h1 className="hero-title">
                      K as a <span className="block">Service</span>
                    </h1>
                    <div className="text-muted-foreground text-lg max-w-[600px]">
                      <span className="font-medium">Cloud platform for K Framework</span>
                      <ExpandableText>
                        KaaS provides a cloud platform for running the full K Framework tool-chain at scale, with proof
                        caching and dedicated compute. This allows teams to perform formal verification without managing
                        complex infrastructure.
                      </ExpandableText>
                    </div>
                  </div>
                  <div className="button-group">
                    <Link href="/signup">
                      <Button size="xl" variant="highlight" className="gap-1.5 font-accent">
                        Start Free Trial
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/demo">
                      <Button size="xl" variant="outline" className="font-accent">
                        Request Demo
                      </Button>
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-subtle cursor-help">
                          <Check className="h-3.5 w-3.5 text-primary" />
                          <span className="font-accent text-xs">Secure Vaults</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Per-project vaults with role-based access control for maximum security and isolation
                        </p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-subtle cursor-help">
                          <Check className="h-3.5 w-3.5 text-primary" />
                          <span className="font-accent text-xs">Proof Caching</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Store and reuse verification results to avoid redundant computation</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-subtle cursor-help">
                          <Check className="h-3.5 w-3.5 text-primary" />
                          <span className="font-accent text-xs">CI Integration</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Seamlessly integrate formal verification into your CI/CD pipeline</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div className="space-y-8 lg:mt-10">
                  {/* 3D Visualization */}
                  <div className="hero-3d-container interactive-container float-subtle">
                    <CSS3DVisualization className="h-[300px] md:h-[350px]" />
                  </div>

                  {/* Terminal */}
                  <div className="interactive-container">
                    <AdvancedTerminal
                      commands={[
                        "kaas-cli run -m remote -vs org/vault",
                        "Connecting to KaaS servers...",
                        "Checking proof cache...",
                        "Cache hit! Retrieving previous verification results",
                        "Downloading KCFG artifacts...",
                        "Verification complete: ✓ All properties verified",
                        "",
                        "Time saved: 2.4 hours",
                      ]}
                      typingSpeed={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider height="large" />

          {/* What is K Framework Section */}
          <section id="what-is-k" className="section-container relative content-spacing">
            <SectionHeader
              badge="For Newcomers"
              title="What is K Framework?"
              description="Formal verification for your code"
              gradient
              megaText="K"
              importance="primary"
            />

            {/* Key Points Card */}
            <div className="mt-8 mb-12">
              <Card className="bg-primary/5 border-primary/20 shadow-md">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <Info className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-display font-semibold">Key Takeaways</h3>
                  </div>
                  <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span className="font-medium">Mathematically proves</span> code correctness
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span className="font-medium">Critical for</span> smart contracts
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span className="font-medium">KaaS simplifies</span> verification
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            <SplitSection className="mt-8" gap="large">
              <Card className="h-full" variant="bordered" spacing="relaxed">
                <div className="feature-icon-container">
                  <div className="feature-icon">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="feature-icon-glow"></div>
                </div>

                <h3 className="tertiary-heading mb-4">K Framework Explained</h3>

                <div className="space-y-4">
                  <p className="secondary-text">
                    <span className="text-highlight">Formal verification tool</span> for proving code correctness
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between"
                    onClick={() => toggleSection("whatIsK")}
                  >
                    {expandedSections.whatIsK ? "Show Less" : "Learn More"}
                    {expandedSections.whatIsK ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>

                  {expandedSections.whatIsK && (
                    <div className="pt-4 border-t border-border/30 mt-4 space-y-4">
                      <p className="secondary-text">
                        K Framework is a rewrite-based executable semantic framework for defining programming languages,
                        type systems, and formal analysis tools.
                      </p>

                      <h4 className="font-medium text-base mb-2">What it enables:</h4>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="secondary-text">
                            <span className="font-semibold">Formal definitions</span> of programming languages
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="secondary-text">
                            <span className="font-semibold">Mathematical verification</span> of code behavior
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="secondary-text">
                            <span className="font-semibold">Early detection</span> of bugs and vulnerabilities
                          </span>
                        </li>
                      </ul>

                      <h4 className="font-medium text-base mb-2">Technical Details:</h4>
                      <p className="secondary-text mb-3">
                        K Framework uses <span className="text-highlight">rewrite rules</span> to define the operational
                        semantics of programming languages. This allows developers to:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="secondary-text">Create executable specifications of languages</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="secondary-text">Generate interpreters, compilers, and analysis tools</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="secondary-text">Verify properties across all possible program states</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </Card>

              <Card className="h-full card-level-1" highlight variant="gradient" spacing="relaxed">
                <div className="feature-icon-container">
                  <div className="feature-icon">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="feature-icon-glow"></div>
                </div>

                <h3 className="secondary-heading mb-4">Why It Matters</h3>

                <div className="space-y-4">
                  <p className="primary-text">
                    <span className="text-highlight">Proves code correctness</span> under all conditions
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between"
                    onClick={() => toggleSection("whyMatters")}
                  >
                    {expandedSections.whyMatters ? "Show Less" : "Learn More"}
                    {expandedSections.whyMatters ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>

                  {expandedSections.whyMatters && (
                    <div className="pt-4 border-t border-border/30 mt-4">
                      <p className="secondary-text mb-4">
                        Unlike traditional testing which checks specific scenarios, formal verification mathematically
                        proves code correctness under all possible conditions.
                      </p>

                      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <h4 className="font-medium text-base mb-2">Critical For:</h4>

                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Smart contracts</span>
                              <p className="text-xs text-muted-foreground mt-1">
                                Handling millions in assets where bugs can be catastrophic
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Mission-critical systems</span>
                              <p className="text-xs text-muted-foreground mt-1">
                                Where failures could lead to serious consequences
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Complex protocols</span>
                              <p className="text-xs text-muted-foreground mt-1">
                                Requiring mathematical certainty of correctness
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </SplitSection>

            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
              <Card className="h-full card-level-2" spacing="relaxed">
                <div className="feature-icon">
                  <Server className="h-5 w-5" />
                </div>

                <h3 className="tertiary-heading mb-4">The Challenge</h3>

                <div className="space-y-4">
                  <p className="secondary-text">
                    <span className="text-highlight">Complex & resource-intensive</span> to use
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between"
                    onClick={() => toggleSection("challenges")}
                  >
                    {expandedSections.challenges ? "Show Less" : "See Challenges"}
                    {expandedSections.challenges ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>

                  {expandedSections.challenges && (
                    <div className="pt-4 border-t border-border/30 mt-4">
                      <p className="secondary-text mb-4">
                        While powerful, K Framework has traditionally presented several challenges:
                      </p>

                      <div className="grid gap-4">
                        <div className="p-4 rounded-md bg-muted/50 border border-border/50">
                          <h4 className="font-medium text-sm mb-2 font-display">Computational Intensity</h4>
                          <p className="muted-text">
                            Requires significant computational resources, often tying up hardware for hours or days.
                          </p>
                        </div>

                        <div className="p-4 rounded-md bg-muted/50 border border-border/50">
                          <h4 className="font-medium text-sm mb-2 font-display">Technical Complexity</h4>
                          <p className="muted-text">
                            Setup and maintenance requires specialized knowledge many teams don't have in-house.
                          </p>
                        </div>

                        <div className="p-4 rounded-md bg-muted/50 border border-border/50">
                          <h4 className="font-medium text-sm mb-2 font-display">Redundant Computation</h4>
                          <p className="muted-text">
                            Without caching, teams waste resources recomputing proofs for unchanged code.
                          </p>
                        </div>

                        <div className="p-4 rounded-md bg-muted/50 border border-border/50">
                          <h4 className="font-medium text-sm mb-2 font-display">Toolchain Management</h4>
                          <p className="muted-text">
                            Keeping the K Framework toolchain updated and compatible across environments is challenging.
                          </p>
                        </div>

                        <div className="p-4 rounded-md bg-muted/50 border border-border/50">
                          <h4 className="font-medium text-sm mb-2 font-display">Learning Curve</h4>
                          <p className="muted-text">
                            Steep learning curve for teams without formal methods background.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              <Card className="h-full card-level-1" highlight spacing="relaxed">
                <div className="feature-icon">
                  <Zap className="h-5 w-5" />
                </div>

                <h3 className="secondary-heading mb-4">Our Solution</h3>

                <div className="space-y-6">
                  <p className="primary-text">
                    <span className="text-highlight">Simple cloud service</span> for verification
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between"
                    onClick={() => toggleSection("solutions")}
                  >
                    {expandedSections.solutions ? "Show Less" : "See Solutions"}
                    {expandedSections.solutions ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>

                  {expandedSections.solutions && (
                    <div className="pt-4 border-t border-border/30 mt-4">
                      <p className="secondary-text mb-4">
                        KaaS transforms the complex K Framework into an accessible service:
                      </p>

                      <ul className="space-y-6">
                        <li className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary font-medium flex-shrink-0">
                            1
                          </div>
                          <div>
                            <span className="font-medium text-sm font-display">No Infrastructure Headaches</span>
                            <p className="muted-text mt-2">
                              Access specialized hardware without capital investment or maintenance.
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary font-medium flex-shrink-0">
                            2
                          </div>
                          <div>
                            <span className="font-medium text-sm font-display">Simple CLI & API</span>
                            <p className="muted-text mt-2">
                              Run complex verifications with simple commands like{" "}
                              <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">kaas-cli run</code>.
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary font-medium flex-shrink-0">
                            3
                          </div>
                          <div>
                            <span className="font-medium text-sm font-display">Expert Support</span>
                            <p className="muted-text mt-2">
                              Access to formal verification engineers who understand both theory and practice.
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary font-medium flex-shrink-0">
                            4
                          </div>
                          <div>
                            <span className="font-medium text-sm font-display">Proof Caching</span>
                            <p className="muted-text mt-2">
                              Avoid redundant computation by caching and reusing previous verification results.
                            </p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary font-medium flex-shrink-0">
                            5
                          </div>
                          <div>
                            <span className="font-medium text-sm font-display">CI/CD Integration</span>
                            <p className="muted-text mt-2">
                              Seamlessly integrate formal verification into your development workflow.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </section>

          <SectionDivider invert height="large" />

          {/* Getting Started Section */}
          <section id="getting-started" className="section-container subtle-gradient relative content-spacing">
            <div className="mega-text left-0 right-0 text-center">START</div>
            <DecorativeShapes className="top-20 left-0 opacity-10" variant="muted" />

            <SectionHeader
              badge="Getting Started"
              title="Start in 3 Simple Steps"
              description="Quick setup, powerful verification in minutes"
              gradient
              importance="secondary"
            />

            <div className="mt-8 max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">
                <span className="font-medium text-foreground">No complex infrastructure required.</span> Our platform
                handles all the heavy lifting so you can focus on your code.
              </p>
            </div>

            <div className="mt-12 relative">
              {/* Decorative background elements */}
              <div className="absolute -z-10 top-1/4 left-10 w-24 h-24 rounded-full bg-primary/5 blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/4 right-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>

              {/* Main grid with improved spacing and visual hierarchy */}
              <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3 relative">
                {/* Subtle connecting lines between cards (visible on larger screens) */}
                <div className="absolute hidden lg:block top-1/2 left-1/3 w-1/3 h-px bg-primary/10"></div>
                <div className="absolute hidden lg:block top-1/2 right-1/3 w-1/3 h-px bg-primary/10"></div>
                <div className="absolute hidden md:block lg:hidden top-1/2 left-1/2 w-px h-1/3 bg-primary/10"></div>

                {/* Time Savings */}
                <Card
                  className="h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  hover
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">Save Time</h3>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">Hours → Minutes</span>
                    </p>

                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                          <span>Learn More</span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Proof caching avoids recomputation, saving hours of CPU/GPU time on redundant verification
                            tasks.
                          </p>

                          <h4 className="text-sm font-medium mt-4 mb-2">How It Works:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Stores verification results for reuse</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Skips redundant computations automatically</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Reduces verification from hours to minutes</span>
                            </li>
                          </ul>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </Card>

                {gettingStartedSteps.slice(1).map((step) => (
                  <Card
                    key={step.number}
                    className="relative pt-14 h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    hover
                  >
                    <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{step.description}</p>

                    <Collapsible className="mt-auto">
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full justify-between mt-2 text-xs">
                          <span>Learn More</span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-2">
                        <div className="p-3 bg-muted/30 rounded-md border border-border/30 text-xs text-muted-foreground">
                          {step.number === 1 && (
                            <>
                              <p className="mb-2">
                                <span className="font-medium">Create your account</span> in less than 2 minutes.
                              </p>
                              <p>
                                Choose between individual, team, or enterprise plans based on your verification needs.
                              </p>
                            </>
                          )}
                          {step.number === 2 && (
                            <>
                              <p className="mb-2">
                                <span className="font-medium">Secure vaults</span> isolate your projects and control
                                access.
                              </p>
                              <p>
                                Set up role-based permissions for your team members with fine-grained access control.
                              </p>
                            </>
                          )}
                          {step.number === 3 && (
                            <>
                              <p className="mb-2">
                                Use our <span className="font-medium">simple CLI tool</span> or GitHub integration.
                              </p>
                              <p>
                                Automate verification in your CI/CD pipeline with just a few lines of configuration.
                              </p>
                            </>
                          )}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mb-6 max-w-2xl mx-auto">
                  <h4 className="text-base font-medium mb-2">Ready to get started?</h4>
                  <p className="text-sm text-muted-foreground mb-0">
                    Our documentation includes step-by-step guides for common verification scenarios.
                  </p>
                </div>

                <Link href="/docs/quickstart">
                  <Button size="lg" className="font-accent text-base">
                    View Detailed Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <SectionDivider height="large" />

          {/* Features Section */}
          <section id="features" className="section-container relative content-spacing">
            <div className="mega-text left-0 right-0 text-center">FEATURES</div>
            <DecorativeShapes className="bottom-20 right-0 opacity-10" />

            <SectionHeader
              badge="Core Features"
              title="Powerful Verification Infrastructure"
              description="Everything you need, nothing you don't"
              gradient
              importance="primary"
            />

            {/* Feature Summary Card */}
            <div className="mt-8 mb-8">
              <InfoCard
                icon={AlertCircle}
                title="Why These Features Matter"
                content="KaaS combines specialized hardware, proof caching, and secure vaults to make formal verification practical for everyday development workflows."
              />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`h-full group ${feature.highlight ? "card-level-1" : "card-level-2"}`}
                  hover
                  highlight={feature.highlight}
                  variant={feature.variant}
                  spacing="relaxed"
                >
                  <div className="feature-icon-container">
                    <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div className="feature-icon-glow"></div>
                  </div>
                  <h3 className={`${feature.highlight ? "secondary-heading" : "tertiary-heading"} mb-2`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">{feature.shortDesc}</p>
                  <ExpandableText>{feature.description}</ExpandableText>
                </Card>
              ))}
            </div>
          </section>

          <SectionDivider invert height="large" />

          {/* Benefits Section */}
          <section id="benefits" className="section-container subtle-gradient relative content-spacing">
            <div className="mega-text left-0 right-0 text-center">WHY</div>
            <DecorativeShapes className="top-40 left-0 opacity-10" variant="secondary" />

            <SectionHeader
              badge="Key Benefits"
              title="Why Choose KaaS?"
              description="Faster, easier, more reliable"
              gradient
              importance="secondary"
            />

            <div className="mt-8 max-w-3xl mx-auto">
              <Card className="mb-6">
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Info className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-display font-semibold">At a Glance</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    KaaS delivers formal verification with{" "}
                    <span className="font-medium text-foreground">speed, simplicity, and security</span>. Click each
                    benefit below to learn more.
                  </p>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Time Savings */}
              <Card className="h-full" hover>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Save Time</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">Hours → Minutes</span>
                  </p>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                        <span>Learn More</span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Proof caching avoids recomputation, saving hours of CPU/GPU time on redundant verification
                          tasks.
                        </p>

                        <h4 className="text-sm font-medium mt-4 mb-2">How It Works:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Stores verification results for reuse</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Skips redundant computations automatically</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Reduces verification from hours to minutes</span>
                          </li>
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </Card>

              {/* Performance */}
              <Card className="h-full" hover highlight>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Rocket className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Boost Performance</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">10-100x faster</span>
                  </p>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                        <span>Learn More</span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Specialized hardware optimized for symbolic execution without capital investment.
                        </p>

                        <h4 className="text-sm font-medium mt-4 mb-2">How It Works:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">High-performance computing infrastructure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Hardware optimized for symbolic execution</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">No upfront investment in specialized equipment</span>
                          </li>
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </Card>

              {/* Collaboration */}
              <Card className="h-full" hover>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Team Collaboration</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">Work together</span>
                  </p>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                        <span>Learn More</span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Team dashboards, tagging, and vault-scoped tokens enable seamless collaboration.
                        </p>

                        <h4 className="text-sm font-medium mt-4 mb-2">How It Works:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Shared dashboards for team visibility</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Role-based access control for security</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Tagging system for organizing verification results</span>
                          </li>
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </Card>

              {/* Security */}
              <Card className="h-full" hover>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Enhanced Security</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">Isolated & secure</span>
                  </p>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                        <span>Learn More</span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Per-vault sandboxing and private storage ensure your code and proofs remain secure.
                        </p>

                        <h4 className="text-sm font-medium mt-4 mb-2">How It Works:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Isolated environments for each project</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Encrypted storage for sensitive code</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Fine-grained access controls</span>
                          </li>
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </Card>

              {/* No Semantics Drift */}
              <Card className="h-full" hover>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Layers className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">No Semantics Drift</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">Always current</span>
                  </p>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                        <span>Learn More</span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Built by K creators—ensuring perfect alignment with latest K Framework developments.
                        </p>

                        <h4 className="text-sm font-medium mt-4 mb-2">How It Works:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Always up-to-date with latest K Framework</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Built by the same team that develops K</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">No compatibility issues or version conflicts</span>
                          </li>
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </Card>

              {/* No Lock-In */}
              <Card className="h-full" hover>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Key className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">No Lock-In</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-foreground">Open source</span>
                  </p>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                        <span>Learn More</span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Open-source tool-chain; users can run the same Kontrol locally if needed.
                        </p>

                        <h4 className="text-sm font-medium mt-4 mb-2">How It Works:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Based on open-source K Framework</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Export proofs and run locally if desired</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs">Freedom to migrate or use hybrid approach</span>
                          </li>
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </Card>
            </div>
          </section>

          <SectionDivider height="large" />

          {/* Testimonials Section */}
          <section id="testimonials" className="section-container relative content-spacing">
            <div className="mega-text left-0 right-0 text-center">TRUST</div>
            <DecorativeShapes className="top-20 right-0 opacity-10" variant="primary" />

            <SectionHeader
              badge="Testimonials"
              title="What Our Users Say"
              description="Real results from real teams"
              gradient
              importance="secondary"
            />

            <div className="testimonial-grid mt-16">
              <div className="md:mt-16">
                <Testimonial
                  quote="KaaS has reduced our verification times from days to hours. The proof caching feature alone has saved us countless engineering hours."
                  author="Alex Chen"
                  role="Lead Security Engineer"
                  company="DeFi Protocol"
                  image="/diverse-group-city.png"
                />
              </div>
              <div>
                <Testimonial
                  quote="As researchers, we needed specialized hardware for our proofs without the overhead of managing it. KaaS delivered exactly that."
                  author="Dr. Sarah Johnson"
                  role="Computer Science Professor"
                  company="Tech University"
                  image="/diverse-research-team.png"
                  highlight={true}
                />
              </div>
              <div className="md:mt-16">
                <Testimonial
                  quote="The integration with our CI pipeline means we catch formal verification issues before they reach production. It's been a game-changer for our security posture."
                  author="Michael Rodriguez"
                  role="CTO"
                  company="Blockchain Startup"
                  image="/diverse-executive-team.png"
                />
              </div>
            </div>
          </section>

          <SectionDivider invert height="large" />

          {/* Pricing Section */}
          <section id="pricing" className="section-container subtle-gradient relative content-spacing">
            <div className="mega-text left-0 right-0 text-center">PLANS</div>
            <DecorativeShapes className="bottom-20 left-0 opacity-10" variant="muted" />

            <SectionHeader
              badge="Pricing Plans"
              title="Choose Your Plan"
              description="Options for every team size"
              gradient
              importance="primary"
            />

            <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
              <PricingCard
                title="Free"
                description="For individuals and small projects"
                price="$0"
                features={[
                  {
                    text: "KCFG archiving",
                    description: "Store and access your verification artifacts",
                  },
                  {
                    text: "Discord support",
                    description: "Community-based help and guidance",
                  },
                  {
                    text: "Basic CLI access",
                    description: "Run verifications with command-line tools",
                  },
                ]}
                buttonText="Get Started"
                importance="tertiary"
              />
              <PricingCard
                title="Professional"
                description="For teams and organizations"
                price="$4,000"
                period="month"
                features={[
                  {
                    text: "1 dedicated remote runner",
                    description: "Exclusive compute resources for your team",
                  },
                  {
                    text: "Unlimited storage",
                    description: "No limits on proof artifacts and history",
                  },
                  {
                    text: "4 hours/week engineer time",
                    description: "Direct access to formal verification experts",
                  },
                  {
                    text: "CI/DevOps integration",
                    description: "Seamless workflow with GitHub Actions",
                  },
                  {
                    text: "Team dashboard",
                    description: "Collaborative verification management",
                  },
                ]}
                buttonText="Subscribe"
                popular
                importance="primary"
              />
              <PricingCard
                title="Premium"
                description="For enterprise verification needs"
                price="$20,000"
                period="month"
                features={[
                  {
                    text: "Same runner as Professional",
                    description: "All the compute resources you need",
                  },
                  {
                    text: "20 hours/week dedicated FV engineer",
                    description: "Deep expertise for complex verification",
                  },
                  {
                    text: "Priority support",
                    description: "Immediate assistance when you need it",
                  },
                  {
                    text: "Custom integrations",
                    description: "Tailored solutions for your workflow",
                  },
                  {
                    text: "Advanced security features",
                    description: "Enterprise-grade protection for your code",
                  },
                ]}
                buttonText="Contact Sales"
                importance="secondary"
              />
            </div>
          </section>

          <SectionDivider height="large" />

          {/* Use Cases Section */}
          <section id="use-cases" className="section-container relative content-spacing">
            <div className="mega-text left-0 right-0 text-center">USERS</div>
            <DecorativeShapes className="top-40 right-0 opacity-10" variant="secondary" />

            <SectionHeader
              badge="Use Cases"
              title="Who Uses KaaS?"
              description="Perfect for these specialized teams"
              gradient
              importance="secondary"
            />

            <div className="mt-8 max-w-4xl mx-auto">
              <div className="grid gap-6 md:grid-cols-3">
                {/* Smart Contract Teams Card */}
                <Card className="h-full" hover>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">Smart Contract Teams</h3>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">Secure millions in assets</span> with mathematical
                      certainty.
                    </p>

                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                          <span>See Details</span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Teams like Lido, Optimism, and Gnosis use KaaS to ensure their code is mathematically
                            verified before deployment.
                          </p>

                          <h4 className="text-sm font-medium mt-4 mb-2">Key Applications:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Verifying token transfer logic against reentrancy attacks</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Proving correctness of staking reward calculations</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Validating state transitions in complex protocols</span>
                            </li>
                          </ul>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </Card>

                {/* FV Engineers Card */}
                <Card className="h-full" hover highlight>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">FV Engineers</h3>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">Reproducible proof history</span> and collaborative
                      workflows.
                    </p>

                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                          <span>See Details</span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Formal verification engineers use KaaS to maintain proof history and enable collaborative
                            verification workflows.
                          </p>

                          <h4 className="text-sm font-medium mt-4 mb-2">Key Applications:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Maintaining verification history across code changes</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Sharing proof strategies across distributed teams</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Building automated verification pipelines</span>
                            </li>
                          </ul>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </Card>

                {/* Researchers Card */}
                <Card className="h-full" hover>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">Researchers</h3>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">Compute-heavy proofs</span> without infrastructure
                      management.
                    </p>

                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
                          <span>See Details</span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Academic and industry researchers use KaaS to run compute-heavy K proofs without maintaining
                            local clusters.
                          </p>

                          <h4 className="text-sm font-medium mt-4 mb-2">Key Applications:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Developing new language semantics with K Framework</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Testing novel verification approaches at scale</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs">Collaborating on cross-institution research projects</span>
                            </li>
                          </ul>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mb-6 max-w-2xl mx-auto">
                  <h4 className="text-base font-medium mb-2">Not sure if KaaS is right for you?</h4>
                  <p className="text-sm text-muted-foreground mb-0">
                    Schedule a consultation with our team to discuss your specific verification needs.
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="font-accent">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <SectionDivider invert height="large" />

          {/* FAQ Section */}
          <section id="faq" className="section-container subtle-gradient relative content-spacing">
            <div className="mega-text left-0 right-0 text-center">FAQ</div>
            <DecorativeShapes className="bottom-20 right-0 opacity-10" variant="muted" />

            <SectionHeader
              badge="FAQ"
              title="Common Questions"
              description="Quick answers to key questions"
              gradient
              importance="tertiary"
            />

            <div className="mt-16 max-w-3xl mx-auto">
              <FAQ items={faqItems} />
              <div className="mt-10 text-center">
                <p className="muted-text mb-4">Still have questions?</p>
                <Link href="/contact">
                  <Button variant="outline" className="font-accent">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-container">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/15 via-primary/10 to-background border-primary/30 p-10 shadow-xl card-level-1">
                <div className="flex flex-col items-center justify-center space-y-8 text-center">
                  <div className="space-y-4">
                    <h2 className="cta-title">Ready to Transform Your Verification?</h2>
                    <p className="primary-text">Start today and see the difference</p>
                  </div>
                  <div className="button-group">
                    <Link href="/signup">
                      <Button size="xl" variant="highlight" className="font-accent text-base shadow-md">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/demo">
                      <Button size="lg" variant="outline" className="font-accent text-base">
                        Schedule a Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>

        <footer className="border-t py-16">
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-lg font-display font-bold">KaaS</span>
                </div>
                <p className="footer-description mb-4">
                  Cloud platform for running the full K Framework tool-chain at scale.
                </p>
                <p className="footer-copyright">© 2025 Runtime Verification. All rights reserved.</p>
              </div>
              <div>
                <h3 className="footer-title">Product</h3>
                <ul className="spaced-list">
                  <li>
                    <Link href="#features" className="footer-link">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="footer-link">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="footer-link">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/changelog" className="footer-link">
                      Changelog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="footer-title">Resources</h3>
                <ul className="spaced-list">
                  <li>
                    <Link href="/blog" className="footer-link">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="footer-link">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/webinars" className="footer-link">
                      Webinars
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="footer-link">
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="footer-title">Company</h3>
                <ul className="spaced-list">
                  <li>
                    <Link href="/about" className="footer-link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="footer-link">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="footer-link">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="footer-link">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}
