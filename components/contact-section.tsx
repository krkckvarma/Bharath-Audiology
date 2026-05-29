import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { siteConfig, telLink } from "@/lib/site-config"
import { CallButton, WhatsAppButton } from "@/components/contact-buttons"

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Visit Us</p>
            <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Book your free hearing assessment
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Call us, message us on WhatsApp, or drop by the clinic. We&apos;ll find a time that works
              for you — same-day appointments are often available.
            </p>

            <div className="flex flex-col gap-4">
              <a href={telLink()} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Call or WhatsApp</span>
                  <span className="block text-lg font-semibold text-foreground">{siteConfig.phoneDisplay}</span>
                </span>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Email</span>
                  <span className="block text-lg font-semibold text-foreground">{siteConfig.email}</span>
                </span>
              </a>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Clinic Address</span>
                  <span className="block text-lg font-semibold text-foreground">{siteConfig.address}</span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Opening Hours</span>
                  {siteConfig.hours.map((h) => (
                    <span key={h.day} className="block text-base font-semibold text-foreground">
                      {h.day}: <span className="font-normal text-muted-foreground">{h.time}</span>
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-3xl border border-border/60 bg-card p-8 shadow-md md:p-10">
            <h3 className="text-balance font-serif text-2xl font-semibold text-foreground">
              Ready to hear better?
            </h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Reach out now and take the first step. Our friendly team will help you book a convenient
              appointment for your free hearing test — no obligation.
            </p>
            <div className="flex flex-col gap-3">
              <CallButton label="Call to Book Now" className="w-full py-4 text-lg" />
              <WhatsAppButton className="w-full py-4 text-lg" label="Book on WhatsApp" />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              We typically reply within minutes during clinic hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
