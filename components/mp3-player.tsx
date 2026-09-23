"use client"

import { useEffect, useState } from "react"
import { Play, Pause, Square, SkipBack, SkipForward } from "lucide-react"

const BARS = 18

/** Decorative early-2000s MP3 player skin with an animated spectrum. */
export default function Mp3Player({ track }: { track: string }) {
  const [playing, setPlaying] = useState(true)
  const [seconds, setSeconds] = useState(194)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setSeconds((s) => (s + 1) % 3600), 1000)
    return () => clearInterval(id)
  }, [playing])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  const controls = [
    { icon: SkipBack, label: "Previous", onClick: () => setSeconds(0) },
    { icon: Play, label: "Play", onClick: () => setPlaying(true) },
    { icon: Pause, label: "Pause", onClick: () => setPlaying(false) },
    {
      icon: Square,
      label: "Stop",
      onClick: () => {
        setPlaying(false)
        setSeconds(0)
      },
    },
    { icon: SkipForward, label: "Next", onClick: () => setSeconds((s) => s + 30) },
  ]

  return (
    <div className="brushed-metal bevel-out w-full max-w-md p-2 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.8)]">
      <div className="titlebar mb-2 flex items-center justify-between px-2 py-0.5">
        <span className="font-pixel text-[10px] text-white">KHALED_AMP v2.0</span>
        <span className="font-pixel text-[10px] text-white/80">128kbps · 44kHz</span>
      </div>

      <div className="lcd bevel-in grid grid-cols-[auto_1fr] gap-3 p-2">
        <div className="flex flex-col justify-between">
          <span className="font-pixel text-2xl leading-none">
            {mm}
            <span className={playing ? "animate-blink" : ""}>:</span>
            {ss}
          </span>
          <span className="font-pixel text-[9px] opacity-70">{playing ? "▶ PLAYING" : "❚❚ PAUSED"}</span>
        </div>
        <div className="flex h-12 items-end gap-[3px]" aria-hidden="true">
          {Array.from({ length: BARS }).map((_, i) => (
            <span
              key={i}
              className={`spectrum-bar w-full ${playing ? "animate-eq" : ""}`}
              style={{
                height: `${35 + ((i * 37) % 60)}%`,
                animationDelay: `${(i % 6) * 0.11}s`,
                animationDuration: `${0.6 + (i % 4) * 0.15}s`,
                transform: playing ? undefined : "scaleY(0.15)",
                transformOrigin: "bottom",
              }}
            />
          ))}
        </div>
        <div className="col-span-2 overflow-hidden whitespace-nowrap border-t border-y2k-lime/20 pt-1">
          <div className="inline-flex animate-marquee-fast">
            <span className="px-4 font-pixel text-[11px]">{track} ***</span>
            <span className="px-4 font-pixel text-[11px]">{track} ***</span>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-1">
        {controls.map(({ icon: Icon, label, onClick }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            onClick={onClick}
            className="brushed-metal bevel-out flex h-6 w-8 items-center justify-center active:translate-y-px"
          >
            <Icon className="h-3 w-3 fill-current" />
          </button>
        ))}
        <div className="bevel-in ml-2 h-2 flex-1 bg-[#1a1d24]">
          <div
            className="h-full bg-gradient-to-r from-y2k-blue to-y2k-lime transition-[width] duration-1000 ease-linear"
            style={{ width: `${((seconds % 300) / 300) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
