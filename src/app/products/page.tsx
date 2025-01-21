"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen pt-24 bg-[#D5E2F2]">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-[#33333B] mb-4">Our Products</h1>
          <p className="text-lg text-[#3D4E5E]">
            Discover our comprehensive range of products and solutions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sm:max-w-xs"
          />
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="sm:max-w-xs">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-[#CFC4BD] relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-[#33333B]">
                        {product.name}
                      </h3>
                      <span className="px-3 py-1 bg-[#D5E2F2] text-[#5568D9] rounded-full text-sm">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-[#3D4E5E] mb-4">
                      {product.description}
                    </p>
                    <Button className="w-full bg-[#5568D9] hover:bg-[#5568D9]/90">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const categories = [
  { value: "raw-materials", label: "Raw Materials" },
  { value: "agricultural", label: "Agricultural" },
  { value: "industrial", label: "Industrial" },
  { value: "consumer", label: "Consumer Goods" },
  { value: "technology", label: "Technology" },
]

const products = [
  {
    id: "1",
    name: "Industrial Steel",
    category: "raw-materials",
    description: "High-grade industrial steel for manufacturing",
    image: "/placeholder.svg",
    details: {
      specifications: ["Grade: A36", "Thickness: 0.5-2.0 inch", "Width: 48-96 inch"],
      applications: ["Construction", "Manufacturing", "Infrastructure"],
      features: ["High strength", "Corrosion resistant", "Durable"],
    }
  },
  // Add more products...
]

