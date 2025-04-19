"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"
import React from "react"

declare global {
  interface Window {
    openVaultModal?: () => void
  }
}

const neuButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "neu-button text-gray-800",
        primary: "flat-button bg-primary-600 hover:bg-primary-700 text-white",
        secondary: "flat-button bg-secondary-600 hover:bg-secondary-700 text-white",
        success: "flat-button bg-success-600 hover:bg-success-700 text-white",
        warning: "flat-button bg-warning-600 hover:bg-warning-700 text-white",
        danger: "flat-button bg-error-600 hover:bg-error-700 text-white",
        info: "flat-button bg-info-600 hover:bg-info-700 text-white",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
        link: "bg-transparent underline-offset-4 hover:underline text-primary-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface NeuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neuButtonVariants> {
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  openVaultModal?: boolean
}

const NeuButton = React.forwardRef<HTMLButtonElement, NeuButtonProps>(
  ({ className, variant, size, icon: Icon, iconPosition = "left", children, openVaultModal, ...props }, ref) => {
    return (
      <button
        className={cn(neuButtonVariants({ variant, size, className }), "transition-all duration-300")}
        ref={ref}
        onClick={(e) => {
          // If openVaultModal is true, directly call window.openVaultModal if it exists
          if (openVaultModal && typeof window !== "undefined") {
            // Set a global function that can be called from anywhere
            if (!window.openVaultModal) {
              window.openVaultModal = () => {
                // This will be replaced by the actual implementation in the parent component
                console.log("Open vault modal called")
              }
            }

            // Call the function
            window.openVaultModal()
          }

          // Make sure the onClick handler from props is called
          if (props.onClick) {
            props.onClick(e)
          }
        }}
        {...props}
      >
        {Icon && iconPosition === "left" && (
          <Icon className="mr-2" size={size === "sm" ? 14 : size === "lg" ? 20 : 16} />
        )}
        {children}
        {Icon && iconPosition === "right" && (
          <Icon className="ml-2" size={size === "sm" ? 14 : size === "lg" ? 20 : 16} />
        )}
      </button>
    )
  },
)
NeuButton.displayName = "NeuButton"

export { NeuButton, neuButtonVariants }
