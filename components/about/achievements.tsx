import { Trophy, Award, Users, Heart, Mic2, Star } from "lucide-react"

// PLACEHOLDER — replace with real awards, recognitions & milestones.
const achievements = [
  {
    icon: Trophy,
    title: "Best Audiology Clinic — [City] [Year]",
    detail: "Recognized for excellence in patient care and hearing rehabilitation.",
  },
  {
    icon: Users,
    title: "[X,XXX]+ successful fittings",
    detail: "Helping patients across all age groups hear clearly again.",
  },
  {
    icon: Heart,
    title: "[XX]+ free camps for the community",
    detail: "Conducted hearing screening camps in schools, old-age homes & rural areas.",
  },
  {
    icon: Mic2,
    title: "Guest speaker & trainer",
    detail: "Invited talks at [Conference / Institution] on modern hearing care.",
  },
  {
    icon: Award,
    title: "Manufacturer Excellence Awards",
    detail: "Certified top-tier dispenser by leading hearing aid brands.",
  },
  {
    icon: Star,
    title: "[4.9]★ patient rating",
    detail: "Consistently rated for compassionate, honest, results-driven care.",
  },
]

export function Achievements() {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Achievements</p>
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Recognition &amp; milestones
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            A track record built on trust, results, and a genuine commitment to better hearing for
            every patient.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
                <item.icon className="size-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
