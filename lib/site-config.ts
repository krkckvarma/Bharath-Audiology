// ----------------------------------------------------------------------------
// Bharath Audiology — central contact + business config.
// Swap the PLACEHOLDER values below with the real details when available.
// ----------------------------------------------------------------------------

export const siteConfig = {
  name: "Bharath Audiology",
  tagline: "Hear Life Clearly Again",

  // PLACEHOLDER — replace with the real number (used for both call and WhatsApp).
  // Use full international format for WhatsApp links (no spaces, with country code).
  phoneDisplay: "+91 9110650537",
  phoneRaw: "+919110650537",
  whatsappRaw: "919110650537",

  // PLACEHOLDER — replace with the real clinic address.
  address: "no. 336, 38th cross, Jayanagar 9th block, Landmark: Aikya World School, Bengaluru - 560069",
  mapsUrl: "https://maps.google.com/?q=Bharath+Audiology",

  email: "care@bharathaudiology.in",

  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  whatsappDefaultMessage:
    "Hi Bharath Audiology, I'd like to book a hearing assessment appointment.",
} as const

export function whatsappLink(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(message)}`
}

export function telLink() {
  return `tel:${siteConfig.phoneRaw}`
}
