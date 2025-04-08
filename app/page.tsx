"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactOptions from "@/components/contact-options"
import AnimatedSection from "@/components/animated-section"
import ParticleBackground from "@/components/particle-background"
import ExperienceTimeline from "@/components/experience-timeline"
import EducationSection from "@/components/education-section"

export default function Home() {
  // Project data with URLs
  const projects = [
    {
      title: "NextEndeavour",
      description: "An AI-powered web app that recommends personalized careers based on users' skills, interests, and experience. Built with a full-stack architecture and integrated with Dialogflow for intelligent suggestions.",
      tags: ["Next.js", "TypeScript", "Tailwind", "DaisyUI" , "Node.js", "MongoDB", "Dialogflow"],
      imageUrl: "/NextEndeavour.png",
      url: "https://nextendeavor.vercel.app", // Replace with actual live link
    },
    {
      title: "VerseVault",
      description: "A full-stack blog platform where users can register, post, edit, and delete blogs with image uploads, likes, and comments. Includes user profile management and secure authentication.",
      tags: ["Next.js", "TypeScript", "DaisyUI", "MongoDB", "Node.js", "Cloudinary"],
      imageUrl: "/VerseVault.png",
      url: "https://the-versevault.vercel.app", // Replace with actual live link
    },
  ];
  

  // Experience data
  const experiences = [
    {
      company: "RF Laiyon Interactive.",
      position: "Front end Developer Intern",
      period: "May 2024 - September 2024",
      description:
        "Worked on development of Textbook Ordering System for Schools under Malaysian Government (eSPBT). As well as a Public Malaysian Newsletter Website 'To ensure that the welfare of the majority of the people continues to be preserved', (Ihsan Madani).   ",
      technologies: ["React", "Next.js", "Typescript", "GIT", "Postman"],
    },

  ]

  // Education data
  const education = [
    {
      institution: "Asia Pacific University",
      degree: "Bachelors in Software Engineering",
      period: "2022 - 2025",
      description:
      "Final-year Software Engineering student with a focus on full-stack web development and AI integration. Final Year Project: 'NextEndeavor' – a career recommendation system using NLP.",
      // courses: ["Advanced Algorithms", "Machine Learning", "Software Architecture", "Cloud Computing"],
    },

  ]

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Particle Background */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10"></div>
        <AnimatedSection className="z-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 px-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4 animate-pulse-slow">
              <Image src="/Pic3.jpg" alt="Profile" fill className="object-cover" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-400 animate-gradient-x">Hello, I'm</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-400 animate-gradient-x">
                Khaled
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground">Full Stack Developer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I build digital experiences that are fast, accessible, functional, and responsive.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/80 backdrop-blur-sm px-6 font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Me
              </button>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to About section"
            className="bg-transparent border-none cursor-pointer"
          >
            <ArrowDown className="h-8 w-8 text-primary" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 bg-muted/30">
        <AnimatedSection>
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105 duration-500">
                <Image src="/Pic2.jpg" alt="About me" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">Your Name</p>
                    <p className="text-sm">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Who am I?</h3>
                <p className="text-muted-foreground">
                  I'm a Full Stack Developer with expertise in building modern web applications. With a
                  strong foundation in both frontend and backend technologies, I enjoy creating seamless digital experiences
                  that solve real-world problems.
                </p>
                <h3 className="text-2xl font-bold pt-4">My Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="TypeScript" />
                  <SkillBadge name="React" />
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="Express.js" />
                  <SkillBadge name="Tailwind CSS" />
                  <SkillBadge name="RESTful APIs" />
                  <SkillBadge name="MongoDB" />
                  <SkillBadge name="AWS" />
                  <SkillBadge name="Version control with Git" />
                </div>
                <h3 className="text-2xl font-bold pt-4">My Characteristics</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Willingness to Learn" />
                  <SkillBadge name="Adaptability" />
                  <SkillBadge name="Communication" />
                  <SkillBadge name="Critical Thinking" />
                  <SkillBadge name="Ambition" />
                  <SkillBadge name="English Fluency" />
                  <SkillBadge name="Resiliency" />

                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6">
        <AnimatedSection>
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Work <span className="text-primary">Experience</span>
            </h2>
            <ExperienceTimeline experiences={experiences} />
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 bg-muted/30">
        <AnimatedSection>
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              My <span className="text-primary">Projects</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageUrl={project.imageUrl}
                  url={project.url}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section id="education" className="py-20 px-4 sm:px-6 bg-background">
        <AnimatedSection>
          <div className="container mx-auto max-w-5xl flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              <span className="text-primary">Education</span> & Certifications
            </h2>
            <div className="w-full">
              <EducationSection education={education} />
            </div>
          </div>
        </AnimatedSection>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-muted/30">
        <AnimatedSection>
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out using any of the
              options below.
            </p>
            <ContactOptions phone="+60145239468" email="khaledalsinafi101@gmail.com" whatsapp="+60145239468" />
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
