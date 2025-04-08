"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle } from "lucide-react"

interface ContactOptionsProps {
  phone: string
  email: string
  whatsapp: string
}

export default function ContactOptions({ phone, email, whatsapp }: ContactOptionsProps) {
  const contactOptions = [
    {
      title: "Call Me",
      icon: <Phone className="h-8 w-8" />,
      description: "Let's talk directly",
      action: () => (window.location.href = `tel:${phone}`),
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Email Me",
      icon: <Mail className="h-8 w-8" />,
      description: "Send me a message",
      action: () => (window.location.href = `mailto:${email}`),
      color: "from-teal-500 to-cyan-600",
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle className="h-8 w-8" />,
      description: "Chat with me",
      action: () => (window.location.href = `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`),
      color: "from-cyan-500 to-blue-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className="grid md:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {contactOptions.map((option, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          className="relative overflow-hidden rounded-xl bg-card shadow-lg cursor-pointer group"
          onClick={option.action}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            style={{
              backgroundImage: `linear-gradient(to bottom right, var(--${option.color.split(" ")[0].replace("from-", "")}), var(--${option.color.split(" ")[1].replace("to-", "")}))`,
            }}
          />
          <div className="p-6 flex flex-col items-center text-center space-y-4 group-hover:text-white transition-colors duration-500">
            <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
              {option.icon}
            </div>
            <h3 className="text-xl font-bold">{option.title}</h3>
            <p className="text-muted-foreground group-hover:text-white/80 transition-colors duration-500">
              {option.description}
            </p>
            <motion.div
              className="w-12 h-1 bg-primary rounded-full group-hover:bg-white transition-colors duration-500"
              initial={{ width: "3rem" }}
              whileHover={{ width: "5rem" }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
