import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-[#33333B] text-white">
      <div className="container max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let&#39;s work together</h2>
            <p className="text-lg text-gray-300 mb-8">
              Get in touch with us and send some basic info about your products.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF0000]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#FF0000]" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <a href="mailto:info@jonex.ca" className="text-gray-300 hover:text-[#FF0000] transition-colors">
                    info@jonex.ca
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF0000]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#FF0000]" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <a href="tel:9059943664" className="text-gray-300 hover:text-[#FF0000] transition-colors">
                    905 994-3664
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF0000]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#FF0000]" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <address className="text-gray-300 not-italic">
                    123 Global Trade Avenue
                    <br />
                    Toronto, ON M5V 2T6
                    <br />
                    Canada
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#33333B] mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="bg-[#FFE5E5] border-none text-[#33333B]" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="bg-[#FFE5E5] border-none text-[#33333B]" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="bg-[#FFE5E5] border-none text-[#33333B] min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-[#FF0000] hover:bg-[#CC0000] text-white">Get in touch!</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

