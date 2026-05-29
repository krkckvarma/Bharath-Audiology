import Image from "next/image"
import { Check } from "lucide-react"
import { CallButton, WhatsAppButton } from "@/components/contact-buttons"

const aidTypes = [
  {
    name: "Behind-the-Ear (BTE)",
    note: "Powerful & reliable",
  },
  {
    name: "Receiver-in-Canal (RIC)",
    note: "Discreet & natural",
  },
  {
    name: "In-the-Ear (ITE)",
    note: "Custom comfort",
  },
  {
    name: "Invisible (IIC)",
    note: "Completely hidden",
  },
]

const features = [
  "Bluetooth streaming for calls & music",
  "Rechargeable, all-day battery life",
  "Smart noise reduction for clear speech",
  "App-based control and fine tuning",
  "Top brands: Phonak, Signia, Widex & more",
]

export function HearingAids() {
  return (
    <section id="hearing-aids" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg">
            <Image
              src="/hearing-aid-product.png"
              alt="A modern behind-the-ear hearing aid available at Bharath Audiology"
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {aidTypes.map((aid) => (
              <div key={aid.name} className="rounded-xl border border-border/60 bg-card p-4">
                <p className="font-semibold text-foreground">{aid.name}</p>
                <p className="text-sm text-muted-foreground">{aid.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Hearing Aids</p>
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Advanced hearing aids for every lifestyle
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            We carry the latest digital hearing aids from the world&apos;s leading brands, fitted and
            tuned precisely for your ears. Try before you buy with our trial program.
          </p>

          <ul className="flex flex-col gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="text-base text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CallButton label="Book a Demo" />
            <WhatsAppButton
              label="Ask About Pricing"
              message="Hi Bharath Audiology, I'd like to know more about your hearing aids and pricing."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
