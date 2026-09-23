"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import OsWindow from "@/components/os-window"

interface ProjectCardProps {
  title: string
  file: string
  description: string
  tags: string[]
  imageUrl: string
  url: string
  index?: number
}

export default function ProjectCard({ title, file, description, tags, imageUrl, url, index = 0 }: ProjectCardProps) {
  const tilt = index % 2 === 0 ? -1.5 : 1.5

  return (
    <motion.div
      initial={{ opacity: 0, y: 70, rotate: tilt * 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 110, damping: 15, delay: index * 0.08 }}
      whileHover={{ rotate: 0, y: -10, scale: 1.02 }}
      className="group h-full"
    >
      <OsWindow title={file} className="flex h-full flex-col" bodyClassName="flex flex-1 flex-col">
        <a href={url} target="_blank" rel="noopener noreferrer" className="relative block h-48 overflow-hidden border-b-2 border-[#4b515c]">
          <Image
            src={imageUrl}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="btn-gel gel-lime absolute bottom-3 right-3 inline-flex h-8 translate-y-3 items-center gap-1 px-3 font-pixel text-[10px] uppercase opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            Open <ArrowUpRight className="h-3 w-3" />
          </span>
        </a>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-display text-xl uppercase text-chrome">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span key={tag} className="bevel-out bg-secondary px-2 py-0.5 font-pixel text-[10px] uppercase text-y2k-silver">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-1 pt-3 font-pixel text-xs uppercase text-y2k-blue underline decoration-dotted underline-offset-4 hover:text-y2k-lime"
          >
            Visit site <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </OsWindow>
    </motion.div>
  )
}
