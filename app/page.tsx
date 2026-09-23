"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, ArrowUpRight } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactOptions from "@/components/contact-options"
import ExperienceTimeline from "@/components/experience-timeline"
import Marquee from "@/components/marquee"
import SectionHeading from "@/components/section-heading"
import SparkleStar from "@/components/sparkle-star"
import Mp3Player from "@/components/mp3-player"
import FeaturedApp from "@/components/featured-app"

const NURMART_APP_STORE = "https://apps.apple.com/my/app/nurmart/id6760921459"
const NURMART_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.deltagulf.nurmart"

const projects = [
  {
    title: "NextEndeavour",
    file: "nextendeavour.htm",
    description: "NLP chatbot that maps a user's skills and interests to real career paths through custom Dialogflow intents.",
    tags: ["Next.js", "Node.js", "Dialogflow"],
    imageUrl: "/NextEndeavour.png",
    url: "https://nextendeavor.vercel.app",
  },
  {
    title: "VerseVault",
    file: "versevault.htm",
    description: "Blogging platform with authentication, post editing, image uploads, likes, and comments over REST APIs.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Cloudinary"],
    imageUrl: "/VerseVault.png",
    url: "https://the-versevault.vercel.app",
  },
]

const experiences = [
  {
    company: "Nurmart",
    file: "C:\\WORK\\nurmart.exe",
    discLabel: "nurmart '26",
    position: "Software Engineer",
    period: "Jan 2026 – Present",
    location: "Kuala Lumpur",
    summary: "Technical owner of the company's mobile commerce platform, from first commit to live production.",
    links: [
      { label: "App Store", href: NURMART_APP_STORE, gel: "gel-blue" },
      { label: "Google Play", href: NURMART_PLAY_STORE, gel: "gel-lime" },
    ],
    bullets: [
      {
        label: "Mobile app",
        text: "Built the iOS and Android app from scratch in Flutter, shipping the full commerce journey: accounts, catalog, search, cart, checkout, orders, promotions, and loyalty.",
      },
      {
        label: "Backend",
        text: "Designed the API layer between the app and Odoo ERP, serving a catalog of 3,000+ products with multi-branch inventory, orders, promotions, and loyalty.",
      },
      {
        label: "ERP",
        text: "Extended Odoo modules and workflows in Python so app orders flow straight into inventory and fulfilment.",
      },
      {
        label: "Integrations",
        text: "Connected Fiuu payments, Lalamove delivery, Google Maps, and Apple and Google sign-in into one flow from search to doorstep.",
      },
      {
        label: "Infrastructure",
        text: "Built GitHub Actions CI/CD, ran Linux deployments, and owned production incidents across the whole stack.",
      },
      {
        label: "Launch",
        text: "Took the app through App Store and Google Play approval to soft launch, owning testing, builds, and signing.",
      },
      {
        label: "Data-driven iteration",
        text: "Instrumented the app with Firebase Crashlytics and Google Analytics, using crash and user behaviour data to prioritise fixes and keep improving the product.",
      },
      {
        label: "Business impact",
        text: "Turned retail, payment, and delivery requirements from management into shipped features.",
      },
      {
        label: "AI engineering",
        text: "Builds with Claude Code and Cursor, routing work between frontier and open-weight models to balance output quality against cost, with every generated change reviewed and tested before release.",
      },
    ],
    technologies: ["Flutter", "Dart", "Odoo", "Python", "GitHub Actions", "Linux", "Firebase", "Claude Code"],
  },
  {
    company: "RF Laiyon Interactive",
    file: "C:\\WORK\\rf_laiyon.exe",
    discLabel: "rf laiyon '24",
    position: "Frontend Developer",
    period: "Apr 2024 – Sep 2024",
    location: "Cyberjaya",
    summary: "Six-month full-time placement building national government platforms used across Malaysia.",
    bullets: [
      {
        label: "National scale",
        text: "Delivered production features for eSPBT, the system Malaysian government schools use to order textbooks nationwide, taking UI work from sprint ticket to release.",
      },
      {
        label: "Public sector",
        text: "Built and maintained Ihsan Madani, a national platform giving citizens visibility into social welfare programs.",
      },
      {
        label: "Component architecture",
        text: "Engineered reusable, accessible React and TypeScript components on Chakra UI, wired to backend REST APIs and shared across product modules.",
      },
      {
        label: "API contracts",
        text: "Defined and validated API contracts with backend engineers in Postman, catching integration issues before they reached production.",
      },
      {
        label: "Team delivery",
        text: "Full member of a cross-functional Agile team in weekly sprints, from planning to peer code review.",
      },
    ],
    technologies: ["React", "TypeScript", "Chakra UI", "REST APIs", "Postman", "Agile"],
  },
]

const education = [
  {
    institution: "Asia Pacific University",
    degree: "BSc (Hons) Software Engineering",
    period: "2022 – 2025 · Kuala Lumpur",
    description: "Final Year Project: NextEndeavour, an NLP career recommendation chatbot built on Dialogflow.",
  },
]

const skillGroups = [
  { label: "Languages", skills: ["TypeScript", "JavaScript", "Dart", "Python", "C#", "SQL"] },
  { label: "Mobile & Frontend", skills: ["Flutter", "React", "Next.js", "Tailwind CSS", "Chakra UI"] },
  { label: "Backend & ERP", skills: ["Node.js", "Express.js", ".NET MVC", "REST APIs", "OAuth", "Odoo"] },
  { label: "Data & Cloud", skills: ["PostgreSQL", "MongoDB", "AWS EC2", "Elastic Beanstalk", "RDS", "Linux"] },
  { label: "DevOps & Testing", skills: ["GitHub Actions", "CI/CD", "Jest", "Postman", "Git"] },
  { label: "Monitoring & Analytics", skills: ["Firebase Crashlytics", "Google Analytics"] },
  { label: "AI Engineering", skills: ["Claude Code", "Cursor", "Frontier & Open-Weight LLMs", "Cost-Aware Model Routing"] },
]

const spokenLanguages = ["Arabic · Native", "English · Fluent", "Spanish · Basic"]

const stats = [
  { value: "iOS · Android · Web", label: "Platforms shipped" },
  { value: "End to end", label: "App · API · ERP · infra" },
  { value: "National scale", label: "Gov platforms in Malaysia" },
]

const tickerItems = [
  "Khaled Alsanafi · Software Engineer",
  "Mobile & Full-Stack",
  "Flutter",
  "Next.js",
  "Odoo ERP",
  "Live on App Store & Google Play",
  "AI-native",
  "CI/CD",
  "Kuala Lumpur",
  "Open to opportunities",
]

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 16 } },
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-20 pt-28">
        <SparkleStar className="absolute left-[6%] top-32" size={40} />
        <SparkleStar className="absolute right-[45%] top-24 hidden md:block" size={22} delay={0.7} />
        <SparkleStar className="absolute bottom-40 left-[40%]" size={30} delay={1.4} />
        <SparkleStar className="absolute bottom-32 right-[8%]" size={46} delay={0.3} />

        <div className="container relative mx-auto max-w-6xl px-4">
          <motion.div style={{ y: textY }} variants={heroContainer} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
            <motion.p variants={heroItem} className="flex items-center justify-center gap-2 font-pixel text-xs uppercase text-y2k-lime">
              <span className="inline-block h-2 w-2 animate-blink rounded-full bg-y2k-lime" />
              Now playing · Kuala Lumpur, MY
            </motion.p>

            <motion.h1
              variants={heroItem}
              className="mt-5 font-display uppercase leading-[1.02] text-chrome text-[11vw] sm:text-6xl lg:text-7xl"
            >
              Khaled
              <br />
              Alsanafi
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-4 inline-block -rotate-2 font-marker text-xl text-y2k-pink sm:text-2xl"
            >
              software engineer — <span className="whitespace-nowrap">mobile &amp; full-stack</span>
            </motion.p>

            <motion.p variants={heroItem} className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              I take products from architecture to production and own every layer in between — the apps people
              use, the services and systems behind them, and the infrastructure that ships them and keeps them
              running. Shipped to public app stores and to platforms used nationwide.
            </motion.p>

            <motion.div variants={heroItem} className="mt-7 flex flex-wrap justify-center gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="lcd bevel-in px-3 py-2">
                  <div className="font-pixel text-base leading-none">{stat.value}</div>
                  <div className="mt-1 font-pixel text-[9px] uppercase opacity-70">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={heroItem} className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="btn-gel gel-blue h-12 px-7 font-display text-xs uppercase tracking-wider"
              >
                View my work
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gel gel-silver inline-flex h-12 items-center px-7 font-display text-xs uppercase tracking-wider"
              >
                Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="btn-gel gel-tangerine h-12 px-7 font-display text-xs uppercase tracking-wider"
              >
                Book now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 border-y-2 border-[#4b515c]">
          <Marquee items={tickerItems} className="py-2.5" />
        </div>
      </section>

      {/* ================= SINGLES & B-SIDES ================= */}
      <section id="projects" className="relative px-4 py-28 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            track="02"
            title="Shipped Work"
            subtitle="The product I own end to end, and the projects I built on my own time."
          />

          <FeaturedApp
            title="Nurmart"
            kicker="Mobile commerce · iOS & Android"
            description="The mobile commerce app I built from scratch as Nurmart's sole engineer and took through App Store and Google Play approval to launch."
            metrics={[
              { value: "3,000+", label: "Products in catalog" },
              { value: "iOS + Android", label: "Both stores, solo" },
              { value: "End to end", label: "App, API, ERP, infra" },
            ]}
            highlights={[
              {
                label: "The app",
                text: "Built the iOS and Android app from scratch in Flutter: accounts, catalog, search, cart, checkout, orders, promotions, and loyalty.",
              },
              {
                label: "The backend",
                text: "Designed the API layer between the app and Odoo ERP, serving 3,000+ products with multi-branch inventory, and extended Odoo modules in Python.",
              },
              {
                label: "The launch",
                text: "Integrated Fiuu payments, Lalamove delivery, Google Maps and Apple/Google sign-in, ran GitHub Actions CI/CD, and took it through both stores to soft launch.",
              },
            ]}
            tags={["Flutter", "Dart", "Odoo", "Python", "GitHub Actions", "Firebase"]}
            screenshot="/nurmart-home.png"
            links={[
              { label: "App Store", href: NURMART_APP_STORE, gel: "gel-blue" },
              { label: "Google Play", href: NURMART_PLAY_STORE, gel: "gel-lime" },
            ]}
          />

          <div className="mt-28 flex items-center gap-4">
            <span className="font-marker text-3xl text-y2k-tangerine">b-sides</span>
            <span className="h-[2px] flex-1 bg-gradient-to-r from-[#4b515c] to-transparent" />
          </div>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <motion.a
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/sansRebel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gel gel-silver inline-flex h-11 items-center gap-2 px-6 font-display text-[11px] uppercase tracking-wider"
            >
              <Github className="h-4 w-4" /> More on GitHub <ArrowUpRight className="h-3 w-3" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* ================= DISCOGRAPHY ================= */}
      <section id="experience" className="relative px-4 py-28 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            track="03"
            title="Experience"
            subtitle="Two roles, in full. Hover a disc to give it a spin."
          />
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      {/* ================= BIO ================= */}
      <section id="about" className="relative px-4 py-28 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading track="04" title="About Me" />
          <div className="grid items-start gap-14 md:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col items-center gap-12">
              <motion.div
                initial={{ opacity: 0, rotate: -14, y: 40 }}
                whileInView={{ opacity: 1, rotate: -4, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 100, damping: 12 }}
                className="relative w-full max-w-xs"
              >
                <div className="bg-white p-3 pb-12 shadow-2xl">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/about-photo.jpg" alt="Khaled Alsanafi" fill className="object-cover" />
                  </div>
                  <p className="mt-3 text-center font-marker text-lg text-[#1b1d6b]">khaled ★ kuala lumpur</p>
                </div>
                <div className="absolute -top-3 left-8 h-6 w-20 -rotate-6 bg-[#fff6b5]/80 shadow-sm" />
                <div className="absolute -top-2 right-6 h-6 w-16 rotate-12 bg-[#b5ecff]/80 shadow-sm" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full max-w-sm"
              >
                <Mp3Player track="01. Khaled Alsanafi - Mobile & Full-Stack (Radio Edit).mp3" />
              </motion.div>
            </div>

            <div className="text-left">
              <h3 className="font-marker text-3xl text-y2k-tangerine">liner notes</h3>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  I&apos;m a software engineer who works across the whole stack of a product: the mobile app, the
                  web front end, the APIs and ERP layer behind them, and the pipelines and servers they run on. I
                  like owning a feature from the requirement through to the release that puts it in front of
                  people.
                </p>
                <p>
                  Most recently that meant taking a mobile commerce platform from first commit to both app stores
                  as its sole engineer — Flutter on the front, Odoo and REST APIs behind it, payments and delivery
                  wired in, CI/CD and Linux underneath.
                </p>
                <p>
                  Before that I shipped features on national government platforms used across Malaysia. These days I work
                  AI-native, routing between frontier and open-weight models to ship faster at lower cost, and I
                  review and test every generated change before it goes out.
                </p>
              </div>


              <div className="mt-8 flex items-center gap-4 bevel-out bg-card p-4">
                <div className="iridescent-foil h-10 w-10 shrink-0 rounded-md shadow-inner" aria-hidden="true" />
                <div>
                  <p className="font-pixel text-[11px] uppercase text-y2k-blue">Education</p>
                  <p className="mt-1.5 text-sm text-foreground/85">
                    BSc (Hons) Software Engineering — Asia Pacific University, Kuala Lumpur · 2022–2025
                  </p>
                </div>
              </div>
              <div className="mt-8 space-y-5">
                {skillGroups.map((group, gi) => (
                  <motion.div
                    key={group.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gi * 0.05 }}
                  >
                    <h4 className="mb-2 font-pixel text-[11px] uppercase text-y2k-blue">{group.label}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <SkillBadge key={skill} name={skill} />
                      ))}
                    </div>
                  </motion.div>
                ))}
                <div>
                  <h4 className="mb-2 font-pixel text-[11px] uppercase text-y2k-blue">Spoken languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {spokenLanguages.map((lang) => (
                      <SkillBadge key={lang} name={lang} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOK THE SHOW ================= */}
      <section id="contact" className="relative px-4 pb-32 pt-28 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            track="05"
            title="Book the Show"
            subtitle="Got a project in mind or an opportunity to talk about? Grab a ticket."
          />
          <ContactOptions phone="+60 12-945 2506" email="khaledalsinafi101@gmail.com" whatsapp="+60129452506" />
        </div>
      </section>
    </main>
  )
}
