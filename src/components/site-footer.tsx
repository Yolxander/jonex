import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-[#33333B] text-white py-12 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Jonex</h3>
            <p className="text-sm text-gray-300">
              Jonex Solutions bridges the gap between Canadian businesses and customers in Latin America, providing high-quality products and services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-sm text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300 mt-2">
              Email: <a href="mailto:info@jonex.ca" className="hover:text-white transition-colors">info@jonex.ca</a>
            </p>
            <p className="text-sm text-gray-300">
              Phone: <a href="tel:+19059943664" className="hover:text-white transition-colors">905 994-3664</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-2">Join our newsletter</p>
            <form className="flex">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="bg-gray-700 text-white px-3 py-2 rounded-l-md w-full"
              />
              <button type="submit" className="bg-[#5568D9] text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">
            Copyright © {new Date().getFullYear()} · Jonex Solutions · All Rights Reserved · Privacy Policy · Cookie Policy
          </p>
        </div>
      </div>
    </footer>
  )
}

