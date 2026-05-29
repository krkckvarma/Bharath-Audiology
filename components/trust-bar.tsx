import { Users, Award, Headphones, HeartHandshake } from "lucide-react"

const stats = [
  { icon: Users, value: "5,000+", label: "Happy Patients" },
  { icon: Award, value: "15+ Years", label: "Of Experience" },
  { icon: Headphones, value: "200+", label: "Hearing Aid Models" },
  { icon: HeartHandshake, value: "Lifetime", label: "Aftercare Support" },
]

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <stat.icon className="size-7 text-primary" aria-hidden="true" />
            <p className="font-serif text-2xl font-semibold text-foreground md:text-3xl">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
