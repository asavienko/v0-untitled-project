"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AdvancedTerminalProps {
  commands: string[]
  className?: string
  typingSpeed?: number
  initialDelay?: number
}

export function AdvancedTerminal({
  commands,
  className,
  typingSpeed = 50,
  initialDelay = 1000,
}: AdvancedTerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Start typing after initial delay
    const initialTimer = setTimeout(() => {
      // Start typing the first line
      startTyping()
    }, initialDelay)

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(cursorInterval)
    }
  }, [])

  useEffect(() => {
    // Scroll to bottom when content changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [displayedLines, currentLine])

  const startTyping = () => {
    if (lineIndex >= commands.length) return

    const currentCommand = commands[lineIndex]

    if (charIndex < currentCommand.length) {
      // Still typing the current line
      setCurrentLine(currentCommand.substring(0, charIndex + 1))
      setCharIndex(charIndex + 1)

      // Schedule next character
      setTimeout(startTyping, typingSpeed)
    } else {
      // Finished typing the current line
      setDisplayedLines([...displayedLines, currentLine])
      setCurrentLine("")
      setCharIndex(0)
      setLineIndex(lineIndex + 1)

      // Add a pause between lines
      setTimeout(startTyping, typingSpeed * 10)
    }
  }

  return (
    <div className={cn("terminal-window", className)}>
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <div className="ml-2 text-xs text-zinc-400 font-mono">kaas-cli</div>
      </div>
      <div ref={terminalRef} className="terminal-content overflow-auto max-h-[300px]">
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-1">
            <span className="text-emerald-500 mr-2">$</span>
            <span>{line}</span>
          </div>
        ))}
        {currentLine && (
          <div>
            <span className="text-emerald-500 mr-2">$</span>
            <span>{currentLine}</span>
            {showCursor && <span className="cursor">|</span>}
          </div>
        )}
      </div>
    </div>
  )
}
