// PLACEHOLDER — replace each milestone with the real career timeline.
const milestones = [
  {
    year: "[20XX]",
    title: "Began the journey",
    detail: "Graduated in Audiology and discovered a passion for transforming lives through hearing.",
  },
  {
    year: "[20XX]",
    title: "Clinical training & early career",
    detail: "Trained at [Hospital / Institute], handling complex diagnostics and pediatric cases.",
  },
  {
    year: "[20XX]",
    title: "Specialized certifications",
    detail: "Completed advanced fitting, tinnitus management, and real-ear measurement training.",
  },
  {
    year: "[20XX]",
    title: "Founded Bharath Audiology",
    detail: "Opened the clinic with a vision of honest, accessible, patient-first hearing care.",
  },
  {
    year: "Today",
    title: "Serving the community",
    detail: "Helping thousands hear life clearly again, with lifetime aftercare and support.",
  },
]

export function Journey() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">My Journey</p>
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            The journey so far
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            From student to trusted local audiologist — every step has been about one thing: helping
            people hear and live better.
          </p>
        </div>

        <ol className="mt-10 flex flex-col">
          {milestones.map((m, i) => (
            <li key={m.title} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
                {i < milestones.length - 1 && <span className="mt-1 w-0.5 flex-1 bg-border" />}
              </div>
              <div className="flex flex-col gap-1.5 pb-1">
                <span className="text-sm font-semibold text-accent-foreground">{m.year}</span>
                <h3 className="font-serif text-xl font-semibold text-foreground">{m.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{m.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
