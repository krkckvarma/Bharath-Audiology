import Image from "next/image"
import { CallButton, WhatsAppButton } from "@/components/contact-buttons"

export function AboutHero() {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">About Me</p>
          <h1 className="text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
            {/* PLACEHOLDER — replace with the audiologist's name */}
            Bharath Bhushan K.R, Senior Audiologist.
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {/* PLACEHOLDER — short professional bio / mission statement */}
With over 20 years of experience in audiology and hearing healthcare, Bharath has dedicated his career to helping people hear better and live better. Trained at All India Institute of Speech and Hearing, he holds a Diploma in Hearing Aid & Ear Mould Technology, a BASLP degree, and a Master’s in Audiology. He secured All India Rank 2 in the national entrance examination for his postgraduate studies.

Before founding Bharath Audiology, Bharath worked across clinical practice, research, hearing technology, and professional training, including more than 12 years with Amplifon, where he was recognized as Best Audiologist three times.

Today, Bharath Audiology is built on a simple belief: better hearing leads to better living—delivering expert diagnosis, personalized hearing solutions, and compassionate care for every patient.
            
          </p>

          <dl className="grid grid-cols-3 gap-4">
            {[
              { value: "15+", label: "Years of experience" },
              { value: "11,000+", label: "Patients helped" },
              { value: "7+", label: "Trusted partners" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border/60 bg-card p-4">
                <dt className="font-serif text-2xl font-semibold text-primary">{stat.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CallButton label="Book a Consultation" />
            <WhatsAppButton
              label="Message Me"
              message="Hi, I'd like to know more about your hearing care services."
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg">
          <Image
            src="/audiologist-portrait.png"
            alt="Portrait of the audiologist at Bharath Audiology"
            width={680}
            height={760}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
