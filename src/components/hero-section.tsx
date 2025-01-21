"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-stretch overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,0 L75,0 C55,50 75,100 75,100 L0,100 Z"
            fill="white"
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center justify-start ">
        <motion.div
          className="lg:w-1/2 lg:pr-12 text-[#33333B] mr-[20px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-[#FF0000] font-bold text-xl mb-2">Welcome to Jonex Solutions</h2>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Bridging Borders, <br />
              <span className="text-[#FF0000]">Connecting</span> Markets
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Empower your business with seamless import/export solutions between Canada and Latin America.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button size="lg" className="bg-[#FF0000] hover:bg-[#CC0000] text-white transition-colors duration-300">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-[#FF0000] border-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Supply-Chain-1024x682.jpg-ICEZGkkKQKIy5XOtaftLyiRpzXxp5W.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
      </motion.div>
    </section>
  )
}

