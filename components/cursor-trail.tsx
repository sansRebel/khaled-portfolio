"use client"

import { useEffect, useRef } from "react"

const GLYPHS = ["✦", "✧", "★", "✦", "♪"]
const COLORS = ["#ffffff", "#ffc6f5", "#b5ecff", "#c6ffe0", "#fff6b5", "#dcefff"]

export default function CursorTrail() {
  const lastSpawn = useRef(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const handleMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastSpawn.current < 60) return
      lastSpawn.current = now

      const el = document.createElement("span")
      el.className = "sparkle"
      el.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
      el.style.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      el.style.fontSize = `${9 + Math.random() * 10}px`
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 950)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return null
}
