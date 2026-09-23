"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle } from "lucide-react"

interface ContactOptionsProps {
  phone: string
  email: string
  whatsapp: string
}

export default function ContactOptions({ phone, email, whatsapp }: ContactOptionsProps) {
  const tickets = [
    {
      title: "Call Me",
      detail: phone,
      icon: Phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
      stripe: "bg-y2k-red",
      seat: "Row A · Seat 01",
      tilt: -3,
    },
    {
      title: "Email Me",
      detail: email,
      icon: Mail,
      href: `mailto:${email}`,
      stripe: "bg-[#1c64b8]",
      seat: "Row A · Seat 02",
      tilt: 1.5,
    },
    {
      title: "WhatsApp",
      detail: "Chat with me",
      icon: MessageCircle,
      href: `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`,
      stripe: "bg-[#3a9a1f]",
      seat: "Row A · Seat 03",
      tilt: -1.5,
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {tickets.map((t, i) => (
        <motion.a
          key={t.title}
          href={t.href}
          target={t.href.startsWith("http") ? "_blank" : undefined}
          rel={t.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 60, rotate: t.tilt * 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: t.tilt }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 120, damping: 13, delay: i * 0.1 }}
          whileHover={{ rotate: 0, y: -10, scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="ticket-paper ticket-notch relative block overflow-hidden rounded-md text-left shadow-[0_20px_40px_-12px_rgba(0,0,0,0.9)]"
        >
          <div className={`${t.stripe} flex items-center justify-between px-4 py-2 text-white`}>
            <span className="font-pixel text-[10px] uppercase">Khaled Alsanafi · Live</span>
            <t.icon className="h-4 w-4" />
          </div>
          <div className="px-5 pb-3 pt-4">
            <h3 className="font-display text-lg uppercase">{t.title}</h3>
            <p className="mt-1 truncate font-marker text-base text-[#1c64b8]">{t.detail}</p>
          </div>
          <div className="mx-4 border-t-2 border-dashed border-[#1b1b1b]/30" />
          <div className="flex items-end justify-between px-5 pb-4 pt-3">
            <div>
              <p className="font-pixel text-[10px] uppercase">Admit One</p>
              <p className="font-pixel text-[9px] uppercase text-[#1b1b1b]/60">{t.seat}</p>
            </div>
            <div className="barcode h-8 w-20" />
          </div>
        </motion.a>
      ))}
    </div>
  )
}
