"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap, BookOpen } from "lucide-react"

interface Education {
  institution: string
  degree: string
  period: string
  description: string
  // courses: string[]
}

interface EducationSectionProps {
  education: Education[]
}

export default function EducationSection({ education }: EducationSectionProps) {
  const isSingle = education.length === 1;

  return (
    <div
      className={
        isSingle
          ? "flex justify-center"
          : "grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center"
      }
    >
      {education.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            y: -10,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          className="bg-card rounded-lg overflow-hidden shadow-md border border-border/50 group w-full max-w-md"
        >
          <div className="h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold">{item.degree}</h3>
            <h4 className="text-lg font-medium text-primary">{item.institution}</h4>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <Calendar className="h-3 w-3" />
              <span>{item.period}</span>
            </div>
            <p className="mt-4 text-muted-foreground">{item.description}</p>

            <div className="mt-6">
              {/* <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <h5 className="font-medium">Key Courses</h5>
              </div> */}
              {/* <ul className="space-y-1">
                {item.courses.map((course, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70 flex-shrink-0"></span>
                    {course}
                  </motion.li>
                ))}
              </ul> */}
            </div>

            <motion.div
              className="w-12 h-1 bg-primary/50 rounded-full mt-6 group-hover:w-full transition-all duration-500"
              initial={{ width: "3rem" }}
              whileHover={{ width: "100%" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
