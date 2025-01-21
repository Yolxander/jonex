"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useActiveSection } from "@/hooks/use-active-section"

export function SiteHeader() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      anchor.addEventListener("click", handleLinkClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        anchor.removeEventListener("click", handleLinkClick)
      })
    }
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#global-presence", label: "Global Presence" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="rounded-[10px] bg-white shadow-lg px-6 py-3 max-w-[660px] w-full mx-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-jonex-logo-red-Photoroom.jpg-0fG2soe2LAo1E4gCFzZWYf3PFAoUXC.jpeg"
              alt="Jonex Solutions"
              className="h-9 w-auto"
            />
            <span className="sr-only">Jonex Solutions</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  (pathname === "/" && link.href === "/") || activeSection === link.href.slice(1)
                    ? "text-[#5568D9]"
                    : "text-[#3D4E5E] hover:text-[#5568D9]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 text-[#3D4E5E]" />
              ) : (
                <Menu className="h-4 w-4 text-[#3D4E5E]" />
              )}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
        {isSearchOpen && (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              // Handle search submission
              setIsSearchOpen(false)
            }}
            className="mt-4"
          >
            <Input
              type="search"
              placeholder="Search..."
              className="w-full"
              autoFocus
              onBlur={() => setIsSearchOpen(false)}
            />
          </form>
        )}
        {isMobileMenuOpen && (
          <nav className="mt-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors",
                  (pathname === "/" && link.href === "/") || activeSection === link.href.slice(1)
                    ? "text-[#5568D9]"
                    : "text-[#3D4E5E] hover:text-[#5568D9]",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

