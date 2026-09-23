interface MarqueeProps {
  items: string[]
  className?: string
}

/** LCD-style scrolling ticker. */
export default function Marquee({ items, className = "" }: MarqueeProps) {
  const content = [...items, ...items]
  return (
    <div className={`lcd overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-flex animate-marquee">
        {content.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-4 font-pixel text-xs uppercase">
            {item}
            <span className="text-y2k-pink">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
