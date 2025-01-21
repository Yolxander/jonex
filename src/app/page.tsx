"use client"

import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { OurPromiseSection } from "@/components/our-promise-section"
import { GlobalPresenceSection } from "@/components/global-presence-section"
import { ContactSection } from "@/components/contact-section"
import { ProductsSection } from "@/components/products-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
         <ProductsSection />
      <OurPromiseSection />
      <GlobalPresenceSection />
      <ContactSection />
    </>
  )
}

