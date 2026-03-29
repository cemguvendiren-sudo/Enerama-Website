import Link from "next/link"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Products", href: "/products" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Applications", href: "/applications" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1B3A6B] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Brand - Always first on mobile */}
          <div className="text-center lg:text-left">
            <span className="text-2xl font-bold">ENERAMA</span>
            <p className="mt-4 text-sm text-white/70">
              Atmospheric Resource Management — Engineered in Turkey — Deployed Globally
            </p>
          </div>
          
          {/* Navigation - Stacked on mobile */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Navigation</h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors min-h-[44px] inline-block py-1">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">More</h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.slice(4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors min-h-[44px] inline-block py-1">
                      {item.name}
                    </Link>
                  </li>
                ))}
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors min-h-[44px] inline-block py-1">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact - Last on mobile */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href="tel:+18333637262" className="hover:text-white transition-colors min-h-[44px] inline-block py-1">+1 833-363-7262</a>
              </li>
              <li>
                <a href="mailto:info@enerama.com" className="hover:text-white transition-colors min-h-[44px] inline-block py-1">info@enerama.com</a>
              </li>
              <li>
                <a href="https://www.enerama.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors min-h-[44px] inline-block py-1">www.enerama.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/50">
            &copy; 2026 Enerama Environmental Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
