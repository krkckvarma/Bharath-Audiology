"use client"

import { useState } from "react"
import { Ear, Menu, X, Phone } from "lucide-react"
import { siteConfig, telLink } from "@/lib/site-config"
import { WhatsAppButton } from "@/components/contact-buttons"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#hearing-aids", label: "Hearing Aids" },
  { href: "/#hearing-test", label: "Free Hearing Test" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="/" className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Ear className="size-6" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-foreground">{siteConfig.name}</span>
            <span className="text-xs text-muted-foreground">{siteConfig.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={telLink()}
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <WhatsAppButton className="px-4 py-2 text-sm" label="Book Now" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={telLink()}
                className="flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-base font-semibold text-foreground"
              >
                <Phone className="size-5 text-primary" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
              <WhatsAppButton className="w-full" label="Book Appointment" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
