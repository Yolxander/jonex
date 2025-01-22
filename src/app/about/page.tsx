import { CurvedSection } from "@/components/curved-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
      <CurvedSection className="py-24 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About Jonex Solutions</h1>
          <p className="text-xl mb-8">
            A leading force in international trade, connecting businesses across borders with trust
            and efficiency.
          </p>
        </div>
      </CurvedSection>

      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2000, Jonex Solutions has grown from a small trading company to a global
                leader in import/export solutions. Our journey is marked by continuous innovation
                and unwavering commitment to our clients&#39; success.
              </p>
              <Button>Learn More About Our Journey</Button>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/placeholder.svg"
                alt="Company history timeline"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every aspect of our operations and relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building lasting relationships through transparency and reliability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maintaining the highest standards in all our services and operations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuously improving our solutions to meet evolving market needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

