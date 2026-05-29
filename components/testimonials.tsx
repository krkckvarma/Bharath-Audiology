import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ramesh Iyer",
    role: "Hearing aid user, age 64",
    image: "/testimonial-1.png",
    quote:
      "After years of asking everyone to repeat themselves, I can finally enjoy family dinners again. The team was patient and explained everything clearly.",
  },
  {
    name: "Lakshmi Nair",
    role: "Tinnitus patient, age 52",
    image: "/testimonial-2.png",
    quote:
      "The ringing in my ears was driving me mad. Their therapy plan made a real difference. I feel heard and genuinely cared for.",
  },
  {
    name: "Priya Sharma",
    role: "Parent of young patient",
    image: "/testimonial-3.png",
    quote:
      "They were so gentle with my daughter during her hearing test. Early detection made all the difference for her. Highly recommend.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Patient Stories</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Loved by thousands of families
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-accent text-accent" aria-hidden="true" />
            ))}
            <span className="ml-2 text-base font-semibold text-foreground">4.9 out of 5</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <Quote className="size-8 text-accent" aria-hidden="true" />
              <blockquote className="text-pretty leading-relaxed text-foreground">{t.quote}</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border/60 pt-4">
                <Image
                  src={t.image || "/placeholder.svg"}
                  alt={`Portrait of ${t.name}`}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
