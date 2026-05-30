import Image from "next/image"
import { ShieldCheck, Star, Clock } from "lucide-react"
import { CallButton, WhatsAppButton } from "@/components/contact-buttons"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:px-6 md:py-20 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            <Star className="size-4 fill-current" aria-hidden="true" />
            Trusted by 11,000+ patients
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Hear life clearly again
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Expert hearing assessments, advanced hearing aids, and caring support from certified
            audiologists. Take the first step toward better hearing today.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CallButton label="Book Free Hearing Test" className="px-7 py-3.5 text-lg" />
            <WhatsAppButton className="px-7 py-3.5 text-lg" />
          </div>

          <dl className="mt-2 grid grid-cols-3 gap-4 border-t border-border/70 pt-6">
            <div className="flex flex-col">
              <dt className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                Certified
              </dt>
              <dd className="text-base font-semibold text-foreground">Audiologist</dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Star className="size-4 text-primary" aria-hidden="true" />
                4.9 / 5
              </dt>
              <dd className="text-base font-semibold text-foreground">Patient Rating</dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="size-4 text-primary" aria-hidden="true" />
                Same-day
              </dt>
              <dd className="text-base font-semibold text-foreground">Appointments</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-xl">
            <Image
              src="/hero-audiologist.png"
              alt="A caring audiologist examining an older patient's ear at Bharath Audiology"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 hidden rounded-2xl border border-border/60 bg-card px-5 py-4 shadow-lg sm:block">
            <p className="text-sm text-muted-foreground">Free first consultation</p>
            <p className="font-serif text-xl font-semibold text-foreground">No obligation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
