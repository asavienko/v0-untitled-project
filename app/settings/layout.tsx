import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Account Settings - Runtime Verification",
  description: "Manage your account settings and preferences",
}

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
