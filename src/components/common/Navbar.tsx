import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Bags', to: '/shop' },
  { label: 'Perfumes', to: '/shop' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FAFAFA]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="font-display text-2xl font-semibold tracking-wide text-[#111111]">
          AchieDCloset
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-[#D4AF37]' : 'text-[#111111] hover:text-[#D4AF37]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#111111] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#111111] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-black/10 bg-[#FAFAFA] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-[#D4AF37]' : 'text-[#111111] hover:text-[#D4AF37]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}