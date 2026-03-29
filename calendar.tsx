"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Technology", href: "/technology" },
  { name: "Products", href: "/products" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
]

const applicationSectors = [
  { name: "All Applications", href: "/applications" },
  { name: "Indoor Farming", href: "/applications#indoor-farming" },
  { name: "Healthcare", href: "/applications#healthcare" },
  { name: "Food Storage & Drying", href: "/applications#food-storage" },
  { name: "Industrial", href: "/applications#industrial" },
  { name: "Water from Air", href: "/applications#water-from-air" },
  { name: "Greenhouses", href: "/applications#greenhouses" },
  { name: "Data Centers", href: "/applications#data-centers" },
  { name: "Pharmaceutical & Cleanrooms", href: "/applications#pharmaceutical" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-primary">ENERAMA</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-3 lg:hidden">
          <Button asChild size="sm" className="bg-[#E07B39] text-white hover:bg-[#E07B39]/90">
            <Link href="/contact">Start Your Project</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.slice(0, 5).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              Applications
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {applicationSectors.map((sector) => (
                <DropdownMenuItem key={sector.name} asChild>
                  <Link href={sector.href} className="w-full cursor-pointer">
                    {sector.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {navigation.slice(5).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-[#E07B39] text-white hover:bg-[#E07B39]/90">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold text-primary">ENERAMA</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.slice(0, 5).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted min-h-[44px]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Applications with submenu */}
                  <div className="-mx-3 rounded-lg px-3 py-3">
                    <span className="text-base font-medium text-foreground">Applications</span>
                    <div className="mt-2 space-y-1 pl-4">
                      {applicationSectors.map((sector) => (
                        <Link
                          key={sector.name}
                          href={sector.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground min-h-[44px]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sector.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {navigation.slice(5).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted min-h-[44px]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full bg-[#E07B39] text-white hover:bg-[#E07B39]/90">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Start Your Project
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
