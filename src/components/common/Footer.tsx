import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#F8F3EC]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-10">
        <div>
          <Link to="/" className="font-display text-3xl font-semibold text-[#111111]">
            AchieDCloset
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#5f5f5f]">
            Affordable luxury bags and signature scents curated for elegance, confidence,
            and everyday style.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl text-[#111111]">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#5f5f5f]">
            <Link to="/" className="transition-colors hover:text-[#D4AF37]">
              Home
            </Link>
            <Link to="/shop" className="transition-colors hover:text-[#D4AF37]">
              Shop
            </Link>
            <Link to="/about" className="transition-colors hover:text-[#D4AF37]">
              About
            </Link>
            <Link to="/contact" className="transition-colors hover:text-[#D4AF37]">
              Contact
            </Link>
            <Link to="/cart" className="transition-colors hover:text-[#D4AF37]">
              Cart
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl text-[#111111]">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-[#5f5f5f]">
            <p>Nairobi, Kenya</p>
            <p>WhatsApp orders available daily</p>
            <p>+254702691978</p>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 px-6 py-5 text-center text-sm text-[#7a7a7a] relative">
        <Link
          to="/admin/login"
          aria-label="Admin login"
          title="Admin login"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#111111] transition-colors duration-200 hover:text-[#D4AF37]"
        >
          <Lock size={16} />
        </Link>
        © {new Date().getFullYear()} AchieDCloset. All rights reserved.
      </div>
    </footer>
  )
}