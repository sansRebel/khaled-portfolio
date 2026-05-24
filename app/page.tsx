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
      title: "NurMart",
      description:
        "A full-stack mobile e-commerce platform developed from the ground up for an F&B Company. Built using Flutter and integrated with Odoo backend services, payment gateways, delivery provider APIs, authentication systems, and scalable REST APIs. Also involved CI/CD workflows, deployment preparation, testing, and production troubleshooting.",
      tags: [
        "Flutter",
        "Dart",
        "Odoo",
        "REST APIs",
        "CI/CD",
        "GitHub Actions",
        "Payment Integration",
        "Delivery APIs",
      ],
      imageUrl: "/NurMart.png",
      url: "#",
    },
    {
      title: "NextEndeavour",
      description:
        "An AI-powered web application that recommends personalized career paths based on users' skills, interests, and experience. Built with a full-stack architecture and integrated with Dialogflow for intelligent conversational recommendations.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "DaisyUI",
        "Node.js",
        "MongoDB",
        "Dialogflow",
      ],
      imageUrl: "/NextEndeavour.png",
      url: "https://nextendeavor.vercel.app",
    },
    {
      title: "VerseVault",
      description:
        "A full-stack blogging platform where users can create, edit, and manage blogs with image uploads, likes, comments, and secure authentication. Includes profile management and responsive UI design focused on user experience and scalability.",
      tags: [
        "Next.js",
        "TypeScript",
        "DaisyUI",
        "MongoDB",
        "Node.js",
        "Cloudinary",
      ],
      imageUrl: "/VerseVault.png",
      url: "https://the-versevault.vercel.app",
    },
    {
      title: "PropertyGalla",
      description:
        "A cloud-based property management platform featuring user and admin systems, property listings, reporting functionality, image uploads, and feedback management. Built with scalable infrastructure and full-stack architecture principles.",
      tags: [
        "Next.js",
        "TypeScript",
        ".NET MVC",
        "AWS EC2",
        "RDS",
        "PostgreSQL",
      ],
      imageUrl: "/PropertyGalla.png",
      url: "#",
    },
  ]
  

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
      "Frontend Focused Software Engineer with a focus on full-stack web development and AI integration. Final Year Project: 'NextEndeavor' – a career recommendation system using NLP.",
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
                  I'm a frontend-focused Software Engineer with hands-on experience building scalable web and mobile applications across SaaS, e-commerce, and enterprise systems. I specialize in creating modern, responsive user experiences using technologies like React, Next.js, TypeScript, and Flutter, while also working across backend integrations, APIs, deployment workflows, and production systems. I enjoy building products that solve real business problems and thrive in fast-paced environments where adaptability, ownership, and continuous learning matter.
                </p>
                <h3 className="text-2xl font-bold pt-4">My Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="React.js, Next.js, Vue.js, TypeScript, JavaScript (ES6+)" />
                  <SkillBadge name="Tailwind CSS, UI Libraries" />
                  <SkillBadge name="Jest" />
                  <SkillBadge name="UI/UX Principles, System Design" />
                  <SkillBadge name="Frontend Performance Optimization" />
                  <SkillBadge name="Flutter, Dart" />
                  <SkillBadge name="Node.js, Express.js, REST APIs" />
                  <SkillBadge name="Postman, AWS, Linux Environment" />
                  <SkillBadge name="MongoDB, PostgreSQL" />
                  <SkillBadge name="Odoo Development & Customization" />
                  <SkillBadge name="Debugging & Troubleshooting" />

                </div>
                <h3 className="text-2xl font-bold pt-4">My Characteristics</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Problem Solving" />
                  <SkillBadge name="Adaptability" />
                  <SkillBadge name="Communication" />
                  <SkillBadge name="Fast Learner" />
                  <SkillBadge name="Team Collaboration" />
                  <SkillBadge name="Ownership Mentality" />
                  <SkillBadge name="Critical Thinking" />

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
            <ContactOptions phone="+60129452506" email="khaledalsinafi101@gmail.com" whatsapp="+60129452506" />
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
