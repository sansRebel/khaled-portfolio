"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import CdDisc from "@/components/cd-disc"
import OsWindow from "@/components/os-window"

interface Bullet {
  label: string
  text: string
}

interface ExperienceLink {
  label: string
  href: string
  gel: string
}

interface Experience {
  company: string
  file: string
  discLabel: string
  position: string
  period: string
  location?: string
  summary: string
  bullets: Bullet[]
  technologies: string[]
  links?: ExperienceLink[]
}

export default function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="space-y-14">
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.company}
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 90, damping: 16 }}
          className="group"
        >
          <OsWindow title={experience.file} bodyClassName="grid gap-6 p-6 md:grid-cols-[150px_1fr] md:gap-8 md:p-8">
            <div className="flex flex-col items-center gap-3">
              <motion.div
                initial={{ rotate: -120, x: -40, opacity: 0 }}
                whileInView={{ rotate: 0, x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
                className="w-32 md:w-36"
              >
                <div className="transition-transform duration-1000 ease-out group-hover:rotate-[540deg]">
                  <CdDisc label={experience.discLabel} />
                </div>
              </motion.div>
              <span className="font-pixel text-[10px] uppercase text-muted-foreground">{experience.period}</span>
            </div>

            <div className="text-left">
              <h3 className="font-display text-2xl uppercase text-chrome">{experience.position}</h3>
              <p className="mt-1 font-marker text-xl text-y2k-tangerine">
                {experience.company}
                {experience.location && <span className="text-muted-foreground"> — {experience.location}</span>}
              </p>

              {experience.links && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {experience.links.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`btn-gel ${link.gel} inline-flex h-8 items-center gap-1 px-4 font-pixel text-[10px] uppercase`}
                    >
                      {link.label} <ArrowUpRight className="h-3 w-3" />
                    </motion.a>
                  ))}
                </div>
              )}

              <p className="mt-4 text-sm italic text-foreground/80">{experience.summary}</p>

              <ol className="mt-4 space-y-2.5">
                {experience.bullets.map((bullet, idx) => (
                  <motion.li
                    key={bullet.label}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span className="shrink-0 font-pixel text-y2k-lime">{String(idx + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="font-semibold text-foreground">{bullet.label}.</span> {bullet.text}
                    </span>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="bevel-out bg-secondary px-2 py-0.5 font-pixel text-[10px] uppercase text-y2k-silver">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </OsWindow>
        </motion.div>
      ))}
    </div>
  )
}
