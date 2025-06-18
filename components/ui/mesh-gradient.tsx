"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface MeshGradientProps {
  className?: string
}

export function MeshGradient({ className = "" }: MeshGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      draw()
    }

    const draw = () => {
      // Create smooth gradient with multiple color stops
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        0,
        0,
        canvas.width / 2,
        canvas.height,
        canvas.width
      )

      // Use fixed colors that work well in both themes
      const isDark = currentTheme === "dark"
      
      if (isDark) {
        // Dark mode colors
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.15)") // Indigo
        gradient.addColorStop(0.2, "rgba(139, 92, 246, 0.1)") // Violet
        gradient.addColorStop(0.4, "rgba(99, 102, 241, 0.08)") // Indigo
        gradient.addColorStop(0.6, "rgba(139, 92, 246, 0.05)") // Violet
        gradient.addColorStop(0.8, "rgba(99, 102, 241, 0.03)") // Indigo
        gradient.addColorStop(1, "transparent")
      } else {
        // Light mode colors
        gradient.addColorStop(0, "rgba(79, 70, 229, 0.12)") // Indigo
        gradient.addColorStop(0.2, "rgba(124, 58, 237, 0.08)") // Violet
        gradient.addColorStop(0.4, "rgba(79, 70, 229, 0.06)") // Indigo
        gradient.addColorStop(0.6, "rgba(124, 58, 237, 0.04)") // Violet
        gradient.addColorStop(0.8, "rgba(79, 70, 229, 0.02)") // Indigo
        gradient.addColorStop(1, "transparent")
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener("resize", resize)
    
    // Redraw when theme changes
    const observer = new MutationObserver(() => {
      draw()
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"]
    })

    return () => {
      window.removeEventListener("resize", resize)
      observer.disconnect()
    }
  }, [currentTheme])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}