import Image from "next/image"
import { CallButton, WhatsAppButton } from "@/components/contact-buttons"

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "11,000+", label: "Patients helped" },
  { value: "7+", label: "Trusted partners" },
]

export function AboutHero() {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        {/* Content */}
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            About Bharath
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Bharath Bhushan K.R.
            <span className="mt-2 block text-2xl font-normal text-muted-foreground">
              Senior Audiologist
            </span>
          </h1>

          <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              My journey in audiology began with a deep passion for helping
              people reconnect with the sounds that enrich their lives. That
              passion led me to pursue a Diploma in Hearing Aid and Ear Mould
              Technology from the All India Institute of Speech and Hearing
              (AIISH), Mysuru, in 2005.
            </p>

            <p>
              Driven by a desire to deepen my clinical expertise, I completed my
              Bachelor of Audiology and Speech-Language Pathology in 2009, and
              later earned my Master’s degree in Audiology in 2011 after
              securing <strong>All India Rank 2</strong> in the national
              entrance examination.
            </p>

            <p>
              During my postgraduate studies, I envisioned an audiology practice
              built on <strong>clinical excellence</strong>,
              <strong> advanced technology</strong>, and
              <strong> patient-centered care</strong>. That vision became the
              foundation of Bharath Audiology.
            </p>

            <p>
              My professional journey has included clinical research at AIISH,
              product training and audiology roles with Cadential Technologies
              and Klear Speech & Hearing Center, and extensive work in
              diagnostic audiology, hearing aid technology, and hearing
              rehabilitation.
            </p>

            <p>
              In 2014, I joined Amplifon, where I spent over
              <strong> 12.5 years </strong>
              helping develop the Jayanagar center into one of the
              organization’s leading clinics. During this time, I was honored to
              receive the <strong>“Best Audiologist”</strong> award on three
              separate occasions.
            </p>

            <p>
              With over <strong>two decades of experience</strong> in hearing
              healthcare, I’ve had the privilege of helping thousands of people
              improve their hearing, communication, and quality of life.
            </p>

            <p>
              Through <strong>Bharath Audiology</strong>, my mission is to
              deliver world-class hearing care through advanced diagnostics,
              personalized hearing solutions, and compassionate support for
              every patient and family we serve.
            </p>

            <p className="pt-2 text-lg font-semibold italic text-primary">
              Better hearing leads to better living — and we’re committed to
              helping you hear your best every day.
            </p>
          </div>

          {/* Stats */}
          <dl className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/60 bg-card p-5"
              >
                <dt className="font-serif text-2xl font-semibold text-primary">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          {/* CTA */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <CallButton label="Book a Consultation" />
            <WhatsAppButton
              label="Message Me"
              message="Hi, I'd like to know more about your hearing care services."
            />
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg">
          <Image
            src="/audiologist-portrait.png"
            alt="Bharath Bhushan K.R. — Senior Audiologist"
            width={680}
            height={760}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
