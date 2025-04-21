"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExpandableTextProps {
  children: React.ReactNode
  maxLength?: number
  className?: string
}

export function ExpandableText({ children, maxLength = 60, className = "" }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // If children is a string, handle it directly
  if (typeof children === "string") {
    const text = children as string
    const shouldTruncate = text.length > maxLength && !isExpanded

    return (
      <div className={`mt-2 ${className}`}>
        <span className="text-sm text-muted-foreground">
          {shouldTruncate ? `${text.substring(0, maxLength)}...` : text}
        </span>
        {text.length > maxLength && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-1 h-6 px-2 text-xs"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <span className="flex items-center">
                Show Less <ChevronUp className="ml-1 h-3 w-3" />
              </span>
            ) : (
              <span className="flex items-center">
                Read More <ChevronDown className="ml-1 h-3 w-3" />
              </span>
            )}
          </Button>
        )}
      </div>
    )
  }

  // For non-string children (React nodes)
  return (
    <div className={`mt-2 ${className}`}>
      {isExpanded ? (
        <div className="text-sm text-muted-foreground">{children}</div>
      ) : (
        <div className="text-sm text-muted-foreground">
          <span className="text-muted-foreground/80">Click to learn more...</span>
        </div>
      )}
      <Button variant="ghost" size="sm" className="mt-1 h-6 px-2 text-xs" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? (
          <span className="flex items-center">
            Show Less <ChevronUp className="ml-1 h-3 w-3" />
          </span>
        ) : (
          <span className="flex items-center">
            Read More <ChevronDown className="ml-1 h-3 w-3" />
          </span>
        )}
      </Button>
    </div>
  )
}
