import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function OurPromiseSection() {
  return (
    <section id="our-promise" className="py-24 px-4 md:px-8 bg-[#FFE5E5] overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/partnership-qldngnl7vftfgb5eee3lq00c37rnm7isa41h732bhc.jpg-4g1jQig1YWMmxrcv6aQRtb2Fm8SNAv.jpeg"
                alt="Business handshake representing our commitment to partnership"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-[#FF0000]/10" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-xl p-6 max-w-xs">
              <div className="text-4xl font-serif font-bold text-[#FF0000] mb-2">100%</div>
              <div className="text-[#33333B] font-medium">Customer Satisfaction</div>
              <p className="text-[#3D4E5E] text-sm mt-2">Our commitment to excellence</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-[#33333B] mb-6">Our Promise to You</h2>
            <p className="text-base text-[#3D4E5E] mb-8">
              We are committed to excellence, sustainability, and creating value for all stakeholders in the Latin
              American market.
            </p>
            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-serif font-semibold text-[#33333B] mb-2">Environmental Responsibility</h3>
                <p className="text-[#3D4E5E] text-base">
                  We are committed to being environmentally friendly in our corporate social responsibility while
                  providing quality products and excellent services to our customers.
                </p>
              </div>
            </div>
            <Button className="bg-[#FF0000] text-white hover:bg-[#CC0000] text-base">
              Learn More About Our Commitment
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

