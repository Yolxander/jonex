"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      title: "Import/Export Facilitation",
      description:
        "We specialize in facilitating seamless import and export operations between Canada and Latin America. Our expertise covers a wide range of products, ensuring compliance with international trade regulations and optimizing the flow of goods across borders.",
    },
    {
      title: "Warehousing and Distribution",
      description:
        "Our strategic warehousing locations in Canada and key Latin American countries allow for efficient storage and distribution of your products. We offer inventory management services to ensure your goods are always available when and where they're needed.",
    },
    {
      title: "Freight Forwarding",
      description:
        "We provide comprehensive freight forwarding services, managing the transportation of your goods via air, sea, and land. Our established network of carriers ensures reliable and cost-effective shipping solutions between Canada and Latin America.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-[#FFE5E5]">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#3D4E5E] text-base">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

