import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

const LINKS = [
  { href: "https://github.com/sansRebel", label: "GitHub", icon: Github, external: true },
  { href: "https://www.linkedin.com/in/khaled-al-sanafi-0251232a0/", label: "LinkedIn", icon: Linkedin, external: true },
  { href: "mailto:khaledalsinafi101@gmail.com", label: "Email", icon: Mail, external: false },
  { href: "/resume.pdf", label: "Resume", icon: FileText, external: true },
]

export default function Footer() {
  return (
    <footer className="brushed-metal bevel-out w-full px-4 py-4 sm:px-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-pixel text-[10px] uppercase text-[#2a2f38]">
          © {new Date().getFullYear()} Khaled Alsanafi · Best viewed at 1024×768
        </p>
        <div className="flex items-center gap-2">
          {LINKS.map(({ href, label, icon: Icon, external }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="brushed-metal bevel-out flex h-8 w-8 items-center justify-center text-[#14171c] transition-transform hover:-translate-y-0.5 active:translate-y-px"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
