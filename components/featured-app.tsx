"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Smartphone } from "lucide-react"
import CdDisc from "@/components/cd-disc"
import AppPhone from "@/components/app-phone"

interface StoreLink {
  label: string
  href: string
  gel: string
}

interface Highlight {
  label: string
  text: string
}

interface FeaturedAppProps {
  title: string
  kicker: string
  description: string
  screenshot: string
  metrics: { value: string; label: string }[]
  highlights: Highlight[]
  tags: string[]
  links: StoreLink[]
}

export default function FeaturedApp({
  title,
  kicker,
  description,
  screenshot,
  metrics,
  highlights,
  tags,
  links,
}: FeaturedAppProps) {
  return (
    <div className="relative">
      <div className="grid items-center gap-14 md:grid-cols-[minmax(0,280px)_1fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -4 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="relative mx-auto w-[230px] sm:w-[260px]"
        >
          <CdDisc className="absolute -right-14 top-6 w-40" spinning />
          <AppPhone screenshot={screenshot} alt={`${title} app home screen`} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-left"
        >
          <span className="inline-block -rotate-3 bg-y2k-red px-2 py-1 font-pixel text-[11px] uppercase text-white shadow-md">
            ★ Shipped · Live on both stores
          </span>
          <h3 className="mt-5 font-display text-4xl uppercase text-chrome sm:text-5xl">{title}</h3>
          <p className="mt-3 flex items-center gap-2 font-pixel text-xs uppercase text-y2k-blue">
            <Smartphone className="h-4 w-4" /> {kicker}
          </p>
          <p className="mt-5 text-lg text-foreground/85">{description}</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="lcd bevel-in px-4 py-3"
              >
                <div className="font-pixel text-lg leading-none">{metric.value}</div>
                <div className="mt-2 font-pixel text-[10px] uppercase opacity-70">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-gel ${link.gel} inline-flex h-12 items-center gap-2 px-6 font-display text-xs uppercase tracking-wider`}
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* What it took */}
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 110, damping: 15, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="bevel-out bg-card p-5"
          >
            <span className="font-pixel text-[11px] uppercase text-y2k-lime">
              {String(i + 1).padStart(2, "0")} · {h.label}
            </span>
            <p className="mt-3 text-sm text-muted-foreground">{h.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="bevel-out bg-secondary px-2 py-0.5 font-pixel text-[10px] uppercase text-y2k-silver">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
