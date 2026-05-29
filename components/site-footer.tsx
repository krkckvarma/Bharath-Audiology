import { Ear, Phone, MapPin } from "lucide-react"
import { siteConfig, telLink } from "@/lib/site-config"

const links = [
  { href: "#services", label: "Services" },
  { href: "#hearing-aids", label: "Hearing Aids" },
  { href: "#hearing-test", label: "Free Hearing Test" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Ear className="size-6" aria-hidden="true" />
            </span>
            <span className="font-serif text-lg font-semibold text-foreground">{siteConfig.name}</span>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Expert hearing care, advanced hearing aids, and compassionate support to help you hear life
            clearly again.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-foreground">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-foreground">Get in Touch</h3>
          <a href={telLink()} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <p className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {siteConfig.address}
          </p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-muted-foreground md:flex-row md:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Caring for your hearing, every step of the way.</p>
        </div>
      </div>
    </footer>
  )
}
