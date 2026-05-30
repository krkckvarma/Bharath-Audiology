import { ShieldCheck } from "lucide-react"
import { CallButton } from "@/components/contact-buttons"

const brands = [
  {
    name: "Phonak",
    origin: "Switzerland",
    tagline: "Life is on",
    detail:
      "Renowned for rugged reliability and the Lumity/Audéo range with class-leading speech-in-noise clarity and universal Bluetooth connectivity to any phone.",
    strengths: ["Speech-in-noise", "Universal Bluetooth", "Rechargeable"],
  },
  {
    name: "Signia",
    origin: "Germany",
    tagline: "Be Brilliant",
    detail:
      "German engineering (formerly Siemens) famed for natural own-voice processing, motion sensors, and slim, stylish rechargeable designs.",
    strengths: ["Own-voice processing", "Motion sensors", "Stylish design"],
  },
  {
    name: "Widex",
    origin: "Denmark",
    tagline: "Sound like no other",
    detail:
      "Loved by music lovers and first-time users for the most natural, pure sound quality and the AI-driven SoundSense learning technology.",
    strengths: ["Most natural sound", "AI personalization", "Tinnitus relief"],
  },
  {
    name: "Oticon",
    origin: "Denmark",
    tagline: "Life-changing technology",
    detail:
      "Pioneers of BrainHearing — an open-sound philosophy with deep-neural-network processing that helps the brain make sense of all surrounding sounds.",
    strengths: ["BrainHearing", "Open sound", "Deep neural network"],
  },
  {
    name: "ReSound",
    origin: "Denmark",
    tagline: "Be brave. Be heard.",
    detail:
      "Excellent Apple/Android streaming with the Omnia and Nexia lines, organic hearing approach, and strong companion-app fine-tuning.",
    strengths: ["Direct streaming", "Great companion app", "Organic hearing"],
  },
  {
    name: "Starkey",
    origin: "USA",
    tagline: "Hear better. Live better.",
    detail:
      "Innovators in AI health tracking — Genesis AI devices can detect falls, track activity, and even translate languages, all from your ears.",
    strengths: ["AI health tracking", "Fall detection", "Custom fit"],
  },
]

export function BrandPartners() {
  return (
    <section id="brands" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Trusted Partners</p>
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Authorized partner of the world&apos;s leading hearing aid brands
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            As an independent, multi-brand clinic, I&apos;m not tied to any single manufacturer — which
            means I recommend the device that&apos;s genuinely right for your hearing, lifestyle, and
            budget. Here are the trusted brands I fit and service.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <article
              key={brand.name}
              className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-4">
                <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                  {brand.name}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {brand.origin}
                </span>
              </div>
              <p className="text-sm font-semibold italic text-primary">&ldquo;{brand.tagline}&rdquo;</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{brand.detail}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-1">
                {brand.strengths.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheck className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Genuine devices &amp; full manufacturer warranty
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every hearing aid is 100% authentic, sealed, and backed by official warranty and
                lifetime in-clinic support.
              </p>
            </div>
          </div>
          <CallButton
            label="Find Your Brand"
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  )
}
