"use client"

import { motion } from "framer-motion"

export function GlobalPresenceSection() {
  const presenceCards = [
    {
      title: "Expert Team",
      description: "Dedicated professionals with deep market knowledge",
      stats: "25+ Team Members",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-joshsorenson-1714208.jpg-CuuDKitcw0sXCgtJYXqZDfLI6BJldi.jpeg",
      alt: "Modern office workspace representing our professional team environment",
    },
    {
      title: "Strategic Partnerships",
      description: "Established relationships with key partners in Latin America",
      stats: "15+ Strategic Partners",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-tomfisk-2116721.jpg-yARXaAhNlctO7Ceec6dfeJtV7Amo7e.jpeg",
      alt: "Vibrant city street showcasing market activity",
    },
    {
      title: "Market Coverage",
      description: "Active presence in major Latin American markets",
      stats: "8+ Countries Served",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Supply-Chain-1024x682.jpg-ICEZGkkKQKIy5XOtaftLyiRpzXxp5W.jpeg",
      alt: "Supply chain and logistics operations",
    },
    {
      title: "Toronto Hub",
      description: "Centralized operations serving North and South America",
      stats: "Toronto, Canada HQ",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-camcasey-1157255.jpg-0vOwJPPA71cPblylLYhA7aytVawdoE.jpeg",
      alt: "Toronto's business district representing our headquarters",
    },
  ]

  return (
    <section id="global-presence" className="py-24 px-4 md:px-8 bg-[#FFE5E5]">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#33333B] mb-6">Our Reach</h2>
          <p className="text-base text-[#3D4E5E] max-w-2xl mx-auto">
            From our Toronto headquarters, we connect Canadian businesses with opportunities across Latin America
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {presenceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <div className="absolute inset-0">
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
              <div className="relative h-full p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-200 mb-4">{card.description}</p>
                <div className="text-[#FF0000] font-bold text-lg">{card.stats}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

