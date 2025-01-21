import { Globe2, ShieldCheck, TrendingUp, Truck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function KeyHighlights() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Jonex</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive solutions for your international trade needs with expertise,
            reliability, and efficiency.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Globe2 className="h-10 w-10 mb-4 text-green-600" />
              <CardTitle>Global Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Extensive network of partners across major markets worldwide
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ShieldCheck className="h-10 w-10 mb-4 text-green-600" />
              <CardTitle>Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Rigorous quality control and compliance with international standards
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Truck className="h-10 w-10 mb-4 text-green-600" />
              <CardTitle>Efficient Logistics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Optimized supply chain solutions for timely delivery
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="h-10 w-10 mb-4 text-green-600" />
              <CardTitle>Market Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                In-depth knowledge of international markets and trade regulations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

