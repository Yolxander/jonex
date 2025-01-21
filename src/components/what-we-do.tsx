import { ArrowRight, Globe2, ShieldCheck, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive import/export solutions to help businesses expand their reach globally.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Globe2 className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>Global Trade Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Facilitate international trade through our extensive network of partners and expertise in global
                markets.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Truck className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>Logistics Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                End-to-end supply chain solutions ensuring your goods reach their destination efficiently and securely.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ShieldCheck className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>Compliance & Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Expert handling of customs clearance, permits, and international trade documentation.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button variant="outline">
            Learn More About Our Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

