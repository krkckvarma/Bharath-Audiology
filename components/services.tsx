import { Ear, Activity, Headphones, Baby, Volume2, Wrench } from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Hearing Assessment",
    description: "Comprehensive diagnostic hearing tests using advanced audiometry to measure your hearing accurately.",
  },
  {
    icon: Headphones,
    title: "Hearing Aid Fitting",
    description: "Personalized selection, fitting, and programming of hearing aids matched to your lifestyle and budget.",
  },
  {
    icon: Ear,
    title: "Ear Wax Removal",
    description: "Safe, painless professional ear wax removal to restore clear hearing and comfort.",
  },
  {
    icon: Volume2,
    title: "Tinnitus Management",
    description: "Evaluation and tailored therapy plans to help reduce ringing and improve quality of life.",
  },
  {
    icon: Baby,
    title: "Pediatric Audiology",
    description: "Gentle hearing evaluations for children to support early detection and healthy development.",
  },
  {
    icon: Wrench,
    title: "Repairs & Servicing",
    description: "Cleaning, repairs, and servicing for all major hearing aid brands to keep them performing.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Our Services</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Complete hearing care, all in one place
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From your first hearing test to lifelong support, our certified team is with you at every step.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
