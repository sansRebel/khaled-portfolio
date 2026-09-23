interface CdDiscProps {
  className?: string
  label?: string
  spinning?: boolean
}

/** Burned CD-R with an optional Sharpie label. */
export default function CdDisc({ className = "", label, spinning = false }: CdDiscProps) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <div className={`cd-disc h-full w-full ${spinning ? "animate-spin-slow" : ""}`} />
      {label && (
        <span className="absolute left-1/2 top-[70%] -translate-x-1/2 whitespace-nowrap font-marker text-[11px] leading-none text-[#1b1d6b] -rotate-6 drop-shadow-[0_1px_0_rgba(255,255,255,0.7)]">
          {label}
        </span>
      )}
    </div>
  )
}
