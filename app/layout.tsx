import type React from "react"
import type { Metadata } from "next"
import { Michroma, Space_Grotesk, Silkscreen, Permanent_Marker } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GrainOverlay from "@/components/grain-overlay"
import CursorTrail from "@/components/cursor-trail"
import { ThemeProvider } from "@/components/theme-provider"

const michroma = Michroma({ subsets: ["latin"], weight: "400", variable: "--font-display" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" })
const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixel" })
const permanentMarker = Permanent_Marker({ subsets: ["latin"], weight: "400", variable: "--font-marker" })

export const metadata: Metadata = {
  title: "Khaled Alsanafi — Software Engineer, Mobile & Full-Stack",
  description:
    "Software engineer building and shipping production software end to end: mobile apps in Flutter, web in React and Next.js, the APIs and ERP integrations behind them, and the CI/CD and infrastructure they run on.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="skull.ico" type="image/x-icon" />
      </head>
      <body
        className={`${michroma.variable} ${spaceGrotesk.variable} ${silkscreen.variable} ${permanentMarker.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <GrainOverlay />
          <CursorTrail />
          <div className="flex min-h-screen flex-col relative">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
