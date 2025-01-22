import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function PurposeSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#33333B] mb-6">Our Purpose</h2>
            <p className="text-lg text-[#3D4E5E] mb-8">
              At Jonex, we&#39;re committed to facilitating global trade in a safe, responsible, and sustainable way.
              Our purpose is to connect businesses worldwide, enabling growth and prosperity through efficient 
              import/export solutions.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D5E2F2] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#5568D9] text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#33333B] mb-2">
                    Empowering Global Commerce
                  </h3>
                  <p className="text-[#3D4E5E]">
                    We break down barriers to international trade, making it accessible for businesses of all sizes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D5E2F2] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#5568D9] text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#33333B] mb-2">
                    Driving Sustainable Practices
                  </h3>
                  <p className="text-[#3D4E5E]">
                    We're committed to environmentally responsible logistics and operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D5E2F2] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#5568D9] text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#33333B] mb-2">
                    Fostering Global Partnerships
                  </h3>
                  <p className="text-[#3D4E5E]">
                    We build lasting relationships that create value for all stakeholders in the global supply chain.
                  </p>
                </div>
              </div>
            </div>
            <Button className="bg-[#5568D9] hover:bg-[#5568D9]/90">
              Learn About Our Impact
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="Global trade illustration"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <div className="text-4xl font-bold text-[#5568D9] mb-2">20+</div>
              <div className="text-[#33333B] font-medium">Years of Excellence</div>
              <p className="text-[#3D4E5E] text-sm mt-2">
                Two decades of transforming global trade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

