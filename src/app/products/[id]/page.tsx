"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function ProductPage() {
  const params = useParams()
  const product = products.find(p => p.id === params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="container py-12">
        <Link 
          href="/products"
          className="inline-flex items-center text-[#3D4E5E] hover:text-[#5568D9] mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-[#D5E2F2] rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#33333B] mb-2">{product.name}</h1>
              <span className="inline-block px-3 py-1 bg-[#D5E2F2] text-[#5568D9] rounded-full text-sm">
                {product.category}
              </span>
            </div>

            <p className="text-lg text-[#3D4E5E] mb-8">
              {product.description}
            </p>

            <Tabs defaultValue="specifications" className="mb-8">
              <TabsList>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications" className="mt-4">
                <ul className="space-y-2">
                  {product.details.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center text-[#3D4E5E]">
                      <Check className="w-4 h-4 text-[#5568D9] mr-2" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="applications" className="mt-4">
                <ul className="space-y-2">
                  {product.details.applications.map((app, index) => (
                    <li key={index} className="flex items-center text-[#3D4E5E]">
                      <Check className="w-4 h-4 text-[#5568D9] mr-2" />
                      {app}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="features" className="mt-4">
                <ul className="space-y-2">
                  {product.details.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-[#3D4E5E]">
                      <Check className="w-4 h-4 text-[#5568D9] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>

            <div className="flex gap-4">
              <Button size="lg" className="bg-[#5568D9] hover:bg-[#5568D9]/90">
                Request Quote
              </Button>
              <Button size="lg" variant="outline">
                Download Specifications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const products = [
  {
    id: "1",
    name: "Industrial Steel",
    category: "raw-materials",
    description: "High-grade industrial steel for manufacturing applications. Our steel products meet international quality standards and are suitable for various industrial uses.",
    image: "/placeholder.svg",
    details: {
      specifications: [
        "Grade: A36",
        "Thickness: 0.5-2.0 inch",
        "Width: 48-96 inch",
        "Length: Custom cut available",
        "Finish: Hot-rolled"
      ],
      applications: [
        "Construction",
        "Manufacturing",
        "Infrastructure",
        "Automotive",
        "Energy"
      ],
      features: [
        "High strength and durability",
        "Corrosion resistant",
        "Excellent weldability",
        "Consistent quality",
        "Custom sizing available"
      ]
    }
  },
  // Add more products...
]

