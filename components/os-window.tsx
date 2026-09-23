import type React from "react"

interface OsWindowProps {
  title: string
  children: React.ReactNode
  className?: string
  bodyClassName?: string
  active?: boolean
}

/** A beveled, circa-2000 desktop window: silver frame, gradient title bar, dark body. */
export default function OsWindow({ title, children, className = "", bodyClassName = "", active = true }: OsWindowProps) {
  return (
    <div className={`brushed-metal bevel-out p-[3px] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.8)] ${className}`}>
      <div className={`${active ? "titlebar" : "titlebar-inactive"} flex items-center justify-between gap-2 px-2 py-1`}>
        <span className="truncate font-pixel text-[11px] text-white">{title}</span>
        <div className="flex gap-[3px]" aria-hidden="true">
          {["_", "□", "×"].map((glyph) => (
            <span
              key={glyph}
              className="brushed-metal bevel-out flex h-4 w-4 items-center justify-center text-[10px] font-bold leading-none"
            >
              {glyph}
            </span>
          ))}
        </div>
      </div>
      <div className={`bevel-in bg-card text-card-foreground ${bodyClassName}`}>{children}</div>
    </div>
  )
}
