import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../../app/context/CartContext'
import logo from '../../assets/logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Bags', to: '/shop?category=bags' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F2F2F2]/95 backdrop-blur-md">
      <div className="relative mx-auto flex h-24 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-10">
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#111111] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <Link
          to="/"
          className="absolute left-1/2 flex -translate-x-1/2 items-center md:left-0 md:translate-x-0"
          aria-label="Go to homepage"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Achie D Closet"
            className="h-[68px] w-auto object-contain sm:h-[72px] md:h-16"
          />
        </Link>

        <nav className="mx-auto hidden items-center gap-8 md:flex">
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

        <div className="ml-auto flex items-center gap-3">
          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#111111] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label="Open cart"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ShoppingBag size={20} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D4AF37] px-1 text-[10px] font-bold text-[#111111]">
                {cartCount}
              </span>
            )}
          </Link>
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