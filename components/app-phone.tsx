"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SparkleStar from "@/components/sparkle-star"

interface AppPhoneProps {
  screenshot: string
  alt: string
  className?: string
  priority?: boolean
}

/** Silver phone mockup holding a live app screenshot. */
export default function AppPhone({ screenshot, alt, className = "", priority = false }: AppPhoneProps) {
  return (
    <motion.div
      whileHover={{ rotate: 0, y: -8 }}
      transition={{ type: "spring", stiffness: 140, damping: 14 }}
      className={`relative ${className}`}
    >
      <SparkleStar className="absolute -left-7 top-8 z-20" size={30} />
      <SparkleStar className="absolute -right-5 bottom-20 z-20" size={20} delay={0.9} />
      <div className="relative z-10 rounded-[2.4rem] bg-gradient-to-b from-[#eef1f5] via-[#9aa3ae] to-[#d7dce2] p-[6px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]">
        <div className="rounded-[2rem] bg-black p-[6px]">
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <Image src={screenshot} alt={alt} width={529} height={1080} className="h-auto w-full" priority={priority} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
