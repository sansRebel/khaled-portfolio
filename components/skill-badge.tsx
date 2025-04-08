"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.span
      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
      whileHover={{
        scale: 1.1,
        backgroundColor: "var(--primary)",
        color: "var(--primary-foreground)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {name}
    </motion.span>
  )
}
