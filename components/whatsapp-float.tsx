import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site-config"

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-base font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  )
}
