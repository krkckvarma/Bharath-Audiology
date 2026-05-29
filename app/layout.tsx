import type { Metadata } from "next"
import { Manrope, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bharath Audiology | Hearing Tests, Hearing Aids & Ear Care",
  description:
    "Bharath Audiology offers expert hearing tests, advanced hearing aids, and personalized ear care. Book your free hearing assessment today. Open Mon-Sat, 10am-7pm.",
  generator: "v0.app",
  keywords: [
    "audiology",
    "hearing test",
    "hearing aids",
    "hearing loss",
    "Bharath Audiology",
    "ear care",
    "tinnitus",
  ],
  openGraph: {
    title: "Bharath Audiology | Hear Life Clearly Again",
    description:
      "Expert hearing tests, advanced hearing aids, and caring support. Book your free hearing assessment today.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
