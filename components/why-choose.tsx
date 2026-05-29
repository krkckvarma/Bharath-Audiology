import Image from "next/image"
import { Stethoscope, BadgeIndianRupee, MapPin, CalendarHeart } from "lucide-react"

const reasons = [
  {
    icon: Stethoscope,
    title: "Certified audiologists",
    description: "Experienced, qualified professionals who genuinely care about your hearing journey.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Honest, fair pricing",
    description: "Transparent costs, EMI options, and the right device for your budget — no pressure.",
  },
  {
    icon: CalendarHeart,
    title: "Lifetime aftercare",
    description: "Free follow-ups, cleaning, and fine-tuning for as long as you wear your hearing aids.",
  },
  {
    icon: MapPin,
    title: "Convenient & accessible",
    description: "A welcoming, easy-to-reach clinic with same-day appointments available.",
  },
]

export function WhyChoose() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
            Why Bharath Audiology
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold md:text-4xl">
            Care you can trust, results you can hear
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-primary-foreground/80">
            We treat every patient like family. From your first visit to lifelong support, we&apos;re
            committed to helping you hear — and live — better.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex flex-col gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary-foreground/15">
                  <reason.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-lg font-semibold">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/80">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-primary-foreground/20 shadow-xl">
          <Image
            src="/clinic-interior.png"
            alt="The welcoming interior of the Bharath Audiology clinic"
            width={680}
            height={620}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
