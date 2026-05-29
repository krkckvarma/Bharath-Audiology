"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle, RotateCcw, ClipboardCheck } from "lucide-react"
import { CallButton, WhatsAppButton } from "@/components/contact-buttons"

type Option = { label: string; score: number }

const questions: { id: string; text: string; options: Option[] }[] = [
  {
    id: "q1",
    text: "Do you often ask people to repeat themselves?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "Sometimes", score: 1 },
      { label: "Often", score: 2 },
    ],
  },
  {
    id: "q2",
    text: "Is it hard to follow conversations in noisy places like restaurants?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "Sometimes", score: 1 },
      { label: "Often", score: 2 },
    ],
  },
  {
    id: "q3",
    text: "Do others say your TV or phone volume is too loud?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "Sometimes", score: 1 },
      { label: "Often", score: 2 },
    ],
  },
  {
    id: "q4",
    text: "Do you have ringing or buzzing in your ears (tinnitus)?",
    options: [
      { label: "Never", score: 0 },
      { label: "Occasionally", score: 1 },
      { label: "Frequently", score: 2 },
    ],
  },
  {
    id: "q5",
    text: "Do you struggle to hear on the phone or hear high-pitched sounds?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "Sometimes", score: 1 },
      { label: "Often", score: 2 },
    ],
  },
]

const maxScore = questions.length * 2

function getResult(score: number) {
  const pct = (score / maxScore) * 100
  if (pct <= 25) {
    return {
      level: "Low",
      tone: "good" as const,
      headline: "Your hearing seems healthy",
      message:
        "Your answers suggest a low likelihood of hearing difficulty. We still recommend a baseline hearing test every 1–2 years to catch changes early.",
    }
  }
  if (pct <= 60) {
    return {
      level: "Moderate",
      tone: "warn" as const,
      headline: "You may have early signs of hearing loss",
      message:
        "Some of your answers point to possible hearing changes. A quick professional hearing test will give you a clear picture — and it's free at our clinic.",
    }
  }
  return {
    level: "High",
    tone: "warn" as const,
    headline: "A professional hearing test is strongly recommended",
    message:
      "Your answers suggest you may be experiencing hearing difficulty. The good news: it's very treatable. Book a free assessment with our audiologists to find the right solution.",
  }
}

export function HearingTest() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const isFinished = step >= questions.length
  const totalScore = answers.reduce((a, b) => a + b, 0)
  const result = isFinished ? getResult(totalScore) : null

  function selectOption(score: number) {
    const next = [...answers]
    next[step] = score
    setAnswers(next)
    setStep((s) => s + 1)
  }

  function restart() {
    setStep(0)
    setAnswers([])
  }

  const progress = Math.min((step / questions.length) * 100, 100)

  return (
    <section id="hearing-test" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
            <ClipboardCheck className="size-4" aria-hidden="true" />
            Free 1-Minute Check
          </p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Take the online hearing self-test
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Answer 5 quick questions to understand your hearing health. Private, instant, and free.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border/60 bg-card p-6 shadow-md md:p-10">
          {!isFinished ? (
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    Question {step + 1} of {questions.length}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <h3 className="text-balance font-serif text-2xl font-semibold text-foreground">
                {questions[step].text}
              </h3>

              <div className="flex flex-col gap-3">
                {questions[step].options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => selectOption(option.score)}
                    className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 text-left text-lg font-medium text-foreground transition-colors hover:border-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {option.label}
                    <span className="size-4 rounded-full border-2 border-muted-foreground/40" aria-hidden="true" />
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="self-start text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            result && (
              <div className="flex flex-col items-center gap-5 text-center">
                <span
                  className={`flex size-16 items-center justify-center rounded-full ${
                    result.tone === "good" ? "bg-primary/10 text-primary" : "bg-accent/20 text-accent-foreground"
                  }`}
                >
                  {result.tone === "good" ? (
                    <CheckCircle2 className="size-9" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="size-9" aria-hidden="true" />
                  )}
                </span>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Result: {result.level} likelihood
                  </p>
                  <h3 className="mt-1 text-balance font-serif text-2xl font-semibold text-foreground md:text-3xl">
                    {result.headline}
                  </h3>
                </div>

                <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  {result.message}
                </p>

                <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                  <CallButton label="Book Free Hearing Test" />
                  <WhatsAppButton
                    label="Get My Results Reviewed"
                    message={`Hi Bharath Audiology, I took the online hearing self-test and my result was "${result.level} likelihood". I'd like to book a free hearing assessment.`}
                  />
                </div>

                <button
                  type="button"
                  onClick={restart}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw className="size-4" aria-hidden="true" />
                  Retake the test
                </button>

                <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
                  This self-test is for informational purposes only and is not a medical diagnosis. Please
                  consult our audiologists for an accurate assessment.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
