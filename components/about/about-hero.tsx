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

            My journey in audiology began with a deep passion for helping
            people reconnect with the sounds that enrich their lives. That
            passion led me to pursue a Diploma in Hearing Aid and Ear Mould
            Technology from the All India Institute of Speech and Hearing
            (AIISH), Mysuru, in 2005.
          </p>

          <p>
            Driven by a desire to build deeper clinical expertise and deliver
            better hearing care, I completed my Bachelor of Audiology and
            Speech-Language Pathology (BASLP) from AIISH, Mysuru, in 2009.
            In the same year, I secured <strong>All India Rank 2</strong> in
            the national entrance examination for Master of Audiology and
            successfully completed my Master’s degree in Audiology in 2011.
          </p>

          <p>
            During my postgraduate studies, I envisioned an audiology practice
            built on three core values:
            <span className="font-semibold text-gray-900">
              {" "}
              clinical excellence, advanced technology, and patient-centered
              care.
            </span>{" "}
            That vision became the foundation of Bharath Audiology.
          </p>

          <p>
            Following my master’s degree, I served as a Research Officer at
            AIISH, Mysuru, contributing to audiological research and
            evidence-based clinical practice. I later worked with Cadential
            Technologies and Klear Speech & Hearing Center as a Product Trainer
            and Audiologist, gaining extensive experience in diagnostic
            audiology, hearing aid technology, hearing healthcare solutions, and
            professional training.
          </p>

          <p>
            In February 2014, I joined Amplifon, one of the world’s leading
            hearing healthcare organizations. Over the next
            <strong> 12.5 years</strong>, I played a key role in developing and
            scaling the Jayanagar center into one of the organization’s most
            successful clinics.
          </p>

          <p>
            My dedication to patient care, clinical excellence, and service
            growth earned me recognition as
            <strong> “Best Audiologist” </strong>
            on three separate occasions.
          </p>

          <p>
            With <strong>over two decades of experience</strong> in hearing
            healthcare, I have had the privilege of helping thousands of
            individuals improve their hearing, communication, and quality of
            life.
          </p>

          <p>
            Through <strong>Bharath Audiology</strong>, my mission is to provide
            world-class hearing care services, advanced diagnostic evaluations,
            personalized hearing solutions, and compassionate support for every
            patient and family we serve.
          </p>

          <p className="pt-4 text-xl font-semibold italic text-[#E76F51]">
            Better hearing leads to better living — and we’re committed to
            helping you hear your best every day.
            
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
