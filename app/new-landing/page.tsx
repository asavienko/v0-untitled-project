"use client"

import React from "react"

import Link from "next/link"
import { ArrowRight, Check, Shield, Zap, Clock, Rocket, Users, Lock, Code, Database, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DecorativeShapes } from "@/components/ui/decorative-shapes"
import { CSS3DVisualization } from "@/components/css-3d-visualization"
import { AdvancedTerminal } from "@/components/advanced-terminal"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function NewLandingPage() {
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
              <Link href="#features" className="text-sm font-accent hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#benefits" className="text-sm font-accent hover:text-primary transition-colors">
                Benefits
              </Link>
              <Link href="#use-cases" className="text-sm font-accent hover:text-primary transition-colors">
                Use Cases
              </Link>
              <Link href="#pricing" className="text-sm font-accent hover:text-primary transition-colors">
                Pricing
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
          <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <DecorativeShapes className="top-20 right-0 opacity-20" />

            <div className="container max-w-6xl relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="flex flex-col space-y-8">
                  <Badge variant="highlight" size="lg" className="w-fit">
                    Formal Verification Made Simple
                  </Badge>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
                    K as a <span className="text-primary">Service</span>
                  </h1>

                  <p className="text-xl text-muted-foreground max-w-md">
                    <span className="font-medium text-foreground">Cloud platform</span> for running the full K Framework
                    tool-chain at scale, with <span className="text-primary font-medium">proof caching</span> and
                    <span className="text-primary font-medium"> dedicated compute</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/signup">
                      <Button size="lg" className="gap-1.5 font-accent w-full sm:w-auto">
                        Start Free Trial
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/demo">
                      <Button size="lg" variant="outline" className="font-accent w-full sm:w-auto">
                        Request Demo
                      </Button>
                    </Link>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm cursor-help">
                          <Check className="h-3.5 w-3.5 text-primary" />
                          <span className="font-accent text-xs">Secure Vaults</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Per-project vaults with role-based access control</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm cursor-help">
                          <Check className="h-3.5 w-3.5 text-primary" />
                          <span className="font-accent text-xs">Proof Caching</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Store and reuse verification results</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm cursor-help">
                          <Check className="h-3.5 w-3.5 text-primary" />
                          <span className="font-accent text-xs">CI Integration</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Seamless integration with your CI/CD pipeline</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* 3D Visualization */}
                  <div className="rounded-xl overflow-hidden shadow-lg border border-primary/10 bg-gradient-to-br from-background to-primary/5">
                    <CSS3DVisualization className="h-[300px] md:h-[350px]" />
                  </div>

                  {/* Terminal */}
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <AdvancedTerminal
                      commands={[
                        "kaas-cli run -m remote -vs org/vault",
                        "Connecting to KaaS servers...",
                        "Checking proof cache...",
                        "Cache hit! Retrieving previous verification results",
                        "Verification complete: ✓ All properties verified",
                        "Time saved: 2.4 hours",
                      ]}
                      typingSpeed={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is K Framework Section - Simplified */}
          <section className="py-20 bg-primary/5">
            <div className="container max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="primary" className="mb-4">
                  For Newcomers
                </Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What is K Framework?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A formal verification tool that{" "}
                  <span className="text-primary font-medium">mathematically proves</span> your code works correctly
                  under all conditions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 border-primary/20 bg-background/80 backdrop-blur-sm">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Mathematical Proof</h3>
                  <p className="text-muted-foreground text-sm">
                    Unlike testing, K <span className="text-foreground font-medium">proves code correctness</span> under
                    all possible conditions.
                  </p>
                </Card>

                <Card className="p-6 border-primary/20 bg-background/80 backdrop-blur-sm">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Critical Security</h3>
                  <p className="text-muted-foreground text-sm">
                    Essential for <span className="text-foreground font-medium">smart contracts</span> and systems
                    handling millions in assets.
                  </p>
                </Card>

                <Card className="p-6 border-primary/20 bg-background/80 backdrop-blur-sm">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">KaaS Solution</h3>
                  <p className="text-muted-foreground text-sm">
                    We make K Framework <span className="text-foreground font-medium">accessible</span> through our
                    cloud platform.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20">
            <div className="container max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="primary" className="mb-4">
                  Core Features
                </Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Powerful Verification Infrastructure
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need, nothing you don't</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<Server />}
                  title="Remote Compute"
                  description="Dedicated proof servers optimized for symbolic execution"
                  highlight
                />

                <FeatureCard
                  icon={<Database />}
                  title="Proof Caching"
                  description="Store & reuse verification results to save hours of computation"
                />

                <FeatureCard
                  icon={<Lock />}
                  title="Secure Vaults"
                  description="Per-project vaults with RBAC and unique access tokens"
                />

                <FeatureCard
                  icon={<Code />}
                  title="CI/DevOps Integration"
                  description="Seamless integration with your development workflow"
                />

                <FeatureCard
                  icon={<Shield />}
                  title="Immutable Proof Archives"
                  description="Complete history with proof-level versioning and diffing"
                  highlight
                />

                <FeatureCard
                  icon={<Zap />}
                  title="Elastic Performance"
                  description="Specialized hardware optimized for formal verification"
                />
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="py-20 bg-primary/5">
            <div className="container max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="primary" className="mb-4">
                  Key Benefits
                </Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose KaaS?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Faster, easier, more reliable verification</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <BenefitCard
                  icon={<Clock />}
                  title="Save Time"
                  metric="Hours → Minutes"
                  description="Proof caching avoids redundant computation"
                />

                <BenefitCard
                  icon={<Rocket />}
                  title="Boost Performance"
                  metric="10-100x faster"
                  description="Specialized hardware without capital investment"
                  highlight
                />

                <BenefitCard
                  icon={<Users />}
                  title="Team Collaboration"
                  metric="Work together"
                  description="Team dashboards and vault-scoped tokens"
                />
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section id="use-cases" className="py-20">
            <div className="container max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="primary" className="mb-4">
                  Use Cases
                </Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Who Uses KaaS?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Perfect for these specialized teams</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <UseCaseCard
                  icon={<Shield />}
                  title="Smart Contract Teams"
                  description="Secure millions in assets with mathematical certainty"
                  examples={["DeFi protocols", "NFT marketplaces", "DAO governance"]}
                />

                <UseCaseCard
                  icon={<Code />}
                  title="FV Engineers"
                  description="Reproducible proof history and collaborative workflows"
                  examples={["Security auditors", "Protocol developers", "Blockchain teams"]}
                  highlight
                />

                <UseCaseCard
                  icon={<Database />}
                  title="Researchers"
                  description="Compute-heavy proofs without infrastructure management"
                  examples={["Academic institutions", "R&D departments", "Language designers"]}
                />
              </div>
            </div>
          </section>

          {/* Pricing Section - Simplified */}
          <section id="pricing" className="py-20 bg-primary/5">
            <div className="container max-w-6xl">
              <div className="text-center mb-12">
                <Badge variant="primary" className="mb-4">
                  Pricing Plans
                </Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Choose Your Plan</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Options for every team size</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                  title="Free"
                  price="$0"
                  description="For individuals and small projects"
                  features={["KCFG archiving", "Discord support", "Basic CLI access"]}
                  buttonText="Get Started"
                />

                <PricingCard
                  title="Professional"
                  price="$4,000"
                  period="month"
                  description="For teams and organizations"
                  features={[
                    "1 dedicated remote runner",
                    "Unlimited storage",
                    "4 hours/week engineer time",
                    "CI/DevOps integration",
                    "Team dashboard",
                  ]}
                  buttonText="Subscribe"
                  highlight
                />

                <PricingCard
                  title="Premium"
                  price="$20,000"
                  period="month"
                  description="For enterprise verification needs"
                  features={[
                    "Same runner as Professional",
                    "20 hours/week dedicated FV engineer",
                    "Priority support",
                    "Custom integrations",
                    "Advanced security features",
                  ]}
                  buttonText="Contact Sales"
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container max-w-4xl">
              <div className="rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-background border border-primary/20 p-8 md:p-12 shadow-xl text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to Transform Your Verification?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Start today and see the difference formal verification can make for your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1.5 font-accent w-full sm:w-auto">
                      Start Free Trial
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="font-accent w-full sm:w-auto">
                      Schedule a Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-lg font-display font-bold">KaaS</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Cloud platform for running the full K Framework tool-chain at scale.
                </p>
                <p className="text-xs text-muted-foreground">© 2025 Runtime Verification. All rights reserved.</p>
              </div>

              <div>
                <h3 className="font-medium mb-4">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
                      Benefits
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">
                      Documentation
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/webinars" className="text-muted-foreground hover:text-primary transition-colors">
                      Webinars
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="text-muted-foreground hover:text-primary transition-colors">
                      Community
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
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

// Component for feature cards
function FeatureCard({ icon, title, description, highlight = false }) {
  return (
    <Card
      className={`p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${highlight ? "border-primary/30 bg-primary/5" : ""}`}
    >
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {React.cloneElement(icon, { className: "h-5 w-5 text-primary" })}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Card>
  )
}

// Component for benefit cards
function BenefitCard({ icon, title, metric, description, highlight = false }) {
  return (
    <Card
      className={`p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${highlight ? "border-primary/30 bg-primary/5" : ""}`}
    >
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {React.cloneElement(icon, { className: "h-5 w-5 text-primary" })}
      </div>
      <h3 className="text-xl font-medium mb-1">{title}</h3>
      <p className="text-primary font-bold text-lg mb-2">{metric}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Card>
  )
}

// Component for use case cards
function UseCaseCard({ icon, title, description, examples, highlight = false }) {
  return (
    <Card
      className={`p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${highlight ? "border-primary/30 bg-primary/5" : ""}`}
    >
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {React.cloneElement(icon, { className: "h-5 w-5 text-primary" })}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>

      <div className="space-y-1">
        <p className="text-xs font-medium text-foreground">Perfect for:</p>
        <ul className="space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="flex items-center text-xs text-muted-foreground">
              <Check className="h-3 w-3 text-primary mr-1 flex-shrink-0" />
              {example}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

// Component for pricing cards
function PricingCard({ title, price, period, description, features, buttonText, highlight = false }) {
  return (
    <Card
      className={`p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${highlight ? "border-primary/30 bg-primary/5 relative" : ""}`}
    >
      {highlight && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
          Popular
        </div>
      )}

      <h3 className="text-xl font-medium mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>

      <div className="flex items-baseline mb-6">
        <span className="text-3xl font-bold">{price}</span>
        {period && <span className="text-muted-foreground text-sm ml-1">/{period}</span>}
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button className={`w-full ${highlight ? "" : "bg-secondary hover:bg-secondary/80"}`}>{buttonText}</Button>
    </Card>
  )
}
