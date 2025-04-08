"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase } from "lucide-react"

interface Experience {
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 hidden md:block"></div>

      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center hidden md:flex">
            <Briefcase className="h-4 w-4 text-primary" />
          </div>

          {/* Content */}
          <div className="md:w-1/2 pl-10 md:pl-0 md:pr-12 md:text-right relative">
            {/* Mobile dot */}
            <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center md:hidden">
              <Briefcase className="h-3 w-3 text-primary" />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <h3 className="text-xl font-bold">{experience.position}</h3>
              <h4 className="text-lg font-medium text-primary">{experience.company}</h4>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1 md:justify-end">
                <Calendar className="h-3 w-3" />
                <span>{experience.period}</span>
              </div>
              <p className="mt-4 text-muted-foreground">{experience.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Empty space for alternating layout */}
          <div className="hidden md:block md:w-1/2"></div>
        </motion.div>
      ))}
    </div>
  )
}
