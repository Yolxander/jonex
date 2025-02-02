import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProductsSection() {
  return (
    <section id="products" className="py-32 px-4 md:px-8 bg-[#FFE5E5]">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Products</h2>
          <p className="text-lg text-[#3D4E5E] max-w-2xl mx-auto">
            We facilitate trade in a wide range of products across various industries
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="p-0 mb-6">
              <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marta-ortigosa-Xtd1Hq0ESpQ-unsplash.jpg-ObTH08xeHObXjKgMepNnCYSHATahwV.jpeg"
                  alt="Agricultural products - Farmland with tractor and crops"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl">Agricultural Products</CardTitle>
                <p className="text-sm text-[#3D4E5E]">Grains, Seeds, and Fresh Produce</p>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#3D4E5E] text-sm">
                High-quality agricultural products sourced from trusted global suppliers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="p-0 mb-6">
              <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crystal-kwok-XUEdfpPIhXg-unsplash.jpg-kLaGdoKKhAyIrSI6FA0P7bmISQ91LM.jpeg"
                  alt="Industrial equipment - Manufacturing facility with stainless steel machinery"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl">Industrial Equipment</CardTitle>
                <p className="text-sm text-[#3D4E5E]">Machinery and Manufacturing Equipment</p>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#3D4E5E] text-sm">
                State-of-the-art industrial equipment for various manufacturing needs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="p-0 mb-6">
              <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80"
                  alt="Consumer goods"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl">Consumer Goods</CardTitle>
                <p className="text-sm text-[#3D4E5E]">Electronics and Household Items</p>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#3D4E5E] text-sm">
                Wide range of consumer products meeting international quality standards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="p-0 mb-6">
              <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                  alt="Technology products"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl">Technology Solutions</CardTitle>
                <p className="text-sm text-[#3D4E5E]">Software and Hardware Solutions</p>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#3D4E5E] text-sm">
                Cutting-edge technology products and solutions for businesses of all sizes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

