interface SparkleStarProps {
  className?: string
  size?: number
  delay?: number
  fill?: string
}

/** Four-point Y2K twinkle star. */
export default function SparkleStar({ className = "", size = 28, delay = 0, fill = "url(#sparkleGrad)" }: SparkleStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`animate-twinkle pointer-events-none ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sparkleGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#dcefff" />
          <stop offset="75%" stopColor="#ffc6f5" />
          <stop offset="100%" stopColor="#b5ecff" />
        </linearGradient>
      </defs>
      <path
        d="M50 0 C53 35 65 47 100 50 C65 53 53 65 50 100 C47 65 35 53 0 50 C35 47 47 35 50 0 Z"
        fill={fill}
      />
    </svg>
  )
}
