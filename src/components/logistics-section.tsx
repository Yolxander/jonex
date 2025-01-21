import { Button } from "@/components/ui/button"
import { Truck, Globe, BarChart2, Shield } from 'lucide-react'

export function LogisticsSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#D5E2F2]">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#33333B] mb-4">Logistics and Operations</h2>
          <p className="text-lg text-[#3D4E5E] max-w-2xl mx-auto">
            Our state-of-the-art logistics and operations ensure smooth, efficient, and reliable global trade solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {operations.map((operation, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                {operation.icon}
                <h3 className="text-2xl font-bold text-[#33333B] mt-4 mb-2">{operation.title}</h3>
                <p className="text-[#3D4E5E] mb-6">{operation.description}</p>
                <Button variant="outline" className="text-[#5568D9] border-[#5568D9] hover:bg-[#5568D9] hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const operations = [
  {
    title: "Global Supply Chain",
    description: "End-to-end logistics solutions ensuring seamless product movement worldwide",
    icon: <Truck className="w-12 h-12 text-[#5568D9]" />
  },
  {
    title: "International Network",
    description: "Extensive network of partners and facilities across key global markets",
    icon: <Globe className="w-12 h-12 text-[#5568D9]" />
  },
  {
    title: "Advanced Analytics",
    description: "Data-driven insights for optimizing routes, inventory, and operations",
    icon: <BarChart2 className="w-12 h-12 text-[#5568D9]" />
  },
  {
    title: "Secure Operations",
    description: "State-of-the-art security measures to protect your valuable cargo",
    icon: <Shield className="w-12 h-12 text-[#5568D9]" />
  }
]

