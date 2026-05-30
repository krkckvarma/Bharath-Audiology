import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { AboutHero } from "@/components/about/about-hero"
import { Qualifications } from "@/components/about/qualifications"
import { Achievements } from "@/components/about/achievements"
import { Journey } from "@/components/about/journey"
import { BrandPartners } from "@/components/about/brand-partners"

export const metadata: Metadata = {
  title: "About | Bharath Audiology",
  description:
    "Meet the audiologist behind Bharath Audiology — qualifications, achievements, journey, and the trusted hearing aid brands we partner with.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <Qualifications />
        <Achievements />
        <Journey />
        <BrandPartners />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
