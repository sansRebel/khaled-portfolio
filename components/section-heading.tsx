"use client"

import { motion } from "framer-motion"
import SparkleStar from "@/components/sparkle-star"

interface SectionHeadingProps {
  track: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ track, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14 flex flex-col items-center text-center">
      <motion.span
        initial={{ opacity: 0, rotate: -12, scale: 0.6 }}
        whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
        className="mb-3 font-marker text-xl text-y2k-pink"
      >
        track {track}
      </motion.span>
      <div className="relative">
        <SparkleStar className="absolute -left-10 -top-4" size={26} />
        <h2 className="font-display text-3xl uppercase tracking-wide text-chrome sm:text-5xl">{title}</h2>
        <SparkleStar className="absolute -right-9 bottom-0" size={18} delay={1.2} />
      </div>
      {subtitle && <p className="mt-4 max-w-xl text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
