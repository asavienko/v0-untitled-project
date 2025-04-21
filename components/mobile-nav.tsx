"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-0 w-10 h-10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 px-2 py-6">
          <div className="flex items-center gap-2">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <span className="text-xl font-bold">KaaS</span>
            </Link>
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="#what-is-k" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-primary">
              What is K?
            </Link>
            <Link href="#features" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#benefits" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-primary">
              Benefits
            </Link>
            <Link href="#pricing" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#use-cases" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-primary">
              Use Cases
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-primary"
            >
              Testimonials
            </Link>
            <Link href="#faq" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full">
                Log In
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setOpen(false)}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
