import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { HearingAids } from "@/components/hearing-aids"
import { HearingTest } from "@/components/hearing-test"
import { WhyChoose } from "@/components/why-choose"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HearingAids />
        <HearingTest />
        <WhyChoose />
        <Testimonials />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
