"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 500, damping: 22 }}
      className="brushed-metal bevel-out inline-block cursor-default px-2.5 py-1 font-pixel text-[10px] uppercase"
    >
      {name}
    </motion.span>
  )
}
