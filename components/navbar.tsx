"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import CdDisc from "@/components/cd-disc"

const NAV_LINKS = [
  { label: "Work", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3 sm:px-6">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 18 }}
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full px-3 transition-all duration-300 sm:px-4 ${
          isScrolled
            ? "border border-white/20 bg-[#10131a]/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <CdDisc className="w-7" spinning />
          <span className="font-display text-sm uppercase tracking-wider text-chrome">Khaled</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="group relative rounded-full px-3 py-1.5 font-pixel text-[11px] uppercase text-y2k-silver transition-colors hover:text-white"
            >
              <span className="absolute inset-0 scale-75 rounded-full bg-white/10 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </nav>

        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gel gel-blue hidden h-9 items-center px-5 font-display text-[10px] uppercase tracking-wider md:inline-flex"
        >
          Resume
        </motion.a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-full text-y2k-silver md:hidden"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-white/15 bg-[#10131a]/95 p-3 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="rounded-lg px-3 py-2 text-left font-pixel text-sm uppercase text-y2k-silver hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gel gel-blue mt-2 flex h-10 items-center justify-center font-display text-xs uppercase tracking-wider"
            >
              Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
