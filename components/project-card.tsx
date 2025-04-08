"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  url: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, tags, imageUrl, url, githubUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -15,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white w-full">
              <p className="font-bold text-lg">{title}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs opacity-80">Click to view live project</p>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-4 flex justify-between items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline flex items-center gap-1 transition-transform hover:translate-x-1"
          >
            View Project <ArrowUpRight className="h-3 w-3" />
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
