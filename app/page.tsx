import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Database, FileText, Lock, Server, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { Testimonial } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { GettingStarted } from "@/components/getting-started"

export default function LandingPage() {
  const faqItems = [
    {
      question: "What is formal verification?",
      answer:
        "Formal verification is a technique that uses mathematical methods to prove or disprove the correctness of a system with respect to a certain formal specification or property. Unlike testing, which can only check specific scenarios, formal verification can mathematically prove that your code meets its specifications under all possible conditions.",
    },
    {
      question: "Do I need to know K Framework to use KaaS?",
      answer:
        "No, you don't need to be a K Framework expert to use KaaS. While understanding the basics can be helpful, our platform is designed to abstract away much of the complexity. Our documentation, CLI tools, and support team can help you get started without deep K Framework knowledge.",
    },
    {
      question: "How does KaaS compare to traditional testing?",
      answer:
        "Traditional testing checks specific scenarios and can miss edge cases. KaaS uses formal verification to mathematically prove properties about your code under all possible conditions. This is especially valuable for smart contracts and critical systems where bugs can be catastrophic.",
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
        "Yes, KaaS uses secure vaults with role-based access control (RBAC) to ensure your code and proofs remain private. Each project gets its own isolated environment, and we use industry-standard security practices to protect your data.",
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

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <span className="text-xl font-bold">KaaS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#what-is-k" className="text-sm font-medium hover:underline underline-offset-4">
              What is K?
            </Link>
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
              Benefits
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#use-cases" className="text-sm font-medium hover:underline underline-offset-4">
              Use Cases
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">K as a Service</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Cloud platform for running the full K Framework tool-chain at scale, with proof caching and
                    dedicated compute.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1.5">
                      Start Free Trial
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline">
                      Request Demo
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Secure Vaults</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Proof Caching</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>CI Integration</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg border bg-background p-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-indigo-900/10 backdrop-blur-sm">
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span>Remote Proof Server Connected</span>
                      </div>
                      <div className="flex-1 font-mono text-xs overflow-hidden bg-black/80 rounded-md p-4 text-green-400">
                        <div className="animate-typing overflow-hidden whitespace-nowrap">
                          $ kaas-cli run -m remote -vs org/vault
                          <br />
                          <br />
                          Connecting to KaaS servers...
                          <br />
                          Checking proof cache...
                          <br />
                          Cache hit! Retrieving previous verification results
                          <br />
                          Downloading KCFG artifacts...
                          <br />
                          Verification complete: ✓ All properties verified
                          <br />
                          <br />
                          Time saved: 2.4 hours
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is K Framework Section */}
        <section id="what-is-k" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">For Newcomers</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What is K Framework?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Understanding the foundation of KaaS and why it matters for your projects.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />K Framework Explained
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The K Framework is a rewrite-based executable semantic framework in which programming languages,
                    type systems, and formal analysis tools can be defined.
                  </p>
                  <p className="text-muted-foreground">
                    In simpler terms, it's a powerful tool that allows developers to:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Formally define the exact behavior of programming languages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Mathematically verify that code behaves as expected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Detect bugs and vulnerabilities before they reach production</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Why Formal Verification Matters
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Unlike traditional testing which can only check specific scenarios, formal verification
                    mathematically proves that your code meets its specifications under all possible conditions.
                  </p>
                  <p className="text-muted-foreground">This is especially critical for:</p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Smart contracts handling millions in assets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Mission-critical systems where failures are catastrophic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Complex protocols requiring mathematical certainty</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    The Challenge of Using K Framework
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    While powerful, the K Framework has traditionally been challenging to use:
                  </p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Computational Intensity</AccordionTrigger>
                      <AccordionContent>
                        Formal verification requires significant computational resources, often tying up expensive
                        hardware for hours or days for complex proofs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Technical Complexity</AccordionTrigger>
                      <AccordionContent>
                        Setting up and maintaining the K Framework toolchain requires specialized knowledge and
                        expertise that many teams don't have in-house.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Redundant Computation</AccordionTrigger>
                      <AccordionContent>
                        Without caching, teams waste resources recomputing proofs for code that hasn't changed, slowing
                        down development cycles.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    How KaaS Simplifies Everything
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    KaaS transforms the complex K Framework into an accessible service:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <span className="font-medium">No Infrastructure Headaches</span>
                        <p className="text-sm text-muted-foreground">
                          Access specialized hardware without capital investment or maintenance.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <span className="font-medium">Simple CLI & API</span>
                        <p className="text-sm text-muted-foreground">
                          Run complex verifications with simple commands like <code>kaas-cli run</code>.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <span className="font-medium">Expert Support</span>
                        <p className="text-sm text-muted-foreground">
                          Access to formal verification engineers who understand both the theory and practice.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="rounded-lg border bg-primary/5 p-6">
                <h3 className="text-xl font-bold mb-3 text-center">The K Ecosystem at Your Fingertips</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 rounded-lg bg-card border text-center">
                    <h4 className="font-bold mb-2">KEVM</h4>
                    <p className="text-sm text-muted-foreground">
                      Formal semantics of the Ethereum Virtual Machine for verifying smart contracts
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border text-center">
                    <h4 className="font-bold mb-2">Kontrol</h4>
                    <p className="text-sm text-muted-foreground">
                      Symbolic execution engine for finding bugs and proving properties
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border text-center">
                    <h4 className="font-bold mb-2">KWasm</h4>
                    <p className="text-sm text-muted-foreground">
                      Formal semantics for WebAssembly to verify low-level code
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link href="/learn-more">
                    <Button variant="outline">Learn More About K Framework</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section id="getting-started" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Getting Started</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Start Using KaaS in 3 Simple Steps</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting started with formal verification has never been easier.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <GettingStarted steps={gettingStartedSteps} />
              <div className="mt-12 text-center">
                <Link href="/docs/quickstart">
                  <Button size="lg">
                    View Detailed Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Core Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Powerful Formal Verification Infrastructure
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  KaaS provides the infrastructure you need for continuous formal verification without building your own
                  HPC farm.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <Server className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Remote Compute</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dedicated proof servers optimized for symbolic execution and formal verification workloads.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <Database className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Proof Caching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Store every KCFG with tagging, diffing, and downloading capabilities for past runs.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <Lock className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Secure Vaults</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Per-project vaults with RBAC and unique access tokens for maximum security and isolation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <Code className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>CI/DevOps Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Official GitHub Action for seamless integration with your development workflow.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Immutable Proof Archives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Maintain a complete history of verification results with proof-level versioning and diffing.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <Zap className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Elastic Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    HPC back-end with specialized hardware optimized for symbolic execution and formal verification.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Benefits</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose KaaS?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  KaaS transforms heavyweight K-based proof search into an on-demand, CI-ready service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Time-Saving</h3>
                <p className="text-muted-foreground">
                  Proof caching avoids recomputation, saving hours of CPU/GPU time on redundant verification tasks.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Elastic Performance</h3>
                <p className="text-muted-foreground">
                  Access to specialized hardware optimized for symbolic execution without capital investment.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-muted-foreground">
                  Team dashboards, tagging, and vault-scoped tokens enable seamless collaboration on verification
                  projects.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Security & Isolation</h3>
                <p className="text-muted-foreground">
                  Per-vault sandboxing, private storage, and GitHub-app–mediated access ensure your code and proofs
                  remain secure.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">No Semantics Drift</h3>
                <p className="text-muted-foreground">
                  Built by the creators of K—ensuring perfect alignment with the latest K Framework developments.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">No Lock-In</h3>
                <p className="text-muted-foreground">
                  Open-source tool-chain; users can run the same Kontrol locally if needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from teams that have transformed their verification workflows with KaaS.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Testimonial
                quote="KaaS has reduced our verification times from days to hours. The proof caching feature alone has saved us countless engineering hours."
                author="Alex Chen"
                role="Lead Security Engineer"
                company="DeFi Protocol"
                image="/diverse-group-city.png"
              />
              <Testimonial
                quote="As researchers, we needed specialized hardware for our proofs without the overhead of managing it. KaaS delivered exactly that."
                author="Dr. Sarah Johnson"
                role="Computer Science Professor"
                company="Tech University"
                image="/diverse-research-team.png"
              />
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

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing Plans</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Choose the Right Plan for Your Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible pricing options to meet your formal verification needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>For individuals and small projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$0</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>KCFG archiving</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Discord support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Basic CLI access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="border-0 shadow-md relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>For teams and organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    $4,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>1 dedicated remote runner</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Unlimited storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>4 hours/week engineer time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>CI/DevOps integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Team dashboard</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe</Button>
                </CardFooter>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For enterprise verification needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    $20,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Same runner as Professional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>20 hours/week dedicated FV engineer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Advanced security features</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Use Cases</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Who Uses KaaS?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  KaaS is designed for teams that need reliable, scalable formal verification.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="smart-contract" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="smart-contract">Smart Contract Teams</TabsTrigger>
                  <TabsTrigger value="fv-engineers">FV Engineers</TabsTrigger>
                  <TabsTrigger value="researchers">Researchers</TabsTrigger>
                </TabsList>
                <TabsContent value="smart-contract" className="p-6 border rounded-lg mt-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Smart Contract Teams</h3>
                    <p className="text-muted-foreground">
                      Teams like Lido, Optimism, and Gnosis use KaaS for continuous verification of their smart
                      contracts and protocols.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Continuous formal verification of Solidity contracts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>L2 roll-up protocol verification</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>LST protocol verification</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="fv-engineers" className="p-6 border rounded-lg mt-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Formal Verification Engineers</h3>
                    <p className="text-muted-foreground">
                      FV engineers who need reproducible proof history and collaborative verification workflows.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Reproducible proof history</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Team collaboration on verification projects</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Enterprise auditing pipelines</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="researchers" className="p-6 border rounded-lg mt-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Researchers</h3>
                    <p className="text-muted-foreground">
                      Academic and industry researchers running compute-heavy K proofs without local clusters.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Large-batch academic proofs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Language semantics research</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Experimental verification techniques</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get answers to common questions about KaaS and formal verification.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <FAQSection items={faqItems} />
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Still have questions?</p>
                <Link href="/contact">
                  <Button variant="outline">Contact Our Team</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Transform Your Verification Workflow?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with KaaS today and experience the power of cloud-based formal verification.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1.5">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline">
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <p className="text-sm text-muted-foreground">© 2025 Runtime Verification. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
