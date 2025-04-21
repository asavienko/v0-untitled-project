"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CSS3DVisualizationProps {
  className?: string
}

export function CSS3DVisualization({ className }: CSS3DVisualizationProps) {
  const [isAnimating, setIsAnimating] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the window
      const x = (e.clientX - window.innerWidth / 2) / 50
      const y = (e.clientY - window.innerHeight / 2) / 50
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className={cn("relative w-full h-[300px] md:h-[350px] overflow-hidden rounded-xl", className)}
      onClick={() => setIsAnimating(!isAnimating)}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background"></div>

      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg"></div>

      {/* Server cube */}
      <div
        className={cn(
          "absolute w-24 h-32 left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
          "server-cube",
          isAnimating && "animate-server-rotate",
        )}
        style={{
          transform: `translate(-50%, -50%) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        }}
      >
        <div className="cube-face cube-face-front"></div>
        <div className="cube-face cube-face-back"></div>
        <div className="cube-face cube-face-right"></div>
        <div className="cube-face cube-face-left"></div>
        <div className="cube-face cube-face-top"></div>
        <div className="cube-face cube-face-bottom"></div>
      </div>

      {/* K Framework sphere */}
      <div
        className={cn(
          "absolute w-28 h-28 right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2",
          "k-sphere",
          isAnimating && "animate-pulse-slow",
        )}
      ></div>

      {/* Connection line */}
      <div className="absolute left-1/4 right-1/4 top-1/2 h-0.5 bg-primary/20 transform -translate-y-1/2"></div>

      {/* Data cubes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className={cn("absolute w-4 h-4 data-cube", isAnimating && `animate-float-${(i % 4) + 1}`)}
          style={{
            left: `${30 + (i % 4) * 10}%`,
            top: `${30 + Math.floor(i / 4) * 30}%`,
            animationDelay: `${i * 0.2}s`,
            backgroundColor:
              i % 3 === 0
                ? "rgba(59, 130, 246, 0.5)"
                : i % 3 === 1
                  ? "rgba(52, 211, 153, 0.5)"
                  : "rgba(167, 139, 250, 0.5)",
          }}
        ></div>
      ))}

      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={cn("absolute w-1 h-1 rounded-full bg-primary/30", isAnimating && "animate-particle")}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 7}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* Overlay text */}
      <div className="absolute bottom-4 left-4 text-xs text-primary/70 font-mono">KaaS Verification Network</div>
    </div>
  )
}
