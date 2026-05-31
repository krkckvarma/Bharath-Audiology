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
            Bharath Bhushan K.R, <br />
            Founder & Chief Audiologist
            
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {/* PLACEHOLDER — short professional bio / mission statement */}
            My journey in audiology began with a passion for helping people reconnect with the sounds that shape everyday life. <br /> 
            I earned my Diploma in Hearing Aid and Ear Mould Technology in 2005, followed by a Bachelor’s in Audiology and Speech-Language Pathology in 2009 from All India Institute of Speech and Hearing. <br /> 
            That same year, I secured All India Rank 2 in the national entrance exam for Master of Audiology and completed my Master’s degree in Audiology in 2011. <br /> 

            After working in research, clinical audiology, hearing aid technology, and professional training, I joined Amplifon in 2014, where I spent over 12 years building one of the organisation’s leading clinics and was recognised as “Best Audiologist” three times. <br /> 
            With over 20 years of experience in hearing healthcare, I’ve had the privilege of helping thousands of people improve their hearing, communication, and quality of life. <br /> Bharath Audiology was founded with a simple mission: to deliver expert, technology-driven, and compassionate hearing care tailored to every individual. <br /> 

            At Bharath Audiology, I believe better hearing leads to better living—and we’re committed to helping you hear your best every day.
            
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
