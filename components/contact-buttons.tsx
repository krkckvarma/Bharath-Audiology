import { Phone, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { telLink, whatsappLink } from "@/lib/site-config"

export function CallButton({
  className,
  label = "Call Now",
}: {
  className?: string
  label?: string
}) {
  return (
    <a
      href={telLink()}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <Phone className="size-5" aria-hidden="true" />
      {label}
    </a>
  )
}

export function WhatsAppButton({
  className,
  label = "WhatsApp Us",
  message,
}: {
  className?: string
  label?: string
  message?: string
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {label}
    </a>
  )
}
