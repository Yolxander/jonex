"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-[#FFE5E5] overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-[#33333B] mb-6">Latin American Market Opportunity</h2>
            <p className="text-base text-[#3D4E5E] mb-8">
              We bridge gaps for businesses and customers in Latin America looking for high-quality Canadian products
              and services.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-serif font-semibold text-[#33333B] mb-4">Our Approach</h3>
              <p className="text-[#3D4E5E] text-base">
                We identify specific products, industries, and markets in Latin America with the greatest potential for
                growth and success. Our comprehensive market research and analysis help Canadian businesses make
                informed decisions and capitalize on emerging opportunities.
              </p>
            </div>
            <Button className="bg-[#FF0000] hover:bg-[#CC0000] text-white text-base">Explore Opportunities</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20151014054104-shutterstock-229901350-WevWZXcXkqsMWsfIM3BkwzM3IGXRUI.jpeg"
                alt="Glowing growth chart representing Latin American market opportunities"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-[#FF0000]/10" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-xl p-6 max-w-xs">
              <div className="text-4xl font-serif font-bold text-[#FF0000] mb-2">20+</div>
              <div className="text-[#33333B] font-medium">Latin American Countries</div>
              <p className="text-[#3D4E5E] text-sm mt-2">Expanding your reach across diverse markets</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

