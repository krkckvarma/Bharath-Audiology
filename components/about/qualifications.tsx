import { GraduationCap, BadgeCheck, BookOpen, Languages } from "lucide-react"

// PLACEHOLDER — replace each entry with real degrees, licenses & certifications.
const qualifications = [
  {
    icon: GraduationCap,
    title: "Master of Audiology",
    detail: "A.I.I.S.H, Mysore, 2011 — specialization in diagnostic & rehabilitative audiology.",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Audiology & Speech-Language Pathology",
    detail: "A.I.I.S.H, Mysore, 2009.",
  },
  {
    icon: BadgeCheck,
    title: "RCI Registered Audiologist",
    detail: "Rehabilitation Council of India, Reg. No. A26615.",
  },
  {
    icon: BookOpen,
    title: "Certified Hearing Aid Dispenser",
    detail: "Advanced fitting & real-ear measurement certification, 2009.",
  },
  {
    icon: Languages,
    title: "Languages",
    detail: "[English, Hindi, Kannada, Telugu] — comfortable counselling in your language.",
  },
]

export function Qualifications() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Qualifications</p>
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Education &amp; professional credentials
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Rigorous training and ongoing certification ensure every assessment and fitting meets the
            highest clinical standards.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qualifications.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
