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
            My journey in audiology began with a deep passion for helping people reconnect with the sounds that enrich their lives. This commitment led me to pursue a Diploma in Hearing Aid and Ear Mould Technology from the All India Institute of Speech and Hearing (AIISH), Mysuru, in 2005.

Driven by a desire to gain deeper clinical expertise, I completed my Bachelor of Audiology and Speech-Language Pathology (BASLP) from AIISH, Mysuru, in 2009. In the same year, I secured All India Rank 2 in the national entrance examination for Master of Audiology and successfully completed my Master's degree in Audiology in 2011.

During my postgraduate studies, I envisioned an audiology practice that would combine clinical excellence, advanced technology, and patient-centered care. This vision became the foundation of Bharath Audiology.

Following my master's degree, I served as a Research Officer at AIISH, Mysuru, until 2012, where I contributed to audiological research and evidence-based clinical practices. I then worked with Cadential Technologies and Klear Speech & Hearing Center as a Product Trainer and Audiologist, gaining valuable experience in hearing healthcare solutions, diagnostic audiology, hearing aid technology, and professional training.

In February 2014, I joined Amplifon, one of the world's leading hearing healthcare organizations. Over the next 12.5 years, I played a key role in developing and scaling the Jayanagar center into one of the organization's successful clinics. My dedication to patient care, clinical excellence, and business growth earned me recognition as "Best Audiologist" on three separate occasions.

With over two decades of experience in hearing healthcare, I have had the privilege of helping thousands of individuals improve their hearing, communication, and quality of life. Through Bharath Audiology, my mission is to provide world-class hearing care services, advanced diagnostic evaluations, personalized hearing solutions, and compassionate support for every patient and family we serve.

At Bharath Audiology, we believe that better hearing leads to better living, and we are committed to helping you hear your best every day.
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
